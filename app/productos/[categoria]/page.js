import NotFound from "@/app/not-found"
import CategoriesMenu from "@/components/products/CategoriesMenu"
import ProductsList from "@/components/products/ProductsList"
import Loading from "@/components/ui/Loading"
import { Suspense } from "react"

export async function generateMetadata({params, searchParams}, parent) {

    return {
        title: `Spirit Computacion - ${params.categoria}`,
    }
}

export async function generateStaticParams(){
    return [
        { categoria: "all"},
        { categoria: "monitor"},
        { categoria: "gabinete"},
        { categoria: "notebook"},
        { categoria: "componente"},     
    ] 
}

export const revalidate = 3600

const Productos = ({params}) => {
    const { categoria } = params

    const rutasCategorias = [
        "all",
        "monitor",
        "gabinete",
        "notebook",
        "componente"
    ] 

    const extisteCategoria = rutasCategorias.some((cat) => cat === categoria)
   
    if (!extisteCategoria)
        return (
            <NotFound/>
    )

    return (
        <main className="container m-auto">
            <div>
                <h2 className="text-4xl text-red-900 text-center my-4 font-mono">Productos</h2>
                <p className="text-2xl text-bold text-center border-b pb-8 font-mono">
                    Trabajamos las mejores marcas y los modelos de última generación en los siguientes productos
                </p>
            </div>
            <div className="flex gap-10">
                <CategoriesMenu />
                <Suspense fallback={<Loading />} >                
                <ProductsList categoria={categoria}/>
                </Suspense> 
            </div>
        </main>
    )
}

export default Productos