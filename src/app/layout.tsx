import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/shared/WhatsAppButton'
import React from 'react'

const inter = Inter({
    subsets: ['latin'], 
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'Glammed Beauty Hub | Professional Beauty Services',
    description: 'Experience luxury beauty treatments at Glammed Beauty Hub. Professional hair styling, wig installations, manicures, pedicures, and more,',
    keywords: ['salon', 'beauty', 'hair styling', 'wiginstallations', 'manicures', 'pedicures'],
    authors:[{name: 'Glammed Beauty Hub '}], 
    openGraph:{
        type: 'website', locale:'en_US', url: 'https://www.glammedbeautyhub.com',
        title: 'Glammed Beauty Hub | Professional Beauty Services', description: 'Experience luxury beauty treatments at Glammed Beauty Hub', 
        siteName: 'Glammed Beauty Hub',
        images:['/images/logo.jpeg'],
    }, 
    robots: {
        index: true, follow:true, 
        googleBot:{
            index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children, 
}:{
    children: React.ReactNode
}) {
    return(
        <html lang='en' className={inter.variable}>
            <body className='min-h-screen flex flex-col'>
                <Header />
                <main className='grow'>
                    {children}
                </main>
                <Footer/>
                <WhatsAppButton/>
            </body>
        </html>
    )
}
