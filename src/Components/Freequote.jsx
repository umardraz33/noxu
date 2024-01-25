import React, { useEffect, useRef } from 'react';

const Freequote = ({colsemodal}) => {
    const modalRef = useRef();

    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          colsemodal();
        }
      };
  
      document.addEventListener('mousedown', handleOutsideClick);
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [colsemodal]);
  return (
    <>
      <div class="modals contact-modal contact-form-modal active-model">
    <div class="modal-overlap"></div>
    <div class="modal-dialog" ref={modalRef}>
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="form-title">Get A Free Quote</h4>
                <div class="contact-model-close model-close-icon" onClick={colsemodal}>
                    <svg class="close-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33 33L18 18M18 18L3 3M18 18L33 3M18 18L3 33" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <div class="modal-body">
                <form method="post" id="contactpopupFrom" aria-label="Contact form" novalidate="novalidate">
    <input type="hidden" name="c_url" value="NOXU Technologies.com/ecommerce-solution.php"/>
    <div class="form-group">
        <input class="form-field" aria-label="Name" type="text" id="name_popup" name="name_popup" placeholder="Name"/>
    </div>
    <div class="form-group">
        <input class="form-field email-tab" aria-label="Email" type="email" id="email_popup" name="email_popup" placeholder="Email Address"/>
    </div>
    <div class="form-group">
        <div class="select-location">
            <div class="dropdown example">
                <div class="ui fluid search selection dropdown country_popup">
                    <span>+</span>
                    <input type="number" placeholder="92" minlength="1" maxlength="4" id="country_popup" name="country_popup" class="form-field"/>
                </div>
            </div>
            <input type="tel" class="form-field phone-number-field" aria-label="Phone Number" id="phone_popup" name="phone_popup" required="required" placeholder="Phone Number" autocomplete="off"/>
        </div>
    </div>
    <div class="form-group">
        <textarea class="form-field" aria-label="message" id="message_popup" name="message_popup" placeholder="Write Message"></textarea>
    </div>
    <div class="successmsg hide">
        Thank you.We will get back to you soon.
    </div>
    <div class="errormsg hide">
        Somthing went wrong.Please try again.
    </div>
    <div class="form-group">
        <button class="button submit-button" type="submit" aria-label="button" id="get_free_quote_popup">Submit</button>
    </div>
</form>            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Freequote
