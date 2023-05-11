import React from "react";

import ProductItem from "./ProductItem";

function ProductGallery({productsList, cart, setCart}){
  //console.log('ProductsList:'+productsList)//array of objects {} expression to bring the value as such // [{…}, {…}, {…}, {…}, {…}, {…}]
  //const[product1,product2, product3]=products
  //console.log(product1)//{id: 200, name: 'Product One', price: 75}
  //console.log(product2)//{id: 201, name: 'Product Two', price: 45}
  //console.log(product3)//{id: 202, name: 'Product Three', price: 60}
  return(

    <div className="productGallery">  

    {
      productsList.map((product)=>{
        return <ProductItem key={product.id} {...product} cart={cart} setCart={setCart} />
      })
    }

    </div>
     )
}

export default ProductGallery ;