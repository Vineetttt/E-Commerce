import React from 'react';
import "./ContactUs.css";
import John from "../../assets/people/1.png";
import Smith from "../../assets/people/2.png";
import Emma from "../../assets/people/3.png";
import Footer from '../Footer/Footer';

function ContactUs() {
  return (
    <div style={{backgroundColor:"white"}}>
        <section id="page-header" className="about-header">
            <h2>#ContactUs</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </section>
        <section id="contact-details" className="section-p1">
            <div className="details">
                <span>Get in Touch</span>
                <h2>Visit our Office or Contact us today</h2>
                <h3>HeadQuaters</h3>
            <div>
                <li><i className="fal fa-map"></i>
                    <p>Address Line 1</p>
                </li>
                <li><i className="fal fa-envelope"></i>
                    <p>contact@example.com</p>
                </li>
                <li><i className="fal fa-phone-alt"></i>
                    <p>222-xx-24453</p>
                </li>
                <li><i className="fal fa-clock"></i>
                    <p>Mon-Sat 9:00 A.M. to 4:00 P.M.</p>
                </li>
            </div>
        </div>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609780818!2d72.74110034287452!3d19.082197839873626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1659899787313!5m2!1sen!2sin" width="600" height="450" style={{border:0}}/>
        </div>
    </section>
    <section id="form-details">
        <form action="">
            <span>DROP SUGGESTIONS HERE</span>
            <h2>We would love to hear from you</h2>
            <input type="text" placeholder="Your Name"/>
            <input type="email" placeholder="E-mail Address"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Suggestions"></textarea>
            <button class="normal">Submit</button>
        </form>

        <div class="people">
            <div>
                <img src={John} alt=""/>
                <p><span>John Doe</span> 
                    Senior Marketing Manager 
                    <br/>Phone: +2039abcd 
                    <br/>Email: johndoe@dummy.com </p>
            </div>
            <div>
                <img src={Smith} alt=""/>
                <p><span>William Smith</span> 
                    Senior Marketing Manager 
                    <br/>Phone: +2039abcd 
                    <br/>Email: johndoe@dummy.com </p>
            </div>
            <div>
                <img src={Emma} alt=""/>
                <p><span>Emma Stone</span> 
                    Senior Marketing Manager 
                    <br/>Phone: +2039abcd 
                    <br/>Email: johndoe@dummy.com </p>
            </div>
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default ContactUs;