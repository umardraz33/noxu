import React from 'react'

const LetDiscuss = () => {
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
            <form method="post" id="contact-form">
    <div class="form-inner">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                <input type="hidden" name="c_url" value="index.html"/>
                    <input type="text" id="fname_contact" name="fname_contact" placeholder="First Name" class="form-field"/>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" id="lname_contact" name="lname_contact" placeholder="Last Name" class="form-field"/>
                    </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" id="email_contact" name="email_contact" placeholder="Enter Your Email" class="form-field email-tab"/>
                    </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <div class="select-location">
                        <div class="dropdown example">
                            <div class="ui fluid search selection dropdown country_contact">
                                <span>+</span>
                                <input type="number" placeholder="92" minlength="1" maxlength="4" id="country_contact" name="country_contact" class="form-field"/>
                            </div>
                        </div>
                        <input type="tel" class="form-field phone-number-field" aria-label="Phone Number" id="information-phone" name="phone_contact" required="required" placeholder="Phone Number" autocomplete="off"/>
                    </div> 
                    </div>
            </div>

            <div class="col-md-12">
                <div class="form-group">
                    <textarea class="form-field" aria-label="message" name="message_contact" placeholder="Write Message" id="message_contact"></textarea>
                    </div>
            </div>
            <div class="successmsg hide">
                Thank you.We will get back to you soon.
            </div>
            <div class="errormsg hide">
                Somthing went wrong.Please try again.
            </div>
            <div class="col-md-12 form-button">
                <div class="form-group">
                <button class="button submit-button" type="submit" aria-label="button Submit" id="get_free_quote">Submit</button>
                </div>
            </div>
        </div>
    </div>
</form>        </div>

    </div>
</section>
    </>
  )
}

export default LetDiscuss
