"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Products/Products.tsx":
/*!******************************************!*\
  !*** ./components/Products/Products.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductItem */ \"./components/Products/ProductItem.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin: 0 0 30px 0;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-gap: 50px 170px;\\n\\n  @media (max-width: 1300px) {\\n    grid-gap: 50px 140px;\\n  }\\n\\n  @media (max-width: 991px) {\\n    grid-gap: 50px 100px;\\n  }\\n  \\n  @media (max-width: 767px) {\\n    grid-template-columns: repeat(2, 1fr);\\n    grid-gap: 50px 60px;\\n  }\\n  @media (max-width: 414px) {\\n    grid-template-columns: repeat(1, 1fr);\\n    grid-gap: 20px 0;\\n    justify-items: center;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar StyledProductsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"Products__StyledProductsWrapper\",\n    componentId: \"sc-de63341e-0\"\n})(_templateObject());\n_c = StyledProductsWrapper;\nvar Products = function(props) {\n    var currentProducts = props.currentProducts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledProductsWrapper, {\n            children: currentProducts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    id: item.id,\n                    name: item.name,\n                    category: item.category,\n                    price: item.price,\n                    currency: item.currency\n                }, item.id + index, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Products\\\\Products.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Products\\\\Products.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c1 = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledProductsWrapper\");\n$RefreshReg$(_c1, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNiO0FBQ2M7QUFHeEMsSUFBTUcsd0JBQXdCSCw2REFBVTs7OztLQUFsQ0c7QUE0Qk4sSUFBTUUsV0FBVyxTQUFDQztJQUNoQixJQUFNLGtCQUFzQkEsTUFBcEJDO0lBRVIscUJBQ0U7a0JBQ0UsNEVBQUNKO3NCQUNFSSxnQkFBZ0JDLEdBQUcsQ0FBQyxTQUFDQyxNQUFNQztxQ0FDMUIsOERBQUNSLG9EQUFXQTtvQkFFVlMsSUFBSUYsS0FBS0UsRUFBRTtvQkFDWEMsTUFBTUgsS0FBS0csSUFBSTtvQkFDZkMsVUFBVUosS0FBS0ksUUFBUTtvQkFDdkJDLE9BQU9MLEtBQUtLLEtBQUs7b0JBQ2pCQyxVQUFVTixLQUFLTSxRQUFRO21CQUxsQk4sS0FBS0UsRUFBRSxHQUFHRDs7Ozs7Ozs7Ozs7O0FBVzNCO01BbkJNTDtBQXFCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzLnRzeD84YzFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuL1Byb2R1Y3RJdGVtXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vdHlwZXMvY29tcG9uZW50cy50eXBlc1wiO1xyXG5cclxuY29uc3QgU3R5bGVkUHJvZHVjdHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiA1MHB4IDE3MHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICBncmlkLWdhcDogNTBweCAxNDBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZ3JpZC1nYXA6IDUwcHggMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiA1MHB4IDYwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAyMHB4IDA7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG50eXBlIFByb2R1Y3RzUHJvcHMgPSB7XHJcbiAgY3VycmVudFByb2R1Y3RzOiBQcm9kdWN0W107XHJcbn07XHJcblxyXG5jb25zdCBQcm9kdWN0cyA9IChwcm9wczogUHJvZHVjdHNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY3VycmVudFByb2R1Y3RzIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTdHlsZWRQcm9kdWN0c1dyYXBwZXI+XHJcbiAgICAgICAge2N1cnJlbnRQcm9kdWN0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8UHJvZHVjdEl0ZW1cclxuICAgICAgICAgICAga2V5PXtpdGVtLmlkICsgaW5kZXh9XHJcbiAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgY3VycmVuY3k9e2l0ZW0uY3VycmVuY3l9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N0eWxlZFByb2R1Y3RzV3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwiUHJvZHVjdEl0ZW0iLCJTdHlsZWRQcm9kdWN0c1dyYXBwZXIiLCJkaXYiLCJQcm9kdWN0cyIsInByb3BzIiwiY3VycmVudFByb2R1Y3RzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJuYW1lIiwiY2F0ZWdvcnkiLCJwcmljZSIsImN1cnJlbmN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Products/Products.tsx\n"));

/***/ })

});