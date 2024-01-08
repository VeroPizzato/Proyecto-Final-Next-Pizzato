import OrderItem from "./OrdenItem";
import { db } from "@/firebase/config"
import { collection, getDocs } from "firebase/firestore"
import { format } from 'date-fns';

const getOrder = async (id) => {
    const ordersRef = collection(db, "orders")
    const querySnapshot = await getDocs(ordersRef)
    var docs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    docs = docs.find(doc => doc.id === id)
    return docs
}

const formatFecha = (date) => {
    const fechaFormateada = format(new Date(date), 'dd-MM-yyyy');
    return fechaFormateada
}

export default async function DetalleOrden({id}) { 
    const order = await getOrder(id)
   
    return (
        <div className="mx-auto flex max-w-screen-lg flex-col gap-9 rounded-lg bg-white p-6">
            <div className="flex flex-col gap-3">
                <h2>GRACIAS POR TU COMPRA!!</h2>
                <div className="flex flex-col items-center justify-between">
                    <p className="text-neutral-500">
                        Número de Orden:{' '}
                        <span className="text-red-900">{id}</span>
                    </p>
                    <p className="text-neutral-500">
                        Fecha Orden:{' '}
                        <span className="text-red-900">
                            {formatFecha(order.fecha)}
                        </span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                {order.items.map((item) => (
                    <OrderItem key={item.id} item={item} />
                ))}
            </div>
            <div className="flex flex-col justify-between gap-6">
                <div>
                    <p className="text-neutral-500">Dirección de envío:</p>
                    <p>
                        {order.cliente.direccion}
                    </p>
                </div>
                <div>
                    <p className="text-neutral-500">Nombre de contacto:</p>
                    <p>
                        {order.cliente.nombre}
                    </p>
                </div>
                <div>
                    <p className="text-neutral-500">Email de contacto:</p>
                    <p>
                        {order.cliente.email}
                    </p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between gap-6">
                    <p className="text-neutral-500">Total:</p>
                    <p>{'$ '}{order.montoTotal}</p>
                </div>
            </div>
        </div>
    )
}
