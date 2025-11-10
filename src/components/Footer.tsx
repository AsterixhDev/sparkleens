import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const socials = [
    { href: "https://yelp.to/Ju4aTFVE-0", label: "Yelp" },
    { href: "https://www.instagram.com/broomeservice", label: "Instagram" },
  ];
  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div className="md:col-span-2">
            <div className="w-fit flex flex-col leading-tight hover:opacity-90 transition-opacity mb-4">
              <span
                className={
                  "text-[22px] text-center text-white font-extrabold tracking-tight"
                }
              >
                BROOME SERVICE
              </span>

              <span
                className={
                  "text-[18px] font-semibold tracking-[0.25em] text-accent flex items-center justify-center gap-2"
                }
              >
                <span className="h-[2px] bg-accent flex-1"></span>
                SOLUTIONS
                <span className="h-[2px] bg-accent flex-1"></span>
              </span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-white/80 mb-2 max-w-md">
              Serving Metro Atlanta and surrounding areas.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-white/80 mb-6 max-w-md">
              You get dependable cleaners, repeatable results, and visible
              hygiene improvement every visit. We stay consistent, hold
              accountability, and follow performance standards that protect your
              space, your health, and your peace of mind.
            </p>
            <div className="flex gap-4">
              {socials.map(({ href, label }, i) => (
                <SocialIcon
                  key={i}
                  url={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  bgColor="transparent"
                  className="
                    p-2 rounded-full border border-white/20
                    !size-10
                    hover:border-white/40 hover:bg-white/10 transition-all duration-300
                    text-white/80 hover:text-white
                  "
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white/95">
              Quick Links
            </h3>
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

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white/95">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+14702271318"
                  className="hover:text-accent transition-colors duration-300"
                >
                  (470) 227-1318
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:broomeservicesolutions@gmail.com"
                  className="hover:text-accent transition-colors duration-300"
                >
                  broomeservicesolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70 mt-6">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-white">
              Broome Service Solutions
            </span>
            . All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span className="opacity-40">|</span>
            <Link
              to="/terms"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-white/10 rounded-full blur-3xl -z-10" />
    </footer>
  );
};

export default Footer;
