"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/TokenAuth/login",{

/***/ "./pages/TokenAuth/login.tsx":
/*!***********************************!*\
  !*** ./pages/TokenAuth/login.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"./node_modules/jsonwebtoken/index.js\");\nconst Login = ()=>{\n    _s();\n    _s1();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const submitData = async (e)=>{\n        e.preventDefault();\n        try {\n            const body = {\n                email,\n                password\n            };\n            const responsePost = await fetch(\"/api/loginUser\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(body)\n            });\n            const data = await responsePost.json();\n            localStorage.setItem(\"tokenLogin\", data.token);\n            alert(\"this is the tokenLogin from localStorage after saving login:\" + localStorage.getItem(\"tokenLogin\"));\n            const decoedToken = jwt.verify(localStorage.getItem(\"tokenLogin\"), process.env.SECRET);\n        // alert(\"this is the decoedToken from localStorage after saving login\" + decoedToken.email);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-b639d20c651d9e91\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: submitData,\n                    className: \"jsx-b639d20c651d9e91\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"jsx-b639d20c651d9e91\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            autoFocus: true,\n                            onChange: (e)=>setEmail(e.target.value),\n                            placeholder: \"username\",\n                            type: \"text\",\n                            value: email,\n                            className: \"jsx-b639d20c651d9e91\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: (e)=>setPassword(e.target.value),\n                            placeholder: \"Password\",\n                            value: password,\n                            className: \"jsx-b639d20c651d9e91\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-b639d20c651d9e91\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-b639d20c651d9e91\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-b639d20c651d9e91\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                value: \"Login\",\n                                disabled: !email || !password,\n                                className: \"jsx-b639d20c651d9e91\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b639d20c651d9e91\",\n                children: '.page.jsx-b639d20c651d9e91{background:white;padding:3rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}input[type=\"text\"].jsx-b639d20c651d9e91,textarea.jsx-b639d20c651d9e91{width:100%;padding:.5rem;margin:.5rem 0;border:none}input.jsx-b639d20c651d9e91{padding:1rem 2rem;width:100%;padding:15px;margin:5px 0 22px 0;display:inline-block;border:none;background:#f1f1f1}.back.jsx-b639d20c651d9e91{margin-left:1rem;width:100%}button.jsx-b639d20c651d9e91{background-color:#04aa6d;color:white;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;width:100%;opacity:.9}button.jsx-b639d20c651d9e91:hover{opacity:1}}\\n\\n      '\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n        lineNumber: 31,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Login, \"3B3pqDcVnkT+z/sPK6Z9zQsLP+s=\");\n_c1 = Login;\n_s1(Login, \"3B3pqDcVnkT+z/sPK6Z9zQsLP+s=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c1;\n$RefreshReg$(_c1, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Ub2tlbkF1dGgvbG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUU7QUFDN0I7QUFFNUMsTUFBTUcsTUFBTUMsbUJBQU9BLENBQUM7QUFFcEIsTUFBTUMsUUFBa0JBLElBQU07OztJQUM1QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1TLGFBQWEsT0FBT0MsSUFBNEI7UUFDcERBLEVBQUVDLGNBQWM7UUFDaEIsSUFBRztZQUNELE1BQU1DLE9BQU87Z0JBQUVQO2dCQUFPRTtZQUFTO1lBQzdCLE1BQU1NLGVBQWUsTUFBTUMsTUFBTyxrQkFBaUI7Z0JBQ2pEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7Z0JBQzlDSixNQUFNSyxLQUFLQyxTQUFTLENBQUNOO1lBQ3ZCO1lBQ0YsTUFBTU8sT0FBTyxNQUFNTixhQUFhTyxJQUFJO1lBQ3BDQyxhQUFhQyxPQUFPLENBQUMsY0FBY0gsS0FBS0ksS0FBSztZQUM3Q0MsTUFBTSxpRUFBaUVILGFBQWFJLE9BQU8sQ0FBQztZQUM1RixNQUFNQyxjQUFjeEIsSUFBSXlCLE1BQU0sQ0FBQ04sYUFBYUksT0FBTyxDQUFDLGVBQWVHLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTTtRQUNyRjtRQUNGLEVBQ0EsT0FBT0MsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBRUY7SUFFQSxxQkFDRUUsNkRBQUFBLENBQUNoQywwREFBTUEsRUFBTkE7OzBCQUVHZ0MsNkRBQUFBLENBQUNDLE9BQUFBOzswQkFDQyxjQUFBRCw2REFBQUEsQ0FBQ0UsUUFBQUE7b0JBQUtDLFVBQVUzQjs7O3NDQUNkd0IsNkRBQUFBLENBQUNJLE1BQUFBOztzQ0FBRzs7Ozs7O3NDQUNKSiw2REFBQUEsQ0FBQ0ssU0FBQUE7NEJBQ0NDLFdBQVM7NEJBQ1RDLFVBQVc5QixDQUFBQSxJQUFNSixTQUFTSSxFQUFFK0IsTUFBTSxDQUFDQyxLQUFLOzRCQUN4Q0MsYUFBWTs0QkFDWkMsTUFBSzs0QkFDTEYsT0FBT3JDOzs7Ozs7O3NDQUdUNEIsNkRBQUFBLENBQUNLLFNBQUFBOzRCQUNDRSxVQUFXOUIsQ0FBQUEsSUFBTUYsWUFBWUUsRUFBRStCLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDM0NDLGFBQVk7NEJBQ1pELE9BQU9uQzs7Ozs7OztzQ0FFVDBCLDZEQUFBQSxDQUFDWSxNQUFBQTs7Ozs7OztzQ0FDRFosNkRBQUFBLENBQUNZLE1BQUFBOzs7Ozs7O3NDQUNEWiw2REFBQUEsQ0FBQ0MsT0FBQUE7O3NDQUNDLGNBQUFELDZEQUFBQSxDQUFDYSxVQUFBQTtnQ0FBT0YsTUFBSztnQ0FBU0YsT0FBTTtnQ0FBUUssVUFBVSxDQUFDMUMsU0FBUyxDQUFDRTs7MENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRqRjtHQTFHTUg7TUFBQUE7SUFBQUEsT0FBQUE7S0FBQUE7QUE2R04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVG9rZW5BdXRoL2xvZ2luLnRzeD80OTYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgU3VzcGVuc2UsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2UgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuXHJcbmNvbnN0IExvZ2luOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiBcclxuICBjb25zdCBzdWJtaXREYXRhID0gYXN5bmMgKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7IGVtYWlsLCBwYXNzd29yZCB9O1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlUG9zdCA9IGF3YWl0IGZldGNoKGAvYXBpL2xvZ2luVXNlcmAsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlUG9zdC5qc29uKCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbkxvZ2luJywgZGF0YS50b2tlbik7XHJcbiAgICAgIGFsZXJ0KFwidGhpcyBpcyB0aGUgdG9rZW5Mb2dpbiBmcm9tIGxvY2FsU3RvcmFnZSBhZnRlciBzYXZpbmcgbG9naW46XCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW5Mb2dpbicpKTtcclxuICAgICAgY29uc3QgZGVjb2VkVG9rZW4gPSBqd3QudmVyaWZ5KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbkxvZ2luJyksIHByb2Nlc3MuZW52LlNFQ1JFVCk7XHJcbiAgICAgIC8vIGFsZXJ0KFwidGhpcyBpcyB0aGUgZGVjb2VkVG9rZW4gZnJvbSBsb2NhbFN0b3JhZ2UgYWZ0ZXIgc2F2aW5nIGxvZ2luXCIgKyBkZWNvZWRUb2tlbi5lbWFpbCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9ICAgIFxyXG5cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXREYXRhfT5cclxuICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGRpdj4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9naW5cIiBkaXNhYmxlZD17IWVtYWlsIHx8ICFwYXNzd29yZH0+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnBhZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFjayB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJqd3QiLCJyZXF1aXJlIiwiTG9naW4iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInN1Ym1pdERhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJib2R5IiwicmVzcG9uc2VQb3N0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwiYWxlcnQiLCJnZXRJdGVtIiwiZGVjb2VkVG9rZW4iLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUIiwiZXJyb3IiLCJjb25zb2xlIiwiX2pzeERFViIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImgxIiwiaW5wdXQiLCJhdXRvRm9jdXMiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiYnIiLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/TokenAuth/login.tsx\n"));

/***/ })

});