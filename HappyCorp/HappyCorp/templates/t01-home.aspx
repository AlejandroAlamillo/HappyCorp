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

                <!--- Entries 3 column--->

               <!--#include virtual="/statics/content/components/wrapperEntryImpulse.html"-->

                <!--- Text 2 colum--->
                <!--#include virtual="/statics/content/components/component2Column.html"-->

                <div class="clearfix"></div>
            </div>

            <!--- Banner Counter -->
            <!--#include virtual="/statics/content/components/bannerCounter.html"-->

            <!--- Wrapper Impulse -->
            <div class="box-container ">
                <div class="inner">
                      <!--#include virtual="/statics/content/components/wrapperImpulse.html"-->
                    <div class="clearfix"></div>
                </div>
            </div>

            <!--- Banner Form -->
            <!--#include virtual="/statics/content/components/bannerForm.html"-->

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
            <!--#include virtual="/statics/content/components/bannerPurchase.html"-->
    
            <!--Testimonials-->
            <div class="testimonials box-container">
                <div class="box-12">
                    
                    <div class=" inner tc">
                        <p>Testimonials</p>
                        <h3 class="h2">What´s client say</h3>
                    </div>
                    <!--#include virtual="/statics/content/components/textCarousel.html"-->
                    <div class="clearfix"></div>
                </div>
                
            </div>

            
            <div class="box-container">

                <!--Latest News--->
                <!--#include virtual="/statics/content/impulses/entriesImpulseHorizontal.html"-->

                <!--Partnest-->
                <!--#include virtual="/statics/content/components/clients.html"-->
            </div>

            

        </div>
    </div>

    <a class="button-to-top" href="#"><span class="fa fa-arrow-up"></span></a>

    <!--#include virtual="/statics/master/footer/footer.html"-->

</body>
</html>
