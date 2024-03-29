import $ from 'jquery';

import Swiper from 'swiper/bundle';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

// plug any additional functionality here
// import {MyModule} from './MyModule';
// Foundation.plugin(MyModule, 'MyModule');

// $(document).foundation();

$(() => {
  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    grabCursor: false,
    observer: true,
    observeParents: true,
    parallax:true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(".translation-menu").click(function() {
    console.log("tranlation click");
    $(this).toggleClass("is-open")
  });

});