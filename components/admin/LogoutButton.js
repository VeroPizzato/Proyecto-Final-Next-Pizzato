"use client"
import { useAuthContext } from "@/context/AuthContext"
import Boton from "../ui/Boton"

const LogoutButton = () => {

    const { logout } = useAuthContext()

    return <Boton onClick={logout}>Cerrar sesión</Boton>
   
}

export default LogoutButton