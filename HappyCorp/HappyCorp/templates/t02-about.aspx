<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="t02-about.aspx.cs" Inherits="HappyCorp.templates.t02_about" %>


<!DOCTYPE html>

<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Home</title>
    <!--#include virtual="/statics/master/html/head.html"-->
</head>
<body>
    <!--#include virtual="/statics/master/header/header.html"-->

    <!--- Banner Tittle -->
    <!--#include virtual="/statics/content/components/bannerTittle.html"-->
    <!--#include virtual="/statics/master/shared/nav/bottomTittle.html"-->
    <div class="box-container mb40 ">
        <div class="inner ">
            <div class="section-image ">
                <img src="/assets/images/about-image.jpg" alt="image of office team" />

            </div>

            <!--#include virtual="/statics/content/components/tabsVertical.html"-->
        </div>
    </div>

    <!--- Banner Counter -->
    <!--#include virtual="/statics/content/components/bannerCounter.html"-->

    <!----Advisor---->
    <div class=" advisor box-container ">
        <div class="inner">
            <div class="box-12">
                <h2>Our Advisor</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <!--#include virtual="/statics/content/components/imageCarousel.html"-->
        </div>
    </div>

    <!--- Wrapper Impulse -->
    <div class="box-container mb20 mt20 ">
        <div class="inner">
            <!--#include virtual="/statics/content/components/wrapperImpulse1Line.html"-->
            <div class="clearfix"></div>
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


        <!--Partnest-->
        <!--#include virtual="/statics/content/components/clients.html"-->
        <div class="clearfix"></div>
    </div>

    <a class="button-to-top" href="#"><span class="fa fa-arrow-up"></span></a>

    <!--#include virtual="/statics/master/footer/footer.html"-->

</body>
</html>
