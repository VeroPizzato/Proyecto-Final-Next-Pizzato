import Image from "next/image"
import Boton from "../ui/Boton"
import Link from "next/link"
import Eliminar from "@/public/icons/borrar.png"
import Editar from "@/public/icons/editar.png"

const ProductsTable = async () => {

    const items = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/productos/all`, {
        cache: 'no-store',
    }).then(r => r.json())
    .catch(error => {
        console.error('Fetch error:', error);
    });

    return (
        <>
            <Link href={"/admin/create"}>
                <Boton className="flex justify-between font-mono text-lg my-4">
                    Nuevo
                </Boton>
            </Link>
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
                            items.map((item) => (
                                <tr key={item.slug}>
                                    <td className="font-mono p-2 text-justify">{item.title}</td>
                                    <td className="font-mono p-2">{item.price}</td>
                                    <td className="font-mono p-2">{item.stock}</td>
                                    <td className="font-mono p-2">{item.type}</td>
                                    <td className="p-2">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={80}
                                            height={80}
                                        />
                                    </td>
                                    <td className="font-mono p-2 text-justify">{item.slug}</td>
                                    <td className="font-mono p-2 text-justify">{item.description}</td>
                                    <td className="p-2">
                                        <div className="flex justify-center items-center gap-2">
                                            <Link href={`/admin/edit/${item.slug}`}>
                                                <Image
                                                    src={Editar}
                                                    alt="Icono editar"
                                                    width={30}
                                                    height={30}
                                                />
                                            </Link>
                                            <Link href={`/admin/delete/${item.slug}`}>
                                                <Image
                                                    src={Eliminar}
                                                    alt="Icono eliminar"
                                                    width={30}
                                                    height={30}
                                                />
                                            </Link>
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