import React from "react";

const Checkout = ({cart, setCart}) => {
    const total = {
        count: 0,
        discountAmount: 0,
        amount: 0
    }
    Object.keys(cart).forEach( (key) => {
        total.count = total.count + cart[key].count
        total.discountAmount = total.discountAmount + (cart[key].discountAmount * cart[key].count)
        total.amount = total.amount + (cart[key].price * cart[key].count)
    })
    const updateCart = (newcount, key) => {
        return () => {
            cart[key].count = cart[key].count + newcount
            if (cart[key].count == 0){
                delete cart[key]
            }
            setCart({...cart}) 
        }
    }

    return <div className="checkout">
        <table style={{width: "100%", backgroundColor: "#FBEEC1"}}>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            {Object.keys(cart).map( (key) => {
                return <tr>
                    <td>
                        {cart[key].title}
                    </td>
                    <td>
                        <button onClick={updateCart(-1, key)}>-</button><span style={{margin: "4px"}}>{cart[key].count}</span><button onClick={updateCart(1, key)}>+</button>
                    </td>
                    <td>
                        ${cart[key].price * cart[key].count}
                    </td>
                </tr>
            })}
        </table>
        <div style={{alignItems: "center", backgroundColor: "#FBEEC1", border: "5px"}}><h4 style={{textAlign: "center", marginBottom: "0px"}}>Checkout</h4></div>
        <table style={{width: "100%", backgroundColor: "#FBEEC1"}}>
            <tr>
                <th>Type</th>
                <th>Total</th>
            </tr>
            <tr>
                <th>Items({total.count})</th>
                <td>${total.amount.toFixed(2)}</td>
            </tr>
            <tr>
                <th>Discount</th>
                <td>-${total.discountAmount.toFixed(2)}</td>
            </tr>
            <tr>
                <th>Order Total</th>
                <th>${(total.amount.toFixed(2)-total.discountAmount.toFixed(2)).toFixed(2)}</th>
            </tr>
        </table>

    </div>
}

export default Checkout;