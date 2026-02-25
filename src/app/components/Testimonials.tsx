import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    name: 'Amina Hassan',
    service: 'Butterfly Locs',
    rating: 5,
    text: 'The best salon in Nairobi! My butterfly locs came out absolutely perfect. The team is professional, the space is clean, and the prices are very reasonable. I always come back here!',
    image: 'https://images.unsplash.com/photo-1549236177-cac7f36d08fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150'
  },
  {
    name: 'Faith Wanjiru',
    service: 'Acrylic Nails',
    rating: 5,
    text: 'I have been coming to Glammed Beauty Hub for over a year now. Their nail services are exceptional! My acrylics always last long and look stunning. The nail technicians are so talented.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150'
  },
  {
    name: 'Mercy Akinyi',
    service: 'Cornrows',
    rating: 5,
    text: 'Amazing service! I got cornrows done and they were so neat and lasted for weeks. The location is very convenient on Tom Mboya Street. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150'
  },
  {
    name: 'Grace Njeri',
    service: 'Goddess Braids',
    rating: 5,
    text: 'Love the attention to detail at Glammed Beauty Hub! My goddess braids were beautifully done and the stylists really listen to what you want. Very professional team.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150'
  },
  {
    name: 'Sharon Muthoni',
    service: 'Gel Manicure',
    rating: 5,
    text: 'Clean, hygienic, and great service! I always get my gel manicures here and they never disappoint. The staff is friendly and the atmosphere is very relaxing.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150'
  },
  {
    name: 'Caroline Adhiambo',
    service: 'Spring Twist',
    rating: 5,
    text: 'Excellent work on my spring twists! They are lightweight and look so natural. The team at Glammed Beauty Hub are true professionals. Will definitely be back!',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150'
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
