
import IrAtras from "@/components/ui/IrAtras"

export default function NotFound() {   
    return (
        <>
            <main className="container m-auto">
                <h1 className="text-4xl text-red-900 my-4 font-mono ">Página no encontrada - Error 404</h1>
                <hr className="border-b border-red-900" />
                <p className="text-2xl mt-4 font-mono pb-4">La ruta a la que intenta acceder no existe</p>

                <IrAtras>
                    Volver
                </IrAtras>
            </main>
        </>
    )
}