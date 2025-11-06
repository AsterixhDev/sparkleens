import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-primary text-white overflow-hidden">

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-2xl font-semibold mb-4 tracking-wide">
              <span className="text-white/90">✧</span>
              <span className="drop-shadow-sm">Broome Service Solutions</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-white/80 mb-6 max-w-md">
              Reliable cleaning for homes, offices, and commercial spaces.
              We focus on consistency, accountability, and measurable hygiene.
              Our cleaners follow strict checklists to deliver the same
              spotless results—every single visit.
            </p>
            <div className="flex gap-4">
              {[
                { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
                { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn" },
                { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
              ].map(({ href, Icon, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    p-2 rounded-full border border-white/20
                    hover:border-white/40 hover:bg-white/10 transition-all duration-300
                    text-white/80 hover:text-white
                  "
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white/95">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="
                      transition-colors duration-300
                      text-white/80 hover:text-white
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white/95">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span>1289 Little Gateway, East Leopoldo 24929</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:1-275-915-4200"
                  className="hover:text-accent transition-colors duration-300"
                >
                  1-275-915-4200
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:support@broomesolutions.com"
                  className="hover:text-accent transition-colors duration-300"
                >
                  support@broomesolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-12 pt-8 border-t border-white/15" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70 mt-6">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-white">Broome Service Solutions</span>.{" "}
            All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="opacity-40">|</span>
            <Link to="/terms" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative blurred shapes */}
      <div className="absolute top-10 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-white/10 rounded-full blur-3xl -z-10" />
    </footer>
  );
};

export default Footer;
