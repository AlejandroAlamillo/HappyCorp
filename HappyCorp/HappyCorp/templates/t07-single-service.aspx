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
                               <ul class="tabs-menu box-3 box-tablet-2 box-mobile-2">
                                   <li class="box-12 box-tablet-12 box-mobile-12"><a class="js-tab-trigger active" href="#tab-1">TAB 1</a><div class="pick"></div>
                                   </li>
                                   <li class="box-12 box-tablet-12 box-mobile-12"><a class="js-tab-trigger" href="#tab-2">TAB 2</a><div class="pick"></div>
                                   </li>
                                   <li class="box-12 box-tablet-12 box-mobile-12"><a class="js-tab-trigger" href="#tab-3">TAB 3</a><div class="pick"></div>
                                   </li>
                                   <li class="box-12 box-tablet-12 box-mobile-12"><a class="js-tab-trigger" href="#tab-4">TAB 4</a><div class="pick"></div>
                                   </li>
                                   <li class="box-12 box-tablet-12 box-mobile-12"><a class="js-tab-trigger" href="#tab-3">TAB 5</a><div class="pick"></div>
                                   </li>
                                   <li class="box-12 box-tablet-12 box-mobile-12"><a class="js-tab-trigger" href="#tab-4">TAB 6</a><div class="pick"></div>
                                   </li>
                               </ul>
                           </div>
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