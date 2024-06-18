import React from 'react'
import { useState } from 'react';
import Freequote from './Freequote';
import Freelancing from '../Components/Freelancing';
import Faq from './Faq';
import LetDiscuss from './LetDiscuss';

const Shopifyplans = () => {
    const [Customization, setCustomization] = useState(false);
    const [store, setStore] = useState(true);
    const [theme, setTheme] = useState(false);
    const [Freequotes, setFreequote] = useState(false);

   

    const openform = () => {
        setFreequote(true)
    }
    const closeform = () => {
        setFreequote(false)
    }

    return (
        <div>
            <section class="shopify-development-plan section-spacing">
                <div class="container">
                    <div class="table-overflow">
                        <div class="table-main">
                            <table cellspacing="0" cellpadding="0" class="main-table">
                                <thead>
                                    <tr>
                                        <th><h2 class="h5 title">Plan for  shopify store development</h2> </th>
                                        <th><h2 class="h6 plan-name">Standard <br />Plan</h2> </th>
                                        <th><h2 class="h6 plan-name">Premium <br />Plan</h2> </th>
                                    </tr>
                                </thead>
                                <tbody class="active">
                                    <tr>
                                        <td><h3 class="h6">Estimated Cost</h3></td>
                                        <td><h3 class="h6 price">$3000</h3> <sup>USD</sup></td>
                                        <td><h3 class="h6 price">$4000</h3> <sup>USD</sup></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="table-main">
                            <table cellspacing="0" cellpadding="0" class="store-setup-plan inner-plan-setup">
                                <thead class={store ? 'active' : ''}>
                                    <tr>
                                        <th>
                                            <div class="d-flex align-items-center">
                                                <div class="toggle-button" onClick={() => setStore(!store)}>
                                                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none">
                                                        <g clip-path="url(#clip0_1216_5990)">
                                                            <path d="M15 28.1934C21.9036 28.1934 27.5 22.5969 27.5 15.6934C27.5 8.7898 21.9036 3.19336 15 3.19336C8.09644 3.19336 2.5 8.7898 2.5 15.6934C2.5 22.5969 8.09644 28.1934 15 28.1934Z" fill="#20084D" stroke="#20084D" stroke-width="4" stroke-linejoin="round"></path>
                                                            <path d="M20.625 13.8184L15 19.4434L9.375 13.8184" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1216_5990">
                                                                <rect width="30" height="30" fill="white" transform="translate(0 0.693359)"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                </div>
                                                <h4 class="h6 title">Store  Setup</h4>
                                            </div>
                                        </th>
                                        <th><a class="button white-button form-model-button" data-toggle="modal" data-target="#form" onClick={openform}>Inquire Now</a></th>
                                        <th><a class="button white-button form-model-button" data-toggle="modal" data-target="#form" onClick={openform}>Inquire Now</a></th>
                                    </tr>
                                </thead>
                                {store && (
                                    <tbody class="active">
                                        <tr>
                                            <td>Domain Binding</td>
                                            <td>
                                                <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Store Configuration</td>
                                            <td>
                                                <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Payment Gateway Integration (Provided by Shopify)</td>
                                            <td>
                                                <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Provider Integration (Through Shopify App)</td>
                                            <td>
                                                <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Custom Payment Gateway Integration (By Developing Custom Shopify App)</td>
                                            <td>
                                                <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Custom Shipping Provider Integration (By Developing Custom Shopify App)</td>
                                            <td>
                                                <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>)}

                            </table>
                        </div>

                        <div class="table-main">
                            <table cellspacing="0" cellpadding="0" class="theme-setup-plan inner-plan-setup">
                                <thead class={theme ? 'active' : ''}>
                                    <tr>
                                        <th>
                                            <div class="d-flex align-items-center">
                                                <div class="toggle-button" onClick={() => setTheme(!theme)}>
                                                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none">
                                                        <g clip-path="url(#clip0_1216_5990)">
                                                            <path d="M15 28.1934C21.9036 28.1934 27.5 22.5969 27.5 15.6934C27.5 8.7898 21.9036 3.19336 15 3.19336C8.09644 3.19336 2.5 8.7898 2.5 15.6934C2.5 22.5969 8.09644 28.1934 15 28.1934Z" fill="#20084D" stroke="#20084D" stroke-width="4" stroke-linejoin="round"></path>
                                                            <path d="M20.625 13.8184L15 19.4434L9.375 13.8184" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1216_5990">
                                                                <rect width="30" height="30" fill="white" transform="translate(0 0.693359)"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <h4 class="h6 title">Theme Setup</h4>
                                            </div>
                                        </th>
                                        <th><a class="button white-button form-model-button" data-toggle="modal" data-target="#form" onClick={openform}>Inquire Now</a></th>
                                        <th>
                                            <a class="button white-button form-model-button" data-toggle="modal" data-target="#form" onClick={openform}>Inquire Now</a>
                                        </th>
                                    </tr>
                                </thead>
                                {theme && (
                                    <tbody class="active">
                                        <tr>
                                            <td>Setup Any Paid/Free theme</td>
                                            <td>
                                                <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                                </svg>
                                            </td>
                                            <td>
                                                <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}

                            </table>
                        </div>

                        <div class="table-main">
                            <table cellspacing="0" cellpadding="0" class="theme-setup-plan inner-plan-setup">
                                <thead class={Customization ? 'active' : ''}>
                                    <tr>
                                        <th>
                                            <div class="d-flex align-items-center">
                                                <div class="toggle-button" onClick={() => setCustomization(!Customization)}>
                                                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none">
                                                        <g clip-path="url(#clip0_1216_5990)">
                                                            <path d="M15 28.1934C21.9036 28.1934 27.5 22.5969 27.5 15.6934C27.5 8.7898 21.9036 3.19336 15 3.19336C8.09644 3.19336 2.5 8.7898 2.5 15.6934C2.5 22.5969 8.09644 28.1934 15 28.1934Z" fill="#20084D" stroke="#20084D" stroke-width="4" stroke-linejoin="round"></path>
                                                            <path d="M20.625 13.8184L15 19.4434L9.375 13.8184" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1216_5990">
                                                                <rect width="30" height="30" fill="white" transform="translate(0 0.693359)"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <h4 class="title h6">Customization</h4>
                                            </div>
                                        </th>
                                        <th><a class="button white-button form-model-button" data-toggle="modal" data-target="#form" onClick={openform}>Inquire Now</a></th>
                                        <th>
                                            <a class="button white-button form-model-button" data-toggle="modal" data-target="#form" onClick={openform}>Inquire Now</a>
                                        </th>
                                    </tr>
                                </thead>
                                {Customization && (<tbody class="active">
                                    <tr>
                                        <td colspan="4"><h6 class="title">Home</h6></td>
                                    </tr>
                                    <tr>
                                        <td>Header</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Footer</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mega Menu</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Create sections as per the client’s requirements</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Newsletter form as per app/theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom newsletter popup form</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td colspan="4"><h6 class="title">Collection List Page</h6></td>
                                    </tr>
                                    <tr>
                                        <td>All Collection grid with Image, Name</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Collection list page as per the client’s requirements</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td colspan="4"><h6 class="title">Collection Page</h6></td>
                                    </tr>
                                    <tr>
                                        <td>Image</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Title</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Filters as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Filters by using third party app</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Filters</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sorting options as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom sorting options</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Grid options as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom grid options</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Product image</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Product title</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Product reviews as per theme or third party app</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Quickview as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Quickview</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td colspan="4"><h6 class="title">Product Page</h6></td>
                                    </tr>
                                    <tr>
                                        <td><span>Customisation as per theme</span></td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Customisation as per the Client’s Design</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Fields</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Meta Fields</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bulk product uploading CSV sample</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Related products</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Products bundles</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Products reviews</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Size chart</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Multiple custom sections</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td colspan="4"><h6 class="title">Search</h6></td>
                                    </tr>
                                    <tr>
                                        <td>Search functionality as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Search functionality using third party app</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Search result page as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Search result page using third party app</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td colspan="4"><h6 class="title">Other Pages</h6></td>
                                    </tr>
                                    <tr>
                                        <td>Mini Cart as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom mini cart drawer</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>MinCart as per themei</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom cart page</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Login as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Social Login</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Signup as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Social Signup</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Login/Signup with OTP using third party app</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Forgot Password as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Blogs as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Blog Details as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>My Account as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Orders as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Order Details as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>My Addresses as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Add New address as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Contact Us as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>FAQ as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Help as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>About Us as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Privacy Policy as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Terms and Conditions as per theme</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Multi Language</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Multi Currency</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Store Cloning for B2B</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Order returns and Refunds</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Any other customisation outside of the theme</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Chat widget integration</td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td colspan="4"><h6 class="title">Fully custom design with PSD, Figma or XD</h6></td>
                                    </tr>
                                    <tr>
                                        <td>Features same as above</td>
                                        <td>
                                            <svg class="close-icon-table" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4654 23.0518L2.02539 2.61182M22.4654 2.61182L2.02539 23.0518" stroke="black" stroke-width="3.32388" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg class="correct-icon-table" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.1289 4.36321L30.4825 4.00966L30.1289 3.65611L27.9132 1.44039L27.5598 1.08701L27.2063 1.44022L10.918 17.7131L4.84422 11.6542L4.49067 11.3016L4.13755 11.6547L1.92184 13.8704L1.56828 14.2239L1.92184 14.5775L10.5647 23.2204L10.9182 23.5739L11.2718 23.2204L30.1289 4.36321Z" fill="#E94FCA" stroke="#E94FCA"></path>
                                            </svg>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td><a class="button form-model-button" data-toggle="modal" data-target="#form">Inquire Now</a></td>
                                        <td><a class="button form-model-button" data-toggle="modal" data-target="#form">Inquire Now</a></td>
                                    </tr>
                                </tbody>)}

                            </table>
                        </div>
                    </div>

                </div>
            </section>


            <section id="explore-amazing" class="explore-amazing section-spacing">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 align-items-center">
                            <div class="explore-amazing-left section-head-part">
                                <h2 class="h2 explore-amazing-heading section-head-title">Benefits of Custom Theme Shopify Store Development</h2>
                                <p class="explore-amazing-heading-sub-desc section-head-content">Are you planning to build an aesthetically pleasing Shopify design for your online store? Shopify store setup with a premium theme enables you to create aesthetically pleasing designs that attract your targeted niche and fulfill business requirements. Choosing a Shopify store setup with a custom theme can improve brand identity, enhance website speed and performance, and provide a seamless user experience.</p>
                                <p class="explore-amazing-heading-sub-desc section-head-content">Here are some of the most significant benefits of a Shopify store setup with premium theme.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="explore-amazing-right">
                                <div class="explore-amazing-box">
                                    <div class="explore-amazing-icon-main">
                                        <img loading="lazy" src="assets/images/user-experience-white.png" width="40px" height="40px" alt="Unique Custom-Built User Experience" />
                                    </div>
                                    <div class="explore-amazing-content">
                                        <h3 class="h5 explore-amazing-title">Unique Custom-Built User Experience</h3>
                                        <p class="explore-amazing-desc">UI/UX designs can kill or cure your Shopify store's success. Shopify store development with a custom theme allows you to create cutting-edge user experiences tailored to your brand identity. It enables you to create mobile-friendly, fully responsive, and unique design themes that deliver original custom-built user experiences.</p>
                                    </div>
                                </div>
                                <div class="explore-amazing-box">
                                    <div class="explore-amazing-icon-main">
                                        <img loading="lazy" src="assets/images/good-feedback.png" width="40px" height="40px" alt="Enhanced Shopify Store Performance" />
                                    </div>
                                    <div class="explore-amazing-content">
                                        <h3 class="h5 explore-amazing-title">Enhanced Shopify Store Performance</h3>
                                        <p class="explore-amazing-desc">Shopify store development with a custom theme eliminates premade Shopify theme's problem of unnecessary homage and unusable functionality loading. Custom Shopify theme for store development will allow you to create an attractive and fully responsive design. It ensures faster page loading speed and enhanced store performance.</p>
                                    </div>
                                </div>
                                <div class="explore-amazing-box">
                                    <div class="explore-amazing-icon-main">
                                        <img loading="lazy" src="assets/images/conversion-rate.png" width="40px" height="40px" alt="Accelerates Customer Conversion Rates &amp; Retention Ration" />
                                    </div>
                                    <div class="explore-amazing-content">
                                        <h3 class="h5 explore-amazing-title">Accelerates Customer Conversion Rates &amp; Retention Ration</h3>
                                        <p class="explore-amazing-desc">Shopify store development with a custom theme is the most preferred solution in recent times as it offers absolutely user-friendly and interactive design. It helps to attract more visitors and makes them buy products or services from your Shopify store. Which ultimately boosts customer conversion rates and improves the retention ratio.</p>
                                    </div>
                                </div>
                                <div class="explore-amazing-box">
                                    <div class="explore-amazing-icon-main">
                                        <img loading="lazy" src="assets/images/marketplace-3.png" width="40px" height="40px" alt="Optimizes the Brand Identity" />
                                    </div>
                                    <div class="explore-amazing-content">
                                        <h3 class="h5 explore-amazing-title">Optimizes the Brand Identity</h3>
                                        <p class="explore-amazing-desc">Shopify store setup with a custom theme allows store owners to create unique and original designs according to their ideal customers and business requirements. Shopify store setup with premium theme is the best way to enhance brand identity and enables you to stand out firmly in this competitive digital world. It helps you to get a more loyal customer base and sales growth.</p>
                                    </div>
                                </div>
                                <div class="explore-amazing-box">
                                    <div class="explore-amazing-icon-main">
                                        <img loading="lazy" src="assets/images/cost-effective-white.png" width="40px" height="40px" alt="Cost-Effective" />
                                    </div>
                                    <div class="explore-amazing-content">
                                        <h3 class="h5 explore-amazing-title">Cost-Effective</h3>
                                        <p class="explore-amazing-desc">Premade Shopify themes need to hire Shopify developers and buy additional plugins for customization, resulting in additional ongoing costs. Shopify store setup with premium theme minimizes the requirement of third-party apps, hiring Shopify
                                            experts, and plugins. Initially, upfront costs are high, but for long-run goals, a Shopify store setup with premium theme is very cost-effective. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-list-section section-spacing">
                <div class="container">
                    <div class="section-head-part">
                        <h2 class="section-head-title">Top-Notch Shopify Store Setup with Premium Theme Services We Offer</h2>
                    </div>

                    <div class="row services-main-wrap services-list row-mb-minus justify-content-center">
                        <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="single-services-box">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon normal-image" width="82px" height="82px" src="assets/images/design-layout-adjust.png" alt="Design Layout Adjustments" />
                                    <img loading="lazy" class="icon hover-image" width="82px" height="82px" src="assets/images/design-layout-adjust-hover.png" alt="Design Layout Adjustments" />
                                </div>
                                <div class="services-content">
                                    <h3 class="title h4">Design Layout Adjustments</h3>
                                    <p class="text">As a Shopify store setup with premium theme services provider, Noxu Technologies specialize in adjusting the most influential part of the online store design layout. We offer freedom to sellers to adjust design layout to deliver an intuitive user experience and build a strong brand identity. </p>
                                </div>

                            </div>
                        </div>
                        <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="single-services-box">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon normal-image" width="82px" height="82px" src="assets/images/typography-adjust.png" alt="Typography Adjustments" />
                                    <img loading="lazy" class="icon hover-image" width="82px" height="82px" src="assets/images/typography-adjust-hover.png" alt="Typography Adjustments" />
                                </div>
                                <div class="services-content">
                                    <h3 class="title h4">Typography Adjustments</h3>
                                    <p class="text">A team of Shopify experts at Noxu Technologies uses their strong insight into the latest eCommerce market and extensive expertise to choose appropriate font sizes and styles. This typography adjustment helps to tone the design, create emphasis, and improve readability.</p>
                                </div>

                            </div>
                        </div>
                        <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="single-services-box">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon normal-image" width="82px" height="82px" src="assets/images/mobile-first-approach.png" alt="Mobile First Approach" />
                                    <img loading="lazy" class="icon hover-image" width="82px" height="82px" src="assets/images/mobile-first-approach-hover.png" alt="Mobile First Approach" />
                                </div>
                                <div class="services-content">
                                    <h3 class="title h4">Mobile First Approach</h3>
                                    <p class="text">As a leading Shopify store setup with premium theme company, we have a great command over building fully responsive design layouts. Our skilled Shopify experts create completely responsive design layouts that adopt different devices &amp; screen sizes very well.</p>
                                </div>

                            </div>
                        </div>
                        <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="single-services-box">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon normal-image" width="82px" height="82px" src="assets/images/seo-friendly-structure.png" alt="SEO-Friendly Structure" />
                                    <img loading="lazy" class="icon hover-image" width="82px" height="82px" src="assets/images/seo-friendly-structure-hover.png" alt="SEO-Friendly Structure" />
                                </div>
                                <div class="services-content">
                                    <h3 class="title h4">SEO-Friendly Structure</h3>
                                    <p class="text">Our team of Shopify developers are experts in optimizing store navigations, using descriptive file names for images and descriptive links for interlinks. As a top Shopify store setup with a custom theme agency, we have empowered all our clients with top search engine ranking and boosted customer engagement. Logo and branding integration</p>
                                </div>

                            </div>
                        </div>
                        <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="single-services-box">
                                <div class="icon-main">
                                    <img loading="lazy" class="icon normal-image" width="82px" height="82px" src="assets/images/custom-functionality.png" alt="Custom Functionality" />
                                    <img loading="lazy" class="icon hover-image" width="82px" height="82px" src="assets/images/custom-functionality-hover.png" alt="Custom Functionality" />
                                </div>
                                <div class="services-content">
                                    <h3 class="title h4">Custom Functionality</h3>
                                    <p class="text">Noxu Technologies is the best Shopify store setup with premium theme services provider in creating custom functionalities tailored to business requirements and targeted audiences. We guarantee the effective traceability of operations, scalability, flexibility, rich user experience and a sales-oriented Shopify store with custom functionalities.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section id="prices-section" class="price-section section-spacing">
                <div class="section-head-part">
                    <h2 class="section-head-title">Hire Dedicated Developers at Affordable Prices</h2>
                </div>
                <div class="container">
                    <div class="row row-mb-minus">
                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="price-box">
                                <h3 class="h5 price-box-heading">Round-the-Clock</h3>
                                <div class="price-content-main">
                                    <div class="price-icon">
                                        <img loading="lazy" src="assets/images/approved.png" width="45px" height="45px" alt="Round the Clock" />
                                    </div>
                                    <div class="price-time-main">
                                        <h4 class="h5 price-time-title">Time Duration</h4>
                                        <p class="price-time-desc">1 Month (160 hrs)</p>
                                    </div>
                                    <div class="price-time-main">
                                        <h4 class="h5 price-time-title">Billing</h4>
                                        <p class="price-time-desc">Monthly</p>
                                    </div>
                                    <div class="price-time-main">
                                        <h4 class="h5 price-time-title">Communication</h4>
                                        <ul class="price-social-icon">
                                            <li><a href="mailto:contact@Noxu Technologies.com" aria-label="Mail"><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.55774 1.94439L7.77927 6.96338C8.84967 7.82688 10.3214 7.82688 11.3918 6.96338L17.6133 1.94434" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M16.1111 1H2.88889C1.84568 1 1 1.84568 1 2.88889V12.3333C1 13.3765 1.84568 14.2222 2.88889 14.2222H16.1111C17.1543 14.2222 18 13.3765 18 12.3333V2.88889C18 1.84568 17.1543 1 16.1111 1Z" stroke="white" stroke-linecap="round"></path>
                                            </svg></a></li>
                                            <li><a href="https://shivlab.slack.com" aria-label="Slack" target="_blank"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.31079 1C6.36022 1 5.58974 1.77221 5.58974 2.7245C5.58952 2.95074 5.63386 3.17481 5.72023 3.38391C5.80659 3.59302 5.9333 3.78306 6.09312 3.9432C6.25293 4.10333 6.44272 4.23042 6.65165 4.31721C6.86057 4.40399 7.08456 4.44878 7.31079 4.44901H9.03209V2.7245C9.03252 2.26757 8.85136 1.8292 8.52856 1.5058C8.20576 1.18239 7.76773 1.00046 7.31079 1ZM7.31079 5.59868H2.72105C1.77048 5.59868 1 6.37089 1 7.32347C1 8.27578 1.77048 9.04798 2.72105 9.04798H7.31108C8.26135 9.04798 9.03209 8.27578 9.03209 7.32347C9.03209 6.37089 8.26135 5.59868 7.31079 5.59868Z" stroke="white" stroke-linejoin="round"></path>
                                                <path d="M18.2117 7.32347C18.2117 6.37089 17.4409 5.59868 16.4904 5.59868C15.5398 5.59868 14.7693 6.37089 14.7693 7.32347V9.04798H16.4904C16.9473 9.04755 17.3853 8.86554 17.7081 8.54222C18.0309 8.21881 18.2121 7.7804 18.2117 7.32347ZM13.622 7.32347V2.7245C13.6223 2.26757 13.4412 1.8292 13.1184 1.5058C12.7956 1.18239 12.3575 1.00046 11.9006 1C10.95 1 10.1796 1.77221 10.1796 2.7245V7.32318C10.1796 8.27604 10.95 9.04824 11.9006 9.04824C12.3575 9.04781 12.7956 8.86588 13.1184 8.54247C13.4412 8.21907 13.6223 7.7804 13.622 7.32347Z" stroke="white" stroke-linejoin="round"></path>
                                                <path d="M11.9006 18.2457C12.3575 18.2453 12.7956 18.0634 13.1184 17.74C13.4412 17.4166 13.6223 16.9782 13.622 16.5212C13.6223 16.0643 13.4412 15.626 13.1184 15.3025C12.7956 14.9791 12.3575 14.7972 11.9006 14.7967H10.1796V16.5212C10.1796 17.4735 10.95 18.2457 11.9006 18.2457ZM11.9006 13.647H16.4906C17.4409 13.647 18.2117 12.8748 18.2117 11.9223C18.2121 11.4653 18.0309 11.0269 17.7081 10.7036C17.3853 10.3802 16.9473 10.1982 16.4904 10.1978H11.9006C10.95 10.1978 10.1796 10.97 10.1796 11.9223C10.1793 12.1485 10.2236 12.3726 10.31 12.5816C10.3964 12.7908 10.5231 12.9808 10.6829 13.1409C10.8427 13.3011 11.0325 13.4282 11.2414 13.5149C11.4504 13.6018 11.6744 13.6469 11.9006 13.647Z" stroke="white" stroke-linejoin="round"></path>
                                                <path d="M1 11.9223C0.999777 12.1485 1.04411 12.3726 1.13048 12.5816C1.21684 12.7908 1.34355 12.9808 1.50337 13.1409C1.66318 13.3011 1.85297 13.4282 2.0619 13.5149C2.27083 13.6018 2.49481 13.6465 2.72105 13.6468C3.17798 13.6463 3.61602 13.4643 3.93883 13.1409C4.26164 12.8176 4.44276 12.3792 4.44238 11.9223V10.1978H2.72105C1.77048 10.1978 1 10.97 1 11.9223ZM5.58975 11.9223V16.521C5.58975 17.4735 6.36022 18.2457 7.3108 18.2457C7.76773 18.2453 8.20576 18.0634 8.52856 17.74C8.85137 17.4166 9.03252 16.9782 9.03209 16.5212V11.9223C9.03234 11.696 8.98803 11.4719 8.90162 11.2628C8.81522 11.0537 8.68854 10.8636 8.52865 10.7035C8.36884 10.5434 8.17899 10.4163 7.97004 10.3295C7.76106 10.2427 7.53705 10.1979 7.3108 10.1978C6.36022 10.1978 5.58975 10.97 5.58975 11.9223Z" stroke="white" stroke-linejoin="round"></path>
                                            </svg></a></li>
                                            <li><a href="tel:9016777787" aria-label="Phone"><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 15.697C18 16.021 17.9319 16.354 17.7872 16.678C17.6425 17.002 17.4552 17.308 17.2083 17.596C16.7912 18.082 16.3315 18.433 15.8122 18.658C15.3015 18.883 14.7481 19 14.1522 19C13.2839 19 12.356 18.784 11.3771 18.343C10.3981 17.902 9.41913 17.308 8.44867 16.561C7.4697 15.805 6.54181 14.968 5.65648 14.041C4.77967 13.105 3.98798 12.124 3.28142 11.098C2.58337 10.072 2.02153 9.046 1.61292 8.029C1.20431 7.003 1 6.022 1 5.086C1 4.474 1.10215 3.889 1.30646 3.349C1.51077 2.8 1.83425 2.296 2.28543 1.846C2.83025 1.279 3.42614 1 4.05608 1C4.29444 1 4.5328 1.054 4.74562 1.162C4.96695 1.27 5.16274 1.432 5.31597 1.666L7.29094 4.609C7.44417 4.834 7.55483 5.041 7.63145 5.239C7.70806 5.428 7.75063 5.617 7.75063 5.788C7.75063 6.004 7.69104 6.22 7.57186 6.427C7.46119 6.634 7.29945 6.85 7.09514 7.066L6.44817 7.777C6.35453 7.876 6.31197 7.993 6.31197 8.137C6.31197 8.209 6.32048 8.272 6.33751 8.344C6.36305 8.416 6.38858 8.47 6.40561 8.524C6.55884 8.821 6.82273 9.208 7.1973 9.676C7.58037 10.144 7.98898 10.621 8.43165 11.098C8.89134 11.575 9.334 12.016 9.78518 12.421C10.2278 12.817 10.5939 13.087 10.8833 13.249C10.9259 13.267 10.977 13.294 11.0366 13.321C11.1047 13.348 11.1728 13.357 11.2494 13.357C11.3941 13.357 11.5048 13.303 11.5984 13.204L12.2454 12.529C12.4582 12.304 12.6625 12.133 12.8583 12.025C13.0541 11.899 13.2499 11.836 13.4627 11.836C13.6244 11.836 13.7947 11.872 13.982 11.953C14.1693 12.034 14.365 12.151 14.5779 12.304L17.3956 14.419C17.6169 14.581 17.7702 14.77 17.8638 14.995C17.9489 15.22 18 15.445 18 15.697Z" stroke="white" stroke-miterlimit="10"></path>
                                            </svg></a></li>
                                            <li><a href="skype:kishan-mehta?chat" aria-label="Skype"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.40361 1.57272L6.99986 2.06603C7.06932 2.12288 7.15 2.16442 7.23662 2.18792C7.32325 2.21143 7.41386 2.21639 7.50253 2.20246L7.40361 1.57272ZM1.57261 7.40371L2.20246 7.50253C2.21637 7.41387 2.21141 7.32328 2.1879 7.23668C2.16439 7.15008 2.12286 7.06941 2.06603 6.99996L1.57261 7.40371ZM9.59639 15.4273L10 14.934C9.93059 14.8771 9.84993 14.8356 9.76333 14.8121C9.67672 14.7886 9.58613 14.7836 9.49747 14.7975L9.59639 15.4273ZM15.4273 9.59639L14.7975 9.49747C14.7836 9.58613 14.7886 9.67672 14.8121 9.76333C14.8356 9.84993 14.8771 9.93059 14.934 10L15.4273 9.59639ZM7.80736 1.0794C6.95406 0.380068 5.88451 -0.00143633 4.78125 4.0638e-06V1.275C5.59016 1.27353 6.37444 1.55315 6.99996 2.06603L7.80736 1.0794ZM4.78125 4.0638e-06C2.14062 4.0638e-06 4.18418e-06 2.14062 4.18418e-06 4.78125H1.275C1.275 2.84485 2.84485 1.275 4.78125 1.275V4.0638e-06ZM4.18418e-06 4.78125C-0.00145735 5.88449 0.380008 6.95404 1.07929 7.80736L2.06603 6.99986C1.55317 6.37436 1.27355 5.59012 1.275 4.78125H4.18418e-06ZM2.125 8.5C2.125 8.16021 2.15146 7.82712 2.20246 7.50253L0.942972 7.30479C0.88098 7.70018 0.849897 8.09979 0.850004 8.5H2.125ZM8.5 14.875C4.9792 14.875 2.125 12.0208 2.125 8.5H0.850004C0.850004 12.7249 4.27508 16.15 8.5 16.15V14.875ZM9.49747 14.7975C9.17288 14.8484 8.83979 14.875 8.5 14.875V16.15C8.90619 16.15 9.30548 16.1182 9.69521 16.057L9.49747 14.7975ZM9.19264 15.9207C10.046 16.62 11.1155 17.0015 12.2187 17V15.725C11.4099 15.7264 10.6256 15.4468 10 14.934L9.19264 15.9207ZM12.2187 17C14.8594 17 17 14.8594 17 12.2187H15.725C15.725 14.1552 14.1552 15.725 12.2187 15.725V17ZM17 12.2187C17.0015 11.1155 16.62 10.046 15.9207 9.19264L14.934 10C15.4468 10.6256 15.7264 11.4099 15.725 12.2187H17ZM14.875 8.5C14.875 8.83979 14.8484 9.17288 14.7975 9.49747L16.057 9.69521C16.1182 9.30548 16.15 8.90619 16.15 8.5H14.875ZM8.5 2.125C12.0208 2.125 14.875 4.9792 14.875 8.5H16.15C16.15 4.27508 12.7249 0.850004 8.5 0.850004V2.125ZM7.50253 2.20246C7.83249 2.15071 8.166 2.12488 8.5 2.125V0.850004C8.09381 0.850004 7.69463 0.881772 7.30469 0.942972L7.50253 2.20246Z" fill="white"></path>
                                                <path d="M10.5283 5.50112C10.5283 5.50112 9.71702 4.88721 8.49993 4.88721C7.6886 4.88721 6.26868 4.88721 6.26868 6.49275C6.26868 8.49971 10.7312 8.49971 10.7312 10.5068C10.7312 12.1122 9.31125 12.1122 8.49993 12.1122C7.28294 12.1122 6.47161 11.4983 6.47161 11.4983" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="price-box">
                                <h3 class="h5 price-box-heading">Part-Time</h3>
                                <div class="price-content-main">
                                    <div class="price-icon">
                                        <img loading="lazy" src="assets/images/part-time.png" width="45px" height="45px" alt="Part Time" />
                                    </div>
                                    <div class="price-time-main">
                                        <h4 class="h5 price-time-title">Time Duration</h4>
                                        <p class="price-time-desc">4 hrs/Day</p>
                                    </div>
                                    <div class="price-time-main">
                                        <h4 class="h5 price-time-title">Billing</h4>
                                        <p class="price-time-desc">Weekly</p>
                                    </div>
                                    <div class="price-time-main">
                                        <h4 class="h5 price-time-title">Communication</h4>
                                        <ul class="price-social-icon">
                                            <li><a href="mailto:contact@Noxu Technologies.com" aria-label="Mail"><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.55774 1.94439L7.77927 6.96338C8.84967 7.82688 10.3214 7.82688 11.3918 6.96338L17.6133 1.94434" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M16.1111 1H2.88889C1.84568 1 1 1.84568 1 2.88889V12.3333C1 13.3765 1.84568 14.2222 2.88889 14.2222H16.1111C17.1543 14.2222 18 13.3765 18 12.3333V2.88889C18 1.84568 17.1543 1 16.1111 1Z" stroke="white" stroke-linecap="round"></path>
                                            </svg></a></li>
                                            <li><a href="https://shivlab.slack.com" aria-label="Slack" target="_blank"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.31079 1C6.36022 1 5.58974 1.77221 5.58974 2.7245C5.58952 2.95074 5.63386 3.17481 5.72023 3.38391C5.80659 3.59302 5.9333 3.78306 6.09312 3.9432C6.25293 4.10333 6.44272 4.23042 6.65165 4.31721C6.86057 4.40399 7.08456 4.44878 7.31079 4.44901H9.03209V2.7245C9.03252 2.26757 8.85136 1.8292 8.52856 1.5058C8.20576 1.18239 7.76773 1.00046 7.31079 1ZM7.31079 5.59868H2.72105C1.77048 5.59868 1 6.37089 1 7.32347C1 8.27578 1.77048 9.04798 2.72105 9.04798H7.31108C8.26135 9.04798 9.03209 8.27578 9.03209 7.32347C9.03209 6.37089 8.26135 5.59868 7.31079 5.59868Z" stroke="white" stroke-linejoin="round"></path>
                                                <path d="M18.2117 7.32347C18.2117 6.37089 17.4409 5.59868 16.4904 5.59868C15.5398 5.59868 14.7693 6.37089 14.7693 7.32347V9.04798H16.4904C16.9473 9.04755 17.3853 8.86554 17.7081 8.54222C18.0309 8.21881 18.2121 7.7804 18.2117 7.32347ZM13.622 7.32347V2.7245C13.6223 2.26757 13.4412 1.8292 13.1184 1.5058C12.7956 1.18239 12.3575 1.00046 11.9006 1C10.95 1 10.1796 1.77221 10.1796 2.7245V7.32318C10.1796 8.27604 10.95 9.04824 11.9006 9.04824C12.3575 9.04781 12.7956 8.86588 13.1184 8.54247C13.4412 8.21907 13.6223 7.7804 13.622 7.32347Z" stroke="white" stroke-linejoin="round"></path>
                                                <path d="M11.9006 18.2457C12.3575 18.2453 12.7956 18.0634 13.1184 17.74C13.4412 17.4166 13.6223 16.9782 13.622 16.5212C13.6223 16.0643 13.4412 15.626 13.1184 15.3025C12.7956 14.9791 12.3575 14.7972 11.9006 14.7967H10.1796V16.5212C10.1796 17.4735 10.95 18.2457 11.9006 18.2457ZM11.9006 13.647H16.4906C17.4409 13.647 18.2117 12.8748 18.2117 11.9223C18.2121 11.4653 18.0309 11.0269 17.7081 10.7036C17.3853 10.3802 16.9473 10.1982 16.4904 10.1978H11.9006C10.95 10.1978 10.1796 10.97 10.1796 11.9223C10.1793 12.1485 10.2236 12.3726 10.31 12.5816C10.3964 12.7908 10.5231 12.9808 10.6829 13.1409C10.8427 13.3011 11.0325 13.4282 11.2414 13.5149C11.4504 13.6018 11.6744 13.6469 11.9006 13.647Z" stroke="white" stroke-linejoin="round"></path>
                                                <path d="M1 11.9223C0.999777 12.1485 1.04411 12.3726 1.13048 12.5816C1.21684 12.7908 1.34355 12.9808 1.50337 13.1409C1.66318 13.3011 1.85297 13.4282 2.0619 13.5149C2.27083 13.6018 2.49481 13.6465 2.72105 13.6468C3.17798 13.6463 3.61602 13.4643 3.93883 13.1409C4.26164 12.8176 4.44276 12.3792 4.44238 11.9223V10.1978H2.72105C1.77048 10.1978 1 10.97 1 11.9223ZM5.58975 11.9223V16.521C5.58975 17.4735 6.36022 18.2457 7.3108 18.2457C7.76773 18.2453 8.20576 18.0634 8.52856 17.74C8.85137 17.4166 9.03252 16.9782 9.03209 16.5212V11.9223C9.03234 11.696 8.98803 11.4719 8.90162 11.2628C8.81522 11.0537 8.68854 10.8636 8.52865 10.7035C8.36884 10.5434 8.17899 10.4163 7.97004 10.3295C7.76106 10.2427 7.53705 10.1979 7.3108 10.1978C6.36022 10.1978 5.58975 10.97 5.58975 11.9223Z" stroke="white" stroke-linejoin="round"></path>
                                            </svg></a></li>
                                            <li><a href="tel:9016777787" aria-label="Phone"><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 15.697C18 16.021 17.9319 16.354 17.7872 16.678C17.6425 17.002 17.4552 17.308 17.2083 17.596C16.7912 18.082 16.3315 18.433 15.8122 18.658C15.3015 18.883 14.7481 19 14.1522 19C13.2839 19 12.356 18.784 11.3771 18.343C10.3981 17.902 9.41913 17.308 8.44867 16.561C7.4697 15.805 6.54181 14.968 5.65648 14.041C4.77967 13.105 3.98798 12.124 3.28142 11.098C2.58337 10.072 2.02153 9.046 1.61292 8.029C1.20431 7.003 1 6.022 1 5.086C1 4.474 1.10215 3.889 1.30646 3.349C1.51077 2.8 1.83425 2.296 2.28543 1.846C2.83025 1.279 3.42614 1 4.05608 1C4.29444 1 4.5328 1.054 4.74562 1.162C4.96695 1.27 5.16274 1.432 5.31597 1.666L7.29094 4.609C7.44417 4.834 7.55483 5.041 7.63145 5.239C7.70806 5.428 7.75063 5.617 7.75063 5.788C7.75063 6.004 7.69104 6.22 7.57186 6.427C7.46119 6.634 7.29945 6.85 7.09514 7.066L6.44817 7.777C6.35453 7.876 6.31197 7.993 6.31197 8.137C6.31197 8.209 6.32048 8.272 6.33751 8.344C6.36305 8.416 6.38858 8.47 6.40561 8.524C6.55884 8.821 6.82273 9.208 7.1973 9.676C7.58037 10.144 7.98898 10.621 8.43165 11.098C8.89134 11.575 9.334 12.016 9.78518 12.421C10.2278 12.817 10.5939 13.087 10.8833 13.249C10.9259 13.267 10.977 13.294 11.0366 13.321C11.1047 13.348 11.1728 13.357 11.2494 13.357C11.3941 13.357 11.5048 13.303 11.5984 13.204L12.2454 12.529C12.4582 12.304 12.6625 12.133 12.8583 12.025C13.0541 11.899 13.2499 11.836 13.4627 11.836C13.6244 11.836 13.7947 11.872 13.982 11.953C14.1693 12.034 14.365 12.151 14.5779 12.304L17.3956 14.419C17.6169 14.581 17.7702 14.77 17.8638 14.995C17.9489 15.22 18 15.445 18 15.697Z" stroke="white" stroke-miterlimit="10"></path>
                                            </svg></a></li>
                                            <li><a href="skype:kishan-mehta?chat" aria-label="Skype"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.40361 1.57272L6.99986 2.06603C7.06932 2.12288 7.15 2.16442 7.23662 2.18792C7.32325 2.21143 7.41386 2.21639 7.50253 2.20246L7.40361 1.57272ZM1.57261 7.40371L2.20246 7.50253C2.21637 7.41387 2.21141 7.32328 2.1879 7.23668C2.16439 7.15008 2.12286 7.06941 2.06603 6.99996L1.57261 7.40371ZM9.59639 15.4273L10 14.934C9.93059 14.8771 9.84993 14.8356 9.76333 14.8121C9.67672 14.7886 9.58613 14.7836 9.49747 14.7975L9.59639 15.4273ZM15.4273 9.59639L14.7975 9.49747C14.7836 9.58613 14.7886 9.67672 14.8121 9.76333C14.8356 9.84993 14.8771 9.93059 14.934 10L15.4273 9.59639ZM7.80736 1.0794C6.95406 0.380068 5.88451 -0.00143633 4.78125 4.0638e-06V1.275C5.59016 1.27353 6.37444 1.55315 6.99996 2.06603L7.80736 1.0794ZM4.78125 4.0638e-06C2.14062 4.0638e-06 4.18418e-06 2.14062 4.18418e-06 4.78125H1.275C1.275 2.84485 2.84485 1.275 4.78125 1.275V4.0638e-06ZM4.18418e-06 4.78125C-0.00145735 5.88449 0.380008 6.95404 1.07929 7.80736L2.06603 6.99986C1.55317 6.37436 1.27355 5.59012 1.275 4.78125H4.18418e-06ZM2.125 8.5C2.125 8.16021 2.15146 7.82712 2.20246 7.50253L0.942972 7.30479C0.88098 7.70018 0.849897 8.09979 0.850004 8.5H2.125ZM8.5 14.875C4.9792 14.875 2.125 12.0208 2.125 8.5H0.850004C0.850004 12.7249 4.27508 16.15 8.5 16.15V14.875ZM9.49747 14.7975C9.17288 14.8484 8.83979 14.875 8.5 14.875V16.15C8.90619 16.15 9.30548 16.1182 9.69521 16.057L9.49747 14.7975ZM9.19264 15.9207C10.046 16.62 11.1155 17.0015 12.2187 17V15.725C11.4099 15.7264 10.6256 15.4468 10 14.934L9.19264 15.9207ZM12.2187 17C14.8594 17 17 14.8594 17 12.2187H15.725C15.725 14.1552 14.1552 15.725 12.2187 15.725V17ZM17 12.2187C17.0015 11.1155 16.62 10.046 15.9207 9.19264L14.934 10C15.4468 10.6256 15.7264 11.4099 15.725 12.2187H17ZM14.875 8.5C14.875 8.83979 14.8484 9.17288 14.7975 9.49747L16.057 9.69521C16.1182 9.30548 16.15 8.90619 16.15 8.5H14.875ZM8.5 2.125C12.0208 2.125 14.875 4.9792 14.875 8.5H16.15C16.15 4.27508 12.7249 0.850004 8.5 0.850004V2.125ZM7.50253 2.20246C7.83249 2.15071 8.166 2.12488 8.5 2.125V0.850004C8.09381 0.850004 7.69463 0.881772 7.30469 0.942972L7.50253 2.20246Z" fill="white"></path>
                                                <path d="M10.5283 5.50112C10.5283 5.50112 9.71702 4.88721 8.49993 4.88721C7.6886 4.88721 6.26868 4.88721 6.26868 6.49275C6.26868 8.49971 10.7312 8.49971 10.7312 10.5068C10.7312 12.1122 9.31125 12.1122 8.49993 12.1122C7.28294 12.1122 6.47161 11.4983 6.47161 11.4983" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="price-box">
                                <h3 class="h5 price-box-heading">Hourly</h3>
                                <div class="price-content-main">
                                    <div class="price-icon">
                                        <img loading="lazy" src="assets/images/24-hours.png" width="45px" height="45px" alt="Hourly" />
                                    </div>
                                    <div class="price-time-main">
                                        <h4 class="h5 price-time-title">Time Duration</h4>
                                        <p class="price-time-desc">Hourly</p>
                                    </div>
                                    <div class="price-time-main">
                                        <h4 class="h5 price-time-title">Billing</h4>
                                        <p class="price-time-desc">Hourly/Weekly</p>
                                    </div>
                                    <div class="price-time-main">
                                        <h4 class="h5 price-time-title">Communication</h4>
                                        <ul class="price-social-icon">
                                            <li><a href="mailto:contact@Noxu Technologies.com" aria-label="Mail"><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.55774 1.94439L7.77927 6.96338C8.84967 7.82688 10.3214 7.82688 11.3918 6.96338L17.6133 1.94434" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M16.1111 1H2.88889C1.84568 1 1 1.84568 1 2.88889V12.3333C1 13.3765 1.84568 14.2222 2.88889 14.2222H16.1111C17.1543 14.2222 18 13.3765 18 12.3333V2.88889C18 1.84568 17.1543 1 16.1111 1Z" stroke="white" stroke-linecap="round"></path>
                                            </svg></a></li>
                                            <li><a href="https://shivlab.slack.com" aria-label="Slack" target="_blank"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.31079 1C6.36022 1 5.58974 1.77221 5.58974 2.7245C5.58952 2.95074 5.63386 3.17481 5.72023 3.38391C5.80659 3.59302 5.9333 3.78306 6.09312 3.9432C6.25293 4.10333 6.44272 4.23042 6.65165 4.31721C6.86057 4.40399 7.08456 4.44878 7.31079 4.44901H9.03209V2.7245C9.03252 2.26757 8.85136 1.8292 8.52856 1.5058C8.20576 1.18239 7.76773 1.00046 7.31079 1ZM7.31079 5.59868H2.72105C1.77048 5.59868 1 6.37089 1 7.32347C1 8.27578 1.77048 9.04798 2.72105 9.04798H7.31108C8.26135 9.04798 9.03209 8.27578 9.03209 7.32347C9.03209 6.37089 8.26135 5.59868 7.31079 5.59868Z" stroke="white" stroke-linejoin="round"></path>
                                                <path d="M18.2117 7.32347C18.2117 6.37089 17.4409 5.59868 16.4904 5.59868C15.5398 5.59868 14.7693 6.37089 14.7693 7.32347V9.04798H16.4904C16.9473 9.04755 17.3853 8.86554 17.7081 8.54222C18.0309 8.21881 18.2121 7.7804 18.2117 7.32347ZM13.622 7.32347V2.7245C13.6223 2.26757 13.4412 1.8292 13.1184 1.5058C12.7956 1.18239 12.3575 1.00046 11.9006 1C10.95 1 10.1796 1.77221 10.1796 2.7245V7.32318C10.1796 8.27604 10.95 9.04824 11.9006 9.04824C12.3575 9.04781 12.7956 8.86588 13.1184 8.54247C13.4412 8.21907 13.6223 7.7804 13.622 7.32347Z" stroke="white" stroke-linejoin="round"></path>
                                                <path d="M11.9006 18.2457C12.3575 18.2453 12.7956 18.0634 13.1184 17.74C13.4412 17.4166 13.6223 16.9782 13.622 16.5212C13.6223 16.0643 13.4412 15.626 13.1184 15.3025C12.7956 14.9791 12.3575 14.7972 11.9006 14.7967H10.1796V16.5212C10.1796 17.4735 10.95 18.2457 11.9006 18.2457ZM11.9006 13.647H16.4906C17.4409 13.647 18.2117 12.8748 18.2117 11.9223C18.2121 11.4653 18.0309 11.0269 17.7081 10.7036C17.3853 10.3802 16.9473 10.1982 16.4904 10.1978H11.9006C10.95 10.1978 10.1796 10.97 10.1796 11.9223C10.1793 12.1485 10.2236 12.3726 10.31 12.5816C10.3964 12.7908 10.5231 12.9808 10.6829 13.1409C10.8427 13.3011 11.0325 13.4282 11.2414 13.5149C11.4504 13.6018 11.6744 13.6469 11.9006 13.647Z" stroke="white" stroke-linejoin="round"></path>
                                                <path d="M1 11.9223C0.999777 12.1485 1.04411 12.3726 1.13048 12.5816C1.21684 12.7908 1.34355 12.9808 1.50337 13.1409C1.66318 13.3011 1.85297 13.4282 2.0619 13.5149C2.27083 13.6018 2.49481 13.6465 2.72105 13.6468C3.17798 13.6463 3.61602 13.4643 3.93883 13.1409C4.26164 12.8176 4.44276 12.3792 4.44238 11.9223V10.1978H2.72105C1.77048 10.1978 1 10.97 1 11.9223ZM5.58975 11.9223V16.521C5.58975 17.4735 6.36022 18.2457 7.3108 18.2457C7.76773 18.2453 8.20576 18.0634 8.52856 17.74C8.85137 17.4166 9.03252 16.9782 9.03209 16.5212V11.9223C9.03234 11.696 8.98803 11.4719 8.90162 11.2628C8.81522 11.0537 8.68854 10.8636 8.52865 10.7035C8.36884 10.5434 8.17899 10.4163 7.97004 10.3295C7.76106 10.2427 7.53705 10.1979 7.3108 10.1978C6.36022 10.1978 5.58975 10.97 5.58975 11.9223Z" stroke="white" stroke-linejoin="round"></path>
                                            </svg></a></li>
                                            <li><a href="tel:9016777787" aria-label="Phone"><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 15.697C18 16.021 17.9319 16.354 17.7872 16.678C17.6425 17.002 17.4552 17.308 17.2083 17.596C16.7912 18.082 16.3315 18.433 15.8122 18.658C15.3015 18.883 14.7481 19 14.1522 19C13.2839 19 12.356 18.784 11.3771 18.343C10.3981 17.902 9.41913 17.308 8.44867 16.561C7.4697 15.805 6.54181 14.968 5.65648 14.041C4.77967 13.105 3.98798 12.124 3.28142 11.098C2.58337 10.072 2.02153 9.046 1.61292 8.029C1.20431 7.003 1 6.022 1 5.086C1 4.474 1.10215 3.889 1.30646 3.349C1.51077 2.8 1.83425 2.296 2.28543 1.846C2.83025 1.279 3.42614 1 4.05608 1C4.29444 1 4.5328 1.054 4.74562 1.162C4.96695 1.27 5.16274 1.432 5.31597 1.666L7.29094 4.609C7.44417 4.834 7.55483 5.041 7.63145 5.239C7.70806 5.428 7.75063 5.617 7.75063 5.788C7.75063 6.004 7.69104 6.22 7.57186 6.427C7.46119 6.634 7.29945 6.85 7.09514 7.066L6.44817 7.777C6.35453 7.876 6.31197 7.993 6.31197 8.137C6.31197 8.209 6.32048 8.272 6.33751 8.344C6.36305 8.416 6.38858 8.47 6.40561 8.524C6.55884 8.821 6.82273 9.208 7.1973 9.676C7.58037 10.144 7.98898 10.621 8.43165 11.098C8.89134 11.575 9.334 12.016 9.78518 12.421C10.2278 12.817 10.5939 13.087 10.8833 13.249C10.9259 13.267 10.977 13.294 11.0366 13.321C11.1047 13.348 11.1728 13.357 11.2494 13.357C11.3941 13.357 11.5048 13.303 11.5984 13.204L12.2454 12.529C12.4582 12.304 12.6625 12.133 12.8583 12.025C13.0541 11.899 13.2499 11.836 13.4627 11.836C13.6244 11.836 13.7947 11.872 13.982 11.953C14.1693 12.034 14.365 12.151 14.5779 12.304L17.3956 14.419C17.6169 14.581 17.7702 14.77 17.8638 14.995C17.9489 15.22 18 15.445 18 15.697Z" stroke="white" stroke-miterlimit="10"></path>
                                            </svg></a></li>
                                            <li><a href="skype:kishan-mehta?chat" aria-label="Skype"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.40361 1.57272L6.99986 2.06603C7.06932 2.12288 7.15 2.16442 7.23662 2.18792C7.32325 2.21143 7.41386 2.21639 7.50253 2.20246L7.40361 1.57272ZM1.57261 7.40371L2.20246 7.50253C2.21637 7.41387 2.21141 7.32328 2.1879 7.23668C2.16439 7.15008 2.12286 7.06941 2.06603 6.99996L1.57261 7.40371ZM9.59639 15.4273L10 14.934C9.93059 14.8771 9.84993 14.8356 9.76333 14.8121C9.67672 14.7886 9.58613 14.7836 9.49747 14.7975L9.59639 15.4273ZM15.4273 9.59639L14.7975 9.49747C14.7836 9.58613 14.7886 9.67672 14.8121 9.76333C14.8356 9.84993 14.8771 9.93059 14.934 10L15.4273 9.59639ZM7.80736 1.0794C6.95406 0.380068 5.88451 -0.00143633 4.78125 4.0638e-06V1.275C5.59016 1.27353 6.37444 1.55315 6.99996 2.06603L7.80736 1.0794ZM4.78125 4.0638e-06C2.14062 4.0638e-06 4.18418e-06 2.14062 4.18418e-06 4.78125H1.275C1.275 2.84485 2.84485 1.275 4.78125 1.275V4.0638e-06ZM4.18418e-06 4.78125C-0.00145735 5.88449 0.380008 6.95404 1.07929 7.80736L2.06603 6.99986C1.55317 6.37436 1.27355 5.59012 1.275 4.78125H4.18418e-06ZM2.125 8.5C2.125 8.16021 2.15146 7.82712 2.20246 7.50253L0.942972 7.30479C0.88098 7.70018 0.849897 8.09979 0.850004 8.5H2.125ZM8.5 14.875C4.9792 14.875 2.125 12.0208 2.125 8.5H0.850004C0.850004 12.7249 4.27508 16.15 8.5 16.15V14.875ZM9.49747 14.7975C9.17288 14.8484 8.83979 14.875 8.5 14.875V16.15C8.90619 16.15 9.30548 16.1182 9.69521 16.057L9.49747 14.7975ZM9.19264 15.9207C10.046 16.62 11.1155 17.0015 12.2187 17V15.725C11.4099 15.7264 10.6256 15.4468 10 14.934L9.19264 15.9207ZM12.2187 17C14.8594 17 17 14.8594 17 12.2187H15.725C15.725 14.1552 14.1552 15.725 12.2187 15.725V17ZM17 12.2187C17.0015 11.1155 16.62 10.046 15.9207 9.19264L14.934 10C15.4468 10.6256 15.7264 11.4099 15.725 12.2187H17ZM14.875 8.5C14.875 8.83979 14.8484 9.17288 14.7975 9.49747L16.057 9.69521C16.1182 9.30548 16.15 8.90619 16.15 8.5H14.875ZM8.5 2.125C12.0208 2.125 14.875 4.9792 14.875 8.5H16.15C16.15 4.27508 12.7249 0.850004 8.5 0.850004V2.125ZM7.50253 2.20246C7.83249 2.15071 8.166 2.12488 8.5 2.125V0.850004C8.09381 0.850004 7.69463 0.881772 7.30469 0.942972L7.50253 2.20246Z" fill="white"></path>
                                                <path d="M10.5283 5.50112C10.5283 5.50112 9.71702 4.88721 8.49993 4.88721C7.6886 4.88721 6.26868 4.88721 6.26868 6.49275C6.26868 8.49971 10.7312 8.49971 10.7312 10.5068C10.7312 12.1122 9.31125 12.1122 8.49993 12.1122C7.28294 12.1122 6.47161 11.4983 6.47161 11.4983" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-spacing-bottom">
                            <div class="price-box">
                                <h3 class="h5 price-box-heading">Project Based</h3>
                                <div class="price-content-main">
                                    <div class="price-icon">
                                        <img loading="lazy" src="assets/images/hired.png" width="45px" height="45px" alt="Project Based" />
                                    </div>
                                    <div class="price-time-main">
                                        <h4 class="h5 price-time-title">Time Duration</h4>
                                        <p class="price-time-desc">Depend on the Project</p>
                                    </div>
                                    <div class="price-time-main">
                                        <h4 class="h5 price-time-title">Billing</h4>
                                        <p class="price-time-desc">Milestone Based</p>
                                    </div>
                                    <div class="price-time-main">
                                        <h4 class="h5 price-time-title">Communication</h4>
                                        <ul class="price-social-icon">
                                            <li><a href="mailto:contact@Noxu Technologies.com" aria-label="Mail"><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.55774 1.94439L7.77927 6.96338C8.84967 7.82688 10.3214 7.82688 11.3918 6.96338L17.6133 1.94434" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M16.1111 1H2.88889C1.84568 1 1 1.84568 1 2.88889V12.3333C1 13.3765 1.84568 14.2222 2.88889 14.2222H16.1111C17.1543 14.2222 18 13.3765 18 12.3333V2.88889C18 1.84568 17.1543 1 16.1111 1Z" stroke="white" stroke-linecap="round"></path>
                                            </svg></a></li>
                                            <li><a href="https://shivlab.slack.com" aria-label="Slack" target="_blank"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.31079 1C6.36022 1 5.58974 1.77221 5.58974 2.7245C5.58952 2.95074 5.63386 3.17481 5.72023 3.38391C5.80659 3.59302 5.9333 3.78306 6.09312 3.9432C6.25293 4.10333 6.44272 4.23042 6.65165 4.31721C6.86057 4.40399 7.08456 4.44878 7.31079 4.44901H9.03209V2.7245C9.03252 2.26757 8.85136 1.8292 8.52856 1.5058C8.20576 1.18239 7.76773 1.00046 7.31079 1ZM7.31079 5.59868H2.72105C1.77048 5.59868 1 6.37089 1 7.32347C1 8.27578 1.77048 9.04798 2.72105 9.04798H7.31108C8.26135 9.04798 9.03209 8.27578 9.03209 7.32347C9.03209 6.37089 8.26135 5.59868 7.31079 5.59868Z" stroke="white" stroke-linejoin="round"></path>
                                                <path d="M18.2117 7.32347C18.2117 6.37089 17.4409 5.59868 16.4904 5.59868C15.5398 5.59868 14.7693 6.37089 14.7693 7.32347V9.04798H16.4904C16.9473 9.04755 17.3853 8.86554 17.7081 8.54222C18.0309 8.21881 18.2121 7.7804 18.2117 7.32347ZM13.622 7.32347V2.7245C13.6223 2.26757 13.4412 1.8292 13.1184 1.5058C12.7956 1.18239 12.3575 1.00046 11.9006 1C10.95 1 10.1796 1.77221 10.1796 2.7245V7.32318C10.1796 8.27604 10.95 9.04824 11.9006 9.04824C12.3575 9.04781 12.7956 8.86588 13.1184 8.54247C13.4412 8.21907 13.6223 7.7804 13.622 7.32347Z" stroke="white" stroke-linejoin="round"></path>
                                                <path d="M11.9006 18.2457C12.3575 18.2453 12.7956 18.0634 13.1184 17.74C13.4412 17.4166 13.6223 16.9782 13.622 16.5212C13.6223 16.0643 13.4412 15.626 13.1184 15.3025C12.7956 14.9791 12.3575 14.7972 11.9006 14.7967H10.1796V16.5212C10.1796 17.4735 10.95 18.2457 11.9006 18.2457ZM11.9006 13.647H16.4906C17.4409 13.647 18.2117 12.8748 18.2117 11.9223C18.2121 11.4653 18.0309 11.0269 17.7081 10.7036C17.3853 10.3802 16.9473 10.1982 16.4904 10.1978H11.9006C10.95 10.1978 10.1796 10.97 10.1796 11.9223C10.1793 12.1485 10.2236 12.3726 10.31 12.5816C10.3964 12.7908 10.5231 12.9808 10.6829 13.1409C10.8427 13.3011 11.0325 13.4282 11.2414 13.5149C11.4504 13.6018 11.6744 13.6469 11.9006 13.647Z" stroke="white" stroke-linejoin="round"></path>
                                                <path d="M1 11.9223C0.999777 12.1485 1.04411 12.3726 1.13048 12.5816C1.21684 12.7908 1.34355 12.9808 1.50337 13.1409C1.66318 13.3011 1.85297 13.4282 2.0619 13.5149C2.27083 13.6018 2.49481 13.6465 2.72105 13.6468C3.17798 13.6463 3.61602 13.4643 3.93883 13.1409C4.26164 12.8176 4.44276 12.3792 4.44238 11.9223V10.1978H2.72105C1.77048 10.1978 1 10.97 1 11.9223ZM5.58975 11.9223V16.521C5.58975 17.4735 6.36022 18.2457 7.3108 18.2457C7.76773 18.2453 8.20576 18.0634 8.52856 17.74C8.85137 17.4166 9.03252 16.9782 9.03209 16.5212V11.9223C9.03234 11.696 8.98803 11.4719 8.90162 11.2628C8.81522 11.0537 8.68854 10.8636 8.52865 10.7035C8.36884 10.5434 8.17899 10.4163 7.97004 10.3295C7.76106 10.2427 7.53705 10.1979 7.3108 10.1978C6.36022 10.1978 5.58975 10.97 5.58975 11.9223Z" stroke="white" stroke-linejoin="round"></path>
                                            </svg></a></li>
                                            <li><a href="tel:9016777787" aria-label="Phone"><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 15.697C18 16.021 17.9319 16.354 17.7872 16.678C17.6425 17.002 17.4552 17.308 17.2083 17.596C16.7912 18.082 16.3315 18.433 15.8122 18.658C15.3015 18.883 14.7481 19 14.1522 19C13.2839 19 12.356 18.784 11.3771 18.343C10.3981 17.902 9.41913 17.308 8.44867 16.561C7.4697 15.805 6.54181 14.968 5.65648 14.041C4.77967 13.105 3.98798 12.124 3.28142 11.098C2.58337 10.072 2.02153 9.046 1.61292 8.029C1.20431 7.003 1 6.022 1 5.086C1 4.474 1.10215 3.889 1.30646 3.349C1.51077 2.8 1.83425 2.296 2.28543 1.846C2.83025 1.279 3.42614 1 4.05608 1C4.29444 1 4.5328 1.054 4.74562 1.162C4.96695 1.27 5.16274 1.432 5.31597 1.666L7.29094 4.609C7.44417 4.834 7.55483 5.041 7.63145 5.239C7.70806 5.428 7.75063 5.617 7.75063 5.788C7.75063 6.004 7.69104 6.22 7.57186 6.427C7.46119 6.634 7.29945 6.85 7.09514 7.066L6.44817 7.777C6.35453 7.876 6.31197 7.993 6.31197 8.137C6.31197 8.209 6.32048 8.272 6.33751 8.344C6.36305 8.416 6.38858 8.47 6.40561 8.524C6.55884 8.821 6.82273 9.208 7.1973 9.676C7.58037 10.144 7.98898 10.621 8.43165 11.098C8.89134 11.575 9.334 12.016 9.78518 12.421C10.2278 12.817 10.5939 13.087 10.8833 13.249C10.9259 13.267 10.977 13.294 11.0366 13.321C11.1047 13.348 11.1728 13.357 11.2494 13.357C11.3941 13.357 11.5048 13.303 11.5984 13.204L12.2454 12.529C12.4582 12.304 12.6625 12.133 12.8583 12.025C13.0541 11.899 13.2499 11.836 13.4627 11.836C13.6244 11.836 13.7947 11.872 13.982 11.953C14.1693 12.034 14.365 12.151 14.5779 12.304L17.3956 14.419C17.6169 14.581 17.7702 14.77 17.8638 14.995C17.9489 15.22 18 15.445 18 15.697Z" stroke="white" stroke-miterlimit="10"></path>
                                            </svg></a></li>
                                            <li><a href="skype:kishan-mehta?chat" aria-label="Skype"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.40361 1.57272L6.99986 2.06603C7.06932 2.12288 7.15 2.16442 7.23662 2.18792C7.32325 2.21143 7.41386 2.21639 7.50253 2.20246L7.40361 1.57272ZM1.57261 7.40371L2.20246 7.50253C2.21637 7.41387 2.21141 7.32328 2.1879 7.23668C2.16439 7.15008 2.12286 7.06941 2.06603 6.99996L1.57261 7.40371ZM9.59639 15.4273L10 14.934C9.93059 14.8771 9.84993 14.8356 9.76333 14.8121C9.67672 14.7886 9.58613 14.7836 9.49747 14.7975L9.59639 15.4273ZM15.4273 9.59639L14.7975 9.49747C14.7836 9.58613 14.7886 9.67672 14.8121 9.76333C14.8356 9.84993 14.8771 9.93059 14.934 10L15.4273 9.59639ZM7.80736 1.0794C6.95406 0.380068 5.88451 -0.00143633 4.78125 4.0638e-06V1.275C5.59016 1.27353 6.37444 1.55315 6.99996 2.06603L7.80736 1.0794ZM4.78125 4.0638e-06C2.14062 4.0638e-06 4.18418e-06 2.14062 4.18418e-06 4.78125H1.275C1.275 2.84485 2.84485 1.275 4.78125 1.275V4.0638e-06ZM4.18418e-06 4.78125C-0.00145735 5.88449 0.380008 6.95404 1.07929 7.80736L2.06603 6.99986C1.55317 6.37436 1.27355 5.59012 1.275 4.78125H4.18418e-06ZM2.125 8.5C2.125 8.16021 2.15146 7.82712 2.20246 7.50253L0.942972 7.30479C0.88098 7.70018 0.849897 8.09979 0.850004 8.5H2.125ZM8.5 14.875C4.9792 14.875 2.125 12.0208 2.125 8.5H0.850004C0.850004 12.7249 4.27508 16.15 8.5 16.15V14.875ZM9.49747 14.7975C9.17288 14.8484 8.83979 14.875 8.5 14.875V16.15C8.90619 16.15 9.30548 16.1182 9.69521 16.057L9.49747 14.7975ZM9.19264 15.9207C10.046 16.62 11.1155 17.0015 12.2187 17V15.725C11.4099 15.7264 10.6256 15.4468 10 14.934L9.19264 15.9207ZM12.2187 17C14.8594 17 17 14.8594 17 12.2187H15.725C15.725 14.1552 14.1552 15.725 12.2187 15.725V17ZM17 12.2187C17.0015 11.1155 16.62 10.046 15.9207 9.19264L14.934 10C15.4468 10.6256 15.7264 11.4099 15.725 12.2187H17ZM14.875 8.5C14.875 8.83979 14.8484 9.17288 14.7975 9.49747L16.057 9.69521C16.1182 9.30548 16.15 8.90619 16.15 8.5H14.875ZM8.5 2.125C12.0208 2.125 14.875 4.9792 14.875 8.5H16.15C16.15 4.27508 12.7249 0.850004 8.5 0.850004V2.125ZM7.50253 2.20246C7.83249 2.15071 8.166 2.12488 8.5 2.125V0.850004C8.09381 0.850004 7.69463 0.881772 7.30469 0.942972L7.50253 2.20246Z" fill="white"></path>
                                                <path d="M10.5283 5.50112C10.5283 5.50112 9.71702 4.88721 8.49993 4.88721C7.6886 4.88721 6.26868 4.88721 6.26868 6.49275C6.26868 8.49971 10.7312 8.49971 10.7312 10.5068C10.7312 12.1122 9.31125 12.1122 8.49993 12.1122C7.28294 12.1122 6.47161 11.4983 6.47161 11.4983" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



<Freelancing />
    <section id="company_info_number" class="company-info-number section-spacing">
        <div class="container">
            <div class="section-head-part">
               <h3 class="title h5">Numbers Speaks Everything</h3>
            </div>
            <div class="row">
                <div class="col-md-3 company-info-list-main">
                    <div class="company-info-list">
                        <span class="number h1">200 +</span>
                        <span class="company-info-label large-text">Shopify Projects Empowered</span>
                    </div>
                </div>
                <div class="col-md-3 company-info-list-main">
                    <div class="company-info-list">
                        <span class="number h1">38 +</span>
                        <span class="company-info-label large-text">Global Ventures Served</span>
                    </div>
                </div>
                <div class="col-md-3 company-info-list-main">
                    <div class="company-info-list">
                        <span class="number h1">8 +</span>
                        <span class="company-info-label large-text">Years of Expertise</span>
                    </div>
                </div>
                <div class="col-md-3 company-info-list-main">
                    <div class="company-info-list">
                        <span class="number h1">70 +</span>
                        <span class="company-info-label large-text">Best Tech-sassy Professionals</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
       <Faq />
       <LetDiscuss />
    { Freequotes && <Freequote closeModal={closeform} />}
    </div >
  )
}

export default Shopifyplans
