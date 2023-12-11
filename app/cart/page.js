"use client"
import { useCartContext } from "@/context/CartContext"
import Papelera from "@/public/icons/borrar.png"
import Boton from "@/components/ui/Boton"
import Image from "next/image"
import Link from "next/link"

const Cart = () => {

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
        <div className="container mx-auto my-5">
            <div className="flex flex-wrap">
                <div className="relative flex-grow max-w-full flex-1 px-4 text-center">
                    <h1 className="font-mono text-xl font-bold mb-2">Productos Seleccionados</h1>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="relative flex-grow max-w-full flex-1 px-4">
                    <table className="min-w-full bg-gray-100 border border-gray-300">                           
                        <tbody>
                            <tr>
                                <td className="align-middle text-end" colSpan={5} ><Boton className="mt-4 mr-6" onClick={() => {clear()}} title="Vaciar Carrito">Vaciar Carrito</Boton></td>
                            </tr> 
                            {
                                cart.map(item => (
                                    <tr key={item.slug}>
                                        <td className="flex items-center justify-center">
                                            <Image 
                                                src={`/imgs/${item.image}`}
                                                alt={item.title}
                                                width={100}  
                                                height={100}                                             
                                            />                                            
                                        </td>  
                                        <td className="align-middle text-center"><h5>{item.title}</h5></td>                                
                                        <td className="align-middle text-center"><h5>{item.quantity} x $ {item.price.toLocaleString()}</h5></td>
                                        <td className="align-middle text-center"><h5>$ {(item.quantity * item.price).toLocaleString()}</h5></td>
                                        <td className="align-middle text-center"><button className="my-2" onClick={() => { removeItem(item.slug) }} title="Eliminar Producto"><Image src={Papelera} alt="Eliminar Producto" width={25} height={25}/></button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={5} className="align-middle text-end"><h4 className="font-mono text-lg mr-6">Total de la compra: $ {totalMonto().toLocaleString()}</h4></td>  
                            </tr>
                            <tr>
                                <td className="align-middle text-end" colSpan={5}><Boton className="mt-6 mb-4 mr-6"> Finalizar Compra </Boton></td>       
                            </tr> 
                        </tbody>
                    </table>                
                </div>
            </div>
        </div>
    )  
}

export default Cart