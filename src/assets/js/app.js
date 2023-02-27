import $ from 'jquery';

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
  // https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2

  function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }

  window.addEventListener('keydown', handleFirstTab);

  $('#languageSelect').change(function () {

    window.location.href = $(this).val();

    // TODO: shouldn't change which page you're on

  })

  // add class to nav bar on scroll

  var scrollPos = window.scrollY;
  var header = document.getElementById("header");

  function add_class_on_scroll() {
    header.classList.add("scrolling");
  }

  function remove_class_on_scroll() {
    header.classList.remove("scrolling");
  }

  window.addEventListener('scroll', function () {
    scrollPos = window.scrollY;

    if (scrollPos > 20) {
      add_class_on_scroll();
    }
    else {
      remove_class_on_scroll();
    }
  });

  AOS.init({
    // Global settings:
    disable: false,
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom'
  })

});

// https://github.com/dombrant/blurry-image-load/

const supportsCSSFilters = enableWebkit => {
  //As I mentioned in my comments, the only render engine which truly supports
  //CSS3 filter is webkit. so here we fill webkit detection arg with its default
  if (enableWebkit === undefined) {
    enableWebkit = false;
  }
  //creating an element dynamically
  const element = document.createElement("test");
  //adding filter-blur property to it
  element.style.cssText =
    (enableWebkit ? "-webkit-" : "") + "filter: blur(2px)";
  //checking whether the style is computed or ignored
  const test1 = element.style.length != 0;
  //checking for false positives of IE
  //I prefer Modernizr's smart method of browser detection
  const test2 =
    document.documentMode === undefined || document.documentMode > 9;
  //non-IE browsers, including ancient IEs
  //IE compatibility mode
  //combining test results
  return test1 && test2;
};

const images = [];

for (let image of document.querySelectorAll(".blurry-load")) {
  const currentImage = {
    element: image,
    dataLarge: image.getAttribute("data-large")
  };

  images.push(currentImage);
}
/* Make an array of objects containing each element in the DOM with the blurry-load class
and its data-large attribute value */

if (!supportsCSSFilters(true) && !supportsCSSFilters(false)) {
  /* If the browser does not support CSS filters
  Checks with and without the -webkit- prefix */
  for (let image of images) {
    image.element.src = "";
    image.element.classList.add("no-blur");
    image.element.classList.remove("blurry-load");
  }
}
/* Fallback for browsers that don't support support CSS filters (mainly IE)
If the browser doesn't support CSS filters,
Display a gray background with a shimmer gradient (see the CSS class no-blur for details) */


