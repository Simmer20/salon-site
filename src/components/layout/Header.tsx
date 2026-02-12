'use client'

import{useState } from 'react'
import Link from 'next/link'
import {Menu, X, Phone} from 'lucide-react'

const navItems=[
    {name: 'Home', href:'/'},
    {name: 'Services', href:'/services'},
    {name: 'Gallery', href:'/gallery'},
    {name: 'Contact', href:'/contact'},
]

export default function Header(){
    const[isMenuOpen, setIsMenuOpen]= useState(false)

    return(
        <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60'>
            <div className='container'>
                <div className='flex h-16 items-center justify-between'>
                    {/*Logo*/}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className='h-10 w-10 rounded-full bg-salon-pink flex items-center justify-center'>
                            <span className='text-red-500 font-bold text-x1'>G</span>
                        </div>
                        <span className='text-x1 font-bold text-salon-navy hidden sm:inline-block'>Glammed Beauty Hub</span>
                    </Link>
                    {/*Desktop Navigation*/}
                    <nav className='hidden md:flex items-center space-x-8'>
                        {navItems.map((item)=>(
                            <Link key={item.name} href={item.href} className='text-sm font-medium text-gray-700 hover:text-salon-pink transition-colors'>
                                {item.name}
                            </Link>
                        ))}
                        <a href='tel:+254742355191 | +254781680789'
                            className='btn-primary flex items-center space-x-2'>
                                <Phone size={16}/> <span>Book Now</span>
                            </a>
                    </nav>
                    {/*Mobile Menu Button*/}
                    <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>

                {/*Mobile Navigation*/}
                {isMenuOpen && (
                    <div className='md:hidden border-t'>
                        <div className='space-y-1 px-4 pb-3 pt-2'>
                            {navItems.map((item)=>(
                                <Link key={item.name} href = {item.href} className='block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-salon-pink' onClick={()=> setIsMenuOpen(false)}>
                                    {item.name}</Link>
                            ))}
                            <a href = 'tel:+254742355191 | +254781680789' className='block rounded-lg px-3 py-2 text-base font-medium bg-salon-pink text-white hover:bg-pink-600'>
                                <div className='flex items-center space-x-2'>
                                    <Phone size={16}/>
                                    <span>Call to Book</span>
                                </div>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}