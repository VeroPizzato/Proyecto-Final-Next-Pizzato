import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">   
            <CartProvider>     
              <Header />
              {children}
              <Footer />  
            </CartProvider>           
        </div> 
      </body>
    </html>
  )
}


