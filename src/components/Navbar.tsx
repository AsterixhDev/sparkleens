import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-secondary">
            <Sparkles className="w-6 h-6" />
            <span>Sparkleens</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/how-we-work" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              How we work
            </Link>
            <Link 
              to="/services" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              services
            </Link>
          </div>

          {/* CTA Button */}
          <Link to="/get-quote">
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-6">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
