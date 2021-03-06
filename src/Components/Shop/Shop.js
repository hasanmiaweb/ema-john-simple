import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react'
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {

    const first10 = fakeData.slice(0,5);
    const [product, setProduct] = useState(first10)
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                 product.map(pd => <Product pdw={pd}></Product>)
            }
            </div>
            <div className="cart-container">
                <h3>THIS is Cart</h3>
            </div>
    
        </div>
    );
};

export default Shop;