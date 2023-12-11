const Boton = ({ children, className = '', ...args }) => {

    return (
        <button 
            className={`rounded-lg py-2 px-4 bg-red-700 hover:bg-red-900 hover:font-bold text-white text-center ${className}`} 
            {...args}
        >
            {children}
        </button>
    )
}

export default Boton