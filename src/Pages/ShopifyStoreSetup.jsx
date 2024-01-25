import React from 'react'
import Slider from 'react-slick'
import { useState } from 'react'
import LetDiscuss from '../Components/LetDiscuss'
import Freelancing from '../Components/Freelancing'
import Faq from '../Components/Faq'
const ShopifyStoreSetup = () => {

    const faqData = [
        {
          question: 'What are the different ways to customize Shopify Plus checkout?',
          answer: 'You can customize the Shopify checkout look and feel using the checkout editor, Shopify Plus scripts, and checkout extensibility. Reach out to us for personalized checkout that matches your brand identity.',
        },
        {
          question: 'What are the significant benefits of Shopify Plus checkout customization?',
          answer: 'Customizing Shopify Plus checkout offers numerous benefits like a personalized checkout experience, tracking conversions, displaying products based on customers\' location, loyal customer engagement, and improved conversions.',
        },
        {
          question: 'Can you create Shopify Plus payment scripts?',
          answer: 'Shopify Plus developers at NOXU Technologies are well-versed in creating all 3 types of scripts, including 1. line item Scripts, 2. Shipping Scripts, and 3. Payment scripts.',
        },
        {
          question: 'Can you customize customers\' account pages and order statuses?',
          answer: 'Yes, our team of Shopify Plus experts can help you customize order status and customer account pages using checkout extensibility.',
        },
        {
          question: 'Can you customize Shopify Plus checkout?',
          answer: 'Absolutely, yes; with 8+ years of extensive expertise in core Shopify development, we can customize Shopify Plus checkout that exceeds your requirements and matches your brand identity.',
        },
      ];
    
      const [openAccordion, setOpenAccordion] = useState(null);
    
      const handleAccordionClick = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
      };

    const industriesData = [
        { name: 'Fashion', image: 'assets/images/image 13.png' },
        { name: 'Cosmetic', image: 'assets/images/image 14.png' },
        { name: 'Jewellery', image: 'assets/images/image 23.png' },
        { name: 'Jewellery', image: 'assets/images/image 23.png' },
        { name: 'Jewellery', image: 'assets/images/image 23.png' },
        // ... add more industries as needed
      ];
    
      const slideSettings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      };
    return (
        <div>
        
            <section id="page_banner" class="page-main-banner homepage-banner section-spacing">
                <div class="breadcrumb-container">
                    <div class="container">
                        <ul class="breadcrumb">
                            <li><a href="https://NOXU Technologies.com/" class="medium-text">Home</a></li>
                            <li><a href="#" class="medium-text">Services</a></li>
                            <li><span class="medium-text">Shopify Integration</span></li>
                        </ul>
                    </div>
                </div>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="page-main-banner-colm col-lg-7 col-md-7">
                            <div class="page-main-banner-content">
                                <div class="page-main-banner-content-list">
                                    <h1 class="title">Leading Shopify Store Development Company</h1>
                                    <div class="large-text content">
                                        <p class="text">Are you looking to hire the top Shopify development services to leverage the potential of online business?</p>
                                        <p class="text">Hire official Shopify developers from NOXU Technologies to create a powerful, intuitive, and sales-oriented Shopify store. As the best Shopify development company, we have powered multiple businesses by successfully converting their brick-mortar stores into future-ready Shopify stores in the minimum possible time.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="page-main-banner-company-count d-flex">
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
                                <a class="shopify-logo-white-banner" title="Shopify Expert" href="https://hireecommerceexperts.com/" target="_blank"><img loading="lazy" src="assets/images/Shopify-experts.png" alt="we certified icon" width="275px" height="60px" /></a>
                            </div>
                        </div>
                        <div class="page-main-banner-colm col-lg-5 col-md-5">
                            <div class="page-main-banner-contact-form">
                                <h2 class="form-title h5">Get A Free Quote</h2>
                                <form id="quote-form" method="post" name="quote-form" novalidate="novalidate">
                                    <input type="hidden" name="c_url" value="NOXU Technologies.com/shopify-store-setup.php" />
                                    <div class="form-group">
                                        <input class="form-field" aria-label="Name" type="text" id="name" name="name" placeholder="Name" />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-field email-tab" aria-label="Email" type="email" id="email" name="email" placeholder="Email Address" />
                                    </div>
                                    <div class="form-group">
                                        <div class="select-location">
                                            <div class="dropdown example">
                                                <div class="ui fluid search selection dropdown country_code">
                                                    <span>+</span>
                                                    <input type="number" placeholder="92" minlength="1" maxlength="4" id="country_code" name="country_code" class="form-field" />
                                                </div>
                                            </div>
                                            <input type="tel" class="form-field phone-number-field" aria-label="Phone Number" id="phone" name="phone" placeholder="Phone Number" autocomplete="off" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-field" aria-label="message" id="message" name="message" placeholder="Write Message" rows="5"></textarea>
                                    </div>
                                    <div class="successmsg hide">
                                        Thank you.We will get back to you soon.
                                    </div>
                                    <div class="errormsg hide">
                                        Somthing went wrong.Please try again.
                                    </div>
                                    <div class="form-group">
                                        <button class="button submit-button" type="submit" aria-label="button Submit" id="get_free_quotes">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="explore-amazing" class="explore-amazing section-spacing">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 align-items-center">
                            <div class="explore-amazing-left section-head-part">
                                <h2 class="h2 explore-amazing-heading section-head-title">Top Benefits of Choosing Shopify for Online Store
                                    Development</h2>
                                <p class="explore-amazing-heading-sub-desc section-head-content">Creating an online store from scratch is a challenging task; however, Shopify's
                                    eCommerce development platform can help you make it easy. More than 4.12
                                    million websites are leveraging the benefits of the Shopify platform all over the
                                    world. Hence Shopify is the best for small and medium sizes of businesses who are
                                    looking to scale their business with minimum efforts and limited budget. </p>
                                <p class="explore-amazing-heading-sub-desc section-head-content">Here are the most significant benefits of choosing Shopify for store
                                    development.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="explore-amazing-right">
                                <div class="explore-amazing-box">
                                    <div class="explore-amazing-icon-main">
                                        <img loading="lazy" src="assets/images/marketplace-5.png" width="40px" height="40px" alt="Large Pool of Top Features" />
                                    </div>
                                    <div class="explore-amazing-content">
                                        <h3 class="h5 explore-amazing-title">Large Pool of Top Features</h3>
                                        <p class="explore-amazing-desc">Shopify enables you to leverage unmatched features like Shopify POS, Out of box
                                            SEO tools, Shopify Dropshipping, Shopify Analytics, Abandoned Cart Reminders,
                                            Shopify Theme Store, Payment Gateway Integrations, and many more.</p>
                                    </div>
                                </div>
                                <div class="explore-amazing-box">
                                    <div class="explore-amazing-icon-main">
                                        <img loading="lazy" src="assets/images/sequrity-white.png" width="40px" height="40px" alt="Robust Security" />
                                    </div>
                                    <div class="explore-amazing-content">
                                        <h3 class="h5 explore-amazing-title">Robust Security</h3>
                                        <p class="explore-amazing-desc">Shopify is most popular among business owners because of the robust security it
                                            offers. Shopify is extremely good for both protecting customers' sensitive data at the
                                            same time easily accessible all the time.</p>
                                    </div>
                                </div>
                                <div class="explore-amazing-box">
                                    <div class="explore-amazing-icon-main">
                                        <img loading="lazy" src="assets/images/easy-installation.png" width="40px" height="40px" alt="Easy to Setup and Use" />
                                    </div>
                                    <div class="explore-amazing-content">
                                        <h3 class="h5 explore-amazing-title">Easy to Setup and Use</h3>
                                        <p class="explore-amazing-desc">Another significant benefit of Shopify is it very easy to set up and manage. You don’t
                                            need any kind of coding knowledge to customize it. Additionally, Shopify is selfhosted, so as a business owner, you don't need to worry about website performance
                                            and data security.</p>
                                    </div>
                                </div>
                                <div class="explore-amazing-box">
                                    <div class="explore-amazing-icon-main">
                                        <img loading="lazy" src="assets/images/useful-marketing-tools.png" width="40px" height="40px" alt="Useful Marketing Tools" />
                                    </div>
                                    <div class="explore-amazing-content">
                                        <h3 class="h5 explore-amazing-title">Useful Marketing Tools</h3>
                                        <p class="explore-amazing-desc">Even the basic plan of the Shopify eCommerce platform offers effective and readyto-use marketing tools like Shopify emails, Shopify forms, Automations, etc. As a
                                            Shopify store owner, Shopify allows you to use a rapidly growing collection of
                                            templates for running marketing campaign that boosts sales. </p>
                                    </div>
                                </div>
                                <div class="explore-amazing-box">
                                    <div class="explore-amazing-icon-main">
                                        <img loading="lazy" src="assets/images/mobile-responsive.png" width="40px" height="40px" alt="Mobile Responsive" />
                                    </div>
                                    <div class="explore-amazing-content">
                                        <h3 class="h5 explore-amazing-title">Mobile Responsive</h3>
                                        <p class="explore-amazing-desc">Number of mobile users is skyrocketing day by day. So, a Mobile responsive Shopify
                                            store is a must to increase customer engagement and accelerate sales. Shopify
                                            themes are fully responsive, which means it enables you to build a mobile-friendly
                                            Shopify store. Resulting in more customers attracted to your store and increased
                                            customer conversion rates.</p>
                                    </div>
                                </div>
                                <div class="explore-amazing-box">
                                    <div class="explore-amazing-icon-main">
                                        <img loading="lazy" src="assets/images/customer-service-white.png" width="40px" height="40px" alt="24X7 Customer Support" />
                                    </div>
                                    <div class="explore-amazing-content">
                                        <h3 class="h5 explore-amazing-title">24X7 Customer Support</h3>
                                        <p class="explore-amazing-desc">Shopify team of experts is always available to address your queries or concern. It
                                            allows you easy access to technical support through various mediums like live chat,
                                            email, calls, etc. Also, joining the Shopify community on social media platforms can
                                            help you get help or support from the best Shopify experts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="why-you-choose-us-section section-inner-spacing section-spacing">
                <div class="container">
                    <div class="section-head-part">
                        <h2 class="section-head-title">Why Should You Choose NOXU Technologies for Shopify Store
                            Development?</h2>
                        <p class="section-head-content">Being a top-notch Shopify store development company, we have successfully
                            delivered 200+ Shopify projects, including 20+ Shopify apps globally. We guarantee
                            robust Shopify store development solutions, whether it is about developing a Shopify
                            store from scratch or redesigning the existing Shopify store. </p>
                    </div>

                    <div class="row row-mb-minus justify-content-center">
                        <div class="col-md-4 col-sm-6 col-spacing-bottom">
                            <div class="why-you-choose-us-points">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon" src="assets/images/coding.png" width="70px" height="70px" alt="Variety of Shopify Developers" />
                                </div>
                                <h3 class="h6 title">Variety of Shopify Developers</h3>
                                <p class="medium-text text">We have a large pool of official Shopify experts, including offshore developers,
                                    offshore teams, remote developers, and Scrum teams who use their strong technical
                                    background, training skills, and market insight for robust Shopify store development.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-spacing-bottom">
                            <div class="why-you-choose-us-points">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon" src="assets/images/experience.png" width="70px" height="70px" alt="8+ years of Extensive Expertise" />
                                </div>
                                <h3 class="h6 title">8+ years of Extensive Expertise</h3>
                                <p class="medium-text text">As the best Shopify store development company, we have been serving all sizes and
                                    types of businesses for more than 8 years. We have delivered masterpiece Shopify
                                    stores using technical proficiency as well as an understanding of the latest
                                    eCommerce market insight.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-spacing-bottom">
                            <div class="why-you-choose-us-points">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon" src="assets/images/affordable-price.png" width="70px" height="70px" alt="Affordable Price" />
                                </div>
                                <h3 class="h6 title">Affordable Price</h3>
                                <p class="medium-text text">We offer best-in-market and flexible engagement plans that include full-time, parttime, hourly, and project-based. You can choose any hiring model according to your
                                    project requirements. It will save your upfront cost by eliminating excess expenses
                                    like hiring more additional Shopify developers.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-spacing-bottom">
                            <div class="why-you-choose-us-points">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon" src="assets/images/success-driven-ecommerce-store.png" width="70px" height="70px" alt="Deliver Success-driven eCommerce Store" />
                                </div>
                                <h3 class="h6 title">Deliver Success-driven eCommerce Store</h3>
                                <p class="medium-text text">We at NOXU Technologies are committed to delivering an online store that becomes a driving
                                    force for your sales growth. Our certified Shopify developers utilize all the latest
                                    features of Shopify and their creativity to create an aesthetically appealing and fully
                                    functional Shopify store.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-spacing-bottom">
                            <div class="why-you-choose-us-points">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon" src="assets/images/customer-service.png" width="70px" height="70px" alt="Full-time Customer Assistance" />
                                </div>
                                <h3 class="h6 title">Full-time Customer Assistance</h3>
                                <p class="medium-text text">As the best Shopify store development agency, we have impressed our global as well
                                    as national clients by providing round-the-clock assistance according to their time
                                    zone. We ensure post-launch customer support and maintenance with effective
                                    follow-ups and backup processes. </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-spacing-bottom">
                            <div class="why-you-choose-us-points">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon" src="assets/images/on-time.png" width="70px" height="70px" alt="Numerous Shopify development services" />
                                </div>
                                <h3 class="h6 title">Numerous Shopify development services</h3>
                                <p class="medium-text text">We offer all Shopify development services that include Shopify store development
                                    with a custom theme, Shopify store development with custom design, redesigning,
                                    customization, maintenance, speed optimization, integration, etc. All you need to do
                                    is just share your specific requirement and relax; we promise world-class Shopify
                                    development services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="icon-and-text-grid-section section-spacing">
                <div class="container">
                    <div class="section-head-part">
                        <h2 class="section-head-title">Different Types of eCommerce Websites We Develop</h2>
                    </div>
                    <div class="row row-mb-minus justify-content-center">
                        <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
                            <div class="icon-and-text-grid-back">
                                <div class="icon-part">
                                    <img loading="lazy" src="assets/images/business-to-business.png" width="70px" height="70px" alt="Business to Business" />
                                </div>
                                <h3 class="h6 title">Business to Business</h3>
                                <p class="medium-text">If you want to sell your product or services directly to businesses, our Shopify
                                    developers excel in developing B2B Shopify eCommerce websites.</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
                            <div class="icon-and-text-grid-back">
                                <div class="icon-part">
                                    <img loading="lazy" src="assets/images/business-to-consumer.png" width="70px" height="70px" alt="Business to Consumer" />
                                </div>
                                <h3 class="h6 title">Business to Consumer</h3>
                                <p class="medium-text">As a business owner, if you are looking to target a niche audience to sell your
                                    products or services, our business-to-consumer Shopify eCommerce websites are the
                                    best.</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
                            <div class="icon-and-text-grid-back">
                                <div class="icon-part">
                                    <img loading="lazy" src="assets/images/direct-company.png" width="70px" height="70px" alt="Direct to Company" />
                                </div>
                                <h3 class="h6 title">Direct to Company</h3>
                                <p class="medium-text">As a manufacturer, if you want to sell your product or services directly to consumers,
                                    NOXU Technologies can help you. Our official Shopify experts specialize in developing D2C
                                    Shopify eCommerce websites.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="big-empire-banner" class="big-empire-banner section-spacing">
                <div class="container">
                    <div class="big-empire-banner-main">
                        <div class="big-empire-banner-left">
                            <h3 class="h5 big-empire-banner-title">NOXU Technologies is everything you need to scale your online business!</h3>
                            <p class="big-empire-banner-sub-desc">Looking for an online store that reflects your brand identity?</p>
                            <p class="big-empire-banner-sub-desc">Let us build a Shopify store that brings your vision to life.</p>

                            <a href="" class="button white-button">Contact Us</a>
                        </div>
                        <div class="big-empire-banner-right">
                            <img loading="lazy" src="assets/images/new-project-photoroom.png" width="409px" height="328px" alt="contact" />
                        </div>
                    </div>
                </div>
            </section>


            <section id="workflow_section_two" class="workflow-section section-spacing">
                <div class="container">
                    <div class="section-head-part">
                        <h2 class="section-head-title">Our Strategic Workflow to Serve Your Convenience</h2>
                        <p class="section-head-content">As the best Shopify store development company, our highly skilled Shopify
                            developers are well-versed in all trending insights of the Shopify eCommerce market.
                            It ensures rapid, effective, bug-free, and efficient Shopify store development.</p>
                    </div>

                    <div class="workflow-step workflow-small">
                        <div class="workflow-step-wrap row-mb-minus">
                            <div class="workflow-single col-spacing-bottom">
                                <div class="workflow-single-back">
                                    <div class="image">
                                        <img loading="lazy" class="icon" src="assets/images/conversation.png" width="50px" height="50px" alt="Discuss Project Requirements" />
                                    </div>
                                    <span class="workflow-count">01</span>
                                    <h3 class="h6 title">Discuss Project Requirements</h3>
                                    <ul class="small-text workflow-content">
                                        <li>Our certified Shopify experts discuss with clients to understand what are the exact
                                            project requirements.</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="workflow-single col-spacing-bottom">
                                <div class="workflow-single-back">
                                    <div class="image">
                                        <img loading="lazy" class="icon" src="assets/images/planing.png" width="50px" height="50px" alt="Planning" />
                                    </div>
                                    <span class="workflow-count">02</span>
                                    <h3 class="h6 title">Planning</h3>
                                    <ul class="small-text workflow-content">
                                        <li>After knowing clients' specific requirements, we prepare strategic planning for an
                                            uninterrupted online store development process. It helps us to rapidly deliver the
                                            final product that meets customers' unique requirements.</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="workflow-single col-spacing-bottom">
                                <div class="workflow-single-back">
                                    <div class="image">
                                        <img loading="lazy" class="icon" src="assets/images/web-design 1.png" width="50px" height="50px" alt="Designing &amp; Development" />
                                    </div>
                                    <span class="workflow-count">03</span>
                                    <h3 class="h6 title">Designing &amp; Development</h3>
                                    <ul class="small-text workflow-content">
                                        <li>Our passionate Shopify developers use years of experience, technical background
                                            and modern tools &amp; technology to deliver a future-ready Shopify store.</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="workflow-single col-spacing-bottom">
                                <div class="workflow-single-back">
                                    <div class="image">
                                        <img loading="lazy" class="icon" src="assets/images/test.png" width="50px" height="50px" alt="QA Testing" />
                                    </div>
                                    <span class="workflow-count">04</span>
                                    <h3 class="h6 title">QA Testing</h3>
                                    <ul class="small-text workflow-content">
                                        <li>Before releasing a final product for UAT, our QA team ensure the quality of the
                                            website by performing rigid quality testing.</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="workflow-single col-spacing-bottom">
                                <div class="workflow-single-back">
                                    <div class="image">
                                        <img loading="lazy" class="icon" src="assets/images/startup 2.png" width="50px" height="50px" alt="UAT &amp; Deploy" />
                                    </div>
                                    <span class="workflow-count">05</span>
                                    <h3 class="h6 title">UAT &amp; Deploy</h3>
                                    <ul class="small-text workflow-content">
                                        <li>After successful QA testing, we go for UAT to validate end-to-end functionality from
                                            a customer or end-user side. After getting approval from the end user, the Shopify
                                            store is ready to deploy.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="services-list-section section-spacing">
                <div class="container">
                    <div class="section-head-part">
                        <h2 class="section-head-title">Top-notch Shopify Store Development Services</h2>
                    </div>

                    <div class="row services-main-wrap services-list row-mb-minus justify-content-center">
                        <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="single-services-box">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon normal-image" width="84px" height="84px" src="assets/images/store.png" alt="Shopify Store Setup with Dawn Theme" />
                                    <img loading="lazy" class="icon hover-image" width="84px" height="84px" src="assets/images/store-hover.png" alt="Shopify Store Setup with Dawn Theme" />
                                </div>
                                <div class="services-content">
                                    <h3 class="title h4">Shopify Store Setup with Dawn Theme</h3>
                                    <p class="text">As a top Shopify store development company, we offer feature-rich Shopify store
                                        setup with a dawn theme. Our official Shopify experts have enabled many brands to
                                        leverage significant benefits of dawn themes like storytelling visuals, access to the
                                        latest features, minimum steps for store setup, and quick launch. </p>
                                </div>

                            </div>
                        </div>
                        <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="single-services-box">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon normal-image" width="84px" height="84px" src="assets/images/shopify-store-setup-premium-theme.png" alt="Shopify Store Setup with Premium Theme" />
                                    <img loading="lazy" class="icon hover-image" width="84px" height="84px" src="assets/images/shopify-store-setup-premium-theme-hover.png" alt="Shopify Store Setup with Premium Theme" />
                                </div>
                                <div class="services-content">
                                    <h3 class="title h4">Shopify Store Setup with Premium Theme</h3>
                                    <p class="text">Professional UI/UX designers from NOXU Technologies makes an aesthetically pleasing design
                                        that helps businesses to deliver an interactive user experience to their niche
                                        audience. Using these highly custom Shopify themes, our Shopify developers create
                                        best-in-class feature-rich Shopify stores with custom themes as per the client's
                                        requirement.</p>
                                </div>

                            </div>
                        </div>
                        <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="single-services-box">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon normal-image" width="84px" height="84px" src="assets/images/store-custom-design.png" alt="Shopify Store Setup with Custom Design" />
                                    <img loading="lazy" class="icon hover-image" width="84px" height="84px" src="assets/images/store-custom-design-hover.png" alt="Shopify Store Setup with Custom Design" />
                                </div>
                                <div class="services-content">
                                    <h3 class="title h4">Shopify Store Setup with Custom Design</h3>
                                    <p class="text">A team of Shopify experts understands your specific requirement in detail and
                                        follows proven strategies, and uses their strong technical background to build robust
                                        Shopify stores with custom design. Being the best Shopify store development
                                        agency, we promise outstanding Shopify store setups with a custom design. </p>
                                </div>

                            </div>
                        </div>
                        <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="single-services-box">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon normal-image" width="84px" height="84px" src="assets/images/store-redesign.png" alt="Shopify Store Redesign" />
                                    <img loading="lazy" class="icon hover-image" width="84px" height="84px" src="assets/images/store-redesign-hover.png" alt="Shopify Store Redesign" />
                                </div>
                                <div class="services-content">
                                    <h3 class="title h4">Shopify Store Redesign</h3>
                                    <p class="text">We at NOXU Technologies have helped multiple clients across the globe to level up their
                                        design standards and accelerate customer conversions rate. Our Shopify developers
                                        are experts in redesigning existing online stores into fully responsive Shopify stores
                                        that help you bring more sales, get more traffic, and improve brand identity.</p>
                                </div>

                            </div>
                        </div>

                        <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="single-services-box">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon normal-image" width="84px" height="84px" src="assets/images/support-maintenance-services.png" alt="Shopify store Support &amp; Maintenance" />
                                    <img loading="lazy" class="icon hover-image" width="84px" height="84px" src="assets/images/support-maintenance-hover-services.png" alt="Shopify store Support &amp; Maintenance" />
                                </div>
                                <div class="services-content">
                                    <h3 class="title h4">Shopify store Support &amp; Maintenance</h3>
                                    <p class="text">NOXU Technologies is the best Shopify store development company for providing 24X7 postlaunch customer support. Our Shopify developers are always ready to address errors
                                        to ensure your store runs smoothly and performs well. We offer an annual
                                        maintenance plan for managing and upgrading your store whenever you need it.</p>
                                </div>

                            </div>
                        </div>

                        <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="single-services-box">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon normal-image" width="84px" height="84px" src="assets/images/customizations.png" alt="Shopify Store Customizations" />
                                    <img loading="lazy" class="icon hover-image" width="84px" height="84px" src="assets/images/customizations-hover.png" alt="Shopify Store Customizations" />
                                </div>
                                <div class="services-content">
                                    <h3 class="title h4">Shopify Store Customizations</h3>
                                    <p class="text">Our Shopify developers are familiar with the ins and out of the latest Shopify market
                                        and are experts in Shopify store customization.We are one of the leading Shopify
                                        store development companies that have maintained a proven record of delivering
                                        store customization services to all sizes and types of businesses to introduce newage standards.</p>
                                </div>

                            </div>
                        </div>

                        <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="single-services-box">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon normal-image" width="84px" height="84px" src="assets/images/store-speed-optimizations.png" alt="Shopify Store Site Speed Optimizations" />
                                    <img loading="lazy" class="icon hover-image" width="84px" height="84px" src="assets/images/store-speed-optimizations-hover.png" alt="Shopify Store Site Speed Optimizations" />
                                </div>
                                <div class="services-content">
                                    <h3 class="title h4">Shopify Store Site Speed Optimizations</h3>
                                    <p class="text">As the best Shopify store development agency, our Shopify developers have a great
                                        command over Shopify store site speed optimizations. Our Shopify speed
                                        optimization services will help you accelerate page loading speed, page performance
                                        and enhance customer conversion rates. We guarantee a minimum bounce rate and
                                        zero downtime.</p>
                                </div>

                            </div>
                        </div>

                        <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="single-services-box">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon normal-image" width="84px" height="84px" src="assets/images/third-party-apps-integrations.png" alt="Shopify Third-Party Apps Integrations" />
                                    <img loading="lazy" class="icon hover-image" width="84px" height="84px" src="assets/images/third-party-apps-integrations-hover.png" alt="Shopify Third-Party Apps Integrations" />
                                </div>
                                <div class="services-content">
                                    <h3 class="title h4">Shopify Third-Party Apps Integrations</h3>
                                    <p class="text">Our team of Shopify experts specializes in Shopify third-party apps integration that
                                        has helped numerous clients to boost business growth. We excel in integrating all
                                        types of third-party apps like Product Review, Wishlist, Product Subscription, Multi
                                        Vendor Marketplace, Klaviyo, product filter and search, and many more. </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section id="our-portfolio" class="our-portfolio section-spacing">
                <div class="container">
                    <div class="section-head-part">
                        <h2 class="section-head-title">Some of Our Prominent Shopify Projects </h2>
                        <p class="section-head-content">Find some of our successful Shopify store development projects that have powered
                            multiple established brands to convert their brick-to-mortar stores to booming
                            Shopify stores.</p>
                    </div>
                    <div class="our-portfolio-grid row row-mb-minus justify-content-center">

                        <div class="our-portfolio-item col-lg-4 col-sm-6 col-spacing-bottom">
                            <div class="our-portfolio-box">
                                <img loading="lazy" src="assets/images/kclot-portfolio.png" width="373px" height="500px" alt="Aoklok" />
                                <a href="https://www.aoklok.com/" target="_blank">
                                    <div class="our-portfolio-content">
                                        <div class="our-portfolio-details">
                                            <h3 class="h3 our-portfolio-title">Aoklok</h3>
                                            <p class="our-portfolio-sub-title">Web Store</p>
                                            <div class="right-arrow">
                                                <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.375 1L23.75 7.25L17.375 13.5" stroke="#E94FCA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M1 7.25H21.875" stroke="#E94FCA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="our-portfolio-item col-lg-4 col-sm-6 col-spacing-bottom">
                            <div class="our-portfolio-box">
                                <img loading="lazy" src="assets/images/gofig-portfolio.png" width="373px" height="500px" alt="Gofig" />
                                <a href="https://gofig.in/" target="_blank">
                                    <div class="our-portfolio-content">
                                        <div class="our-portfolio-details">
                                            <h3 class="h3 our-portfolio-title">Gofig</h3>
                                            <p class="our-portfolio-sub-title">Web Store</p>
                                            <div class="right-arrow">
                                                <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.375 1L23.75 7.25L17.375 13.5" stroke="#E94FCA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M1 7.25H21.875" stroke="#E94FCA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Freelancing />


            <section class="industries-we-work section-inner-spacing section-spacing mt-0">
                <div class="container">
                    <div class="section-head-part">
                        <h2 class="section-head-title">We Have Been incredibly Building for Diverse Sectors</h2>
                    </div>

                    <Slider {...slideSettings}>
          {industriesData.map((industry, index) => (
            <div key={index} className="industries-we-work-single">
              <div className="industries-we-work-inner">
                <div className="industries-image">
                  <img loading="lazy" src={industry.image} width="273px" height="180px" alt={industry.name} />
                </div>
                <div className="industries-name h6">
                  {industry.name}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
                </div>
            </section>


            <section id="prices-section" class="price-section section-spacing">
        <div class="section-head-part">
            <h2 class="section-head-title">Convenient Hiring Plans</h2>       
        </div>
        <div class="container">
            <div class="row row-mb-minus">
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-spacing-bottom">
                    <div class="price-box">
                        <h3 class="h5 price-box-heading">Round-the-Clock</h3>
                        <div class="price-content-main">
                            <div class="price-icon">
                                <img loading="lazy" src="assets/images/approved.png" width="45px" height="45px" alt="Round the Clock"/>
                            </div>
                            <div class="price-time-main">
                                <h4 class="h5 price-time-title">Time Duration</h4>
                                <p class="price-time-desc">1 Month (160 hrs)</p>
                            </div>
                            <div class="price-time-main">
                                <h4 class="h5 price-time-title">Billing</h4>
                                <p class="price-time-desc">Monthly</p>
                            </div>
                            <div class="price-time-main">
                                <h4 class="h5 price-time-title">Communication</h4>
                                <ul class="price-social-icon">
                                    <li><a href="mailto:contact@noxutechnologies.com" aria-label="Mail"><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.55774 1.94439L7.77927 6.96338C8.84967 7.82688 10.3214 7.82688 11.3918 6.96338L17.6133 1.94434" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M16.1111 1H2.88889C1.84568 1 1 1.84568 1 2.88889V12.3333C1 13.3765 1.84568 14.2222 2.88889 14.2222H16.1111C17.1543 14.2222 18 13.3765 18 12.3333V2.88889C18 1.84568 17.1543 1 16.1111 1Z" stroke="white" stroke-linecap="round"></path>
                                        </svg></a></li>
                                    <li><a href="https://shivlab.slack.com" aria-label="Slack" target="_blank"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.31079 1C6.36022 1 5.58974 1.77221 5.58974 2.7245C5.58952 2.95074 5.63386 3.17481 5.72023 3.38391C5.80659 3.59302 5.9333 3.78306 6.09312 3.9432C6.25293 4.10333 6.44272 4.23042 6.65165 4.31721C6.86057 4.40399 7.08456 4.44878 7.31079 4.44901H9.03209V2.7245C9.03252 2.26757 8.85136 1.8292 8.52856 1.5058C8.20576 1.18239 7.76773 1.00046 7.31079 1ZM7.31079 5.59868H2.72105C1.77048 5.59868 1 6.37089 1 7.32347C1 8.27578 1.77048 9.04798 2.72105 9.04798H7.31108C8.26135 9.04798 9.03209 8.27578 9.03209 7.32347C9.03209 6.37089 8.26135 5.59868 7.31079 5.59868Z" stroke="white" stroke-linejoin="round"></path>
                                        <path d="M18.2117 7.32347C18.2117 6.37089 17.4409 5.59868 16.4904 5.59868C15.5398 5.59868 14.7693 6.37089 14.7693 7.32347V9.04798H16.4904C16.9473 9.04755 17.3853 8.86554 17.7081 8.54222C18.0309 8.21881 18.2121 7.7804 18.2117 7.32347ZM13.622 7.32347V2.7245C13.6223 2.26757 13.4412 1.8292 13.1184 1.5058C12.7956 1.18239 12.3575 1.00046 11.9006 1C10.95 1 10.1796 1.77221 10.1796 2.7245V7.32318C10.1796 8.27604 10.95 9.04824 11.9006 9.04824C12.3575 9.04781 12.7956 8.86588 13.1184 8.54247C13.4412 8.21907 13.6223 7.7804 13.622 7.32347Z" stroke="white" stroke-linejoin="round"></path>
                                        <path d="M11.9006 18.2457C12.3575 18.2453 12.7956 18.0634 13.1184 17.74C13.4412 17.4166 13.6223 16.9782 13.622 16.5212C13.6223 16.0643 13.4412 15.626 13.1184 15.3025C12.7956 14.9791 12.3575 14.7972 11.9006 14.7967H10.1796V16.5212C10.1796 17.4735 10.95 18.2457 11.9006 18.2457ZM11.9006 13.647H16.4906C17.4409 13.647 18.2117 12.8748 18.2117 11.9223C18.2121 11.4653 18.0309 11.0269 17.7081 10.7036C17.3853 10.3802 16.9473 10.1982 16.4904 10.1978H11.9006C10.95 10.1978 10.1796 10.97 10.1796 11.9223C10.1793 12.1485 10.2236 12.3726 10.31 12.5816C10.3964 12.7908 10.5231 12.9808 10.6829 13.1409C10.8427 13.3011 11.0325 13.4282 11.2414 13.5149C11.4504 13.6018 11.6744 13.6469 11.9006 13.647Z" stroke="white" stroke-linejoin="round"></path>
                                        <path d="M1 11.9223C0.999777 12.1485 1.04411 12.3726 1.13048 12.5816C1.21684 12.7908 1.34355 12.9808 1.50337 13.1409C1.66318 13.3011 1.85297 13.4282 2.0619 13.5149C2.27083 13.6018 2.49481 13.6465 2.72105 13.6468C3.17798 13.6463 3.61602 13.4643 3.93883 13.1409C4.26164 12.8176 4.44276 12.3792 4.44238 11.9223V10.1978H2.72105C1.77048 10.1978 1 10.97 1 11.9223ZM5.58975 11.9223V16.521C5.58975 17.4735 6.36022 18.2457 7.3108 18.2457C7.76773 18.2453 8.20576 18.0634 8.52856 17.74C8.85137 17.4166 9.03252 16.9782 9.03209 16.5212V11.9223C9.03234 11.696 8.98803 11.4719 8.90162 11.2628C8.81522 11.0537 8.68854 10.8636 8.52865 10.7035C8.36884 10.5434 8.17899 10.4163 7.97004 10.3295C7.76106 10.2427 7.53705 10.1979 7.3108 10.1978C6.36022 10.1978 5.58975 10.97 5.58975 11.9223Z" stroke="white" stroke-linejoin="round"></path>
                                        </svg></a></li>
                                    <li><a href="tel:9016777787" aria-label="Phone"><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 15.697C18 16.021 17.9319 16.354 17.7872 16.678C17.6425 17.002 17.4552 17.308 17.2083 17.596C16.7912 18.082 16.3315 18.433 15.8122 18.658C15.3015 18.883 14.7481 19 14.1522 19C13.2839 19 12.356 18.784 11.3771 18.343C10.3981 17.902 9.41913 17.308 8.44867 16.561C7.4697 15.805 6.54181 14.968 5.65648 14.041C4.77967 13.105 3.98798 12.124 3.28142 11.098C2.58337 10.072 2.02153 9.046 1.61292 8.029C1.20431 7.003 1 6.022 1 5.086C1 4.474 1.10215 3.889 1.30646 3.349C1.51077 2.8 1.83425 2.296 2.28543 1.846C2.83025 1.279 3.42614 1 4.05608 1C4.29444 1 4.5328 1.054 4.74562 1.162C4.96695 1.27 5.16274 1.432 5.31597 1.666L7.29094 4.609C7.44417 4.834 7.55483 5.041 7.63145 5.239C7.70806 5.428 7.75063 5.617 7.75063 5.788C7.75063 6.004 7.69104 6.22 7.57186 6.427C7.46119 6.634 7.29945 6.85 7.09514 7.066L6.44817 7.777C6.35453 7.876 6.31197 7.993 6.31197 8.137C6.31197 8.209 6.32048 8.272 6.33751 8.344C6.36305 8.416 6.38858 8.47 6.40561 8.524C6.55884 8.821 6.82273 9.208 7.1973 9.676C7.58037 10.144 7.98898 10.621 8.43165 11.098C8.89134 11.575 9.334 12.016 9.78518 12.421C10.2278 12.817 10.5939 13.087 10.8833 13.249C10.9259 13.267 10.977 13.294 11.0366 13.321C11.1047 13.348 11.1728 13.357 11.2494 13.357C11.3941 13.357 11.5048 13.303 11.5984 13.204L12.2454 12.529C12.4582 12.304 12.6625 12.133 12.8583 12.025C13.0541 11.899 13.2499 11.836 13.4627 11.836C13.6244 11.836 13.7947 11.872 13.982 11.953C14.1693 12.034 14.365 12.151 14.5779 12.304L17.3956 14.419C17.6169 14.581 17.7702 14.77 17.8638 14.995C17.9489 15.22 18 15.445 18 15.697Z" stroke="white" stroke-miterlimit="10"></path>
                                        </svg></a></li>
                                    <li><a href="skype:kishan-mehta?chat" aria-label="Skype"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.40361 1.57272L6.99986 2.06603C7.06932 2.12288 7.15 2.16442 7.23662 2.18792C7.32325 2.21143 7.41386 2.21639 7.50253 2.20246L7.40361 1.57272ZM1.57261 7.40371L2.20246 7.50253C2.21637 7.41387 2.21141 7.32328 2.1879 7.23668C2.16439 7.15008 2.12286 7.06941 2.06603 6.99996L1.57261 7.40371ZM9.59639 15.4273L10 14.934C9.93059 14.8771 9.84993 14.8356 9.76333 14.8121C9.67672 14.7886 9.58613 14.7836 9.49747 14.7975L9.59639 15.4273ZM15.4273 9.59639L14.7975 9.49747C14.7836 9.58613 14.7886 9.67672 14.8121 9.76333C14.8356 9.84993 14.8771 9.93059 14.934 10L15.4273 9.59639ZM7.80736 1.0794C6.95406 0.380068 5.88451 -0.00143633 4.78125 4.0638e-06V1.275C5.59016 1.27353 6.37444 1.55315 6.99996 2.06603L7.80736 1.0794ZM4.78125 4.0638e-06C2.14062 4.0638e-06 4.18418e-06 2.14062 4.18418e-06 4.78125H1.275C1.275 2.84485 2.84485 1.275 4.78125 1.275V4.0638e-06ZM4.18418e-06 4.78125C-0.00145735 5.88449 0.380008 6.95404 1.07929 7.80736L2.06603 6.99986C1.55317 6.37436 1.27355 5.59012 1.275 4.78125H4.18418e-06ZM2.125 8.5C2.125 8.16021 2.15146 7.82712 2.20246 7.50253L0.942972 7.30479C0.88098 7.70018 0.849897 8.09979 0.850004 8.5H2.125ZM8.5 14.875C4.9792 14.875 2.125 12.0208 2.125 8.5H0.850004C0.850004 12.7249 4.27508 16.15 8.5 16.15V14.875ZM9.49747 14.7975C9.17288 14.8484 8.83979 14.875 8.5 14.875V16.15C8.90619 16.15 9.30548 16.1182 9.69521 16.057L9.49747 14.7975ZM9.19264 15.9207C10.046 16.62 11.1155 17.0015 12.2187 17V15.725C11.4099 15.7264 10.6256 15.4468 10 14.934L9.19264 15.9207ZM12.2187 17C14.8594 17 17 14.8594 17 12.2187H15.725C15.725 14.1552 14.1552 15.725 12.2187 15.725V17ZM17 12.2187C17.0015 11.1155 16.62 10.046 15.9207 9.19264L14.934 10C15.4468 10.6256 15.7264 11.4099 15.725 12.2187H17ZM14.875 8.5C14.875 8.83979 14.8484 9.17288 14.7975 9.49747L16.057 9.69521C16.1182 9.30548 16.15 8.90619 16.15 8.5H14.875ZM8.5 2.125C12.0208 2.125 14.875 4.9792 14.875 8.5H16.15C16.15 4.27508 12.7249 0.850004 8.5 0.850004V2.125ZM7.50253 2.20246C7.83249 2.15071 8.166 2.12488 8.5 2.125V0.850004C8.09381 0.850004 7.69463 0.881772 7.30469 0.942972L7.50253 2.20246Z" fill="white"></path>
                                        <path d="M10.5283 5.50112C10.5283 5.50112 9.71702 4.88721 8.49993 4.88721C7.6886 4.88721 6.26868 4.88721 6.26868 6.49275C6.26868 8.49971 10.7312 8.49971 10.7312 10.5068C10.7312 12.1122 9.31125 12.1122 8.49993 12.1122C7.28294 12.1122 6.47161 11.4983 6.47161 11.4983" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-spacing-bottom">
                    <div class="price-box">
                        <h3 class="h5 price-box-heading">Part-Time</h3>
                        <div class="price-content-main">
                            <div class="price-icon">
                                <img loading="lazy" src="assets/images/part-time.png" width="45px" height="45px" alt="Part Time"/>
                            </div>
                            <div class="price-time-main">
                                <h4 class="h5 price-time-title">Time Duration</h4>
                                <p class="price-time-desc">4 hrs/Day</p>
                            </div>
                            <div class="price-time-main">
                                <h4 class="h5 price-time-title">Billing</h4>
                                <p class="price-time-desc">Weekly</p>
                            </div>
                            <div class="price-time-main">
                                <h4 class="h5 price-time-title">Communication</h4>
                                <ul class="price-social-icon">
                                    <li><a href="mailto:contact@noxutechnologies.com" aria-label="Mail"><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.55774 1.94439L7.77927 6.96338C8.84967 7.82688 10.3214 7.82688 11.3918 6.96338L17.6133 1.94434" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M16.1111 1H2.88889C1.84568 1 1 1.84568 1 2.88889V12.3333C1 13.3765 1.84568 14.2222 2.88889 14.2222H16.1111C17.1543 14.2222 18 13.3765 18 12.3333V2.88889C18 1.84568 17.1543 1 16.1111 1Z" stroke="white" stroke-linecap="round"></path>
                                        </svg></a></li>
                                    <li><a href="https://shivlab.slack.com" aria-label="Slack" target="_blank"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.31079 1C6.36022 1 5.58974 1.77221 5.58974 2.7245C5.58952 2.95074 5.63386 3.17481 5.72023 3.38391C5.80659 3.59302 5.9333 3.78306 6.09312 3.9432C6.25293 4.10333 6.44272 4.23042 6.65165 4.31721C6.86057 4.40399 7.08456 4.44878 7.31079 4.44901H9.03209V2.7245C9.03252 2.26757 8.85136 1.8292 8.52856 1.5058C8.20576 1.18239 7.76773 1.00046 7.31079 1ZM7.31079 5.59868H2.72105C1.77048 5.59868 1 6.37089 1 7.32347C1 8.27578 1.77048 9.04798 2.72105 9.04798H7.31108C8.26135 9.04798 9.03209 8.27578 9.03209 7.32347C9.03209 6.37089 8.26135 5.59868 7.31079 5.59868Z" stroke="white" stroke-linejoin="round"></path>
                                        <path d="M18.2117 7.32347C18.2117 6.37089 17.4409 5.59868 16.4904 5.59868C15.5398 5.59868 14.7693 6.37089 14.7693 7.32347V9.04798H16.4904C16.9473 9.04755 17.3853 8.86554 17.7081 8.54222C18.0309 8.21881 18.2121 7.7804 18.2117 7.32347ZM13.622 7.32347V2.7245C13.6223 2.26757 13.4412 1.8292 13.1184 1.5058C12.7956 1.18239 12.3575 1.00046 11.9006 1C10.95 1 10.1796 1.77221 10.1796 2.7245V7.32318C10.1796 8.27604 10.95 9.04824 11.9006 9.04824C12.3575 9.04781 12.7956 8.86588 13.1184 8.54247C13.4412 8.21907 13.6223 7.7804 13.622 7.32347Z" stroke="white" stroke-linejoin="round"></path>
                                        <path d="M11.9006 18.2457C12.3575 18.2453 12.7956 18.0634 13.1184 17.74C13.4412 17.4166 13.6223 16.9782 13.622 16.5212C13.6223 16.0643 13.4412 15.626 13.1184 15.3025C12.7956 14.9791 12.3575 14.7972 11.9006 14.7967H10.1796V16.5212C10.1796 17.4735 10.95 18.2457 11.9006 18.2457ZM11.9006 13.647H16.4906C17.4409 13.647 18.2117 12.8748 18.2117 11.9223C18.2121 11.4653 18.0309 11.0269 17.7081 10.7036C17.3853 10.3802 16.9473 10.1982 16.4904 10.1978H11.9006C10.95 10.1978 10.1796 10.97 10.1796 11.9223C10.1793 12.1485 10.2236 12.3726 10.31 12.5816C10.3964 12.7908 10.5231 12.9808 10.6829 13.1409C10.8427 13.3011 11.0325 13.4282 11.2414 13.5149C11.4504 13.6018 11.6744 13.6469 11.9006 13.647Z" stroke="white" stroke-linejoin="round"></path>
                                        <path d="M1 11.9223C0.999777 12.1485 1.04411 12.3726 1.13048 12.5816C1.21684 12.7908 1.34355 12.9808 1.50337 13.1409C1.66318 13.3011 1.85297 13.4282 2.0619 13.5149C2.27083 13.6018 2.49481 13.6465 2.72105 13.6468C3.17798 13.6463 3.61602 13.4643 3.93883 13.1409C4.26164 12.8176 4.44276 12.3792 4.44238 11.9223V10.1978H2.72105C1.77048 10.1978 1 10.97 1 11.9223ZM5.58975 11.9223V16.521C5.58975 17.4735 6.36022 18.2457 7.3108 18.2457C7.76773 18.2453 8.20576 18.0634 8.52856 17.74C8.85137 17.4166 9.03252 16.9782 9.03209 16.5212V11.9223C9.03234 11.696 8.98803 11.4719 8.90162 11.2628C8.81522 11.0537 8.68854 10.8636 8.52865 10.7035C8.36884 10.5434 8.17899 10.4163 7.97004 10.3295C7.76106 10.2427 7.53705 10.1979 7.3108 10.1978C6.36022 10.1978 5.58975 10.97 5.58975 11.9223Z" stroke="white" stroke-linejoin="round"></path>
                                        </svg></a></li>
                                    <li><a href="tel:9016777787" aria-label="Phone"><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 15.697C18 16.021 17.9319 16.354 17.7872 16.678C17.6425 17.002 17.4552 17.308 17.2083 17.596C16.7912 18.082 16.3315 18.433 15.8122 18.658C15.3015 18.883 14.7481 19 14.1522 19C13.2839 19 12.356 18.784 11.3771 18.343C10.3981 17.902 9.41913 17.308 8.44867 16.561C7.4697 15.805 6.54181 14.968 5.65648 14.041C4.77967 13.105 3.98798 12.124 3.28142 11.098C2.58337 10.072 2.02153 9.046 1.61292 8.029C1.20431 7.003 1 6.022 1 5.086C1 4.474 1.10215 3.889 1.30646 3.349C1.51077 2.8 1.83425 2.296 2.28543 1.846C2.83025 1.279 3.42614 1 4.05608 1C4.29444 1 4.5328 1.054 4.74562 1.162C4.96695 1.27 5.16274 1.432 5.31597 1.666L7.29094 4.609C7.44417 4.834 7.55483 5.041 7.63145 5.239C7.70806 5.428 7.75063 5.617 7.75063 5.788C7.75063 6.004 7.69104 6.22 7.57186 6.427C7.46119 6.634 7.29945 6.85 7.09514 7.066L6.44817 7.777C6.35453 7.876 6.31197 7.993 6.31197 8.137C6.31197 8.209 6.32048 8.272 6.33751 8.344C6.36305 8.416 6.38858 8.47 6.40561 8.524C6.55884 8.821 6.82273 9.208 7.1973 9.676C7.58037 10.144 7.98898 10.621 8.43165 11.098C8.89134 11.575 9.334 12.016 9.78518 12.421C10.2278 12.817 10.5939 13.087 10.8833 13.249C10.9259 13.267 10.977 13.294 11.0366 13.321C11.1047 13.348 11.1728 13.357 11.2494 13.357C11.3941 13.357 11.5048 13.303 11.5984 13.204L12.2454 12.529C12.4582 12.304 12.6625 12.133 12.8583 12.025C13.0541 11.899 13.2499 11.836 13.4627 11.836C13.6244 11.836 13.7947 11.872 13.982 11.953C14.1693 12.034 14.365 12.151 14.5779 12.304L17.3956 14.419C17.6169 14.581 17.7702 14.77 17.8638 14.995C17.9489 15.22 18 15.445 18 15.697Z" stroke="white" stroke-miterlimit="10"></path>
                                        </svg></a></li>
                                    <li><a href="skype:kishan-mehta?chat" aria-label="Skype"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.40361 1.57272L6.99986 2.06603C7.06932 2.12288 7.15 2.16442 7.23662 2.18792C7.32325 2.21143 7.41386 2.21639 7.50253 2.20246L7.40361 1.57272ZM1.57261 7.40371L2.20246 7.50253C2.21637 7.41387 2.21141 7.32328 2.1879 7.23668C2.16439 7.15008 2.12286 7.06941 2.06603 6.99996L1.57261 7.40371ZM9.59639 15.4273L10 14.934C9.93059 14.8771 9.84993 14.8356 9.76333 14.8121C9.67672 14.7886 9.58613 14.7836 9.49747 14.7975L9.59639 15.4273ZM15.4273 9.59639L14.7975 9.49747C14.7836 9.58613 14.7886 9.67672 14.8121 9.76333C14.8356 9.84993 14.8771 9.93059 14.934 10L15.4273 9.59639ZM7.80736 1.0794C6.95406 0.380068 5.88451 -0.00143633 4.78125 4.0638e-06V1.275C5.59016 1.27353 6.37444 1.55315 6.99996 2.06603L7.80736 1.0794ZM4.78125 4.0638e-06C2.14062 4.0638e-06 4.18418e-06 2.14062 4.18418e-06 4.78125H1.275C1.275 2.84485 2.84485 1.275 4.78125 1.275V4.0638e-06ZM4.18418e-06 4.78125C-0.00145735 5.88449 0.380008 6.95404 1.07929 7.80736L2.06603 6.99986C1.55317 6.37436 1.27355 5.59012 1.275 4.78125H4.18418e-06ZM2.125 8.5C2.125 8.16021 2.15146 7.82712 2.20246 7.50253L0.942972 7.30479C0.88098 7.70018 0.849897 8.09979 0.850004 8.5H2.125ZM8.5 14.875C4.9792 14.875 2.125 12.0208 2.125 8.5H0.850004C0.850004 12.7249 4.27508 16.15 8.5 16.15V14.875ZM9.49747 14.7975C9.17288 14.8484 8.83979 14.875 8.5 14.875V16.15C8.90619 16.15 9.30548 16.1182 9.69521 16.057L9.49747 14.7975ZM9.19264 15.9207C10.046 16.62 11.1155 17.0015 12.2187 17V15.725C11.4099 15.7264 10.6256 15.4468 10 14.934L9.19264 15.9207ZM12.2187 17C14.8594 17 17 14.8594 17 12.2187H15.725C15.725 14.1552 14.1552 15.725 12.2187 15.725V17ZM17 12.2187C17.0015 11.1155 16.62 10.046 15.9207 9.19264L14.934 10C15.4468 10.6256 15.7264 11.4099 15.725 12.2187H17ZM14.875 8.5C14.875 8.83979 14.8484 9.17288 14.7975 9.49747L16.057 9.69521C16.1182 9.30548 16.15 8.90619 16.15 8.5H14.875ZM8.5 2.125C12.0208 2.125 14.875 4.9792 14.875 8.5H16.15C16.15 4.27508 12.7249 0.850004 8.5 0.850004V2.125ZM7.50253 2.20246C7.83249 2.15071 8.166 2.12488 8.5 2.125V0.850004C8.09381 0.850004 7.69463 0.881772 7.30469 0.942972L7.50253 2.20246Z" fill="white"></path>
                                        <path d="M10.5283 5.50112C10.5283 5.50112 9.71702 4.88721 8.49993 4.88721C7.6886 4.88721 6.26868 4.88721 6.26868 6.49275C6.26868 8.49971 10.7312 8.49971 10.7312 10.5068C10.7312 12.1122 9.31125 12.1122 8.49993 12.1122C7.28294 12.1122 6.47161 11.4983 6.47161 11.4983" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-spacing-bottom">
                    <div class="price-box">
                        <h3 class="h5 price-box-heading">Hourly</h3>
                        <div class="price-content-main">
                            <div class="price-icon">
                                <img loading="lazy" src="assets/images/24-hours.png" width="45px" height="45px" alt="Hourly"/>
                            </div>
                            <div class="price-time-main">
                                <h4 class="h5 price-time-title">Time Duration</h4>
                                <p class="price-time-desc">Hourly</p>
                            </div>
                            <div class="price-time-main">
                                <h4 class="h5 price-time-title">Billing</h4>
                                <p class="price-time-desc">Hourly/Weekly</p>
                            </div>
                            <div class="price-time-main">
                                <h4 class="h5 price-time-title">Communication</h4>
                                <ul class="price-social-icon">
                                    <li><a href="mailto:contact@noxutechnologies.com" aria-label="Mail"><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.55774 1.94439L7.77927 6.96338C8.84967 7.82688 10.3214 7.82688 11.3918 6.96338L17.6133 1.94434" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M16.1111 1H2.88889C1.84568 1 1 1.84568 1 2.88889V12.3333C1 13.3765 1.84568 14.2222 2.88889 14.2222H16.1111C17.1543 14.2222 18 13.3765 18 12.3333V2.88889C18 1.84568 17.1543 1 16.1111 1Z" stroke="white" stroke-linecap="round"></path>
                                        </svg></a></li>
                                    <li><a href="https://shivlab.slack.com" aria-label="Slack" target="_blank"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.31079 1C6.36022 1 5.58974 1.77221 5.58974 2.7245C5.58952 2.95074 5.63386 3.17481 5.72023 3.38391C5.80659 3.59302 5.9333 3.78306 6.09312 3.9432C6.25293 4.10333 6.44272 4.23042 6.65165 4.31721C6.86057 4.40399 7.08456 4.44878 7.31079 4.44901H9.03209V2.7245C9.03252 2.26757 8.85136 1.8292 8.52856 1.5058C8.20576 1.18239 7.76773 1.00046 7.31079 1ZM7.31079 5.59868H2.72105C1.77048 5.59868 1 6.37089 1 7.32347C1 8.27578 1.77048 9.04798 2.72105 9.04798H7.31108C8.26135 9.04798 9.03209 8.27578 9.03209 7.32347C9.03209 6.37089 8.26135 5.59868 7.31079 5.59868Z" stroke="white" stroke-linejoin="round"></path>
                                        <path d="M18.2117 7.32347C18.2117 6.37089 17.4409 5.59868 16.4904 5.59868C15.5398 5.59868 14.7693 6.37089 14.7693 7.32347V9.04798H16.4904C16.9473 9.04755 17.3853 8.86554 17.7081 8.54222C18.0309 8.21881 18.2121 7.7804 18.2117 7.32347ZM13.622 7.32347V2.7245C13.6223 2.26757 13.4412 1.8292 13.1184 1.5058C12.7956 1.18239 12.3575 1.00046 11.9006 1C10.95 1 10.1796 1.77221 10.1796 2.7245V7.32318C10.1796 8.27604 10.95 9.04824 11.9006 9.04824C12.3575 9.04781 12.7956 8.86588 13.1184 8.54247C13.4412 8.21907 13.6223 7.7804 13.622 7.32347Z" stroke="white" stroke-linejoin="round"></path>
                                        <path d="M11.9006 18.2457C12.3575 18.2453 12.7956 18.0634 13.1184 17.74C13.4412 17.4166 13.6223 16.9782 13.622 16.5212C13.6223 16.0643 13.4412 15.626 13.1184 15.3025C12.7956 14.9791 12.3575 14.7972 11.9006 14.7967H10.1796V16.5212C10.1796 17.4735 10.95 18.2457 11.9006 18.2457ZM11.9006 13.647H16.4906C17.4409 13.647 18.2117 12.8748 18.2117 11.9223C18.2121 11.4653 18.0309 11.0269 17.7081 10.7036C17.3853 10.3802 16.9473 10.1982 16.4904 10.1978H11.9006C10.95 10.1978 10.1796 10.97 10.1796 11.9223C10.1793 12.1485 10.2236 12.3726 10.31 12.5816C10.3964 12.7908 10.5231 12.9808 10.6829 13.1409C10.8427 13.3011 11.0325 13.4282 11.2414 13.5149C11.4504 13.6018 11.6744 13.6469 11.9006 13.647Z" stroke="white" stroke-linejoin="round"></path>
                                        <path d="M1 11.9223C0.999777 12.1485 1.04411 12.3726 1.13048 12.5816C1.21684 12.7908 1.34355 12.9808 1.50337 13.1409C1.66318 13.3011 1.85297 13.4282 2.0619 13.5149C2.27083 13.6018 2.49481 13.6465 2.72105 13.6468C3.17798 13.6463 3.61602 13.4643 3.93883 13.1409C4.26164 12.8176 4.44276 12.3792 4.44238 11.9223V10.1978H2.72105C1.77048 10.1978 1 10.97 1 11.9223ZM5.58975 11.9223V16.521C5.58975 17.4735 6.36022 18.2457 7.3108 18.2457C7.76773 18.2453 8.20576 18.0634 8.52856 17.74C8.85137 17.4166 9.03252 16.9782 9.03209 16.5212V11.9223C9.03234 11.696 8.98803 11.4719 8.90162 11.2628C8.81522 11.0537 8.68854 10.8636 8.52865 10.7035C8.36884 10.5434 8.17899 10.4163 7.97004 10.3295C7.76106 10.2427 7.53705 10.1979 7.3108 10.1978C6.36022 10.1978 5.58975 10.97 5.58975 11.9223Z" stroke="white" stroke-linejoin="round"></path>
                                        </svg></a></li>
                                    <li><a href="tel:9016777787" aria-label="Phone"><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 15.697C18 16.021 17.9319 16.354 17.7872 16.678C17.6425 17.002 17.4552 17.308 17.2083 17.596C16.7912 18.082 16.3315 18.433 15.8122 18.658C15.3015 18.883 14.7481 19 14.1522 19C13.2839 19 12.356 18.784 11.3771 18.343C10.3981 17.902 9.41913 17.308 8.44867 16.561C7.4697 15.805 6.54181 14.968 5.65648 14.041C4.77967 13.105 3.98798 12.124 3.28142 11.098C2.58337 10.072 2.02153 9.046 1.61292 8.029C1.20431 7.003 1 6.022 1 5.086C1 4.474 1.10215 3.889 1.30646 3.349C1.51077 2.8 1.83425 2.296 2.28543 1.846C2.83025 1.279 3.42614 1 4.05608 1C4.29444 1 4.5328 1.054 4.74562 1.162C4.96695 1.27 5.16274 1.432 5.31597 1.666L7.29094 4.609C7.44417 4.834 7.55483 5.041 7.63145 5.239C7.70806 5.428 7.75063 5.617 7.75063 5.788C7.75063 6.004 7.69104 6.22 7.57186 6.427C7.46119 6.634 7.29945 6.85 7.09514 7.066L6.44817 7.777C6.35453 7.876 6.31197 7.993 6.31197 8.137C6.31197 8.209 6.32048 8.272 6.33751 8.344C6.36305 8.416 6.38858 8.47 6.40561 8.524C6.55884 8.821 6.82273 9.208 7.1973 9.676C7.58037 10.144 7.98898 10.621 8.43165 11.098C8.89134 11.575 9.334 12.016 9.78518 12.421C10.2278 12.817 10.5939 13.087 10.8833 13.249C10.9259 13.267 10.977 13.294 11.0366 13.321C11.1047 13.348 11.1728 13.357 11.2494 13.357C11.3941 13.357 11.5048 13.303 11.5984 13.204L12.2454 12.529C12.4582 12.304 12.6625 12.133 12.8583 12.025C13.0541 11.899 13.2499 11.836 13.4627 11.836C13.6244 11.836 13.7947 11.872 13.982 11.953C14.1693 12.034 14.365 12.151 14.5779 12.304L17.3956 14.419C17.6169 14.581 17.7702 14.77 17.8638 14.995C17.9489 15.22 18 15.445 18 15.697Z" stroke="white" stroke-miterlimit="10"></path>
                                        </svg></a></li>
                                    <li><a href="skype:kishan-mehta?chat" aria-label="Skype"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.40361 1.57272L6.99986 2.06603C7.06932 2.12288 7.15 2.16442 7.23662 2.18792C7.32325 2.21143 7.41386 2.21639 7.50253 2.20246L7.40361 1.57272ZM1.57261 7.40371L2.20246 7.50253C2.21637 7.41387 2.21141 7.32328 2.1879 7.23668C2.16439 7.15008 2.12286 7.06941 2.06603 6.99996L1.57261 7.40371ZM9.59639 15.4273L10 14.934C9.93059 14.8771 9.84993 14.8356 9.76333 14.8121C9.67672 14.7886 9.58613 14.7836 9.49747 14.7975L9.59639 15.4273ZM15.4273 9.59639L14.7975 9.49747C14.7836 9.58613 14.7886 9.67672 14.8121 9.76333C14.8356 9.84993 14.8771 9.93059 14.934 10L15.4273 9.59639ZM7.80736 1.0794C6.95406 0.380068 5.88451 -0.00143633 4.78125 4.0638e-06V1.275C5.59016 1.27353 6.37444 1.55315 6.99996 2.06603L7.80736 1.0794ZM4.78125 4.0638e-06C2.14062 4.0638e-06 4.18418e-06 2.14062 4.18418e-06 4.78125H1.275C1.275 2.84485 2.84485 1.275 4.78125 1.275V4.0638e-06ZM4.18418e-06 4.78125C-0.00145735 5.88449 0.380008 6.95404 1.07929 7.80736L2.06603 6.99986C1.55317 6.37436 1.27355 5.59012 1.275 4.78125H4.18418e-06ZM2.125 8.5C2.125 8.16021 2.15146 7.82712 2.20246 7.50253L0.942972 7.30479C0.88098 7.70018 0.849897 8.09979 0.850004 8.5H2.125ZM8.5 14.875C4.9792 14.875 2.125 12.0208 2.125 8.5H0.850004C0.850004 12.7249 4.27508 16.15 8.5 16.15V14.875ZM9.49747 14.7975C9.17288 14.8484 8.83979 14.875 8.5 14.875V16.15C8.90619 16.15 9.30548 16.1182 9.69521 16.057L9.49747 14.7975ZM9.19264 15.9207C10.046 16.62 11.1155 17.0015 12.2187 17V15.725C11.4099 15.7264 10.6256 15.4468 10 14.934L9.19264 15.9207ZM12.2187 17C14.8594 17 17 14.8594 17 12.2187H15.725C15.725 14.1552 14.1552 15.725 12.2187 15.725V17ZM17 12.2187C17.0015 11.1155 16.62 10.046 15.9207 9.19264L14.934 10C15.4468 10.6256 15.7264 11.4099 15.725 12.2187H17ZM14.875 8.5C14.875 8.83979 14.8484 9.17288 14.7975 9.49747L16.057 9.69521C16.1182 9.30548 16.15 8.90619 16.15 8.5H14.875ZM8.5 2.125C12.0208 2.125 14.875 4.9792 14.875 8.5H16.15C16.15 4.27508 12.7249 0.850004 8.5 0.850004V2.125ZM7.50253 2.20246C7.83249 2.15071 8.166 2.12488 8.5 2.125V0.850004C8.09381 0.850004 7.69463 0.881772 7.30469 0.942972L7.50253 2.20246Z" fill="white"></path>
                                        <path d="M10.5283 5.50112C10.5283 5.50112 9.71702 4.88721 8.49993 4.88721C7.6886 4.88721 6.26868 4.88721 6.26868 6.49275C6.26868 8.49971 10.7312 8.49971 10.7312 10.5068C10.7312 12.1122 9.31125 12.1122 8.49993 12.1122C7.28294 12.1122 6.47161 11.4983 6.47161 11.4983" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-spacing-bottom">
                    <div class="price-box">
                        <h3 class="h5 price-box-heading">Project Based</h3>
                        <div class="price-content-main">
                            <div class="price-icon">
                                <img loading="lazy" src="assets/images/hired.png" width="45px" height="45px" alt="Project Based"/>
                            </div>
                            <div class="price-time-main">
                                <h4 class="h5 price-time-title">Time Duration</h4>
                                <p class="price-time-desc">Depend on the Project</p>
                            </div>
                            <div class="price-time-main">
                                <h4 class="h5 price-time-title">Billing</h4>
                                <p class="price-time-desc">Milestone Based</p>
                            </div>
                            <div class="price-time-main">
                                <h4 class="h5 price-time-title">Communication</h4>
                                <ul class="price-social-icon">
                                    <li><a href="mailto:contact@noxutechnologies.com" aria-label="Mail"><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.55774 1.94439L7.77927 6.96338C8.84967 7.82688 10.3214 7.82688 11.3918 6.96338L17.6133 1.94434" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M16.1111 1H2.88889C1.84568 1 1 1.84568 1 2.88889V12.3333C1 13.3765 1.84568 14.2222 2.88889 14.2222H16.1111C17.1543 14.2222 18 13.3765 18 12.3333V2.88889C18 1.84568 17.1543 1 16.1111 1Z" stroke="white" stroke-linecap="round"></path>
                                        </svg></a></li>
                                    <li><a href="https://shivlab.slack.com" aria-label="Slack" target="_blank"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.31079 1C6.36022 1 5.58974 1.77221 5.58974 2.7245C5.58952 2.95074 5.63386 3.17481 5.72023 3.38391C5.80659 3.59302 5.9333 3.78306 6.09312 3.9432C6.25293 4.10333 6.44272 4.23042 6.65165 4.31721C6.86057 4.40399 7.08456 4.44878 7.31079 4.44901H9.03209V2.7245C9.03252 2.26757 8.85136 1.8292 8.52856 1.5058C8.20576 1.18239 7.76773 1.00046 7.31079 1ZM7.31079 5.59868H2.72105C1.77048 5.59868 1 6.37089 1 7.32347C1 8.27578 1.77048 9.04798 2.72105 9.04798H7.31108C8.26135 9.04798 9.03209 8.27578 9.03209 7.32347C9.03209 6.37089 8.26135 5.59868 7.31079 5.59868Z" stroke="white" stroke-linejoin="round"></path>
                                        <path d="M18.2117 7.32347C18.2117 6.37089 17.4409 5.59868 16.4904 5.59868C15.5398 5.59868 14.7693 6.37089 14.7693 7.32347V9.04798H16.4904C16.9473 9.04755 17.3853 8.86554 17.7081 8.54222C18.0309 8.21881 18.2121 7.7804 18.2117 7.32347ZM13.622 7.32347V2.7245C13.6223 2.26757 13.4412 1.8292 13.1184 1.5058C12.7956 1.18239 12.3575 1.00046 11.9006 1C10.95 1 10.1796 1.77221 10.1796 2.7245V7.32318C10.1796 8.27604 10.95 9.04824 11.9006 9.04824C12.3575 9.04781 12.7956 8.86588 13.1184 8.54247C13.4412 8.21907 13.6223 7.7804 13.622 7.32347Z" stroke="white" stroke-linejoin="round"></path>
                                        <path d="M11.9006 18.2457C12.3575 18.2453 12.7956 18.0634 13.1184 17.74C13.4412 17.4166 13.6223 16.9782 13.622 16.5212C13.6223 16.0643 13.4412 15.626 13.1184 15.3025C12.7956 14.9791 12.3575 14.7972 11.9006 14.7967H10.1796V16.5212C10.1796 17.4735 10.95 18.2457 11.9006 18.2457ZM11.9006 13.647H16.4906C17.4409 13.647 18.2117 12.8748 18.2117 11.9223C18.2121 11.4653 18.0309 11.0269 17.7081 10.7036C17.3853 10.3802 16.9473 10.1982 16.4904 10.1978H11.9006C10.95 10.1978 10.1796 10.97 10.1796 11.9223C10.1793 12.1485 10.2236 12.3726 10.31 12.5816C10.3964 12.7908 10.5231 12.9808 10.6829 13.1409C10.8427 13.3011 11.0325 13.4282 11.2414 13.5149C11.4504 13.6018 11.6744 13.6469 11.9006 13.647Z" stroke="white" stroke-linejoin="round"></path>
                                        <path d="M1 11.9223C0.999777 12.1485 1.04411 12.3726 1.13048 12.5816C1.21684 12.7908 1.34355 12.9808 1.50337 13.1409C1.66318 13.3011 1.85297 13.4282 2.0619 13.5149C2.27083 13.6018 2.49481 13.6465 2.72105 13.6468C3.17798 13.6463 3.61602 13.4643 3.93883 13.1409C4.26164 12.8176 4.44276 12.3792 4.44238 11.9223V10.1978H2.72105C1.77048 10.1978 1 10.97 1 11.9223ZM5.58975 11.9223V16.521C5.58975 17.4735 6.36022 18.2457 7.3108 18.2457C7.76773 18.2453 8.20576 18.0634 8.52856 17.74C8.85137 17.4166 9.03252 16.9782 9.03209 16.5212V11.9223C9.03234 11.696 8.98803 11.4719 8.90162 11.2628C8.81522 11.0537 8.68854 10.8636 8.52865 10.7035C8.36884 10.5434 8.17899 10.4163 7.97004 10.3295C7.76106 10.2427 7.53705 10.1979 7.3108 10.1978C6.36022 10.1978 5.58975 10.97 5.58975 11.9223Z" stroke="white" stroke-linejoin="round"></path>
                                        </svg></a></li>
                                    <li><a href="tel:9016777787" aria-label="Phone"><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 15.697C18 16.021 17.9319 16.354 17.7872 16.678C17.6425 17.002 17.4552 17.308 17.2083 17.596C16.7912 18.082 16.3315 18.433 15.8122 18.658C15.3015 18.883 14.7481 19 14.1522 19C13.2839 19 12.356 18.784 11.3771 18.343C10.3981 17.902 9.41913 17.308 8.44867 16.561C7.4697 15.805 6.54181 14.968 5.65648 14.041C4.77967 13.105 3.98798 12.124 3.28142 11.098C2.58337 10.072 2.02153 9.046 1.61292 8.029C1.20431 7.003 1 6.022 1 5.086C1 4.474 1.10215 3.889 1.30646 3.349C1.51077 2.8 1.83425 2.296 2.28543 1.846C2.83025 1.279 3.42614 1 4.05608 1C4.29444 1 4.5328 1.054 4.74562 1.162C4.96695 1.27 5.16274 1.432 5.31597 1.666L7.29094 4.609C7.44417 4.834 7.55483 5.041 7.63145 5.239C7.70806 5.428 7.75063 5.617 7.75063 5.788C7.75063 6.004 7.69104 6.22 7.57186 6.427C7.46119 6.634 7.29945 6.85 7.09514 7.066L6.44817 7.777C6.35453 7.876 6.31197 7.993 6.31197 8.137C6.31197 8.209 6.32048 8.272 6.33751 8.344C6.36305 8.416 6.38858 8.47 6.40561 8.524C6.55884 8.821 6.82273 9.208 7.1973 9.676C7.58037 10.144 7.98898 10.621 8.43165 11.098C8.89134 11.575 9.334 12.016 9.78518 12.421C10.2278 12.817 10.5939 13.087 10.8833 13.249C10.9259 13.267 10.977 13.294 11.0366 13.321C11.1047 13.348 11.1728 13.357 11.2494 13.357C11.3941 13.357 11.5048 13.303 11.5984 13.204L12.2454 12.529C12.4582 12.304 12.6625 12.133 12.8583 12.025C13.0541 11.899 13.2499 11.836 13.4627 11.836C13.6244 11.836 13.7947 11.872 13.982 11.953C14.1693 12.034 14.365 12.151 14.5779 12.304L17.3956 14.419C17.6169 14.581 17.7702 14.77 17.8638 14.995C17.9489 15.22 18 15.445 18 15.697Z" stroke="white" stroke-miterlimit="10"></path>
                                        </svg></a></li>
                                    <li><a href="skype:kishan-mehta?chat" aria-label="Skype"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.40361 1.57272L6.99986 2.06603C7.06932 2.12288 7.15 2.16442 7.23662 2.18792C7.32325 2.21143 7.41386 2.21639 7.50253 2.20246L7.40361 1.57272ZM1.57261 7.40371L2.20246 7.50253C2.21637 7.41387 2.21141 7.32328 2.1879 7.23668C2.16439 7.15008 2.12286 7.06941 2.06603 6.99996L1.57261 7.40371ZM9.59639 15.4273L10 14.934C9.93059 14.8771 9.84993 14.8356 9.76333 14.8121C9.67672 14.7886 9.58613 14.7836 9.49747 14.7975L9.59639 15.4273ZM15.4273 9.59639L14.7975 9.49747C14.7836 9.58613 14.7886 9.67672 14.8121 9.76333C14.8356 9.84993 14.8771 9.93059 14.934 10L15.4273 9.59639ZM7.80736 1.0794C6.95406 0.380068 5.88451 -0.00143633 4.78125 4.0638e-06V1.275C5.59016 1.27353 6.37444 1.55315 6.99996 2.06603L7.80736 1.0794ZM4.78125 4.0638e-06C2.14062 4.0638e-06 4.18418e-06 2.14062 4.18418e-06 4.78125H1.275C1.275 2.84485 2.84485 1.275 4.78125 1.275V4.0638e-06ZM4.18418e-06 4.78125C-0.00145735 5.88449 0.380008 6.95404 1.07929 7.80736L2.06603 6.99986C1.55317 6.37436 1.27355 5.59012 1.275 4.78125H4.18418e-06ZM2.125 8.5C2.125 8.16021 2.15146 7.82712 2.20246 7.50253L0.942972 7.30479C0.88098 7.70018 0.849897 8.09979 0.850004 8.5H2.125ZM8.5 14.875C4.9792 14.875 2.125 12.0208 2.125 8.5H0.850004C0.850004 12.7249 4.27508 16.15 8.5 16.15V14.875ZM9.49747 14.7975C9.17288 14.8484 8.83979 14.875 8.5 14.875V16.15C8.90619 16.15 9.30548 16.1182 9.69521 16.057L9.49747 14.7975ZM9.19264 15.9207C10.046 16.62 11.1155 17.0015 12.2187 17V15.725C11.4099 15.7264 10.6256 15.4468 10 14.934L9.19264 15.9207ZM12.2187 17C14.8594 17 17 14.8594 17 12.2187H15.725C15.725 14.1552 14.1552 15.725 12.2187 15.725V17ZM17 12.2187C17.0015 11.1155 16.62 10.046 15.9207 9.19264L14.934 10C15.4468 10.6256 15.7264 11.4099 15.725 12.2187H17ZM14.875 8.5C14.875 8.83979 14.8484 9.17288 14.7975 9.49747L16.057 9.69521C16.1182 9.30548 16.15 8.90619 16.15 8.5H14.875ZM8.5 2.125C12.0208 2.125 14.875 4.9792 14.875 8.5H16.15C16.15 4.27508 12.7249 0.850004 8.5 0.850004V2.125ZM7.50253 2.20246C7.83249 2.15071 8.166 2.12488 8.5 2.125V0.850004C8.09381 0.850004 7.69463 0.881772 7.30469 0.942972L7.50253 2.20246Z" fill="white"></path>
                                        <path d="M10.5283 5.50112C10.5283 5.50112 9.71702 4.88721 8.49993 4.88721C7.6886 4.88721 6.26868 4.88721 6.26868 6.49275C6.26868 8.49971 10.7312 8.49971 10.7312 10.5068C10.7312 12.1122 9.31125 12.1122 8.49993 12.1122C7.28294 12.1122 6.47161 11.4983 6.47161 11.4983" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="company_info_number" class="company-info-number section-spacing">
        <div class="container">
            <div class="section-head-part">
               <h3 class="title h5">Numbers Speaks Everything</h3>
            </div>
            <div class="row">
                <div class="col-md-3 company-info-list-main">
                    <div class="company-info-list">
                        <span class="number h1">200 +</span>
                        <span class="company-info-label large-text">Shopify Projects Empowered</span>
                    </div>
                </div>
                <div class="col-md-3 company-info-list-main">
                    <div class="company-info-list">
                        <span class="number h1">38 +</span>
                        <span class="company-info-label large-text">Global Ventures Served</span>
                    </div>
                </div>
                <div class="col-md-3 company-info-list-main">
                    <div class="company-info-list">
                        <span class="number h1">8 +</span>
                        <span class="company-info-label large-text">Years of Expertise</span>
                    </div>
                </div>
                <div class="col-md-3 company-info-list-main">
                    <div class="company-info-list">
                        <span class="number h1">70 +</span>
                        <span class="company-info-label large-text">Best Tech-sassy Professionals</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Faq />


    <LetDiscuss />


           
        </div>
    )
}

export default ShopifyStoreSetup
