import React from "react"
import "./Footer.css"
import { SocialIcon } from 'react-social-icons'

const Footer = () =>
    <footer id='footer' className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h4 className="h4text">Srivathsav S</h4>
                    <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0 bg-light" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="h5text">Connect with me!</h5>
                    <SocialIcon className='soc-icon' target="_blank" url="https://linkedin.com/in/srivathsav26" style={{ height: 40, width: 40 }} />
                    <SocialIcon className='soc-icon' target="_blank" url="https://github.com/srxvathsav" style={{ height: 40, width: 40 }} />
                    <SocialIcon className='soc-icon' target="_blank" url="https://leetcode.com/srxvathsav" style={{ height: 40, width: 40 }} />
                    <SocialIcon className='soc-icon' target="_blank" url="https://instagram.com/srxvathsav" style={{ height: 40, width: 40 }} />
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© Copyright 2024. Made by Srivathsav S
        </div>

    </footer>

export default Footer