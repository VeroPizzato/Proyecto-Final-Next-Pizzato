"use client"
import { useAuthContext } from "@/context/AuthContext"
import Boton from "../ui/Boton"

const LogoutButton = () => {

    const { user, logout } = useAuthContext()

    return (
        <div> {
            user.logged
                ?
                <Boton className="ml-30" onClick={logout}>Cerrar sesión</Boton>
                :
                <></>
        }
        </div>
    )
}

export default LogoutButton
