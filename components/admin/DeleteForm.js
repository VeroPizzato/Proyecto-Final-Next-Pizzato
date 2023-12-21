"use client"
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "@/firebase/config"
import IrAtras from "../ui/IrAtras"
import Boton from "../ui/Boton"
import { useRouter } from "next/navigation"

const deleteProduct = async (slug) => {
    const docRef = doc(db, "productos", slug)
    return deleteDoc(docRef).then(() => console.log("Producto eliminado exitosamente"))
}

const DeleteForm = ({ item }) => {

    const { title } = item

    const router = useRouter()

    return (
        <main className="container m-auto w-1/2">
            <div className="bg-gray-100 px-8 pt-6 pb-8 mb-4 rounded-xl shadow-lg mt-6">
                <h1 className="text-4xl text-red-900 my-4 text-center font-mono">Esta seguro de eliminar {title} ? </h1>
                <hr />
                <div className="flex flex-row items-center justify-center">
                    <Boton className="font-mono text-lg text-red-900 hover:font-boldgit inline-table mt-6 mr-4" onClick={() => {
                        deleteProduct(item.slug)
                        router.back()
                        router.refresh()
                    }}> Aceptar </Boton>
                    <IrAtras className="font-mono text-lg text-red-900 hover:font-boldgit inline-table mt-6"> Cancelar </IrAtras>
                </div>
            </div>
        </main>
    )
}

export default DeleteForm