<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="t07-single-service.aspx.cs" Inherits="HappyCorp.templates.t07_single_service" %>

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
                       <div class="box-3 col-left">
                           <div class="inner">
                               <ul class="tabs-menu ">
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
                               </ul>
                               <div class="box 12 slider-small">
                                   <!--#include virtual="/statics/content/components/sliderSmall.html"-->
                               </div>
                              
                           </div>
                              <div class="clearfix"></div>
                    </div>
                    <div class="box-9 col-right">
                        <div class="inner">

                        </div>
                    </div>
                    
                     <div class="clearfix"></div>
                </div>
            </div>

           <!---Purchase--->
            <!--#include virtual="/statics/content/components/bannerPurchase.html"-->
    
       <a class="button-to-top" href="#"><span class="fa fa-arrow-up"></span></a>

    <!--#include virtual="/statics/master/footer/footer.html"-->

</body>
</html>