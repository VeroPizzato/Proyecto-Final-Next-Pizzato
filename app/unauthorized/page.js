import Boton from "@/components/ui/Boton"
import IrAtras from "@/components/ui/IrAtras"
import Link from "next/link"

export default function Unauthorized() {
    return (
        <>
            <main className="container m-auto">
                <h1 className="text-4xl text-red-900 my-4 font-mono ">No tiene permisos de administrador</h1>
                <hr className="border-b border-red-900 mb-6" />

                <Link href={"/"}>
                    <Boton className="flex justify-between items-center ml-auto font-mono text-lg my-4">
                        Volver a Home
                    </Boton>
                </Link>

            </main>
        </>
    )
}