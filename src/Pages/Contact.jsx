import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <div>
    

      <div class="contact-page-main">
    <div class="contact-page-main-banner homepage-banner section-spacing">
        <div class="breadcrumb-container">
            <div class="container">
                <ul class="breadcrumb">
                    <li><a href="https://NOXU Technologies.com/" class="medium-text">Home</a></li>                
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
                        <h3 class="h6 title"><img loading="lazy" class="icon" src="assets/images/contact-page-phonel.png" alt="contact" width="50px" height="50px"/>Call On</h3> 
                        <div class="contact-info-link d-flex align-items-center">
                            <a href="tel:+447426341853"><img loading="lazy" src="assets/images/whatsapp.png" width="22px" height="22px" alt="whatsapp"/> +447426341853</a>
                            <a href="tel:+92331 7344448">+92331 7344448</a>
                        </div>
                    </div>

                    <div class="contact-inner-info">
                        <h3 class="h6 title"><img loading="lazy" class="icon" src="assets/images/contact-page-email.png" alt="email" width="50px" height="50px"/>Email On</h3> 
                        <div class="contact-info-link">
                            <a href="mailto:contact@noxutechnologies.com">contact@noxutechnologies.com</a>
                        </div>
                    </div>

                    <div class="contact-inner-info">
                        <h3 class="h6 title"><img loading="lazy" class="icon" src="assets/images/contact-office-hours.png" alt="hours" width="50px" height="50px"/>Open Hours</h3> 
                        <div class="contact-info-link">
                            <p>Mon to Fri – 9:30am to 6:45pm</p>
                        </div>
                    </div>

                    <div class="contact-inner-info">
                        <h3 class="h6 title"><img loading="lazy" class="icon" src="assets/images/contact-page-home-address.png" alt="address" width="50px" height="50px"/>Address</h3> 
                        <div class="contact-info-link">
                            <div class="country-address">
                                <div class="h18 country-name"><img loading="lazy" class="flag" src="assets/images/indian-flag.png" width="16px" height="16px" alt="indian flag"/>India</div>
                                <p class="address">701, 7th Floor, PV Enclave, opp. Courtyard by Marriott, off Sindhubhavan Road, Bodakdev, Ahmedabad, Gujarat 380054</p>
                            </div>
                            <div class="country-address">
                                <div class="h18 country-name"><img loading="lazy" class="flag" src="assets/images/canada-flag.png" width="16px" height="16px" alt="Canada flag"/>Canada</div>
                                <p class="address">3120, Kirwin avenue Mississauga L5A3R2</p>
                            </div>
                            <div class="country-address">
                                <div class="h18 country-name"><img loading="lazy" class="flag" src="assets/images/australia-flag.png" width="16px" height="16px" alt="Australia flag"/>Australia</div>
                                <p class="address">2/23 Foster Street, Surry Hills, NSW 2010 Australia.</p>
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
                            <form method="post" id="contact-form" novalidate="novalidate">
    <div class="form-inner">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                <input type="hidden" name="c_url" value="NOXU Technologies.com/contact-us.php"/>
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
</form> 
                        </div>
                    </div>
            </div>
        </div>
        <div class="row">
            <div class="contact-map-main">
                <iframe title="NOXU Technologies Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29375.07322695624!2d72.49003813095717!3d23.02802538680382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2a4c3f0c17%3A0x3f0af8bf9857f029!2sNOXU Technologies!5e0!3m2!1sen!2sin!4v1688729916274!5m2!1sen!2sin" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </div>
    </div> 
</div>


    </div>
  )
}

export default Contact
