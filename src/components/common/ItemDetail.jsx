import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "./Item";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productos && productos.length > 0) {
      const findProduct = productos.find(el => el.id === parseInt(id));
      setProductoSeleccionado(findProduct);
      setLoading(false);
    }
  }, [id, productos]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!productoSeleccionado) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <p>Detalle producto seleccionado: {productoSeleccionado.title}</p>
      <Item 
        key={productoSeleccionado.id} 
        id={productoSeleccionado.id} 
        title={productoSeleccionado.title}
        img={productoSeleccionado.img}
        price={productoSeleccionado.price} 
      />
    </div>
  );
};

export default ItemDetail;
