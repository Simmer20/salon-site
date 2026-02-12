import{ArrowRight, Sparkles} from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
    return(
        <section className='relative overflow-hidden'>
            {/* Background*/}
            <div className='absolute inset-0 bg-linear-to-r from-salon-pink/10 to-salon-gold/5'/>
            <div className='container relative section-padding'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/*Content */}
                    <div className='space-y-6'>
                        <div className='inlinne-flex items-center space-x-2 bg-salon-gold/20 text-salon-navy px-4 py-2 roundwd-full'>
                        <Sparkles size={16}/>
                        <span className='text-sm font-semibold'>Luxury Beauty Salon</span>
                        </div>
                        <h1 className='text-4x1 md:text-5x1 lg:text-6x1 font-bold text-salon-nay'>
                            Experience <span className='text-salon-pink'>Beauty</span> Redefined
                        </h1>
                        <p className='text-lg text-gray-600'>
                            Professional beauty treatments in a luxurious setting. From hairstyling to wig installations and nail services, we offer a wide range of services to help you look and feel your best. Book your appointment today and indulge in the ultimate beauty experience.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <a href="/services" className='btn-primary inline-flex items-center justify-center space-x-2'>
                            <span>View Services</span>
                            <ArrowRight size={18} />
                            </a>
                            <a href = "tel:+254742355191 | +254781680789" className='btn-secondary inline-flex items-center justify-center'>
                                Book Appointment
                            </a>
                        </div>
                    </div>

                    {/*Image */}
                    <div className='relative'>
                        <div className='aspect-square rounded-2x1 overflow-hidden bg-linear-to-br from -salon-pink/20 to-salon-gold/20'>
                            <div className='w-full h-full flex items-center justify-center text-gray-400'>
                                <Image src='/images/heroes/hero-image.jpg' alt='Glammed Beauty Hub Interior' fill className='object-cover' priority/>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className='absolute -top-4 -right-4 w-24 h-24 bg-salon-gold rounded-full -z-10'/>
                    <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-salon-pink/20 rounded-full -z-10'/>
                </div>
            </div>
        </section>
    )
}