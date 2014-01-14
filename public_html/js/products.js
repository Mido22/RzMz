/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */

;(function ($) {
            $(function() {
                //alert("Hash Using JQuery : " + window.location.hash);
  $(window.location.hash).prev().children(".accordion-toggle").click();
                
                //$(window.location.hash).children()parent(window.location.hash).click();
            });
})(jQuery);