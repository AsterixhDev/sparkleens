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
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-primary">✧</span>
            <span>Broome Service Solutions</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/about" className="nav-link font-medium">About</Link>
            <Link to="/services" className="nav-link font-medium">Services</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">Memberships</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-60">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/memberships"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={closeMenu}
                        >
                          <div className="text-sm font-medium">BSS Memberships</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Weekly and bi-weekly cleaning plans with exclusive perks
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/airbnb-subscriptions"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={closeMenu}
                        >
                          <div className="text-sm font-medium">Airbnb Packages</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Specialized turnover cleaning subscriptions for hosts
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/contact" className="nav-link font-medium">Contact</Link>

            <Button asChild className="bg-accent hover:bg-accent/90 text-white px-6">
              <Link to="/get-quote">Get Quote</Link>
            </Button>
          </div>

          <button
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-[500px] pt-4 pb-6" : "max-h-0"}`}
        >
          <div className="flex flex-col space-y-5 text-lg font-medium">
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
            <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
            <Link to="/memberships" className="nav-link" onClick={closeMenu}>BSS Memberships</Link>
            <Link to="/airbnb-subscriptions" className="nav-link" onClick={closeMenu}>Airbnb Packages</Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          </div>

          <Button asChild className="mt-6 w-full bg-accent hover:bg-accent/90 text-white">
            <Link to="/get-quote" onClick={closeMenu}>Get Quote</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar