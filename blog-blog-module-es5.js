function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"], {
  /***/
  "./src/app/blog/blog-content/blog-content.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/blog/blog-content/blog-content.component.ts ***!
    \*************************************************************/

  /*! exports provided: BlogContentComponent */

  /***/
  function srcAppBlogBlogContentBlogContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogContentComponent", function () {
      return BlogContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _shared_highlight_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/highlight.service */
    "./src/app/shared/highlight.service.ts");
    /* harmony import */


    var _meta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../meta.service */
    "./src/app/meta.service.ts");
    /* harmony import */


    var ng_navigator_share__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-navigator-share */
    "./node_modules/ng-navigator-share/__ivy_ngcc__/fesm2015/ng-navigator-share.js");
    /* harmony import */


    var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngneat/transloco */
    "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BlogContentComponent_ng_container_0_div_4_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r5.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "headerImage"));
      }
    }

    function BlogContentComponent_ng_container_0_div_4_section_7_h2_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).ngIf;

        var t_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\n            ", t_r3("lastUpdate"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, post_r5.updated), "\n          ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        keyword: a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        value: a0
      };
    };

    function BlogContentComponent_ng_container_0_div_4_section_7_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var keyword_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, keyword_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, "keywordAriaLabel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, keyword_r15)));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n              ", keyword_r15, "\n            ");
      }
    }

    function BlogContentComponent_ng_container_0_div_4_section_7_div_15_img_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "transloco");
      }

      if (rf & 2) {
        var post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r5.publishedAtLogo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "publisherLogo"));
      }
    }

    function BlogContentComponent_ng_container_0_div_4_section_7_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n              ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BlogContentComponent_ng_container_0_div_4_section_7_div_15_img_6_Template, 2, 4, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ".\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).ngIf;

        var t_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", post_r5.publishedAtUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r5.publishedAtLogo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n            ", t_r3("originallyPublishedAtLong"), ":\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", post_r5.publishedAtUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r5.publishedAt);
      }
    }

    function BlogContentComponent_ng_container_0_div_4_section_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BlogContentComponent_ng_container_0_div_4_section_7_h2_7_Template, 3, 4, "h2", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BlogContentComponent_ng_container_0_div_4_section_7_span_12_Template, 6, 10, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BlogContentComponent_ng_container_0_div_4_section_7_div_15_Template, 16, 5, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

        var t_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r3("keywords"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r5.updated);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", post_r5.keywords);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r5.publishedAt && post_r5.publishedAtUrl);
      }
    }

    function BlogContentComponent_ng_container_0_div_4_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

        var t_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", post_r5.devTo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r3("readOnDevTo"));
      }
    }

    function BlogContentComponent_ng_container_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BlogContentComponent_ng_container_0_div_4_span_4_Template, 5, 4, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BlogContentComponent_ng_container_0_div_4_section_7_Template, 17, 4, "section", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BlogContentComponent_ng_container_0_div_4_a_11_Template, 2, 2, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "section", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "scully-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "section", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogContentComponent_ng_container_0_div_4_Template_a_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var post_r5 = ctx.ngIf;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r24.shareApi(post_r5.title, post_r5.description);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](71, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](80, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "\n            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r5 = ctx.ngIf;

        var t_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r5.thumbnail);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r5.keywords);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r5.devTo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r4.editOnGithubLink(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n            ", t_r3("editOnGithub"), "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r3("share.label"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 23, "share.common.alt"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 25, "share.common.aria"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r4.shareEmail(post_r5.title, post_r5.description, post_r5.author), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 27, "share.email.alt"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 29, "share.email.aria"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r4.shareTwitter(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 31, "share.twitter.alt"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 33, "share.twitter.aria"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r4.shareFacebook(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 35, "share.facebook.alt"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 37, "share.facebook.aria"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r4.shareLinkedIn(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](71, 39, "share.linkedIn.alt"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 41, "share.linkedIn.aria"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r4.shareXing(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](80, 43, "share.xing.alt"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 45, "share.xing.aria"));
      }
    }

    function BlogContentComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BlogContentComponent_ng_container_0_div_4_Template, 88, 47, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx_r2.post$));
      }
    }

    var BlogContentComponent =
    /*#__PURE__*/
    function () {
      function BlogContentComponent(route, srs, highlightService, metaService, ngNavigatorShareService) {
        _classCallCheck(this, BlogContentComponent);

        this.route = route;
        this.srs = srs;
        this.highlightService = highlightService;
        this.metaService = metaService;
        this.ngNavigatorShareService = ngNavigatorShareService;
      }
      /**
       * Highlight blog post when it's ready
       */


      _createClass(BlogContentComponent, [{
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.highlightService.highlightAll();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.post$ = this.srs.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (routeList) {
            return routeList.filter(function (route) {
              return route.route.startsWith("/blog/") && route.route.includes(_this.route.snapshot.params.slug);
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (currentPostData) {
            return currentPostData[0];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (post) {
            _this.metaService.createMetaDataForPost(post);
          }));
        }
      }, {
        key: "shareApi",
        value: function shareApi(title, description) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return this.ngNavigatorShareService.share({
                      title: title,
                      text: description,
                      url: location.href
                    });

                  case 3:
                    _context.next = 8;
                    break;

                  case 5:
                    _context.prev = 5;
                    _context.t0 = _context["catch"](0);
                    console.warn('You app is not shared, reason: ', _context.t0);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 5]]);
          }));
        }
      }, {
        key: "shareEmail",
        value: function shareEmail(title, description, author) {
          var subject = encodeURI("d-koppenhagen.de | Blogpost: ".concat(title, " | ").concat(author));
          var body = encodeURI("".concat(title, " | ").concat(author, "\n\n").concat(description, "\n\n> ").concat(location.href, "\n    "));
          return "mailto:?subject=".concat(subject, "&body=").concat(body);
        }
      }, {
        key: "shareTwitter",
        value: function shareTwitter() {
          var text = encodeURI("Check out the blogpost from @d_koppenhagen: ".concat(location.href));
          return "https://twitter.com/intent/tweet?text=".concat(text);
        }
      }, {
        key: "shareFacebook",
        value: function shareFacebook() {
          return "https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURI(location.href));
        }
      }, {
        key: "shareLinkedIn",
        value: function shareLinkedIn() {
          return "https://www.linkedin.com/sharing/share-offsite/?url=".concat(encodeURI(location.href));
        }
      }, {
        key: "shareXing",
        value: function shareXing() {
          return "https://www.xing.com/app/user?op=share;url=".concat(location.href);
        }
      }, {
        key: "editOnGithubLink",
        value: function editOnGithubLink() {
          return "https://github.com/d-koppenhagen/d-koppenhagen.de/edit/master".concat(location.pathname, ".md");
        }
      }]);

      return BlogContentComponent;
    }();

    BlogContentComponent.ɵfac = function BlogContentComponent_Factory(t) {
      return new (t || BlogContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_highlight_service__WEBPACK_IMPORTED_MODULE_5__["HighlightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_meta_service__WEBPACK_IMPORTED_MODULE_6__["MetaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_navigator_share__WEBPACK_IMPORTED_MODULE_7__["NgNavigatorShareService"]));
    };

    BlogContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BlogContentComponent,
      selectors: [["dk-blog-content"]],
      decls: 2,
      vars: 0,
      consts: [[4, "transloco"], [1, "wrapper", "alt"], ["class", "inner", 4, "ngIf"], [1, "inner"], [1, "blog-header"], ["class", "image fit", 4, "ngIf"], ["class", "extra-section", 4, "ngIf"], [1, "external-links"], [3, "href", 4, "ngIf"], [1, "blog-content"], [1, "edit-on-github"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "blog-footer"], [1, "share-toolbar"], [3, "click"], [1, "fa", "fa-share-alt"], ["rel", "noopener noreferrer", "id", "shareEmail", 3, "href"], [1, "fa", "fa-envelope"], [1, "fa", "fa-twitter"], [1, "fa", "fa-facebook"], [1, "fa", "fa-linkedin"], [1, "fa", "fa-xing"], [1, "image", "fit"], [3, "src"], [1, "extra-section"], [1, "extra-info"], [1, "sub-heading"], ["class", "sub-heading", 4, "ngIf"], [1, "actions"], [4, "ngFor", "ngForOf"], ["class", "published-at", 4, "ngIf"], ["routerLink", "/blog", 1, "button", "xs", 3, "queryParams"], [1, "published-at"], [1, "published-at-link", 3, "href"], ["class", "published-at-logo", 3, "src", 4, "ngIf"], [3, "href"], [1, "published-at-logo", 3, "src"]],
      template: function BlogContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BlogContentComponent_ng_container_0_Template, 8, 3, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n");
        }
      },
      directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__["TranslocoDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__["TranslocoPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n}\n\nh2.sub-heading[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n\n.extra-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.published-at[_ngcontent-%COMP%], .external-links[_ngcontent-%COMP%], .edit-on-github[_ngcontent-%COMP%] {\n  margin: 30px 0;\n}\n\n.published-at[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.published-at[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  line-height: 1.2em;\n}\n\n.published-at[_ngcontent-%COMP%]   .published-at-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: none;\n  min-width: 120px;\n}\n\n.published-at[_ngcontent-%COMP%]   .published-at-link[_ngcontent-%COMP%]   .published-at-logo[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.share-toolbar[_ngcontent-%COMP%] {\n  list-style: none;\n  height: 40px;\n  padding: 0px;\n}\n\n.share-toolbar[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.share-toolbar[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  border-bottom: 0px;\n  outline: none;\n}\n\n.share-toolbar[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: #fdfdfd;\n  min-width: 38px;\n  \n  border-radius: 50px;\n  background: #2e3141;\n  box-shadow: 4px 4px 9px #262936, -4px -4px 9px #36394c;\n}\n\n.share-toolbar[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i.fa-facebook[_ngcontent-%COMP%]::before {\n  margin-left: 2px;\n}\n\n.share-toolbar[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover    > i[_ngcontent-%COMP%], .share-toolbar[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus    > i[_ngcontent-%COMP%] {\n  box-shadow: 0 0 12px #5e7959;\n  color: #fdfdfd;\n}\n\n@media screen and (max-width: 560px) {\n  .blog-footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0px;\n    left: 0;\n    width: 100%;\n    background: #2e3141;\n    opacity: 0.9;\n    z-index: 1;\n    padding: 0 35px;\n  }\n  .blog-footer[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .blog-footer[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n    display: flex;\n    justify-content: space-between;\n  }\n  .blog-footer[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    padding-left: 0px;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  .blog-footer[_ngcontent-%COMP%] {\n    padding: 0 24px;\n  }\n}\n\n[_ngcontent-%COMP%]::slotted(h1) {\n  color: #330625;\n  background-color: #f8d3ec;\n  padding: 5px;\n  border-radius: 5px;\n  font-size: 1.4em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLWNvbnRlbnQvQzpcXFVzZXJzXFx6aGFuZ3FpXFxEZXNrdG9wXFxnaXRcXGQta29wcGVuaGFnZW4uZGUtbWFzdGVyXFxkLWtvcHBlbmhhZ2VuLmRlLW1hc3Rlci9zcmNcXGFwcFxcYmxvZ1xcYmxvZy1jb250ZW50XFxibG9nLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jsb2cvYmxvZy1jb250ZW50L2Jsb2ctY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmxvZy9ibG9nLWNvbnRlbnQvQzpcXFVzZXJzXFx6aGFuZ3FpXFxEZXNrdG9wXFxnaXRcXGQta29wcGVuaGFnZW4uZGUtbWFzdGVyXFxkLWtvcHBlbmhhZ2VuLmRlLW1hc3Rlci9zcmNcXHNhc3NcXGxpYnNcXF92YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDREY7O0FESUE7OztFQUdFLGNBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FER0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdJO0VBQ0UsbUJBQUE7QUNETjs7QURNQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNIRjs7QURLRTtFQUNFLFdBQUE7QUNISjs7QURLSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDSE47O0FES007RUFDRSxhQUFBO0VBQ0EsY0U3Q0E7RUY4Q0EsZUFBQTtFQUNBOzs7SUFBQTtFQUlBLG1CQUFBO0VBQ0EsbUJFcEVGO0VGcUVFLHNEQUFBO0FDSFI7O0FETU07RUFDRSxnQkFBQTtBQ0pSOztBRE9NO0VBRUUsNEJBQUE7RUFDQSxjRS9EQTtBRHlEUjs7QURZQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSxPQUFBO0lBQ0EsV0FBQTtJQUNBLG1CRTNGRTtJRjRGRixZQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7RUNURjtFRFdFO0lBQ0UsYUFBQTtFQ1RKO0VEWUU7SUFDRSxnQkFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFQ1ZKO0VEWUk7SUFDRSxpQkFBQTtFQ1ZOO0FBQ0Y7O0FEZUE7RUFDRTtJQUNFLGVBQUE7RUNiRjtBQUNGOztBRGdCQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2ctY29udGVudC9ibG9nLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zYXNzL2xpYnMvdmFycyc7XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuXG5oMi5zdWItaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5leHRyYS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHVibGlzaGVkLWF0LFxuLmV4dGVybmFsLWxpbmtzLFxuLmVkaXQtb24tZ2l0aHViIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG5cbi5wdWJsaXNoZWQtYXQge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5wdWJsaXNoZWQtYXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS4yZW07XG5cbiAgLnB1Ymxpc2hlZC1hdC1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG5cbiAgICAucHVibGlzaGVkLWF0LWxvZ28ge1xuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9XG4gIH1cbn1cblxuLnNoYXJlLXRvb2xiYXIge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDBweDtcblxuICA+IGxpIHtcbiAgICBmbG9hdDogbGVmdDtcblxuICAgID4gYSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgID4gaSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIG1pbi13aWR0aDogMzhweDtcbiAgICAgICAgLypcbiAgICAgICAgICogTmV1bW9ycGhpc20gZWZmZWN0XG4gICAgICAgICAqIEBzZWUgaHR0cHM6Ly9uZXVtb3JwaGlzbS5pby8jMmUzMTQxXG4gICAgICAgICAqL1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYzAxO1xuICAgICAgICBib3gtc2hhZG93OiA0cHggNHB4IDlweCAkYzE0LCAtNHB4IC00cHggOXB4ICRjMTU7XG4gICAgICB9XG5cbiAgICAgIGkuZmEtZmFjZWJvb2s6OmJlZm9yZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIgPiBpLFxuICAgICAgJjpmb2N1cyA+IGkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTJweCAkYzAyO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAuYmxvZy1mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICRjMDE7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZzogMCAzNXB4O1xuXG4gICAgPiBoMyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgID4gdWwge1xuICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgID4gbGkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmJsb2ctZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwIDI0cHg7XG4gIH1cbn1cblxuOjpzbG90dGVkKGgxKSB7XG4gIGNvbG9yOiByZ2IoNTEsIDYsIDM3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjExLCAyMzYpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuIiwiLndyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbmgyLnN1Yi1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLmV4dHJhLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wdWJsaXNoZWQtYXQsXG4uZXh0ZXJuYWwtbGlua3MsXG4uZWRpdC1vbi1naXRodWIge1xuICBtYXJnaW46IDMwcHggMDtcbn1cblxuLnB1Ymxpc2hlZC1hdCB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnB1Ymxpc2hlZC1hdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbn1cbi5wdWJsaXNoZWQtYXQgLnB1Ymxpc2hlZC1hdC1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1pbi13aWR0aDogMTIwcHg7XG59XG4ucHVibGlzaGVkLWF0IC5wdWJsaXNoZWQtYXQtbGluayAucHVibGlzaGVkLWF0LWxvZ28ge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uc2hhcmUtdG9vbGJhciB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuLnNoYXJlLXRvb2xiYXIgPiBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnNoYXJlLXRvb2xiYXIgPiBsaSA+IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOiAwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2hhcmUtdG9vbGJhciA+IGxpID4gYSA+IGkge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZkZmRmZDtcbiAgbWluLXdpZHRoOiAzOHB4O1xuICAvKlxuICAgKiBOZXVtb3JwaGlzbSBlZmZlY3RcbiAgICogQHNlZSBodHRwczovL25ldW1vcnBoaXNtLmlvLyMyZTMxNDFcbiAgICovXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMyZTMxNDE7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggOXB4ICMyNjI5MzYsIC00cHggLTRweCA5cHggIzM2Mzk0Yztcbn1cbi5zaGFyZS10b29sYmFyID4gbGkgPiBhIGkuZmEtZmFjZWJvb2s6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG4uc2hhcmUtdG9vbGJhciA+IGxpID4gYTpob3ZlciA+IGksIC5zaGFyZS10b29sYmFyID4gbGkgPiBhOmZvY3VzID4gaSB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4ICM1ZTc5NTk7XG4gIGNvbG9yOiAjZmRmZGZkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAuYmxvZy1mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMyZTMxNDE7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZzogMCAzNXB4O1xuICB9XG4gIC5ibG9nLWZvb3RlciA+IGgzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ibG9nLWZvb3RlciA+IHVsIHtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5ibG9nLWZvb3RlciA+IHVsID4gbGkge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAuYmxvZy1mb290ZXIge1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgfVxufVxuOjpzbG90dGVkKGgxKSB7XG4gIGNvbG9yOiAjMzMwNjI1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkM2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufSIsIi8vIENvbG9yc1xyXG4kYzAxOiAjMmUzMTQxO1xyXG4kYzAyOiAjNWU3OTU5O1xyXG4kYzAzOiAjODM5MDU3O1xyXG4kYzA0OiAjYWRhNzg5O1xyXG4kYzA1OiAjYWNhMjZhO1xyXG4kYzA2OiAjODQ4MzcyO1xyXG4kYzA3OiAjMmY4MDcxO1xyXG4kYzA4OiAjMTM1MTU2O1xyXG4kYzA5OiAjYWM3ZDUxO1xyXG4kYzEwOiAjYjQ2YjQ4O1xyXG4kYzExOiAjYjU2YjRhO1xyXG4kYzEyOiAjMjIzNjQxO1xyXG4kYzEzOiAjMGIzNjM4O1xyXG4kYzE0OiAjMjYyOTM2O1xyXG4kYzE1OiAjMzYzOTRjO1xyXG5cclxuJHdoaXRlOiAjZmRmZGZkO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcblxyXG4vLyBNaXNjLlxyXG4kbWlzYzogKFxyXG4gIHotaW5kZXgtYmFzZTogMTAwMDAsXHJcbiAgbWF4LXdyYXBwZXItc3R5bGVzOiA2LFxyXG4pO1xyXG5cclxuLy8gRHVyYXRpb24uXHJcbiRkdXJhdGlvbjogKFxyXG4gIG1lbnU6IDAuMzVzLFxyXG4gIHRyYW5zaXRpb246IDAuMnMsXHJcbik7XHJcblxyXG4vLyBTaXplLlxyXG4kc2l6ZTogKFxyXG4gIGJvcmRlci1yYWRpdXM6IDVweCxcclxuICBlbGVtZW50LWhlaWdodDogMi43NWVtLFxyXG4gIGVsZW1lbnQtbWFyZ2luOiAyZW0sXHJcbiAgaW5uZXI6IDU1ZW0sXHJcbiAgc2VjdGlvbi1zcGFjaW5nOiAoXHJcbiAgICBsYXJnZTogM2VtLFxyXG4gICAgbWVkaXVtOiAyZW0sXHJcbiAgICBzbWFsbDogMS43NWVtLFxyXG4gICksXHJcbiAgd3JhcHBlci1lZGdlczogKFxyXG4gICAgbGFyZ2U6IDYuNWVtLFxyXG4gICAgbWVkaXVtOiA0Ljc1ZW0sXHJcbiAgICBzbWFsbDogMi41ZW0sXHJcbiAgKSxcclxuKTtcclxuXHJcbi8vIEZvbnQuXHJcbiRmb250OiAoXHJcbiAgZmFtaWx5OiAoXHJcbiAgICAnU291cmNlIFNhbnMgUHJvJyxcclxuICAgIEhlbHZldGljYSxcclxuICAgIHNhbnMtc2VyaWYsXHJcbiAgKSxcclxuICBmYW1pbHktZml4ZWQ6IChcclxuICAgICdDb3VyaWVyIE5ldycsXHJcbiAgICBtb25vc3BhY2UsXHJcbiAgKSxcclxuICBmYW1pbHktaGVhZGluZzogKFxyXG4gICAgUmFsZXdheSxcclxuICAgIEhlbHZldGljYSxcclxuICAgIHNhbnMtc2VyaWYsXHJcbiAgKSxcclxuICB3ZWlnaHQ6IDMwMCxcclxuICB3ZWlnaHQtYm9sZDogNjAwLFxyXG4gIHdlaWdodC1oZWFkaW5nOiAyMDAsXHJcbiAgd2VpZ2h0LWhlYWRpbmctYm9sZDogNzAwLFxyXG4gIGtlcm4taGVhZGluZzogMC4xZW0sXHJcbik7XHJcblxyXG4vLyBQYWxldHRlLlxyXG4kcGFsZXR0ZTogKFxyXG4gIGJnOiAkYzAxLFxyXG4gIGZnOiAkd2hpdGUsXHJcbiAgZmctYm9sZDogJHdoaXRlLFxyXG4gIGZnLWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpLFxyXG4gIGJvcmRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyNSksXHJcbiAgYm9yZGVyLWJnOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI1KSxcclxuICBib3JkZXIyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLFxyXG4gIGJvcmRlcjItYmc6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpLFxyXG4gIGFjY2VudDogJGMwMixcclxuKTtcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'dk-blog-content',
          templateUrl: './blog-content.component.html',
          styleUrls: ['./blog-content.component.scss'],
          preserveWhitespaces: true,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyRoutesService"]
        }, {
          type: _shared_highlight_service__WEBPACK_IMPORTED_MODULE_5__["HighlightService"]
        }, {
          type: _meta_service__WEBPACK_IMPORTED_MODULE_6__["MetaService"]
        }, {
          type: ng_navigator_share__WEBPACK_IMPORTED_MODULE_7__["NgNavigatorShareService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog-overview/blog-overview.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/blog/blog-overview/blog-overview.component.ts ***!
    \***************************************************************/

  /*! exports provided: BlogOverviewComponent */

  /***/
  function srcAppBlogBlogOverviewBlogOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogOverviewComponent", function () {
      return BlogOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngneat/transloco */
    "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_preview_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/preview/preview.component */
    "./src/app/shared/preview/preview.component.ts");

    var _c0 = ["input"];

    var _c1 = function _c1(a0) {
      return {
        value: a0
      };
    };

    function BlogOverviewComponent_ng_container_0_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogOverviewComponent_ng_container_0_div_9_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r32.removeKeywordFilter();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var keyword_r31 = ctx.ngIf;

        var t_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", t_r28("filter"), ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, "keywordRemove", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, keyword_r31)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", keyword_r31, " ");
      }
    }

    function BlogOverviewComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BlogOverviewComponent_ng_container_0_div_9_Template, 7, 8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dk-preview", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var t_r28 = ctx.$implicit;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r28("myBlogPosts"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "search"))("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "searchAriaLabel"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, ctx_r27.keyword$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keyword", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, ctx_r27.keyword$))("search", ctx_r27.searchString);
      }
    }

    var BlogOverviewComponent =
    /*#__PURE__*/
    function () {
      function BlogOverviewComponent(route, router) {
        _classCallCheck(this, BlogOverviewComponent);

        this.route = route;
        this.router = router;
      }

      _createClass(BlogOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.keyword$ = this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('keyword'));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.input.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (text) {
            _this2.searchString = _this2.input.nativeElement.value;
          });
        }
      }, {
        key: "removeKeywordFilter",
        value: function removeKeywordFilter() {
          this.router.navigate([], {
            queryParams: {
              keyword: null
            },
            queryParamsHandling: 'merge'
          });
        }
      }]);

      return BlogOverviewComponent;
    }();

    BlogOverviewComponent.ɵfac = function BlogOverviewComponent_Factory(t) {
      return new (t || BlogOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    BlogOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogOverviewComponent,
      selectors: [["dk-blog-overview"]],
      viewQuery: function BlogOverviewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        }
      },
      decls: 1,
      vars: 0,
      consts: [[4, "transloco"], [1, "wrapper", "alt"], [1, "inner"], [1, "major"], ["type", "text", "name", "demo-name", "aria-required", "false"], ["input", ""], ["class", "active-keyword-filter", 4, "ngIf"], ["content", "blog", 3, "keyword", "search"], [1, "active-keyword-filter"], [1, "button", "xs", 3, "title", "click"], [1, "fa", "fa-close"]],
      template: function BlogOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlogOverviewComponent_ng_container_0_Template, 13, 14, "ng-container", 0);
        }
      },
      directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_preview_preview_component__WEBPACK_IMPORTED_MODULE_6__["PreviewComponent"]],
      pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__["TranslocoPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.wrapper[_ngcontent-%COMP%]   .active-keyword-filter[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  display: flex;\n  align-items: center;\n}\n.wrapper[_ngcontent-%COMP%]   .active-keyword-filter[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  margin: 0px 10px 0px 0px;\n}\n@media screen and (max-width: 480px) {\n  input[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLW92ZXJ2aWV3L0M6XFxVc2Vyc1xcemhhbmdxaVxcRGVza3RvcFxcZ2l0XFxkLWtvcHBlbmhhZ2VuLmRlLW1hc3RlclxcZC1rb3BwZW5oYWdlbi5kZS1tYXN0ZXIvc3JjXFxhcHBcXGJsb2dcXGJsb2ctb3ZlcnZpZXdcXGJsb2ctb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jsb2cvYmxvZy1vdmVydmlldy9ibG9nLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSx3QkFBQTtBQ0NOO0FESUE7RUFDRTtJQUNFLG1CQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy1vdmVydmlldy9ibG9nLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAwO1xuXG4gIC5hY3RpdmUta2V5d29yZC1maWx0ZXIge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgID4gaDMge1xuICAgICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICBpbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuIiwiLndyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLndyYXBwZXIgLmFjdGl2ZS1rZXl3b3JkLWZpbHRlciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndyYXBwZXIgLmFjdGl2ZS1rZXl3b3JkLWZpbHRlciA+IGgzIHtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICBpbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dk-blog-overview',
          templateUrl: './blog-overview.component.html',
          styleUrls: ['./blog-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['input']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/blog/blog-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: BlogRoutingModule */

  /***/
  function srcAppBlogBlogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function () {
      return BlogRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./blog-content/blog-content.component */
    "./src/app/blog/blog-content/blog-content.component.ts");
    /* harmony import */


    var _blog_overview_blog_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog-overview/blog-overview.component */
    "./src/app/blog/blog-overview/blog-overview.component.ts");

    var routes = [{
      path: '',
      component: _blog_overview_blog_overview_component__WEBPACK_IMPORTED_MODULE_3__["BlogOverviewComponent"]
    }, {
      path: ':slug',
      component: _blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_2__["BlogContentComponent"]
    }];

    var BlogRoutingModule = function BlogRoutingModule() {
      _classCallCheck(this, BlogRoutingModule);
    };

    BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BlogRoutingModule
    });
    BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BlogRoutingModule_Factory(t) {
        return new (t || BlogRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.module.ts":
  /*!*************************************!*\
    !*** ./src/app/blog/blog.module.ts ***!
    \*************************************/

  /*! exports provided: BlogModule */

  /***/
  function srcAppBlogBlogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogModule", function () {
      return BlogModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
    /* harmony import */


    var _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog-routing.module */
    "./src/app/blog/blog-routing.module.ts");
    /* harmony import */


    var _blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./blog-content/blog-content.component */
    "./src/app/blog/blog-content/blog-content.component.ts");
    /* harmony import */


    var _blog_overview_blog_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blog-overview/blog-overview.component */
    "./src/app/blog/blog-overview/blog-overview.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../transloco-root.module */
    "./src/app/transloco-root.module.ts");

    var BlogModule = function BlogModule() {
      _classCallCheck(this, BlogModule);
    };

    BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: BlogModule
    });
    BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function BlogModule_Factory(t) {
        return new (t || BlogModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__["TranslocoRootModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogModule, {
        declarations: [_blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_4__["BlogContentComponent"], _blog_overview_blog_overview_component__WEBPACK_IMPORTED_MODULE_5__["BlogOverviewComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__["TranslocoRootModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_4__["BlogContentComponent"], _blog_overview_blog_overview_component__WEBPACK_IMPORTED_MODULE_5__["BlogOverviewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__["TranslocoRootModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=blog-blog-module-es5.js.map