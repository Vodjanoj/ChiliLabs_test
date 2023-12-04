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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/fetchProducts */ \"./Utils/fetchProducts.tsx\");\n/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Products */ \"./components/Products.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar HomePage = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), products = _useState[0], setProducts = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), filteredProducts = _useState1[0], setFilteredProducts = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), 2), currentPage = _useState2[0], setCurrentPage = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(6), 1), productsPerPage = _useState3[0];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), query = _useState4[0], setQuery = _useState4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var loadAllProducts = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__._)(function() {\n                var result;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                (0,_Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_2__.fetchProducts)()\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            setProducts(result.products);\n                            setFilteredProducts(result.products);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function loadAllProducts() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        loadAllProducts();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (query || products.length > 0) {\n            var identifier = setTimeout(function() {\n                var filteredItems = products.filter(function(product) {\n                    return product.category.toLowerCase().includes(query.toLowerCase()) || product.name.toLowerCase().includes(query.toLowerCase());\n                });\n                setFilteredProducts(filteredItems);\n                setCurrentPage(1);\n            }, 1000);\n            return function() {\n                return clearTimeout(identifier);\n            };\n        }\n    }, [\n        query,\n        products\n    ]);\n    var changeQueryHandler = function(event) {\n        setQuery(event.target.value);\n    };\n    var lastIndexOfProducts = currentPage * productsPerPage;\n    var firstIndexOfProducts = lastIndexOfProducts - productsPerPage;\n    var currentProducts = filteredProducts.slice(firstIndexOfProducts, lastIndexOfProducts);\n    var onPaginateHandler = function(page) {\n        setCurrentPage(page);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        products: filteredProducts,\n        currentProducts: currentProducts,\n        productsPerPage: productsPerPage,\n        onPaginate: onPaginateHandler,\n        currentPage: currentPage,\n        query: query,\n        onChangeQuery: changeQueryHandler\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"Mkq9cRARklGNkZP6F87wCtIW/oQ=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNDO0FBQ1c7QUFDVDtBQUk5QyxJQUFNSyxXQUFXOztJQUNmLElBQWdDSixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVksRUFBRSxPQUEvQ0ssV0FBeUJMLGNBQWZNLGNBQWVOO0lBQ2hDLElBQWdEQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVksRUFBRSxPQUEvRE8sbUJBQXlDUCxlQUF2QlEsc0JBQXVCUjtJQUNoRCxJQUFzQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFTLFFBQWhEUyxjQUErQlQsZUFBbEJVLGlCQUFrQlY7SUFDdEMsSUFBMEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUyxRQUFwQ1csa0JBQW1CWDtJQUMxQixJQUEwQkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFTLFNBQXBDWSxRQUFtQlosZUFBWmEsV0FBWWI7SUFFMUJDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBTWE7dUJBQWtCO29CQUNoQkM7Ozs7NEJBQVM7O2dDQUFNYixtRUFBYUE7Ozs0QkFBNUJhLFNBQVM7NEJBQ2ZULFlBQVlTLE9BQU9WLFFBQVE7NEJBQzNCRyxvQkFBb0JPLE9BQU9WLFFBQVE7Ozs7OztZQUNyQzs0QkFKTVM7Ozs7UUFNTkE7SUFDRixHQUFHLEVBQUU7SUFFTGIsZ0RBQVNBLENBQUM7UUFDUixJQUFJVyxTQUFTUCxTQUFTVyxNQUFNLEdBQUcsR0FBRztZQUNoQyxJQUFNQyxhQUFhQyxXQUFXO2dCQUM1QixJQUFNQyxnQkFBZ0JkLFNBQVNlLE1BQU0sQ0FDbkMsU0FBQ0M7MkJBQ0NBLFFBQVFDLFFBQVEsQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNaLE1BQU1XLFdBQVcsT0FDekRGLFFBQVFJLElBQUksQ0FBQ0YsV0FBVyxHQUFHQyxRQUFRLENBQUNaLE1BQU1XLFdBQVc7O2dCQUV6RGYsb0JBQW9CVztnQkFDcEJULGVBQWU7WUFDakIsR0FBRztZQUVILE9BQU87dUJBQU1nQixhQUFhVDs7UUFDNUI7SUFDRixHQUFHO1FBQUNMO1FBQU9QO0tBQVM7SUFFcEIsSUFBTXNCLHFCQUFxQixTQUFDQztRQUMxQmYsU0FBU2UsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzdCO0lBRUEsSUFBTUMsc0JBQXNCdEIsY0FBY0U7SUFDMUMsSUFBTXFCLHVCQUF1QkQsc0JBQXNCcEI7SUFDbkQsSUFBTXNCLGtCQUFrQjFCLGlCQUFpQjJCLEtBQUssQ0FDNUNGLHNCQUNBRDtJQUdGLElBQU1JLG9CQUFvQixTQUFDQztRQUN6QjFCLGVBQWUwQjtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDakMsNERBQVFBO1FBQ1BFLFVBQVVFO1FBQ1YwQixpQkFBaUJBO1FBQ2pCdEIsaUJBQWlCQTtRQUNqQjBCLFlBQVlGO1FBQ1oxQixhQUFhQTtRQUNiRyxPQUFPQTtRQUNQMEIsZUFBZVg7Ozs7OztBQUdyQjtHQTNETXZCO0tBQUFBO0FBNkROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCIuLi9VdGlscy9mZXRjaFByb2R1Y3RzXCI7XG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdHNcIjtcbmltcG9ydCBTZWFyY2hQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoUHJvZHVjdHNcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21wb25lbnRzLnR5cGVzXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xuICBjb25zdCBbZmlsdGVyZWRQcm9kdWN0cywgc2V0RmlsdGVyZWRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbcHJvZHVjdHNQZXJQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oNik7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRBbGxQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoUHJvZHVjdHMoKTtcbiAgICAgIHNldFByb2R1Y3RzKHJlc3VsdC5wcm9kdWN0cyk7XG4gICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKHJlc3VsdC5wcm9kdWN0cyk7XG4gICAgfTtcblxuICAgIGxvYWRBbGxQcm9kdWN0cygpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocXVlcnkgfHwgcHJvZHVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gcHJvZHVjdHMuZmlsdGVyKFxuICAgICAgICAgIChwcm9kdWN0KSA9PlxuICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgICBwcm9kdWN0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICApO1xuICAgICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKGZpbHRlcmVkSXRlbXMpO1xuICAgICAgICBzZXRDdXJyZW50UGFnZSgxKTtcbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGlkZW50aWZpZXIpO1xuICAgIH1cbiAgfSwgW3F1ZXJ5LCBwcm9kdWN0c10pO1xuXG4gIGNvbnN0IGNoYW5nZVF1ZXJ5SGFuZGxlciA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGxhc3RJbmRleE9mUHJvZHVjdHMgPSBjdXJyZW50UGFnZSAqIHByb2R1Y3RzUGVyUGFnZTtcbiAgY29uc3QgZmlyc3RJbmRleE9mUHJvZHVjdHMgPSBsYXN0SW5kZXhPZlByb2R1Y3RzIC0gcHJvZHVjdHNQZXJQYWdlO1xuICBjb25zdCBjdXJyZW50UHJvZHVjdHMgPSBmaWx0ZXJlZFByb2R1Y3RzLnNsaWNlKFxuICAgIGZpcnN0SW5kZXhPZlByb2R1Y3RzLFxuICAgIGxhc3RJbmRleE9mUHJvZHVjdHNcbiAgKTtcblxuICBjb25zdCBvblBhZ2luYXRlSGFuZGxlciA9IChwYWdlOiBudW1iZXIpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZShwYWdlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0c1xuICAgICAgcHJvZHVjdHM9e2ZpbHRlcmVkUHJvZHVjdHN9XG4gICAgICBjdXJyZW50UHJvZHVjdHM9e2N1cnJlbnRQcm9kdWN0c31cbiAgICAgIHByb2R1Y3RzUGVyUGFnZT17cHJvZHVjdHNQZXJQYWdlfVxuICAgICAgb25QYWdpbmF0ZT17b25QYWdpbmF0ZUhhbmRsZXJ9XG4gICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICBxdWVyeT17cXVlcnl9XG4gICAgICBvbkNoYW5nZVF1ZXJ5PXtjaGFuZ2VRdWVyeUhhbmRsZXJ9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaFByb2R1Y3RzIiwiUHJvZHVjdHMiLCJIb21lUGFnZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2V0RmlsdGVyZWRQcm9kdWN0cyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwcm9kdWN0c1BlclBhZ2UiLCJxdWVyeSIsInNldFF1ZXJ5IiwibG9hZEFsbFByb2R1Y3RzIiwicmVzdWx0IiwibGVuZ3RoIiwiaWRlbnRpZmllciIsInNldFRpbWVvdXQiLCJmaWx0ZXJlZEl0ZW1zIiwiZmlsdGVyIiwicHJvZHVjdCIsImNhdGVnb3J5IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm5hbWUiLCJjbGVhclRpbWVvdXQiLCJjaGFuZ2VRdWVyeUhhbmRsZXIiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibGFzdEluZGV4T2ZQcm9kdWN0cyIsImZpcnN0SW5kZXhPZlByb2R1Y3RzIiwiY3VycmVudFByb2R1Y3RzIiwic2xpY2UiLCJvblBhZ2luYXRlSGFuZGxlciIsInBhZ2UiLCJvblBhZ2luYXRlIiwib25DaGFuZ2VRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});