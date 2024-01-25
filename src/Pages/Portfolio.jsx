import React, { useEffect, useState } from 'react';
import LetDiscuss from '../Components/LetDiscuss'

const itemsPerPage = 4; // Number of projects per page


const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [error, setError] = useState(null);
    const baseurl = 'http://localhost:1337'
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`${baseurl}/api/portfolios?populate=projectimage`);
                const data = await response.json();

                setPortfolio(data.data);

            } catch (error) {
                setError('Error fetching brand data. Please try again later.');
            }
        }
        fetchdata();
    }, []);

    const indexOfLastProject = currentPage * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;
    const currentProjects = portfolio.slice(indexOfFirstProject, indexOfLastProject);

    // Function to handle pagination click
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>


            <div class="breadcrumb-container dark-breadcrumb" style={{ marginTop: '160px' }}>
                <div class="container">
                    <ul class="breadcrumb">
                        <li><a href="#" class="medium-text">Home</a></li>
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
                    {currentProjects.map((project) => (
                        <div key={project.id} className="portfolio-single-main" style={{ display: 'flex' }}>
                            {/* Render the left image */}
                            <div className="portfolio-image-part">
                                <a href={project.attributes.projecturl} className="link" target="_blank">
                                    <img
                                        loading="lazy"
                                        src={`${baseurl}${project.attributes.projectimage.data.attributes.url}`}
                                        alt={project.attributes.projectimage.data.attributes.name}
                                        width="770px"
                                        height="599px"
                                    />
                                </a>
                            </div>

                            {/* Render project details */}
                            <div className="portfolio-detail-part">
                                <div className="portfolio-detail-inner">
                                    <h3 className="portfolio-name">{project.attributes.projecttitle}</h3>
                                    <p className="content">{project.attributes.projectdescription}</p>
                                    <span className="portfolio-category large-text">{project.attributes.projectcategory}</span>
                                </div>
                                <a href={project.attributes.projecturl} className="portfolio-link-button" aria-label="portfolio link" target="_blank">
                                    <svg className="arrow-icon-cross-dark" width="34" height="33" viewBox="0 0 34 33" fill="none">
                                        <path d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M5.36328 26.291L26.3728 8.37767" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                    <div className="pagination container">
                        <div id="pageNumbers" className="page-numbers">
                            {Array.from({ length: Math.ceil(portfolio.length / itemsPerPage) }, (_, i) => (
                                <span
                                    key={i + 1}
                                    className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
                                    onClick={() => handlePageClick(i + 1)}
                                >
                                    {i + 1}
                                </span>
                            ))}
                        </div>
                    </div>
                    <LetDiscuss />

                </div>
            </div>

        </div>
    )
}

export default Portfolio
