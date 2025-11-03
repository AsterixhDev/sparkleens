import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-[#00B3FF]">✧</span>
            <span>Sparkleens</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="nav-link text-foreground font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="nav-link text-foreground font-medium"
            >
              About
            </Link>
            <Link 
              to="/#how-we-work" 
              className="nav-link text-foreground font-medium"
            >
              How we work
            </Link>
            <Link 
              to="/#services" 
              className="nav-link text-foreground font-medium"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="nav-link text-foreground font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <Button asChild className="bg-[#7CC576] hover:bg-[#7CC576]/90 text-white rounded-md px-6">
              <Link to="/get-quote">
                Get Quote
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="md:hidden"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="px-4 py-6">
                  <div className="flex flex-col space-y-4">
                    <Link 
                      to="/" 
                      className="text-foreground font-medium text-lg py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                    <Link 
                      to="/about" 
                      className="text-foreground font-medium text-lg py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      to="/#how-we-work" 
                      className="text-foreground font-medium text-lg py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      How we work
                    </Link>
                    <Link 
                      to="/#services" 
                      className="text-foreground font-medium text-lg py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </Link>
                    <Link 
                      to="/contact" 
                      className="text-foreground font-medium text-lg py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                  <DrawerClose className="mt-6 w-full">
                    <Button 
                      className="w-full bg-[#7CC576] hover:bg-[#7CC576]/90 text-white rounded-md"
                    >
                      Close Menu
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
