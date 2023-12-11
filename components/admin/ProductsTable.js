import Image from "next/image"
import Boton from "../ui/Boton"
import { mockData } from "@/data/products"
import Eliminar from "@/public/icons/borrar.png"
import Editar from "@/public/icons/editar.png"


const ProductsTable = async () => {     

    return (
        <>
            <Boton className="flex justify-between items-center ml-auto font-mono text-lg my-4">
                Crear nuevo
            </Boton>
            <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-gray-600 mb-6">
                    <thead className="text-sm text-gray-700 uppercase font-mono text-bold">
                        <tr>
                            <th scope="col" className="px-3 py-2">Nombre</th>
                            <th scope="col" className="px-3 py-2">Precio</th>
                            <th scope="col" className="px-3 py-2">En stock</th>
                            <th scope="col" className="px-3 py-2">Tipo</th>
                            <th scope="col" className="px-3 py-2">Imagen</th>
                            <th scope="col" className="px-3 py-2">Slug</th>
                            <th scope="col" className="px-3 py-2">Descripción</th>
                            <th scope="col" className="px-3 py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mockData.map((item) => (
                                <tr>
                                    <td className="font-mono p-2 text-justify">{item.title}</td>
                                    <td className="font-mono p-2">{item.price}</td>
                                    <td className="font-mono p-2">{item.stock}</td>
                                    <td className="font-mono p-2">{item.type}</td>
                                    <td className="p-2">
                                        <Image
                                            src={`/imgs/${item.image}`}
                                            alt={item.title}
                                            width={80}
                                            height={80}
                                        />
                                    </td>
                                    <td className="font-mono p-2 text-justify">{item.slug}</td>
                                    <td className="font-mono p-2 text-justify">{item.description}</td>
                                    <td className="p-2">
                                        <div className="flex justify-center items-center gap-2">
                                            <Image 
                                                src={Editar}
                                                alt="Icono editar"
                                                width={30}
                                                height={30}
                                            />
                                            <Image 
                                                src={Eliminar}
                                                alt="Icono eliminar"
                                                width={30}
                                                height={30}
                                            />
                                        </div>                                        
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductsTable