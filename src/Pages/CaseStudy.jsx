import React from 'react';
import LetDiscuss from '../Components/LetDiscuss'
import { NavLink } from 'react-router-dom';
import BannerContactForm from '../Components/BannerContactForm';
const CaseStudy = () => {
   
  return (
    <div>
      

      <section id="page_banner" class="page-main-banner homepage-banner section-spacing">
        <div class="breadcrumb-container">
            <div class="container">
                <ul class="breadcrumb">
                    <li><NavLink to="/" class="medium-text">Home</NavLink></li>                 
                    <li><span class="medium-text">Case Studies</span></li>
                </ul>
            </div>
        </div>
       <div class="container">
           <div class="row align-items-center">
               <div class="page-main-banner-colm col-lg-7 col-md-7">
                    <div class="page-main-banner-content">
                        <div class="page-main-banner-content-list">
                            <h1 class="title">Case Studies</h1>
                            <div class="large-text content">
                                <p class="text">"It's time! When a project tells a story" True stories of Shopify Experts and for their admires!</p>
                                <p class="text">Check our ability for wonderful dedication for solving Complex solutions in our Project Case Studies.</p>    
                            </div>
                        </div>
                    </div>  
                    <div class="page-main-banner-company-count d-flex ">
                       <div class="page-main-banner-company-count-list">
                           <span class="h1 count">200+</span>
                           <span class="text count-label">Shopify Projects Empowered</span>
                       </div> 
                       <div class="page-main-banner-company-count-list">
                            <span class="h1 count">38+</span>
                            <span class="text count-label">Global Ventures Served</span>
                       </div>
                       <div class="page-main-banner-company-count-list">
                            <span class="h1 count">8+</span>
                            <span class="text count-label">Years of Expertise</span>
                       </div>
                    </div>
                    <div class="page-main-banner-certified-icon">
                       <a class="shopify-logo-white-banner" title="Shopify Expert" href="https://hireecommerceexperts.com/" target="_blank"><img loading="lazy" src="assets/images/Shopify-experts.png" alt="we certified icon" width="275px" height="60px"/></a>
                    </div>
               </div>
               <BannerContactForm />
           </div>
       </div>
    </section>



    <div class="case-study-list-main">
        <div class="container">
            <div class="row row-mb-minus">
                <div class="col-lg-4 col-md-5 left-sidebar-tab-contact col-spacing-bottom">
                    <div class="sidebar-stickey">
                        <ul class="case-study-tabs">
                            <li class="clickme"><a href="javascript:void();" class="activelink h6 tab-name" data-tag="shopify_sotre">Shopify Sotre</a></li>
                            <li class="clickme"><a href="javascript:void();" class="h6 tab-name" data-tag="shopify_app">Shopify App</a></li>
                        </ul>   
    
                        <div class="vertical-contact-exp-banner">
                            <div class="vertical-contact-exp-banner-inner">
                                <img loading="lazy" src="assets/images/line-back-vertical-contact.png" class="vertical-contact-exp-line-background" alt="line back" width="400" height="150px"/>
                                <h3 class="h6 vertical-contact-exp-title">Are you looking to hire a <span>Shopify development company</span> or Shopify developers for your <span>Shopify development project?</span> </h3>
                                <div class="vertical-contact-exp-profile">
                                    <div class="image"><img loading="lazy" src="assets/images/asif.jpeg" alt="profile image" width="85px" height="85px"/></div>
                                    <div class="expert-name-content">
                                        <h4 class="h6 name"><span>Muhammad</span> Asif</h4>
                                        <span class="designation medium-text">(Co-founder & Chief Technology Officer)</span>
                                        <p class="content">Whether you are looking for Shopify store development or to hire Shopify app developers, NOXU Technologies is the one-stop organization for all. Get in touch with our technical expert for any concerns or queries related to your new project requirements.</p>
                                        <a href="" class="button white-button">Schedule a Call Now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
    
                <div class="col-lg-8 col-md-7 case-study-list-inner col-spacing-bottom">
                    <div class="case-study-tab-content" id="shopify_sotre">
                    <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/terra-supra.png" alt="alexandra gioia"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Terra Supra</h5>
                                        </div>                                    
                                        <p class="content">For the Terra Supra website, we have used PSD designs, including multiple features such as the Homepage custom collection section, an integrated after pay payment app, and custom designs created as per the client's requirements.</p>
                                        {/* <a href="alexandra-gioia-case-study.php" class="button">View Details</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>        
                    <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/black-insomnia.png" alt="alexandra gioia"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Black Insomnia</h5>
                                        </div>                                    
                                        <p class="content">For the black-insomnia website, we have used PSD designs, including multiple features such as the Homepage custom collection section, an integrated after pay payment app, and custom designs created as per the client's requirements.</p>
                                        {/* <a href="alexandra-gioia-case-study.php" class="button">View Details</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>        
                    <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/carmaspeed.png" alt="alexandra gioia"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Carmaspeed</h5>
                                        </div>                                    
                                        <p class="content">For the carmaspeed website, we have used PSD designs, including multiple features such as the Homepage custom collection section, an integrated after pay payment app, and custom designs created as per the client's requirements.</p>
                                        {/* <a href="alexandra-gioia-case-study.php" class="button">View Details</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>        
                    <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/proverbskin.png" alt="alexandra gioia"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Proverbskin</h5>
                                        </div>                                    
                                        <p class="content">For the proverbskin website, we have used PSD designs, including multiple features such as the Homepage custom collection section, an integrated after pay payment app, and custom designs created as per the client's requirements.</p>
                                        {/* <a href="alexandra-gioia-case-study.php" class="button">View Details</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>        
                    <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/pinksboutique.png" alt="alexandra gioia"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Pinksboutique</h5>
                                        </div>                                    
                                        <p class="content">For the pinksboutique website, we have used PSD designs, including multiple features such as the Homepage custom collection section, an integrated after pay payment app, and custom designs created as per the client's requirements.</p>
                                        {/* <a href="alexandra-gioia-case-study.php" class="button">View Details</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>        
                    <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/ceroplas.png" alt="alexandra gioia"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Ceroplas</h5>
                                        </div>                                    
                                        <p class="content">For the ceroplas website, we have used PSD designs, including multiple features such as the Homepage custom collection section, an integrated after pay payment app, and custom designs created as per the client's requirements.</p>
                                        {/* <a href="alexandra-gioia-case-study.php" class="button">View Details</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>        
                    <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/foziakhalid.png" alt="alexandra gioia"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Foziakhalid</h5>
                                        </div>                                    
                                        <p class="content">For the foziakhalid website, we have used PSD designs, including multiple features such as the Homepage custom collection section, an integrated after pay payment app, and custom designs created as per the client's requirements.</p>
                                        {/* <a href="alexandra-gioia-case-study.php" class="button">View Details</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </div>

                    
                    <div class="case-study-tab-content hide" id="shopify_app">
                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/case-study-aa.png" alt="Accessibility Assistant"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Accessibility Assistant</h5>
                                        </div>
                                        <p class="content">Get the ease of social responsibilities with Accessibility Assistant!</p>
                                        <a href="case-study-accessibility-assistant.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/dropshipping-app.png" alt="dropshipping-app"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Dropshipping App</h5>
                                        </div>                                    
                                        <p class="content">Through dropshipping, a store owner sells the product and passes on the sales to a third-party supplier, who then ships the order to the customer.</p>
                                        <a href="case-study-dropshipping-app.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="case-study-tab-content hide" id="shopify_app">
                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/case-study-aa.png" alt="Accessibility Assistant"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Accessibility Assistant</h5>
                                        </div>
                                        <p class="content">Get the ease of social responsibilities with Accessibility Assistant!</p>
                                        <a href="case-study-accessibility-assistant.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/dropshipping-app.png" alt="dropshipping-app"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Dropshipping App</h5>
                                        </div>                                    
                                        <p class="content">Through dropshipping, a store owner sells the product and passes on the sales to a third-party supplier, who then ships the order to the customer.</p>
                                        <a href="case-study-dropshipping-app.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="case-study-tab-content hide" id="shopify_app">
                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/case-study-aa.png" alt="Accessibility Assistant"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Accessibility Assistant</h5>
                                        </div>
                                        <p class="content">Get the ease of social responsibilities with Accessibility Assistant!</p>
                                        <a href="case-study-accessibility-assistant.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/dropshipping-app.png" alt="dropshipping-app"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Dropshipping App</h5>
                                        </div>                                    
                                        <p class="content">Through dropshipping, a store owner sells the product and passes on the sales to a third-party supplier, who then ships the order to the customer.</p>
                                        <a href="case-study-dropshipping-app.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="case-study-tab-content hide" id="shopify_app">
                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/case-study-aa.png" alt="Accessibility Assistant"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Accessibility Assistant</h5>
                                        </div>
                                        <p class="content">Get the ease of social responsibilities with Accessibility Assistant!</p>
                                        <a href="case-study-accessibility-assistant.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/dropshipping-app.png" alt="dropshipping-app"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Dropshipping App</h5>
                                        </div>                                    
                                        <p class="content">Through dropshipping, a store owner sells the product and passes on the sales to a third-party supplier, who then ships the order to the customer.</p>
                                        <a href="case-study-dropshipping-app.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="case-study-tab-content hide" id="shopify_app">
                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/case-study-aa.png" alt="Accessibility Assistant"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Accessibility Assistant</h5>
                                        </div>
                                        <p class="content">Get the ease of social responsibilities with Accessibility Assistant!</p>
                                        <a href="case-study-accessibility-assistant.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/dropshipping-app.png" alt="dropshipping-app"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Dropshipping App</h5>
                                        </div>                                    
                                        <p class="content">Through dropshipping, a store owner sells the product and passes on the sales to a third-party supplier, who then ships the order to the customer.</p>
                                        <a href="case-study-dropshipping-app.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="case-study-tab-content hide" id="shopify_app">
                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/case-study-aa.png" alt="Accessibility Assistant"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Accessibility Assistant</h5>
                                        </div>
                                        <p class="content">Get the ease of social responsibilities with Accessibility Assistant!</p>
                                        <a href="case-study-accessibility-assistant.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/dropshipping-app.png" alt="dropshipping-app"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Dropshipping App</h5>
                                        </div>                                    
                                        <p class="content">Through dropshipping, a store owner sells the product and passes on the sales to a third-party supplier, who then ships the order to the customer.</p>
                                        <a href="case-study-dropshipping-app.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="case-study-tab-content hide" id="shopify_app">
                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/case-study-aa.png" alt="Accessibility Assistant"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Accessibility Assistant</h5>
                                        </div>
                                        <p class="content">Get the ease of social responsibilities with Accessibility Assistant!</p>
                                        <a href="case-study-accessibility-assistant.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/dropshipping-app.png" alt="dropshipping-app"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Dropshipping App</h5>
                                        </div>                                    
                                        <p class="content">Through dropshipping, a store owner sells the product and passes on the sales to a third-party supplier, who then ships the order to the customer.</p>
                                        <a href="case-study-dropshipping-app.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="case-study-tab-content hide" id="shopify_app">
                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/case-study-aa.png" alt="Accessibility Assistant"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Accessibility Assistant</h5>
                                        </div>
                                        <p class="content">Get the ease of social responsibilities with Accessibility Assistant!</p>
                                        <a href="case-study-accessibility-assistant.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/dropshipping-app.png" alt="dropshipping-app"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Dropshipping App</h5>
                                        </div>                                    
                                        <p class="content">Through dropshipping, a store owner sells the product and passes on the sales to a third-party supplier, who then ships the order to the customer.</p>
                                        <a href="case-study-dropshipping-app.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="case-study-tab-content hide" id="shopify_app">
                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/case-study-aa.png" alt="Accessibility Assistant"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Accessibility Assistant</h5>
                                        </div>
                                        <p class="content">Get the ease of social responsibilities with Accessibility Assistant!</p>
                                        <a href="case-study-accessibility-assistant.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/dropshipping-app.png" alt="dropshipping-app"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Dropshipping App</h5>
                                        </div>                                    
                                        <p class="content">Through dropshipping, a store owner sells the product and passes on the sales to a third-party supplier, who then ships the order to the customer.</p>
                                        <a href="case-study-dropshipping-app.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="case-study-tab-content hide" id="shopify_app">
                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/case-study-aa.png" alt="Accessibility Assistant"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Accessibility Assistant</h5>
                                        </div>
                                        <p class="content">Get the ease of social responsibilities with Accessibility Assistant!</p>
                                        <a href="case-study-accessibility-assistant.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/dropshipping-app.png" alt="dropshipping-app"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Dropshipping App</h5>
                                        </div>                                    
                                        <p class="content">Through dropshipping, a store owner sells the product and passes on the sales to a third-party supplier, who then ships the order to the customer.</p>
                                        <a href="case-study-dropshipping-app.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="case-study-tab-content hide" id="shopify_app">
                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/case-study-aa.png" alt="Accessibility Assistant"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Accessibility Assistant</h5>
                                        </div>
                                        <p class="content">Get the ease of social responsibilities with Accessibility Assistant!</p>
                                        <a href="case-study-accessibility-assistant.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src="assets/images/dropshipping-app.png" alt="dropshipping-app"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">Dropshipping App</h5>
                                        </div>                                    
                                        <p class="content">Through dropshipping, a store owner sells the product and passes on the sales to a third-party supplier, who then ships the order to the customer.</p>
                                        <a href="case-study-dropshipping-app.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>


<LetDiscuss />
   


    </div>
  )
}

export default CaseStudy
