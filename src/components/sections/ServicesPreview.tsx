import Link from 'next/link'
import {Scissors, Palette} from 'lucide-react'

const previewServices=[
    {
        name:'Hair Stylying', 
        description: 'Variety of hair styles, wig installations and relaxing hair care treatments',
        icon:Scissors, 
        color: 'text-salon-pink',
    }, 
    {
        name:'Nail Care', 
        description:'Manicures, Pedicures, Nail art',
        icon: Palette,
        color: 'text-salon-gold',
    },
]

export default function ServicesPreview(){
    return(
        <section className='section-padding bg-salon-gray'>
            <div className='container'>
                <div className='text-center mb-12'>
                    <h2 className='text-3x1 md:text-4x1 font-bold text-salon-navy mb-4'>Our Services</h2>
                    <p className='text-gray-600 max-w-2x1 mx-auto'>
                        We offer a wide range of hair and nail services using premium products and the latest techniques. 
                    </p>
                </div>

                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                   {previewServices.map((service)=>(
                    <div key={service.name}
                    className='bg-white rounded-x1 p-6 card-hover shadow-lg'>
                        <div className={`${service.color} mb-4`}>
                            <service.icon size={32}/>
                        </div>
                        <h3 className='text-x1 font-semibold text-salon-navy mb-2'>{service.name}</h3>
                        <p className='text-gray-600 mb-4'>{service.description}</p>
                        <Link href="/services" className='text-salon-pink font-medium hover:underline inline-flex items-center'>
                            Learn More 
                        </Link>
                    </div>
                   ))}
                </div>
                <div className='text-center mt-10'>
                    <Link href="/services" 
                    className='btn-primary inline-flex items-center space-x-2'>
                        <span>View All Services & Pricing</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}