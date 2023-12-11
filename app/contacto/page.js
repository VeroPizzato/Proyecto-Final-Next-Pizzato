import Boton from "@/components/ui/Boton"

export const metadata = {
    title: 'Contacto - Spirit Computacion',
    description: 'A través de nuestros medios de contacto te brindaremos asesoramiento personalizado y responderemos todas tus consultas. Si tenés alguna duda o necesitás un presupuesto, completá los campos a continuación y te responderemos a la brevedad.',
}

export default function Contacto() {
    return (
        <>
            <main className="container m-auto max-w-md">
                <h1 className="text-4xl text-red-900 my-4 text-center font-mono">Contacto</h1>
                <hr />
                <form className="bg-gray-100 px-8 pt-6 pb-8 mb-4 rounded-xl shadow-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2 font-mono" for="mensaje"> Mensaje </label>
                        <textarea className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" rows="5" type="text" placeholder="Dejanos un mensaje" required></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2 font-mono" for="email"> Email </label>
                        <input className="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="email" placeholder="Tu email" required />
                    </div>

                    <Boton type="submit" className="flex items-center justify-between font-mono text-lg"> Aceptar </Boton>

                </form>
            </main>
        </>
    )
}
