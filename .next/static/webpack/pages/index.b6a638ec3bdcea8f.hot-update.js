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

/***/ "./styles/sharedStyles.tsx":
/*!*********************************!*\
  !*** ./styles/sharedStyles.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StyledProductCategory: function() { return /* binding */ StyledProductCategory; },\n/* harmony export */   StyledProductName: function() { return /* binding */ StyledProductName; },\n/* harmony export */   StyledProductPrice: function() { return /* binding */ StyledProductPrice; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin: 0 0 10px 0;\\n  font-weight: 600;\\n  text-decoration: none;\\n  font-size: \",\n        \";\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-style: italic;\\n  font-size: \",\n        \";\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin: \",\n        \";\\n  span {\\n    color: #ad5502;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar StyledProductCategory = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"sharedStyles__StyledProductCategory\",\n    componentId: \"sc-3c29c1b5-0\"\n})(_templateObject(), function(props) {\n    return props.$fontSize || \"20px\";\n});\nvar StyledProductName = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"sharedStyles__StyledProductName\",\n    componentId: \"sc-3c29c1b5-1\"\n})(_templateObject1(), function(props) {\n    return props.$fontSize || \"20px\";\n});\nvar StyledProductPrice = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"sharedStyles__StyledProductPrice\",\n    componentId: \"sc-3c29c1b5-2\"\n})(_templateObject2(), function(props) {\n    return props.$margin || \"0\";\n});\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvc2hhcmVkU3R5bGVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFjdkMsSUFBTUMsd0JBQXdCRCw2REFBVTs7O3NCQUl6QixTQUFDRztXQUFVQSxNQUFNQyxTQUFTLElBQUk7O0FBRzdDLElBQU1DLG9CQUFvQkwsNkRBQVU7Ozt1QkFFckIsU0FBQ0c7V0FBVUEsTUFBTUMsU0FBUyxJQUFJOztBQUc3QyxJQUFNRSxxQkFBcUJOLDZEQUFVOzs7dUJBQ3pCLFNBQUNHO1dBQVVBLE1BQU1JLE9BQU8sSUFBSTs7QUFRZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3NoYXJlZFN0eWxlcy50c3g/YmEyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW50ZXJmYWNlIFN0eWxlZFByb2R1Y3RDYXRlZ29yeVByb3BzIHtcclxuICAkZm9udFNpemU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdHlsZWRQcm9kdWN0TmFtZVByb3BzIHtcclxuICAkZm9udFNpemU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdHlsZWRQcm9kdWN0UHJpY2VQcm9wcyB7XHJcbiAgJG1hcmdpbj86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgU3R5bGVkUHJvZHVjdENhdGVnb3J5ID0gc3R5bGVkLmRpdjxTdHlsZWRQcm9kdWN0Q2F0ZWdvcnlQcm9wcz5gXHJcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLiRmb250U2l6ZSB8fCBcIjIwcHhcIn07XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRQcm9kdWN0TmFtZSA9IHN0eWxlZC5kaXY8U3R5bGVkUHJvZHVjdE5hbWVQcm9wcz5gXHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLiRmb250U2l6ZSB8fCBcIjIwcHhcIn07XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRQcm9kdWN0UHJpY2UgPSBzdHlsZWQuZGl2PFN0eWxlZFByb2R1Y3RQcmljZVByb3BzPmBcclxuICBtYXJnaW46ICR7KHByb3BzKSA9PiBwcm9wcy4kbWFyZ2luIHx8IFwiMFwifTtcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAjYWQ1NTAyO1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgU3R5bGVkUHJvZHVjdENhdGVnb3J5LCBTdHlsZWRQcm9kdWN0TmFtZSwgU3R5bGVkUHJvZHVjdFByaWNlIH07XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJTdHlsZWRQcm9kdWN0Q2F0ZWdvcnkiLCJkaXYiLCJwcm9wcyIsIiRmb250U2l6ZSIsIlN0eWxlZFByb2R1Y3ROYW1lIiwiU3R5bGVkUHJvZHVjdFByaWNlIiwiJG1hcmdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/sharedStyles.tsx\n"));

/***/ })

});