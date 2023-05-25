"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": function() { return /* binding */ ThemeContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-switch */ \"./node_modules/react-switch/dist/index.dev.mjs\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});\nconst App = (param)=>{\n    _s();\n    let { Component , pageProps  } = param;\n    _s1();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"dark\");\n    const [isOnline, setIsOnline] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        function handleOnline() {\n            setIsOnline(true);\n        }\n        function handleOffline() {\n            setIsOnline(false);\n            alert(\"You are offline\");\n        }\n        window.addEventListener(\"online\", handleOnline);\n        window.addEventListener(\"offline\", handleOffline);\n        return ()=>{\n            window.removeEventListener(\"online\", handleOnline);\n            window.removeEventListener(\"offline\", handleOffline);\n        };\n    }, []);\n    const toggleTheme = ()=>{\n        setTheme((curr)=>curr === \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: theme,\n            className: \"jsx-9699c2641f97bc62\" + \" \" + \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n                    session: pageProps.session,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps,\n                        className: \"jsx-9699c2641f97bc62\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-9699c2641f97bc62\" + \" \" + \"buttomBar\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"jsx-9699c2641f97bc62\",\n                            children: isOnline ? \"✅ Online\" : \"❌ Disconnected\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_switch__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            onChange: toggleTheme,\n                            checked: theme === \"dark\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"9699c2641f97bc62\",\n                    children: \".buttomBar.jsx-9699c2641f97bc62{text-align:right;padding-right:1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}h5.jsx-9699c2641f97bc62{margin-right:1rem}\"\n                }, void 0, false, void 0, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, undefined);\n};\n_s(App, \"RrsUFH2Xa4Th7RMzRd/4z/y1tGM=\");\n_c1 = App;\n_s1(App, \"YNtO9zYfqTtXwPcgBW+zHC6DXMY=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c1;\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVRO0FBQ25CO0FBRS9CLE1BQU1LLGVBQUFBLFdBQUFBLEdBQWVGLG9EQUFhQSxDQUFDLENBQUMsR0FBRTtBQUU3QyxNQUFNRyxNQUFNQSxDQUFBQSxRQUF3Qzs7UUFBdkMsRUFBRUMsVUFBQUEsRUFBV0MsVUFBQUEsRUFBcUIsR0FBQUM7O0lBQzdDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUMsSUFBSTtJQUM3Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLFNBQVNhLGVBQWU7WUFDdEJELFlBQVksSUFBSTtRQUNsQjtRQUNBLFNBQVNFLGdCQUFnQjtZQUN2QkYsWUFBWSxLQUFLO1lBQ2pCRyxNQUFNO1FBQ1I7UUFDQUMsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUo7UUFDbENHLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdIO1FBQ25DLE9BQU8sSUFBTTtZQUNYRSxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVTDtZQUNyQ0csT0FBT0UsbUJBQW1CLENBQUMsV0FBV0o7UUFDeEM7SUFDRixHQUFHLEVBQUU7SUFDTCxNQUFNSyxjQUFjQSxJQUFNO1FBQ3hCVCxTQUFVVSxDQUFBQSxPQUFVQSxTQUFTLFVBQVUsU0FBUyxPQUFRO0lBQzFEO0lBQ0EscUJBQ0VDLDZEQUFBQSxDQUFDakIsYUFBYWtCLFFBQVE7UUFBQ0MsT0FBTztZQUFDZDtZQUFPVTtRQUFXO2tCQUMvQyxjQUFBRSw2REFBQUEsQ0FBQ0csT0FBQUE7WUFBSUMsSUFBSWhCO3NEQUFpQjs7OEJBQ3hCWSw2REFBQUEsQ0FBQ3RCLDREQUFlQSxFQUFmQTtvQkFBZ0IyQixTQUFTbkIsVUFBVW1CLE9BQU87OEJBQ3pDLGNBQUFMLDZEQUFBQSxDQUFDZixXQUFBQTt3QkFBVSxHQUFJQyxTQUFTO2tFQUFUQSxDQUFBQSxhQUFBQSxVQUFBQSxTQUFBQSxJQUFBQSxJQUFBQSxJQUFBQSxVQUFBQSxTQUFBQSxJQUFBQSxFQUFBQTs7Ozs7Ozs7Ozs7OEJBRWpCYyw2REFBQUEsQ0FBQ0csT0FBQUE7OERBQWM7O3NDQUNiSCw2REFBQUEsQ0FBQ00sTUFBQUE7O3NDQUFJaEIsV0FBVyxhQUFhLGdCQUFnQjs7Ozs7O3NDQUM3Q1UsNkRBQUFBLENBQUNsQixvREFBV0EsRUFBWEE7NEJBQVl5QixVQUFVVDs0QkFBYVUsU0FBU3BCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCakU7R0E5Q01KO01BQUFBO0lBQUFBLEtBQUFBO0tBQUFBO0FBaUROLCtEQUFlQSxHQUFHQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0U3dpdGNoIGZyb20gJ3JlYWN0LXN3aXRjaCc7XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoJ2RhcmsnKTtcclxuICBjb25zdCBbaXNPbmxpbmUsIHNldElzT25saW5lXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XHJcbiAgICAgIHNldElzT25saW5lKHRydWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT2ZmbGluZSgpIHtcclxuICAgICAgc2V0SXNPbmxpbmUoZmFsc2UpO1xyXG4gICAgICBhbGVydCgnWW91IGFyZSBvZmZsaW5lJyk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgaGFuZGxlT25saW5lKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgaGFuZGxlT2ZmbGluZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25saW5lJywgaGFuZGxlT25saW5lKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBoYW5kbGVPZmZsaW5lKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgc2V0VGhlbWUoKGN1cnIpID0+IChjdXJyID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JykpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t0aGVtZSwgdG9nZ2xlVGhlbWV9fT5cclxuICAgICAgPGRpdiBpZD17dGhlbWV9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9tQmFyXCI+XHJcbiAgICAgICAgICA8aDU+e2lzT25saW5lID8gJ+KchSBPbmxpbmUnIDogJ+KdjCBEaXNjb25uZWN0ZWQnfTwvaDU+XHJcbiAgICAgICAgICA8UmVhY3RTd2l0Y2ggb25DaGFuZ2U9e3RvZ2dsZVRoZW1lfSBjaGVja2VkPXt0aGVtZSA9PT0gJ2RhcmsnfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YCAgICAgICAgXHJcbiAgICAgICAgICAuYnV0dG9tQmFyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiUmVhY3RTd2l0Y2giLCJUaGVtZUNvbnRleHQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwYXJhbSIsInRoZW1lIiwic2V0VGhlbWUiLCJpc09ubGluZSIsInNldElzT25saW5lIiwiaGFuZGxlT25saW5lIiwiaGFuZGxlT2ZmbGluZSIsImFsZXJ0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVUaGVtZSIsImN1cnIiLCJfanN4REVWIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRpdiIsImlkIiwic2Vzc2lvbiIsImg1Iiwib25DaGFuZ2UiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});