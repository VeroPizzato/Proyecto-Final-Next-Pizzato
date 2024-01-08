"use client"
import { useState } from "react"
import Boton from "@/components/ui/Boton"
import { doc, updateDoc  } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/firebase/config"
import IrAtras from "../ui/IrAtras"

const updateProduct = async (slug, values, file) => {
    let fileURL = values.image
   
    if (file){
        const storageRef = ref(storage, slug)
        const fileSnapshot = await uploadBytes(storageRef, file)
        fileURL = await getDownloadURL(fileSnapshot.ref)        
    }
   
    const docRef = doc(db, "productos", slug)   
    return updateDoc(docRef, {
        title: values.title,
        description: values.description,
        stock: Number(values.stock),
        price: Number(values.price),
        type: values.type,
        image: fileURL
    }).then(() => console.log("Producto actualizado exitosamente"))
}

const EditForm = ({item}) => {

    const { title, description, stock, price, type, image } = item

    const [values, setValues] = useState({
        title,
        description,
        stock,
        price,
        type,
        image        
    })

    const [file, setFile] = useState(null)

    const [volver, setVolver] = useState(false)
    const [cargando, setCargando] = useState(false)
    
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
 
    const handleSubmit = async (e) => {
        e.preventDefault()   
        setCargando(true)     
        await updateProduct(item.slug, values, file)
        setVolver(true)
        setCargando(false)
    }
       
    return (
        <main className="container m-auto w-1/2">
            <h1 className="text-4xl text-red-900 my-4 text-center font-mono">Edicion Producto</h1>
            <hr />
            <form onSubmit={handleSubmit} className="bg-gray-100 px-8 pt-6 pb-8 mb-4 rounded-xl shadow-lg">                
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Nombre </label>
                    <input className="w-full shadow border border-gray-100 rounded py-2 px-3 text-gray-700 font-mono" type="text" placeholder="Ingrese nombre del producto" value={values.title} name="title" onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Descripción </label>
                    <textarea className="w-full shadow border border-gray-100 rounded py-2 px-3 text-gray-700 font-mono" rows="5" type="description" placeholder="Descripcion del producto" value={values.description} name="description" onChange={handleChange} required> </textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Imagen </label>
                    <input className="w-full shadow border border-gray-100 rounded py-2 px-3 text-gray-700 file:font-mono file:mr-6" type="file" placeholder="Ingrese imagen del producto" name="image" onChange={(e) => setFile(e.target.files[0])} />  
                </div>
                <div className="mb-4">                    
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono" type="number" > Precio </label>
                    <input className="w-full shadow border border-gray-100 rounded py-2 px-3 text-gray-700 font-mono" type="number" placeholder="Precio del producto" value={values.price} name="price" onChange={handleChange} required />
                </div>
                <div className="mb-4">                    
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono" type="number" > Stock disponible </label>
                    <input className="w-full shadow border border-gray-100 rounded py-2 px-3 text-gray-700 font-mono" type="number" placeholder="Stock disponible del producto" value={values.stock} name="stock" onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Tipo </label>
                    <input className="w-full shadow border border-gray-100 rounded py-2 px-3 text-gray-700 font-mono" type="text" placeholder="Tipo del producto" value={values.type} name="type" onChange={handleChange} required />                  
                </div>
                
                <div className="flex items-center justify-center font-mono text-lg">
                    {
                        volver
                            ?
                            <div className="flex flex-col items-center justify-center font-mono text-lg">
                                <h2 className="text-2xl border-b border-gray-200 pb-4 mb-4 pt-6 font-bold text-center">Producto modificado con exito!!</h2>
                                <IrAtras className="font-mono text-lg text-red-900 hover:font-boldgit inline-table mb-6"> Volver </IrAtras>
                            </div>
                            :
                            <div>
                                {cargando
                                    ?
                                    <div role="status">
                                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span className="sr-only">Cargando..</span>
                                    </div>
                                    :
                                    <div className="flex flex-row items-center justify-center">
                                        <Boton type="submit" className="font-mono text-lg mr-4 mb-6"> Aceptar </Boton>
                                        <IrAtras className="font-mono text-lg text-red-900 hover:font-boldgit inline-table mb-6"> Volver </IrAtras>
                                    </div>
                                }
                            </div>
                    }
                </div>
            </form>
        </main>
    )
}

export default EditForm