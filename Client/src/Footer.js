import React, { Component } from 'react';
import { FaDribbble, FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import './static/footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (  
            <footer class="site-footer">
                <div class="container">
                    <div class="row" style={{paddingLeft: "46px"}}>
                        <div class="col-sm-12 col-md-6" id="footerLogo" style={{paddingLeft: "20px"}}>
                        </div>
                        <div class="col-xs-6 col-md-1">
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <h6><b>Quick Links</b></h6>
                            <ul class="footer-links">
                            <li><a href="#/About/AboutContacts">About Us</a></li>
                            <li><a href="#/About/AboutContacts">Contact Us</a></li>
                            <li><a href="#/About/AboutContacts">Contribute</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-6 col-md-2">
                            <h6><b>About</b></h6>
                            <ul class="footer-links">
                            <li><a href="">McGill CS</a></li>
                            </ul>
                        </div> 
                    </div>
                    <div class="container">
                        <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <a href="#" class="copyright-text">Copyright &copy; McGill University 2020 | Credits</a>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                            <li><a class="facebook" href="https://www.facebook.com/McGillCS/"><FaFacebook /></a></li>
                            <li><a class="twitter" href="https://twitter.com/mcgillscience/"><FaTwitter /></a></li>
                            <li><a class="insta" href="https://www.instagram.com/mcgillu/"><FaInstagramSquare /></a></li>   
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;