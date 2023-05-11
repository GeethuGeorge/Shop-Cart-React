import React from "react";
import { currencyFormatter } from "../Util";

export const CartItem = ({ id, title, image, price, count, setCart }) => {
    //Increase Count Fn
    const increaseCount = (_id) => {
        setCart((prev) => {
            return prev.map((item) => {
                //setCart setter fn takes the prev state and map through it
                //_id-id --id of the product on which fn called
                //item.id---id of the id of any of  the product we get while we map here
                //if both matches i returns the new object that matches the current state ie now in the prev
                //spread that object and take the count property and increment the count and returns a new object
                //if condition false it return the item

                if (item.id === _id) {
                    return { ...item, count: item.count + 1 };
                } else {
                    return item;
                }
            });
        });
    };

    //Decrease Count

    const decreaseCount = (_id) => {
        if (count > 1) {
            setCart((prev) => {
                return prev.map((item) => {
                    if (item.id === _id) {
                        return { ...item, count: count - 1 };
                    } else {
                        return item;
                    }
                });
            });
        } else {
          
          //to remove an item from the state, use setter fn setCart and take the previous state and apply filter method
          //filter method-->item.id != _id means it returns all the items whose item.id is not equal to product id that passed, (ie means it removes the item that is equal) and will show only that items in the state, now the cart state has only that items, we takes that is not matching in to our return

            setCart((prev) => {
                return prev.filter((item) => {
                  return item.id !== _id
                });
            });
        }
    };
    //remove item fn

    const removeItem=(_id)=>{
      setCart((prev) => {
        return prev.filter((item) => {
          return item.id !== _id
        });
        });
      }
    


    return (
        <div className="cartItem">
            <div className="itemPic">
                <img src={`/images/${image}`} alt="" />
            </div>
            <div className="itemInfo">
                <p>{title}</p>
                <div className="cartUpdater">
                    <button onClick={() => {decreaseCount(id);}}>-</button>
                    <div>{count}</div>                    
                    <button onClick={() => {increaseCount(id)}}>+</button>
                    <button onClick={()=>{removeItem(id)}}>x</button>
                </div>
            </div>
            <div className="itemPrice">{currencyFormatter(price)}</div>
        </div>
    );
};
export default CartItem;
