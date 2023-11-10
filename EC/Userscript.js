// ==UserScript==
// @name        Feeder - Eggcave
// @namespace   Violentmonkey Scripts
// @include     https://eggcave.com/egg/*
// @include     https://eggcave.com/@*
// @exclude     https://eggcave.com/@*/shop*
// @grant       none
// @version     1.0
// @author      Wyrmbytes
// @description Autofeeder seperate from Yarolds Close It V2
// ==/UserScript==

setTimeout( function() {
$( ".button.is-info.is-large.is-fullwidth" ).trigger( "click" );
  setTimeout( function() {
    window.close();
    			}, 1000);
  }, 600);
