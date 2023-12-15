import Image from "next/image"
import Papelera from "@/public/icons/borrar.png"

const CartItem = ({ item }) => {

    return (
        <tr key={item.slug}>
            <td className="flex items-center justify-center">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                />
            </td>
            <td className="align-middle text-center"><h5>{item.title}</h5></td>
            <td className="align-middle text-center"><h5>{item.quantity} x $ {item.price.toLocaleString()}</h5></td>
            <td className="align-middle text-center"><h5>$ {(item.quantity * item.price).toLocaleString()}</h5></td>
            <td className="align-middle text-center"><button className="my-2" onClick={() => { removeItem(item.slug) }} title="Eliminar Producto"><Image src={Papelera} alt="Eliminar Producto" width={25} height={25} /></button></td>
        </tr>

    )
}

export default CartItem