import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Product.css"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handleAddToCart}) => {
    // const { product, handleAddToCart} = props;
    const { name, seller, price, img, ratings } = product;
    // const { name, seller, price, img, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Pirce: ${price}</p>
                <p className='product-seller'>Seller: {seller}</p>
                <p className='product-seller'>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;