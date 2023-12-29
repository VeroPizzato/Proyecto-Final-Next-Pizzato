import DeleteForm from "@/components/admin/DeleteForm"

const DeletePage = async ({params}) => {

    const {slug} = params

    const item = await fetch(`http://${process.env.VERCEL_URL}/api/producto/${slug}`,
    { cache: "no-store" }
    ).then(res => res.json())
    .catch(error => {
        console.error('Fetch error:', error);
    });

    return (
        <div>
            <DeleteForm item={item} />
        </div>
    )
}

export default DeletePage