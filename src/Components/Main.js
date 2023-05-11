//Main Component

import React from "react";
import ProductGallery from "./ProductGallery";
import Cart from "./Cart";

const Main = ({ products, cart, setCart }) => {
    //console.log('Products:'+ products)
    return (
        <div className="appMain">
            <ProductGallery productsList={products} cart={cart} setCart={setCart} />
            <Cart cart={cart} setCart={setCart} />
        </div>
    );
};

export default Main;
