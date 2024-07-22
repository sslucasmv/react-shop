import React, { useState, useEffect } from "react";
import ItemList from "./Itemlist";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ productos }) => {
   
    const [filteredProductos, setFilteredProductos] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        // Simulación de una carga asíncrona (puedes sustituirlo con tu lógica real)
        setTimeout(() => {
            if (category) {
                const filtered = productos.filter(producto => producto.category === category);
                setFilteredProductos(filtered);
            } else {
                setFilteredProductos(productos);
            }
            setLoading(false); // Cambia el estado a 'false' después de un tiempo
        }, 1000); 
    }, [category, productos]); // El efecto se ejecuta cuando cambia la categoría o la lista de productos

    return (
        <>
           
                <div className="content-card">
                    <ItemList productos={filteredProductos} />
                </div>
     
        </>
    );
};

export default ItemListContainer;
