'use client';

import {Header} from './components/Header';
import {Hero} from './components/Hero';
import {Services} from './components/Services';
import {Gallery} from './components/Gallery';
import {About} from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function Page(){
    return (
        <div className='min-h-screen'>
            <Header />
            <Hero />
            <Services />
            <Gallery />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}