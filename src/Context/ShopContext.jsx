import React,{createContext, useState} from "react";
import all_product from "../Components/Assets/all_product";
import Shop from "../Pages/Shop";
import { CartItems } from "../Components/CartItems/CartItems";
export const ShopContext = createContext(null);
const getDefaultCart =() =>{
    let cart ={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
        
    }
    return cart;
}
const ShopContextProvider =(props) => {
    const [CartItems,setCartItems]=useState(getDefaultCart());

const addToCart=(itemId)=>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
}
const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    } 
    const getTotalCartAmount=() => {
        let totalAmount = 0;
        for (const item in CartItems)
        {
            if (CartItems[item]>0)
            { console.log('Loop Iteration:', item);
                let itemInfo= all_product.find((product) =>product.id === Number(item));
                totalAmount+= itemInfo.new_price *CartItems[item];
                console.log('Item Price:', itemInfo.new_price);
                console.log('Quantity:', CartItems[item]);
            }
        }
        return totalAmount;
    };
    const getTotalCartItems= () =>{
        let totalItem= 0 ;
        for (const item in CartItems)
{if (CartItems[item]>0)
    {totalItem+= CartItems[item];
    } 
}
return totalItem;
    }
       const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,CartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;