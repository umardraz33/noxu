import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
