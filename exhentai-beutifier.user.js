// ExHentai Beautifier
// Rafaël De Jongh
// Copyright (c) 2017
//
// --------------------------------------------------
//
// ==UserScript==
// @version       1.1
// @editdate      04/08/2017
// @author        Rafaël De Jongh
// @namespace     https://www.rafaeldejongh.com
// @name          ExHentai Beautifier
// @require       https://code.jquery.com/jquery-3.1.1.min.js
// @include       *://exhentai.org/*
// @description   This Style and Script beautifies ExHentai
// ==/UserScript==
//Style
$('<style type=\"text/css\">body,html{height:100%;box-sizing:border-box;padding:0}#i3 img,div#i1{min-height:100%}*,::after,::before{-webkit-box-sizing:inherit;-moz-box-sizing:inherit;box-sizing:inherit}::after,::before{text-decoration:inherit;vertical-align:inherit;-webkit-backface-visibility:hidden}body{line-height:1;font-family:sans-serif;position:relative}div.ido,div.itg{min-width:0;width:100%}a{transition:color .3s ease}div.id3{transition:opacity .3s ease}div.id1,div.id2{box-sizing:border-box}div.ido{padding:5px 0;border:0}div.itg{padding:0}div.id1{width:20%;border:none;padding:0;margin:0;border-radius:0;min-height:335px;position:relative}div.id3,div.id3 img{border-radius:0;min-height:335px}div.id2,div.id4{position:absolute;width:100%;background-color:rgba(79,83,91,.8)}div.id3{width:100%;opacity:.9}div.id1:hover div.id3{opacity:1}div.id3 a{display:inline-block;width:100%}div.id3 img{width:100%;object-fit:cover}div.id2{z-index:9;display:flex;align-items:center;justify-content:center;padding:8px 7px;height:auto!important}div.id4{bottom:0;height:30px}div.id41,div.id42{position:relative;float:left}div.id41{top:8px;left:5px}div.id42{left:3px;top:10px}div.id43,div.id44{position:relative;top:4px}div.id43{float:left;left:5px}div.id44{left:0;float:right;width:20px}div.gm,div#gdt{box-sizing:content-box}#i2,.sni h1{display:none}div#i1{background:0 0;border:none;margin:0 auto 8px}#i3{height:100vh}#i3 a{width:100%;height:calc(100% - 23px);display:flex}#i3 img{width:auto!important;height:auto!important;max-height:100%!important;margin:auto!important;max-width:100%!important;min-width:100%;object-fit:contain}::-webkit-scrollbar{width:12px;height:12px;background-color:#34353b}::-webkit-scrollbar-corner{background-color:#34353b}::-webkit-scrollbar-track{background-color:#34353b}::-webkit-scrollbar-thumb{background:#4f535b}::-webkit-scrollbar:horizontal{height:12px}::selection{color:#fff;background-color:#4f535b}::-moz-selection{color:#fff;background-color:#4f535b}@media screen and (max-width:900px){div.id1{width:25%}}@media screen and (max-width:750px){div.id1{width:33.333%}}@media screen and (max-width:550px){div.id1{width:50%}}@media screen and (max-width:400px){div.id1,div.id3{height:600px!important}div.id1{width:100%}div.id3 img{height:600px}}</style>').appendTo("head");//Script
$(document).on("click","#i3 a",function(){
    if($("#i4 .sn div span:last-of-type").html() == $("#i4 .sn div span:first-of-type").html()){
        window.location = $(".sb a").attr("href");
    }
});
