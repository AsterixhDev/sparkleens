import { useCallback, useEffect, useMemo, useState } from "react";

type ParserFn<T> = (value: string | null) => T;

/**
 * useQueryParams
 * - Returns query parameters from the browser URL.
 * - Reacts to `popstate` and custom `pushstate`/`replacestate` events.
 * - Allows defining a typed structure and optional parsers.
 */
export function useQueryParams<
  T extends Record<string, unknown> = Record<string, string>
>(parsers?: Partial<{ [K in keyof T]: ParserFn<T[K]> }>): T {
  const getParams = useCallback((): T => {
    const url = new URL(window.location.href);
    const result = {} as T;

    for (const [key, value] of url.searchParams.entries()) {
      if (
        parsers &&
        key in parsers &&
        typeof parsers[key as keyof T] === "function"
      ) {
        const parser = parsers[key as keyof T] as ParserFn<T[keyof T]>;
        result[key as keyof T] = parser(value);
      } else {
        result[key as keyof T] = value as unknown as T[keyof T];
      }
    }

    return result;
  }, [parsers]);

  const [params, setParams] = useState<T>(getParams);

  // Listen to browser navigation changes
  useEffect(() => {
    const update = () => setParams(getParams());
    window.addEventListener("popstate", update);

    // Custom push/replace events for SPA updates
    const patchHistory = (method: "pushState" | "replaceState") => {
      const original = window.history[method];
      return function (this: History, ...args: Parameters<typeof original>) {
        const result = original.apply(this, args);
        window.dispatchEvent(new Event(method.toLowerCase()));
        return result;
      };
    };
    window.history.pushState = patchHistory("pushState");
    window.history.replaceState = patchHistory("replaceState");

    window.addEventListener("pushstate", update);
    window.addEventListener("replacestate", update);

    return () => {
      window.removeEventListener("popstate", update);
      window.removeEventListener("pushstate", update);
      window.removeEventListener("replacestate", update);
    };
  }, [getParams]);

  return useMemo(() => params, [params]);
}

/**
 * setQueryParams
 * - Updates the browser query string in a type-safe way.
 */
export function setQueryParams<T extends Record<string, unknown>>(
  params: Partial<T>
) {
  const url = new URL(window.location.href);

  (Object.entries(params) as [keyof T, T[keyof T]][]).forEach(
    ([key, value]) => {
      if (value === undefined || value === null) {
        url.searchParams.delete(String(key));
      } else {
        url.searchParams.set(String(key), String(value));
      }
    }
  );

  window.history.pushState({}, "", url.toString());
  window.dispatchEvent(new Event("pushstate"));
}
