/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/card/[productId]"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CVova%5CDocuments%5CChiliLabs_test%5Cchililabs_test%5Cpages%5Ccard%5C%5BproductId%5D.tsx&page=%2Fcard%2F%5BproductId%5D!":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CVova%5CDocuments%5CChiliLabs_test%5Cchililabs_test%5Cpages%5Ccard%5C%5BproductId%5D.tsx&page=%2Fcard%2F%5BproductId%5D! ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/card/[productId]\",\n      function () {\n        return __webpack_require__(/*! ./pages/card/[productId].tsx */ \"./pages/card/[productId].tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/card/[productId]\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUNWb3ZhJTVDRG9jdW1lbnRzJTVDQ2hpbGlMYWJzX3Rlc3QlNUNjaGlsaWxhYnNfdGVzdCU1Q3BhZ2VzJTVDY2FyZCU1QyU1QnByb2R1Y3RJZCU1RC50c3gmcGFnZT0lMkZjYXJkJTJGJTVCcHJvZHVjdElkJTVEISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLGtFQUE4QjtBQUNyRDtBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/MjgzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2NhcmQvW3Byb2R1Y3RJZF1cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2NhcmQvW3Byb2R1Y3RJZF0udHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9jYXJkL1twcm9kdWN0SWRdXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CVova%5CDocuments%5CChiliLabs_test%5Cchililabs_test%5Cpages%5Ccard%5C%5BproductId%5D.tsx&page=%2Fcard%2F%5BproductId%5D!\n"));

/***/ }),

/***/ "./Utils/fetchProducts.tsx":
/*!*********************************!*\
  !*** ./Utils/fetchProducts.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchProducts: function() { return /* binding */ fetchProducts; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n\n\nvar fetchProducts = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var response, result;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd\")\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    result = _state.sent();\n                    return [\n                        2,\n                        result\n                    ];\n            }\n        });\n    });\n    return function fetchProducts() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VdGlscy9mZXRjaFByb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFPLElBQU1BO2VBQWdCO1lBQ3JCQyxVQUdBQzs7OztvQkFIVzs7d0JBQU1DLE1BQ3JCOzs7b0JBRElGLFdBQVc7b0JBR0Y7O3dCQUFNQSxTQUFTRyxJQUFJOzs7b0JBQTVCRixTQUFTO29CQUNmOzt3QkFBT0E7Ozs7SUFDVDtvQkFOYUY7OztJQU1YIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL1V0aWxzL2ZldGNoUHJvZHVjdHMudHN4P2M4YjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIFwiaHR0cHM6Ly9ydW4ubW9ja3kuaW8vdjMvYjU0ZmU5M2YtZjVhMS00MjZiLWE3NmMtZTQzZDI0NjkwMWZkXCJcclxuICApO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuIFxyXG4iXSwibmFtZXMiOlsiZmV0Y2hQcm9kdWN0cyIsInJlc3BvbnNlIiwicmVzdWx0IiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Utils/fetchProducts.tsx\n"));

/***/ }),

