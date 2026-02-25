import { Button } from './ui/button';
import { Star } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/images/heroes/hero.jpeg" 
            alt="Hero background" 
            className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">        
          <h2 className="text-7xl md:text-6xl lg:text-5xl text-white mb-6">
            Welcome to Glammed Beauty Hub
          </h2>
          
          <p className="text-xl text-gray-200 mb-8">
            Professional hair styling and nail artistry services in the heart of Nairobi. 
            Transform your look with our expert team at Tom Mboya Street.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8"
              onClick={scrollToContact}
            >
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-pink-600 hover:bg-white hover:text-purple-600 text-lg px-8"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}