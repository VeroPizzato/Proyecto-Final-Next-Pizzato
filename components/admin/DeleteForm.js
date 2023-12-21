"use client"
import { doc, deleteDoc  } from "firebase/firestore"
import { db } from "@/firebase/config"
import IrAtras from "../ui/IrAtras"

const deleteProduct = async (slug) => {    
    const docRef = doc(db, "productos", slug)    
    return deleteDoc(docRef).then(() => console.log("Producto eliminado exitosamente"))
}

const DeleteForm = ({item}) => {

    const { title } = item           
  
    return (
        <main className="container m-auto w-1/2">           
            <form className="bg-gray-100 px-8 pt-6 pb-8 mb-4 rounded-xl shadow-lg mt-6">                
                <h1 className="text-4xl text-red-900 my-4 text-center font-mono">Esta seguro de eliminar {title} ? </h1>
                <hr />
                <IrAtras className="font-mono text-lg text-red-900 hover:font-boldgit inline-table mb-6 mr-4" onClick={() => deleteProduct(item.slug)}> Aceptar </IrAtras> 
                <IrAtras className="font-mono text-lg text-red-900 hover:font-boldgit inline-table mb-6"> Cancelar </IrAtras>
            </form>
        </main>
    )
}

export default DeleteForm