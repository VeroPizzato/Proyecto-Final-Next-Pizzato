export const Orden = async (id) => {
    const order = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/order/${id}`, {
        cache: 'no-store',
    }).then(r => r.json())
        .catch(error => {
            console.error('Fetch error:', error);
        });

    return order
}

