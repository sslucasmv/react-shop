



const Item = ({title,price,index,img}) => {
    return (
        <div className="card" key={index}>
            <h2>{title}</h2>
            <img src={img} />
            <h3>{price}</h3>
            <button className="btn-addCart">Agregar al carrito</button>

        </div>
    )
}

export default Item;