import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './Pages/Portfolio.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Homepage from './Pages/Homepage.jsx';
import Contact from './Pages/Contact.jsx';
import CaseStudy from './Pages/CaseStudy.jsx';
import ShopifyStoreSetup from './Pages/ShopifyStoreSetup.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Layout from './Pages/Layout.jsx';
import HireShopifyPlusDevelopers from './Pages/HireShopifyPlusDevelopers.jsx';
import HireShopifyDeveloper from './Pages/HireShopifyDeveloper.jsx';
import HireShopifyAppDevelope from './Pages/HireShopifyAppDevelope.jsx';
import HireShopifyMobileAppDevelopers from './Pages/HireShopifyMobileAppDevelopers.jsx';
import HireHeadlessCommerceDeveloper from './Pages/HireHeadlessCommerceDeveloper.jsx';
import ShopifyDesigner from './Pages/ShopifyDesigner.jsx';
import SeoExpert from './Pages/SeoExpert.jsx';
import ShopifyConsultant from './Pages/ShopifyConsultant.jsx';
import EcommerceSolution from './Pages/EcommerceSolution.jsx';
import HireUs from './Pages/HireUs.jsx';
import Shopifymigration from './Pages/Shopifymigration.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx';
import ShopifyPlus from './Pages/ShopifyPlus.jsx';
import Footer from './Components/Footer.jsx';
import MagentoToShopify from './Pages/MagentoToShopify.jsx';
import OpencartToShopify from './Pages/OpencartToShopify.jsx';
import WoocommerceToShopify from './Pages/WoocommerceToShopify.jsx';
import WixToShopify from './Pages/WixToShopify.jsx';
import ShopifyCustomTheme from './Pages/ShopifyCustomTheme.jsx';
import ShopifyCustomDesign from './Pages/ShopifyCustomDesign.jsx';
import ShopifyMaintenance from './Pages/ShopifyMaintenance.jsx';
import ShopifyCustomizations from './Pages/ShopifyCustomizations.jsx';
import ShopifyCheckoutCustomizations from './Pages/ShopifyCheckoutCustomizations.jsx';
import ShopifyCustomThemeSetup from './Pages/ShopifyCustomThemeSetup.jsx';
import Shopifymarketplace from './Pages/Shopifymarketplace.jsx';
import Shopifymultivendor from './Pages/Shopifymultivendor.jsx';
import Shopifyintegration from './Pages/Shopifyintegration.jsx';
import Services from './Pages/Services.jsx';
import Shopifyappdevelopment from './Pages/Shopifyappdevelopment.jsx';
import Shopifypublicappdevelopment from './Pages/Shopifypublicappdevelopment.jsx';
import Shopifyprivateappdevelopment from './Pages/Shopifyprivateappdevelopment.jsx';
import Paymentgateway from './Pages/Paymentgateway.jsx';
import Shopifymobileappdevelopment from './Pages/Shopifymobileappdevelopment.jsx';
import Shopifyonpageseo from './Pages/Shopifyonpageseo.jsx';
import Shopifyoffpageseo from './Pages/Shopifyoffpageseo.jsx';
import Analytics from './Pages/Analytics.jsx';
import Shopifywebmastersetup from './Pages/Shopifywebmastersetup.jsx';
import Shopifypagespeedoptimization from './Pages/Shopifypagespeedoptimization.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "casestudies",
        element: <CaseStudy />,
      },
      {
        path: "shopify-store-setup",
        element: <ShopifyStoreSetup />,
      },
      {
        path: "hire-shopify-plus-developers",
        element: <HireShopifyPlusDevelopers />,
      },
      {
        path: "hire-shopify-developer",
        element: <HireShopifyDeveloper />,
      },
      {
        path: "hire-shopify-app-developer",
        element: <HireShopifyAppDevelope />,
      },
      {
        path: "hire-shopify-mobile-app-developers",
        element: <HireShopifyMobileAppDevelopers />,
      },
      {
        path: "hire-headless-commerce-developer",
        element: <HireHeadlessCommerceDeveloper />,
      },
      {
        path: "hire-dedicated-shopify-designer",
        element: <ShopifyDesigner />,
      },
      {
        path: "hire-shopify-seo-expert",
        element: <SeoExpert />,
      },
      {
        path: "hire-shopify-consultant",
        element: <ShopifyConsultant />,
      },
      {
        path: "ecommerce-solution",
        element: <EcommerceSolution />,
      },
      {
        path: "hire-us",
        element: <HireUs />,
      },
      {
        path: "shopify-migration",
        element: <Shopifymigration />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "shopify-plus-store-development",
        element: <ShopifyPlus />,
      },
      {
        path: "magento-to-shopify",
        element: <MagentoToShopify />,
      },
      {
        path: "opencart-to-shopify",
        element: <OpencartToShopify />,
      },
      {
        path: "woocommerce-to-shopify",
        element: <WoocommerceToShopify />,
      },
      {
        path: "wix-to-shopify",
        element: <WixToShopify />,
      },
      {
        path: "shopify-plus-store-setup-with-custom-theme",
        element: <ShopifyCustomTheme />,
      },
      {
        path: "shopify-plus-store-setup-with-custom-design",
        element: <ShopifyCustomDesign />,
      },
      {
        path: "shopify-plus-support-and-maintenance",
      element: <ShopifyMaintenance />,
      },
      {
        path: "shopify-plus-customizations",
      element: <ShopifyCustomizations />,
      },
      {
        path: "shopify-plus-checkout-customizations",
      element: <ShopifyCheckoutCustomizations />,
      },
      {
        path: "shopify-custom-theme-setup",
      element: <ShopifyCustomThemeSetup />,
      },
      {
        path: "shopify-marketplace",
      element: <Shopifymarketplace />,
      },
      {
        path: "shopify-multivendor",
      element: <Shopifymultivendor />,
      },
      {
        path: "shopify-integration",
      element: <Shopifyintegration />,
      },
      {
        path: "services",
      element: <Services />,
      },
      {
        path: "shopify-app-development",
      element: <Shopifyappdevelopment />,
      },
      {
        path: "shopify-public-app-development",
      element: <Shopifypublicappdevelopment />,
      },
      {
        path: "shopify-private-app-development",
      element: <Shopifyprivateappdevelopment />,
      },
      {
        path: "shopify-payment-gateway-extension-development",
      element: <Paymentgateway />,
      },
      {
        path: "shopify-mobile-app-development",
      element: <Shopifymobileappdevelopment />,
      },
      {
        path: "shopify-on-page-seo",
      element: <Shopifyonpageseo />,
      },
      {
        path: "shopify-off-page-seo",
      element: <Shopifyoffpageseo />,
      },
      {
        path: "shopify-google-analytics-setup",
      element: <Analytics />,
      },
      {
        path: "shopify-webmaster-setup",
      element: <Shopifywebmastersetup />,
      },
      {
        path: "shopify-page-speed-optimization",
      element: <Shopifypagespeedoptimization />,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
