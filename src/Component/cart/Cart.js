import React from 'react';

const Cart = (props) => {
    const cart = props.cart

    const total = cart.reduce((total, prd) => total + prd.price,0)

    let shipping = 0;
    if(total > 35){
        shipping =0
    }
    else if(total > 15){
        shipping =4.99;
    }
    else if(total > 0){
        shipping=12.99
    }

    // const tax =Math.round(total /10);
    const tax =(total / 10);

    const numberFix = num => {
       return  Math.round(num);
    }
    return (
        <div>
            <h4>Order Summerry</h4>
            <p>Items Ordered:{cart.length} </p>
            <p>Product price :{numberFix(total)}</p>
            <p>Shipping: ${shipping}</p>
            <p><small>Tax + vat: {numberFix(tax)}</small></p>
            <p>Total Price: ${numberFix(total + shipping + tax)} </p>
        </div>
    );
};

export default Cart;