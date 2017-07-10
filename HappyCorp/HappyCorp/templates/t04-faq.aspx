<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="t04-faq.aspx.cs" Inherits="HappyCorp.templates.t04_faq" %>
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

                    <div class="box-12 faq">
                        <div class="box-9">
                            <h2 >Frequently Asked Questions</h2>
                            <p>Lorem ipsum dolor sit amet, vix natum labitur eleifend, mel ad amet laoreet menandri.</p>
                        </div>
                        <div class="box-3 faq-search">
                            <div class="inner">
                                <!--#include virtual="/statics/content/impulses/impulseSearch.html"-->   
                            </div>
                             
                        </div>
                    </div>
                    <div class="box-12">
                        <div class="box-6 mt20">
                            <div class="inner">
                                  <!--#include virtual="/statics/content/components/accordions.html"-->   
                            </div>
                          
                        </div>
                       <div class="box-6 mt20">
                            <div class="inner">
                                  <!--#include virtual="/statics/content/components/accordions.html"-->   
                            </div>
                          
                        </div>
                       
                    </div>
                     <!--#include virtual="/statics/content/components/formFAQ.html"-->   
                     <div class="clearfix"></div>
                </div>
            </div>

           <!---Purchase--->
            <!--#include virtual="/statics/content/components/bannerPurchase.html"-->
    
       <a class="button-to-top" href="#"><span class="fa fa-arrow-up"></span></a>

    <!--#include virtual="/statics/master/footer/footer.html"-->

</body>
</html>

