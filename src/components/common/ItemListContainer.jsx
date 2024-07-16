


const ItemListContainer = ({usuario}) => {
    const {nombre,edad} = usuario
    return (
        <h1>Bienvenido {nombre} {edad}</h1>
    )
}

export default ItemListContainer;