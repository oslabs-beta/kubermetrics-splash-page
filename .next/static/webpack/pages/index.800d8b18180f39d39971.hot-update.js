webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/blogs.js":
/*!*******************************!*\
  !*** ./src/sections/blogs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-masonry-component */ \"./node_modules/react-masonry-component/lib/index.js\");\n/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/block-title */ \"./src/components/block-title.js\");\n/* harmony import */ var components_cards_blog_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cards/blog-card */ \"./src/components/cards/blog-card.js\");\n/* harmony import */ var assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/blog-1-1.png */ \"./src/assets/blog-1-1.png\");\n/* harmony import */ var assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/blog-1-2.png */ \"./src/assets/blog-1-2.png\");\n/* harmony import */ var assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/blog-1-3.png */ \"./src/assets/blog-1-3.png\");\n/* harmony import */ var assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/blog-1-4.png */ \"./src/assets/blog-1-4.png\");\n/* harmony import */ var assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ahadrajput/Documents/Codesmith/Open_Source_Project/kubermetrics-splash-page/src/sections/blogs.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar BLOG_DATA = [{\n  image: assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5___default.a,\n  title: 'How to work with prototype design with adobe xd featuring tools',\n  description: 'The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design',\n  path: '/',\n  linkLabel: 'Learn More'\n}, {\n  image: null,\n  title: 'Antibias receives honorable gift mention at Fast Company’s most Innovation by Design Awards',\n  description: null,\n  path: '/',\n  linkLabel: null\n}, {\n  image: assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7___default.a,\n  title: 'Multiple task wireframing with team management perform better',\n  description: null,\n  path: '/',\n  linkLabel: null\n}, {\n  image: assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n  title: 'Multiple art board prototype with Figma',\n  description: 'Beyond launched antibias, a Chrome extension that replaces LinkedIn profile photos',\n  path: '/',\n  linkLabel: 'Learn More'\n}, {\n  image: assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8___default.a,\n  title: 'Team presentation with latest user interface & experience reach more',\n  description: null,\n  path: '/',\n  linkLabel: null\n}];\nvar masonryOptions = {\n  transitionDuration: 0\n};\n\nvar Blogs = function Blogs() {\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    as: \"section\",\n    id: \"news\",\n    sx: styles.blogs,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Meet the team \",\n    text: \"Team Kubermetrics\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    as: react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default.a,\n    options: masonryOptions,\n    sx: styles.blogWrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, BLOG_DATA.map(function (_ref, index) {\n    var image = _ref.image,\n        title = _ref.title,\n        description = _ref.description,\n        path = _ref.path,\n        linkLabel = _ref.linkLabel;\n    return __jsx(components_cards_blog_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: index,\n      image: image,\n      title: title,\n      description: description,\n      path: path,\n      linkLabel: linkLabel,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 15\n      }\n    });\n  }))));\n};\n\n_c = Blogs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogs);\nvar styles = {\n  blogs: {\n    pt: ['80px', null, null, null, '80px', null, '100px'],\n    pb: ['40px', null, null, null, '140px', null, '100px'],\n    color: 'white'\n  },\n  blogWrapper: {\n    mx: '-15px'\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Blogs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jsb2dzLmpzP2QyNGIiXSwibmFtZXMiOlsiQkxPR19EQVRBIiwiaW1hZ2UiLCJibG9nSW1hZ2UxIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBhdGgiLCJsaW5rTGFiZWwiLCJibG9nSW1hZ2UzIiwiYmxvZ0ltYWdlMiIsImJsb2dJbWFnZTQiLCJtYXNvbnJ5T3B0aW9ucyIsInRyYW5zaXRpb25EdXJhdGlvbiIsIkJsb2dzIiwic3R5bGVzIiwiYmxvZ3MiLCJNYXNvbnJ5IiwiYmxvZ1dyYXBwZXIiLCJtYXAiLCJpbmRleCIsInB0IiwicGIiLCJjb2xvciIsIm14Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNoQjtBQUNFQyxPQUFLLEVBQUVDLDBEQURUO0FBRUVDLE9BQUssRUFBRSxpRUFGVDtBQUdFQyxhQUFXLEVBQ1QsK0pBSko7QUFLRUMsTUFBSSxFQUFFLEdBTFI7QUFNRUMsV0FBUyxFQUFFO0FBTmIsQ0FEZ0IsRUFTaEI7QUFDRUwsT0FBSyxFQUFFLElBRFQ7QUFFRUUsT0FBSyxFQUNILDZGQUhKO0FBSUVDLGFBQVcsRUFBRSxJQUpmO0FBS0VDLE1BQUksRUFBRSxHQUxSO0FBTUVDLFdBQVMsRUFBRTtBQU5iLENBVGdCLEVBaUJoQjtBQUNFTCxPQUFLLEVBQUVNLDBEQURUO0FBRUVKLE9BQUssRUFBRSwrREFGVDtBQUdFQyxhQUFXLEVBQUUsSUFIZjtBQUlFQyxNQUFJLEVBQUUsR0FKUjtBQUtFQyxXQUFTLEVBQUU7QUFMYixDQWpCZ0IsRUF3QmhCO0FBQ0VMLE9BQUssRUFBRU8sMERBRFQ7QUFFRUwsT0FBSyxFQUFFLHlDQUZUO0FBR0VDLGFBQVcsRUFDVCxvRkFKSjtBQUtFQyxNQUFJLEVBQUUsR0FMUjtBQU1FQyxXQUFTLEVBQUU7QUFOYixDQXhCZ0IsRUFnQ2hCO0FBQ0VMLE9BQUssRUFBRVEsMERBRFQ7QUFFRU4sT0FBSyxFQUNILHNFQUhKO0FBSUVDLGFBQVcsRUFBRSxJQUpmO0FBS0VDLE1BQUksRUFBRSxHQUxSO0FBTUVDLFdBQVMsRUFBRTtBQU5iLENBaENnQixDQUFsQjtBQTBDQSxJQUFNSSxjQUFjLEdBQUc7QUFDckJDLG9CQUFrQixFQUFFO0FBREMsQ0FBdkI7O0FBSUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixTQUNFLE1BQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFrQixNQUFFLEVBQUMsTUFBckI7QUFBNEIsTUFBRSxFQUFFQyxNQUFNLENBQUNDLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQ0UsU0FBSyxFQUFDLGdCQURSO0FBRUUsUUFBSSxFQUFDLG1CQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFLE1BQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVDLDhEQUFUO0FBQWtCLFdBQU8sRUFBRUwsY0FBM0I7QUFBMkMsTUFBRSxFQUFFRyxNQUFNLENBQUNHLFdBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2hCLFNBQVMsQ0FBQ2lCLEdBQVYsQ0FDQyxnQkFBaURDLEtBQWpEO0FBQUEsUUFBR2pCLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFFBQVVFLEtBQVYsUUFBVUEsS0FBVjtBQUFBLFFBQWlCQyxXQUFqQixRQUFpQkEsV0FBakI7QUFBQSxRQUE4QkMsSUFBOUIsUUFBOEJBLElBQTlCO0FBQUEsUUFBb0NDLFNBQXBDLFFBQW9DQSxTQUFwQztBQUFBLFdBQ0UsTUFBQyxrRUFBRDtBQUNFLFNBQUcsRUFBRVksS0FEUDtBQUVFLFdBQUssRUFBRWpCLEtBRlQ7QUFHRSxXQUFLLEVBQUVFLEtBSFQ7QUFJRSxpQkFBVyxFQUFFQyxXQUpmO0FBS0UsVUFBSSxFQUFFQyxJQUxSO0FBTUUsZUFBUyxFQUFFQyxTQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQUFBLEdBREQsQ0FESCxDQUxGLENBREYsQ0FERjtBQXdCRCxDQXpCRDs7S0FBTU0sSztBQTJCU0Esb0VBQWY7QUFFQSxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsT0FBSyxFQUFFO0FBQ0xLLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixNQUEzQixFQUFtQyxJQUFuQyxFQUF5QyxPQUF6QyxDQURDO0FBRUxDLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixPQUEzQixFQUFvQyxJQUFwQyxFQUEwQyxPQUExQyxDQUZDO0FBR0xDLFNBQUssRUFBRTtBQUhGLEdBRE07QUFNYkwsYUFBVyxFQUFFO0FBQ1hNLE1BQUUsRUFBRTtBQURPO0FBTkEsQ0FBZiIsImZpbGUiOiIuL3NyYy9zZWN0aW9ucy9ibG9ncy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50JztcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvYmxvY2stdGl0bGUnO1xuaW1wb3J0IEJsb2dDYXJkIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvYmxvZy1jYXJkJztcblxuaW1wb3J0IGJsb2dJbWFnZTEgZnJvbSAnYXNzZXRzL2Jsb2ctMS0xLnBuZyc7XG5pbXBvcnQgYmxvZ0ltYWdlMiBmcm9tICdhc3NldHMvYmxvZy0xLTIucG5nJztcbmltcG9ydCBibG9nSW1hZ2UzIGZyb20gJ2Fzc2V0cy9ibG9nLTEtMy5wbmcnO1xuaW1wb3J0IGJsb2dJbWFnZTQgZnJvbSAnYXNzZXRzL2Jsb2ctMS00LnBuZyc7XG5cbmNvbnN0IEJMT0dfREFUQSA9IFtcbiAge1xuICAgIGltYWdlOiBibG9nSW1hZ2UxLFxuICAgIHRpdGxlOiAnSG93IHRvIHdvcmsgd2l0aCBwcm90b3R5cGUgZGVzaWduIHdpdGggYWRvYmUgeGQgZmVhdHVyaW5nIHRvb2xzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUaGUgMjAxOSBJbm5vdmF0aW9uIGJ5IERlc2lnbiBBd2FyZHMgaG9ub3IgdGhlIGRlc2lnbmVycyBhbmQgYnVzaW5lc3NlcyBzb2x2aW5nIHRoZSBwcm9ibGVtcyBvZiB0b2RheSBhbmQgdG9tb3Jyb3cuIEl0IGlzIG9uZSBvZiB0aGUgbW9zdCBzb3VnaHQtYWZ0ZXIgZGVzaWduJyxcbiAgICBwYXRoOiAnLycsXG4gICAgbGlua0xhYmVsOiAnTGVhcm4gTW9yZScsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogbnVsbCxcbiAgICB0aXRsZTpcbiAgICAgICdBbnRpYmlhcyByZWNlaXZlcyBob25vcmFibGUgZ2lmdCBtZW50aW9uIGF0IEZhc3QgQ29tcGFueeKAmXMgbW9zdCBJbm5vdmF0aW9uIGJ5IERlc2lnbiBBd2FyZHMnLFxuICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgIHBhdGg6ICcvJyxcbiAgICBsaW5rTGFiZWw6IG51bGwsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogYmxvZ0ltYWdlMyxcbiAgICB0aXRsZTogJ011bHRpcGxlIHRhc2sgd2lyZWZyYW1pbmcgd2l0aCB0ZWFtIG1hbmFnZW1lbnQgcGVyZm9ybSBiZXR0ZXInLFxuICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgIHBhdGg6ICcvJyxcbiAgICBsaW5rTGFiZWw6IG51bGwsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogYmxvZ0ltYWdlMixcbiAgICB0aXRsZTogJ011bHRpcGxlIGFydCBib2FyZCBwcm90b3R5cGUgd2l0aCBGaWdtYScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQmV5b25kIGxhdW5jaGVkIGFudGliaWFzLCBhIENocm9tZSBleHRlbnNpb24gdGhhdCByZXBsYWNlcyBMaW5rZWRJbiBwcm9maWxlIHBob3RvcycsXG4gICAgcGF0aDogJy8nLFxuICAgIGxpbmtMYWJlbDogJ0xlYXJuIE1vcmUnLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IGJsb2dJbWFnZTQsXG4gICAgdGl0bGU6XG4gICAgICAnVGVhbSBwcmVzZW50YXRpb24gd2l0aCBsYXRlc3QgdXNlciBpbnRlcmZhY2UgJiBleHBlcmllbmNlIHJlYWNoIG1vcmUnLFxuICAgIGRlc2NyaXB0aW9uOiBudWxsLFxuICAgIHBhdGg6ICcvJyxcbiAgICBsaW5rTGFiZWw6IG51bGwsXG4gIH0sXG5dO1xuXG5jb25zdCBtYXNvbnJ5T3B0aW9ucyA9IHtcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAwLFxufTtcblxuY29uc3QgQmxvZ3MgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cIm5ld3NcIiBzeD17c3R5bGVzLmJsb2dzfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCbG9ja1RpdGxlXG4gICAgICAgICAgdGl0bGU9XCJNZWV0IHRoZSB0ZWFtIFwiXG4gICAgICAgICAgdGV4dD1cIlRlYW0gS3ViZXJtZXRyaWNzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBhcz17TWFzb25yeX0gb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9IHN4PXtzdHlsZXMuYmxvZ1dyYXBwZXJ9PlxuICAgICAgICAgIHtCTE9HX0RBVEEubWFwKFxuICAgICAgICAgICAgKHsgaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcGF0aCwgbGlua0xhYmVsIH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxCbG9nQ2FyZFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgICBsaW5rTGFiZWw9e2xpbmtMYWJlbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ3M7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYmxvZ3M6IHtcbiAgICBwdDogWyc4MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICBwYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzE0MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgY29sb3I6ICd3aGl0ZSdcbiAgfSxcbiAgYmxvZ1dyYXBwZXI6IHtcbiAgICBteDogJy0xNXB4JyxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/blogs.js\n");

/***/ })

})