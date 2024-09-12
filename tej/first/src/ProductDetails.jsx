import React, { useContext, useState } from 'react';
import { mainContext } from './App';


const ProductDetails = () => {
    let { product } = useContext(mainContext)
    let [curr, setCurr] = useState(0)

    function previousImage() {
        if (curr <= 0) {
            setCurr(4)
        } else {
            setCurr(curr - 1)
        }

    }
    function nextImage() {
        if (curr >= 4) {
            setCurr(0)
        } else {
            setCurr(curr + 1)
        }
    }
    return (
        <div className="product-details">
            <div className="product-image">
                <button onClick={previousImage} className="prev-btn">&lt;</button>
                <img src={product.images[curr]} alt={product.title} />
                <button onClick={nextImage} className="next-btn" >&gt;</button>
            </div>
            <div className="product-info">
                <h2 className="product-name">{product.title}</h2>
                <p className="product-price">${product.price}</p>
                <button className="buy-now-btn">Buy Now</button>
            </div>
        </div >
    );
};

export default ProductDetails;
