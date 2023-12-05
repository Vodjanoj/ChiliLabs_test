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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductItem */ \"./components/Products/ProductItem.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin: 0 0 30px 0;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-gap: 50px 100px;\\n\\n  @media (max-width: 1300px) {\\n    \\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar StyledProductsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"Products__StyledProductsWrapper\",\n    componentId: \"sc-f26f70fc-0\"\n})(_templateObject());\n_c = StyledProductsWrapper;\nvar Products = function(props) {\n    var currentProducts = props.currentProducts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledProductsWrapper, {\n            children: currentProducts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    id: item.id,\n                    name: item.name,\n                    category: item.category,\n                    price: item.price,\n                    currency: item.currency\n                }, item.id + index, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Products\\\\Products.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Products\\\\Products.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c1 = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledProductsWrapper\");\n$RefreshReg$(_c1, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNiO0FBQ2M7QUFHeEMsSUFBTUcsd0JBQXdCSCw2REFBVTs7OztLQUFsQ0c7QUFlTixJQUFNRSxXQUFXLFNBQUNDO0lBQ2hCLElBQU0sa0JBQXNCQSxNQUFwQkM7SUFFUixxQkFDRTtrQkFDRSw0RUFBQ0o7c0JBQ0VJLGdCQUFnQkMsR0FBRyxDQUFDLFNBQUNDLE1BQU1DO3FDQUMxQiw4REFBQ1Isb0RBQVdBO29CQUVWUyxJQUFJRixLQUFLRSxFQUFFO29CQUNYQyxNQUFNSCxLQUFLRyxJQUFJO29CQUNmQyxVQUFVSixLQUFLSSxRQUFRO29CQUN2QkMsT0FBT0wsS0FBS0ssS0FBSztvQkFDakJDLFVBQVVOLEtBQUtNLFFBQVE7bUJBTGxCTixLQUFLRSxFQUFFLEdBQUdEOzs7Ozs7Ozs7Ozs7QUFXM0I7TUFuQk1MO0FBcUJOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdHMudHN4PzhjMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIi4vUHJvZHVjdEl0ZW1cIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi90eXBlcy9jb21wb25lbnRzLnR5cGVzXCI7XHJcblxyXG5jb25zdCBTdHlsZWRQcm9kdWN0c1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMCAwIDMwcHggMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDUwcHggMTAwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIFxyXG4gIH1cclxuYDtcclxuXHJcbnR5cGUgUHJvZHVjdHNQcm9wcyA9IHtcclxuICBjdXJyZW50UHJvZHVjdHM6IFByb2R1Y3RbXTtcclxufTtcclxuXHJcbmNvbnN0IFByb2R1Y3RzID0gKHByb3BzOiBQcm9kdWN0c1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjdXJyZW50UHJvZHVjdHMgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFN0eWxlZFByb2R1Y3RzV3JhcHBlcj5cclxuICAgICAgICB7Y3VycmVudFByb2R1Y3RzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxQcm9kdWN0SXRlbVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWQgKyBpbmRleH1cclxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgY2F0ZWdvcnk9e2l0ZW0uY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgIHByaWNlPXtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICBjdXJyZW5jeT17aXRlbS5jdXJyZW5jeX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU3R5bGVkUHJvZHVjdHNXcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJQcm9kdWN0SXRlbSIsIlN0eWxlZFByb2R1Y3RzV3JhcHBlciIsImRpdiIsIlByb2R1Y3RzIiwicHJvcHMiLCJjdXJyZW50UHJvZHVjdHMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsIm5hbWUiLCJjYXRlZ29yeSIsInByaWNlIiwiY3VycmVuY3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Products/Products.tsx\n"));

/***/ })

});