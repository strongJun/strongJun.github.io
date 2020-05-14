function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"], {
  /***/
  "./src/app/projects/project-content/project-content.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/projects/project-content/project-content.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ProjectContentComponent */

  /***/
  function srcAppProjectsProjectContentProjectContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectContentComponent", function () {
      return ProjectContentComponent;
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

    function ProjectContentComponent_ng_container_0_div_4_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "transloco");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r63.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "headerImage"));
      }
    }

    function ProjectContentComponent_ng_container_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectContentComponent_ng_container_0_div_4_span_4_Template, 5, 4, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "scully-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r63 = ctx.ngIf;

        var t_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", post_r63.thumbnail);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r62.editOnGithubLink(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n            ", t_r61("editOnGithub"), "\n          ");
      }
    }

    function ProjectContentComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectContentComponent_ng_container_0_div_4_Template, 18, 3, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n  ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx_r60.post$));
      }
    }

    var ProjectContentComponent =
    /*#__PURE__*/
    function () {
      function ProjectContentComponent(route, srs, highlightService, metaService, ngNavigatorShareService) {
        _classCallCheck(this, ProjectContentComponent);

        this.route = route;
        this.srs = srs;
        this.highlightService = highlightService;
        this.metaService = metaService;
        this.ngNavigatorShareService = ngNavigatorShareService;
      }
      /**
       * Highlight projects post when it's ready
       */


      _createClass(ProjectContentComponent, [{
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
              return route.route.startsWith("/projects/") && route.route.includes(_this.route.snapshot.params.slug);
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
        key: "editOnGithubLink",
        value: function editOnGithubLink() {
          return "https://github.com/d-koppenhagen/d-koppenhagen.de/edit/master".concat(location.pathname, ".md");
        }
      }]);

      return ProjectContentComponent;
    }();

    ProjectContentComponent.ɵfac = function ProjectContentComponent_Factory(t) {
      return new (t || ProjectContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_highlight_service__WEBPACK_IMPORTED_MODULE_5__["HighlightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_meta_service__WEBPACK_IMPORTED_MODULE_6__["MetaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_navigator_share__WEBPACK_IMPORTED_MODULE_7__["NgNavigatorShareService"]));
    };

    ProjectContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProjectContentComponent,
      selectors: [["dk-project-content"]],
      decls: 2,
      vars: 0,
      consts: [[4, "transloco"], [1, "wrapper", "alt"], ["class", "inner", 4, "ngIf"], [1, "inner"], [1, "project-header"], ["class", "image fit", 4, "ngIf"], [1, "project-content"], [1, "edit-on-github"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "image", "fit"], [3, "src"]],
      template: function ProjectContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProjectContentComponent_ng_container_0_Template, 8, 3, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n");
        }
      },
      directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__["TranslocoDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyContentComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__["TranslocoPipe"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n}\n\nh2.sub-heading[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n\n.edit-on-github[_ngcontent-%COMP%] {\n  margin: 30px 0;\n}\n\n[_ngcontent-%COMP%]::slotted(h1) {\n  color: #330625;\n  background-color: #f8d3ec;\n  padding: 5px;\n  border-radius: 5px;\n  font-size: 1.4em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1jb250ZW50L0M6XFxVc2Vyc1xcemhhbmdxaVxcRGVza3RvcFxcZ2l0XFxkLWtvcHBlbmhhZ2VuLmRlLW1hc3RlclxcZC1rb3BwZW5oYWdlbi5kZS1tYXN0ZXIvc3JjXFxhcHBcXHByb2plY3RzXFxwcm9qZWN0LWNvbnRlbnRcXHByb2plY3QtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1jb250ZW50L3Byb2plY3QtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3QtY29udGVudC9wcm9qZWN0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zYXNzL2xpYnMvdmFycyc7XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuXG5oMi5zdWItaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5lZGl0LW9uLWdpdGh1YiB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG46OnNsb3R0ZWQoaDEpIHtcbiAgY29sb3I6IHJnYig1MSwgNiwgMzcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyMTEsIDIzNik7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEuNGVtO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4iLCIud3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuaDIuc3ViLWhlYWRpbmcge1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uZWRpdC1vbi1naXRodWIge1xuICBtYXJnaW46IDMwcHggMDtcbn1cblxuOjpzbG90dGVkKGgxKSB7XG4gIGNvbG9yOiAjMzMwNjI1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkM2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'dk-project-content',
          templateUrl: './project-content.component.html',
          styleUrls: ['./project-content.component.scss'],
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
  "./src/app/projects/project-overview/project-overview.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/projects/project-overview/project-overview.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProjectOverviewComponent */

  /***/
  function srcAppProjectsProjectOverviewProjectOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectOverviewComponent", function () {
      return ProjectOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngneat/transloco */
    "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
    /* harmony import */


    var _shared_preview_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/preview/preview.component */
    "./src/app/shared/preview/preview.component.ts");

    function ProjectOverviewComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dk-preview", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var t_r68 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r68("myProjects"));
      }
    }

    var ProjectOverviewComponent =
    /*#__PURE__*/
    function () {
      function ProjectOverviewComponent() {
        _classCallCheck(this, ProjectOverviewComponent);
      }

      _createClass(ProjectOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectOverviewComponent;
    }();

    ProjectOverviewComponent.ɵfac = function ProjectOverviewComponent_Factory(t) {
      return new (t || ProjectOverviewComponent)();
    };

    ProjectOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectOverviewComponent,
      selectors: [["dk-project-overview"]],
      decls: 1,
      vars: 0,
      consts: [[4, "transloco"], [1, "wrapper", "alt"], [1, "inner"], [1, "major"], ["content", "projects"]],
      template: function ProjectOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectOverviewComponent_ng_container_0_Template, 6, 1, "ng-container", 0);
        }
      },
      directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoDirective"], _shared_preview_preview_component__WEBPACK_IMPORTED_MODULE_2__["PreviewComponent"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1vdmVydmlldy9DOlxcVXNlcnNcXHpoYW5ncWlcXERlc2t0b3BcXGdpdFxcZC1rb3BwZW5oYWdlbi5kZS1tYXN0ZXJcXGQta29wcGVuaGFnZW4uZGUtbWFzdGVyL3NyY1xcYXBwXFxwcm9qZWN0c1xccHJvamVjdC1vdmVydmlld1xccHJvamVjdC1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1vdmVydmlldy9wcm9qZWN0LW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1vdmVydmlldy9wcm9qZWN0LW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuIiwiLndyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dk-project-overview',
          templateUrl: './project-overview.component.html',
          styleUrls: ['./project-overview.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/projects/projects-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProjectsRoutingModule */

  /***/
  function srcAppProjectsProjectsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function () {
      return ProjectsRoutingModule;
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


    var _project_content_project_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./project-content/project-content.component */
    "./src/app/projects/project-content/project-content.component.ts");
    /* harmony import */


    var _project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./project-overview/project-overview.component */
    "./src/app/projects/project-overview/project-overview.component.ts");

    var routes = [{
      path: '',
      component: _project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_3__["ProjectOverviewComponent"]
    }, {
      path: ':slug',
      component: _project_content_project_content_component__WEBPACK_IMPORTED_MODULE_2__["ProjectContentComponent"]
    }];

    var ProjectsRoutingModule = function ProjectsRoutingModule() {
      _classCallCheck(this, ProjectsRoutingModule);
    };

    ProjectsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProjectsRoutingModule
    });
    ProjectsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProjectsRoutingModule_Factory(t) {
        return new (t || ProjectsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsRoutingModule, [{
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
  "./src/app/projects/projects.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/projects/projects.module.ts ***!
    \*********************************************/

  /*! exports provided: ProjectsModule */

  /***/
  function srcAppProjectsProjectsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsModule", function () {
      return ProjectsModule;
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


    var _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projects-routing.module */
    "./src/app/projects/projects-routing.module.ts");
    /* harmony import */


    var _project_content_project_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./project-content/project-content.component */
    "./src/app/projects/project-content/project-content.component.ts");
    /* harmony import */


    var _project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./project-overview/project-overview.component */
    "./src/app/projects/project-overview/project-overview.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../transloco-root.module */
    "./src/app/transloco-root.module.ts");

    var ProjectsModule = function ProjectsModule() {
      _classCallCheck(this, ProjectsModule);
    };

    ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ProjectsModule
    });
    ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ProjectsModule_Factory(t) {
        return new (t || ProjectsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectsRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__["TranslocoRootModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProjectsModule, {
        declarations: [_project_content_project_content_component__WEBPACK_IMPORTED_MODULE_4__["ProjectContentComponent"], _project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_5__["ProjectOverviewComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectsRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__["TranslocoRootModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_project_content_project_content_component__WEBPACK_IMPORTED_MODULE_4__["ProjectContentComponent"], _project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_5__["ProjectOverviewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectsRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__["TranslocoRootModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=projects-projects-module-es5.js.map