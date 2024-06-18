import React, { useEffect, useState } from 'react';
import LetDiscuss from '../Components/LetDiscuss'
import { NavLink } from 'react-router-dom';



const Portfolio = () => {


    return (
        <div>
            <div class="breadcrumb-container dark-breadcrumb" style={{ marginTop: '160px' }}>
                <div class="container">
                    <ul class="breadcrumb">
                        <li><NavLink to="/" class="medium-text">Home</NavLink></li>
                        <li><span class="medium-text">Portfolio</span></li>
                    </ul>
                </div>
            </div>


            <div class="container">
                <div class="section-head-part portfolio-page-head">
                    <h2 class="section-head-title">Our Projects</h2>
                    <p class="section-head-content">Our work is a testimonial of our hard-earned reputation in the market. Check out our portfolio and then take a final call whether you can see us make a difference in your bussiness.</p>
                </div>
            </div>


            <div class="container">
    <div class="portfolio-page-list">
        <div class="portfolio-single-main" style={{display: "flex"}}>
            <div class="portfolio-image-part">
                <a href="https://blackleaves.com.au/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/blackleaves.png" alt="Blackleaves" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Blackleaves</h3>
                    <p class="content">Buy the best Blackleaves online with the awesome flavours with the help of beefBlackleaves.com We create a customized theme &amp; to match up client’s design expectation we had provided them a high level of theme customization as per their requirement.</p>
                    {/* <span class="portfolio-category large-text">Meat Snack</span> */}
                </div>
                <a href="https://blackleaves.com.au/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "flex"}}>
            <div class="portfolio-image-part">
                <a href="https://recovapro.co.uk/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/recovapro.png" alt="recovapro" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Recovapro</h3>
                    <p class="content">Recovapro was established in 2018 by Lauren Ashley, the founder of The Fashionista's Diary, a Miami-based fashion and lifestyle blog. From casual blouses to brunch-ready attire, It's an one stop shop for all the apparels.  Whereas the recovapro website is Designed By Nathalie Fleitas &amp; Developed By Noxu Technologies.</p>
                    {/* <span class="portfolio-category large-text">Cloths Store</span> */}
                </div>
                <a href="https://recovapro.co.uk/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "flex"}}>
            <div class="portfolio-image-part">
                <a href="https://foziakhalid.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/foziakhalid.png" alt="plantqulity" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Foziakhalid</h3>
                    <p class="content">Get matched with the perfect Foziakhalid that will bring good fortune and peace into your home. We have created custom videos for YouTube, a cart popup discount progress bar, and a collection banner using metafiled. To make the site more interesting, we added product pages with extra information sections, videos, images, and blog listings alphabetically.</p>
                    {/* <span class="portfolio-category large-text">Plant</span> */}
                </div>
                <a href="https://foziakhalid.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "flex"}}>
            <div class="portfolio-image-part">
                <a href="https://ceroplas.cl/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/ceroplas.png" alt="Flamingo" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Ceroplas</h3>
                    <p class="content">Reach your online shopping destination for fashion boutiques with a focus on quality and value at Flamingo e-commerce store. To match up their requirement we have created a pixel-perfect design on the website using the Shopify platform as per client requirement. Whereas the Flamingo E-Commerce website is designed by Nathalie Fleitas &amp; Developed by Noxu Technologies.
                    </p>
                    {/* <span class="portfolio-category large-text">Baby Boutique</span> */}
                </div>
                <a href="https://ceroplas.cl/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "flex"}}>
            <div class="portfolio-image-part">
                <a href="https://pinksboutique.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/pinksboutique.png" alt="aoklok" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Pinksboutique</h3>
                    <p class="content">Shop from Pinksboutique and get the collection that suits your style and shows your most elegant self without compromising quality. As a top Shopify development company, here's what our design team did to assist them in achieving their goal.To understand the Pinksboutique's brand image and the audience it is aiming for, our hire Shopify experts created a brand strategy to relaunch the entire thing.
                    </p>
                    {/* <span class="portfolio-category large-text">Cloths Store</span> */}
                </div>
                <a href="https://pinksboutique.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main">
            <div class="portfolio-image-part">
                <a href="https://proverbskin.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/proverbskin.png" alt="Bella and Bloom" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Proverbskin</h3>
                    <p class="content">Make an impression on the gathering by finishing your style with proverbskin. To match up with their requirement, we have created a pixel-perfect design on the website using the Shopify platform for the prestige theme as per client requirement. Whereas the proverbskin website is designed and developed by Noxu Technologies. Whereas the Bella and Bloom website is designed by Nathalie Fleitas &amp; developed by Noxu Technologies.
                    </p>
                    <span class="portfolio-category large-text">Boutique</span>
                </div>
                <a href="https://proverbskin.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "none"}}>
            <div class="portfolio-image-part">
                <a href="https://drthrowerskincare.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/drthrowerskincare-portfolio-page.png" alt="Dr.Thrower Skin Care" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Dr.Thrower Skin Care</h3>
                    <p class="content">Buy the Skin &amp; Hair Care products online which are specifically created for ethnic skins with the help of drthrowerskincare.com We provided our best services in terms of programming, developing and customization to their online store. In short, we build code, where we customized all the things as per their need.
                    </p>
                    <span class="portfolio-category large-text">Healthcare</span>
                </div>
                <a href="https://drthrowerskincare.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "none"}}>
            <div class="portfolio-image-part">
                <a href="https://happilychicdesigns.patternbyetsy.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/happilychicdesigns-portfolio-page.png" alt="Happily Chic" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Happily Chic</h3>
                    <p class="content">Experience the elegant bridal designs with Happily Chic Designs. Using the Shopify platform, we have created a fully customized development website with a Pixel-perfect design. Whereas the Happily Chic Designs is designed by Nathalie Fleitas &amp; developed by Noxu Technologies. Whereas the Happily Chic website is designed by Nathalie Fleitas &amp; developed by Noxu Technologies.
                    </p>
                    <span class="portfolio-category large-text">Gift Shop</span>
                </div>
                <a href="https://happilychicdesigns.patternbyetsy.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "none"}}>
            <div class="portfolio-image-part">
                <a href="https://apps.shopify.com/korealy-dropship-korea-items" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/dropship-korea-portfolio-page.png" alt="Dropshipping App" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Korealy Dropshipping App</h3>
                    <p class="content">Blow away all your dull eCommerce procedures Through Dropshipping. Amazing Features: Easy to start. Low start-up cost. No inventory on hand. Wide selection of products. No need to sheep product yourself.
                    </p>
                    <span class="portfolio-category large-text">Dropshipping</span>
                </div>
                <a href="https://apps.shopify.com/korealy-dropship-korea-items" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "none"}}>
            <div class="portfolio-image-part">
                <a href="https://www.sunnilandpatio.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/sunnilandpatio-portfolio-page.png" alt="Sunniland Patio" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Sunniland Patio</h3>
                    <p class="content">Get a patio from SunniLand Patio that will seamlessly integrate your home into the garden and give your outdoor space a new look. We created a PDP custom variant with multiple options, and a custom video grid section was created. Noxu Technologies designed and developed the SUNNILAND PATIO website.
                    </p>
                    <span class="portfolio-category large-text">Furniture</span>
                </div>
                <a href="https://www.sunnilandpatio.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "none"}}>
            <div class="portfolio-image-part">
                <a href="https://www.houseoflilac.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/houseoflilac-portfolio-page.png" alt="House Of Lilac" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">House Of Lilac</h3>
                    <p class="content">House of Lilac's Thanksgiving flowers will brighten your holiday season. To match up with their requirement, we have created a pixel-perfect design on the website using the Shopify platform for the prestige theme as per client requirement. whereas the House of Lilac website is designed and developed by Noxu Technologies. Whereas the House Of Lilac website is designed by Nathalie Fleitas &amp; developed by Noxu Technologies.
                    </p>
                    <span class="portfolio-category large-text">Furniture</span>
                </div>
                <a href="https://www.houseoflilac.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "none"}}>
            <div class="portfolio-image-part">
                <a href="https://www.californiadesignden.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/cdd-portfolio-page.png" alt="California Design Den" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">California Design Den</h3>
                    <p class="content">Find and Purchase the world-class bed sheets online at fingertips with the California Design Den eCommerce store. We created a customized theme and design of every page as the client needed a professional look and different look of the store.
                    </p>
                    <span class="portfolio-category large-text">Sheets &amp; Pillow</span>
                </div>
                <a href="https://www.californiadesignden.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "none"}}>
            <div class="portfolio-image-part">
                <a href="https://angles90.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/angles90-portfolio-page.png" alt="Angles90" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Angles90</h3>
                    <p class="content">Get the world's first online dynamic training grip online! As the client stated that he needs to target many sports persons and athletes to viral this product so we suggested him to go with Shopify store and sell all the products there and do marketing of the same.
                    </p>
                    <span class="portfolio-category large-text">Grip Handles</span>
                </div>
                <a href="https://angles90.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "none"}}>
            <div class="portfolio-image-part">
                <a href="https://kaigourmet.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/kaigourmet-portfolio-page.png" alt="Kaigourmet" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Kaigourmet</h3>
                    <p class="content">Explore the fish-ibilities as KaiGourmet features the flavours of the ocean. We created a custom grid in the collection page, about us page, custom created as per the design, homepage created, custom featured collection section, PDP Wishlist page, membership app configuration, subscription app configuration, product info tags created, blog tags in the blog listing grid, blog detail related articles, contact us design page, custom megamenu as per their requirement. Whereas the KaiGourmet website is designed and developed by Noxu Technologies.
                    </p>
                    <span class="portfolio-category large-text">Food</span>
                </div>
                <a href="https://kaigourmet.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "none"}}>
            <div class="portfolio-image-part">
                <a href="https://www.urbanblends.net/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/urbanblends-portfolio-page.png" alt="Urban Blends" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Urban Blends</h3>
                    <p class="content">Taste an exciting range of natural, hand-crafted café blends from Urban Blends that you will absolutely love, all made with ethically produced, high-quality ingredients. We created a PDP custom variant with multiple options, and a custom grid section was created. Noxu Technologies designed and developed the Urban Blends website.
                    </p>
                    <span class="portfolio-category large-text">Beverage</span>
                </div>
                <a href="https://www.urbanblends.net/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "none"}}>
            <div class="portfolio-image-part">
                <a href="https://accessibility-assistant.Noxu Technologies.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/accessibility-assistant-portfolio-page.png" alt="Accessibility Assistant" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Accessibility Assistant</h3>
                    <p class="content">Get the ease of social responsibilities with Accessibility Assistant! Increase your brand value by implementing the social responsibilities at one. Check our ability for wonderful dedication for solving Complex solutions in our Project Case Studies. On-time attention to the disabled makes the ambiance revenue-driven almost.
                    </p>
                    <span class="portfolio-category large-text">Guides and Supports</span>
                </div>
                <a href="https://accessibility-assistant.Noxu Technologies.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "none"}}>
            <div class="portfolio-image-part">
                <a href="https://susannafalken.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/susannafalken-portfolio-page.png" alt="susanna falken" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Susanna Falken</h3>
                    <p class="content">Get stylish, skin-friendly, customized, and durable jewelry for your everyday life from Susaana Falken. To match up with their requirements, we have created a pixel-perfect design on the website using the Shopify platform for customizing the website as per the client's requirements. The Susaana Falken website is designed and developed by Noxu Technologies.
                    </p>
                    <span class="portfolio-category large-text">Jewellery</span>
                </div>
                <a href="https://susannafalken.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

        <div class="portfolio-single-main" style={{display: "none"}}>
            <div class="portfolio-image-part">
                <a href="https://www.caprilina.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/caprilina-portfolio-page.png" alt="Caprilina" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Caprilina</h3>
                    <p class="content">Make every moment memorable through Caprilina handmade pacifier clips for babies of all ages. Using the Shopify platform, we have created a pixel-perfect design on the website as per client requirements. Whereas the Caprilina website is designed by Nathalie Fleitas &amp; developed by Noxu Technologies.
                    </p>
                    <span class="portfolio-category large-text">Baby Care</span>
                </div>
                <a href="https://www.caprilina.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

         <div class="portfolio-single-main">
            <div class="portfolio-image-part">
                <a href="https://carmaspeed.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/carmaspeed.png" alt="DryMaster" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Carmaspeed</h3>
                    <p class="content">carmaspeed Systems, an expert in air duct and dryer vent cleaning, can provide you with a professional carpet. We created a PDP custom variant with multiple options, and anPDP added tab section was created. Noxu Technologies designed and developed the carmaspeed website.
                    </p>
                    {/* <span class="portfolio-category large-text">air duct</span> */}
                </div>
                <a href="https://carmaspeed.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                    
                </a>
            </div>
        </div> 

        <div class="portfolio-single-main" style={{display: "none"}}>
            <div class="portfolio-image-part">
                <a href="https://alexandra-gioia.myshopify.com/" class="link" target="_blank">
                    <img loading="lazy" src="assets/images/alexandra-gioia-portfolio-page.png" alt="Alexandra Gioia" width="770px" height="599px"/>
                </a>
            </div>
            <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                    <h3 class="portfolio-name">Alexandra Gioia</h3>
                    <p class="content">Hold your loved ones closer or share your love with them with a beautiful set of jewelry from Alexandra-Gioia. To match up with their requirement, we have created a pixel-perfect design on the website using the Shopify platform for the prestige theme as per client requirement. Whereas the Alexandra-Gioia website is designed &amp; developed by Noxu Technologies.
                    </p>
                    <span class="portfolio-category large-text">Jewelry</span>
                </div>
                <a href="https://alexandra-gioia.myshopify.com/" class="portfolio-link-button" aria-label="porfolio link" target="_blank">
                    <svg class="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                    
                </a>
            </div>
        </div>

       

    </div>
</div>
<LetDiscuss />
        </div>
    )
}

export default Portfolio
