"use client"

import { Geist, Geist_Mono,Kanit,Inter } from "next/font/google";
import "./globals.css";
import Nav from "./nav/page";
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['400', '600'],  
  variable: '--font-kanit', 
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],  
  variable: '--font-inter', 
})

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 100,
      mirror: false,
      easing: "ease-in-out",
    })
  }, [])
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className}`}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
