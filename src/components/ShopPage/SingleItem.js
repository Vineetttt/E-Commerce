import React from 'react';
import "./SingleItem.css";
import Product from "../../assets/products/f1.jpg";

function SingleItem() {
  return (
    <div>
        <section id="proddetail" className="section-p1">
        <div className="single-pro-image">
            <img src={Product} alt="" width="100%" id="MainImg"/>
        </div>
        <div className="single-pro-details">
            <h6>Sample Product Description Page Common to All the Products</h6>
             <h6>Home /T-Shirt</h6>
             <h4>Men's Fashion T-Shirt</h4>
             <h2>$75</h2>
             <select>
                <option>Select Size</option>
                <option>XL</option>
                <option>XXL</option>
                <option>M</option>
                <option>S</option>
             </select>
             <button>Add To Cart</button>
             <h4>Product Details</h4>
             <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Praesentium veniam laboriosam id dolor error doloremque distinctio molestias 
                magni debitis dicta quasi ut blanditiis, 
                atque explicabo odio? Doloribus quibusdam accusantium quas!</span>
        </div>
    </section>
    </div>
  )
}

export default SingleItem