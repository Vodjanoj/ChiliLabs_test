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

/***/ "./Utils/fetchProducts.tsx":
/*!*********************************!*\
  !*** ./Utils/fetchProducts.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchProducts: function() { return /* binding */ fetchProducts; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n\n\nvar fetchProducts = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var response, result, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        3,\n                        ,\n                        4\n                    ]);\n                    return [\n                        4,\n                        fetch(\"https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd\")\n                    ];\n                case 1:\n                    response = _state.sent();\n                    if (!response.ok) {\n                        // If the response status is not OK (e.g., 404 Not Found, 500 Internal Server Error), throw an error\n                        throw new Error(\"Failed to fetch products. Status: \".concat(response.status));\n                    }\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    result = _state.sent();\n                    return [\n                        2,\n                        result\n                    ];\n                case 3:\n                    error = _state.sent();\n                    // Handle any errors that occur during the fetch operation\n                    console.error(\"Error fetching products:\", error.message);\n                    return [\n                        3,\n                        4\n                    ];\n                case 4:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchProducts() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VdGlscy9mZXRjaFByb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFPLElBQU1BO2VBQWdCO1lBRW5CQyxVQVNBQyxRQUVDQzs7Ozs7Ozs7OztvQkFYVTs7d0JBQU1DLE1BQ3JCOzs7b0JBRElILFdBQVc7b0JBSWpCLElBQUksQ0FBQ0EsU0FBU0ksRUFBRSxFQUFFO3dCQUNoQixvR0FBb0c7d0JBQ3BHLE1BQU0sSUFBSUMsTUFBTSxxQ0FBcUQsT0FBaEJMLFNBQVNNLE1BQU07b0JBQ3RFO29CQUVlOzt3QkFBTU4sU0FBU08sSUFBSTs7O29CQUE1Qk4sU0FBUztvQkFDZjs7d0JBQU9BOzs7b0JBQ0FDO29CQUNQLDBEQUEwRDtvQkFDMURNLFFBQVFOLEtBQUssQ0FBQyw0QkFBNEJBLE1BQU1PLE9BQU87Ozs7Ozs7Ozs7O0lBRTNEO29CQWpCYVY7OztJQWlCWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9VdGlscy9mZXRjaFByb2R1Y3RzLnRzeD9jOGI4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHBzOi8vcnVuLm1vY2t5LmlvL3YzL2I1NGZlOTNmLWY1YTEtNDI2Yi1hNzZjLWU0M2QyNDY5MDFmZFwiXHJcbiAgICApO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgLy8gSWYgdGhlIHJlc3BvbnNlIHN0YXR1cyBpcyBub3QgT0sgKGUuZy4sIDQwNCBOb3QgRm91bmQsIDUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IpLCB0aHJvdyBhbiBlcnJvclxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBwcm9kdWN0cy4gU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBIYW5kbGUgYW55IGVycm9ycyB0aGF0IG9jY3VyIGR1cmluZyB0aGUgZmV0Y2ggb3BlcmF0aW9uXHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHM6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufTsiXSwibmFtZXMiOlsiZmV0Y2hQcm9kdWN0cyIsInJlc3BvbnNlIiwicmVzdWx0IiwiZXJyb3IiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Utils/fetchProducts.tsx\n"));

/***/ })

});