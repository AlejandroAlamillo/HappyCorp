<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="t03-team.aspx.cs" Inherits="HappyCorp.templates.t03_team" %>


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
            <!--#include virtual="/statics/content/components/wrapperOverlayImpulse.html"-->
            <div class="clearfix"></div>
        </div>
    </div>
    <!---Purchase--->
    <!--#include virtual="/statics/content/components/bannerPurchase.html"-->

    <a class="button-to-top" href="#"><span class="fa fa-arrow-up"></span></a>

    <!--#include virtual="/statics/master/footer/footer.html"-->

</body>
</html>
