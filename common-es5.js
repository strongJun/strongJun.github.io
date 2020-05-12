function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/ng-navigator-share/__ivy_ngcc__/fesm2015/ng-navigator-share.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/ng-navigator-share/__ivy_ngcc__/fesm2015/ng-navigator-share.js ***!
    \*************************************************************************************/

  /*! exports provided: NgNavigatorShareService */

  /***/
  function node_modulesNgNavigatorShare__ivy_ngcc__Fesm2015NgNavigatorShareJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgNavigatorShareService", function () {
      return NgNavigatorShareService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-navigator-share/ng-navigator-share.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgNavigatorShareService =
    /*#__PURE__*/
    function () {
      function NgNavigatorShareService() {
        _classCallCheck(this, NgNavigatorShareService);

        this.webNavigator = null;
        this.webNavigator = window.navigator;
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      _createClass(NgNavigatorShareService, [{
        key: "share",
        value: function share(_ref) {
          var _this = this;

          var title = _ref.title,
              text = _ref.text,
              url = _ref.url;
          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var isShared;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.webNavigator !== null && this.webNavigator.share !== undefined)) {
                        _context.next = 17;
                        break;
                      }

                      if (!((text === undefined || text === null) && (url === undefined || url === null))) {
                        _context.next = 5;
                        break;
                      }

                      console.warn("text and url both can't be empty, at least provide either text or url");
                      _context.next = 15;
                      break;

                    case 5:
                      _context.prev = 5;
                      _context.next = 8;
                      return this.webNavigator.share({
                        title: title,
                        text: text,
                        url: url
                      });

                    case 8:
                      isShared = _context.sent;
                      resolve({
                        shared: true
                      });
                      _context.next = 15;
                      break;

                    case 12:
                      _context.prev = 12;
                      _context.t0 = _context["catch"](5);
                      reject({
                        shared: false,
                        error: _context.t0
                      });

                    case 15:
                      _context.next = 18;
                      break;

                    case 17:
                      reject({
                        shared: false,
                        error: "This service/api is not supported in your Browser"
                      });

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[5, 12]]);
            }));
          });
        }
      }]);

      return NgNavigatorShareService;
    }();

    NgNavigatorShareService.ɵfac = function NgNavigatorShareService_Factory(t) {
      return new (t || NgNavigatorShareService)();
    };

    NgNavigatorShareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NgNavigatorShareService,
      factory: NgNavigatorShareService.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    NgNavigatorShareService.ctorParameters = function () {
      return [];
    };
    /** @nocollapse */


    NgNavigatorShareService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function NgNavigatorShareService_Factory() {
        return new NgNavigatorShareService();
      },
      token: NgNavigatorShareService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgNavigatorShareService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-navigator-share.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-navigator-share.js.map

    /***/

  },

  /***/
  "./src/app/meta.service.ts":
  /*!*********************************!*\
    !*** ./src/app/meta.service.ts ***!
    \*********************************/

  /*! exports provided: MetaService */

  /***/
  function srcAppMetaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetaService", function () {
      return MetaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var MetaService =
    /*#__PURE__*/
    function () {
      function MetaService(dom, meta, title) {
        _classCallCheck(this, MetaService);

        this.dom = dom;
        this.meta = meta;
        this.title = title;
      }

      _createClass(MetaService, [{
        key: "createCanonicalURL",
        value: function createCanonicalURL(url) {
          var canURL = url === undefined ? this.dom.URL : url;
          var link = document.querySelector('link[rel="canonical"]');

          if (link) {
            link.setAttribute('href', canURL);
          } else {
            link = this.dom.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.dom.head.appendChild(link);
            link.setAttribute('href', canURL);
          }
        }
      }, {
        key: "createMetaDataForPost",
        value: function createMetaDataForPost(post) {
          this.removeAllKnownTags();
          this.setTitle(post.title);
          this.setDescription(post.description);
          this.createCanonicalURL(post.publishedAtUrl);
          this.createTwitterCardForBlogPost(post);
          this.createOpenGraphProfileForBlogPost(post);
        }
      }, {
        key: "setTitle",
        value: function setTitle(title) {
          this.title.setTitle("D-Koppenhagen.de | ".concat(title));
        }
      }, {
        key: "setDescription",
        value: function setDescription(description) {
          this.meta.updateTag({
            name: 'description',
            content: description
          });
        }
      }, {
        key: "createTwitterCardForBlogPost",
        value: function createTwitterCardForBlogPost(post) {
          this.meta.updateTag({
            name: 'twitter:card',
            content: 'summary'
          });
          this.meta.updateTag({
            name: 'twitter:site',
            content: '@d_koppenhagen'
          });
          this.meta.updateTag({
            name: 'twitter:creator',
            content: '@d_koppenhagen'
          });
          this.meta.updateTag({
            name: 'twitter:title',
            content: post.title
          });
          this.meta.updateTag({
            name: 'twitter:description',
            content: post.description
          });
          this.meta.updateTag({
            name: 'twitter:image',
            content: "https://d-koppenhagen.de/".concat(post.thumbnail)
          });
        }
      }, {
        key: "createOpenGraphProfileForBlogPost",
        value: function createOpenGraphProfileForBlogPost(post) {
          this.meta.updateTag({
            property: 'og:title',
            content: post.title
          });
          this.meta.updateTag({
            property: 'og:description',
            content: post.description
          });
          this.meta.updateTag({
            name: 'og:image',
            content: "https://d-koppenhagen.de/".concat(post.thumbnail)
          });
          this.meta.updateTag({
            name: 'og:url',
            content: "https://d-koppenhagen.de".concat(post.route)
          });
        }
      }, {
        key: "removeAllKnownTags",
        value: function removeAllKnownTags() {
          this.meta.removeTag("property='og:title'");
          this.meta.removeTag("name='twitter:title'");
          this.meta.removeTag("name='description'");
          this.meta.removeTag("property='og:description'");
          this.meta.removeTag("name='twitter:description'");
          this.meta.removeTag("property='og:image'");
          this.meta.removeTag("property='og:image:width'");
          this.meta.removeTag("property='og:image:height'");
          this.meta.removeTag("name='twitter:image'");
          this.meta.removeTag("name='twitter:card'");
          this.meta.removeTag("name='twitter:site'");
          this.meta.removeTag("property='og:url'");
          this.meta.removeTag("property='og:locale'");
          this.meta.removeTag("property='og:type'");
          this.meta.removeTag("property='fb:app_id'");
        }
      }]);

      return MetaService;
    }();

    MetaService.ɵfac = function MetaService_Factory(t) {
      return new (t || MetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]));
    };

    MetaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MetaService,
      factory: MetaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map