/***/ "./components/Products/ProductItem/ProductItem.styles.tsx":
/*!****************************************************************!*\
  !*** ./components/Products/ProductItem/ProductItem.styles.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductCategory: function() { return /* binding */ ProductCategory; },\n/* harmony export */   ProductName: function() { return /* binding */ ProductName; },\n/* harmony export */   ProductPrice: function() { return /* binding */ ProductPrice; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin: 0 0 10px 0;\\n  font-weight: 600;\\n  text-decoration: none;\\n  font-size: \",\n        \";\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-style: italic;\\n  font-size: \",\n        \";\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin: \",\n        \";\\n  span {\\n    color: #ad5502;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar ProductCategory = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"ProductItem.styles__ProductCategory\",\n    componentId: \"sc-13d3f877-0\"\n})(_templateObject(), function(props) {\n    return props.$fontSize || \"20px\";\n});\nvar ProductName = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"ProductItem.styles__ProductName\",\n    componentId: \"sc-13d3f877-1\"\n})(_templateObject1(), function(props) {\n    return props.$fontSize || \"20px\";\n});\nvar ProductPrice = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"ProductItem.styles__ProductPrice\",\n    componentId: \"sc-13d3f877-2\"\n})(_templateObject2(), function(props) {\n    return props.$margin || \"0\";\n});\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtLnN0eWxlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBY3ZDLElBQU1DLGtCQUFrQkQsNkRBQVU7OztzQkFJbkIsU0FBQ0c7V0FBVUEsTUFBTUMsU0FBUyxJQUFJOztBQUc3QyxJQUFNQyxjQUFjTCw2REFBVTs7O3VCQUVmLFNBQUNHO1dBQVVBLE1BQU1DLFNBQVMsSUFBSTs7QUFHN0MsSUFBTUUsZUFBZU4sNkRBQVU7Ozt1QkFDbkIsU0FBQ0c7V0FBVUEsTUFBTUksT0FBTyxJQUFJOztBQU1jIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdEl0ZW0vUHJvZHVjdEl0ZW0uc3R5bGVzLnRzeD9lNzc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdENhdGVnb3J5UHJvcHMge1xyXG4gICRmb250U2l6ZT86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3ROYW1lUHJvcHMge1xyXG4gICRmb250U2l6ZT86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RQcmljZVByb3BzIHtcclxuICAkbWFyZ2luPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBQcm9kdWN0Q2F0ZWdvcnkgPSBzdHlsZWQuZGl2PFByb2R1Y3RDYXRlZ29yeVByb3BzPmBcclxuICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMuJGZvbnRTaXplIHx8IFwiMjBweFwifTtcclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3ROYW1lID0gc3R5bGVkLmRpdjxQcm9kdWN0TmFtZVByb3BzPmBcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMuJGZvbnRTaXplIHx8IFwiMjBweFwifTtcclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RQcmljZSA9IHN0eWxlZC5kaXY8UHJvZHVjdFByaWNlUHJvcHM+YFxyXG4gIG1hcmdpbjogJHsocHJvcHMpID0+IHByb3BzLiRtYXJnaW4gfHwgXCIwXCJ9O1xyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICNhZDU1MDI7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IHsgUHJvZHVjdENhdGVnb3J5LCBQcm9kdWN0TmFtZSwgUHJvZHVjdFByaWNlIH07Il0sIm5hbWVzIjpbInN0eWxlZCIsIlByb2R1Y3RDYXRlZ29yeSIsImRpdiIsInByb3BzIiwiJGZvbnRTaXplIiwiUHJvZHVjdE5hbWUiLCJQcm9kdWN0UHJpY2UiLCIkbWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Products/ProductItem/ProductItem.styles.tsx\n"));

/***/ }),

