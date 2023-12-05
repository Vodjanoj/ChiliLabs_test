"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/card/[productId]",{

/***/ "./pages/card/[productId].tsx":
/*!************************************!*\
  !*** ./pages/card/[productId].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/fetchProducts */ \"./Utils/fetchProducts.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Products_ProductItem_ProductItem_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Products/ProductItem/ProductItem.styles */ \"./components/Products/ProductItem/ProductItem.styles.tsx\");\n\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 10px;\\n  background-color: #f5f5f5;\\n  border-radius: 15px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 16px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ProductDetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"[productId]__ProductDetailsWrapper\",\n    componentId: \"sc-6ac4518f-0\"\n})(_templateObject());\n_c = ProductDetailsWrapper;\nvar ProductDescription = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"[productId]__ProductDescription\",\n    componentId: \"sc-6ac4518f-1\"\n})(_templateObject1());\n_c1 = ProductDescription;\nvar ProductCard = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), productsDetails = _useState[0], setProductDetails = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), 2), loading = _useState1[0], setLoading = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), error = _useState2[0], setError = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), wrongIdError = _useState3[0], setWrongIdError = _useState3[1];\n    var productId = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)().query.productId;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var filterProductDetailsById = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function() {\n                var result, filteredProductDetails, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            return [\n                                4,\n                                (0,_Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_3__.fetchProducts)()\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            if (productId) {\n                                filteredProductDetails = result.find(function(item) {\n                                    return item.id === parseInt(productId);\n                                });\n                                if (filteredProductDetails) {\n                                    setProductDetails(filteredProductDetails);\n                                } else {\n                                    console.error(\"Product with id \".concat(productId, \" not found.\"));\n                                    setWrongIdError;\n                                }\n                            }\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            console.log(error.message);\n                            setError(error.message);\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function filterProductDetailsById() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        filterProductDetailsById();\n    }, [\n        productId\n    ]);\n    var _ref = productsDetails || {}, category = _ref.category, name = _ref.name, price = _ref.price, currency = _ref.currency, description = _ref.description;\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            style: {\n                display: \"block\",\n                width: \"200px\",\n                margin: \"0 auto\"\n            },\n            children: \"Loading products..\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, _this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            style: {\n                display: \"block\",\n                width: \"400px\",\n                margin: \"0 auto\"\n            },\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProductDetailsWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Products_ProductItem_ProductItem_styles__WEBPACK_IMPORTED_MODULE_5__.ProductCategory, {\n                    $fontSize: \"23px\",\n                    children: category\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Products_ProductItem_ProductItem_styles__WEBPACK_IMPORTED_MODULE_5__.ProductName, {\n                    $fontSize: \"23px\",\n                    children: [\n                        \" \",\n                        name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Products_ProductItem_ProductItem_styles__WEBPACK_IMPORTED_MODULE_5__.ProductPrice, {\n                    $margin: \"0 0 20px 0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: [\n                            currency,\n                            \" \",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProductDescription, {\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(ProductCard, \"arL2i7NYeXPpe0OfPtOvBgsnkvI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c2 = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ProductDetailsWrapper\");\n$RefreshReg$(_c1, \"ProductDescription\");\n$RefreshReg$(_c2, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJkL1twcm9kdWN0SWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDYztBQUNuQjtBQUNDO0FBSzBCO0FBR2xFLElBQU1RLHdCQUF3QkwsNkRBQVU7Ozs7S0FBbENLO0FBTU4sSUFBTUUscUJBQXFCUCw2REFBVTs7OztNQUEvQk87QUFJTixJQUFNQyxjQUFjOztJQUNsQixJQUE2Q1gsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFpQixXQUEvRFksa0JBQXNDWixjQUFyQmEsb0JBQXFCYjtJQUM3QyxJQUE4QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFVLFdBQXpDYyxVQUF1QmQsZUFBZGUsYUFBY2Y7SUFDOUIsSUFBMEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBZ0IsV0FBM0NnQixRQUFtQmhCLGVBQVppQixXQUFZakI7SUFDMUIsSUFBd0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBZ0IsV0FBekRrQixlQUFpQ2xCLGVBQW5CbUIsa0JBQW1CbkI7SUFDeEMsSUFBTSxZQUFnQkksc0RBQVNBLEdBQUdpQixLQUFLLENBQS9CRDtJQUVSbkIsZ0RBQVNBLENBQUM7UUFDUixJQUFNcUI7dUJBQTJCO29CQUV2QkMsUUFFRUMsd0JBWURSOzs7Ozs7Ozs7OzRCQWRROztnQ0FBTWQsbUVBQWFBOzs7NEJBQTVCcUIsU0FBUzs0QkFDZixJQUFJSCxXQUFXO2dDQUNQSSx5QkFBeUJELE9BQU9FLElBQUksQ0FDeEMsU0FBQ0M7MkNBQWtCQSxLQUFLQyxFQUFFLEtBQUtDLFNBQVNSOztnQ0FHMUMsSUFBSUksd0JBQXdCO29DQUMxQlgsa0JBQWtCVztnQ0FDcEIsT0FBTztvQ0FDTEssUUFBUWIsS0FBSyxDQUFDLG1CQUE2QixPQUFWSSxXQUFVO29DQUMzQ0Q7Z0NBQ0Y7NEJBQ0Y7NEJBQ0FKLFdBQVc7Ozs7Ozs0QkFDSkM7NEJBQ1BhLFFBQVFDLEdBQUcsQ0FBQyxNQUFpQkMsT0FBTzs0QkFDcENkLFNBQVMsTUFBaUJjLE9BQU87NEJBQ2pDaEIsV0FBVzs7Ozs7Ozs7Ozs7WUFFZjs0QkFyQk1POzs7O1FBdUJOQTtJQUNGLEdBQUc7UUFBQ0Y7S0FBVTtJQUVkLElBQ0VSLE9BQUFBLG1CQUFtQixDQUFDLEdBRGRvQixXQUNOcEIsS0FETW9CLFVBQVVDLE9BQ2hCckIsS0FEZ0JxQixNQUFNQyxRQUN0QnRCLEtBRHNCc0IsT0FBT0MsV0FDN0J2QixLQUQ2QnVCLFVBQVVDLGNBQ3ZDeEIsS0FEdUN3QjtJQUd6QyxJQUFJdEIsU0FBUztRQUNYLHFCQUNFLDhEQUFDdUI7WUFBRUMsT0FBTztnQkFBRUMsU0FBUztnQkFBU0MsT0FBTztnQkFBU0MsUUFBUTtZQUFTO3NCQUFHOzs7Ozs7SUFJdEU7SUFFQSxJQUFJekIsT0FBTztRQUNULHFCQUNFLDhEQUFDcUI7WUFBRUMsT0FBTztnQkFBRUMsU0FBUztnQkFBU0MsT0FBTztnQkFBU0MsUUFBUTtZQUFTOztnQkFBRztnQkFDeER6Qjs7Ozs7OztJQUdkO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNSOzs4QkFDQyw4REFBQ0gsZ0dBQWVBO29CQUFDcUMsV0FBVTs4QkFBUVY7Ozs7Ozs4QkFDbkMsOERBQUMxQiw0RkFBV0E7b0JBQUNvQyxXQUFVOzt3QkFBTzt3QkFBRVQ7Ozs7Ozs7OEJBQ2hDLDhEQUFDMUIsNkZBQVlBO29CQUFDb0MsU0FBUTs4QkFDcEIsNEVBQUNDOzs0QkFDRVQ7NEJBQVM7NEJBQUVEOzs7Ozs7Ozs7Ozs7OEJBR2hCLDhEQUFDeEI7OEJBQW9CMEI7Ozs7Ozs7Ozs7Ozs7QUFJN0I7R0FuRU16Qjs7UUFLa0JQLGtEQUFTQTs7O01BTDNCTztBQXFFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXJkL1twcm9kdWN0SWRdLnRzeD9lMTI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCIuLi8uLi9VdGlscy9mZXRjaFByb2R1Y3RzXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIFByb2R1Y3RDYXRlZ29yeSxcclxuICBQcm9kdWN0TmFtZSxcclxuICBQcm9kdWN0UHJpY2UsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdEl0ZW0vUHJvZHVjdEl0ZW0uc3R5bGVzXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzLnR5cGVzXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0RGV0YWlsc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdERlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE2cHg7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0Q2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdHNEZXRhaWxzLCBzZXRQcm9kdWN0RGV0YWlsc10gPSB1c2VTdGF0ZTxQcm9kdWN0IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbd3JvbmdJZEVycm9yLCBzZXRXcm9uZ0lkRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHVzZVJvdXRlcigpLnF1ZXJ5IGFzIHsgcHJvZHVjdElkOiBzdHJpbmcgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZpbHRlclByb2R1Y3REZXRhaWxzQnlJZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaFByb2R1Y3RzKCk7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0RGV0YWlscyA9IHJlc3VsdC5maW5kKFxyXG4gICAgICAgICAgICAoaXRlbTogUHJvZHVjdCkgPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQocHJvZHVjdElkKVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoZmlsdGVyZWRQcm9kdWN0RGV0YWlscykge1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0RGV0YWlscyhmaWx0ZXJlZFByb2R1Y3REZXRhaWxzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFByb2R1Y3Qgd2l0aCBpZCAke3Byb2R1Y3RJZH0gbm90IGZvdW5kLmApO1xyXG4gICAgICAgICAgICBzZXRXcm9uZ0lkRXJyb3JcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgICBzZXRFcnJvcigoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmlsdGVyUHJvZHVjdERldGFpbHNCeUlkKCk7XHJcbiAgfSwgW3Byb2R1Y3RJZF0pO1xyXG5cclxuICBjb25zdCB7IGNhdGVnb3J5LCBuYW1lLCBwcmljZSwgY3VycmVuY3ksIGRlc2NyaXB0aW9uIH0gPVxyXG4gICAgcHJvZHVjdHNEZXRhaWxzIHx8IHt9O1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfX0+XHJcbiAgICAgICAgTG9hZGluZyBwcm9kdWN0cy4uXHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgd2lkdGg6IFwiNDAwcHhcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PlxyXG4gICAgICAgIEVycm9yOiB7ZXJyb3J9XHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFByb2R1Y3REZXRhaWxzV3JhcHBlcj5cclxuICAgICAgICA8UHJvZHVjdENhdGVnb3J5ICRmb250U2l6ZT1cIjIzcHhcIj57Y2F0ZWdvcnl9PC9Qcm9kdWN0Q2F0ZWdvcnk+XHJcbiAgICAgICAgPFByb2R1Y3ROYW1lICRmb250U2l6ZT1cIjIzcHhcIj4ge25hbWV9PC9Qcm9kdWN0TmFtZT5cclxuICAgICAgICA8UHJvZHVjdFByaWNlICRtYXJnaW49XCIwIDAgMjBweCAwXCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge2N1cnJlbmN5fSB7cHJpY2V9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9Qcm9kdWN0UHJpY2U+XHJcbiAgICAgICAgPFByb2R1Y3REZXNjcmlwdGlvbj57ZGVzY3JpcHRpb259PC9Qcm9kdWN0RGVzY3JpcHRpb24+XHJcbiAgICAgIDwvUHJvZHVjdERldGFpbHNXcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaFByb2R1Y3RzIiwic3R5bGVkIiwidXNlUm91dGVyIiwiUHJvZHVjdENhdGVnb3J5IiwiUHJvZHVjdE5hbWUiLCJQcm9kdWN0UHJpY2UiLCJQcm9kdWN0RGV0YWlsc1dyYXBwZXIiLCJkaXYiLCJQcm9kdWN0RGVzY3JpcHRpb24iLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3RzRGV0YWlscyIsInNldFByb2R1Y3REZXRhaWxzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwid3JvbmdJZEVycm9yIiwic2V0V3JvbmdJZEVycm9yIiwicHJvZHVjdElkIiwicXVlcnkiLCJmaWx0ZXJQcm9kdWN0RGV0YWlsc0J5SWQiLCJyZXN1bHQiLCJmaWx0ZXJlZFByb2R1Y3REZXRhaWxzIiwiZmluZCIsIml0ZW0iLCJpZCIsInBhcnNlSW50IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJjYXRlZ29yeSIsIm5hbWUiLCJwcmljZSIsImN1cnJlbmN5IiwiZGVzY3JpcHRpb24iLCJwIiwic3R5bGUiLCJkaXNwbGF5Iiwid2lkdGgiLCJtYXJnaW4iLCIkZm9udFNpemUiLCIkbWFyZ2luIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/card/[productId].tsx\n"));

/***/ })

});