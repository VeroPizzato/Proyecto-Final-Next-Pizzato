"use client"
import { useRouter } from "next/navigation"
import Boton from "./Boton"

const IrAtras = ({children, ...args}) => {
    const router = useRouter()

    return (
        <Boton onClick={() => {router.back()
                               router.refresh()}} {...args}>
            {children}
        </Boton>
    )
}

export default IrAtras