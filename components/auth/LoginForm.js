"use client"
import { useState } from "react"
import Boton from "../ui/Boton"
import { useAuthContext } from "@/context/AuthContext"
import Link from "next/link"

const LoginForm = () => {

    const { registerUser, loginUser, googleLogin } = useAuthContext()
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25">
            <form onSubmit={handleSubmit} className="bg-gray-100 px-8 pt-6 pb-8 mb-4 rounded-xl shadow-lg w-1/3">
            <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Nombre </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="text" placeholder="Tu nombre" value={values.nombre} name="nombre" onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Email </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="email" placeholder="Tu email" value={values.email} name="email" onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Password </label>
                    <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="password" placeholder="Tu password" value={values.password} name="password" onChange={handleChange} required />
                </div>
                <Boton onClick={() => loginUser(values)} className="mr-4">Ingresar</Boton>
                <Boton onClick={() => registerUser(values)} className="mr-4">Registrarme</Boton>
                <Boton onClick={googleLogin} className="mr-4">Ingresar con Google</Boton>
                <Link href={"/"}><Boton> Volver </Boton></Link>
            </form>
        </div>
    )
}

export default LoginForm