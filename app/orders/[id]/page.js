"use client"
import DetalleOrden from "@/components/orders/DetalleOrden"
import Boton from "@/components/ui/Boton"
import { useCartContext } from "@/context/CartContext"
import Link from "next/link"

const Orders = async ({ params }) => {
    const { id } = params

    const { clear } = useCartContext()

    return (
        <div>
            <div className="container m-auto mt-6">
                <Link href="/productos/all"><Boton className="font-mono text-lg text-red-900 hover:font-boldgit inline-table mt-4 mb-4" onClick={() => { clear() }}>Volver a la Tienda</Boton></Link>
                <h1 className="text-4xl text-red-900 my-4 text-center font-mono">Detalle de la compra</h1>
                <DetalleOrden id={id} />
            </div>
        </div>
    )
}

export default Orders
