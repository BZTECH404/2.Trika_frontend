import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../Layout/Footer'
import Marquee from '../Marquee/Marquee';
import Carsoule from './Carsoule';
import Motivation from './Motivation';
import Service from './Service';

function Home() {




  const navigate = useNavigate();

  const reloadBlogPage = () => {
    navigate("/blog");
    window.scrollTo(0, 0);
    window.location.reload();
  }
  return (
    <div>
      <div className="page-wrapper">
        {/* Header Main Area */}
        <Carsoule />
        {/* Header Main Area End Here */}
        {/* page content */}
        <div className="page-content pbmit-bg-color-light">
          {/* Marquee */}
          <Marquee />
          {/* Marquee end */}
          {/* Tab Start */}
          <Motivation />
          {/* Tab end */}
          {/* Ihbox Start */}
          <section className="ihbox-section_three">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <div className="pbmit-ihbox-style-7">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-icon-wrapper d-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose" />
                            </div>
                          </div>
                        </div>
                        <h2 className="pbmit-element-title">13+ years experience</h2>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <div className="pbmit-heading-desc">
                          My 13-year yoga journey has been a profound voyage of self-discovery, from healing to teaching,
                          marked by growth, evolution, and unwavering commitment.
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-box-number">01</div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="pbmit-ihbox-style-7">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-icon-wrapper d-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-4" />
                            </div>
                          </div>
                        </div>
                        <h2 className="pbmit-element-title">Personal approach</h2>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <div className="pbmit-heading-desc">
                          Empowering you through personalized solutions, we tailor our services to suit your unique needs, ensuring every interaction is meaningful and impactful.
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-box-number">02</div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="pbmit-ihbox-style-7">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-icon-wrapper d-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-9" />
                            </div>
                          </div>
                        </div>
                        <h2 className="pbmit-element-title">Balancing Body, Mind, and Spirit.</h2>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <div className="pbmit-heading-desc">
                        With over 2,685 hours of teaching experience, we bring a wealth of
                         expertise and dedication to every yoga session, 
                        guiding you towards profound transformations and holistic well-being.
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-box-number">03</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Ihbox End */}
          {/* Service Start */}
          <Service />
          {/* Service End */}
          {/* Counter Start */}
          {/* <section className="counter_three">
            <div className="container">
              <div className="counter-three_bg">
                <div className="row g-0">
                  <div className="col-md-3 pbmit-col_1">
                    <div className="ihbox-style_8">
                      <div className="pbmit-ihbox-style-8">
                        <div className="pbmit-ihbox-headingicon">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                              <img
                                src="images/homepage-3/ihbox/icon-img.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="pbmit-content-wrapper">
                            <h2 className="pbmit-element-title">
                              More than <span>9.5k members</span> are connected with
                              us
                            </h2>
                            <div className="pbmit-ihbox-btn">
                              <a href="about-us.html">
                                <span className="pbmit-button-text">
                                  sign up now
                                </span>
                                <span className="pbmit-button-icon-wrapper">
                                  <span className="pbmit-button-icon">
                                    <i className="pbmit-base-icon-black-arrow-1" />
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9 pbmit-col_2">
                    <div className="counter-three_mainbox">
                      <div className="pbmit-heading animation-style2">
                        <h5 className="pbmit-title">The proof is in the numbers</h5>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="pbminfotech-ele-fid-style-3">
                            <div className="pbmit-fld-contents">
                              <div
                                className="pbmit-circle-outer"
                                data-digit={85}
                                data-fill="#448c74"
                                data-emptyfill="#e5c466"
                                data-before="<sup>%</sup>"
                                data-after="<sup>%</sup>"
                                data-thickness={3}
                                data-size={150}
                              >
                                <div className="pbmit-circle">
                                  <div className="pbmit-fid-inner">
                                    <span
                                      className="pbmit-number-rotate numinate"
                                      data-appear-animation="animateDigits"
                                      data-from={0}
                                      data-to={85}
                                      data-interval={5}
                                      data-before=""
                                      data-before-style=""
                                      data-after=""
                                      data-after-style=""
                                    >
                                      85
                                    </span>
                                    <span className="pbmit-fid">
                                      <sup>%</sup>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-fid-sub">
                                <div className="pbmit-heading-desc">
                                  Sed risus augue commodo ornare felis non eleifend.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="pbminfotech-ele-fid-style-3">
                            <div className="pbmit-fld-contents">
                              <div
                                className="pbmit-circle-outer"
                                data-digit={90}
                                data-fill="#448c74"
                                data-emptyfill="#e5c466"
                                data-before="<sup>%</sup>"
                                data-after="<sup>%</sup>"
                                data-thickness={3}
                                data-size={150}
                              >
                                <div className="pbmit-circle">
                                  <div className="pbmit-fid-inner">
                                    <span
                                      className="pbmit-number-rotate numinate"
                                      data-appear-animation="animateDigits"
                                      data-from={0}
                                      data-to={90}
                                      data-interval={5}
                                      data-before=""
                                      data-before-style=""
                                      data-after=""
                                      data-after-style=""
                                    >
                                      90
                                    </span>
                                    <span className="pbmit-fid">
                                      <sup>%</sup>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-fid-sub">
                                <div className="pbmit-heading-desc">
                                  It uses a dictionary of over 200 Latin words,
                                  combined.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="pbminfotech-ele-fid-style-3">
                            <div className="pbmit-fld-contents">
                              <div
                                className="pbmit-circle-outer"
                                data-digit={70}
                                data-fill="#448c74"
                                data-emptyfill="#e5c466"
                                data-before="<sup>%</sup>"
                                data-after="<sup>%</sup>"
                                data-thickness={3}
                                data-size={150}
                              >
                                <div className="pbmit-circle">
                                  <div className="pbmit-fid-inner">
                                    <span
                                      className="pbmit-number-rotate numinate"
                                      data-appear-animation="animateDigits"
                                      data-from={0}
                                      data-to={70}
                                      data-interval={5}
                                      data-before=""
                                      data-before-style=""
                                      data-after=""
                                      data-after-style=""
                                    >
                                      70
                                    </span>
                                    <span className="pbmit-fid">
                                      <sup>%</sup>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-fid-sub">
                                <div className="pbmit-heading-desc">
                                  Nam libero tempore, cum soluta nobis est eligendi.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* Counter End */}
          {/* Pricing Start */}
          {/* <section className="section-xl"> */}
          {/* <div className="container">
              <div className="pbmit-heading-subheading animation-style2">
                <h4 className="pbmit-subtitle">my price</h4>
                <h2 className="pbmit-title">Choose a subscription</h2>
              </div>
              <div className="pbminfotech-ptable-style-1">
                <div className="pbmit-ptable-cols row">
                  <div className="pbmit-ptable-col col-lg-4 col-md-6">
                    <div className="pbmit-pricing-table-box">
                      <div className="pbmit-head-wrap">
                        <div className="pbminfotech-ptable-desc">Individual</div>
                        <h3 className="pbminfotech-ptable-heading">Light Yoga</h3>
                        <div className="pbminfotech-sep" />
                        <div className="pbmit-price-wrapper">
                          <div className="pbmit-head-icon-wrap">
                            <div className="pbmit-ptable-icon">
                              <div className="pbmit-ptable-icon-wrapper" />
                            </div>
                          </div>
                          <div className="pbmit-ptable-price-w">
                            <div className="pbminfotech-ptable-symbol">$</div>
                            <div className="pbminfotech-ptable-price">12</div>
                          </div>
                          <div className="pbminfotech-ptable-frequency">
                            / Month
                          </div>
                        </div>
                      </div>
                      <div className="pbmit-ptable-inner">
                        <div className="pbmit-ptable-lines-w">
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> 2 hours personal training
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="" /> Video &amp; audio content
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> 1 month support
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="" /> Lifetime access
                          </div>
                        </div>
                        <div className="pbminfotech-ptable-btn">
                          <a href="#" className="pbmit-btn pbmit-btn-outline">
                            <span className="pbmit-button-text">Purchase now</span>
                            <span className="pbmit-button-icon-wrapper">
                              <span className="pbmit-button-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22.76"
                                  height="22.76"
                                  viewBox="0 0 22.76 22.76"
                                >
                                  <title>black-arrow</title>
                                  <path
                                    d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1"
                                    transform="translate(-0.29 -0.29)"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={2}
                                  />
                                  <path
                                    d="M22.34,1a14.67,14.67,0,0,0,0,20.75"
                                    transform="translate(-0.29 -0.29)"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={2}
                                  />
                                  <path
                                    d="M22.34,1,1,22.34"
                                    transform="translate(-0.29 -0.29)"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={2}
                                  />
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="pbmit-feature-wrap" />
                    </div>
                  </div>
                  <div className="pbmit-pricing-table-featured-col pbmit-ptable-col col-lg-4 col-md-6">
                    <div className="pbmit-pricing-table-box">
                      <div className="pbmit-head-wrap">
                        <div className="pbminfotech-ptable-desc">Premium plan</div>
                        <h3 className="pbminfotech-ptable-heading">
                          Deep Meditaion
                        </h3>
                        <div className="pbminfotech-sep" />
                        <div className="pbmit-price-wrapper">
                          <div className="pbmit-head-icon-wrap">
                            <div className="pbmit-ptable-icon">
                              <div className="pbmit-ptable-icon-wrapper" />
                            </div>
                          </div>
                          <div className="pbmit-ptable-price-w">
                            <div className="pbminfotech-ptable-symbol">$</div>
                            <div className="pbminfotech-ptable-price">45</div>
                          </div>
                          <div className="pbminfotech-ptable-frequency">
                            / Month
                          </div>
                        </div>
                      </div>
                      <div className="pbmit-ptable-inner">
                        <div className="pbmit-ptable-lines-w">
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> 2 hours personal training
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> Video &amp; audio content
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> 1 month support
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="" /> Lifetime access
                          </div>
                        </div>
                        <div className="pbminfotech-ptable-btn">
                          <a href="#" className="pbmit-btn pbmit-btn-outline">
                            <span className="pbmit-button-text">Purchase now</span>
                            <span className="pbmit-button-icon-wrapper">
                              <span className="pbmit-button-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22.76"
                                  height="22.76"
                                  viewBox="0 0 22.76 22.76"
                                >
                                  <title>black-arrow</title>
                                  <path
                                    d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1"
                                    transform="translate(-0.29 -0.29)"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={2}
                                  />
                                  <path
                                    d="M22.34,1a14.67,14.67,0,0,0,0,20.75"
                                    transform="translate(-0.29 -0.29)"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={2}
                                  />
                                  <path
                                    d="M22.34,1,1,22.34"
                                    transform="translate(-0.29 -0.29)"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={2}
                                  />
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="pbmit-feature-wrap">
                        <div className="pbmit-ptablebox-featured-w" />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ptable-col col-lg-4 col-md-6">
                    <div className="pbmit-pricing-table-box">
                      <div className="pbmit-head-wrap">
                        <div className="pbminfotech-ptable-desc">Advanced plan</div>
                        <h3 className="pbminfotech-ptable-heading">Full Complex</h3>
                        <div className="pbminfotech-sep" />
                        <div className="pbmit-price-wrapper">
                          <div className="pbmit-head-icon-wrap">
                            <div className="pbmit-ptable-icon">
                              <div className="pbmit-ptable-icon-wrapper" />
                            </div>
                          </div>
                          <div className="pbmit-ptable-price-w">
                            <div className="pbminfotech-ptable-symbol">$</div>
                            <div className="pbminfotech-ptable-price">99</div>
                          </div>
                          <div className="pbminfotech-ptable-frequency">
                            / Month
                          </div>
                        </div>
                      </div>
                      <div className="pbmit-ptable-inner">
                        <div className="pbmit-ptable-lines-w">
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> 2 hours personal training
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> Video &amp; audio content
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> 1 month support
                          </div>
                          <div className="pbmit-ptable-line">
                            <i className="ti-check" /> Lifetime access
                          </div>
                        </div>
                        <div className="pbminfotech-ptable-btn">
                          <a href="#" className="pbmit-btn pbmit-btn-outline">
                            <span className="pbmit-button-text">Purchase now</span>
                            <span className="pbmit-button-icon-wrapper">
                              <span className="pbmit-button-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22.76"
                                  height="22.76"
                                  viewBox="0 0 22.76 22.76"
                                >
                                  <title>black-arrow</title>
                                  <path
                                    d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1"
                                    transform="translate(-0.29 -0.29)"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={2}
                                  />
                                  <path
                                    d="M22.34,1a14.67,14.67,0,0,0,0,20.75"
                                    transform="translate(-0.29 -0.29)"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={2}
                                  />
                                  <path
                                    d="M22.34,1,1,22.34"
                                    transform="translate(-0.29 -0.29)"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth={2}
                                  />
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="pbmit-feature-wrap" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          {/* </section> */}
          {/* Pricing End */}
          {/* Testimonial Start */}

          {/* Testimonial End */}
          {/* Blog Start */}
          <section className="section-xl">
            <div className="container">
              <div className="position-relative">
                <div className="pbmit-heading-subheading animation-style2">
                  <h4 className="pbmit-subtitle">blogs</h4>
                  <h2 className="pbmit-title">Recent blogs</h2>
                </div>
                <div className="blog-two_arrow swiper-btn-custom d-flex flex-row-reverse" />
              </div>
              <div
                className="swiper-slider"
                data-arrows-class="blog-two_arrow"
                data-autoplay="false"
                data-loop="false"
                data-dots="false"
                data-arrows="true"
                data-columns={2}
                data-margin={30}
                data-effect="slide"
              >
                <div className="swiper-wrapper">
                  {/* Slide1 */}
                  <article className="pbmit-blog-style-2 swiper-slide">
                    <div className="post-item d-flex">
                      <div className="pbmit-featured-container">
                        <div
                          className="pbmit-bg-image"
                          style={{
                            backgroundImage:
                              "url(https://res.cloudinary.com/dsj9t6adh/image/upload/v1709647115/e34h7g4nhm5arhjqlda2.jpg)"
                          }}
                        >
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-wrap">
                        <div className="pbminfotech-box-content">
                          <div className="pbmit-date-admin-wraper d-flex align-items-center">
                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                              <div className="pbmit-meta-category">
                                <a href="blog-classic.html" rel="category tag">
                                  Motivation
                                </a>
                              </div>
                            </div>
                            <div className="pbmit-meta-date pbmit-meta-line">
                              <span className="pbmit-post-date">
                                August 29. 2023
                              </span>
                            </div>
                          </div>
                          <h3 className="pbmit-post-title">
                            <a>
                              Which Yoga Class Is Best for Beginners?
                            </a>
                          </h3>
                          <div className="pbminfotech-box-desc">
                            We It’s time to roll out your yoga mat and discovers the
                            combinations of physically…
                          </div>
                        </div>
                        <a className="pbmit-blog-btn" onClick={reloadBlogPage}>
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/* Slide2 */}
                  <article className="pbmit-blog-style-2 swiper-slide">
                    <div className="post-item d-flex">
                      <div className="pbmit-featured-container">
                        <div
                          className="pbmit-bg-image"
                          style={{
                            backgroundImage:
                              "url(images/homepage-2/blog/blog-img-02.jpg)"
                          }}
                        >
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-wrap">
                        <div className="pbminfotech-box-content">
                          <div className="pbmit-date-admin-wraper d-flex align-items-center">
                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                              <div className="pbmit-meta-category">
                                <a onClick={reloadBlogPage}>
                                  Blog
                                </a>
                              </div>
                            </div>
                            <div className="pbmit-meta-date pbmit-meta-line">
                              <span className="pbmit-post-date">
                                August 29. 2023
                              </span>
                            </div>
                          </div>
                          <h3 className="pbmit-post-title">
                            <a href="blog-details.html">
                              Spiritual Cleansing: 14 Rituals to Detox Your Soul
                            </a>
                          </h3>
                          <div className="pbminfotech-box-desc">
                            We It’s time to roll out your yoga mat and discovers the
                            combinations of physically…
                          </div>
                        </div>
                        <a className="pbmit-blog-btn" href="blog-details.html">
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/* Slide3 */}
                  <article className="pbmit-blog-style-2 swiper-slide">
                    <div className="post-item d-flex">
                      <div className="pbmit-featured-container">
                        <div
                          className="pbmit-bg-image"
                          style={{
                            backgroundImage:
                              "url(images/homepage-2/blog/blog-img-03.jpg)"
                          }}
                        >
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-wrap">
                        <div className="pbminfotech-box-content">
                          <div className="pbmit-date-admin-wraper d-flex align-items-center">
                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                              <div className="pbmit-meta-category">
                                <a href="blog-classic.html" rel="category tag">
                                  fitness
                                </a>
                              </div>
                            </div>
                            <div className="pbmit-meta-date pbmit-meta-line">
                              <span className="pbmit-post-date">
                                August 29. 2023
                              </span>
                            </div>
                          </div>
                          <h3 className="pbmit-post-title">
                            <a href="blog-details.html">
                              Spiritual Awakening: Definition, Signs and Symptoms
                            </a>
                          </h3>
                          <div className="pbminfotech-box-desc">
                            We It’s time to roll out your yoga mat and discovers the
                            combinations of physically…
                          </div>
                        </div>
                        <a className="pbmit-blog-btn" href="blog-details.html">
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/* Slide4 */}
                  <article className="pbmit-blog-style-2 swiper-slide">
                    <div className="post-item d-flex">
                      <div className="pbmit-featured-container">
                        <div
                          className="pbmit-bg-image"
                          style={{
                            backgroundImage:
                              "url(images/homepage-2/blog/blog-img-04.jpg)"
                          }}
                        >
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-wrap">
                        <div className="pbminfotech-box-content">
                          <div className="pbmit-date-admin-wraper d-flex align-items-center">
                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                              <div className="pbmit-meta-category">
                                <a href="blog-classic.html" rel="category tag">
                                  Inspiration
                                </a>
                              </div>
                            </div>
                            <div className="pbmit-meta-date pbmit-meta-line">
                              <span className="pbmit-post-date">
                                August 29. 2023
                              </span>
                            </div>
                          </div>
                          <h3 className="pbmit-post-title">
                            <a>
                              Yoga and Astrology: Find the Best Practices for Your
                              Sign
                            </a>
                          </h3>
                          <div className="pbminfotech-box-desc">
                            We It’s time to roll out your yoga mat and discovers the
                            combinations of physically…
                          </div>
                        </div>
                        <a className="pbmit-blog-btn" href="blog-details.html">
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/* Slide5 */}
                  <article className="pbmit-blog-style-2 swiper-slide">
                    <div className="post-item d-flex">
                      <div className="pbmit-featured-container">
                        <div
                          className="pbmit-bg-image"
                          style={{
                            backgroundImage:
                              "url(images/homepage-2/blog/blog-img-05.jpg)"
                          }}
                        >
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-wrap">
                        <div className="pbminfotech-box-content">
                          <div className="pbmit-date-admin-wraper d-flex align-items-center">
                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                              <div className="pbmit-meta-category">
                                <a href="blog-classic.html" rel="category tag">
                                  Motivation
                                </a>
                              </div>
                            </div>
                            <div className="pbmit-meta-date pbmit-meta-line">
                              <span className="pbmit-post-date">
                                August 29. 2023
                              </span>
                            </div>
                          </div>
                          <h3 className="pbmit-post-title">
                            <a href="blog-details.html">
                              Puppy Yoga? What Is It and What Are the Benefits?
                            </a>
                          </h3>
                          <div className="pbminfotech-box-desc">
                            We It’s time to roll out your yoga mat and discovers the
                            combinations of physically…
                          </div>
                        </div>
                        <a className="pbmit-blog-btn" href="blog-details.html">
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/* Slide6 */}
                  <article className="pbmit-blog-style-2 swiper-slide">
                    <div className="post-item d-flex">
                      <div className="pbmit-featured-container">
                        <div
                          className="pbmit-bg-image"
                          style={{
                            backgroundImage:
                              "url(images/homepage-2/blog/blog-img-06.jpg)"
                          }}
                        >
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-wrap">
                        <div className="pbminfotech-box-content">
                          <div className="pbmit-date-admin-wraper d-flex align-items-center">
                            <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                              <div className="pbmit-meta-category">
                                <a href="blog-classic.html" rel="category tag">
                                  Meditation
                                </a>
                              </div>
                            </div>
                            <div className="pbmit-meta-date pbmit-meta-line">
                              <span className="pbmit-post-date">
                                August 29. 2023
                              </span>
                            </div>
                          </div>
                          <h3 className="pbmit-post-title">
                            <a href="blog-details.html">
                              8 Ways to Strengthen the Mind Body Connection
                            </a>
                          </h3>
                          <div className="pbminfotech-box-desc">
                            We It’s time to roll out your yoga mat and discovers the
                            combinations of physically…
                          </div>
                        </div>
                        <a className="pbmit-blog-btn" href="blog-details.html">
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          {/* Blog End */}
        </div>
        {/* page content End */}
        {/* footer */}
        <Footer />
        {/* footer End */}
      </div>
      {/* page wrapper End */}
      {/* Search Box Start Here */}
      <div className="pbmit-search-overlay">
        <div className="pbmit-icon-close">
          <svg
            className="qodef-svg--close qodef-m"
            xmlns="http://www.w3.org/2000/svg"
            width="28.163"
            height="28.163"
            viewBox="0 0 26.163 26.163"
          >
            <rect width={36} height={1} transform="translate(0.707) rotate(45)" />
            <rect
              width={36}
              height={1}
              transform="translate(0 25.456) rotate(-45)"
            />
          </svg>
        </div>
        <div className="pbmit-search-outer">
          <form className="pbmit-site-searchform">
            <input
              type="search"
              className="form-control field searchform-s"
              name="s"
              placeholder="Search …"
            />
            <button type="submit" />
          </form>
        </div>
      </div>
      {/* Search Box End Here */}
      {/* Scroll To Top */}
      <div className="pbmit-progress-wrap">
        <svg
          className="pbmit-progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  )
}

export default Home
