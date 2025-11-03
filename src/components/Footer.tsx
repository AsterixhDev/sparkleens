import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#00B3FF] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <span className="text-white">✧</span>
              <span>Sparkleens</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              You get reliable cleaning for homes, offices, and commercial spaces. We focus on consistency, accountability, and measurable hygiene standards. Our cleaners follow strict checklists and verified procedures. Clients stick with us because results are uniform each visit.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white/80 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white/80 transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>📍 1289 Little Gateway, East Leopoldo 24929</p>
              <p>📞 <a href="tel:1-275-915-4200" className="hover:text-white/80 transition-colors">1-275-915-4200</a></p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>©{new Date().getFullYear()} <span className="font-medium">Sparkleens</span>. All Rights Reserved</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-white/80 transition-colors">
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
