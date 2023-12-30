import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const getOrders = async () => {
    const ordersRef = collection(db, "orders")
    const querySnapshot = await getDocs(ordersRef)
    const docs = querySnapshot.docs.map(doc => doc.data())
    // const docs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    return docs
}

const GenerarOrden = async () => {
    const orders = await getOrders()
    return (
        <div className="container m-auto mt-6">
            <h2 className="text-2xl my-10 border-b pb-4">Ordenes</h2>
     
            <table className="w-full text-xs text-left text-gray-600 mb-6">
                <thead className="text-sm text-gray-700 uppercase font-mono text-bold">
                    <tr>
                        <th scope="col" className="px-3 py-2">Id Orden</th>
                        <th scope="col" className="px-3 py-2">Nombre Comprador</th>
                        <th scope="col" className="px-3 py-2">Email Comprador</th>
                        <th scope="col" className="px-3 py-2">Direccion Comprador</th>
                        <th scope="col" className="px-3 py-2">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => (
                            <tr key={order.id}>
                                <td className="font-mono p-2 text-justify">{order.id}</td>
                                <td className="font-mono p-2">{order.cliente.nombre}</td>
                                <td className="font-mono p-2">{order.cliente.email}</td>
                                <td className="font-mono p-2">{order.cliente.direccion}</td>
                                <td className="font-mono p-2">{order.fecha}</td>
                                {/* <td className="font-mono p-2">{new Date($`{order.fecha}`)}</td> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GenerarOrden