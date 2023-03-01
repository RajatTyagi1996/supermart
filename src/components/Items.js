import React from "react";
import Card from "./Card";


const Items = ({products, cart, setCart}) => {
    return <div className="items">
        {products.map((data) => {
            return <Card data={data} cart={cart} setCart={setCart}/>
        })}
    </div>
}

export default Items;