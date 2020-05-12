(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/ng-navigator-share/__ivy_ngcc__/fesm2015/ng-navigator-share.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/ng-navigator-share/__ivy_ngcc__/fesm2015/ng-navigator-share.js ***!
  \*************************************************************************************/
/*! exports provided: NgNavigatorShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgNavigatorShareService", function() { return NgNavigatorShareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-navigator-share/ng-navigator-share.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class NgNavigatorShareService {
    constructor() {
        this.webNavigator = null;
        this.webNavigator = window.navigator;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    share({ title, text, url }) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.webNavigator !== null && this.webNavigator.share !== undefined) {
                if ((text === undefined || text === null) &&
                    (url === undefined || url === null)) {
                    console.warn(`text and url both can't be empty, at least provide either text or url`);
                }
                else {
                    try {
                        /** @type {?} */
                        const isShared = yield this.webNavigator.share({
                            title: title,
                            text: text,
                            url: url,
                        });
                        resolve({
                            shared: true
                        });
                    }
                    catch (error) {
                        reject({
                            shared: false,
                            error: error
                        });
                    }
                }
            }
            else {
                reject({
                    shared: false,
                    error: `This service/api is not supported in your Browser`
                });
            }
        })));
    }
}
NgNavigatorShareService.ɵfac = function NgNavigatorShareService_Factory(t) { return new (t || NgNavigatorShareService)(); };
NgNavigatorShareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NgNavigatorShareService, factory: NgNavigatorShareService.ɵfac, providedIn: 'root' });
/** @nocollapse */
NgNavigatorShareService.ctorParameters = () => [];
/** @nocollapse */ NgNavigatorShareService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgNavigatorShareService_Factory() { return new NgNavigatorShareService(); }, token: NgNavigatorShareService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgNavigatorShareService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
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

/***/ }),

/***/ "./src/app/meta.service.ts":
/*!*********************************!*\
  !*** ./src/app/meta.service.ts ***!
  \*********************************/
/*! exports provided: MetaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaService", function() { return MetaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




class MetaService {
    constructor(dom, meta, title) {
        this.dom = dom;
        this.meta = meta;
        this.title = title;
    }
    createCanonicalURL(url) {
        const canURL = url === undefined ? this.dom.URL : url;
        let link = document.querySelector('link[rel="canonical"]');
        if (link) {
            link.setAttribute('href', canURL);
        }
        else {
            link = this.dom.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.dom.head.appendChild(link);
            link.setAttribute('href', canURL);
        }
    }
    createMetaDataForPost(post) {
        this.removeAllKnownTags();
        this.setTitle(post.title);
        this.setDescription(post.description);
        this.createCanonicalURL(post.publishedAtUrl);
        this.createTwitterCardForBlogPost(post);
        this.createOpenGraphProfileForBlogPost(post);
    }
    setTitle(title) {
        this.title.setTitle(`D-Koppenhagen.de | ${title}`);
    }
    setDescription(description) {
        this.meta.updateTag({ name: 'description', content: description });
    }
    createTwitterCardForBlogPost(post) {
        this.meta.updateTag({
            name: 'twitter:card',
            content: 'summary',
        });
        this.meta.updateTag({
            name: 'twitter:site',
            content: '@d_koppenhagen',
        });
        this.meta.updateTag({
            name: 'twitter:creator',
            content: '@d_koppenhagen',
        });
        this.meta.updateTag({
            name: 'twitter:title',
            content: post.title,
        });
        this.meta.updateTag({
            name: 'twitter:description',
            content: post.description,
        });
        this.meta.updateTag({
            name: 'twitter:image',
            content: `https://d-koppenhagen.de/${post.thumbnail}`,
        });
    }
    createOpenGraphProfileForBlogPost(post) {
        this.meta.updateTag({ property: 'og:title', content: post.title });
        this.meta.updateTag({
            property: 'og:description',
            content: post.description,
        });
        this.meta.updateTag({
            name: 'og:image',
            content: `https://d-koppenhagen.de/${post.thumbnail}`,
        });
        this.meta.updateTag({
            name: 'og:url',
            content: `https://d-koppenhagen.de${post.route}`,
        });
    }
    removeAllKnownTags() {
        this.meta.removeTag(`property='og:title'`);
        this.meta.removeTag(`name='twitter:title'`);
        this.meta.removeTag(`name='description'`);
        this.meta.removeTag(`property='og:description'`);
        this.meta.removeTag(`name='twitter:description'`);
        this.meta.removeTag(`property='og:image'`);
        this.meta.removeTag(`property='og:image:width'`);
        this.meta.removeTag(`property='og:image:height'`);
        this.meta.removeTag(`name='twitter:image'`);
        this.meta.removeTag(`name='twitter:card'`);
        this.meta.removeTag(`name='twitter:site'`);
        this.meta.removeTag(`property='og:url'`);
        this.meta.removeTag(`property='og:locale'`);
        this.meta.removeTag(`property='og:type'`);
        this.meta.removeTag(`property='fb:app_id'`);
    }
}
MetaService.ɵfac = function MetaService_Factory(t) { return new (t || MetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
MetaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MetaService, factory: MetaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map