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

/***/ "./components/Products.tsx":
/*!*********************************!*\
  !*** ./components/Products.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductList */ \"./components/ProductList.tsx\");\n/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination */ \"./components/Pagination.tsx\");\nvar _this = undefined;\n\n\n\n\nvar Products = function(props) {\n    var currentProducts = props.currentProducts, products = props.products, productsPerPage = props.productsPerPage, currentPage = props.currentPage, onPaginate = props.onPaginate;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                currentProducts: currentProducts\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Products.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            products.length > 6 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                productsAmount: products.length,\n                productsPerPage: productsPerPage,\n                onPaginate: onPaginate,\n                currentPage: currentPage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Products.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDYztBQUVGO0FBYXRDLElBQU1HLFdBQVcsU0FBQ0M7SUFDaEIsSUFDRUMsa0JBT0VELE1BUEZDLGlCQUNBQyxXQU1FRixNQU5GRSxVQUNBQyxrQkFLRUgsTUFMRkcsaUJBQ0FDLGNBSUVKLE1BSkZJLGFBRUFDLGFBRUVMLE1BRkZLO0lBSUYscUJBQ0U7OzBCQUNFLDhEQUFDUixvREFBV0E7Z0JBQUNJLGlCQUFpQkE7Ozs7OztZQUM3QkMsU0FBU0ksTUFBTSxHQUFHLG1CQUNqQiw4REFBQ1IsbURBQVVBO2dCQUNUUyxnQkFBZ0JMLFNBQVNJLE1BQU07Z0JBQy9CSCxpQkFBaUJBO2dCQUNqQkUsWUFBWUE7Z0JBQ1pELGFBQWFBOzs7Ozs7OztBQUt2QjtLQXhCTUw7QUEwQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy50c3g/NjkwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tIFwiLi9Qcm9kdWN0TGlzdFwiO1xyXG5pbXBvcnQgU2VhcmNoUHJvZHVjdHMgZnJvbSBcIi4vU2VhcmNoL1NlYXJjaFByb2R1Y3RzXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuL2NvbXBvbmVudHMudHlwZXNcIjtcclxuXHJcbnR5cGUgUHJvZHVjdHNQcm9wcyA9IHtcclxuICBjdXJyZW50UHJvZHVjdHM6IFByb2R1Y3RbXTtcclxuICBwcm9kdWN0czogUHJvZHVjdFtdO1xyXG4gIHByb2R1Y3RzUGVyUGFnZTogbnVtYmVyO1xyXG4gIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcbiAgXHJcbiAgb25QYWdpbmF0ZTogKHBhZ2U6IG51bWJlcikgPT4gdm9pZDtcclxuICBvbkNoYW5nZVF1ZXJ5OiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgUHJvZHVjdHMgPSAocHJvcHM6IFByb2R1Y3RzUHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBjdXJyZW50UHJvZHVjdHMsXHJcbiAgICBwcm9kdWN0cyxcclxuICAgIHByb2R1Y3RzUGVyUGFnZSxcclxuICAgIGN1cnJlbnRQYWdlLFxyXG4gICBcclxuICAgIG9uUGFnaW5hdGUsXHJcbiAgXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFByb2R1Y3RMaXN0IGN1cnJlbnRQcm9kdWN0cz17Y3VycmVudFByb2R1Y3RzfSAvPlxyXG4gICAgICB7cHJvZHVjdHMubGVuZ3RoID4gNiAmJiAoXHJcbiAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgIHByb2R1Y3RzQW1vdW50PXtwcm9kdWN0cy5sZW5ndGh9XHJcbiAgICAgICAgICBwcm9kdWN0c1BlclBhZ2U9e3Byb2R1Y3RzUGVyUGFnZX1cclxuICAgICAgICAgIG9uUGFnaW5hdGU9e29uUGFnaW5hdGV9XHJcbiAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvZHVjdExpc3QiLCJQYWdpbmF0aW9uIiwiUHJvZHVjdHMiLCJwcm9wcyIsImN1cnJlbnRQcm9kdWN0cyIsInByb2R1Y3RzIiwicHJvZHVjdHNQZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJvblBhZ2luYXRlIiwibGVuZ3RoIiwicHJvZHVjdHNBbW91bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Products.tsx\n"));

/***/ })

});