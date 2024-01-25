import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
// ... (import statements)

const BrandsLogoSlider = () => {
  const [brandsData, setBrandsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseurl = 'http://localhost:1337';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/brand-logos?populate=brandimage');
        const data = await response.json();

        // Check if data has the expected structure
        if (data && data.data && data.data.length > 0 && data.data[0].attributes.brandimage) {
          setBrandsData(data.data); // Update to include the array directly
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        setError('');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const brandSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
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
    <div>
    {loading && (
      <div className="brand-list">
        <p>Loading...</p>
      </div>
    )}

    {error && (
      <div className="brand-list">
        <p>{error}</p>
      </div>
    )}

    {!loading && !error && (
      <Slider {...brandSettings}>
        {brandsData.map((brand, index) => (
          <div key={index} className="brand-list">
            {brand.attributes.brandimage && brand.attributes.brandimage.data[0] && (
              <img
                className="brand-image"
                loading="lazy"
                width="234px"
                height="64px"
                src={baseurl + brand.attributes.brandimage.data[0].attributes.url}
                alt={brand.attributes.brandname}
              />
            )}
          </div>
        ))}
      </Slider>
    )}
  </div>
  );
};

export default BrandsLogoSlider;
