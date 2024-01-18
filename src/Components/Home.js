import { useRef } from 'react'
import React from 'react'
import './Home.css'

export default function Home({ fullpageApi }) {
    const projects = 'Projects';

    const scrollToProjects = () => {
        if (fullpageApi)
            fullpageApi.moveTo(projects)
    };
    return (
        <div id='home' className='allHome'>
            <div class="social">
                <a href="https://github.com/srxvathsav" target="_blank">
                    <div class="social-btn color-github" style={{ color: 'red' }}>
                        <div class="icons8-github"></div>
                        <p class="order-1 google-font margin-instagram">Github</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/srivathsav26/" target="_blank">
                    <div class="social-btn color-telegram">
                        <div class="icons8-telegram-app"></div>
                        <p class="order-1 google-font margin-telgram">LinkedIN</p>
                    </div>
                </a>
                <a href="https://leetcode.com/srxvathsav/" target="_blank">
                    <div class="social-btn color-leetcode">
                        <div class="icons8-leetcode"></div>
                        <p class="order-1 google-font margin-instagram">Leetcode</p>
                    </div>
                </a>
                <a href="https://instagram.com/srxvathsav" target="_blank">
                    <div class="social-btn color-instagram">
                        <div class="icons8-instagram"></div>
                        <p class="order-1 google-font margin-instagram">Instagram</p>
                    </div>
                </a>

            </div >

            <div className='container'>

                <div className='main'>
                    <h1 className='mainHeading'>Hey , I'm Srivathsav !</h1>
                    <div className="secondHeading">A frontend developer focused on crafting seamless web applications and solving complex day-to-day problems with precision</div>
                    <div className="butts">
                        <div className='btn btn-light btn-bg-dark-subtle btn-sm' id='button' onClick={scrollToProjects} >Projects</div>
                        <a className='btn btn-light btn-bg-dark-subtle btn-sm' id='button' href='https://drive.google.com/file/d/13PQYIkqMYwq_Zq--3b_07D_Z1gHlNQnQ/view?usp=sharing' target="_blank">Resume</a>

                    </div>
                </div>


            </div>

        </div >
    )
}
