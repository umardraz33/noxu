import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { NavLink, Outlet } from 'react-router-dom'
import Freequote from '../Components/Freequote'
const Layout = () => {
    const [modal, setModal] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerPoint = window.innerHeight; // Adjust this value based on your needs

    if (scrollY > triggerPoint) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
    const closemodal = () => {
        setModal(false)
    }
    return (
        <>
            <Navbar />
            {
                modal && <Freequote colsemodal={closemodal} />
            }
            <div class="stickey-button-all-page left-stickey">
                <div class="button-content form-model-button" onClick={() => setModal(true)}>
                    <span class="button-name"><b>Estimate</b></span>
                </div>
            </div>

            <div class="stickey-button-all-page right-stickey">
                <div class="button-content">
                    <NavLink to='/ecommerce-solution'>
                        <p class="button-name"><img src="/assets/images/shopify-expert-icon.png" alt="Shopify Expert" loading="lazy" width="20px" height="17px" class="stickey-button-icon" /> <b>eCommerce
                            Solution</b></p>
                    </NavLink>
                </div>
            </div>
            <Outlet />

            <div className={`back-to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
      <svg width="15" height="15" viewBox="0 0 15 9" fill="none">
        <path
          d="M13.8945 7.27344L7.89453 1.27344L1.89453 7.27344"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>  


            <Footer />
        </>
    )
}

export default Layout
