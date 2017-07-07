<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="t00-global.aspx.cs" Inherits="HappyCorp.templates.t00_global" %>

<!DOCTYPE html>

<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Home</title>
    <!--#include virtual="/statics/master/html/head.html"-->
</head>
<body>

    <h3 class="title">Simple global styles</h3>
    <h1>h1 Lorem ipsum</h1>
    <h2>h2 Lorem ipsum</h2>
    <h3>h3 Lorem ipsum</h3>
    <h4>h4 Lorem ipsum</h4>
    <h5>h5 Lorem ipsum</h5>
    <h6>h6 Lorem ipsum</h6>
    <p class="title">Parragraph Class Title</p>
    <p>Parragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p><a href="javascript:void(0);" title="link to">Link</a></p>
    <p><strong>Strong</strong> <em>Italic</em> <small>Small</small></p>
    <ul>
        <li><a href="javascript:void(0);">Lorem ipsum</a></li>
        <li><a href="javascript:void(0);">Lorem ipsum</a></li>
    </ul>
    <ol>
        <li><a href="javascript:void(0);">Lorem ipsum</a></li>
        <li><a href="javascript:void(0);">Lorem ipsum</a></li>
    </ol>
    <p>
        <input type="text" placeholder="Input text" />
    </p>
    <p>
        <input type="password" placeholder="Input password" />
    </p>
    <p>
        <input type="text" class="js-date" placeholder="Input date" />
    </p>
    <p>
        <select>
            <option>Default dropdown</option>
            <option value="1">option 1</option>
            <option value="2">option 2</option>
        </select>
    </p>
    <p>
        <select class="js-select">
            <option>Customized dropdown</option>
            <option value="1">
            Slow</optionvalue="1">
        <option value="2">Medium</option>
            <option>Fast</option>
            <option>Faster</option>
        </select>

    </p>
    <p>
        <textarea placeholder="Textarea"></textarea>
    </p>
    <p>
        <input name="timetocall" id="Radio3" type="radio" />&nbsp;
    <label for="Radio3">Radio </label>
        <br />
    </p>
    <p>
        <input name="timetocall" id="Checkbox1" type="checkbox" />&nbsp;
    <label for="Checkbox1">Checkbox </label>
    </p>
    <p><a href="javascript:void(0);" class="btn">Link as button</a> <a href="javascript:void(0);" class="btn disabled">Link as button disabled</a><a href="javascript:void(0);" class="btn active">Link as button active</a></p>
    <p>
        <input class="button" type="button" value="Button" /><input type="button" value="Button disabled" disabled="disabled" />
    </p>
    
    <p>
        <input type="submit" value="Submit" /><input type="submit" value="Submit disabled" disabled="disabled" />
    </p>
    
        <div class="inputs-wrap">
            <a class="input-wrap-item btn"><span class="fa fa-search"></span><span class="hidden">Search</span></a>
            <input class="input-wrap-item" type="text" placeholder="Username" />
        </div>
    
        <div class="inputs-wrap">
            <input class="input-wrap-item" type="text" placeholder="Username" />
            <a class="input-wrap-item btn"><span class="fa fa-search"></span><span>Search</span></a>

        </div>
    

    <p>
        <!--share trigger -->
        <span class="share-popup-wrapper">
            <a class="js-share-trigger" href="#">Share <span class="fa fa-share-alt"></span></a>
            <!--share popup -->
            <span class="share-popup">
                <!--share icon -->
                <span class="share-item"><a title="Share in twitter" href="#"><span class="fa fa-twitter"></span><span class="hidden">Twitter</span>&nbsp;<span class="share-count">0</span></a> </span>
                <!-- / share icon -->
                <!--share icon -->
                <span class="share-item"><a title="Share in facebook" href="#"><span class="fa fa-facebook"></span><span class="hidden">facebook</span>&nbsp;<span class="share-count">0</span></a> </span>
                <!-- / share icon -->
                <!--share icon -->
                <span class="share-item"><a title="Share in Google+" href="#"><span class="fa fa-google"></span><span class="hidden">Google +</span>&nbsp;<span class="share-count">0</span></a> </span>
                <!-- / share icon -->
            </span>
            <!-- / share popup -->
        </span>
        <!-- / share trigger -->
    </p>

    <!-- form notification -->
    <div class="form-notification js-form-notification info">
        <div class="icon">
            <span class="fa fa-cog fa-spin"></span>
        </div>
        <div class="copy">
            <p><strong>Loading:</strong> Please wait...</p>
        </div>
        <a class="close-notification js-close-notification" href="#"><span class="fa  fa-close"></span><span class="hidden">Close</span></a>
    </div>
    <!-- / form notification -->
    <!-- form notification -->
    <div class="form-notification js-form-notification success">
        <div class="icon">
            <span class="fa fa-check"></span>
        </div>
        <div class="copy">
            <p><strong>Success:</strong> Your enquiry has been submited</p>
        </div>
        <a class="close-notification js-close-notification" href="#"><span class="fa  fa-close"></span><span class="hidden">Close</span></a>
    </div>
    <!-- / form notification -->
    <!-- form notification -->
    <div class="form-notification js-form-notification error">
        <div class="icon">
            <span class="fa fa-close"></span>
        </div>
        <div class="copy">
            <p><strong>Error:</strong> Check your entries</p>
        </div>
        <a class="close-notification js-close-notification" href="#"><span class="fa  fa-close"></span><span class="hidden">Close</span></a>
    </div>
    <!-- / form notification -->
    <!-- form notification -->
    <div class="form-notification js-form-notification warning">
        <div class="icon">
            <span class="fa fa-exclamation-triangle"></span>
        </div>
        <div class="copy">
            <p><strong>Warning:</strong> There was an error submiting your enquiry</p>
        </div>
        <a class="close-notification js-close-notification" href="#"><span class="fa  fa-close"></span><span class="hidden">Close</span></a>
    </div>
    <!-- / form notification -->
    <!-- form notification -->
    <div class="form-notification js-form-notification info">
        <div class="icon">
            <span class="fa fa fa-exclamation-circle"></span>
        </div>
        <div class="copy">
            <p><strong>Info:</strong> There was an error submiting your enquiry</p>
        </div>
        <a class="close-notification js-close-notification" href="#"><span class="fa  fa-close"></span><span class="hidden">Close</span></a>
    </div>
    <!-- / form notification -->


    <div class="clearfix mb40"></div>

</body>
