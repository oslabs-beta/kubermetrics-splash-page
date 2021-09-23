webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/featured.js":
/*!**********************************!*\
  !*** ./src/sections/featured.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/block-title */ \"./src/components/block-title.js\");\n/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/image */ \"./src/components/image.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/tab-image-1.png */ \"./src/assets/tab-image-1.png\");\n/* harmony import */ var assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var assets_home_page_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/home-page.gif */ \"./src/assets/home-page.gif\");\n/* harmony import */ var assets_home_page_gif__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_home_page_gif__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var assets_metrics_page_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/metrics-page.gif */ \"./src/assets/metrics-page.gif\");\n/* harmony import */ var assets_metrics_page_gif__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_metrics_page_gif__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var assets_alerts_page_gif__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/alerts-page.gif */ \"./src/assets/alerts-page.gif\");\n/* harmony import */ var assets_alerts_page_gif__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_alerts_page_gif__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/dot-pattern.svg */ \"./src/assets/dot-pattern.svg\");\n/* harmony import */ var assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ahadrajput/Documents/Codesmith/Open_Source_Project/kubermetrics-splash-page/src/sections/featured.js\",\n    _s = $RefreshSig$(),\n    _templateObject;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Featured = function Featured() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    active: 'budget'\n  }),\n      tab = _useState[0],\n      setTab = _useState[1];\n\n  var handleTab = function handleTab(tab) {\n    if (tab === 'budget') {\n      setTab(_objectSpread(_objectSpread({}, tab), {}, {\n        active: 'budget'\n      }));\n    }\n\n    if (tab === 'adjust') {\n      setTab(_objectSpread(_objectSpread({}, tab), {}, {\n        active: 'adjust'\n      }));\n    }\n\n    if (tab === 'report') {\n      setTab(_objectSpread(_objectSpread({}, tab), {}, {\n        active: 'report'\n      }));\n    }\n\n    if (tab === 'create') {\n      setTab(_objectSpread(_objectSpread({}, tab), {}, {\n        active: 'create'\n      }));\n    }\n  };\n\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    as: \"section\",\n    sx: styles.featured,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    sx: styles.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Features\",\n    text: \"Kubernetes Monitoring Made Simple\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    sx: styles.tabButtonTopWrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    sx: styles.tabButtonWrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    onClick: function onClick() {\n      return handleTab('budget');\n    },\n    className: \"\".concat(tab.active === 'budget' ? 'active' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__[\"AiFillHome\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 15\n    }\n  }), \"Home Page\"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    onClick: function onClick() {\n      return handleTab('adjust');\n    },\n    className: \"\".concat(tab.active === 'adjust' ? 'active' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__[\"FaCog\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }), \"Metrics Page\"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    onClick: function onClick() {\n      return handleTab('report');\n    },\n    className: \"\".concat(tab.active === 'report' ? 'active' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__[\"AiFillPieChart\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 15\n    }\n  }), \"Alerts Page\"))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    sx: styles.tabContent,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, tab.active === 'budget' && __jsx(components_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    src: assets_home_page_gif__WEBPACK_IMPORTED_MODULE_10___default.a,\n    alt: \"tab image\",\n    className: \"tabImage\",\n    sx: styles.img,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }), tab.active === 'create' && __jsx(components_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    src: assets_metrics_page_gif__WEBPACK_IMPORTED_MODULE_11___default.a,\n    alt: \"tab image\",\n    className: \"tabImage\",\n    sx: styles.img,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }), tab.active === 'adjust' && __jsx(components_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    src: assets_metrics_page_gif__WEBPACK_IMPORTED_MODULE_11___default.a,\n    alt: \"tab image\",\n    className: \"tabImage\",\n    sx: styles.img,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }), tab.active === 'report' && __jsx(components_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    src: assets_alerts_page_gif__WEBPACK_IMPORTED_MODULE_12___default.a,\n    alt: \"tab image\",\n    className: \"tabImage\",\n    sx: styles.img,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(Featured, \"QJAPM1R0IERUXeu0JZkmC8XPiQI=\");\n\n_c = Featured;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Featured);\nvar fadeIn = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"keyframes\"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n\"])));\nvar styles = {\n  featured: {\n    pt: ['80px', null, null, null, '80px', null, '100px'],\n    backgroundColor: '#1a1e21',\n    height: '1000px'\n  },\n  img: {\n    borderRadius: '10px',\n    boxShadow: '5px 5px 15px 5px rgba(255,255,255,0.65)'\n  },\n  container: {\n    position: 'relative',\n    top: '150px',\n    mt: '-150px'\n  },\n  tabButtonTopWrapper: {\n    overflowY: ['hidden', null, null, null, null, 'inherit'],\n    overflowX: ['auto', null, null, null, null, 'inherit']\n  },\n  tabButtonWrapper: {\n    width: ['700px', null, null, null, null, '100%'],\n    mx: ['auto', null, null, null, null, '0'],\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    borderBottom: '1px solid rgba(1,7,13,.1)',\n    mb: '35px',\n    button: {\n      display: 'flex',\n      alignItems: 'center',\n      pb: ['15px', null, null, null, '35px'],\n      px: ['15px', null, null, null, '30px'],\n      flexShrink: '0',\n      border: 0,\n      backgroundColor: 'rgba(0,0,0,0)',\n      color: 'white',\n      fontSize: ['14px', null, null, null, '18px'],\n      fontWeight: 500,\n      lineHeight: 1,\n      position: 'relative',\n      transition: 'all 500ms ease',\n      svg: {\n        fontSize: ['18px', null, null, null, '30px'],\n        color: '#ADBDD0',\n        opacity: 0.7,\n        mr: '15px',\n        transition: 'all 500ms ease'\n      },\n      '&:hover, &.active': {\n        backgroundColor: 'rgba(0,0,0,0)',\n        color: 'white',\n        svg: {\n          color: 'white',\n          opacity: 1\n        },\n        '&::before': {\n          transform: 'scale(1,1)'\n        }\n      },\n      '&::before': {\n        content: \"''\",\n        position: 'absolute',\n        bottom: '-2px',\n        backgroundColor: '#0F2137',\n        left: 0,\n        width: '100%',\n        height: '3px',\n        transform: 'scale(0,1)',\n        transition: 'transform 500ms ease'\n      }\n    }\n  },\n  tabContent: {\n    minHeight: ['190px', null, '300px', '385px', null, '600px'],\n    position: 'relative',\n    '&::before': {\n      content: \"''\",\n      width: '302px',\n      height: '347px',\n      backgroundImage: \"url(\".concat(assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_13___default.a, \")\"),\n      position: 'absolute',\n      bottom: '-30px',\n      right: '-40px',\n      display: ['none', null, null, null, null, 'block']\n    },\n    '.tabImage': {\n      position: 'relative',\n      animation: \"\".concat(fadeIn, \" 0.8s linear\")\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Featured\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmVkLmpzP2NlZGMiXSwibmFtZXMiOlsiRmVhdHVyZWQiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInRhYiIsInNldFRhYiIsImhhbmRsZVRhYiIsInN0eWxlcyIsImZlYXR1cmVkIiwiY29udGFpbmVyIiwidGFiQnV0dG9uVG9wV3JhcHBlciIsInRhYkJ1dHRvbldyYXBwZXIiLCJ0YWJDb250ZW50IiwiaG9tZVBhZ2UiLCJpbWciLCJtZXRyaWNzUGFnZSIsImFsZXJ0c1BhZ2UiLCJmYWRlSW4iLCJrZXlmcmFtZXMiLCJwdCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsInBvc2l0aW9uIiwidG9wIiwibXQiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJ3aWR0aCIsIm14IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJvcmRlckJvdHRvbSIsIm1iIiwiYnV0dG9uIiwicGIiLCJweCIsImZsZXhTaHJpbmsiLCJib3JkZXIiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJ0cmFuc2l0aW9uIiwic3ZnIiwib3BhY2l0eSIsIm1yIiwidHJhbnNmb3JtIiwiY29udGVudCIsImJvdHRvbSIsImxlZnQiLCJtaW5IZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkb3RQYXR0ZXJuIiwicmlnaHQiLCJhbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsa0JBQXNCQyxzREFBUSxDQUFDO0FBQzdCQyxVQUFNLEVBQUU7QUFEcUIsR0FBRCxDQUE5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QUFELEVBQVUsSUFBVixFQUFnQixPQUFoQixFQUF5QixPQUF6QixFQUFrQyxJQUFsQyxFQUF3QyxPQUF4QyxDQUREO0FBRVY3QixZQUFRLEVBQUUsVUFGQTtBQUdWLGlCQUFhO0FBQ1gwQixhQUFPLEVBQUUsSUFERTtBQUVYckIsV0FBSyxFQUFFLE9BRkk7QUFHWFIsWUFBTSxFQUFFLE9BSEc7QUFJWGlDLHFCQUFlLGdCQUFTQyw4REFBVCxNQUpKO0FBS1gvQixjQUFRLEVBQUUsVUFMQztBQU1YMkIsWUFBTSxFQUFFLE9BTkc7QUFPWEssV0FBSyxFQUFFLE9BUEk7QUFRWHpCLGFBQU8sRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxPQUFqQztBQVJFLEtBSEg7QUFhVixpQkFBYTtBQUNYUCxjQUFRLEVBQUUsVUFEQztBQUVYaUMsZUFBUyxZQUFLeEMsTUFBTDtBQUZFO0FBYkg7QUF4RUMsQ0FBZiIsImZpbGUiOiIuL3NyYy9zZWN0aW9ucy9mZWF0dXJlZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvYmxvY2stdGl0bGUnO1xuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xuaW1wb3J0IHsgQWlGaWxsRG9sbGFyQ2lyY2xlLCBBaUZpbGxQaWVDaGFydCwgQWlGaWxsSG9tZSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcbmltcG9ydCB7IEZhQnJpZWZjYXNlLCBGYUNvZyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB0YWJJbWFnZTEgZnJvbSAnYXNzZXRzL3RhYi1pbWFnZS0xLnBuZyc7XG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnYXNzZXRzL2hvbWUtcGFnZS5naWYnO1xuaW1wb3J0IG1ldHJpY3NQYWdlIGZyb20gJ2Fzc2V0cy9tZXRyaWNzLXBhZ2UuZ2lmJztcbmltcG9ydCBhbGVydHNQYWdlIGZyb20gJ2Fzc2V0cy9hbGVydHMtcGFnZS5naWYnO1xuaW1wb3J0IGRvdFBhdHRlcm4gZnJvbSAnYXNzZXRzL2RvdC1wYXR0ZXJuLnN2Zyc7XG5cblxuY29uc3QgRmVhdHVyZWQgPSAoKSA9PiB7XG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aXZlOiAnYnVkZ2V0JyxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlVGFiID0gKHRhYikgPT4ge1xuICAgIGlmICh0YWIgPT09ICdidWRnZXQnKSB7XG4gICAgICBzZXRUYWIoe1xuICAgICAgICAuLi50YWIsXG4gICAgICAgIGFjdGl2ZTogJ2J1ZGdldCcsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRhYiA9PT0gJ2FkanVzdCcpIHtcbiAgICAgIHNldFRhYih7XG4gICAgICAgIC4uLnRhYixcbiAgICAgICAgYWN0aXZlOiAnYWRqdXN0JyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGFiID09PSAncmVwb3J0Jykge1xuICAgICAgc2V0VGFiKHtcbiAgICAgICAgLi4udGFiLFxuICAgICAgICBhY3RpdmU6ICdyZXBvcnQnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0YWIgPT09ICdjcmVhdGUnKSB7XG4gICAgICBzZXRUYWIoe1xuICAgICAgICAuLi50YWIsXG4gICAgICAgIGFjdGl2ZTogJ2NyZWF0ZScsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLmZlYXR1cmVkfT5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8QmxvY2tUaXRsZVxuICAgICAgICAgIHRpdGxlPVwiRmVhdHVyZXNcIlxuICAgICAgICAgIHRleHQ9XCJLdWJlcm5ldGVzIE1vbml0b3JpbmcgTWFkZSBTaW1wbGVcIlxuICAgICAgICAvPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGFiQnV0dG9uVG9wV3JhcHBlcn0+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLnRhYkJ1dHRvbldyYXBwZXJ9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWIoJ2J1ZGdldCcpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3RhYi5hY3RpdmUgPT09ICdidWRnZXQnID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWlGaWxsSG9tZSAvPlxuICAgICAgICAgICAgICBIb21lIFBhZ2VcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWIoJ2FkanVzdCcpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3RhYi5hY3RpdmUgPT09ICdhZGp1c3QnID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFDb2cgLz5cbiAgICAgICAgICAgICAgTWV0cmljcyBQYWdlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiKCdyZXBvcnQnKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHt0YWIuYWN0aXZlID09PSAncmVwb3J0JyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFpRmlsbFBpZUNoYXJ0IC8+XG4gICAgICAgICAgICAgIEFsZXJ0cyBQYWdlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy50YWJDb250ZW50fT5cbiAgICAgICAgICB7dGFiLmFjdGl2ZSA9PT0gJ2J1ZGdldCcgJiYgKFxuICAgICAgICAgICAgPEltYWdlIHNyYz17aG9tZVBhZ2V9IGFsdD1cInRhYiBpbWFnZVwiIGNsYXNzTmFtZT1cInRhYkltYWdlXCIgc3g9e3N0eWxlcy5pbWd9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGFiLmFjdGl2ZSA9PT0gJ2NyZWF0ZScgJiYgKFxuICAgICAgICAgICAgPEltYWdlIHNyYz17bWV0cmljc1BhZ2V9IGFsdD1cInRhYiBpbWFnZVwiIGNsYXNzTmFtZT1cInRhYkltYWdlXCIgc3g9e3N0eWxlcy5pbWd9Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0YWIuYWN0aXZlID09PSAnYWRqdXN0JyAmJiAoXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXttZXRyaWNzUGFnZX0gYWx0PVwidGFiIGltYWdlXCIgY2xhc3NOYW1lPVwidGFiSW1hZ2VcIiBzeD17c3R5bGVzLmltZ30gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0YWIuYWN0aXZlID09PSAncmVwb3J0JyAmJiAoXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXthbGVydHNQYWdlfSBhbHQ9XCJ0YWIgaW1hZ2VcIiBjbGFzc05hbWU9XCJ0YWJJbWFnZVwiIHN4PXtzdHlsZXMuaW1nfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZDtcbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmZWF0dXJlZDoge1xuICAgIHB0OiBbJzgwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMxYTFlMjEnLFxuICAgIGhlaWdodDogJzEwMDBweCdcbiAgfSxcbiAgaW1nOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgYm94U2hhZG93OiAnNXB4IDVweCAxNXB4IDVweCByZ2JhKDI1NSwyNTUsMjU1LDAuNjUpJ1xuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3A6ICcxNTBweCcsXG4gICAgbXQ6ICctMTUwcHgnLFxuICB9LFxuICB0YWJCdXR0b25Ub3BXcmFwcGVyOiB7XG4gICAgb3ZlcmZsb3dZOiBbJ2hpZGRlbicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdpbmhlcml0J10sXG4gICAgb3ZlcmZsb3dYOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnaW5oZXJpdCddLFxuICB9LFxuICB0YWJCdXR0b25XcmFwcGVyOiB7XG4gICAgd2lkdGg6IFsnNzAwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTAwJSddLFxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMCddLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMSw3LDEzLC4xKScsXG4gICAgbWI6ICczNXB4JyxcbiAgICBidXR0b246IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcGI6IFsnMTVweCcsIG51bGwsIG51bGwsIG51bGwsICczNXB4J10sXG4gICAgICBweDogWycxNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHgnXSxcbiAgICAgIGZsZXhTaHJpbms6ICcwJyxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzE4cHgnXSxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgNTAwbXMgZWFzZScsXG4gICAgICBzdmc6IHtcbiAgICAgICAgZm9udFNpemU6IFsnMThweCcsIG51bGwsIG51bGwsIG51bGwsICczMHB4J10sXG4gICAgICAgIGNvbG9yOiAnI0FEQkREMCcsXG4gICAgICAgIG9wYWNpdHk6IDAuNyxcbiAgICAgICAgbXI6ICcxNXB4JyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCA1MDBtcyBlYXNlJyxcbiAgICAgIH0sXG4gICAgICAnJjpob3ZlciwgJi5hY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgc3ZnOiB7XG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgfSxcbiAgICAgICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLDEpJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgICBjb250ZW50OiBcIicnXCIsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBib3R0b206ICctMnB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzBGMjEzNycsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzNweCcsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAsMSknLFxuICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDUwMG1zIGVhc2UnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB0YWJDb250ZW50OiB7XG4gICAgbWluSGVpZ2h0OiBbJzE5MHB4JywgbnVsbCwgJzMwMHB4JywgJzM4NXB4JywgbnVsbCwgJzYwMHB4J10sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIGNvbnRlbnQ6IFwiJydcIixcbiAgICAgIHdpZHRoOiAnMzAycHgnLFxuICAgICAgaGVpZ2h0OiAnMzQ3cHgnLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZG90UGF0dGVybn0pYCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm90dG9tOiAnLTMwcHgnLFxuICAgICAgcmlnaHQ6ICctNDBweCcsXG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnYmxvY2snXSxcbiAgICB9LFxuICAgICcudGFiSW1hZ2UnOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUlufSAwLjhzIGxpbmVhcmAsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/featured.js\n");

/***/ })

})