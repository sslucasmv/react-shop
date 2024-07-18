
import { useState, useEffect } from "react";
import ItemList from "./Itemlist";

const ItemListContainer = ({productos}) => {

    const [loading,setLoading] = useState(true)
    useEffect(() => {
       if(productos.length > 0) {
        setLoading(false)
       }
    },[productos])


    return (
        <>
            {loading ? (
            <div className="cont-loader">
            <p>Cargado...</p>
           <div className="loader-container">
           
           <div className="loader">
             <div className="circle1"></div>
             <div className="circle2"></div>
             <div className="circle3"></div>
           </div>
         </div>
         </div>


            ):( 
            <div>
                <div className="content-card">
                <ItemList productos={productos} />
                </div>
            </div>
            )
            }
    </>
    )
    
    
}

export default ItemListContainer;