<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="t07-single-service.aspx.cs" Inherits="HappyCorp.templates.t07_single_service" %>

<!DOCTYPE html>

<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Home</title>
    <!--#include virtual="/statics/master/html/headGraph.html"-->
</head>
<body>
    <!--#include virtual="/statics/master/header/header.html"-->

    <!--- Banner Tittle -->
    <!--#include virtual="/statics/content/components/bannerTittle.html"-->
    <!--#include virtual="/statics/master/shared/nav/bottomTittle.html"-->
    <div class="box-container mb40 ">
        <div class="inner ">
            <div class="box-3 col-left">
                <div class="inner">
                    <!--Tabs-->
                    <ul class="tabs-menu-vertical ">
                        <li class="box-12 box-tablet-12 box-mobile-12"><a href="/templates/t07-single-service.aspx" class="active">TAB 1</a>
                        </li>
                        <li class="box-12 box-tablet-12 box-mobile-12"><a href="/templates/t07-single-service.aspx">TAB 2</a>
                        </li>
                        <li class="box-12 box-tablet-12 box-mobile-12"><a href="/templates/t07-single-service.aspx">TAB 3</a>
                        </li>
                        <li class="box-12 box-tablet-12 box-mobile-12"><a href="/templates/t07-single-service.aspx">TAB 4</a>
                        </li>
                        <li class="box-12 box-tablet-12 box-mobile-12"><a href="/templates/t07-single-service.aspx">TAB 5</a>
                        </li>
                        <li class="box-12 box-tablet-12 box-mobile-12"><a href="/templates/t07-single-service.aspx">TAB 6</a>
                        </li>
                        <li class="clearfix"></li>
                    </ul>

                    <!--Mini Slider-->
                    <div class="box-12 slider-small">
                        <!--#include virtual="/statics/content/components/sliderSmall.html"-->
                        <div class="clearfix"></div>
                    </div>

                    <!--Info Box-->
                    <div class="box-12 info-box tc">
                        <div class="inner">
                            <p class="">Have any qustions</p>
                            <p class="">Call Us Now</p>
                            <h3>+034 615 122 122</h3>
                            <a href="#" style="color: #fff;">More Details</a>
                            <div class="clearfix"></div>
                        </div>
                    </div>

                    <!--Pdf Box-->
                    <div class="box-12 pdf-box tc">
                        <div class="inner">
                            <a href="#"><span class="fa fa-file-pdf-o"></span>Details Brochure.pdf</a>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>

            </div>
            <div class="box-9 col-right">

                <!--Image-->
                <div class="image box-12">
                    <div class="inner">
                        <img src="/assets/images/services-single.jpg" alt="image of singel service" />
                    </div>

                </div>

                <!--Editable Content-->
                <div class="editable-content box-12 mt20">
                    <div class="inner">
                        <h3>Lorem ipsum dolor sit</h3>
                        <p class="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa</p>

                    </div>


                </div>

                <!--Editable Content with Image-->
                <div class="editable-content box-12 mt20">
                    <div class="box-6">
                        <div class="inner">
                            <img src="/assets/images/services-img.jpg" alt="image of singel service" />
                        </div>

                    </div>
                    <div class="box-6 text-img">
                        <div class="inner">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>

                    </div>
                    <div class="clearfix"></div>

                </div>

                <!--Analyis & graph-->
                <div class="service-analysis box-12 mt20">
                    <div class="box-12">
                        <div class="inner">
                            <h3>Service Analysis <span>2016</span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>

                        </div>
                    </div>
                    <div class="box-6">
                        <!--#include virtual="/statics/content/impulses/serviceIconImpulse.html"-->
                        <!--#include virtual="/statics/content/impulses/serviceIconImpulse.html"-->
                        <!--#include virtual="/statics/content/impulses/serviceIconImpulse.html"-->
                    </div>
                    <div class="box-6">
                        <div class="inner">
                            <div class="graph-outer">
                                <iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
                                <canvas id="service-analysis-graph" style="width: 420px; display: block; height: 420px;" width="420" height="420"></canvas>
                            </div>
                        </div>
                    </div>

                </div>

                <!--Box-->
                <div class="box-12">
                    <div class="box-12 mt20 box-advisor">
                         <div class="box-7">

                                <div class="inner">
                                    <h3>Lorem ipsum dolor sit amet</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                                </div>
                            </div>
                            <div class="box-5 box-btn">
                                <div class="inner">
                                    <a href="#" class="advisor-btn">Free Consultation</a>
                                </div>

                            </div>
                       
                    </div>
                </div>

                <!--Tabs-->
                <div class="box-12 mt20">
                    <h2>Lore Ipsum</h2>
                     <!--#include virtual="/statics/content/components/tabs.html"-->
                </div>
                <div class="clearfix"></div>
            </div>
        </div>

        <div class="clearfix"></div>
    </div>


    <!---Purchase--->
    <!--#include virtual="/statics/content/components/bannerPurchase.html"-->

    <a class="button-to-top" href="#"><span class="fa fa-arrow-up"></span></a>

    <!--#include virtual="/statics/master/footer/footer.html"-->

</body>
</html>
