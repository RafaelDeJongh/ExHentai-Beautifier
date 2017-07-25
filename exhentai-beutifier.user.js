// ExHentai Beautifier
// Rafaël De Jongh
// Copyright (c) 2017
//
// --------------------------------------------------
//
// ==UserScript==
// @version       1.0
// @editdate      25/07/2017
// @author        Rafaël De Jongh
// @namespace     http://www.rafaeldejongh.com
// @name          ExHentai Beautifier
// @require       https://code.jquery.com/jquery-3.1.1.min.js
// @include       *://exhentai.org/s/*
// @description   This Style and Script beautifies ExHentai
// ==/UserScript==
//Style
$('<style type=\"text/css\">body,html{height:100%}#i3 img,div#i1{min-height:100%}html{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*,::after,::before{-webkit-box-sizing:inherit;-moz-box-sizing:inherit;box-sizing:inherit}::after,::before{text-decoration:inherit;vertical-align:inherit;-webkit-backface-visibility:hidden}body{line-height:1;font-family:sans-serif;position:relative}#i2,.sni h1{display:none}div#i1{background:0 0;border:none;margin:0 auto 8px}#i3{height:100vh}#i3 a{width:100%;height:calc(100% - 23px);display:flex}#i3 img{width:auto!important;height:auto!important;max-height:100%!important;margin:auto!important;max-width:100%!important;min-width:100%;object-fit:contain}::-webkit-scrollbar{width:12px;height:12px;background-color:#34353b}::-webkit-scrollbar-corner{background-color:#34353b}::-webkit-scrollbar-track{background-color:#34353b}::-webkit-scrollbar-thumb{background:#4f535b}::-webkit-scrollbar:horizontal{height:12px}::selection{color:#fff;background-color:#4f535b}::-moz-selection{color:#fff;background-color:#4f535b}</style>').appendTo("head");
//Script
var backToGallery = $(".sb a").attr("href");
$(document).on("click","#i3 a",function(){
    if($("#i4 .sn div span:last-of-type").html() == $("#i4 .sn div span:first-of-type").html()){
        window.location = backToGallery;
    }
});
