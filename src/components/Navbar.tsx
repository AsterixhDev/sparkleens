import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useCallback } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import useScrollPercent from "@/hooks/useScrollPercent";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { scrollLength } = useScrollPercent();
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);

  const isScrolled = scrollLength.current > 20;

  const navLink = cn(
    "font-medium nav-link transition-colors hover:text-primary focus-visible:text-primary",
    isHomePage
      ? isScrolled
        ? "text-foreground" // home + scrolled
        : "text-white before:[--color1:_hsl(var(--accent))] hover:text-accent focus-visible:text-accent" // home + top
      : "text-foreground" // other pages
  );

  const menuItems = [
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "w-full fixed top-0 z-50 border-b transition-all duration-300 ease-in-out",
          isHomePage
            ? isScrolled
              ? "bg-background border-border text-foreground shadow-sm" // home + scrolled
              : "bg-transparent text-white border-transparent" // home + top
            : isScrolled
            ? "bg-background border-border text-foreground shadow-sm" // other + scrolled
            : "bg-transparent text-foreground border-transparent", // other + top
          open && "!bg-background !border-border !text-foreground !shadow-sm"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* 🌟 Logo */}
          <Link
            to="/"
            className="flex flex-col leading-tight hover:opacity-90 transition-opacity"
            onClick={closeMenu}
          >
            <span
              className={cn(
                "text-sm text-center font-extrabold tracking-tight",
                isHomePage
                  ? isScrolled
                    ? "text-primary"
                    : "text-white"
                  : "text-primary",
                open && "!text-primary"
              )}
            >
              BROOME SERVICE
            </span>

            <span
              className={
                "text-xs font-semibold tracking-[0.25em] text-accent flex items-center justify-center gap-2"
              }
            >
              <span className="h-[2px] bg-current flex-1"></span>
              SOLUTIONS
              <span className="h-[2px] bg-current flex-1"></span>
            </span>
          </Link>

          {/* 💻 Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map(({ label, to }) => (
              <Link key={to} to={to} className={navLink}>
                {label}
              </Link>
            ))}

            {/* Membership Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "font-medium !p-0 !h-fit !bg-transparent !pb-1.5 text-sm",
                      isHomePage
                        ? isScrolled
                          ? "text-secondary hover:text-primary"
                          : "text-white hover:text-accent"
                        : "!text-primary"
                    )}
                  >
                    Memberships
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-60">
                      {[
                        {
                          title: "BSS Memberships",
                          desc: "Weekly and bi-weekly cleaning plans with exclusive perks",
                          link: "/memberships",
                        },
                        {
                          title: "Airbnb Packages",
                          desc: "Specialized turnover cleaning subscriptions for hosts",
                          link: "/airbnb-subscriptions",
                        },
                      ].map((item) => (
                        <NavigationMenuLink asChild key={item.link}>
                          <Link
                            to={item.link}
                            onClick={closeMenu}
                            className="block select-none space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium">
                              {item.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug">
                              {item.desc}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white px-6"
            >
              <Link to="/get-quote">Get Quote</Link>
            </Button>
          </div>

          {/* 📱 Mobile Menu Toggle */}
          <button
            aria-expanded={open}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* 📱 Mobile Dropdown */}
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
            open ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col space-y-5 text-lg font-medium px-4">
            {menuItems.map(({ label, to }) => (
              <Link key={to} to={to} onClick={closeMenu} className="nav-link">
                {label}
              </Link>
            ))}
            <Link to="/memberships" onClick={closeMenu} className="nav-link">
              BSS Memberships
            </Link>
            <Link
              to="/airbnb-subscriptions"
              onClick={closeMenu}
              className="nav-link"
            >
              Airbnb Packages
            </Link>
            <Button
              asChild
              className="mt-4 w-full bg-accent hover:bg-accent/90 text-white"
            >
              <Link to="/get-quote" onClick={closeMenu}>
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
