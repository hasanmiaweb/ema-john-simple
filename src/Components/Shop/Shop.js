import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react'
import './Shop.css'
const Shop = () => {
    // console.log(fakeData)
    const first10 = fakeData.slice(0,10);
    const [product, setProduct] = useState(first10)
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                 product.map(product => <li>{product.name}</li>)
            }
            </div>
            <div className="cart-container">
                <h3>THIS is Cart</h3>
            </div>
    
        </div>
    );
};

export default Shop;