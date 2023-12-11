import ProductsTable  from "@/components/admin/ProductsTable"

const Admin = () => {

    return (
        <div className="container m-auto mt-6">      
            <h2 className="text-2xl my-10 border-b border-red-900 pb-4 font-mono">Panel de Administración</h2>
            <ProductsTable />
        </div>                   
    )
}

export default Admin