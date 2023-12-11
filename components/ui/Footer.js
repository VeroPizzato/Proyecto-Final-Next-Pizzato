import Image from "next/image"

const Footer = () => {

    return (
        <footer className="w-full bg-gray-400 border-t py-2">
            <div className="container m-auto py-2 text-l flex justify-between items-center font-mono font-bold">
                <p>Desarrollado por Verizzato</p>

                <div className="flex items-center gap-2">
                    <p>Copyright © 2023</p>
                    <Image 
                        src={"/spirit.png"}
                        alt="logo spirit"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer