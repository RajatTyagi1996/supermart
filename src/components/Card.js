import React from "react";

const Card = ({data, cart, setCart}) => {
    const currentCart = cart[data["id"]];
    const {count} = currentCart ? currentCart : {count: 0}

    const addToCart = () => {
        console.log("called")
        data["count"] = count + 1
        cart[data["id"]] = data
        setCart({...cart})
    }

    return <div className="card">
        <div className="cardtitle">
            <h5>{data.title}</h5>
        </div>
        <div className="cardcover">
            <img src={data.thumbnail} height="200px" width="200px" />
            <div>
                <body>{data.description}</body>
            </div>
        </div>
        <div className="cardfooter">
            <span>Price:$<del>{data.price}</del><b><ins style={{marginLeft: "4px"}}>{data.price - data.discountAmount}</ins></b></span>
            <span><button onClick={addToCart} className="button">{count == 0 ? "Add to Cart" : "Add (" + count + ")"}</button></span>
        </div>
    </div>
}

export default Card;