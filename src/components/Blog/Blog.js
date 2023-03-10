import React from 'react';
import "./Blog.css";
import { blogs } from '../../utils/data';
import Footer from "../Footer/Footer";

function Blog() {
  return (
    <div>
        <section id="page-header" class="blog-header">
            <h2>#readmore</h2>
            <p>Read more about our products</p>
        </section>
        <section id="blog">
            {blogs.map((blog) => (
            <div class="blog-box" key={blog.id}>
                <div class="blog-img">
                    <img src={blog.img} alt=""/>
                </div>
                <div class="blog-details">
                    <h4>Blog Heading</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor
                       mollitia sunt possimus asperiores nam ipsum voluptates eum </p>
                       <a href="#">Continue Reading</a>
                </div>
            </div>
            ))}
    </section>
    <Footer/>
    </div>
  )
}

export default Blog