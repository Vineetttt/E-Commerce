import React from 'react';
import "./AboutUs.css";
import AboutImage from "../../assets/about/a6.jpg";
import AboutVideo from "../../assets/about/1.mp4";
import Footer from '../Footer/Footer';

function AboutUs() {
  return (
    <div>
        <section id="page-header" class="about-header">
            <h2>#KnowUs</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </section>
        <section id="about-head" class="section-p1">
        <img src={AboutImage} alt=""/>
        <div>
            <h2>Who are We?</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Illum nobis atque 
                quae fugiat omnis! Maiores quos labore in,pariatur recusandae autem fugit maxime. 
                Itaque veniam ducimus fugit sunt nisi? Lorem, ipsum dolor sit amet consectetur adipisicing elit.Illum nobis atque 
                quae fugiat omnis! Maiores quos labore in,pariatur recusandae autem fugit maxime. 
                Itaque veniam ducimus fugit sunt nisi?</p>
                <br/><br/>
                <marquee bgcolor="#ccc" behavior="" direction="">Sample dummy Marquee text to put up on the Website</marquee>
        </div>
    </section>

    <section id="about-app" class="section-p1">
        <h1>Download Our <a href="">App</a> </h1>
        <div class="video">
            <video controls >
                <source src={AboutVideo} type="video/mp4"/>
            </video>
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default AboutUs