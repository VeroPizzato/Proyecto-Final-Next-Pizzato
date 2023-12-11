import IrAtras from "@/components/ui/IrAtras"

export default function Nosotros() {  

    return (
        <>
            <main className="flex-1 bg-cover bg-center" style={{backgroundImage: "url('/maquina-escribir.jpg')"}}>
                <h1 className="text-4xl text-red-900 my-4 font-mono ml-4">Nosotros</h1>
                <hr className="border-b border-red-900"/>
                <p className="text-base mt-4 font-mono font-bold ml-4">SITIO EN CONSTRUCCIÓN</p>   
                <IrAtras className="font-mono text-lg my-4 ml-4">Volver</IrAtras>            
            </main>
        </>
    )
}