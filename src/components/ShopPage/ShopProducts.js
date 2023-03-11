import React, { useEffect, useState } from "react";
import {MdShoppingBasket} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import "./ShopProducts.css";

const ShopProducts = ({ flag , data }) =>{
    const [{cartItems},dispatch] = useStateValue();
    const [items,setItems] = useState([]);
    const addToCart = () =>{
        dispatch({
            type:actionType.SET_CARTITEMS,
            cartItems:items,
        });
        localStorage.setItem("cartItems",JSON.stringify(items))
        console.log(cartItems)
    };
    useEffect(()=>{
        addToCart();
    },[items]);
    const navigate = useNavigate();
    const toItem = () =>{
        navigate('/item')
    }
    return (
    <div className='shop'>
            <section id="product1" className="section-p1">
                <div className="pro-container">
                {data && data.length > 0 ? (
                    data.map((item) => (
                    <div className="pro" key={item?.id}>
                        <img src={item?.imageURL} alt="" onClick={()=>toItem()}/>
                        <div className="des">
                            <span>Desi Vibez Exculsive</span>
                            <h5>{item?.title}</h5>
                            <h4>{item?.price}</h4>
                        </div>
                        <p><MdShoppingBasket className='shopping-cart' onClick={() => {setItems([...cartItems,item]); alert("Item added to cart")}}/></p>
                    </div>
                    ))
                    ) : (
                        <>Seems like our inventory is out of stock. Please contact us for further information</>
                    )}
                </div>
            </section>
    </div>
    )
}

export default ShopProducts;