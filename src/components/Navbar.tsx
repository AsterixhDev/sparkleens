import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-[#00B3FF]">✧</span>
            <span>Sparkleens</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="nav-link font-medium">Home</Link>
            <Link to="/about" className="nav-link font-medium">About</Link>
            <Link to="/#how-we-work" className="nav-link font-medium">How we work</Link>
            <Link to="/#services" className="nav-link font-medium">Services</Link>
            <Link to="/contact" className="nav-link font-medium">Contact</Link>

            <Button asChild className="bg-[#7CC576] hover:bg-[#7CC576]/90 text-white px-6">
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
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
            <Link to="/#how-we-work" className="nav-link" onClick={closeMenu}>How we work</Link>
            <Link to="/#services" className="nav-link" onClick={closeMenu}>Services</Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          </div>

          <Button asChild className="mt-6 w-full bg-[#7CC576] hover:bg-[#7CC576]/90 text-white">
            <Link to="/get-quote" onClick={closeMenu}>Get Quote</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar