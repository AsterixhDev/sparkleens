import { ToastClassnames } from "sonner";

export const toastClassnames: ToastClassnames = {
  toast: "flex items-start gap-3 p-4 rounded-lg shadow-md border border-gray-200 bg-white text-gray-900",
  title: "font-semibold text-sm text-gray-900",
  description: "text-sm text-gray-700",
  loader: "w-4 h-4 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin",
  closeButton: "ml-auto text-gray-500 hover:text-gray-900 focus:outline-none",
  cancelButton: "px-3 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300",
  actionButton: "px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700",
  success: "bg-green-50 border-green-200 text-green-900",
  error: "bg-red-50 border-red-200 text-red-900",
  info: "bg-blue-50 border-blue-200 text-blue-900",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
  loading: "bg-gray-50 border-gray-200 text-gray-900",
  default: "bg-white border-gray-200 text-gray-900",
  content: "flex flex-col gap-1",
  icon: "w-5 h-5 text-current",
};
