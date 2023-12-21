"use client"
import { useState } from "react"
import Boton from "@/components/ui/Boton"
import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/firebase/config"
import IrAtras from "../ui/IrAtras"

const createProduct = async (values, file) => {
    const storageRef = ref(storage, values.slug)
    const fileSnapshot = await uploadBytes(storageRef, file)
    const fileURL = await getDownloadURL(fileSnapshot.ref)

    const docRef = doc(db, "productos", values.slug)
    values.price = parseInt(values.price)
    values.stock = parseInt(values.stock)
    return setDoc(docRef, {
        ...values,
        image: fileURL
    }).then(() => console.log("Producto creado exitosamente"))
}

const CreateForm = () => {

    const [values, setValues] = useState({
        title: '',
        description: '',
        stock: 0,
        price: 0,
        type: '',
        slug: ''
    })

    const [file, setFile] = useState(null)

    const [volver, setVolver] = useState(false)
    
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values, file)
        setVolver(true)
    }

    return (
        <main className="container m-auto w-1/3">
            <h1 className="text-4xl text-red-900 my-4 text-center font-mono">Alta Producto</h1>
            <hr />
            <form onSubmit={handleSubmit} className="bg-gray-100 px-8 pt-6 pb-8 mb-4 rounded-xl shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Slug </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="text" placeholder="Slug del producto" value={values.slug} name="slug" onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Nombre </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="text" placeholder="Ingrese nombre del producto" value={values.title} name="title" onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Descripción </label>
                    <textarea className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" rows="5" type="description" placeholder="Descripcion del producto" value={values.description} name="description" onChange={handleChange} required> </textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Imagen </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 file:font-mono file:mr-6" type="file" placeholder="Ingrese imagen del producto" name="image" onChange={(e) => setFile(e.target.files[0])} required/>                   
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Precio </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="number" placeholder="Precio del producto" value={values.price} name="price" onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Stock disponible </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="number" placeholder="Stock disponible del producto" value={values.stock} name="stock" onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono" for="type"> Tipo </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="text" placeholder="Slug del producto" value={values.type} name="type" onChange={handleChange} required />
                </div>

                {volver
                ? <IrAtras className="font-mono text-lg text-red-900 hover:font-boldgit inline-table mb-6"> Volver </IrAtras>
                : <Boton type="submit" className="flex items-center justify-between font-mono text-lg"> Aceptar </Boton>}

            </form>
        </main>
    )
}

export default CreateForm