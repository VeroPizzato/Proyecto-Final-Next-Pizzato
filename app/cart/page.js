import CartList from "@/components/cart/CartList"

const Cart = () => {   

    return (
        <div className="container mx-auto my-5">
            <div className="flex flex-wrap">
                <div className="relative flex-grow max-w-full flex-1 px-4 text-center">
                    <h1 className="font-mono text-xl font-bold mb-2">Productos Seleccionados</h1>
                </div>
            </div>

            <CartList/>          

        </div>
    )  
}

export default Cart