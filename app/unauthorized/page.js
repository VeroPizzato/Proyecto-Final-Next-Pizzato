import IrAtras from "@/components/ui/IrAtras"

export default function Unauthorized() {   
    return (
        <>
            <main className="container m-auto">
                <h1 className="text-4xl text-red-900 my-4 font-mono ">No tiene permisos de administrador</h1>
                <hr className="border-b border-red-900 mb-6" />
               
                <IrAtras>
                    Volver
                </IrAtras>
            </main>
        </>
    )
}