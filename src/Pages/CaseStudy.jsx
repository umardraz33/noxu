import React, { useEffect, useState } from 'react';
import LetDiscuss from '../Components/LetDiscuss'
import { useParams } from 'react-router-dom';
const CaseStudy = () => {
    const {id} = useParams()
    const [casestudy, setCaseStudy] = useState([]);
    const [error, setError] = useState(null);
    const baseurl = 'http://localhost:1337';

useEffect(()=>{
    const fetchdata = async()=>{
        try{
            const response = await fetch('http://localhost:1337/api/case-studies?populate=image1');
            const data = await response.json();

            if (data && data.data && data.data.length > 0 && data.data[0].attributes.image1) {
                setCaseStudy(data.data); // Update to include the array directly
              } else {
                throw new Error('Invalid data format');
              }

        }catch (error) {
            setError('Error fetching brand data. Please try again later.');
          } 
    }
    fetchdata();
},[])
  return (
    <div>
      

      <section id="page_banner" class="page-main-banner homepage-banner section-spacing">
        <div class="breadcrumb-container">
            <div class="container">
                <ul class="breadcrumb">
                    <li><a href="https://NOXU Technologies.com/" class="medium-text">Home</a></li>                 
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
               <div class="page-main-banner-colm col-lg-5 col-md-5">
                   <div class="page-main-banner-contact-form">
                        <h2 class="form-title h5">Get A Free Quote</h2>
<form id="quote-form" method="post" name="quote-form" novalidate="novalidate">
    <input type="hidden" name="c_url" value="NOXU Technologies.com/casestudies.php"/>
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
</form>                   </div>
               </div>
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
                    {casestudy.map((val, index)=>(
                        <div class="case-study-background">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-image">
                                        <img loading="lazy" width="370px" height="247px" src={baseurl+val.attributes.image1.data.attributes.url} alt=''/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="case-study-content-info">
                                        <div class="case-study-name">
                                            <h5 class="title">{val.attributes.title}</h5>
                                        </div>                                    
                                        <p class="content">{val.attributes.description1}</p>
                                        <a href="alexandra-gioia-case-study.php" class="button">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                                ))}           
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
