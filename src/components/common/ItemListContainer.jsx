import React, { useState, useEffect } from "react";
import ItemList from "./Itemlist";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ productos }) => {
   
    const [filteredProductos, setFilteredProductos] = useState([]);
    const { category } = useParams();

    useEffect(() => {
       
        setTimeout(() => {
            if (category) {
                const filtered = productos.filter(producto => producto.category === category);
                setFilteredProductos(filtered);
            } else {
                setFilteredProductos(productos);
            }
            setLoading(false); 
        }, 1000); 
    }, [category, productos]); 

    return (
        <>
           
                <div className="content-card">
                    <ItemList productos={filteredProductos}  />
                </div>
     
        </>
    );
};

export default ItemListContainer;
