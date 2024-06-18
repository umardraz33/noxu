import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RotatingLines } from 'react-loader-spinner'
const LetDiscuss = () => {
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
    <>
      <section id="contact_form" class="contact-form-section  section-inner-spacing">
    <div class="container">
        <div class="section-head-part">
            <h2 class="section-head-title">Let’s Discuss</h2>
            <p class="section-head-content">Reach us now to get result-oriented, feature-rich, and high-performing
                Shopify development services. Let’s get together to craft your idea!</p>
        </div>

        <div class="contact-form">
            <form ref={form} onSubmit={sendEmail} id="contact-form">
    <div class="form-inner">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                <input type="hidden" name="c_url" value="index.html"/>
                <input className={`form-field ${formErrors.name && 'error-field'}`} aria-label="Name" type="text" id="name_popup" name="name" placeholder="Name" />
                <div style={{color:"red", fontSize:"14px", paddingTop:"3px"}}>{formErrors.name && 'Name is required'}</div>
                </div>
            </div>
            {/* <div class="col-md-6">
                <div class="form-group">
                    <input type="text" id="lname_contact" name="lname_contact" placeholder="Last Name" class="form-field"/>
                    </div>
            </div> */}

            <div class="col-md-6">
                <div class="form-group">
                <input className={`form-field ${formErrors.email && 'error-field'}`} aria-label="Email" type="email" id="email_popup" name="email" placeholder="Email Address"/>
<div style={{color:"red", fontSize:"14px", paddingTop:"3px"}}>{formErrors.email && 'Email is required'}</div>                    </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <div class="select-location">
                        <div class="dropdown example">
                            <div class="ui fluid search selection dropdown country_contact">
                            <span>+</span>
                        <input type="number" placeholder="92"  minLength="1" maxLength="4" id="country_popup" name="countrycode" className={`form-field noxuplacholder ${formErrors.countrycode && 'error-field'}`} />
                            </div>
                        </div>
                        <input type="tel" className={`form-field phone-number-field ${formErrors.phone && 'error-field'}`} aria-label="Phone Number" id="phone_popup" name="phone" placeholder="Phone Number" autoComplete="off" />
                    </div> 
                    <div style={{color:"red", fontSize:"14px", paddingTop:"3px"}}>{formErrors.phone && 'Phone number is required'}</div>
                    </div>
            </div>

            <div class="col-md-12">
                <div class="form-group">
                    <textarea className={`form-field ${formErrors.message && 'error-field'}`} aria-label="message" name="message" placeholder="Write Message" id="message_contact"></textarea>
                    <div style={{color:"red", fontSize:"14px", paddingTop:"3px"}}>{formErrors.message && 'Message is required'}</div>

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
        <RotatingLines
          visible={true}
          height="16"
          width="16"
          color="white"
          strokeWidth="4"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        "Submit"
      )}
    </button>
  </div>
  </div>
)}
           
          
        </div>
    </div>
</form>        </div>

    </div>
</section>
    </>
  )
}

export default LetDiscuss
