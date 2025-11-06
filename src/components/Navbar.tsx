import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold hover:opacity-90 transition-opacity"
          >
            <span className="text-primary">✧</span>
            <span>Broome Service Solutions</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/about"
              className="nav-link font-medium hover:text-primary transition-colors"
            >
              About
            </Link>

            <Link
              to="/services"
              className="nav-link font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="nav-link font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
            
            {/* Dropdown Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">
                    Memberships
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-60">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/memberships"
                          onClick={closeMenu}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">
                            BSS Memberships
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug">
                            Weekly and bi-weekly cleaning plans with exclusive perks
                          </p>
                        </Link>
                      </NavigationMenuLink>

                      <NavigationMenuLink asChild>
                        <Link
                          to="/airbnb-subscriptions"
                          onClick={closeMenu}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Airbnb Packages</div>
                          <p className="line-clamp-2 text-sm leading-snug">
                            Specialized turnover cleaning subscriptions for hosts
                          </p>
                        </Link>
                      </NavigationMenuLink>
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

          {/* Mobile Menu Button */}
          <button
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            open ? "max-h-[500px] pt-4 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-5 text-lg font-medium">
            <Link to="/about" onClick={closeMenu} className="nav-link">
              About
            </Link>
            <Link to="/services" onClick={closeMenu} className="nav-link">
              Services
            </Link>
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
            <Link to="/contact" onClick={closeMenu} className="nav-link">
              Contact
            </Link>
          </div>

          <Button
            asChild
            className="mt-6 w-full bg-accent hover:bg-accent/90 text-white"
          >
            <Link to="/get-quote" onClick={closeMenu}>
              Get Quote
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
