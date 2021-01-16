import $ from 'jquery';
// import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery';
// import { GetYoDigits } from 'foundation-sites/js/foundation.core.utils';
import { Plugin } from 'foundation-sites/js/foundation.core.plugin';

class MyModule extends Plugin {

    _setup(element, options) {

        Swiper.use([Navigation, Autoplay]);

        this.$element = element;
        this.options = $.extend({}, MyModule.defaults, this.$element.data(), options);
        this.className = 'MyModule'; // ie9 back compat

        // init widget
        this._init();
    }

    _init() {
      var that = this;
      // something to init
    }

}

MyModule.defaults = {

}

export {MyModule};
