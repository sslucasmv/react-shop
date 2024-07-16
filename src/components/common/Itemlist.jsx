import Item from "./Item";


const ItemList = ({productos}) => {
    return ( 
        productos.map((el,index )=>{
            return (
                <Item key={index} title={el.title} price={el.price} img={el.img} />
            )
        })
    )    
}

export default ItemList;