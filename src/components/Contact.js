import React from 'react';
import '../assets/css/contact.css';

function Contact(){
    return(
        <div className="contact">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-10">
                        <form>
                            <div className="row">
                                <div className="col-6">
                                    <div class="form-group">
                                        <label>Your Name</label>
                                        <input type="name" class="form-control" placeholder="Your Name"/>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div class="form-group">
                                        <label>Subject</label>
                                        <input type="text" class="form-control" placeholder="Subject"/>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div class="form-group">
                                        <label>Addess</label>
                                        <input type="text" class="form-control" placeholder="Addess"/>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div class="form-group">
                                        <label>Contact</label>
                                        <input type="number" class="form-control" placeholder="Contact"/>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div class="form-group">
                                        <label>Message</label>
                                        <textarea class="form-control" rows="5" placeholder='Message..'></textarea>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="press">
                                        <a href="/detail">Book Ticket</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;