import React from 'react'
import { useRef } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_73qpm0e', 'template_ga1470c', form.current, '-vDGga3n5Wt5rgUbR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        document.getElementById("contact-form").reset();
    };

    return (
        <div className='main-box'>
            <section className="mb-4">

                <h1 className="h1-responsive font-weight-bold text-center my-4">CONTACT</h1>
                <h4 className="text-center w-responsive mx-auto mb-5">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h4>

                <div className="row">

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form ref={form} onSubmit={sendEmail} id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div className="row">

                                <div className="col-md-6">
                                    <div id="lab" className="md-form mb-0">
                                        <label for="name" className="">Name</label>
                                        <input type="text" id="name" name="user-name" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div id="lab" className="md-form mb-0">
                                        <label for="email" className=''>Email</label>
                                        <input type="text" id="email" name="user-email" className="form-control" />
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div id="lab" className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label for="subject" className="">Subject</label>
                                        <input type="text" id="subject" name="subject" className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-md-12">

                                    <div id="lab" className="md-form">
                                        <label for="message">Message</label>
                                        <textarea type="text" id="message" name="message" rows="7" className="form-control md-textarea"></textarea>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div className="text-center text-md-left">
                            <button type='submit' className='btn btn-primary' onClick={sendEmail}>Send</button>
                        </div>
                        <div className="status"></div>
                    </div>

                </div>

            </section>
        </div>
    )
}
