import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';

const CaseStudySlider = () => {
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

console.log(casestudy);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="case_study" className="case-study section-spacing section-inner-spacing lazy-background" data-src="images/case-study-back.png">
      <div className="container">
        <div className="section-head-part">
          <h2 className="section-head-title">Case Study</h2>
          <p className="section-head-content">NOXU Technologies is the best Shopify development agency with 15+ years of experience in the industry. Our web developers have empowered numerous businesses to overcome their issues using strong technical backgrounds. Here, we have enlisted some of the remarkable case studies of our valued client.</p>
        </div>

        <Slider {...settings} className="case-study-slider">
         
          {casestudy.filter((val, index) => index < 2).map((val, index)=>(
          <div className="case-study-list">
                    <div className="row align-items-center">
                
                    <div className="col-md-6" key={index}>
                      <div className="case-study-image">
                        <img width="575px" height="420px" src={baseurl+val.attributes.image1.data.attributes.url} alt="" loading="lazy" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="case-study-content">
                        <h3 className="title">{val.attributes.title}</h3>
                        <div className="Requirements h5">Requirements:</div>
                        <p className="text">{val.attributes.description1}</p>
                          <NavLink to="/casestudies" className="button">View More</NavLink>
                      </div>
                    </div>
                  </div>
            
          </div>
                    ))}
        </Slider>
      </div>
    </section>
  );
};

export default CaseStudySlider;
