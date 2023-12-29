import ProductCard from "./ProductCard"

const ProductsList = async ({ categoria }) => {
    var items;
    try {
        const response = await fetch(`http://localhost:3000/api/productos/${categoria}`,
            { cache: "no-store" })
        items = await response.json()
    }
    catch(error)  {
        console.error('Fetch error:', error);
    };

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap mb-6">
            {
                items.map(item => <ProductCard key={item.slug} item={item} />)
            }
        </section>
    )
}

export default ProductsList