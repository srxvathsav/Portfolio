import React from 'react'
import "./About.css"

export default function About() {
    return (
        <div id='about'>
            <div className='container'>
                <h1>ABOUT ME!</h1>
                <hr></hr>
                <h5 className='desc'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h5>
                <div className="row">
                    <div className="column">
                        <h3 className="about__content-title">Get to know me!</h3>
                        <div className="about__content-details">
                            <p className="about__content-details-para">
                                I'm a <strong id='strong'>Frontend Web Developer</strong> building the
                                Front-end of Websites and Web Applications that leads to the
                                success of the overall product. Check out some of my work in the
                                <strong id='strong'> Projects</strong> section.
                            </p>
                            <p className="about__content-details-para">
                                I also like sharing content related to the stuff that I have
                                learned over the years in <strong> Web Development</strong> so it
                                can help other people of the Dev Community. Feel free to Connect
                                or Follow me on my
                                <a rel="noreferrer" href="https://www.linkedin.com/in/srivathsav26/ " target="_blank"> Linkedin </a>
                                where I post useful content related to Web Development and
                                Programming
                            </p>
                            <p className="about__content-details-para">
                                I'm open to <strong id='strong'> Job</strong> opportunities where I can
                                contribute, learn and grow. If you have a good opportunity that
                                matches my skills and experience then don't hesitate to
                                <strong id='strong'> contact</strong> me.
                            </p>
                        </div>
                    </div>

                    <div className="column">
                        <div className='skill-content'>
                            <h3 className="about__content-title-skills">My Skills</h3>
                            <div className="skills">
                                <div className="skills__skill">C</div>
                                <div className="skills__skill">C++</div>
                                <div className="skills__skill">Python</div>
                                <div className="skills__skill">DSA</div>
                                <div className="skills__skill">HTML</div>
                                <div className="skills__skill">CSS</div>
                                <div className="skills__skill">JavaScript</div>
                                <div className="skills__skill">ReactJS</div>
                                <div className="skills__skill">Bootstrap</div>
                                <div className="skills__skill">SQL</div>
                                <div className="skills__skill">Mongo DB</div>
                                <div className="skills__skill">RPA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
