<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="t01-home.aspx.cs" Inherits="HappyCorp.templates.t01_home" %>

<!DOCTYPE html>

<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Home</title>
    <!--#include virtual="/statics/master/html/head.html"-->
</head>
<body>
    <!--#include virtual="/statics/master/header/header.html"-->

    <div class="content">
        <div class="box-12 medium" style="background-color: white">

            <!---Slider--->
            <!--#include virtual="/statics/content/components/slider.html"-->

            <div class="box-container">
                <!---Editable Content--->
                <div class="editable-content text-component">
                    <div class="inner">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
                    </div>
                </div>

                <!--- Image 3 colum--->
                <div class="image-3col">
                    <div class="box-4 box-tablet-6 box-mobile-12">
                        <div class="inner">
                            <img class="full-width" alt="tipical office picture" src="\assets\images\services-1.jpg" />
                            <div class="under-img box-12  ">
                                <a class=" btn img-btn fr m0"><span class="fa fa-angle-right"></span></a>
                                <div class="text overflow-hidden ">
                                    <h3><a href="/">Lore Ipsum</a></h3>
                                    <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div class="box-4 box-tablet-6 box-mobile-12">
                        <div class="inner">
                            <img class="full-width" alt="tipical office picture" src="\assets\images\services-1.jpg" />
                            <div class="under-img box-12  ">
                                <a class=" btn img-btn fr m0"><span class="fa fa-angle-right"></span></a>
                                <div class="text overflow-hidden ">
                                    <h3><a href="/">Lore Ipsum</a></h3>
                                    <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div class="box-4 box-tablet-6 box-mobile-12">
                        <div class="inner">
                            <img class="full-width" alt="tipical office picture" src="\assets\images\services-1.jpg" />
                            <div class="under-img box-12  ">
                                <a class=" btn img-btn fr m0"><span class="fa fa-angle-right"></span></a>
                                <div class="text overflow-hidden ">
                                    <h3><a href="/">Lore Ipsum</a></h3>
                                    <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--- Text 2 colum--->
                <div class="text-2col box-12">
                    <div class="text-col box-6">
                        <div class=" col-inner">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, vix an natum labitur eleifend, mel amet a laorit menandri. Ei justo complectitur duo. Ei mundi solet ut soletu mel possit quo. Sea cu justo laudem.</p>
                            <p>An utinam consulatu eos, est facilis suscipiantur te, vim te iudico delenit voluptatibus. Te eos accusam repudiandae.</p>
                            <div class="profile">
                                <img class="profile-img fl" alt="photo person" src="\assets\images\spider-profile.jpg" />
                                <div class="profile-text">
                                    <h3>Alejandro Alamillo</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                            <div class="about-link">
                                <p>Want to Learn More <a href="/">About Us</a></p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="text-col box-6">
                        <div class=" col-inner">
                            <h2>Frequently Asked Question</h2>
                            <!--#include virtual="/statics/content/components/accordions.html"-->

                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>

                <div class="clearfix"></div>
            </div>

            <!--- Banner Counter -->
            <div class=" banner-counter">
                <div class="inner-counter box-container">
                    <div class="title-counter box-5">
                        <h2>We Have Great Achivment To Show!!</h2>
                    </div>
                    <div class="text-counter box-7">
                        <div class="text-counter-col box-4">
                            <h3>1780</h3>
                            <h4 class="sub-text">Completed Projects</h4>
                        </div>
                        <div class="text-counter-col box-4">
                            <h3>850</h3>
                            <h4 class="sub-text">World Wide Clients</h4>
                        </div>
                        <div class="text-counter-col box-4">
                            <h3>3260</h3>
                            <h4 class="sub-text">Arquitecture & Worker</h4>
                        </div>
                        <div class="text-counter-base box-12">
                            <h4>Need Any Floor & Paving Solution? <a href="/">Call Us Now</a> or <a href="/">Send Message</a></h4>
                        </div>
                    </div>
                </div>

            </div>

            <!--- Service -->
            <div class="box-container ">
                <div class="inner">
                    <div class="services-sect box-12 tc">
                        <h2>Our Service</h2>
                        <p>We provide all kind of business,financial & consulting services</p>


                        <!--Banking Investment-->
                        <div class="box-4 box-tablet-6 ">
                            <div class="service">
                                <div class="inner">
                                    <div class="service-ico">
                                        <span class="fa fa-briefcase"></span>
                                    </div>
                                    <h3>Banking Investment</h3>
                                    <p>Vivamus aliquet rutrusm duia variue sath Mauris ornoare tortor. Dosis lorem ipsum ample quality checker.</p>
                                    <a>View More</a><span class="fa fa-arrow-right ico-arrow"></span>
                                </div>
                            </div>
                        </div>

                        <!--Sales & Trading-->
                        <div class="box-4 box-tablet-6 ">
                            <div class="service">
                                <div class="inner">
                                    <div class="service-ico">
                                        <span class="fa fa-money"></span>
                                    </div>
                                    <h3>Sales & Trading</h3>
                                    <p>Vivamus aliquet rutrusm duia variue sath Mauris ornoare tortor. Dosis lorem ipsum ample quality checker.</p>
                                    <a>View More</a><span class="fa fa-arrow-right ico-arrow"></span>
                                </div>
                            </div>
                        </div>

                        <!--Market Research-->
                        <div class="box-4 box-tablet-6 ">
                            <div class="service">
                                <div class="inner">
                                    <div class="service-ico">
                                        <span class="fa fa-bar-chart"></span>
                                    </div>
                                    <h3>Market Research</h3>
                                    <p>Vivamus aliquet rutrusm duia variue sath Mauris ornoare tortor. Dosis lorem ipsum ample quality checker.</p>
                                    <a>View More</a><span class="fa fa-arrow-right ico-arrow"></span>
                                </div>
                            </div>
                        </div>

                        <!--Expert Advisor-->
                        <div class="box-4 box-tablet-6 ">
                            <div class="service">
                                <div class="inner">
                                    <div class="service-ico">
                                        <span class="fa fa-user"></span>
                                    </div>
                                    <h3>Expert Advisor</h3>
                                    <p>Vivamus aliquet rutrusm duia variue sath Mauris ornoare tortor. Dosis lorem ipsum ample quality checker.</p>
                                    <a>View More</a><span class="fa fa-arrow-right ico-arrow"></span>
                                </div>
                            </div>
                        </div>

                        <!--Business Consulting-->
                        <div class="box-4 box-tablet-6 ">
                            <div class="service">
                                <div class="inner">
                                    <div class="service-ico">
                                        <span class="fa fa-suitcase"></span>
                                    </div>
                                    <h3>Business Consulting</h3>
                                    <p>Vivamus aliquet rutrusm duia variue sath Mauris ornoare tortor. Dosis lorem ipsum ample quality checker.</p>
                                    <a>View More</a><span class="fa fa-arrow-right ico-arrow"></span>
                                </div>
                            </div>
                        </div>

                        <!--Google Analyze-->
                        <div class="box-4 box-tablet-6 ">
                            <div class="service">
                                <div class="inner">
                                    <div class="service-ico">
                                        <span class="fa fa-calculator"></span>
                                    </div>
                                    <h3>Google Analyze</h3>
                                    <p>Vivamus aliquet rutrusm duia variue sath Mauris ornoare tortor. Dosis lorem ipsum ample quality checker.</p>
                                    <a>View More</a><span class="fa fa-arrow-right ico-arrow"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>

            <!--- Banner Form -->
            <div class=" banner-form">
                <div class="banner-form-left js-slide-item box-6">
                   
                </div>
                <div class="banner-form-right box-6">
                    <div class="inner">
                        <form>
                            <h3>Contact us</h3>
                            <div class="box-6">
                                <div class="inner">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                            </div>

                            <div class="box-6">
                                <div class="inner">
                                    <input type="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div class="box-12">
                                <div class="inner">
                                    <p>
                                        <input type="text" placeholder="Subject" required />
                                    </p>
                                    <p>
                                        <textarea placeholder="Your Message" required></textarea>
                                    </p>
                                    <p>
                                        <input class="btn-form" type="submit" value="Send Request" />
                                    </p>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <!----Advisor---->
            <div class="box-container ">
                <div class="inner">
                    <div class="box-12">
                        <h2>Our Advisor</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <!--#include virtual="/statics/content/components/imageCarousel.html"-->
                </div>
            </div>

            <!---Purchase--->
            <div class="banner-purchase">
                <div class="box-7">
                    <h3>We Are The Best Consulting Company Ever!!</h3>
                </div>
                <div class=" banner-btn box-5">
                    <a class="purchase-btn">PURCHASE NOW</a>
                </div>
                <div class="clearfix"></div>
            </div>
    
            <!--Testimonials-->
            <div class="testimonials box-container">
                <div class="box-12">
                    
                    <div class=" inner tc">
                        <p>Testimonials</p>
                        <h2>What´s client say</h2>
                    </div>
                    <!--#include virtual="/statics/content/components/textCarousel.html"-->
                    <div class="clearfix"></div>
                </div>
                 <div class="clearfix"></div>
            </div>

            
            <div class="box-container">

                <!--Latest News--->
                <!--#include virtual="/statics/content/impulses/entriesImpulseHorizontal.html"-->

                <!--Partnest-->
                <div class="box-12 partners tc">
                    <div class="inner">
                         <div class="partner box-3 box-tablet-6 box-mobile-12">
                             <div class="inner">
                                 <img alt="partner" src="https://placeholdit.imgix.net/~text?txtsize=47&txt=208%C3%97110&w=208&h=110" />
                             </div>
                            
                         </div>
                         <div class="partner box-3 box-tablet-6 box-mobile-12">
                             <div class="inner">
                                 <img alt="partner" src="https://placeholdit.imgix.net/~text?txtsize=47&txt=208%C3%97110&w=208&h=110" />
                             </div>
                            
                         </div>
                        <div class="partner box-3 box-tablet-6 box-mobile-12">
                             <div class="inner">
                                 <img alt="partner" src="https://placeholdit.imgix.net/~text?txtsize=47&txt=208%C3%97110&w=208&h=110" />
                             </div>
                            
                         </div>
                        <div class="partner box-3 box-tablet-6 box-mobile-12">
                             <div class="inner">
                                 <img alt="partner" src="https://placeholdit.imgix.net/~text?txtsize=47&txt=208%C3%97110&w=208&h=110" />
                             </div>
                            
                         </div>
                        <div class="clearfix"></div>
                    </div>
                   
                </div>
            </div>



        </div>
    </div>


    <!--#include virtual="/statics/master/footer/footer.html"-->

</body>
</html>
