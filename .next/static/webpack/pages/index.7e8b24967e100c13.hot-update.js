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

/***/ "./components/Pagination.tsx":
/*!***********************************!*\
  !*** ./components/Pagination.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Products_PageButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products/PageButton */ \"./components/Products/PageButton.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 130px;\\n  margin: 0 auto;\\n  display: flex;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar StyledPagination = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"Pagination__StyledPagination\",\n    componentId: \"sc-5d1a9cbb-0\"\n})(_templateObject());\n_c = StyledPagination;\nvar StyledPaginationInner = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"Pagination__StyledPaginationInner\",\n    componentId: \"sc-5d1a9cbb-1\"\n})(_templateObject1());\n_c1 = StyledPaginationInner;\nvar Pagination = function(props) {\n    var productsAmount = props.productsAmount, productsPerPage = props.productsPerPage, currentPage = props.currentPage, onPaginate = props.onPaginate;\n    var pages = [];\n    for(var i = 1; i <= Math.ceil(productsAmount / productsPerPage); i++){\n        pages.push(i);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledPagination, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledPaginationInner, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Products_PageButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                pages: pages,\n                currentPage: currentPage,\n                onPaginate: onPaginate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Pagination.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Pagination.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Pagination.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_c2 = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"StyledPagination\");\n$RefreshReg$(_c1, \"StyledPaginationInner\");\n$RefreshReg$(_c2, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNRO0FBRS9DLElBQU1FLG1CQUFtQkYsNkRBQVU7Ozs7S0FBN0JFO0FBSU4sSUFBTUUsd0JBQXdCSiw2REFBVTs7OztNQUFsQ0k7QUFjTixJQUFNQyxhQUFhLFNBQUNDO0lBQ2xCLElBQVFDLGlCQUE2REQsTUFBN0RDLGdCQUFnQkMsa0JBQTZDRixNQUE3Q0UsaUJBQWlCQyxjQUE0QkgsTUFBNUJHLGFBQWFDLGFBQWVKLE1BQWZJO0lBRXRELElBQU1DLFFBQWtCLEVBQUU7SUFFMUIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLEtBQUtDLEtBQUtDLElBQUksQ0FBQ1AsaUJBQWlCQyxrQkFBa0JJLElBQUs7UUFDckVELE1BQU1JLElBQUksQ0FBQ0g7SUFDYjtJQUVBLHFCQUNFLDhEQUFDVjtrQkFDQyw0RUFBQ0U7c0JBQ0MsNEVBQUNILDREQUFVQTtnQkFDVFUsT0FBT0E7Z0JBQ1BGLGFBQWFBO2dCQUNiQyxZQUFZQTs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtNQXBCTUw7QUFzQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLnRzeD84Y2FkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBQYWdlQnV0dG9uIGZyb20gXCIuL1Byb2R1Y3RzL1BhZ2VCdXR0b25cIjtcclxuXHJcbmNvbnN0IFN0eWxlZFBhZ2luYXRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkUGFnaW5hdGlvbklubmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbnR5cGUgUGFnaW5hdGlvblByb3BzID0ge1xyXG4gIHByb2R1Y3RzQW1vdW50OiBudW1iZXI7XHJcbiAgcHJvZHVjdHNQZXJQYWdlOiBudW1iZXI7XHJcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcclxuICBvblBhZ2luYXRlOiAocGFnZTogbnVtYmVyKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgUGFnaW5hdGlvbiA9IChwcm9wczogUGFnaW5hdGlvblByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9kdWN0c0Ftb3VudCwgcHJvZHVjdHNQZXJQYWdlLCBjdXJyZW50UGFnZSwgb25QYWdpbmF0ZSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHBhZ2VzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwocHJvZHVjdHNBbW91bnQgLyBwcm9kdWN0c1BlclBhZ2UpOyBpKyspIHtcclxuICAgIHBhZ2VzLnB1c2goaSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFBhZ2luYXRpb24+XHJcbiAgICAgIDxTdHlsZWRQYWdpbmF0aW9uSW5uZXI+XHJcbiAgICAgICAgPFBhZ2VCdXR0b25cclxuICAgICAgICAgIHBhZ2VzPXtwYWdlc31cclxuICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgIG9uUGFnaW5hdGU9e29uUGFnaW5hdGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TdHlsZWRQYWdpbmF0aW9uSW5uZXI+XHJcbiAgICA8L1N0eWxlZFBhZ2luYXRpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJQYWdlQnV0dG9uIiwiU3R5bGVkUGFnaW5hdGlvbiIsImRpdiIsIlN0eWxlZFBhZ2luYXRpb25Jbm5lciIsIlBhZ2luYXRpb24iLCJwcm9wcyIsInByb2R1Y3RzQW1vdW50IiwicHJvZHVjdHNQZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJvblBhZ2luYXRlIiwicGFnZXMiLCJpIiwiTWF0aCIsImNlaWwiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Pagination.tsx\n"));

