"use client"
import { useAuthContext } from "@/context/AuthContext"
import Boton from "../ui/Boton"

const LogoutButton = () => {

    const { user, logout } = useAuthContext()

    return (
        <div> {
            user.logged
                ?
                <Boton className="font-mono text-lg text-red-900 hover:font-boldgit ml-15" onClick={logout}>Cerrar sesión</Boton>               
                :
                <></>
        }
        </div>
    )
}

export default LogoutButton
