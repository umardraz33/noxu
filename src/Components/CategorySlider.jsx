import React from 'react'
import Slider from 'react-slick';

const CategorySlider = () => {
    const industriesData = [
        // Add your industry data here
        { name: 'Fashion', imageSrc: 'assets/images/image%2013.png', alt: 'fashion' },
        { name: 'Cosmetic', imageSrc: 'assets/images/image%2014.png', alt: 'Cosmetic' },
        { name: 'Jewellery', imageSrc: 'assets/images/image%2023.png', alt: 'Jewellery' },
        { name: 'Retail & eCommerce', imageSrc: 'assets/images/image%2015.png', alt: 'Retail & eCommerce' },
        { name: 'Automotive', imageSrc: 'assets/images/Automotive.png', alt: 'Automotive' },
        { name: 'Education', imageSrc: 'assets/images/Education.png', alt: 'Education' },
        { name: 'Healthcare', imageSrc: 'assets/images/Healthcare.png', alt: 'Healthcare' },
        { name: 'Manufacturing', imageSrc: 'assets/images/Manufacturing.png', alt: 'Manufacturing' },
        // Add other industries similarly
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        // speed: 500,
        arrows: false,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
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
  )
}

export default CategorySlider
