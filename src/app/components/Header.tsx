import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#b04a5a]/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-3xl font-bold">G</span>
            </div>
            <h1 className="text-xl md:text-3xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Glammed Beauty Hub
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-purple-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-purple-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-purple-600 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-purple-600 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-purple-600 transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-left hover:text-purple-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left hover:text-purple-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-purple-600 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-purple-600 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-purple-600 transition-colors">
              Contact
            </button>
            <Button className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Book Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}