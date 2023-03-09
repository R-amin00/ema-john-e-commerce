import React from 'react';
// import { AiOutlineShoppingCart } from 'react-icons/AiOutlineShoppingCart';
// import { RiDeleteBin6Line} from 'react-icons/fa';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);

    return (
        <div className='cart-field '>
            <div>
                <p className='order-heading'>Order Summery</p>
                <p><small>Selected Items: {quantity}</small></p>
                <p><small>Total Price: $ {total}</small></p>
                <p><small>Total Shipping Charge: $ {shipping}</small></p>
                <p><small>Tax: $ {tax}</small></p>
                <p className='grand-total'>Grand Total: $ {grandTotal}</p>
            </div>
            <button className='btn order'>Add to Card</button>
            <button className='btn cart'>Add to Card </button>
        </div>
    );
};

export default Cart;