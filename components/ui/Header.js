"use client"
import Image from "next/image"
import logo from "@/public/logo.png"
import Link from 'next/link'
import CartWidget from './CartWidget'
import { usePathname } from "next/navigation"

const links = [
    {
        label: "Inicio",
        href: "/"
    },
    {
        label: "Tienda",
        href: "/productos/all"
    },
    {
        label: "Nosotros",
        href: "/nosotros"
    },
    {
        label: "Contacto",
        href: "/contacto"
    },
]

const Header = () => {

    const pathname = usePathname() 
     
    return (
        <header className="w-full bg-gray-400">
            <div className="container m-auto py-6 flex justify-between items-center">
                <Link href={"/"}>
                    <Image
                        alt="Logo"
                        src={logo}
                        width={200}
                        height={50}
                    />
                </Link>

                <nav className="flex justify-between gap-2 bg-red">
                    {
                        links.map(link => {
                            return <Link
                                key={link.label}
                                href={link.href}
                                className={`${pathname === link.href ? "font-extrabold text-red-900" :''} font-mono text-xl p-3 `}
                            >
                                {link.label}
                            </Link>
                        })                        
                    }
                    <CartWidget />                    
                    
                </nav>
            </div>
        </header>
    )
}

export default Header