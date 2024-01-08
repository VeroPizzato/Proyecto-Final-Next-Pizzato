import DetalleOrden from "@/components/orders/DetalleOrden"

const Orders = async ({ params }) => {
    const { id } = params     
   
    return (
        <div>
            <div className="container m-auto mt-6">
                <h1 className="text-4xl text-red-900 my-4 text-center font-mono">Detalle de la compra</h1>
                <DetalleOrden id={id} />
            </div>
        </div>
    )
}

export default Orders
