"use client"
import { useCartContext } from "@/context/CartContext"
import Link from "next/link"
import CartItem from "./CartItem"
import Boton from "../ui/Boton"

const CartList = () => {

    const { cart, clear, removeItem, totalItems, totalMonto } = useCartContext();
    if (totalItems() === 0) {
        return (
            <div className="container mx-auto my-5">
                <div className="flex flex-wrap ">
                    <div className="relative flex-grow max-w-full flex-1 px-4 text-center">
                        <h1 className="font-mono text-xl">No hay productos en el carrito</h1>
                        <Link href={"/"}>
                            <Boton className="flex justify-between items-center ml-auto font-mono text-lg my-4">
                                Volver a Home
                            </Boton>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap">
            <div className="relative flex-grow max-w-full flex-1 px-4">
                <table className="min-w-full bg-gray-100 border border-gray-300">
                    <tbody>
                        <tr>
                            <td className="align-middle text-end" colSpan={5} ><Boton className="font-mono text-lg text-red-900 hover:font-boldgit inline-table mt-4 mr-6" onClick={() => { clear() }} title="Vaciar Carrito">Vaciar Carrito</Boton></td>
                        </tr>
                        {
                            cart.map(item => (
                                <CartItem key={item.slug} item={item}></CartItem>
                            ))
                        }
                        <tr>
                            <td colSpan={5} className="align-middle text-end"><h4 className="font-mono text-lg mr-6">Total de la compra: $ {totalMonto().toLocaleString()}</h4></td>
                        </tr>                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartList