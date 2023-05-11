// console.log(currencyFormatter)

//Button Function
//cart here is an array of objects
/* In React, "previous state" refers to the state object that was in effect before the most recent update to the state.
When you update the state of a component in React using the setState method, you have access to the previous state through the prevState parameter of the setState method. This allows you to make updates to the state based on its previous value, rather than just setting it to a new value.,here prevstate is an empty array and we need to add object in key value form and value stored inside, react is pushing this prevState, ie the current state, it recieves the state in that moment, we spread it because its an array and we add object since data is an object and we need to store as key value pairs, thats why we set the object,if the previous state is an objetc we add {} and spread the object
setter fn has the power to hold the previous state, if no previous set in the callback fn , it cannot rememeber the previous value and cause error while executing the setter fn with multiple lines of code, when a state update happens a rerendering happens, if multiple setter fn inside a click function react will form a queue and , and make a batch and rerender only once 
callabck fn help react to rememeber the previous state, and initally its the original state and if many subsequent setter fn it will be the updqted state, it will push and render compoennt only once the entire setter fn is executed and render,state is uodate but render only after the final setter fn is executed
*/
//use short hand id, title, price , image,JS can understand
/* id:id,
title:title,
price:price,
image:image  */
//when we clicked the product get added to "cart state array", setCart will perform behind
//we push the details of the product we clicked  to the array , and next time when we click another button that aslo get added , and the react rememeber the previous state ie now the first added product
//but here again we click the same product , duplicate entry is happening
//so we need to increase the quantity of the product , not to push in to the array again
//here we dont have a prop quantity/count , hence we need to add and we need it only for the products in cart , not orginal products data, hence we can add in to the object cartProduct here
/* //let cartProduct = {
    id,
    title,
    price,
    image,
}; */
//if same id prodouct in cart already , we wont push it again, instead we can increase the count, since people can purchase multiple products//find takes a call back fn
//since we need to convert a undefined to booelan value we add !!
// return cart.find((item) => item.id === _id);-->undefined since cart is emppty now
//cart has an has already existing product in object format and its id mat hed with the id thats passed in when we click button and return the object that matches , if no match it return undefined
//if product already added to cart display another button "Added to cart"
//isInCart(id) is true its already there in cart so show button "added to cart"
//if InCart(id) is false its nit there show button "add to cart"
//when we clikc the button setCart will chnage the cart state and then it will check if any objetc id is similar
//to show which button is to be decided by   InCart(id

//Product item component
import React from "react";
import { currencyFormatter } from "../Util";

function ProductItem({ id, title, price, image, cart, setCart }) {
    //  isInCart fn to check if the item is in cart-id equal to id of the product thats added
    //---------------------------------------------------------
    const isInCart = (_id) => {
        return !!cart.find((item) => item.id === _id);
    };
    // console.log(isInCart(id));

    //  cartHandler fn to push the clicken product to cart state using setCart method and it has to add previous state and teh details of the clicked product ie cartProduct

    //it takes cart item.id and productItem id
    //the optional chaining operator (?.) is used to access the count property of the cart object. If the cart object doesn't exist, the result will be undefined and not error
    let productCount=cart.find((item)=>{return item.id===id})?.count
    //------------------------------------------------------------
    const cartHandler = () => {
        setCart((prevState) => {
            // console.log(prevState)//now its an Empty array, no values inside
            let cartProduct = {
                id,
                title,
                price,
                image,
                count: 1,
            };

            return [...prevState, cartProduct];
        });
    };
    //-----------------to increase the count property, it returns the index of the object located in array --------------------------------------------------
    const countHandler = (_id) => {
        let itemIndex = cart.findIndex((item) => {
            return item.id === _id;
        });
        //console.log(itemIndex)
        //cart[itemIndex].count++;
        // but this will mutate the array, it will give answer, but will mutate the state directly,instead we should use setCart setter fn to make changes in state , then only it will rerender
        //state is an array, so setState must return an array finally
        setCart((prev) => {
            return prev.map((item, index) => {
                if (index === itemIndex) {
                    return { ...item, count: item.count++ };
                } else {
                    return item;
                }
            });
        });
    };

    //----------------------------------------------------------

    return (
        <div className="productItem">
            <div className="itemName">
                <h3>{title}</h3>
            </div>
            <div className="itemPic">
                <img src={`./images/${image}`} alt="" />
            </div>
            <div className="itemMeta">
                <div className="itemPrice">{currencyFormatter(price)} </div>

                {isInCart(id) ? (
                    <button className="cartButton" onClick={() => countHandler(id)}>
                        {productCount} Added to cart
                    </button>
                ) : (
                    <button className="cartButton" onClick={cartHandler}>
                        Add to cart
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