/***/ }),

/***/ "./components/Products.tsx":
/*!*********************************!*\
  !*** ./components/Products.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductList */ \"./components/ProductList.tsx\");\n/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination */ \"./components/Pagination.tsx\");\nvar _this = undefined;\n\n\n\n\nvar Products = function(props) {\n    var currentProducts = props.currentProducts, products = props.products, productsPerPage = props.productsPerPage, currentPage = props.currentPage, onPaginate = props.onPaginate;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                currentProducts: currentProducts\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Products.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            products.length > 6 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                productsAmount: products.length,\n                productsPerPage: productsPerPage,\n                onPaginate: onPaginate,\n                currentPage: currentPage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Products.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDYztBQUVGO0FBV3RDLElBQU1HLFdBQVcsU0FBQ0M7SUFDaEIsSUFDRUMsa0JBTUVELE1BTkZDLGlCQUNBQyxXQUtFRixNQUxGRSxVQUNBQyxrQkFJRUgsTUFKRkcsaUJBQ0FDLGNBR0VKLE1BSEZJLGFBRUFDLGFBQ0VMLE1BREZLO0lBR0YscUJBQ0U7OzBCQUNFLDhEQUFDUixvREFBV0E7Z0JBQUNJLGlCQUFpQkE7Ozs7OztZQUM3QkMsU0FBU0ksTUFBTSxHQUFHLG1CQUNqQiw4REFBQ1IsbURBQVVBO2dCQUNUUyxnQkFBZ0JMLFNBQVNJLE1BQU07Z0JBQy9CSCxpQkFBaUJBO2dCQUNqQkUsWUFBWUE7Z0JBQ1pELGFBQWFBOzs7Ozs7OztBQUt2QjtLQXZCTUw7QUF5Qk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy50c3g/NjkwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tIFwiLi9Qcm9kdWN0TGlzdFwiO1xyXG5pbXBvcnQgU2VhcmNoUHJvZHVjdHMgZnJvbSBcIi4vU2VhcmNoL1NlYXJjaFByb2R1Y3RzXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuL2NvbXBvbmVudHMudHlwZXNcIjtcclxuXHJcbnR5cGUgUHJvZHVjdHNQcm9wcyA9IHtcclxuICBjdXJyZW50UHJvZHVjdHM6IFByb2R1Y3RbXTtcclxuICBwcm9kdWN0czogUHJvZHVjdFtdO1xyXG4gIHByb2R1Y3RzUGVyUGFnZTogbnVtYmVyO1xyXG4gIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcbiAgb25QYWdpbmF0ZTogKHBhZ2U6IG51bWJlcikgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IFByb2R1Y3RzID0gKHByb3BzOiBQcm9kdWN0c1Byb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY3VycmVudFByb2R1Y3RzLFxyXG4gICAgcHJvZHVjdHMsXHJcbiAgICBwcm9kdWN0c1BlclBhZ2UsXHJcbiAgICBjdXJyZW50UGFnZSxcclxuXHJcbiAgICBvblBhZ2luYXRlLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQcm9kdWN0TGlzdCBjdXJyZW50UHJvZHVjdHM9e2N1cnJlbnRQcm9kdWN0c30gLz5cclxuICAgICAge3Byb2R1Y3RzLmxlbmd0aCA+IDYgJiYgKFxyXG4gICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICBwcm9kdWN0c0Ftb3VudD17cHJvZHVjdHMubGVuZ3RofVxyXG4gICAgICAgICAgcHJvZHVjdHNQZXJQYWdlPXtwcm9kdWN0c1BlclBhZ2V9XHJcbiAgICAgICAgICBvblBhZ2luYXRlPXtvblBhZ2luYXRlfVxyXG4gICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb2R1Y3RMaXN0IiwiUGFnaW5hdGlvbiIsIlByb2R1Y3RzIiwicHJvcHMiLCJjdXJyZW50UHJvZHVjdHMiLCJwcm9kdWN0cyIsInByb2R1Y3RzUGVyUGFnZSIsImN1cnJlbnRQYWdlIiwib25QYWdpbmF0ZSIsImxlbmd0aCIsInByb2R1Y3RzQW1vdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Products.tsx\n"));

