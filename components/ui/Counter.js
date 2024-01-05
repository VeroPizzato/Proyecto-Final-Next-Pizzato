"use client"
import Boton from "./Boton"
import { useState, useEffect } from "react";
import { useCartContext } from "@/context/CartContext";
import { doc,  updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config"
import Link from "next/link";

const Counter = ({ producto }) => {

    const { addItem, getItem } = useCartContext();

    const [cantidad, setCantidad] = useState(1);
    const [stockDisponible, setStockDisponible] = useState(producto.stock);
    const [textoBoton, setTextoBoton] = useState('Agregar al carrito');

    const onAdd = async (quantity) => {
        addItem(producto, quantity);
        setCantidad(quantity);
        setStockDisponible(stockDisponible - quantity);        
        const docRef = doc(db, "productos", producto.slug) 
        await updateDoc(docRef, { stock: stockDisponible })
        setTextoBoton('Terminar compra');
    };

    const actualizarStock = async (itemSlug) => {              
        const producto = getItem(itemSlug);
        if (producto) {
            setStockDisponible(stockDisponible - producto.quantity);            
            const docRef = doc(db, "productos", producto.slug) 
            await updateDoc(docRef, { stock: stockDisponible })
        }
    };

    useEffect(() => {
        actualizarStock(producto.slug);
    }, []);

    const increase = () => cantidad < stockDisponible && setCantidad(cantidad + 1)
    const decrease = () => cantidad > 1 && setCantidad(cantidad - 1)

    if (stockDisponible === 0) return (
        <div className="font-mono text-lg">
            <h1 className="font-mono text-xl font-bold text-center mt-6">No hay stock</h1>
            <Link href={"/cart"}><Boton className="flex items-center justify-center gap-3 mx-auto mt-6">{textoBoton}</Boton></Link>
        </div>
    )
    return (
        <div className="font-mono text-lg flex flex-col items-center justify-center gap-5 mt-6">
            <h1 className="font-mono text-2xl mt-6 mb-6">Stock Disponible: {stockDisponible}</h1>
            <div className="flex items-center justify-center gap-3 mx-auto">
                <Boton onClick={decrease}>-</Boton>
                <p className="font-bold">{cantidad}</p>
                <Boton onClick={increase}>+</Boton>
            </div>
            {textoBoton === 'Agregar al carrito' ? <Boton onClick={() => onAdd(cantidad)}>{textoBoton}</Boton> : <Link href={"/cart"}><Boton>{textoBoton}</Boton></Link>}
        </div>
    )
}

export default Counter