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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/fetchProducts */ \"./Utils/fetchProducts.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/sharedStyles */ \"./styles/sharedStyles.tsx\");\n\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 10px;\\n  fontSize:23px;\\n  background-color: #f5f5f5;\\n  border-radius: 15px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 16px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ProductDetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.attrs(function() {\n    return {\n        // added for tests\n        role: \"product-details\"\n    };\n}).withConfig({\n    displayName: \"[productId]__ProductDetailsWrapper\",\n    componentId: \"sc-d876c38b-0\"\n})(_templateObject());\n_c = ProductDetailsWrapper;\nvar ProductDescription = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"[productId]__ProductDescription\",\n    componentId: \"sc-d876c38b-1\"\n})(_templateObject1());\n_c1 = ProductDescription;\nvar ProductCard = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), productsDetails = _useState[0], setProductDetails = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), 2), loading = _useState1[0], setLoading = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), error = _useState2[0], setError = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), wrongIdError = _useState3[0], setWrongIdError = _useState3[1];\n    var productId = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)().query.productId;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var filterProductDetailsById = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function() {\n                var result, filteredProductDetails, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            return [\n                                4,\n                                (0,_Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_3__.fetchProducts)()\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            if (productId) {\n                                filteredProductDetails = result.find(function(item) {\n                                    return item.id === parseInt(productId);\n                                });\n                                if (filteredProductDetails) {\n                                    setProductDetails(filteredProductDetails);\n                                } else {\n                                    console.error(\"Product with id \".concat(productId, \" not found.\"));\n                                    setWrongIdError(\"Product with id \".concat(productId, \" not found.\"));\n                                }\n                            }\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            console.log(error.message);\n                            setError(error.message);\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function filterProductDetailsById() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        filterProductDetailsById();\n    }, [\n        productId\n    ]);\n    var _ref = productsDetails || {}, category = _ref.category, name = _ref.name, price = _ref.price, currency = _ref.currency, description = _ref.description;\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            style: {\n                display: \"block\",\n                width: \"200px\",\n                margin: \"0 auto\"\n            },\n            children: \"Loading products..\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, _this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            style: {\n                display: \"block\",\n                width: \"400px\",\n                margin: \"0 auto\"\n            },\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, _this);\n    }\n    if (wrongIdError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            style: {\n                display: \"block\",\n                width: \"400px\",\n                margin: \"0 auto\"\n            },\n            children: [\n                \"Error: \",\n                wrongIdError\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProductDetailsWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledProductCategory, {\n                    $fontSize: \"23px\",\n                    children: category\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledProductName, {\n                    $fontSize: \"23px\",\n                    children: [\n                        \" \",\n                        name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledProductPrice, {\n                    $margin: \"0 0 20px 0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: [\n                            currency,\n                            \" \",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProductDescription, {\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(ProductCard, \"arL2i7NYeXPpe0OfPtOvBgsnkvI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c2 = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ProductDetailsWrapper\");\n$RefreshReg$(_c1, \"ProductDescription\");\n$RefreshReg$(_c2, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FBSTdCO0dBM0VNekI7O1FBS2tCVCxrREFBU0E7OztNQUwzQlM7QUE2RU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZC9bcHJvZHVjdElkXS50c3g/ZTEyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiLi4vLi4vVXRpbHMvZmV0Y2hQcm9kdWN0c1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBTdHlsZWRQcm9kdWN0Q2F0ZWdvcnksXHJcbiAgU3R5bGVkUHJvZHVjdE5hbWUsXHJcbiAgU3R5bGVkUHJvZHVjdFByaWNlLFxyXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvc2hhcmVkU3R5bGVzXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90eXBlcy9jb21wb25lbnRzLnR5cGVzXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0RGV0YWlsc1dyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKCgpID0+ICh7XHJcbiAgLy8gYWRkZWQgZm9yIHRlc3RzXHJcbiAgcm9sZTogJ3Byb2R1Y3QtZGV0YWlscycsICBcclxufSkpYFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udFNpemU6MjNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0RGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RDYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0c0RldGFpbHMsIHNldFByb2R1Y3REZXRhaWxzXSA9IHVzZVN0YXRlPFByb2R1Y3QgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFt3cm9uZ0lkRXJyb3IsIHNldFdyb25nSWRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCB7IHByb2R1Y3RJZCB9ID0gdXNlUm91dGVyKCkucXVlcnkgYXMgeyBwcm9kdWN0SWQ6IHN0cmluZyB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmlsdGVyUHJvZHVjdERldGFpbHNCeUlkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoUHJvZHVjdHMoKTtcclxuICAgICAgICBpZiAocHJvZHVjdElkKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3REZXRhaWxzID0gcmVzdWx0LmZpbmQoXHJcbiAgICAgICAgICAgIChpdGVtOiBQcm9kdWN0KSA9PiBpdGVtLmlkID09PSBwYXJzZUludChwcm9kdWN0SWQpXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmIChmaWx0ZXJlZFByb2R1Y3REZXRhaWxzKSB7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3REZXRhaWxzKGZpbHRlcmVkUHJvZHVjdERldGFpbHMpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgUHJvZHVjdCB3aXRoIGlkICR7cHJvZHVjdElkfSBub3QgZm91bmQuYCk7XHJcbiAgICAgICAgICAgIHNldFdyb25nSWRFcnJvcihgUHJvZHVjdCB3aXRoIGlkICR7cHJvZHVjdElkfSBub3QgZm91bmQuYClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgICBzZXRFcnJvcigoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmlsdGVyUHJvZHVjdERldGFpbHNCeUlkKCk7XHJcbiAgfSwgW3Byb2R1Y3RJZF0pO1xyXG5cclxuICBjb25zdCB7IGNhdGVnb3J5LCBuYW1lLCBwcmljZSwgY3VycmVuY3ksIGRlc2NyaXB0aW9uIH0gPVxyXG4gICAgcHJvZHVjdHNEZXRhaWxzIHx8IHt9O1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfX0+XHJcbiAgICAgICAgTG9hZGluZyBwcm9kdWN0cy4uXHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgd2lkdGg6IFwiNDAwcHhcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PlxyXG4gICAgICAgIEVycm9yOiB7ZXJyb3J9XHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAod3JvbmdJZEVycm9yKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIHdpZHRoOiBcIjQwMHB4XCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cclxuICAgICAgICBFcnJvcjoge3dyb25nSWRFcnJvcn1cclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UHJvZHVjdERldGFpbHNXcmFwcGVyPlxyXG4gICAgICAgIDxTdHlsZWRQcm9kdWN0Q2F0ZWdvcnkgJGZvbnRTaXplPVwiMjNweFwiPntjYXRlZ29yeX08L1N0eWxlZFByb2R1Y3RDYXRlZ29yeT5cclxuICAgICAgICA8U3R5bGVkUHJvZHVjdE5hbWUgJGZvbnRTaXplPVwiMjNweFwiPiB7bmFtZX08L1N0eWxlZFByb2R1Y3ROYW1lPlxyXG4gICAgICAgIDxTdHlsZWRQcm9kdWN0UHJpY2UgJG1hcmdpbj1cIjAgMCAyMHB4IDBcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7Y3VycmVuY3l9IHtwcmljZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1N0eWxlZFByb2R1Y3RQcmljZT5cclxuICAgICAgICA8UHJvZHVjdERlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L1Byb2R1Y3REZXNjcmlwdGlvbj5cclxuICAgICAgPC9Qcm9kdWN0RGV0YWlsc1dyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoUHJvZHVjdHMiLCJzdHlsZWQiLCJ1c2VSb3V0ZXIiLCJTdHlsZWRQcm9kdWN0Q2F0ZWdvcnkiLCJTdHlsZWRQcm9kdWN0TmFtZSIsIlN0eWxlZFByb2R1Y3RQcmljZSIsIlByb2R1Y3REZXRhaWxzV3JhcHBlciIsImRpdiIsImF0dHJzIiwicm9sZSIsIlByb2R1Y3REZXNjcmlwdGlvbiIsIlByb2R1Y3RDYXJkIiwicHJvZHVjdHNEZXRhaWxzIiwic2V0UHJvZHVjdERldGFpbHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ3cm9uZ0lkRXJyb3IiLCJzZXRXcm9uZ0lkRXJyb3IiLCJwcm9kdWN0SWQiLCJxdWVyeSIsImZpbHRlclByb2R1Y3REZXRhaWxzQnlJZCIsInJlc3VsdCIsImZpbHRlcmVkUHJvZHVjdERldGFpbHMiLCJmaW5kIiwiaXRlbSIsImlkIiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImNhdGVnb3J5IiwibmFtZSIsInByaWNlIiwiY3VycmVuY3kiLCJkZXNjcmlwdGlvbiIsInAiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aWR0aCIsIm1hcmdpbiIsIiRmb250U2l6ZSIsIiRtYXJnaW4iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/card/[productId].tsx\n"));

/***/ })

});