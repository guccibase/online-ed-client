"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Register = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), password = ref2[0], setPassword = ref2[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.table({\n            name: name,\n            email: email,\n            password: password\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jumbotron text-center\",\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"/Users/tahirunasuru/dev/practice/online-education/pages/register.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text-area\",\n                            className: \"form-control mb-4 p-4\",\n                            value: name,\n                            placeholder: \"Enter name\",\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            },\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/tahirunasuru/dev/practice/online-education/pages/register.js\",\n                            lineNumber: 15,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control mb-4 p-4\",\n                            value: email,\n                            placeholder: \"Enter email\",\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            },\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/tahirunasuru/dev/practice/online-education/pages/register.js\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: \"form-control mb-4 p-4\",\n                            value: password,\n                            placeholder: \"Enter password\",\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            },\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/tahirunasuru/dev/practice/online-education/pages/register.js\",\n                            lineNumber: 29,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tahirunasuru/dev/practice/online-education/pages/register.js\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tahirunasuru/dev/practice/online-education/pages/register.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tahirunasuru/dev/practice/online-education/pages/register.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Register, \"H0oogsi12FpBP5BGRBJJWCRHc9o=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7OztBQUM5QixHQUFLLENBQUNDLFFBQVEsR0FBQyxRQUNiLEdBRGlCLENBQUM7O0lBQ2hCLEdBQUssQ0FBbUJELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTVCRSxJQUFJLEdBQWFGLEdBQVksS0FBdkJHLE9BQU8sR0FBSUgsR0FBWTtJQUNwQyxHQUFLLENBQXFCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5QkksS0FBSyxHQUFjSixJQUFZLEtBQXhCSyxRQUFRLEdBQUlMLElBQVk7SUFDdEMsR0FBSyxDQUEyQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcENNLFFBQVEsR0FBaUJOLElBQVksS0FBM0JPLFdBQVcsR0FBSVAsSUFBWTtJQUM1QyxHQUFLLENBQUNRLFlBQVksR0FBQ0MsUUFDcEIsQ0FEb0JBLENBQUMsRUFBRSxDQUFDO1FBQ25CQSxDQUFDLENBQUNDLGNBQWM7UUFDaEJDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQUNWO1lBQUFBLElBQUksRUFBSkEsSUFBSTtZQUFFRSxLQUFLLEVBQUxBLEtBQUs7WUFBRUUsUUFBUSxFQUFSQSxRQUFRO1FBQUEsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsTUFBTSw2RUFBQzs7d0ZBRUVPLENBQUU7Z0JBQUNDLFNBQVMsRUFBQyxDQUF1QjswQkFBQyxDQUFROzs7Ozs7d0ZBQzdDQyxDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBVztzR0FDekJFLENBQUk7b0JBQUNDLFFBQVEsRUFBRVQsWUFBWTs7b0dBQ3ZCVSxDQUFLOzRCQUNGQyxJQUFJLEVBQUMsQ0FBVzs0QkFDaEJMLFNBQVMsRUFBQyxDQUF1Qjs0QkFDakNNLEtBQUssRUFBRWxCLElBQUk7NEJBQUVtQixXQUFXLEVBQUMsQ0FBWTs0QkFDckNDLFFBQVEsRUFBRWIsUUFBUSxDQUFSQSxDQUFDO2dDQUFJTixNQUFNLENBQU5BLE9BQU8sQ0FBQ00sQ0FBQyxDQUFDYyxNQUFNLENBQUNILEtBQUs7OzRCQUNyQ0ksUUFBUTs7Ozs7O29HQUVYTixDQUFLOzRCQUNGQyxJQUFJLEVBQUMsQ0FBTzs0QkFDWkwsU0FBUyxFQUFDLENBQXVCOzRCQUNqQ00sS0FBSyxFQUFFaEIsS0FBSzs0QkFBRWlCLFdBQVcsRUFBQyxDQUFhOzRCQUN2Q0MsUUFBUSxFQUFFYixRQUFRLENBQVJBLENBQUM7Z0NBQUlOLE1BQU0sQ0FBTkEsT0FBTyxDQUFDTSxDQUFDLENBQUNjLE1BQU0sQ0FBQ0gsS0FBSzs7NEJBQ3JDSSxRQUFROzs7Ozs7b0dBRVhOLENBQUs7NEJBQ0ZDLElBQUksRUFBQyxDQUFVOzRCQUNmTCxTQUFTLEVBQUMsQ0FBdUI7NEJBQ2pDTSxLQUFLLEVBQUVkLFFBQVE7NEJBQUVlLFdBQVcsRUFBQyxDQUFnQjs0QkFDN0NDLFFBQVEsRUFBRWIsUUFBUSxDQUFSQSxDQUFDO2dDQUFJTixNQUFNLENBQU5BLE9BQU8sQ0FBQ00sQ0FBQyxDQUFDYyxNQUFNLENBQUNILEtBQUs7OzRCQUNyQ0ksUUFBUTs7Ozs7O29HQUVYQyxDQUFNOzRCQUFDTixJQUFJLEVBQUMsQ0FBUTs0QkFBQ0wsU0FBUyxFQUFDLENBQWlCO3NDQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEUsQ0FBQztHQXZDS2IsUUFBUTtLQUFSQSxRQUFRO0FBeUNkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlZ2lzdGVyLmpzP2EwOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5jb25zdCBSZWdpc3Rlcj0oKT0+e1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQ9ZT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUudGFibGUoe25hbWUsIGVtYWlsLCBwYXNzd29yZH0pO1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwianVtYm90cm9uIHRleHQtY2VudGVyXCI+UmVnaXN0ZXI8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC1hcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9IHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAgIFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9IHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgICBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkICAgXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlciJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlZ2lzdGVyIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJ0YWJsZSIsImgxIiwiY2xhc3NOYW1lIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

});