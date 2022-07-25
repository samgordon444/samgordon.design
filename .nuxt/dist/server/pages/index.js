exports.ids = [3,1];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=7990226e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"fixed z-50 -mt-[112px] flex w-full bg-light pt-11 pb-10 px-1 -ml-1"},[_vm._ssrNode("<ul class=\"list-none text-xl\"><li class=\"mr-5\">†</li> <li class=\"mr-12\">Sam Gordon</li></ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=7990226e&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e56ef90"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(29).default})


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=204369b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-6 lg:px-24 my-[112px] w-full"},[_c('Header'),_vm._ssrNode(" <div class=\"grid gap-12 lg:gap-24 grid-cols-1 lg:grid-cols-2\">"+(_vm._ssrList((_vm.posts.reverse()),function(post){return ("<li class=\"list-none\"><div class=\"relative\"><div class=\"absolute z-10 left-2 bottom-2 border border-dark bg-light w-16 h-16 rounded-full\"><div class=\"absolute left-1/2 top-1.5 -translate-x-1/2 text-center leading-3 text-[22px]\"><span class=\"text-lg\">№.</span><br>"+_vm._ssrEscape(_vm._s(post.number))+"</div></div> <div class=\"relative pb-[100%] w-full bg-[#ffffff]\"><img"+(_vm._ssrAttr("src",post.image))+" class=\"absolute top-1/2 -translate-y-1/2 w-full\"></div></div></li>")}))+"</div> <div class=\"pt-24\">© Sam Gordon</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=204369b0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "IndexPage",

  head() {
    return {
      script: [{
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js"
      }]
    };
  },

  async asyncData({
    $content
  }) {
    const posts = await $content().fetch();
    return {
      posts
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bdc730de"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(29).default})


/***/ })

};;
//# sourceMappingURL=index.js.map