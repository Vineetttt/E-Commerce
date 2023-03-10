import React , {useState,useEffect} from 'react';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import Footer from '../Footer/Footer';
import "./CartContainer.css";
import CartItem from './CartItem';

function CartContainer() {
    const [{cartShow,cartItems,user},dispatch] = useStateValue();
    const [flag, setFlag] = useState(1);
    const [tot, setTot] = useState(0);

    const showCart = () => {
        dispatch({
          type: actionType.SET_CART_SHOW,
          cartShow: !cartShow,
        });
      };
    
      useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator, item) {
          return accumulator + item.qty * item.price;
        }, 0);
        setTot(totalPrice);
        console.log(tot);
      }, [tot, flag]);
    
      const clearCart = () => {
        dispatch({
          type: actionType.SET_CARTITEMS,
          cartItems: [],
        });
    
        localStorage.setItem("cartItems", JSON.stringify([]));
      };
  return (
    <div className='cartContainer'>
            <h2>Your Cart</h2>
            {cartItems && cartItems.length>0 ? (
                <>
                <div className="cartDetails">
                    {cartItems && cartItems.map((item)=>(
                        <CartItem key={item.id} item={item}/> 
                    ))}
                </div>
                <div className="amount">
                <div className="subTotal">
                    <span><p>Sub Total:</p><p>{tot}</p></span>
                    <span><p>Shipping:</p><p>50</p></span>
                </div>
                <div className="total">
                    <p>Total:</p>
                    <p>{tot+50}</p>
                </div>
                {user ? (
                    <button className='checkout'>CheckOut</button>
                ):(
                    <button className='checkout'>Login to Checkout</button>
                )}
            </div>
                </>
                
            ):(
                <div><h1>Your cart is empty</h1></div>
            )}
            <Footer/>
    </div>
  )
}

export default CartContainer