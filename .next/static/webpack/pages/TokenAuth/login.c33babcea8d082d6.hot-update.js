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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal-cookie */ \"./node_modules/universal-cookie/es6/index.js\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"./node_modules/jsonwebtoken/index.js\");\n\n// import cookie from \"js-cookie\";\nconst Login = ()=>{\n    _s();\n    _s1();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const cookie = new universal_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n    const submitData = async (e)=>{\n        e.preventDefault();\n        try {\n            const body = {\n                email,\n                password\n            };\n            const responsePost = await fetch(\"/api/loginUser\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(body)\n            });\n            const data = await responsePost.json();\n            const status = responsePost.status;\n            if (status == 200) {\n                alert(\"Login Success\");\n                cookie.set(\"tokenLogin\", data.token);\n                // alert(\"this is the tokenLogin login from cookie:  \" + cookie.get('tokenLogin'));\n                await next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n            } else {\n                alert(\"Login Failed\");\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-b639d20c651d9e91\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: submitData,\n                    className: \"jsx-b639d20c651d9e91\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"jsx-b639d20c651d9e91\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            autoFocus: true,\n                            onChange: (e)=>setEmail(e.target.value),\n                            placeholder: \"username\",\n                            type: \"text\",\n                            value: email,\n                            className: \"jsx-b639d20c651d9e91\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: (e)=>setPassword(e.target.value),\n                            placeholder: \"Password\",\n                            value: password,\n                            type: \"password\",\n                            className: \"jsx-b639d20c651d9e91\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-b639d20c651d9e91\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-b639d20c651d9e91\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-b639d20c651d9e91\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                value: \"Login\",\n                                disabled: !email || !password,\n                                className: \"jsx-b639d20c651d9e91\",\n                                children: \"Log In\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b639d20c651d9e91\",\n                children: '.page.jsx-b639d20c651d9e91{background:white;padding:3rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}input[type=\"text\"].jsx-b639d20c651d9e91,textarea.jsx-b639d20c651d9e91{width:100%;padding:.5rem;margin:.5rem 0;border:none}input.jsx-b639d20c651d9e91{padding:1rem 2rem;width:100%;padding:15px;margin:5px 0 22px 0;display:inline-block;border:none;background:#f1f1f1}.back.jsx-b639d20c651d9e91{margin-left:1rem;width:100%}button.jsx-b639d20c651d9e91{background-color:#04aa6d;color:white;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;width:100%;opacity:.9}button.jsx-b639d20c651d9e91:hover{opacity:1}}\\n\\n      '\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\TokenAuth\\\\login.tsx\",\n        lineNumber: 41,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Login, \"3B3pqDcVnkT+z/sPK6Z9zQsLP+s=\");\n_c1 = Login;\n_s1(Login, \"3B3pqDcVnkT+z/sPK6Z9zQsLP+s=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c1;\n$RefreshReg$(_c1, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Ub2tlbkF1dGgvbG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5RTtBQUM3QjtBQUNaO0FBQ2hDLE1BQU1JLE1BQU1DLG1CQUFPQSxDQUFDO0FBQ2tCO0FBRXRDO0FBRUEsTUFBTUUsUUFBa0JBLElBQU07OztJQUM1QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1XLFNBQVMsSUFBSU4sd0RBQU9BO0lBQzFCLE1BQU1PLGFBQWEsT0FBT0MsSUFBNEI7UUFDcERBLEVBQUVDLGNBQWM7UUFDaEIsSUFBRztZQUNELE1BQU1DLE9BQU87Z0JBQUVSO2dCQUFPRTtZQUFTO1lBQzdCLE1BQU1PLGVBQWUsTUFBTUMsTUFBTyxrQkFBaUI7Z0JBQ2pEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7Z0JBQzlDSixNQUFNSyxLQUFLQyxTQUFTLENBQUNOO1lBQ3ZCO1lBQ0YsTUFBTU8sT0FBTyxNQUFNTixhQUFhTyxJQUFJO1lBQ3BDLE1BQU1DLFNBQVNSLGFBQWFRLE1BQU07WUFDbEMsSUFBR0EsVUFBVSxLQUFJO2dCQUNmQyxNQUFNO2dCQUNOZCxPQUFPZSxHQUFHLENBQUMsY0FBY0osS0FBS0ssS0FBSztnQkFDbkM7Z0JBQ0EsTUFBTXpCLHVEQUFXLENBQUM7WUFDcEIsT0FDSTtnQkFDRnVCLE1BQU07WUFDUjtRQUVGLEVBQ0EsT0FBT0ksT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBRUY7SUFFQSxxQkFDRUUsNkRBQUFBLENBQUM5QiwwREFBTUEsRUFBTkE7OzBCQUVHOEIsNkRBQUFBLENBQUNDLE9BQUFBOzswQkFDQyxjQUFBRCw2REFBQUEsQ0FBQ0UsUUFBQUE7b0JBQUtDLFVBQVV0Qjs7O3NDQUNkbUIsNkRBQUFBLENBQUNJLE1BQUFBOztzQ0FBRzs7Ozs7O3NDQUNKSiw2REFBQUEsQ0FBQ0ssU0FBQUE7NEJBQ0NDLFdBQVM7NEJBQ1RDLFVBQVd6QixDQUFBQSxJQUFNTCxTQUFTSyxFQUFFMEIsTUFBTSxDQUFDQyxLQUFLOzRCQUN4Q0MsYUFBWTs0QkFDWkMsTUFBSzs0QkFDTEYsT0FBT2pDOzs7Ozs7O3NDQUdUd0IsNkRBQUFBLENBQUNLLFNBQUFBOzRCQUNDRSxVQUFXekIsQ0FBQUEsSUFBTUgsWUFBWUcsRUFBRTBCLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDM0NDLGFBQVk7NEJBQ1pELE9BQU8vQjs0QkFDUGlDLE1BQUs7Ozs7Ozs7c0NBRVBYLDZEQUFBQSxDQUFDWSxNQUFBQTs7Ozs7OztzQ0FDRFosNkRBQUFBLENBQUNZLE1BQUFBOzs7Ozs7O3NDQUNEWiw2REFBQUEsQ0FBQ0MsT0FBQUE7O3NDQUNDLGNBQUFELDZEQUFBQSxDQUFDYSxVQUFBQTtnQ0FBT0YsTUFBSztnQ0FBU0YsT0FBTTtnQ0FBUUssVUFBVSxDQUFDdEMsU0FBUyxDQUFDRTs7MENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRqRjtHQW5ITUg7TUFBQUE7SUFBQUEsT0FBQUE7S0FBQUE7QUFzSE4sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVG9rZW5BdXRoL2xvZ2luLnRzeD80OTYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgU3VzcGVuc2UsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2UgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7IFxyXG5pbXBvcnQgeyBzdGF0IH0gZnJvbSBcImZzXCI7XHJcbi8vIGltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgTG9naW46IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgY29va2llID0gbmV3IENvb2tpZXMoKTtcclxuICBjb25zdCBzdWJtaXREYXRhID0gYXN5bmMgKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7IGVtYWlsLCBwYXNzd29yZCB9O1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlUG9zdCA9IGF3YWl0IGZldGNoKGAvYXBpL2xvZ2luVXNlcmAsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlUG9zdC5qc29uKCk7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlUG9zdC5zdGF0dXM7XHJcbiAgICAgIGlmKHN0YXR1cyA9PSAyMDApe1xyXG4gICAgICAgIGFsZXJ0KFwiTG9naW4gU3VjY2Vzc1wiKTtcclxuICAgICAgICBjb29raWUuc2V0KCd0b2tlbkxvZ2luJywgZGF0YS50b2tlbik7XHJcbiAgICAgICAgLy8gYWxlcnQoXCJ0aGlzIGlzIHRoZSB0b2tlbkxvZ2luIGxvZ2luIGZyb20gY29va2llOiAgXCIgKyBjb29raWUuZ2V0KCd0b2tlbkxvZ2luJykpO1xyXG4gICAgICAgIGF3YWl0IFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIGFsZXJ0KFwiTG9naW4gRmFpbGVkXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0RGF0YX0+XHJcbiAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGRpdj4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9naW5cIiBkaXNhYmxlZD17IWVtYWlsIHx8ICFwYXNzd29yZH0+TG9nIEluPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIlJvdXRlciIsImp3dCIsInJlcXVpcmUiLCJDb29raWVzIiwiTG9naW4iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNvb2tpZSIsInN1Ym1pdERhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJib2R5IiwicmVzcG9uc2VQb3N0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiYWxlcnQiLCJzZXQiLCJ0b2tlbiIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJfanN4REVWIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaDEiLCJpbnB1dCIsImF1dG9Gb2N1cyIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJiciIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/TokenAuth/login.tsx\n"));

/***/ })

});