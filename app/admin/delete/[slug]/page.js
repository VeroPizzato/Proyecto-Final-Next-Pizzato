import DeleteForm from "@/components/admin/DeleteForm"

const DeletePage = async ({params}) => {

    const {slug} = params

    const item = await fetch(`http://localhost:3000/api/producto/${slug}`,
    { cache: "no-store" }
    ).then(res => res.json())

    return (
        <div>
            <DeleteForm  item={item} />
        </div>
    )
}

export default DeletePage