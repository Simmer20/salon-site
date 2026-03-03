import { Button } from './ui/button';
import { Star, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';


// Hero image carousel with responsive positioning
const heroImages = [
   { 
    url: '/images/gallery/logo.jpeg',
    position: 'center 35%', 
    mobilePosition: 'center 30%'
  },
  { 
    url: '/images/gallery/salon2.jpeg',
    position: 'center 30%',
    mobilePosition: 'center 25%'
  },
  { 
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop',
    position: 'center center',
    mobilePosition: 'center 40%' 
  },
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Image carousel with crossfade and responsive positioning */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={`Hero background ${index + 1}`}
            className="w-full h-full object-cover"
            style={{
              objectPosition: isMobile ? image.mobilePosition : image.position,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-rose-50/95"></div>
        </div>
      ))}
      
      {/* Smooth wave transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-24 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
                fill="rgba(255, 241, 242, 0.5)" fillOpacity="0.5"/>
          <path d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
                fill="#fff1f2"/>
        </svg>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-32 md:bottom-40 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'w-8 bg-rose-400' 
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Your Beauty,<br />Elevated
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed font-light max-w-2xl">
            Experience premium hair styling and nail artistry in Nairobi's heart. 
            Where expert care meets transparent pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400 hover:from-rose-600 hover:via-rose-500 hover:to-amber-500 text-white text-base px-10 py-6 shadow-xl hover:shadow-2xl transition-all font-semibold"
              onClick={scrollToContact}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Book Your Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/90 text-white hover:bg-white hover:text-rose-600 text-base px-10 py-6 backdrop-blur-sm bg-white/10 font-semibold transition-all"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}