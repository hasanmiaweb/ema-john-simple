import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Product.css'
const Product = (props) => {
    const {img,name,seller,price,stock} = props.pdw
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
               
            </div>
            <div >
                <h4 className="product-name">{name}</h4>
                <p>By: {seller}</p>
                <br/>
                <p>Only ${price}</p>
                <br/>
                <button className="addButton"> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;