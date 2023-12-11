"use client"
import { useState } from "react"
import Boton from "@/components/ui/Boton"

const CreateForm = () => {

    const [values, setValues] = useState({ 
        title: '', 
        description: '', 
        stock: 0,
        price: 0, 
        type: '', 
        slug: '' 
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values, file)
    }

    return (
        <main className="container m-auto max-w-md">
            <h1 className="text-4xl text-red-900 my-4 text-center font-mono">Alta Producto</h1>
            <hr />
            <form className="bg-gray-100 px-8 pt-6 pb-8 mb-4 rounded-xl shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono" for="slug"> Slug </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="text" placeholder="Slug del producto" value={values.slug} name="slug" onChange={handleChange}required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono" for="title"> Nombre </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="text" placeholder="Ingrese nombre del producto" value={values.title} name="title" onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono" for="description"> Descripción </label>
                    <textarea className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" rows="5" type="description" placeholder="Descripcion del producto" value={values.description} name="description" onChange={handleChange}required> </textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono" for="image"> Imagen </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="file" placeholder="Ingrese imagen del producto" value={values.image} name="image" onChange={(e) => setFile(e.target.files[0])} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono" for="price"> Precio </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="text" placeholder="Precio del producto" value={values.price} name="price" onChange={handleChange}required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono" for="stock"> Stock disponible </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="text" placeholder="Stock disponible del producto" value={values.stock} name="stock" onChange={handleChange}required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono" for="type"> Tipo </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="text" placeholder="Slug del producto" value={values.type} name="type" onChange={handleChange}required />
                </div>         

                <Boton type="submit" className="flex items-center justify-between font-mono text-lg"> Aceptar </Boton>

            </form>
        </main>        
    )
}

export default CreateForm