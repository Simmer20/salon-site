import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Magomano Complex, Tom Mboya St', '3rd Floor, Room 3.1', 'Nairobi, Kenya']
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+254 742 355 191', '+254 781 680 789']
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Mon-Sat: 8AM - 10PM', 'Sunday: 11AM - 9PM']
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your look? Reach out to us and book your appointment today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="mb-2">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-sm text-gray-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8158636831614!2d36.82120931475394!3d-1.2833689359846562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6d347de7b%3A0x5b2f5b5c5d5d5d5d!2sTom%20Mboya%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1707404611000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="First Name" />
                  </div>
                  <div>
                    <Input placeholder="Last Name" />
                  </div>
                </div>
                <div>
                  <Input type="email" placeholder="Email Address" />
                </div>
                <div>
                  <Input type="tel" placeholder="Phone Number" />
                </div>
                <div>
                  <Input placeholder="Preferred Service" />
                </div>
                <div>
                  <Textarea 
                    placeholder="Tell us about your desired appointment..." 
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}