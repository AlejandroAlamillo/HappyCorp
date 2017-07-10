<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="t05-404.aspx.cs" Inherits="HappyCorp.templates.t05_404" %>

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

                    <div class="box-12 div-404 tc ">
                        <h1>404</h1>
                        <h2>Opps!! Looks like somthing went wrong</h2>
                        <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
                     </div>
                     <div class="box-12 tc mt20">
                         <div class="box-3"><div class="inner"></div></div>
                            <div class="box-2">
                            <a href="#"class="btn-404">GO HOME</a>
                                </div>
                            <div class="box-1 box-mobile-12 or-404 ">
                                 <p>OR</p>
                            </div>
                           <div class="box-3 search-404">
                                 <!--#include virtual="/statics/content/impulses/impulseSearch.html"-->   
                            </div>
                         <div class="box-3"></div>
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
