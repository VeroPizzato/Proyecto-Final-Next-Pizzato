'use client'

import { useState } from "react"

const ValidarNombre = ({ children, className, ...args }) => {

    const [datoValido, setDatoValido] = useState("")

    // solo se permiten letras y blancos
    function validarEntradaNombre(nom) {        
        if (!/^[a-z A-Z]+$/.test(nom)) {
            setDatoValido("shadow-[0_0_5px_1px_red]")
        }
        else {
            setDatoValido("shadow-none")
        }
    }
    return (
        <div>
            <label className="block text-gray-700 text-lg font-bold mb-2 font-mono">
                {children}
            </label>
            <input type="text" onKeyDown={(e) => validarEntradaNombre(e.target.value)} onBlur={(e) => validarEntradaNombre(e.target.value)} pattern="[a-z A-Z]+" title="Solo se permiten letras y espacios" required className={`w-full shadow border border-gray-100 rounded py-2 px-3 text-gray-700 font-mono ${className} ${datoValido}`}
                {...args} />
        </div>
    )
}

export default ValidarNombre