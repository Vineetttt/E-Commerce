import React from 'react';
import "./Footer.css";
import Logo from "../../assets/logo.png";
import App from "../../assets/pay/app.jpg";
import Play from "../../assets/pay/play.jpg";
import Pay from "../../assets/pay/pay.png";

function Footer() {
  return (
    <div>
        <footer className="section-p1">
        <div className="col">
            <img src={Logo} alt="" className="logo"/> 
            <h4>Contact</h4>
            <p><strong>Address:</strong> 724 ABC road,Street 34, ABC<br/><br/>
            <strong>Telephone:</strong> +01-123-dummy-123<br/><br/>
            <strong>Visiting Hours:</strong> 10:00 to 19:00 Mon-Sat</p>
        </div>
        
        <div className="col">
            <h4>About</h4>
            <a >About Us</a>
            <a >Shipping Partners</a>
            <a >Privacy Policy</a>
            <a >Terms & Condition</a>
            <a >Contact Us</a>
        </div>
        <div className="col">
            <h4>My Account</h4>
            <a >Sign In</a>
            <a >View Cart</a>
            <a >My Wishlist</a>
            <a >Track my Order</a>
            <a >Help</a>
        </div>
        <div className="col install">
            <h4>Install App</h4>
            <p>From Google Play Store /App Store</p>
            <div className="row">
                <img src={App} alt=""/>
                <img src={Play} alt=""/>
            </div>
            <a href="https://pay.google.com/gp/w/u/0/home/activity?sctid=2365977991972957">
                <p>Secured Payment Options</p>
            </a>
            <img src={Pay}alt=""/>
        </div>
    </footer>
    </div>
  )
}

export default Footer