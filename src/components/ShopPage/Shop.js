import React from 'react';
import "./Shop.css";
import ShopProducts from './ShopProducts';
import { useStateValue } from "../../context/StateProvider";
import MenuContainer from './MenuContainer';

function Shop() {
  const [{clothes},dispatch] = useStateValue();
  return (
    <div>
    <section id="page-header">
        <h2>get best deals</h2>
        <p>Save more with coupons & up to 70% off !</p>
    </section>
    <h2 style={{textAlign:"center",backgroundColor:"white",paddingTop:"80px"}}>Summer Collection</h2>
    <ShopProducts flag={true} data={clothes}/>
    <MenuContainer/>
    </div>
  )
}

export default Shop;