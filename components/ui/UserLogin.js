import Login from "@/public/icons/user.png"
import Link from "next/link"
import Image from "next/image"

const UserLogin = () => {

    return (
        <Link href={"/admin"} className="flex ">
        <Image 
            src={Login}
            alt="Icono login"
            width={50}
            height={50}
        />        
    </Link>       
    )
}

export default UserLogin