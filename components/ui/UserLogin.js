import Login from "@/public/icons/user.png"
import Link from "next/link"
import Image from "next/image"
import { useAuthContext } from "@/context/AuthContext"

const UserLogin = () => {

    const { user } = useAuthContext()
    return (
        <Link href={"/admin"} className="flex ">
            <Image
                src={Login}
                alt="Icono login"
                width={50}
                height={50}
            />
            {user.nombre
                ?
                <span className="text-base text-red-900 font-bold">{user.nombre}</span>
                :
                <></>
            }

        </Link>
    )
}

export default UserLogin