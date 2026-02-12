'use client'

import { MessageCircle } from "lucide-react"
import{use, useState} from 'react'

export default function WhatsAppButton(){
    const [isHovered, setIsHovered] = useState(false)

    const phoneNumber = '0742355191'
    const message= 'Hello Glammed Beauty Hub, I would like to book an appointment.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return(
        <a 
        href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50"
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}>
            <div className="relative">
                {/*floating button*/}
                <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110">
                    <MessageCircle size={24}/>
                </div>
                {/*tooltip*/}
                {isHovered && (
                    <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap">
                        Message us on WhatsApp
                    </div>
                )}
            </div>
        </a>
    )
}