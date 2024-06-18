import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import Freequote from '../Components/Freequote';

const Layout = () => {
  const [modal, setModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isShow, setIsShow] = useState(false);

  // Show the popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 3000);

    return () => {
      clearTimeout(timer); // Cleanup the timer on component unmount
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  const handleHide = () => {
    setIsShow(false);
  };

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
    setModal(false);
  };

  const containerStyle = {
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '0px',
    textAlign: 'center',
    justifyContent: "center",
    zIndex: 111111111111,
    display: isShow ? 'flex' : 'none', // Show or hide based on state
    width: '70%', // Default width for desktop view
    maxWidth: '450px', // Maximum width for desktop view
    margin: '0 auto', // Center horizontally
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '10px 20px',
    backgroundColor: '#E94FCA',
    borderRadius: '25px',
    marginRight: '10px',
  };

  return (
    <>
      <Navbar />
      {modal && <Freequote closeModal={closemodal} />}

      <div className="stickey-button-all-page left-stickey" onClick={() => setModal(true)}>
        <div className="button-content form-model-button">
          <span className="button-name"><b>Estimate</b></span>
        </div>
      </div>

      <div className="stickey-button-all-page right-stickey">
        <div className="button-content">
          <NavLink to='/ecommerce-solution'>
            <p className="button-name">
              <img src="/assets/images/shopify-expert-icon.png" alt="Shopify Expert" loading="lazy" width="20px" height="17px" className="stickey-button-icon" />
              <b>eCommerce Solution</b>
            </p>
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

      <div style={containerStyle}>
        <a
          href='https://shopify.pxf.io/q4yEjq'
          target='_blank'
          className="button submit-button"
          type="submit"
          aria-label="button"
          id="get_free_quote_popup"
          style={linkStyle}
        >
          Enjoy 33 days of Shopify for $1, Start Free Trial
        </a>
        <span
          style={{ padding: '12px', background: 'black', color: 'white', cursor: 'pointer', display:"flex", alignItems:"center" }}
          onClick={handleHide}
        >
          X
        </span>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
