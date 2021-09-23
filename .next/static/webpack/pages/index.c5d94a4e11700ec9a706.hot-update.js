webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/blogs.js":
/*!*******************************!*\
  !*** ./src/sections/blogs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-masonry-component */ \"./node_modules/react-masonry-component/lib/index.js\");\n/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/block-title */ \"./src/components/block-title.js\");\n/* harmony import */ var components_cards_blog_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cards/blog-card */ \"./src/components/cards/blog-card.js\");\n/* harmony import */ var assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/blog-1-1.png */ \"./src/assets/blog-1-1.png\");\n/* harmony import */ var assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/blog-1-2.png */ \"./src/assets/blog-1-2.png\");\n/* harmony import */ var assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/blog-1-3.png */ \"./src/assets/blog-1-3.png\");\n/* harmony import */ var assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/blog-1-4.png */ \"./src/assets/blog-1-4.png\");\n/* harmony import */ var assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var assets_dom_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/dom.jpeg */ \"./src/assets/dom.jpeg\");\n/* harmony import */ var assets_dom_jpeg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_dom_jpeg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var assets_ahad2_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/ahad2.jpeg */ \"./src/assets/ahad2.jpeg\");\n/* harmony import */ var assets_ahad2_jpeg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_ahad2_jpeg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var assets_justin_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/justin.png */ \"./src/assets/justin.png\");\n/* harmony import */ var assets_justin_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_justin_png__WEBPACK_IMPORTED_MODULE_11__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ahadrajput/Documents/Codesmith/Open_Source_Project/kubermetrics-splash-page/src/sections/blogs.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nvar BLOG_DATA = [{\n  image: assets_ahad2_jpeg__WEBPACK_IMPORTED_MODULE_10___default.a,\n  title: 'Ahad Rajput',\n  description: 'LinkedIn: https://www.linkedin.com/in/arajput96/, Github: https://github.com/arajput96',\n  path: '/'\n}, {\n  image: assets_dom_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,\n  title: 'Dominic DiSalvo',\n  description: 'LinkedIn: https://www.linkedin.com/in/dominicdisalvo/, Github: https://github.com/dominicd17',\n  path: '/'\n}, {\n  image: assets_justin_png__WEBPACK_IMPORTED_MODULE_11___default.a,\n  title: 'Justin Buckner',\n  description: 'LinkedIn: https://www.linkedin.com/in/jbuild/, Github: https://github.com/JWadeOn',\n  path: '/'\n} // {\n//   image: null,\n//   title:\n//     'Antibias receives honorable gift mention at Fast Company’s most Innovation by Design Awards',\n//   description: null,\n//   path: '/',\n//   linkLabel: null,\n// },\n// {\n//   image: blogImage3,\n//   title: 'Multiple task wireframing with team management perform better',\n//   description: null,\n//   path: '/',\n//   linkLabel: null,\n// },\n// {\n//   image: blogImage2,\n//   title: 'Multiple art board prototype with Figma',\n//   description:\n//     'Beyond launched antibias, a Chrome extension that replaces LinkedIn profile photos',\n//   path: '/',\n//   linkLabel: 'Learn More',\n// },\n// {\n//   image: blogImage4,\n//   title:\n//     'Team presentation with latest user interface & experience reach more',\n//   description: null,\n//   path: '/',\n//   linkLabel: null,\n// },\n];\nvar masonryOptions = {\n  transitionDuration: 0\n};\n\nvar Blogs = function Blogs() {\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    as: \"section\",\n    id: \"news\",\n    sx: styles.blogs,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Meet the team \",\n    text: \"Team Kubermetrics\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    as: react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default.a,\n    options: masonryOptions,\n    sx: styles.blogWrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, BLOG_DATA.map(function (_ref, index) {\n    var image = _ref.image,\n        title = _ref.title,\n        description = _ref.description,\n        path = _ref.path,\n        linkLabel = _ref.linkLabel;\n    return __jsx(components_cards_blog_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: index,\n      image: image,\n      title: title,\n      description: description // path={path}\n      // linkLabel={linkLabel}\n      ,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 15\n      }\n    });\n  }))));\n};\n\n_c = Blogs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogs);\nvar styles = {\n  blogs: {\n    pt: ['80px', null, null, null, '80px', null, '100px'],\n    pb: ['40px', null, null, null, '140px', null, '100px'],\n    color: 'white',\n    backgroundColor: '#1a1e21'\n  },\n  blogWrapper: {\n    mx: '-15px'\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Blogs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jsb2dzLmpzP2QyNGIiXSwibmFtZXMiOlsiQkxPR19EQVRBIiwiaW1hZ2UiLCJhaGFkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBhdGgiLCJkb20iLCJqdXN0aW4iLCJtYXNvbnJ5T3B0aW9ucyIsInRyYW5zaXRpb25EdXJhdGlvbiIsIkJsb2dzIiwic3R5bGVzIiwiYmxvZ3MiLCJNYXNvbnJ5IiwiYmxvZ1dyYXBwZXIiLCJtYXAiLCJpbmRleCIsImxpbmtMYWJlbCIsInB0IiwicGIiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIm14Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNoQjtBQUNFQyxPQUFLLEVBQUVDLHlEQURUO0FBRUVDLE9BQUssRUFBRSxhQUZUO0FBR0VDLGFBQVcsRUFDVCx3RkFKSjtBQUtFQyxNQUFJLEVBQUU7QUFMUixDQURnQixFQVFoQjtBQUNFSixPQUFLLEVBQUVLLHNEQURUO0FBRUVILE9BQUssRUFBRSxpQkFGVDtBQUdFQyxhQUFXLEVBQ1gsOEZBSkY7QUFLRUMsTUFBSSxFQUFFO0FBTFIsQ0FSZ0IsRUFnQmhCO0FBQ0VKLE9BQUssRUFBRU0seURBRFQ7QUFFRUosT0FBSyxFQUFFLGdCQUZUO0FBR0VDLGFBQVcsRUFDWCxtRkFKRjtBQUtFQyxNQUFJLEVBQUU7QUFMUixDQWhCZ0IsQ0F1QmhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckRnQixDQUFsQjtBQXdEQSxJQUFNRyxjQUFjLEdBQUc7QUFDckJDLG9CQUFrQixFQUFFO0FBREMsQ0FBdkI7O0FBSUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixTQUNFLE1BQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFrQixNQUFFLEVBQUMsTUFBckI7QUFBNEIsTUFBRSxFQUFFQyxNQUFNLENBQUNDLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQ0UsU0FBSyxFQUFDLGdCQURSO0FBRUUsUUFBSSxFQUFDLG1CQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFLE1BQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVDLDhEQUFUO0FBQWtCLFdBQU8sRUFBRUwsY0FBM0I7QUFBMkMsTUFBRSxFQUFFRyxNQUFNLENBQUNHLFdBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2QsU0FBUyxDQUFDZSxHQUFWLENBQ0MsZ0JBQWlEQyxLQUFqRDtBQUFBLFFBQUdmLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFFBQVVFLEtBQVYsUUFBVUEsS0FBVjtBQUFBLFFBQWlCQyxXQUFqQixRQUFpQkEsV0FBakI7QUFBQSxRQUE4QkMsSUFBOUIsUUFBOEJBLElBQTlCO0FBQUEsUUFBb0NZLFNBQXBDLFFBQW9DQSxTQUFwQztBQUFBLFdBQ0UsTUFBQyxrRUFBRDtBQUNFLFNBQUcsRUFBRUQsS0FEUDtBQUVFLFdBQUssRUFBRWYsS0FGVDtBQUdFLFdBQUssRUFBRUUsS0FIVDtBQUlFLGlCQUFXLEVBQUVDLFdBSmYsQ0FLRTtBQUNBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBQUEsR0FERCxDQURILENBTEYsQ0FERixDQURGO0FBd0JELENBekJEOztLQUFNTSxLO0FBMkJTQSxvRUFBZjtBQUVBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxPQUFLLEVBQUU7QUFDTE0sTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLE1BQTNCLEVBQW1DLElBQW5DLEVBQXlDLE9BQXpDLENBREM7QUFFTEMsTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLE9BQTNCLEVBQW9DLElBQXBDLEVBQTBDLE9BQTFDLENBRkM7QUFHTEMsU0FBSyxFQUFFLE9BSEY7QUFJTEMsbUJBQWUsRUFBRTtBQUpaLEdBRE07QUFPYlAsYUFBVyxFQUFFO0FBQ1hRLE1BQUUsRUFBRTtBQURPO0FBUEEsQ0FBZiIsImZpbGUiOiIuL3NyYy9zZWN0aW9ucy9ibG9ncy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50JztcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvYmxvY2stdGl0bGUnO1xuaW1wb3J0IEJsb2dDYXJkIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvYmxvZy1jYXJkJztcblxuaW1wb3J0IGJsb2dJbWFnZTEgZnJvbSAnYXNzZXRzL2Jsb2ctMS0xLnBuZyc7XG5pbXBvcnQgYmxvZ0ltYWdlMiBmcm9tICdhc3NldHMvYmxvZy0xLTIucG5nJztcbmltcG9ydCBibG9nSW1hZ2UzIGZyb20gJ2Fzc2V0cy9ibG9nLTEtMy5wbmcnO1xuaW1wb3J0IGJsb2dJbWFnZTQgZnJvbSAnYXNzZXRzL2Jsb2ctMS00LnBuZyc7XG5pbXBvcnQgZG9tIGZyb20gJ2Fzc2V0cy9kb20uanBlZydcbmltcG9ydCBhaGFkIGZyb20gJ2Fzc2V0cy9haGFkMi5qcGVnJ1xuaW1wb3J0IGp1c3RpbiBmcm9tICdhc3NldHMvanVzdGluLnBuZydcblxuY29uc3QgQkxPR19EQVRBID0gW1xuICB7XG4gICAgaW1hZ2U6IGFoYWQsXG4gICAgdGl0bGU6ICdBaGFkIFJhanB1dCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTGlua2VkSW46IGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hcmFqcHV0OTYvLCBHaXRodWI6IGh0dHBzOi8vZ2l0aHViLmNvbS9hcmFqcHV0OTYnLFxuICAgIHBhdGg6ICcvJyxcbiAgfSxcbiAge1xuICAgIGltYWdlOiBkb20sXG4gICAgdGl0bGU6ICdEb21pbmljIERpU2Fsdm8nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICdMaW5rZWRJbjogaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RvbWluaWNkaXNhbHZvLywgR2l0aHViOiBodHRwczovL2dpdGh1Yi5jb20vZG9taW5pY2QxNycsXG4gICAgcGF0aDogJy8nLFxuICBcbiAgfSxcbiAge1xuICAgIGltYWdlOiBqdXN0aW4sXG4gICAgdGl0bGU6ICdKdXN0aW4gQnVja25lcicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgJ0xpbmtlZEluOiBodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vamJ1aWxkLywgR2l0aHViOiBodHRwczovL2dpdGh1Yi5jb20vSldhZGVPbicsXG4gICAgcGF0aDogJy8nLFxuICB9LFxuICAvLyB7XG4gIC8vICAgaW1hZ2U6IG51bGwsXG4gIC8vICAgdGl0bGU6XG4gIC8vICAgICAnQW50aWJpYXMgcmVjZWl2ZXMgaG9ub3JhYmxlIGdpZnQgbWVudGlvbiBhdCBGYXN0IENvbXBhbnnigJlzIG1vc3QgSW5ub3ZhdGlvbiBieSBEZXNpZ24gQXdhcmRzJyxcbiAgLy8gICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgLy8gICBwYXRoOiAnLycsXG4gIC8vICAgbGlua0xhYmVsOiBudWxsLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgaW1hZ2U6IGJsb2dJbWFnZTMsXG4gIC8vICAgdGl0bGU6ICdNdWx0aXBsZSB0YXNrIHdpcmVmcmFtaW5nIHdpdGggdGVhbSBtYW5hZ2VtZW50IHBlcmZvcm0gYmV0dGVyJyxcbiAgLy8gICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgLy8gICBwYXRoOiAnLycsXG4gIC8vICAgbGlua0xhYmVsOiBudWxsLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgaW1hZ2U6IGJsb2dJbWFnZTIsXG4gIC8vICAgdGl0bGU6ICdNdWx0aXBsZSBhcnQgYm9hcmQgcHJvdG90eXBlIHdpdGggRmlnbWEnLFxuICAvLyAgIGRlc2NyaXB0aW9uOlxuICAvLyAgICAgJ0JleW9uZCBsYXVuY2hlZCBhbnRpYmlhcywgYSBDaHJvbWUgZXh0ZW5zaW9uIHRoYXQgcmVwbGFjZXMgTGlua2VkSW4gcHJvZmlsZSBwaG90b3MnLFxuICAvLyAgIHBhdGg6ICcvJyxcbiAgLy8gICBsaW5rTGFiZWw6ICdMZWFybiBNb3JlJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIGltYWdlOiBibG9nSW1hZ2U0LFxuICAvLyAgIHRpdGxlOlxuICAvLyAgICAgJ1RlYW0gcHJlc2VudGF0aW9uIHdpdGggbGF0ZXN0IHVzZXIgaW50ZXJmYWNlICYgZXhwZXJpZW5jZSByZWFjaCBtb3JlJyxcbiAgLy8gICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgLy8gICBwYXRoOiAnLycsXG4gIC8vICAgbGlua0xhYmVsOiBudWxsLFxuICAvLyB9LFxuXTtcblxuY29uc3QgbWFzb25yeU9wdGlvbnMgPSB7XG4gIHRyYW5zaXRpb25EdXJhdGlvbjogMCxcbn07XG5cbmNvbnN0IEJsb2dzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJuZXdzXCIgc3g9e3N0eWxlcy5ibG9nc30+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8QmxvY2tUaXRsZVxuICAgICAgICAgIHRpdGxlPVwiTWVldCB0aGUgdGVhbSBcIlxuICAgICAgICAgIHRleHQ9XCJUZWFtIEt1YmVybWV0cmljc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggYXM9e01hc29ucnl9IG9wdGlvbnM9e21hc29ucnlPcHRpb25zfSBzeD17c3R5bGVzLmJsb2dXcmFwcGVyfT5cbiAgICAgICAgICB7QkxPR19EQVRBLm1hcChcbiAgICAgICAgICAgICh7IGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHBhdGgsIGxpbmtMYWJlbCB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8QmxvZ0NhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIC8vIHBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgICAgLy8gbGlua0xhYmVsPXtsaW5rTGFiZWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dzO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJsb2dzOiB7XG4gICAgcHQ6IFsnODBweCcsIG51bGwsIG51bGwsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgcGI6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsICcxNDBweCcsIG51bGwsICcxMDBweCddLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMxYTFlMjEnXG4gIH0sXG4gIGJsb2dXcmFwcGVyOiB7XG4gICAgbXg6ICctMTVweCcsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/blogs.js\n");

/***/ })

})