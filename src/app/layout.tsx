import type { Metadata } from "next";
import '../styles/index.css';

export const metadata: Metadata = {
    title: 'Glammed Beauty Hub - Professional Hair & Nail Services in Nairobi',
     description: 'Premier beauty salon in Nairobi offering professional hair styling, braiding, and nail services. Located at Magomano Complex, Tom Mboya Street.',
};

export default function RootLayout({
    children,
}:{
    children: React.ReactNode;
}){
    return(
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}