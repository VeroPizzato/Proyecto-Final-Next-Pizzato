"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { label: "Todos", href: "/productos/all", },
    { label: "Monitores", href: "/productos/monitor", },
    { label: "Gabinetes", href: "/productos/gabinete", },
    { label: "Notebooks", href: "/productos/notebook", },
    { label: "Componentes", href: "/productos/componente", }
]

const CategoriesMenu = () => {
    const pathname = usePathname()

    return (
        <aside className="flex flex-col gap-3">
            {links.map(link => (
                    <Link 
                        key={link.label} 
                        href={link.href}
                        className={`${pathname === link.href ? "font-extrabold text-red-900" :''} font-mono text-lg py-2`}
                    >
                        {link.label}
                    </Link>
                ))}
        </aside>
    )
}

export default CategoriesMenu