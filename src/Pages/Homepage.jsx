import React from 'react'
import Slider from 'react-slick';
import BrandsLogoSlider from '../Components/BrandsLogoSlider';
import LetDiscuss from '../Components/LetDiscuss';
import Faq from '../Components/Faq';
import CaseStudySlider from '../Components/CaseStudySlider';

const Homepage = () => {
    
    const industriesData = [
        // Add your industry data here
        { name: 'Fashion', imageSrc: 'assets/images/image%2013.png', alt: 'fashion' },
        { name: 'Fashion', imageSrc: 'assets/images/image%2013.png', alt: 'fashion' },
        { name: 'Fashion', imageSrc: 'assets/images/image%2013.png', alt: 'fashion' },
        { name: 'Fashion', imageSrc: 'assets/images/image%2013.png', alt: 'fashion' },
        { name: 'Fashion', imageSrc: 'assets/images/image%2013.png', alt: 'fashion' },
        { name: 'Fashion', imageSrc: 'assets/images/image%2013.png', alt: 'fashion' },
        { name: 'Fashion', imageSrc: 'assets/images/image%2013.png', alt: 'fashion' },
        { name: 'Fashion', imageSrc: 'assets/images/image%2013.png', alt: 'fashion' },
        { name: 'Fashion', imageSrc: 'assets/images/image%2013.png', alt: 'fashion' },
        { name: 'Fashion', imageSrc: 'assets/images/image%2013.png', alt: 'fashion' },
        { name: 'Fashion', imageSrc: 'assets/images/image%2013.png', alt: 'fashion' },
        // Add other industries similarly
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000,
        slidesToShow: 3,
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


     
      const sliderSettings = {
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000,
        // Add more options as needed
      };

  return (
      <div>
      <section id="page_banner" class="page-main-banner homepage-banner section-spacing">
        <div class="container">
            <div class="row align-items-center">
                <div class="page-main-banner-colm col-lg-7 col-md-7">
                    <div class="page-main-banner-content page-main-banner-slider">
                    <Slider {...sliderSettings}>
                        <div class="page-main-banner-content-list">
                            <h1 class="title">Shopify Store Development</h1>
                            <div class="large-text content">
                                <p class="text">Are you planning to hire <strong>the best Shopify development
                                        company</strong> to unleash the potential of online business?</p>
                                <p class="text"><strong>Hire official Shopify experts</strong> of NOXU Technologies to build a
                                    robust, intuitive, and salesdriven online Shopify store. As a <strong>leading
                                        Shopify development services provider</strong>, we have empowered numerous
                                    businesses by successfully transforming their brickmortar stores into highly
                                    scalable Shopify stores efficiently in no time.</p>
                            </div>
                        </div>

                        <div class="page-main-banner-content-list">
                            <h1 class="title">Top-Rated Shopify Plus Development Company</h1>
                            <div class="large-text content">
                                <p class="text">Are you looking for a <strong>Shopify Plus store development company to
                                        build an online store?</strong></p>
                                <p class="text">We are a <strong>top Shopify Plus development agency</strong> with
                                    <strong>world-class Shopify Plus developers.</strong> Our trusted <strong>Shopify
                                        Plus developers</strong> excel in providing client-focused online Shopify stores
                                    that can generate large volume eCommerce business for you.</p>
                            </div>
                        </div>
                        <div class="page-main-banner-content-list">
                            <h1 class="title">Top Shopify App Development Company</h1>
                            <div class="large-text content">
                                <p class="text">Are you looking for the best <strong>Shopify app development</strong>
                                    company to provide a custom-built online user experience?</p>
                                <p class="text">NOXU Technologies is leading in delivering custom-made Shopify apps with the
                                    latest features for all types of businesses. As the best <strong>Shopify app
                                        development agency</strong>, we provide various app development services. It
                                    includes <strong>public app development, private app development</strong>, and
                                    <strong>custom app development.</strong> </p>
                            </div>
                        </div>
                        <div class="page-main-banner-content-list">
                            <h1 class="title">Best Mobile App Development Company</h1>
                            <div class="large-text content">
                                <p class="text">Are you planning to hire a <strong>top-class Shopify mobile app
                                        development company</strong> to create a sales-driven mobile version of your
                                    Shopify store?</p>
                                <p class="text">NOXU Technologies' Shopify developers have proven records of delivering
                                    scalable and intuitive mobile versions of your online Shopify stores. We guarantee
                                    user-friendly &amp; <strong>feature-rich Shopify mobile apps</strong> that attract new
                                    clients and boost sales.</p>
                            </div>
                        </div>
                        <div class="page-main-banner-content-list">
                            <h1 class="title">Shopify Headless Commerce (Hydrogen) Development</h1>
                            <div class="large-text content">
                                <p class="text">Get in touch with NOXU Technologies to build a dynamic and independent custom
                                    storefront.</p>
                                <p class="text">As a <strong>leading Shopify headless commerce (Hydrogen) development
                                        company</strong>, we have empowered numerous businesses to optimize their store
                                    performance. Our Shopify Headless Commerce (Hydrogen) enables you to build a store
                                    that can provide an enhanced shopping experience.</p>
                            </div>
                        </div>
                        <div class="page-main-banner-content-list">
                            <h1 class="title">World-class Shopify Marketplace Development Agency</h1>
                            <div class="large-text content">
                                <p class="text">Are you searching for a <strong>top Shopify marketplace development
                                        company</strong> to build a fully-fledged marketplace with specific features?
                                </p>
                                <p class="text">Our Shopify experts have helped many brands to move their Shopify stores
                                    into a robust Shopify marketplace. We can take your business to new heights with our
                                    Shopify marketplace development services.</p>
                            </div>
                        </div>
                        </Slider>

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
                        <a class="shopify-logo-white-banner" title="Shopify Expert" href="https://hireecommerceexperts.com/" target="_blank"><img src="/assets/images/Shopify-experts.png" alt="we certified icon" width="275px" height="60px" loading="lazy"/></a>
                    </div>
                </div>
                <div class="page-main-banner-colm col-lg-5 col-md-5">
                    <div class="page-main-banner-contact-form">
                        <h2 class="form-title h5">Get A Free Quote</h2>
<form id="quote-form" method="post" name="quote-form">
    <input type="hidden" name="c_url" value="NOXU Technologies.com/" />
    <div class="form-group">
        <input class="form-field" aria-label="Name" type="text" id="name" name="name" placeholder="Name"/>
    </div>
    <div class="form-group">
        <input class="form-field email-tab" aria-label="Email" type="email" id="email" name="email" placeholder="Email Address"/>
    </div>
    <div class="form-group">
        <div class="select-location">
            <div class="dropdown example">
                <div class="ui fluid search selection dropdown country_code">
                    <span>+</span>
                    <input type="number" placeholder="92" minlength="1" maxlength="4" id="country_code" name="country_code" class="form-field"/>
                </div>
            </div>
            <input type="tel" class="form-field phone-number-field" aria-label="Phone Number" id="phone" name="phone" placeholder="Phone Number" autocomplete="off"/>
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
</form>                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="brand_carousel" className="brand-carousel-section section-spacing">
      <div className="container">
     <BrandsLogoSlider />
      </div>
    </section>

    <section class="why-you-choose-us-section section-inner-spacing section-spacing">
        <div class="container">
            <div class="section-head-part">
                <h1 class="section-head-title h2">Why Should You Choose NOXU Technologies as Your eCommerce Development
                    Company?</h1>
                <p class="section-head-content">NOXU Technologies is one of the <strong>best Shopify development
                        companies,</strong> offering prominent eCommerce development services for all types of
                    industries. We hold extensive expertise in Shopify store development that possesses best-in-class
                    features and functionalities. Here are some of the top reasons to choose NOXU Technologies for your
                    eCommerce website development or Shopify store development services.</p>
            </div>

            <div class="row row-mb-minus justify-content-center">
                <div class="col-md-4 col-sm-6 col-spacing-bottom">
                    <div class="why-you-choose-us-points">
                        <div class="icon-main">
                            <img class="icon" loading="lazy" width="70px" height="70px" src="assets/images/on-time.png" alt="On Time Delivery icon"/>
                        </div>
                        <h2 class="h6 title">On-Time Delivery</h2>
                        <p class="medium-text text">We understand all the specific requirements of the client and use
                            modern tools &amp; well-designed strategies. We delivered projects/task on promised timelines.
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-spacing-bottom">
                    <div class="why-you-choose-us-points">
                        <div class="icon-main">
                            <img class="icon" loading="lazy" width="70px" height="70px" src="assets/images/coding.png" alt="Range of Shopify Developers icon"/>
                        </div>
                        <h2 class="h6 title">Range of Shopify Developers</h2>
                        <p class="medium-text text">We offer a range of Shopify developers like beginners, Shopify
                            developers, senior Shopify developers, Shopify plugin developers, offshore developers,
                            remote developers, and scrum teams.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-spacing-bottom">
                    <div class="why-you-choose-us-points">
                        <div class="icon-main">
                            <img class="icon" loading="lazy" width="70px" height="70px" src="assets/images/contact.png" alt="Tech-Savy Experts icon"/>
                        </div>
                        <h2 class="h6 title">Tech-Savy Experts</h2>
                        <p class="medium-text text">We have a team of certified Shopify experts who use their years of
                            expertise and core technical knowledge to build fully responsive and optimized Shopify
                            stores.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-spacing-bottom">
                    <div class="why-you-choose-us-points">
                        <div class="icon-main">
                            <img class="icon" loading="lazy" width="70px" height="70px" src="assets/images/settings.png" alt="Latest Tools &amp; Techniques icon"/>
                        </div>
                        <h2 class="h6 title">Latest Tools &amp; Techniques</h2>
                        <p class="medium-text text"><strong>Our Shopify developers</strong> are committed to following
                            the best quality standards and modern testing tools for lightening fast, bug-free Shopify
                            development.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-spacing-bottom">
                    <div class="why-you-choose-us-points">
                        <div class="icon-main">
                            <img class="icon" loading="lazy" width="70px" height="70px" src="assets/images/maintenance.png" alt="Support and Maintenance icon"/>
                        </div>
                        <h2 class="h6 title">Support and Maintenance</h2>
                        <p class="medium-text text">We are the most trusted Shopify development company among our
                            clients for providing excellent customer support, maintenance, and upgrade service after
                            launch.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="icon-and-text-grid-section section-spacing">
    <div class="container">
     <div class="section-head-part">
         <h2 class="section-head-title">What Data Can NOXU Technologies Migrate from Wix to Shopify?</h2>
         <p class="section-head-content">We offer seamless and secure data migration from Wix to Shopify without interfering existing store's salesforce services and zero data loss. Our Shopify migration developers make it effortless to migrate Wix to Shopify eCommerce platform, ensuring solid data security and zero downtime.</p>
      </div>  
     <div class="row row-mb-minus justify-content-center">
        <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
            <div class="icon-and-text-grid-back">
                <div class="icon-part"> 
                    <img loading="lazy" src="assets/images/customers-descriptions-blue.png" width="70px" height="70px" alt="Customers Descriptions"/>
                </div>
                <h3 class="h6 title">Customers Descriptions</h3>
                <p class="medium-text">Customer's name, Sign-up details, Credit &amp; Debit card details, emails, billing &amp; shipping address, etc.</p>
            </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
             <div class="icon-and-text-grid-back">
                 <div class="icon-part">
                     <img loading="lazy" src="assets/images/order-attributes-blue.png" width="70px" height="70px" alt="Order Attributes"/>
                 </div>
                 <h3 class="h6 title">Order Attributes</h3>
                 <p class="medium-text">Shipping &amp; Billing address, Order details (date, order status, product details, history), customer details, etc.</p>
             </div>
         </div>
         <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
             <div class="icon-and-text-grid-back">
                 <div class="icon-part">
                     <img loading="lazy" src="assets/images/what-data-migrate-7.html" width="70px" height="70px" alt="Content"/>
                 </div>
                 <h3 class="h6 title">Content</h3>
                 <p class="medium-text">SEO URLs, migrate blog posts and all descriptions.</p>
             </div>
         </div>
         <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
             <div class="icon-and-text-grid-back">
                 <div class="icon-part">
                     <img loading="lazy" src="assets/images/what-data-migrate-6.png" width="70px" height="70px" alt="Reviews and Coupons"/>
                 </div>
                 <h3 class="h6 title">Reviews and Coupons</h3>
                 <p class="medium-text">Offer date, expiration date, coupons name, coupon codes, and many more.</p>
             </div>
         </div>
         <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
            <div class="icon-and-text-grid-back">
                <div class="icon-part">
                    <img loading="lazy" src="assets/images/product-attributes-blue.png" width="70px" height="70px" alt="Product Attributes"/>
                </div>
                <h3 class="h6 title">Product Attributes</h3>
                <p class="medium-text">Product weight, product images, product names, product details, cost, etc.</p>
            </div>
        </div>
         <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
             <div class="icon-and-text-grid-back">
                 <div class="icon-part">
                     <img loading="lazy" src="assets/images/cms-page-blue.png" width="70px" height="70px" alt="CMS Pages"/>
                 </div>
                 <h3 class="h6 title">CMS Pages</h3>
                 <p class="medium-text">Home page, Static pages like the About Us page, and Privacy policy page.</p>
             </div>
         </div>
     </div>
    </div>
 </section>


 <section class="services-list-section section-spacing">
        <div class="container">
            <div class="section-head-part">
                <h2 class="section-head-title">Effective Shopify Development Services We Offer</h2>
                <p class="section-head-content">Integrate with us to avail a wide range of Shopify development services
                    at a flexible and convenient cost.</p>
            </div>

            <div class="row services-main-wrap services-list row-mb-minus justify-content-center">
                <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                    <div class="single-services-box">
                        <div class="icon-main">
                            <img class="icon normal-image" loading="lazy" width="84px" height="84px" src="assets/images/store.png" alt="Shopify store development"/>
                            <img class="icon hover-image" loading="lazy" width="84px" height="84px" src="assets/images/store-hover.png" alt="Shopify store development"/>
                        </div>
                        <div class="services-content">
                            <h3 class="title h4">Shopify Store Development</h3>
                            <p class="text">Whether you want to build an online store from scratch or customize Shopify
                                store, Our Shopify developers can help you meet your unique business requirements
                                efficiently in no time.</p>
                        </div>
                        <a href="shopify-store-setup.html" class="link-with-icon large-link">
                            Explore Service
                            <svg class="link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z" fill="#330C79"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                    <div class="single-services-box">
                        <div class="icon-main">
                            <img class="icon normal-image" loading="lazy" width="84px" height="84px" src="assets/images/store.png" alt="Shopfiy Plus Store Development"/>
                            <img class="icon hover-image" loading="lazy" width="84px" height="84px" src="assets/images/store-hover.png" alt="Shopfiy Plus Store Development"/>
                        </div>
                        <div class="services-content">
                            <h3 class="title h4">Shopify Plus Development</h3>
                            <p class="text">We excel in Shopify Plus store development by developing new features,
                                themes, and apps without affecting clients' running operations. Our Shopify plus
                                developers guarantee the most secure and high-performing eCommerce development.</p>
                        </div>
                        <a href="shopify-plus-store-development.html" class="link-with-icon large-link">
                            Explore Service
                            <svg class="link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z" fill="#330C79"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                    <div class="single-services-box">
                        <div class="icon-main">
                            <img class="icon normal-image" loading="lazy" width="85px" height="68px" src="assets/images/shopify-app.png" alt="Shopify App development"/>
                            <img class="icon hover-image" loading="lazy" width="85px" height="68px" src="assets/images/shopify-app-hover.png" alt="Shopify App development"/>
                        </div>
                        <div class="services-content">
                            <h3 class="title h4">Shopify App Development</h3>
                            <p class="text">Our team of Shopify app developers has a proven track record of building
                                tremendous Shopify apps with all unique features and functionalities beyond customers'
                                expectations.</p>
                        </div>
                        <a href="shopify-app-development.html" class="link-with-icon large-link">
                            Explore Service
                            <svg class="link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z" fill="#330C79"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                    <div class="single-services-box">
                        <div class="icon-main">
                            <img class="icon normal-image" loading="lazy" width="65px" height="86px" src="assets/images/shopify-mobile-app.png" alt="Shopify mobile app development"/>
                            <img class="icon hover-image" loading="lazy" width="65px" height="86px" src="assets/images/shopify-mobile-app-hover.png" alt="Shopify mobile app development"/>
                        </div>
                        <div class="services-content">
                            <h3 class="title h4">Shopify Mobile App Development</h3>
                            <p class="text">We are the best Shopify mobile app development company with expertise in
                                delivering feature-rich, user-friendly, and powerful mobile versions of your online
                                Shopify stores.</p>
                        </div>
                        <a href="shopify-mobile-app-development.html" class="link-with-icon large-link">
                            Explore Service
                            <svg class="link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z" fill="#330C79"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                    <div class="single-services-box">
                        <div class="icon-main">
                            <img class="icon normal-image" loading="lazy" width="84px" height="74px" src="assets/images/marketplace.png" alt="Shopify marketplace"/>
                            <img class="icon hover-image" loading="lazy" width="84px" height="74px" src="assets/images/marketplace-hover.png" alt="Shopify marketplace"/>
                        </div>
                        <div class="services-content">
                            <h3 class="title h4">Shopify Marketplace</h3>
                            <p class="text">We have helped many businesses to transform their online Shopify store into
                                a potential Shopify marketplace. We have successfully empowered numerous business owners
                                to boost their profit by trunking multiple Shopify stores with their Shopify
                                marketplace.</p>
                        </div>
                        <a href="shopify-marketplace.html" class="link-with-icon large-link">
                            Explore Service
                            <svg class="link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z" fill="#330C79"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                    <div class="single-services-box">
                        <div class="icon-main">
                            <img class="icon normal-image" loading="lazy" width="79px" height="86px" src="assets/images/Shopify-Migrations.png" alt="Shopify Migrations"/>
                            <img class="icon hover-image" loading="lazy" width="79px" height="86px" src="assets/images/Shopify-Migrations-hover.png" alt="Shopify Migrations"/>
                        </div>
                        <div class="services-content">
                            <h3 class="title h4">Shopify Migrations</h3>
                            <p class="text">We offer smooth migration of complete eCommerce stores, including product
                                details, purchase orders, customer details, content, and blog post to Shopify. Our
                                official Shopify experts are excellent at migrating WooCommerce, Magento, Wix,
                                BigCommerce, etc., to Shopify.</p>
                        </div>
                        <a href="shopify-migration.html" class="link-with-icon large-link">
                            Explore Service
                            <svg class="link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z" fill="#330C79"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                    <div class="single-services-box">
                        <div class="icon-main">
                            <img class="icon normal-image" loading="lazy" width="84px" height="84px" src="assets/images/Shopify-Headless-Commerce.png" alt="Shopify Headless Commerce(Hydrogen)"/>
                            <img class="icon hover-image" loading="lazy" width="84px" height="84px" src="assets/images/Shopify-Headless-Commerce-hover.png" alt="Shopify Headless Commerce(Hydrogen)"/>
                        </div>
                        <div class="services-content">
                            <h3 class="title h4">Shopify Headless Commerce(Hydrogen)</h3>
                            <p class="text">Our Shopify developers have great command over Shopify headless commerce
                                using the Hydrogen framework to enable you to deliver exceptional user experience and
                                boost customer conversion ratio.</p>
                        </div>
                      <a href="#" class="link-with-icon large-link">
                       Explore Service
                       <svg class="link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z" fill="#330C79"/>
                       </svg>                                                   
                    </a> 
                    </div>
                </div>
                <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                    <div class="single-services-box">
                        <div class="icon-main">
                            <img class="icon normal-image" loading="lazy" width="84px" height="84px" src="assets/images/marketing.png" alt="Digital Marketing"/>
                            <img class="icon hover-image" loading="lazy" width="84px" height="84px" src="assets/images/marketing-hover.png" alt="Digital Marketing"/>
                        </div>
                        <div class="services-content">
                            <h3 class="title h4">Digital Marketing</h3>
                            <p class="text">We have helped many businesses to transform their online Shopify store into
                                a potential Shopify marketplace. We have successfully empowered numerous business owners
                                to boost their profit by trunking multiple Shopify stores with their Shopify
                                marketplace.</p>
                        </div>
                        <a href="shopify-seo.html" class="link-with-icon large-link">
                            Explore Service
                            <svg class="link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z" fill="#330C79"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                    <div class="single-services-box">
                        <div class="icon-main">
                            <img class="icon normal-image" loading="lazy" width="84px" height="84px" src="assets/images/integrations.png" alt="Digital Marketing"/>
                            <img class="icon hover-image" loading="lazy" width="84px" height="84px" src="assets/images/integrations-hover.png" alt="Digital Marketing"/>
                        </div>
                        <div class="services-content">
                            <h3 class="title h4">Integrations</h3>
                            <p class="text">NOXU Technologies specializes in integration services like CRM integration, payment
                                gateway integration, third-party API integration, dropshipping app integration, and many
                                more. Our certified Shopify experts guarantee operational cost reduction and accelerated
                                ROI.</p>
                        </div>
                        <a href="shopify-integration.html" class="link-with-icon large-link">
                            Explore Service
                            <svg class="link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z" fill="#330C79"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="talk-to-exp-section section-spacing">
    <div class="container">
        <div class="talk-to-exp-background">
            <div class="line-background"><img src="assets/images/background-line.png" alt="banner line" width="708px" height="283px" loading="lazy"/></div>
            <div class="talk-to-exp-content d-flex align-items-center">
                <div class="talk-to-exp-title">
                    <h3 class="title">Searching for <span>High-quality Shopify Developers?</span> We Got You Covered!</h3>
                </div>
                <div class="talk-to-exp-profile d-flex align-items-center">
                    <div class="talk-to-exp-image">
                        <img width="132px" height="132px" loading="lazy" src="assets/images/asif.jpeg" alt="profile pic"/>
                    </div>
                    <div class="talk-to-exp-info">
                        <div class="expert-name">
                            <h4 class="title"><span>Muhammad</span> Asif</h4>
                            <span class="designation medium-text">(Co-founder & Chief Technology Officer)</span>
                        </div>
                        <p>You can reach out to our certified Shopify expert for your project-related queries like development process, costing, and project completion timeline. Get Started Now and Save 75% of your development cost with our dedicated scrum team.</p>
                        
                        <a href="#" rel="nofollow" class="button white-button" >Contact Us</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<section id="choose_shopify_experts" class="section-spacing choose-shopify-experts-and-video">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12 col-spacing-bottom-tablet">
                    <div class="section-head-part">
                        <h2 class="section-head-title">Why Should You Choose Our Shopify Experts for Your Project?</h2>
                        <p class="section-head-content">Successfully developed more than 200+ Shopify and Shopify Plus
                            projects and more than 20+ Shopify apps along with excellent support services.</p>
                    </div>

                    <div class="video-part">
                        <div class="video-wrapper">
                            <div class="video-image-play-button" data-video="1" style={{backgroundImage: "url(assets/images/ccvideo_thumbnail.png)", backgroundRepeat: "no-repeat;"}}>
                                <span class="playbutton"><img width="525px" height="295px" loading="lazy" src="assets/images/video_Play_Button.png" alt="video play"/></span>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="right-content">
                        <h3 class="title">Our dedicated Shopify developers specialize in developing robust, feature-rich
                            online Shopify stores.</h3>
                        <p>Our official Shopify experts are familiar with all the trending ins and outs of Shopify,
                            which helps them to have a keen eye for delivering a dynamic user experience. Our Shopify
                            developers are highly skilled &amp; trusted and use a radical approach to understand all your
                            specific requirements. Afterward, they implement trending tools and the best strategies to
                            bring your idea to life quickly and efficiently.</p>
                        <p>Here are the top reasons to choose our Shopify experts to avail world-class Shopify
                            development solutions.</p>
                        <ul class="list-point-with-border">
                            <li>Our certified Shopify experts analyze your business requirements carefully to build a
                                robust Shopify store beyond your expectations.</li>
                            <li>You can leverage numerous benefits like extensive expertise, top strategies,
                                strong technical background, and the latest tools just by choosing our
                                Shopify developers.</li>
                            <li>Maintain complete transparency throughout the development process.</li>
                            <li>Constantly delivers high-quality SEO-rich Shopify stores.</li>
                            <li>Great command over third-party integrations that can help your online
                                business expansion and sales growth.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="eCommerce_marketplace" class="section-spacing eCommerce-marketplace-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12 col-spacing-bottom-tablet">
                    <div class="left-content">
                        <div class="section-head-part">
                            <h2 class="section-head-title title">Feel Like an <span>eCommerce Marketplace King</span>
                                and Rule The Industry with Our Custom Shopify Services!</h2>
                        </div>
                        <ul class="custom-list">
                            <li><span>Fast loading</span> <strong class="equel-icon">Enhanced brand identity</strong>
                            </li>
                            <li><span>Interactive UI/UX</span> <strong class="equel-icon">More customer
                                    engagement</strong></li>
                            <li><span>Unique features</span> <strong class="equel-icon">More customer conversion
                                    rate</strong></li>
                        </ul>
                        <p>Enhanced brand identity + More customer engagement + More customer conversion rate =
                            <strong>Skyrocketing sales growth.</strong> Our custom Shopify development services are the
                            only way
                            to avail the benefits mentioned above at a time.</p>
                        <ul class="list-point-with-border">
                            <li>Shopify Plus Checkout Customization</li>
                            <li>Technical Execution Of eCommerce Optimizations</li>
                            <li>Shopify Plus development services</li>
                            <li>CRM / ERP With Shopify Website Integration</li>
                            <li>Shopify Shopping Cart Customization</li>
                            <li>Proactive Maintenance Plans</li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-5 col-md-12">
                    <div class="image">
                        <img width="474px" height="402px" src="assets/images/eCommerce-marketplace-king.png" loading="lazy" alt="eCommerce marketplace"/>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <div class="hire-official-Shopify-experts-banner section-spacing">
        <div class="container">
            <div class="hire-official-Shopify-experts-banner-back">
                <h2 class="title"><span>Tailor-Made Shopify</span> Development Services</h2>
                <p class="text">Harness the Power of Digital Transformation to Convert Your Idea into a Driving Business
                    Force</p>
                <a href="contact-us.html" class="button">Hire Official Shopify Experts</a>
                <img src="assets/images/shopify-logo.png" alt="Shopify logo" width="159px" height="159px" class="shopify-logo-banner" loading="lazy"/>
            </div>
        </div>
    </div>


    <section id="workflow_section" class="workflow-section section-spacing section-inner-spacing">
        <div class="container">
            <div class="section-head-part">
                <h2 class="section-head-title">Our Strategic Workflow for Shopify Store Maintenance</h2>
                <p class="section-head-content">We have powered all sizes of businesses to keep their online Shopify
                    store in topnotch condition with our comprehensive maintenance services.</p>
            </div>

            <div class="workflow-step">
                <div class="workflow-step-wrap row row-mb-minus justify-content-center">
                    <div class="workflow-single col-md-4 col-sm-6 col-spacing-bottom">
                        <div class="workflow-single-back">
                            <div class="image">
                                <img class="icon" width="85px" height="85px" src="assets/images/discover%201.png" alt="Discuss Project Requirements" loading="lazy"/>
                            </div>
                            <span class="workflow-count">01</span>
                            <h3 class="h5 title">Discovery &amp; Planning</h3>
                            <ul class="medium-text workflow-content">
                                <li>Our Shopify developers interact with clients to understand what exactly they are
                                    expecting.</li>
                                <li>After understanding clients' specific requirements, we prepare strategic planning
                                    for an uninterrupted development process.</li>
                                <li>It helps to deliver final results as per customer requirements in no time.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="workflow-single col-md-4 col-sm-6 col-spacing-bottom">
                        <div class="workflow-single-back">
                            <div class="image">
                                <img class="icon" width="85px" height="85px" src="assets/images/maintenance%201.png" alt="Store Maintenance &amp; QA" loading="lazy"/>
                            </div>
                            <span class="workflow-count">02</span>
                            <h3 class="h5 title">Store Maintenance &amp; QA</h3>
                            <ul class="medium-text workflow-content">
                                <li>After analyzing clients' specific requirements, our Shopify experts follow strategic
                                    planning and their strong technical expertise to provide complete endto-end
                                    solutions as per client requirements.</li>
                                <li>Before delivering a final outcome for UAT, our QA professional confirms the quality
                                    of the store by performing rigid quality testing.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="workflow-single col-md-4 col-sm-6 col-spacing-bottom">
                        <div class="workflow-single-back">
                            <div class="image">
                                <img class="icon" width="85px" height="85px" src="assets/images/startup%202.png" alt="UAT &amp; Deploy" loading="lazy"/>
                            </div>
                            <span class="workflow-count">03</span>
                            <h3 class="h5 title">UAT &amp; Deploy</h3>
                            <ul class="medium-text workflow-content">
                                <li>After successful QA testing, we deliver the product for UAT to verify end-to-end
                                    functionality from a client or end-user side.</li>
                                <li>After getting approval from the client, the Shopify store is ready to launch.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>


    <section id="workflow_section_two" class="workflow-section section-spacing">
        <div class="container">
            <div class="section-head-part">
                <h2 class="section-head-title">Our Agile Development Workflow to Cater Your Convenience</h2>
                <p class="section-head-content">As a leading eCommerce development company, our Shopify developers are
                    committed to follow a comprehensive yet effective development process. It ensures bug-free,
                    efficient, yet quick Shopify development.</p>
            </div>

            <div class="workflow-step workflow-small">
                <div class="workflow-step-wrap row-mb-minus">
                    <div class="workflow-single col-spacing-bottom">
                        <div class="workflow-single-back">
                            <div class="image">
                                <img class="icon" loading="lazy" width="70px" height="70px" src="assets/images/conversation.png" alt="Discuss Project Requirements"/>
                            </div>
                            <span class="workflow-count">01</span>
                            <h3 class="h6 title">Discuss Project Requirements</h3>
                            <ul class="small-text workflow-content">
                                <li>Our Shopify experts discuss with clients to discover what are the exact project
                                    requirements.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="workflow-single col-spacing-bottom">
                        <div class="workflow-single-back">
                            <div class="image">
                                <img class="icon" loading="lazy" width="70px" height="70px" src="assets/images/planing.png" alt="Planning"/>
                            </div>
                            <span class="workflow-count">02</span>
                            <h3 class="h6 title">Planning</h3>
                            <ul class="small-text workflow-content">
                                <li>After knowing clients' detailed requirements, we design strategic planning for an
                                    uninterrupted development process. It enables us to deliver the final product that
                                    meets customers' unique requirements quickly.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="workflow-single col-spacing-bottom">
                        <div class="workflow-single-back">
                            <div class="image">
                                <img class="icon" loading="lazy" width="70px" height="70px" src="assets/images/web-design%201.png" alt="Designing &amp; Development"/>
                            </div>
                            <span class="workflow-count">03</span>
                            <h3 class="h6 title">Designing &amp; Development</h3>
                            <ul class="small-text workflow-content">
                                <li>Our Shopify developers use extensive expertise background and modern tools &amp;
                                    technology to provide a dynamic user experience and sales-driven store.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="workflow-single col-spacing-bottom">
                        <div class="workflow-single-back">
                            <div class="image">
                                <img class="icon" loading="lazy" width="70px" height="70px" src="assets/images/test.png" alt="QA Testing"/>
                            </div>
                            <span class="workflow-count">04</span>
                            <h3 class="h6 title">QA Testing</h3>
                            <ul class="small-text workflow-content">
                                <li>Before releasing a final product for UAT, our QA specialist ensure the quality of
                                    the website by performing rigorous quality testing.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="workflow-single col-spacing-bottom">
                        <div class="workflow-single-back">
                            <div class="image">
                                <img class="icon" loading="lazy" width="70px" height="70px" src="assets/images/startup%202.png" alt="UAT &amp; Deploy"/>
                            </div>
                            <span class="workflow-count">05</span>
                            <h3 class="h6 title">UAT &amp; Deploy</h3>
                            <ul class="small-text workflow-content">
                                <li>After successful QA testing, we go for UAT to validate end-to-end functionality from
                                    a customer or end-user side. After getting approval from the end-user, the Shopify
                                    store is ready to deploy.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

<CaseStudySlider />

    <div class="talk-to-exp-section section-spacing">
        <div class="container">
            <div class="talk-to-exp-background">
                <div class="line-background"><img src="assets/images/background-line.png" alt="banner line" width="708px" height="283px" loading="lazy"/></div>
                <div class="talk-to-exp-content d-flex align-items-center">
                    <div class="talk-to-exp-title">
                        <h3 class="title h4">Are You Ready to <span>Kick-start Your Online Business with Shopify?</span>
                            Let us Build It for You!</h3>
                    </div>
                    <div class="talk-to-exp-profile d-flex align-items-center">
                        <div class="talk-to-exp-image">
                            <img src="assets/images/asif.jpeg" width="132px" height="132px" alt="profile pic" loading="lazy"/>
                        </div>
                        <div class="talk-to-exp-info">
                            <div class="expert-name">
                                <h4 class="title"><span>Muhammad</span> Asif</h4>
                                <span class="designation medium-text">(Co-founder & Chief Technology Officer)</span>
                            </div>
                            <p>Whether you need Shopify developers or Shopify Plus experts, We offer a range of
                                certified Shopify experts. Our dedicated team of Shopify developers can help you scale
                                your business and build brand identity. Get in touch with our technical expert now if
                                you have queries.</p>

                            
                            <a href="#" rel="nofollow" class="button white-button">Book a Meeting with Our CTO</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="industries-we-work section-spacing section-inner-spacing">
        <div class="container">
            <div class="section-head-part">
                <h2 class="section-head-title">Diverse Industries We cater</h2>
            </div>

            <div className="industries-we-work-slider">
      <Slider {...settings}>
        {industriesData.map((industry, index) => (
          <div key={index} className="industries-we-work-single">
            <div className="industries-we-work-inner">
              <div className="industries-image">
                <img
                  src={industry.imageSrc}
                  width="299px"
                  height="205px"
                  alt={industry.alt}
                  loading="lazy"
                />
              </div>
              <div className="industries-name h6">{industry.name}</div>
            </div>
          </div>
        ))}
      </Slider>
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
                        <span class="number h1">1K +</span>
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

export default Homepage
