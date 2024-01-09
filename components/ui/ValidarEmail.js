'use client'

import { useState } from "react"

const ValidarEmail = ({ children, className, ...args }) => {

    const [datoValido, setDatoValido] = useState("")

    // valido el email
    function validarEntradaEmail(email) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
            <input type="email" onKeyDown={(e) => validarEntradaEmail(e.target.value)} onBlur={(e) => validarEntradaEmail(e.target.value)} required placeholder="Tu email" className={`w-full shadow border border-gray-100 rounded py-2 px-3 text-gray-700 font-mono ${className} ${datoValido}`}
                {...args} />
        </div>
    )
}

export default ValidarEmail