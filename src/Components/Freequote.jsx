import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RotatingLines } from 'react-loader-spinner'

const Freequote = ({ closeModal }) => {
  const modalRef = useRef();
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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [closeModal]);

  return (
    <>
      <div className="modals contact-modal contact-form-modal active-model">
        <div className="modal-overlap"></div>
        <div className="modal-dialog" ref={modalRef}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="form-title">Get A Free Quote</h4>
              <div className="contact-model-close model-close-icon" onClick={closeModal}>
                <svg className="close-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 33L18 18M18 18L3 3M18 18L33 3M18 18L3 33" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <div className="modal-body">
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
        </div>
      </div>
    </>
  );
}

export default Freequote;