/***/ "./pages/card/[productId].tsx":
/*!************************************!*\
  !*** ./pages/card/[productId].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/fetchProducts */ \"./Utils/fetchProducts.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Products_ProductItem_ProductItem_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Products/ProductItem/ProductItem.styles */ \"./components/Products/ProductItem/ProductItem.styles.tsx\");\n\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 10px;\\n  background-color: #f5f5f5;\\n  border-radius: 15px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 16px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ProductDetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"[productId]__ProductDetailsWrapper\",\n    componentId: \"sc-cc474346-0\"\n})(_templateObject());\n_c = ProductDetailsWrapper;\nvar ProductDescription = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"[productId]__ProductDescription\",\n    componentId: \"sc-cc474346-1\"\n})(_templateObject1());\n_c1 = ProductDescription;\nvar ProductCard = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), productsDetails = _useState[0], setProductDetails = _useState[1];\n    var productId = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)().query.productId;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var filterProductDetailsById = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function() {\n                var result, filteredProductDetails;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                (0,_Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_3__.fetchProducts)()\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            if (productId) {\n                                filteredProductDetails = result.products.find(function(item) {\n                                    return item.id === parseInt(productId);\n                                });\n                                setProductDetails(filteredProductDetails);\n                            }\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function filterProductDetailsById() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        filterProductDetailsById();\n    }, [\n        productId\n    ]);\n    var _ref = productsDetails || {}, category = _ref.category, name = _ref.name, price = _ref.price, currency = _ref.currency, description = _ref.description;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: productsDetails ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProductDetailsWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Products_ProductItem_ProductItem_styles__WEBPACK_IMPORTED_MODULE_5__.ProductCategory, {\n                    $fontSize: \"23px\",\n                    children: category\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Products_ProductItem_ProductItem_styles__WEBPACK_IMPORTED_MODULE_5__.ProductName, {\n                    $fontSize: \"23px\",\n                    children: [\n                        \" \",\n                        name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Products_ProductItem_ProductItem_styles__WEBPACK_IMPORTED_MODULE_5__.ProductPrice, {\n                    $margin: \"0 0 20px 0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: [\n                            currency,\n                            \" \",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProductDescription, {\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Loading..\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 60,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(ProductCard, \"IMFxtSt1oIeXENdIHwK2YOumMOw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c2 = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ProductDetailsWrapper\");\n$RefreshReg$(_c1, \"ProductDescription\");\n$RefreshReg$(_c2, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJkL1twcm9kdWN0SWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDYztBQUNuQjtBQUNGO0FBSzZCO0FBSWxFLElBQU1RLHdCQUF3QkwsNkRBQVU7Ozs7S0FBbENLO0FBTU4sSUFBTUUscUJBQXFCUCw2REFBVTs7OztNQUEvQk87QUFJTixJQUFNQyxjQUFjOztJQUNsQixJQUE2Q1gsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFpQixXQUEvRFksa0JBQXNDWixjQUFyQmEsb0JBQXFCYjtJQUU3QyxJQUFNLFlBQWdCSSxzREFBU0EsR0FBR1csS0FBSyxDQUEvQkQ7SUFFUmIsZ0RBQVNBLENBQUM7UUFDUixJQUFNZTt1QkFBMkI7b0JBQ3pCQyxRQUVFQzs7Ozs0QkFGTzs7Z0NBQU1oQixtRUFBYUE7Ozs0QkFBNUJlLFNBQVM7NEJBQ2YsSUFBSUgsV0FBVztnQ0FDUEkseUJBQXlCRCxPQUFPRSxRQUFRLENBQUNDLElBQUksQ0FDakQsU0FBQ0M7MkNBQWtCQSxLQUFLQyxFQUFFLEtBQUtDLFNBQVNUOztnQ0FHMUNELGtCQUFrQks7NEJBQ3BCOzs7Ozs7WUFDRjs0QkFUTUY7Ozs7UUFXTkE7SUFDRixHQUFHO1FBQUNGO0tBQVU7SUFFZCxJQUNFRixPQUFBQSxtQkFBbUIsQ0FBQyxHQURkWSxXQUNOWixLQURNWSxVQUFVQyxPQUNoQmIsS0FEZ0JhLE1BQU1DLFFBQ3RCZCxLQURzQmMsT0FBT0MsV0FDN0JmLEtBRDZCZSxVQUFVQyxjQUN2Q2hCLEtBRHVDZ0I7SUFHekMscUJBQ0U7a0JBQ0doQixnQ0FDQyw4REFBQ0o7OzhCQUNDLDhEQUFDSCxnR0FBZUE7b0JBQUN3QixXQUFVOzhCQUFRTDs7Ozs7OzhCQUNuQyw4REFBQ2xCLDRGQUFXQTtvQkFBQ3VCLFdBQVU7O3dCQUFPO3dCQUFFSjs7Ozs7Ozs4QkFDaEMsOERBQUNsQiw2RkFBWUE7b0JBQUN1QixTQUFROzhCQUNwQiw0RUFBQ0M7OzRCQUNFSjs0QkFBUzs0QkFBRUQ7Ozs7Ozs7Ozs7Ozs4QkFHaEIsOERBQUNoQjs4QkFBb0JrQjs7Ozs7Ozs7Ozs7a0NBR3ZCLDhEQUFDbkI7c0JBQUk7Ozs7Ozs7QUFJYjtHQXpDTUU7O1FBR2tCUCxrREFBU0E7OztNQUgzQk87QUEyQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZC9bcHJvZHVjdElkXS50c3g/ZTEyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiLi4vLi4vVXRpbHMvZmV0Y2hQcm9kdWN0c1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7XHJcbiAgUHJvZHVjdENhdGVnb3J5LFxyXG4gIFByb2R1Y3ROYW1lLFxyXG4gIFByb2R1Y3RQcmljZSxcclxufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0SXRlbS9Qcm9kdWN0SXRlbS5zdHlsZXNcIjtcclxuXHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzLnR5cGVzXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0RGV0YWlsc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdERlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE2cHg7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0Q2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdHNEZXRhaWxzLCBzZXRQcm9kdWN0RGV0YWlsc10gPSB1c2VTdGF0ZTxQcm9kdWN0IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHsgcHJvZHVjdElkIH0gPSB1c2VSb3V0ZXIoKS5xdWVyeSBhcyB7IHByb2R1Y3RJZDogc3RyaW5nIH07XHJcbiBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmlsdGVyUHJvZHVjdERldGFpbHNCeUlkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaFByb2R1Y3RzKCk7XHJcbiAgICAgIGlmIChwcm9kdWN0SWQpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3REZXRhaWxzID0gcmVzdWx0LnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAoaXRlbTogUHJvZHVjdCkgPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQocHJvZHVjdElkKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNldFByb2R1Y3REZXRhaWxzKGZpbHRlcmVkUHJvZHVjdERldGFpbHMpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZpbHRlclByb2R1Y3REZXRhaWxzQnlJZCgpO1xyXG4gIH0sIFtwcm9kdWN0SWRdKTtcclxuXHJcbiAgY29uc3QgeyBjYXRlZ29yeSwgbmFtZSwgcHJpY2UsIGN1cnJlbmN5LCBkZXNjcmlwdGlvbiB9ID1cclxuICAgIHByb2R1Y3RzRGV0YWlscyB8fCB7fTtcclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cHJvZHVjdHNEZXRhaWxzID8gKFxyXG4gICAgICAgIDxQcm9kdWN0RGV0YWlsc1dyYXBwZXI+XHJcbiAgICAgICAgICA8UHJvZHVjdENhdGVnb3J5ICRmb250U2l6ZT1cIjIzcHhcIj57Y2F0ZWdvcnl9PC9Qcm9kdWN0Q2F0ZWdvcnk+XHJcbiAgICAgICAgICA8UHJvZHVjdE5hbWUgJGZvbnRTaXplPVwiMjNweFwiPiB7bmFtZX08L1Byb2R1Y3ROYW1lPlxyXG4gICAgICAgICAgPFByb2R1Y3RQcmljZSAkbWFyZ2luPVwiMCAwIDIwcHggMFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICB7Y3VycmVuY3l9IHtwcmljZX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9Qcm9kdWN0UHJpY2U+XHJcbiAgICAgICAgICA8UHJvZHVjdERlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L1Byb2R1Y3REZXNjcmlwdGlvbj5cclxuICAgICAgICA8L1Byb2R1Y3REZXRhaWxzV3JhcHBlcj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2PkxvYWRpbmcuLjwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaFByb2R1Y3RzIiwic3R5bGVkIiwidXNlUm91dGVyIiwiUHJvZHVjdENhdGVnb3J5IiwiUHJvZHVjdE5hbWUiLCJQcm9kdWN0UHJpY2UiLCJQcm9kdWN0RGV0YWlsc1dyYXBwZXIiLCJkaXYiLCJQcm9kdWN0RGVzY3JpcHRpb24iLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3RzRGV0YWlscyIsInNldFByb2R1Y3REZXRhaWxzIiwicHJvZHVjdElkIiwicXVlcnkiLCJmaWx0ZXJQcm9kdWN0RGV0YWlsc0J5SWQiLCJyZXN1bHQiLCJmaWx0ZXJlZFByb2R1Y3REZXRhaWxzIiwicHJvZHVjdHMiLCJmaW5kIiwiaXRlbSIsImlkIiwicGFyc2VJbnQiLCJjYXRlZ29yeSIsIm5hbWUiLCJwcmljZSIsImN1cnJlbmN5IiwiZGVzY3JpcHRpb24iLCIkZm9udFNpemUiLCIkbWFyZ2luIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/card/[productId].tsx\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5CVova%5CDocuments%5CChiliLabs_test%5Cchililabs_test%5Cpages%5Ccard%5C%5BproductId%5D.tsx&page=%2Fcard%2F%5BproductId%5D!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);