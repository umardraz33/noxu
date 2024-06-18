import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RotatingLines } from 'react-loader-spinner'
const BannerContactForm = () => {
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
    <div class="page-main-banner-colm col-lg-5 col-md-5">
      <div class="page-main-banner-contact-form">
        <h2 class="form-title h5">Get A Free Quote</h2>

        <form ref={form} onSubmit={sendEmail} id="contactpopupFrom" noValidate>

          <input type="hidden" name="c_url" value="NOXU Technologies.com/ecommerce-solution.php" />
          <div className={`form-group ${formErrors.name && 'error'}`}>
            <input className={`form-field ${formErrors.name && 'error-field'}`} aria-label="Name" type="text" id="name_popup" name="name" placeholder="Name" />
            <div style={{ color: "red", fontSize: "14px", paddingTop: "3px" }}>{formErrors.name && 'Name is required'}</div>

          </div>
          <div className={`form-group ${formErrors.email && 'error'}`}>
            <input className={`form-field ${formErrors.email && 'error-field'}`} aria-label="Email" type="email" id="email_popup" name="email" placeholder="Email Address" required />
            <div style={{ color: "red", fontSize: "14px", paddingTop: "3px" }}>{formErrors.email && 'Email is required'}</div>
          </div>
          <div className="form-group">
            <div className="select-location">
              <div className="dropdown example">
                <div className="ui fluid search selection dropdown country_popup">
                  <span>+</span>
                  <input type="number" placeholder="92" minLength="1" maxLength="4" id="country_popup" name="countrycode" className={`form-field noxuplacholder ${formErrors.countrycode && 'error-field'}`} />
                </div>
              </div>
              <input type="tel" className={`form-field phone-number-field ${formErrors.phone && 'error-field'}`} aria-label="Phone Number" id="phone_popup" name="phone" required placeholder="Phone Number" autoComplete="off" />
            </div>
            <div style={{ color: "red", fontSize: "14px", paddingTop: "3px" }}>{formErrors.phone && 'Phone number is required'}</div>

          </div>
          <div className={`form-group ${formErrors.message && 'error'}`}>
            <textarea className={`form-field ${formErrors.message && 'error-field'}`} aria-label="message" id="message_popup" name="message" placeholder="Write Message"></textarea>
            <div style={{ color: "red", fontSize: "14px", paddingTop: "3px" }}>{formErrors.message && 'Message is required'}</div>

          </div>
          {successMessage ? (
            <div className="success-msg" style={{ textAlign: "center" }}>
              Thank you. We will get back to you soon.
            </div>
          ) : (
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
          )}



        </form>
      </div>
    </div>
  )
}

export default BannerContactForm