/***/ }),

/***/ "./components/Products/PageButton.tsx":
/*!********************************************!*\
  !*** ./components/Products/PageButton.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin: 0 5px;\\n  padding: 5px 10px;\\n  border: none;\\n  outline: none;\\n  font-size: 16px;\\n  line-height: 1.2;\\n  font-weight: 600;\\n  color: #ffffff;\\n  background-color: \",\n        \";\\n  border-radius: 3px;\\n  text-transform: uppercase;\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n    displayName: \"PageButton__Button\",\n    componentId: \"sc-5646cba5-0\"\n})(_templateObject(), function(props) {\n    return props.$isActive ? \"#3fa556\" : \"#5ece7b\";\n});\n_c = Button;\nvar PageButton = function(props) {\n    var pages = props.pages, currentPage = props.currentPage, onPaginate = props.onPaginate;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: pages.map(function(page) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                type: \"button\",\n                onClick: function() {\n                    return onPaginate(page);\n                },\n                $isActive: page === currentPage,\n                children: page\n            }, page, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Products\\\\PageButton.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false);\n};\n_c1 = PageButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageButton);\nvar _c, _c1;\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c1, \"PageButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzL1BhZ2VCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQU12QyxJQUFNQyxTQUFTRCxnRUFBYTs7O3NCQVNOLFNBQUNHO1dBQVdBLE1BQU1DLFNBQVMsR0FBRyxZQUFZOztLQVQxREg7QUFxQk4sSUFBTUksYUFBYSxTQUFDRjtJQUNsQixJQUFRRyxRQUFtQ0gsTUFBbkNHLE9BQU9DLGNBQTRCSixNQUE1QkksYUFBYUMsYUFBZUwsTUFBZks7SUFDNUIscUJBQ0U7a0JBQ0dGLE1BQU1HLEdBQUcsQ0FBQyxTQUFDQztpQ0FDViw4REFBQ1Q7Z0JBQ0NVLE1BQUs7Z0JBRUxDLFNBQVM7MkJBQU1KLFdBQVdFOztnQkFDMUJOLFdBQVdNLFNBQVNIOzBCQUVuQkc7ZUFKSUE7Ozs7Ozs7QUFTZjtNQWhCTUw7QUFrQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9QYWdlQnV0dG9uLnRzeD9jYWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uUHJvcHMge1xyXG4gICRpc0FjdGl2ZTogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbjxCdXR0b25Qcm9wcz5gXHJcbiAgbWFyZ2luOiAwIDVweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuJGlzQWN0aXZlID8gXCIjM2ZhNTU2XCIgOiBcIiM1ZWNlN2JcIil9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbnR5cGUgUGFnaW5hdGlvblByb3BzID0ge1xyXG4gIHBhZ2VzOiBudW1iZXJbXTtcclxuICBjdXJyZW50UGFnZTogbnVtYmVyO1xyXG4gIG9uUGFnaW5hdGU6IChwYWdlOiBudW1iZXIpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBQYWdlQnV0dG9uID0gKHByb3BzOlBhZ2luYXRpb25Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcGFnZXMsIGN1cnJlbnRQYWdlLCBvblBhZ2luYXRlIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3BhZ2VzLm1hcCgocGFnZSkgPT4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAga2V5PXtwYWdlfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdpbmF0ZShwYWdlKX1cclxuICAgICAgICAgICRpc0FjdGl2ZT17cGFnZSA9PT0gY3VycmVudFBhZ2V9ICBcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cGFnZX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUJ1dHRvbjtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkJ1dHRvbiIsImJ1dHRvbiIsInByb3BzIiwiJGlzQWN0aXZlIiwiUGFnZUJ1dHRvbiIsInBhZ2VzIiwiY3VycmVudFBhZ2UiLCJvblBhZ2luYXRlIiwibWFwIiwicGFnZSIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Products/PageButton.tsx\n"));

/***/ })

});