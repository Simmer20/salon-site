import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer(){
    return(
        <footer className="bg-salon-navy text-white">
            <div className="container section-padding">
                <div className="grid md:grid-cols-3 gap-8">
                    {/*brand column*/}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="h-12 w-12 rounded-full bg-salon-pink flex items-center justify-center">
                                <span className="text-white font-bold text-2x1">G</span>
                            </div>
                            <span className="text-2x1 font-bold">Glammed Beauty Hub</span>
                        </div>
                        <p className="text-gray-300 mb-6">Luxury Beauty treatments with professional care and attention to detail.</p>
                        <div className="flex space-x-4">
                            <a href='#' className="hover:text-salon-gold transition-colors">
                                <Facebook size={20}/>
                            </a>
                            <a href='#' className="hover:text-salon-gold transition-colors">
                                <Instagram size={20}/>
                            </a>
                        </div>
                    </div>

                    {/*Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href='/services' className="text-gray-300 hover:text-white">Services</Link>
                            </li>
                            <li>
                                <Link href='/gallery' className="text-gray-300 hover:text-white">Gallery</Link>
                            </li>
                            <li>
                                <Link href='/contact' className="text-gray-300 hover:text-white">Contact</Link>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    {/*Contact Info*/}
                    <div> 
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-salon-pink mt-1"/>
                                <span className="text-gray-300">
                                    Magomano Complex, Tom Mboya St, 3rd Floor room 3.1
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                < Phone className="text-salon-gold" size={18}/>
                                <a href='tel:+254742355191 | +254781680789' className="text-gray-300 hover:text-white">
                                    +254 742 355191 | +254 781 680789
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="text-salon-gold" size={18}/>
                                <a href="mailto:info@glammedbeautyhub.com" className="text-gray-300 hover:text-white">
                                    info@glammedbeautyhub.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*Copyright*/}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Glammed Beauty Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
   )
}