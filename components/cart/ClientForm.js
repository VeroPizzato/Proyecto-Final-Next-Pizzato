"use client"
import { setDoc, updateDoc, doc, Timestamp } from "firebase/firestore"
import { db } from "@/firebase/config"
import Link from "next/link"
import Boton from "../ui/Boton"
import { useState } from "react"
import { useCartContext } from "@/context/CartContext"
import { useAuthContext } from "@/context/AuthContext"
import ValidarNombre from "../ui/ValidarNombre"
import ValidarEmail from "../ui/ValidarEmail"
import DetalleOrden from "./DetalleOrden"

const createOrder = async (values, items, montoTotal) => {

    const order = {
        cliente: values,
        items: items.map(item => ({
            title: item.title,
            price: item.price,
            slug: item.slug,
            quantity: item.quantity
        })),
        fecha: new Date().toISOString(),
        montoTotal: montoTotal
    }

    const docId = Timestamp.fromDate(new Date()).toMillis()
    const orderRef = doc(db, "orders", String(docId))
    await setDoc(orderRef, order)

    return docId
}

const ClientForm = () => {

    const [orderId, setOrderId] = useState()

    const { user } = useAuthContext()

    const { cart, totalItems, totalMonto, clear } = useCartContext()

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })

    const [finalizarCompra, setFinalizarCompra] = useState(false)
    const [cargando, setCargando] = useState(false)

    const cantidadArticulosComprados = totalItems()

    if (cantidadArticulosComprados === 0)
        return (
            <></>
        )

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setCargando(true)
        const nroOrdenCompra = await createOrder(values, cart, totalMonto().toLocaleString())
        setOrderId(nroOrdenCompra)
        setFinalizarCompra(true)
        setCargando(false)
    }

    return (
        <div className="flex justify-center items-center bg-opacity-25 container m-auto mt-4 w-4/6">
            {
                finalizarCompra
                    ?
                    <div className="flex flex-col items-center justify-center font-mono text-lg">
                        <h2 className="text-2xl border-b border-gray-200 pb-4 mb-4 pt-12 font-bold text-center">{`Orden de compra ${orderId} generada exitosamente!!`}</h2>
                        {
                            cart.map(item => {
                                const docRef = doc(db, "productos", item.slug)
                                updateDoc(docRef, {
                                    stock: item.stock - item.quantity
                                })
                            })
                        }
                        <div className="flex flex-row items-center justify-center gap-3">
                            {/* <DetalleOrden id={orderId} /> */}
                            <Boton className="font-mono text-lg text-red-900 hover:font-boldgit inline-table mt-4 mb-4" onClick={() => <DetalleOrden id={orderId} />}>Ver Detalle Orden</Boton>
                            <Link href="/productos/all"><Boton className="font-mono text-lg text-red-900 hover:font-boldgit inline-table mt-4 mb-4" onClick={() => { clear() }}>Volver a la Tienda</Boton></Link>
                        </div>
                    </div>
                    :
                    <div className="container m-auto w-3/6">
                        {cargando
                            ?
                            <div role="status">
                                <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Generando Orden de Compra..</span>
                            </div>
                            :
                            <form onSubmit={handleSubmit} className="bg-white px-8 pt-6 pb-8 mb-4 rounded-xl">
                                <h2 className="font-mono text-xl text-red-900 mb-5">Complete sus datos</h2>
                                <div className="mb-4">
                                    <ValidarNombre value={user.nombre} name="nombre" onChange={handleChange} placeholder="Tu nombre" >Nombre: </ValidarNombre>
                                </div>
                                <div className="mb-4">
                                    <ValidarEmail value={user.email} name="email" onChange={handleChange} placeholder="Tu email" >Email: </ValidarEmail>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono">Direccion: </label>
                                    <input type="direccion" name="direccion" onChange={handleChange} required placeholder="Tu dirección"
                                        className="w-full shadow border border-gray-100 rounded py-2 px-3 text-gray-700 font-mono" />
                                </div>
                                <div className="flex flex-col items-center justify-center ">
                                    <Boton type="submit" className="font-mono text-lg text-red-900 hover:font-boldgit inline-table mt-4 mb-4">Finalizar Compra</Boton>
                                </div>
                            </form>
                        }
                    </div>
            }
        </div >

    )
}

export default ClientForm