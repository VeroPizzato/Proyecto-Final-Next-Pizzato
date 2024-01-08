import Image from 'next/image'

export default function OrderItem({ item }) {
  return (
    <div className="flex items-start gap-4">
      {/* <Image src={item.image} alt={item.title} width={50} height={50} /> */}
      <div className="flex flex-col gap-2">
        <div>
          <p className="font-bold">{item.title}</p>
          <div className="flex gap-3">
            <p className="text-neutral-500">
              Precio:
            </p>
            <p><span className="font-bold">{'$ '}{item.price}</span>
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <p className="text-neutral-500">
            Cantidad:
          </p>
          <p><span className="font-bold">{item.quantity}</span>
          </p>
        </div>
      </div >
    </div>
  )
}