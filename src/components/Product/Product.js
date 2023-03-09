import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const {img, name, seller, price, ratings} = product;

    // const {product, handleAddToCart} = props;

    
    return (
        <div>
            <div className="product">
                <div className='image-container'>
                    <img src={img} alt="" />
                </div>
                <div className='product-info'>
                    <h4 className='product-name'>{name}</h4>
                    <p className='details'>Price: ${price}</p>
                    <p className='details'><small>Manufacturer: {seller}</small></p>
                    <p className='details'><small>Rating: {ratings}</small></p>
                </div>
                <button className='btn-cart' onClick={() => handleAddToCart(product)}>Add to Card</button>
            </div>
        </div>
    );
};

export default Product;