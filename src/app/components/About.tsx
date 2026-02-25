import { Award, Users, Clock, Heart } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience'
  },
  {
    icon: Users,
    value: '10K+',
    label: 'Happy Clients'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Booking Available'
  },
  {
    icon: Heart,
    value: '100%',
    label: 'Satisfaction'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-linear-to-br from-purple-600 to-pink-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">About Glammed Beauty Hub</h2>
            <p className="text-lg text-gray-700 mb-6">
              Located in the heart of Nairobi on Tom Mboya Street, Glammed Beauty Hub has been the premier 
              destination for exceptional beauty services. Our team of certified professionals is dedicated to 
              bringing out the best in every client.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We specialize in a wide range of hair styling services - from intricate braids and locs to 
              beautiful twists and protective styles. Our nail services include everything from classic 
              manicures to stunning acrylic designs.
            </p>
            <p className="text-lg text-gray-700">
              Visit us at Magomano Complex, 3rd Floor Room 3.1, and experience world-class beauty services 
              with transparent pricing and professional care in a clean, welcoming environment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-pink-600 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl mb-2 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}