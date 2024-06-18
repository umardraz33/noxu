import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RotatingLines } from 'react-loader-spinner'
import { NavLink } from 'react-router-dom';

const Contact = () => {
    const form = useRef();
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const errors = {};

        formData.forEach((value, key) => {
            if (!value.trim()) {
                errors[key] = 'This field is required';
            }
        });

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Show loader
            setSubmitting(true);

            emailjs.sendForm('service_h3rkoep', 'template_wiasvnh', e.target, 'ycoqXb31XW_L3FxaF')
                .then((result) => {
                    console.log(result.text);
                    setSuccessMessage(true);
                })
                .catch((error) => {
                    console.log(error.text);
                })
                .finally(() => {
                    // Hide loader whether success or error
                    setSubmitting(false);
                });
        }

    };
    return (
        <div>


            <div class="contact-page-main">
                <div class="contact-page-main-banner homepage-banner section-spacing">
                    <div class="breadcrumb-container">
                        <div class="container">
                            <ul class="breadcrumb">
                                <li><NavLink to="/" class="medium-text">Home</NavLink></li>
                                <li><span class="medium-text">Contact Us</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="page-main-banner-colm col-md-12">
                                <div class="page-main-banner-content">
                                    <div class="page-main-banner-content-list">
                                        <h1 class="title">Contact Us</h1>
                                        <div class="content">
                                            <p class="text">Reach us to get the benefits of our top-notch Shopify development solutions. Let us know your detailed requirements to bring revolutionary Shopify development solutions to your doorstep.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="section-inner-spacing">
                    <div class="container">
                        <div class="row row-mb-minus">
                            <div class="col-lg-5 col-md-12 col-spacing-bottom contact-info-main">
                                <div class="contact-information">
                                    <h2 class="title h4">Contact Info</h2>
                                    <div class="contact-inner-info">
                                        <h3 class="h6 title"><img loading="lazy" class="icon" src="assets/images/contact-page-phonel.png" alt="contact" width="50px" height="50px" />Call On</h3>
                                        <div class="contact-info-link d-flex align-items-center">
                                            {/* <a href="https://wa.me/447426341853" target='_blank'><img loading="lazy" src="assets/images/whatsapp.png" width="22px" height="22px" alt="whatsapp" /> +447426341853</a> */}
                                            {/* <a href="tel:+92331 7344448">+92331 7344448</a> */}
                                            <a href="tel:+92 331 7344448">+92 331 7344448</a>
                                        </div>
                                    </div>

                                    <div class="contact-inner-info">
                                        <h3 class="h6 title"><img loading="lazy" class="icon" src="assets/images/contact-page-email.png" alt="email" width="50px" height="50px" />Email On</h3>
                                        <div class="contact-info-link">
                                            <a href="mailto:contact@noxutechnologies.com">contact@noxutechnologies.com</a>
                                        </div>
                                    </div>

                                    <div class="contact-inner-info">
                                        <h3 class="h6 title"><img loading="lazy" class="icon" src="assets/images/contact-office-hours.png" alt="hours" width="50px" height="50px" />Open Hours</h3>
                                        <div class="contact-info-link">
                                            <p>Mon to Fri – 9:30am to 6:45pm</p>
                                        </div>
                                    </div>

                                    <div class="contact-inner-info">
                                        <h3 class="h6 title"><img loading="lazy" class="icon" src="assets/images/contact-page-home-address.png" alt="address" width="50px" height="50px" />Address</h3>
                                        <div class="contact-info-link">
                                            <div class="country-address">
                                                <div class="h18 country-name"><img loading="lazy" class="flag" src="assets/images/pakistan.png" width="16px" height="16px" alt="indian flag" />Pakistan</div>
                                                <p class="address">819-J2 Johar Town Lahore Punjab 54660, Pakistan.</p>
                                            </div>
                                            <div class="country-address">
                                                <div class="h18 country-name"><img loading="lazy" class="flag" src="assets/images/united-kingdom.png" width="16px" height="16px" alt="Canada flag" />London</div>
                                                <p class="address">Rear Of 151 Forest Road London, England, E17 6HE</p>
          
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-7 col-md-12 col-spacing-bottom">
                                <div class="contact-page-form-back">
                                    <div class="contact-form-heading">
                                        <h4 class="title">Your Information</h4>
                                    </div>
                                    <div class="contact-page-form">
                                        <form ref={form} onSubmit={sendEmail} id="contact-form">
                                            <div class="form-inner">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <input type="hidden" name="c_url" value="index.html" />
                                                            <input className={`form-field ${formErrors.name && 'error-field'}`} aria-label="Name" type="text" id="name_popup" name="name" placeholder="Name" />
                                                            <div style={{ color: "red", fontSize: "14px", paddingTop: "3px" }}>{formErrors.name && 'Name is required'}</div>
                                                        </div>
                                                    </div>
                  

                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <input className={`form-field ${formErrors.email && 'error-field'}`} aria-label="Email" type="email" id="email_popup" name="email" placeholder="Email Address" />
                                                            <div style={{ color: "red", fontSize: "14px", paddingTop: "3px" }}>{formErrors.email && 'Email is required'}</div>                    </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <div class="select-location">
                                                                <div class="dropdown example">
                                                                    <div class="ui fluid search selection dropdown country_contact">
                                                                        <span>+</span>
                                                                        <input type="number" placeholder="92" minLength="1" maxLength="4" id="country_popup" name="countrycode" className={`form-field noxuplacholder ${formErrors.countrycode && 'error-field'}`} />
                                                                    </div>
                                                                </div>
                                                                <input type="tel" className={`form-field phone-number-field ${formErrors.phone && 'error-field'}`} aria-label="Phone Number" id="phone_popup" name="phone" placeholder="Phone Number" autoComplete="off" />
                                                            </div>
                                                            <div style={{ color: "red", fontSize: "14px", paddingTop: "3px" }}>{formErrors.phone && 'Phone number is required'}</div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <textarea className={`form-field ${formErrors.message && 'error-field'}`} aria-label="message" name="message" placeholder="Write Message" id="message_contact"></textarea>
                                                            <div style={{ color: "red", fontSize: "14px", paddingTop: "3px" }}>{formErrors.message && 'Message is required'}</div>

                                                        </div>
                                                    </div>
                                                    {successMessage ? (
                                                        <div className="success-msg" style={{ textAlign: "center" }}>
                                                            Thank you. We will get back to you soon.
                                                        </div>
                                                    ) : (
                                                        <div class="col-md-12 form-button">
                                                            <div className="form-group">
                                                                <button className="button submit-button" type="submit" aria-label="button" id="get_free_quote_popup">
                                                                    {submitting ? (
                                                                        <RotatingLines visible={true} height="16" width="16" color="white" strokeWidth="4" animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} wrapperClass="" />
                                                                    ) : (
                                                                        "Submit"
                                                                    )}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}


                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact
