import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BrandsLogoSlider = () => {
  const brandSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...brandSettings}>
      <div>
        <img
          className="brand-image"
          loading="lazy"
          width="234px"
          height="64px"
          src="assets/images/1-recovapro.png"
          alt="brand logo"
        />
      </div>
      <div>
        <img
          className="brand-image"
          loading="lazy"
          width="234px"
          height="64px"
          src="assets/images/2-Macally_Logo_redo_1.png"
          alt="brand logo"
        />
      </div>
      <div>
        <img
          className="brand-image"
          loading="lazy"
          width="234px"
          height="64px"
          src="assets/images/3-logo.png"
          alt="brand logo"
        />
      </div>
      <div>
        <img
          className="brand-image"
          loading="lazy"
          width="234px"
          height="64px"
          src="assets/images/4-Noon Logo.png"
          alt="brand logo"
        />
      </div>
      <div>
        <img
          className="brand-image"
          loading="lazy"
          width="234px"
          height="64px"
          src="assets/images/5-Skora_Logo_-_Registered_TM_Black.png"
          alt="brand logo"
        />
      </div>
      <div>
        <img
          className="brand-image"
          loading="lazy"
          width="234px"
          height="64px"
          src="assets/images/6-logo_1.png"
          alt="brand logo"
        />
      </div>
      <div>
        <img
          className="brand-image"
          loading="lazy"
          width="234px"
          height="64px"
          src="assets/images/7-Logo_100_compostable_vectorizado.png"
          alt="brand logo"
        />
      </div>
    </Slider>
  );
};

export default BrandsLogoSlider;
