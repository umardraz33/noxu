import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {

    const navigate = useNavigate();
     const [hireus, setHireus] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


    const handleLinkClick = (path) => {
      navigate(path);
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    };
    
  return (
    <>
      <header className="header">
    <div className="announcement-bar">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-12 announcement-left-part">
                    <ul className="contact-info">
                        <li><a className="contact-link" href="mailto:contact@noxutechnologies.com">contact@noxutechnologies.com</a></li>
                        <li>
                            <a className="contact-link" href="https://wa.me/447426341853" target='_blank'>+447426341853</a>
                            <a className="contact-link" href="tel:+919909914731">+92331 7344448</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-12 announcement-right-part">
                    <ul className="social-media">
                        <li>
                            <a href="https://facebook.com/NOXU Technologies" aria-label="facebook" className="social-media-back" target="_blank">
                                <svg className="social-media-icon social-media-fb-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7188 3.12848L11.6525 3.12598C9.64875 3.12598 8.35437 4.45348 8.35437 6.51035V8.06973H6.28125V10.8916H8.35437L8.35187 16.876H11.2525L11.255 10.8916H13.6337L13.6319 8.07035H11.255V6.74723C11.255 6.11098 11.4056 5.7891 12.2337 5.7891L13.7125 5.78848L13.7188 3.12848Z" fill="white"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/noxu-technologies-ltd" aria-label="linkdin" className="social-media-back" target="_blank">
                                <svg className="social-media-icon social-media-linkdin-icon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13H9.6V8.45063C9.6 7.20263 9.0918 6.50635 8.1804 6.50635C7.1886 6.50635 6.6 7.23188 6.6 8.45063V13H4.2V4.55H6.6V5.50024C6.6 5.50024 7.353 4.06885 9.0498 4.06885C10.7472 4.06885 12 5.19097 12 7.51277V13ZM1.4652 3.19858C0.655801 3.19858 0 2.48232 0 1.59897C0 0.716275 0.655801 0 1.4652 0C2.274 0 2.9298 0.716275 2.9298 1.59897C2.9304 2.48232 2.274 3.19858 1.4652 3.19858ZM0 13H3V4.55H0V13Z" fill="white"></path>
                                </svg>
                            </a>
                        </li>
                        {/* <li>
                            <a href="https://twitter.com/NOXU Technologies" className="social-media-back" aria-label="twitter" target="_blank">
        
                                <svg className="social-media-icon social-media-twitter-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15" x="0" y="0" viewBox="0 0 1226.37 1226.37"  xml:space="preserve"><g><path d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z" fill="#ffffff" opacity="1" data-original="#000000" className=""></path></g></svg>

                                
                            </a>
                        </li> */}
                        {/* <li>
                            <a href="https://in.pinterest.com/NOXU Technologies/" className="social-media-back" aria-label="pinterest" target="_blank">
                                <svg className="social-media-icon social-media-pinterest-icon" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.22546 9.7162C4.82487 11.6441 4.30692 13.0342 2.85987 14.0002C2.41253 11.0874 3.51635 8.90008 4.0281 6.57608C3.15458 5.22632 4.1331 2.50867 5.9737 3.17738C8.2387 4.00173 4.17546 7.99997 7.0131 8.52455C9.97605 9.07138 11.0366 4.35255 9.20046 2.63797C6.54635 0.162432 1.2584 2.26161 2.08164 5.77149C2.4134 7.18632 1.28487 7.58902 1.28487 7.58902C0.370752 7.24314 0.283409 6.04572 0.330166 4.87714C0.435166 2.18996 2.95692 0.308199 5.48664 0.0471432C8.68605 -0.282272 11.6887 1.12679 12.1025 3.89385C12.5702 7.01585 10.7199 10.6023 7.2981 10.3586C6.37164 10.2927 5.22546 9.7162 5.22546 9.7162Z" fill="white"></path>
                                </svg>
                            </a>
                        </li> */}
                        <li>
                            <a href="https://www.instagram.com/NOXU Technologies/" aria-label="instagram" className="social-media-back" target="_blank">
                                <svg className="social-media-icon social-media-insta-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.40224 0.0920469C3.18133 0.147134 2.12311 0.445632 1.26862 1.29651C0.411146 2.15187 0.116356 3.21428 0.0611313 4.42249C0.0268023 5.1766 -0.173936 10.8737 0.408162 12.3678C0.800704 13.3758 1.57383 14.1508 2.59101 14.5446C3.06564 14.7292 3.60745 14.8541 4.40224 14.8906C11.0479 15.1914 13.5113 15.0276 14.5501 12.3678C14.7345 11.8943 14.8613 11.353 14.8964 10.5602C15.2001 3.89753 14.8472 2.45336 13.6889 1.29651C12.7703 0.38012 11.6897 -0.243691 4.40224 0.0920469ZM4.46342 13.5507C3.7358 13.5179 3.34102 13.3967 3.07759 13.2947C2.41489 13.0371 1.91713 12.5414 1.66115 11.8826C1.21786 10.7473 1.36489 5.35539 1.40444 4.48292C1.44325 3.62831 1.61638 2.84725 2.21937 2.24427C2.96565 1.49983 3.92983 1.13499 10.4948 1.43128C11.3516 1.46999 12.1344 1.64277 12.7389 2.24427C13.4852 2.9887 13.8553 3.9603 13.5539 10.5001C13.521 11.2259 13.3994 11.6198 13.2971 11.8826C12.6218 13.6134 11.068 13.8536 4.46342 13.5507ZM10.5672 3.51722C10.5672 4.01004 10.968 4.41077 11.4628 4.41077C11.9576 4.41077 12.3591 4.01004 12.3591 3.51722C12.3591 3.02441 11.9576 2.62403 11.4628 2.62403C10.968 2.62403 10.5672 3.02441 10.5672 3.51722ZM3.647 7.49097C3.647 9.60218 5.3627 11.3138 7.47915 11.3138C9.59559 11.3138 11.3113 9.60218 11.3113 7.49097C11.3113 5.37977 9.59559 3.6692 7.47915 3.6692C5.3627 3.6692 3.647 5.37977 3.647 7.49097ZM4.9918 7.49097C4.9918 6.12123 6.10525 5.00989 7.47915 5.00989C8.85305 5.00989 9.9665 6.12123 9.9665 7.49097C9.9665 8.86147 8.85305 9.97315 7.47915 9.97315C6.10525 9.97315 4.9918 8.86147 4.9918 7.49097Z" fill="white"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="header-main">
        <div className="container">
            <div className="header-inner d-flex align-items-center justify-content-between">
                <span className="">
                    <NavLink to="/" onClick={() => {handleLinkClick('/'); setMobileMenuOpen()}}>
                        <img src="assets/images/NOXU NEW LOGO.png" alt="logo" width="212" style={{width:"212px", maxWidth:"60%"}} height="51" className="company-logo" loading="lazy" />
                        </NavLink>
                </span>
                <div className="header-navigation">
                    <div className="navigation-overlay"></div>
                    <div className={`header-navigation-inner ${isMobileMenuOpen ? 'active-sidebar-navigation' : ''}`}>
                        <div className="mobile-sidbar-head mobile-show-icon">
                            <div className="navigation-close-icon" onClick={()=>setMobileMenuOpen(false)}>
                            
                            </div>
                        </div>
                        <ul className="navigation-list parent-navigation d-flex">
                            <li onClick={() => {handleLinkClick('/'); setMobileMenuOpen()}}><NavLink to="/" className="navigation-link">Home</NavLink></li>
                            <li onClick={() => {handleLinkClick('/shopify-store-setup'); setMobileMenuOpen()}}>
                                <NavLink to="/shopify-store-setup" className="navigation-link">Services</NavLink>
                                {/* <span className="navigation-dropdown-icon-part">
                                   
                                </span> */}
                                {/* <div className="dropdown-menu mega-menu">
                                    <div className="mobile-sidbar-head mobile-show-icon">
                                        <div className="navigation-back">
                                        <img loading="lazy" className="navigation-back-icon" src="/assets/images/navigation-back-icon-arrow.png" alt="menu back arrow" width="20" height="20"/>
                                        </div>
                                        <span className="previous-navigation-name">Services</span>
                                        <div className="navigation-close-icon">
                                        
                                        </div>
                                    </div>
                                    <div className="megamenu-container mobile-navigation-scroll">

                                        <div className="row justify-content-center">
                                            <div className="col-xl-4">
                                                <ul className="navigation-list child-menu">
                                                    <li>
                                                        <NavLink to="/shopify-store-setup" className="navigation-link">Shopify Store Development</NavLink>
                                                        <span className="navigation-dropdown-icon-part mobile-show-icon">
                                                            
                                                        </span>
                                                        <div className="dropdown-menu">
                                                            <div className="mobile-sidbar-head mobile-show-icon">
                                                                <div className="navigation-back">
                                                                <img loading="lazy" className="navigation-back-icon" src="/assets/images/navigation-back-icon-arrow.png" alt="menu back arrow" width="20" height="20"/>
                                                                </div>
                                                                <span className="previous-navigation-name">Shopify Store
                                                                    Development</span>
                                                                <div className="navigation-close-icon">
                                                                
                                                                </div>
                                                            </div>
                                                            <ul className="navigation-list grandchild-menu">                                                                
                                                                <li><a href="shopify-custom-theme-setup.png" className="navigation-link"> Store Setup With
                                                                        Custom/Premium Theme</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <a href="shopify-marketplace.png" className="navigation-link">Shopify Marketplace</a>
                                                        <span className="navigation-dropdown-icon-part mobile-show-icon">
                                                           
                                                        </span>
                                                        <div className="dropdown-menu">
                                                            <div className="mobile-sidbar-head mobile-show-icon">
                                                                <div className="navigation-back">
                                                                <img loading="lazy" className="navigation-back-icon" src="/assets/images/navigation-back-icon-arrow.png" alt="menu back arrow" width="20" height="20"/>
                                                                </div>
                                                                <span className="previous-navigation-name">Shopify
                                                                    Marketplace</span>
                                                                <div className="navigation-close-icon">
                                                                    
                                                                </div>
                                                            </div>
                                                            <ul className="navigation-list grandchild-menu">
                                                                <li><a href="shopify-multivendor.png" className="navigation-link"> Multivendor
                                                                        Marketplace With Readymade Apps</a></li>
                                                              
                                                            </ul>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <a href="shopify-integration.png" className="navigation-link">Shopify Integrations</a>
                                                       <span className="navigation-dropdown-icon-part mobile-show-icon">
                                                           
                                                        </span>
                                                        <div className="dropdown-menu">
                                                            <div className="mobile-sidbar-head mobile-show-icon">
                                                                <div className="navigation-back">
                                                                    <img loading="lazy" className="navigation-back-icon" src="/assets/images/navigation-back-icon-arrow.webp" alt="menu back arrow" width="20" height="20"/>
                                                                </div>
                                                                <span className="previous-navigation-name">Shopify
                                                                    Integrations</span>
                                                                <div className="navigation-close-icon">
                                                                    
                                                                </div>
                                                            </div>                                                            
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        
                                            <div className="col-xl-4">
                                                <ul className="navigation-list child-menu">
                                                    <li>
                                                        <a href="shopify-app-development.png" className="navigation-link">Shopify App Development</a>
                                                        <span className="navigation-dropdown-icon-part mobile-show-icon">
                                                       
                                                        </span>
                                                        <div className="dropdown-menu">
                                                            <div className="mobile-sidbar-head mobile-show-icon">
                                                                <div className="navigation-back">
                                                                <img loading="lazy" className="navigation-back-icon" src="/assets/images/navigation-back-icon-arrow.png" alt="menu back arrow" width="20" height="20"/>
                                                                </div>
                                                                <span className="previous-navigation-name">Shopify App
                                                                    Development</span>
                                                                <div className="navigation-close-icon">
                                                                    
                                                                </div>
                                                            </div>
                                                            <ul className="navigation-list grandchild-menu">
                                                                <li><a href="shopify-public-app-development.png" className="navigation-link"> Public App
                                                                        Development</a></li>
                                                                <li><a href="shopify-private-app-development.png" className="navigation-link"> Private App
                                                                        Development</a></li>                                                                
                                                                <li><a href="shopify-payment-gateway-extension-development.png" className="navigation-link"> Payment Gateway
                                                                        Extension Development</a></li>                                                             
                                                            </ul>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <a href="shopify-mobile-app-development.png" className="navigation-link">Shopify Mobile App Development</a>
                                                       <span className="navigation-dropdown-icon-part mobile-show-icon">
                                                           
                                                        </span>
                                                        <div className="dropdown-menu">
                                                            <div className="mobile-sidbar-head mobile-show-icon">
                                                                <div className="navigation-back">
                                                                    <img loading="lazy" className="navigation-back-icon" src="/assets/images/navigation-back-icon-arrow.webp" alt="menu back arrow" width="20" height="20"/>
                                                                </div>
                                                                <span className="previous-navigation-name">Shopify Mobile
                                                                    App Development</span>
                                                                <div className="navigation-close-icon">
                                                                    
                                                                </div>
                                                            </div>                                                            
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-xl-4">
                                                <ul className="navigation-list child-menu">
                                                    <li>
                                                        <p className="navigation-link">Digital Marketing</p>
                                                        <span className="navigation-dropdown-icon-part mobile-show-icon">
                                                       
                                                        </span>
                                                        <div className="dropdown-menu">
                                                            <div className="mobile-sidbar-head mobile-show-icon">
                                                                <div className="navigation-back">
                                                                    <img loading="lazy" className="navigation-back-icon" src="/assets/images/navigation-back-icon-arrow.png" alt="menu back arrow" width="20" height="20"/>
                                                                </div>
                                                                <span className="previous-navigation-name">Digital
                                                                    Marketing</span>
                                                                <div className="navigation-close-icon">
                                                                
                                                                </div>
                                                            </div>
                                                            <ul className="navigation-list grandchild-menu">
                                                                <li><a href="shopify-on-page-seo.png" className="navigation-link">On Page SEO</a>
                                                                </li>
                                                                <li><a href="shopify-off-page-seo.png" className="navigation-link">Off Page SEO</a>
                                                                </li>
                                                                <li><a href="shopify-google-analytics-setup.png" className="navigation-link">Google Analytics
                                                                        Setup</a></li>
                                                                <li><a href="shopify-webmaster-setup.png" className="navigation-link">Webmaster
                                                                        Setup</a></li>
                                                                <li><a href="shopify-page-speed-optimization.png" className="navigation-link">Page Speed
                                                                        Optimisation</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>


                                        </div>

                                    </div>
                                </div> */}
                            </li>
                            <li onClick={() => {handleLinkClick('/shopify-plus-store-development'); setMobileMenuOpen()}}>
                                <NavLink to="/shopify-plus-store-development" className="navigation-link">Shopify Plus</NavLink>
                                {/* <span className="navigation-dropdown-icon-part">
                                   
                                </span> */}
                                {/* <div className="dropdown-menu ">
                                    <div className="mobile-sidbar-head mobile-show-icon">
                                        <div className="navigation-back">
                                        <img loading="lazy" className="navigation-back-icon" src="/assets/images/navigation-back-icon-arrow.png" alt="menu back arrow" width="20" height="20"/>
                                        </div>
                                        <span className="previous-navigation-name">Shopify Plus</span>
                                        <div className="navigation-close-icon">
                                        
                                        </div>
                                    </div>
                                    <ul className="navigation-list child-menu mobile-navigation-scroll">
                                        <li><a href="shopify-plus-store-setup-with-custom-theme.png" className="navigation-link">Shopify Plus Store Setup With Custom Theme</a></li>                                        
                                        <li><a href="shopify-plus-store-setup-with-custom-design.png" className="navigation-link">Shopify Plus Store Setup with Custom Design</a></li>  
                                        <li><a href="shopify-plus-support-and-maintenance.png" className="navigation-link">Shopify Plus Support  and Maintenance</a></li>                                                                              
                                        <li><a href="shopify-plus-customizations.png" className="navigation-link">Shopify Plus Customizations</a></li>   
                                        <li><a href="shopify-plus-checkout-customizations.png" className="navigation-link">Shopify Plus Checkout Customizations</a></li>                                                                              
                                    </ul>
                                </div>                               */}
                            </li>
                            <li onClick={() => {handleLinkClick('/shopify-migration'); setMobileMenuOpen()}}>
                                <NavLink to="/shopify-migration" className="navigation-link">Migration</NavLink>
                                {/* <span className="navigation-dropdown-icon-part">
                                   
                                </span> */}
                                {/* <div className="dropdown-menu ">
                                    <div className="mobile-sidbar-head mobile-show-icon">
                                        <div className="navigation-back">
                                        <img loading="lazy" className="navigation-back-icon" src="/assets/images/navigation-back-icon-arrow.png" alt="menu back arrow" width="20" height="20" />
                                        </div>
                                        <span className="previous-navigation-name">Shopify Migrations</span>
                                        <div className="navigation-close-icon">
                                        
                                        </div>
                                    </div>
                                    <ul className="navigation-list child-menu mobile-navigation-scroll">
                                        <li><a href="magento-to-shopify.png" className="navigation-link">Magento to Shopify
                                                Migration</a></li>                                        
                                        <li><a href="opencart-to-shopify.png" className="navigation-link">OpenCart to
                                                Shopify Migration</a></li>
                                        <li><a href="woocommerce-to-shopify.png" className="navigation-link">WooCommerce to
                                                Shopify Migration</a></li>                                        
                                        <li><a href="wix-to-shopify.png" className="navigation-link">Wix to Shopify Migration</a></li>                                                                                
                                    </ul>
                                </div> */}
                            </li>
                            <li>
                                <NavLink onClick={() => {handleLinkClick('/hire-us'); setMobileMenuOpen()}} to="/hire-us" className="navigation-link">Hire Us</NavLink>
                                <span className="navigation-dropdown-icon-part" onClick={()=>setHireus(true)}>
                               
                                </span>
                                <div className={`dropdown-menu ${hireus ? 'active-menu' : ''}`}>
                                    <div className="mobile-sidbar-head mobile-show-icon">
                                        <div className="navigation-back" onClick={()=>setHireus(false)}>
                                        <img loading="lazy" className="navigation-back-icon" src="/assets/images/navigation-back-icon-arrow.png" alt="menu back arrow" width="20" height="20"/>
                                        </div>
                                        <span className="previous-navigation-name">Hire Us</span>
                                        <div className="navigation-close-icon" onClick={()=>setMobileMenuOpen(false)}>
                                        
                                        </div>
                                    </div>
                                    <ul className="navigation-list child-menu mobile-navigation-scroll">
                                        <li onClick={() => {handleLinkClick('/hire-shopify-plus-developers'); setMobileMenuOpen()}}><NavLink to="/hire-shopify-plus-developers" className="navigation-link">Hire Shopify Plus Developer</NavLink></li> 
                                        <li onClick={() => {handleLinkClick('/hire-shopify-developer'); setMobileMenuOpen()}}><NavLink to="/hire-shopify-developer" className="navigation-link">Hire Shopify Developer</NavLink></li>    
                                        <li onClick={() => {handleLinkClick('/hire-shopify-app-developer'); setMobileMenuOpen()}}><NavLink to="/hire-shopify-app-developer" className="navigation-link">Hire Shopify App Developer</NavLink></li> 
                                        <li onClick={() => {handleLinkClick('/hire-shopify-mobile-app-developers'); setMobileMenuOpen()}}><NavLink to="/hire-shopify-mobile-app-developers" className="navigation-link">Hire Shopify Mobile App Developers</NavLink></li> 
                                        <li onClick={() => {handleLinkClick('/hire-headless-commerce-developer'); setMobileMenuOpen()}}><NavLink to="/hire-headless-commerce-developer" className="navigation-link">Hire Shopify Headless Commerce Developer</NavLink></li>                                                  
                                        <li onClick={() => {handleLinkClick('/hire-dedicated-shopify-designer'); setMobileMenuOpen()}}><NavLink to="/hire-dedicated-shopify-designer" className="navigation-link">Hire Shopify Designer</NavLink></li>
                                        <li onClick={() => {handleLinkClick('/hire-shopify-seo-expert'); setMobileMenuOpen()}}><NavLink to="/hire-shopify-seo-expert" className="navigation-link">Hire Shopify SEO Expert</NavLink></li>    
                                        <li onClick={() => {handleLinkClick('/hire-shopify-consultant'); setMobileMenuOpen()}}><NavLink to="/hire-shopify-consultant" className="navigation-link">Hire Shopify Consultant</NavLink></li>                                       
                                    </ul>
                                </div>
                            </li>
                            <li onClick={() => {handleLinkClick('/casestudies'); setMobileMenuOpen()}}>
                                <NavLink to="/casestudies" className="navigation-link">Case Study</NavLink>
                            </li>
                            <li onClick={() => {handleLinkClick('/portfolio'); setMobileMenuOpen()}}><NavLink to="/portfolio" className="navigation-link">Portfolio</NavLink></li>
                            {/* <li><a href="blog/index.png" className="navigation-link" target="_blank">Blogs</a>
                            </li> */}
                            <li onClick={() => {handleLinkClick('/contact-us'); setMobileMenuOpen()}}><NavLink to="/contact-us" className="navigation-link">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="navigation-hamburger-icon desktop-none" onClick={()=>setMobileMenuOpen(true)}>
                        <svg className="hamburger-icon" width="54" height="42" viewBox="0 0 54 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M54 3C54 3.79565 53.6839 4.55871 53.1213 5.12132C52.5587 5.68393 51.7956 6 51 6H3C2.20435 6 1.44129 5.68393 0.87868 5.12132C0.31607 4.55871 0 3.79565 0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H51C51.7956 0 52.5587 0.31607 53.1213 0.87868C53.6839 1.44129 54 2.20435 54 3ZM54 21C54 21.7956 53.6839 22.5587 53.1213 23.1213C52.5587 23.6839 51.7956 24 51 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.31607 22.5587 0 21.7956 0 21C0 20.2044 0.31607 19.4413 0.87868 18.8787C1.44129 18.3161 2.20435 18 3 18H51C51.7956 18 52.5587 18.3161 53.1213 18.8787C53.6839 19.4413 54 20.2044 54 21ZM51 42C51.7956 42 52.5587 41.6839 53.1213 41.1213C53.6839 40.5587 54 39.7956 54 39C54 38.2044 53.6839 37.4413 53.1213 36.8787C52.5587 36.3161 51.7956 36 51 36H3C2.20435 36 1.44129 36.3161 0.87868 36.8787C0.31607 37.4413 0 38.2044 0 39C0 39.7956 0.31607 40.5587 0.87868 41.1213C1.44129 41.6839 2.20435 42 3 42H51Z" fill="black"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
    </>
  )
}

export default Navbar
