import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/StateProvider';
import { actionType } from "../../context/reducer";

const CartItem = ({item})  => {
    const [qty,setQty] = useState(1);
    const [items,setItems] = useState([]);
    const [{cartItems},dispatch] = useStateValue();
    const cartDispatch = () =>{
        localStorage.setItem("cartItems",JSON.stringify(items))
        dispatch({
            type:actionType.SET_CARTITEMS,
            cartItems:items,
        });
        console.log(cartItems)
    };
    const updateQty = (action,id) =>{
        if(action == "add"){
            setQty(qty+1)
            cartItems.map(item => {
                if(item.id === id){
                    item.qty+=1
                } 
            });
            cartDispatch();
        }else{
            if(qty == 1){
                setItems(cartItems.filter((items) => item.id !== id))
                cartDispatch();
            }else{
                setQty(qty-1);
                cartItems.map(item => {
                    if(item.id === id){
                        item.qty-=1
                    } 
                });
                cartDispatch();
            }
        }
    };
    useEffect(()=>{
        setItems(cartItems)
    },[qty]);
  return (
        <div className="cartItems" key={item?.id}>
            <img src={item?.imageURL} alt="" />
                <div className="itemDetails">
                    <div className="item">
                        <h3>{item?.title}</h3>
                        <h5>{ parseFloat(item?.price)*qty}</h5>
                    </div>
                    <div className="increaseCount">
                            <button onClick={()=>{updateQty("remove",item?.id)}}>-</button>
                            <h6>{item.qty}</h6>
                            <button onClick={()=>{updateQty("add",item?.id)}}>+</button>
                    </div>
                </div>
        </div> 
  )
}

export default CartItem