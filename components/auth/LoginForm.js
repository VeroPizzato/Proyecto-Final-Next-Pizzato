"use client"
import { useState } from "react"
import Boton from "../ui/Boton"
import { useAuthContext } from "@/context/AuthContext"
import Link from "next/link"
import ValidarNombre from "../ui/ValidarNombre"
import ValidarEmail from "../ui/ValidarEmail"

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

    const [isValidName, setIsValidName] = useState(true);

    const validarNombre = () => {
        // Validar el nombre
        const isValid = /^[a-z A-Z]+$/.test(values.nombre);        
        setIsValidName(isValid);
        console.log(isValidName)
    };    

    const handleSubmit = async (e) => {
        e.preventDefault()     
        
        validarNombre();             
        
        // Verifico si el evento proviene del botón "Registrarme"
        if (e.nativeEvent.submitter && e.nativeEvent.submitter.name === "registrarmeButton" && isValidName) {
            registerUser(values);
        }
    }

    return (
        <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25">
            <form onSubmit={handleSubmit} className="bg-gray-100 px-8 pt-6 pb-8 mb-4 rounded-xl shadow-lg w-1/2">
                <div className="mb-4">                    
                    <ValidarNombre value={values.nombre} name="nombre" onChange={handleChange} placeholder="Tu nombre" >Nombre: </ValidarNombre>
                </div>
                <div className="mb-4">                   
                    <ValidarEmail value={values.email} name="email" onChange={handleChange} placeholder="Tu email" >Email: </ValidarEmail>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-mono"> Password </label>
                    <input className="w-full shadow border border-gray-100 rounded py-2 px-3 text-gray-700 font-mono" type="password" placeholder="Tu password" value={values.password} name="password" onChange={handleChange} required />
                </div>
                <div className="flex justify-center">
                    <Boton onClick={() => loginUser(values)} className="mr-4">Ingresar</Boton>
                    <Boton type="submit" name="registrarmeButton" className="mr-4">Registrarme</Boton>
                    <Boton onClick={googleLogin} className="mr-4">Ingresar con Google</Boton>
                    <Link href={"/"}><Boton> Volver </Boton></Link>
                </div>
            </form >
        </div >
    )
}

export default LoginForm