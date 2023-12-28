"use client"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"


const AdminLayout = ({ children, login }) => {

    const { user } = useAuthContext()

    const router = useRouter()

    return (
        <div>
            {
                user.logged
                    ?
                    user.email === "admin@coder.com"
                        ?
                        children
                        :
                        router.push("/unauthorized")
                    : login
            }
        </div>
    )
}

export default AdminLayout