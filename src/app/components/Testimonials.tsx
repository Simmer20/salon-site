import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    name: 'Kinya',
    service: 'Butterfly Locs',
    rating: 5,
    text: 'The best salon in Nairobi! My butterfly locs came out absolutely perfect. The team is professional, the space is clean, and the prices are very reasonable. I will be back!',
    image: '/images/gallery/user.png'
  },
  {
    name: 'Faith ',
    service: 'Acrylic Nails',
    rating: 5,
    text: 'I got my nails done here. Beautiful work',
    image: '/images/gallery/user.png'
  },
  {
    name: 'Mercy Akinyi',
    service: 'Cornrows',
    rating: 5,
    text: 'Amazing service! I got cornrows done and they were so neat and lasted for weeks.',
    image: '/images/gallery/user.png'
  },
  {
    name: 'Grace ',
    service: 'Goddess Braids',
    rating: 5,
    text: 'Love the attention to detail at Glammed Beauty Hub! My goddess braids were beautifully done. Very professional team.',
    image: '/images/gallery/user.png'
  },
  {
    name: 'Sharon Muthoni',
    service: 'Gel Manicure',
    rating: 5,
    text: 'Clean, hygienic, and great service! The staff is friendly and the atmosphere is very relaxing.',
    image: '/images/gallery/user.png'
  },
  {
    name: 'Caroline Adhiambo',
    service: 'Spring Twist',
    rating: 5,
    text: 'Excellent work on my spring twists! They are lightweight and look so natural. ',
    image: '/images/gallery/user.png'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-purple-600 mb-4 opacity-50" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-600 text-sm">{testimonial.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
