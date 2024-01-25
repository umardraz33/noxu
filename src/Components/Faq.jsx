import React from 'react'
import { useState } from 'react';
const Faq = () => {
    const faqData = [
        {
          question: 'What are the different ways to customize Shopify Plus checkout?',
          answer: 'You can customize the Shopify checkout look and feel using the checkout editor, Shopify Plus scripts, and checkout extensibility. Reach out to us for personalized checkout that matches your brand identity.',
        },
        {
          question: 'What are the significant benefits of Shopify Plus checkout customization?',
          answer: 'Customizing Shopify Plus checkout offers numerous benefits like a personalized checkout experience, tracking conversions, displaying products based on customers\' location, loyal customer engagement, and improved conversions.',
        },
        {
          question: 'Can you create Shopify Plus payment scripts?',
          answer: 'Shopify Plus developers at NOXU Technologies are well-versed in creating all 3 types of scripts, including 1. line item Scripts, 2. Shipping Scripts, and 3. Payment scripts.',
        },
        {
          question: 'Can you customize customers\' account pages and order statuses?',
          answer: 'Yes, our team of Shopify Plus experts can help you customize order status and customer account pages using checkout extensibility.',
        },
        {
          question: 'Can you customize Shopify Plus checkout?',
          answer: 'Absolutely, yes; with 8+ years of extensive expertise in core Shopify development, we can customize Shopify Plus checkout that exceeds your requirements and matches your brand identity.',
        },
      ];
    
      const [openAccordion, setOpenAccordion] = useState(null);
    
      const handleAccordionClick = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
      };
  return (
    <>
       <section id="faq_section" class="faq-section section-spacing">
        <div class="container">
            <div class="section-head-part">
                <h2 class="section-head-title">Frequently Asked Questions</h2>
            </div>

            <div class="accordion accordion-part-inner">
            {faqData.map((faq, index) => (
            <div className="single-accordion" key={index}>
              <div className="accordion-header">
                <button
                  className={`accordion-title h5 ${openAccordion === index ? 'active' : ''}`}
                  type="button"
                  onClick={() => handleAccordionClick(index)}
                >
                  {faq.question}
                </button>
              </div>
              <div className={`accordion-collapse ${openAccordion === index ? 'open' : ''}`}>
              {openAccordion === index && (
                  <div className="accordion-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
            </div>


        </div>
    </section>
    </>
  )
}

export default Faq
