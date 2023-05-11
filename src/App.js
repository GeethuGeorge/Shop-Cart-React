import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import productData from "./data.json";
import { useState } from "react";

const App = () => {

const siteName="React Shop"
//we are going to assign data as array in cart State since product is an array
//the initial state is an empty array ([]), initial cart is empty, that means its empty

const[cart, setCart]=useState([]);
console.log(cart)//initially before clicking the cartHandler the state of cart is empty array []
//console.log(productData); 



    return (
        <div className="appWrapper">
            <Header 
            name={siteName}
            />

            <Main 

            products={productData} cart={cart} setCart={setCart} //since its an expression

            />

            <Footer 
            name={siteName}
            />
        </div>
    );
};

export default App;
