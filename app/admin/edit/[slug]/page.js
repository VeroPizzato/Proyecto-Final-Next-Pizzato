import EditForm from "@/components/admin/EditForm"

const EditPage = async ({params}) => {

    const {slug} = params

    const item = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/producto/${slug}`,
    { cache: "no-store" }
    ).then(res => res.json())
    .catch(error => {
        console.error('Fetch error:', error);
    });

    return (
        <div>
            <EditForm item={item} />
        </div>
    )
}

export default EditPage