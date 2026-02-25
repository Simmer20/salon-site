import { Scissors, Sparkles, Crown } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const hairServices = {
  basic: [
    { name: 'Wash & Blow Dry (Short)', price: 300 },
    { name: 'Wash & Blow Dry (Full)', price: 400 },
    { name: 'Treatment Leave-in', price: 600 },
    { name: 'Undoing Hair', price: 200 }
  ],
  styles: [
    { name: 'Cornrows', price: 1000 },
    { name: 'Crochet/Braids Box', price: 1500 },
    { name: 'Twist Braids', price: 1500 },
    { name: 'Half Fine Braids', price: 1400 },
    { name: 'Half Big Twist', price: 1600 },
    { name: 'Stitch Lines', price: 1500 },
    { name: 'Island Twist', price: 2000 },
    { name: 'Twist Out', price: 1000 },
    { name: 'Goddess/Boho', price: 1800 },
    { name: 'Spring Twist/Passion', price: 3000 },
    { name: 'Sasha Locs', price: 3500 },
    { name: 'Mega Twist/Artificial', price: 3000 },
    { name: 'Ombre Braids', price: 1600 },
    { name: 'Track & Leaving', price: 1000 },
    { name: 'French Curls', price: 2000 },
    { name: 'Havana Curls Indian', price: 2000 },
    { name: 'Butterfly Locs', price: 4000 },
    { name: 'Artificial Locs', price: 3000 },
    { name: 'Boho/CI Locs', price: 1000 }
  ],
  addons: [
    { name: 'Extension', price: 300 },
    { name: 'Barrel Ends', price: 100 }
  ]
};

const nailServices = {
  gel: [
    { name: 'Gel Plain', price: 500 },
    { name: 'Gel & Tips', price: 700 },
    { name: 'Nail Art', price: 900 }
  ],
  pedicure: [
    { name: 'Pedicure Plain', price: 500 },
    { name: 'Pedicure + Gel', price: 1000 },
    { name: 'Pedicure + Tip', price: 1500 }
  ],
  premium: [
    { name: 'French Tips', price: 800 },
    { name: 'Builder Gel', price: 1000 },
    { name: 'Builder Tips', price: 1500 },
    { name: 'Acrylics Toe', price: 2500 },
    { name: 'Acrylics', price: 2000 },
    { name: 'Gum Gel', price: 1800 },
    { name: 'Gum Gel Refill', price: 2500 },
    { name: 'Sculpting', price: 1500 }
  ],
  addons: [
    { name: 'Charms', price: 50 },
    { name: 'Soak Off', price: 300 },
    { name: 'Henna', price: 200 },
    { name: 'Nail Art Each', price: 50 },
    { name: 'Tip Repair', price: 150 }
  ]
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Our Services & Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional beauty services with transparent pricing
          </p>
        </div>

        <Tabs defaultValue="hair" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="hair" className="text-lg">Hair Services</TabsTrigger>
            <TabsTrigger value="nails" className="text-lg">Nail Services</TabsTrigger>
          </TabsList>

          <TabsContent value="hair">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <Scissors className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl">Hair Care</h3>
                  </div>
                  <div className="space-y-3">
                    {hairServices.basic.map((service, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700">{service.name}</span>
                        <span className="font-semibold text-purple-600">KES {service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl">Add-ons</h3>
                  </div>
                  <div className="space-y-3">
                    {hairServices.addons.map((service, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700">{service.name}</span>
                        <span className="font-semibold text-purple-600">KES {service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl">Hair Styles</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-8">
                    {hairServices.styles.map((service, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700">{service.name}</span>
                        <span className="font-semibold text-purple-600">KES {service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-gray-500 text-center mt-6">
            Additional charges may apply for extra length, size, or similar add-ons.
            </p>
          </TabsContent>

          <TabsContent value="nails">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4 text-purple-600">Gel Services</h3>
                  <div className="space-y-3">
                    {nailServices.gel.map((service, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700">{service.name}</span>
                        <span className="font-semibold text-purple-600">KES {service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4 text-purple-600">Pedicure Services</h3>
                  <div className="space-y-3">
                    {nailServices.pedicure.map((service, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700">{service.name}</span>
                        <span className="font-semibold text-purple-600">KES {service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4 text-purple-600">Premium Nail Services</h3>
                  <div className="space-y-3">
                    {nailServices.premium.map((service, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700">{service.name}</span>
                        <span className="font-semibold text-purple-600">KES {service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4 text-purple-600">Add-ons</h3>
                  <div className="space-y-3">
                    {nailServices.addons.map((service, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700">{service.name}</span>
                        <span className="font-semibold text-purple-600">KES {service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}