"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-switch */ \"react-switch\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});\nconst App = ({ Component , pageProps  })=>{\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"light\");\n    const [isOnline, setIsOnline] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        function handleOnline() {\n            setIsOnline(true);\n        }\n        function handleOffline() {\n            setIsOnline(false);\n            alert(\"You are offline\");\n        }\n        window.addEventListener(\"online\", handleOnline);\n        window.addEventListener(\"offline\", handleOffline);\n        return ()=>{\n            window.removeEventListener(\"online\", handleOnline);\n            window.removeEventListener(\"offline\", handleOffline);\n        };\n    }, []);\n    const toggleTheme = ()=>{\n        setTheme((curr)=>curr === \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: theme,\n            className: \"jsx-b9d3ffd27abd09ce\" + \" \" + \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n                    session: pageProps.session,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps,\n                        className: \"jsx-b9d3ffd27abd09ce\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n                    }, void 0, false, {\n                        fileName: \"/Users/lihibenbasat/FrontEnd-HW1/pages/_app.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lihibenbasat/FrontEnd-HW1/pages/_app.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-b9d3ffd27abd09ce\" + \" \" + \"downBar\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"jsx-b9d3ffd27abd09ce\",\n                            children: isOnline ? \"✅ Online\" : \"❌ Disconnected\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lihibenbasat/FrontEnd-HW1/pages/_app.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-b9d3ffd27abd09ce\" + \" \" + \"switchContainer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_switch__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    onChange: toggleTheme,\n                                    checked: theme === \"dark\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lihibenbasat/FrontEnd-HW1/pages/_app.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"jsx-b9d3ffd27abd09ce\",\n                                    children: theme === \"light\" ? \"Light mode\" : \"Drak Mode\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lihibenbasat/FrontEnd-HW1/pages/_app.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lihibenbasat/FrontEnd-HW1/pages/_app.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lihibenbasat/FrontEnd-HW1/pages/_app.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"b9d3ffd27abd09ce\",\n                    children: \".downBar.jsx-b9d3ffd27abd09ce{text-align:right;padding-right:1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.switchContainer.jsx-b9d3ffd27abd09ce{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}h5.jsx-b9d3ffd27abd09ce{margin-right:2rem}\"\n                }, void 0, false, void 0, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lihibenbasat/FrontEnd-HW1/pages/_app.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lihibenbasat/FrontEnd-HW1/pages/_app.tsx\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVRO0FBQ25CO0FBRS9CLE1BQU1LLGVBQUFBLFdBQUFBLEdBQWVGLG9EQUFhQSxDQUFDLENBQUMsR0FBRTtBQUU3QyxNQUFNRyxNQUFNQSxDQUFDLEVBQUVDLFVBQUFBLEVBQVdDLFVBQUFBLEVBQXFCLEdBQUs7SUFDbEQsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzdDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsU0FBU1ksZUFBZTtZQUN0QkQsWUFBWSxJQUFJO1FBQ2xCO1FBQ0EsU0FBU0UsZ0JBQWdCO1lBQ3ZCRixZQUFZLEtBQUs7WUFDakJHLE1BQU07UUFDUjtRQUNBQyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVSjtRQUNsQ0csT0FBT0MsZ0JBQWdCLENBQUMsV0FBV0g7UUFDbkMsT0FBTyxJQUFNO1lBQ1hFLE9BQU9FLG1CQUFtQixDQUFDLFVBQVVMO1lBQ3JDRyxPQUFPRSxtQkFBbUIsQ0FBQyxXQUFXSjtRQUN4QztJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1LLGNBQWNBLElBQU07UUFDeEJULFNBQVVVLENBQUFBLE9BQVVBLFNBQVMsVUFBVSxTQUFTLE9BQVE7SUFDMUQ7SUFDQSxxQkFDRUMsNkRBQUFBLENBQUNoQixhQUFhaUIsUUFBUTtRQUFDQyxPQUFPO1lBQUNkO1lBQU9VO1FBQVc7a0JBQy9DLGNBQUFFLDZEQUFBQSxDQUFDRyxPQUFBQTtZQUFJQyxJQUFJaEI7c0RBQWlCOzs4QkFDeEJZLDZEQUFBQSxDQUFDckIsNERBQWVBLEVBQWZBO29CQUFnQjBCLFNBQVNsQixVQUFVa0IsT0FBTzs4QkFDekMsY0FBQUwsNkRBQUFBLENBQUNkLFdBQUFBO3dCQUFVLEdBQUlDLFNBQVM7a0VBQVRBLENBQUFBLGFBQUFBLFVBQUFBLFNBQUFBLElBQUFBLElBQUFBLElBQUFBLFVBQUFBLFNBQUFBLElBQUFBLEVBQUFBOzs7Ozs7Ozs7Ozs4QkFFakJhLDZEQUFBQSxDQUFDRyxPQUFBQTs4REFBYzs7c0NBQ2JILDZEQUFBQSxDQUFDTSxNQUFBQTs7c0NBQUloQixXQUFXLGFBQWEsZ0JBQWdCOzs7Ozs7c0NBQzdDVSw2REFBQUEsQ0FBQ0csT0FBQUE7c0VBQWM7OzhDQUNiSCw2REFBQUEsQ0FBQ2pCLHFEQUFXQSxFQUFYQTtvQ0FBWXdCLFVBQVVUO29DQUFhVSxTQUFTcEIsVUFBVTs7Ozs7OzhDQUN2RFksNkRBQUFBLENBQUNTLE1BQUFBOzs4Q0FBSXJCLFVBQVUsVUFBVSxlQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCL0Q7QUFHQSxpRUFBZUgsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdFN3aXRjaCBmcm9tICdyZWFjdC1zd2l0Y2gnO1xuXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoJ2xpZ2h0Jyk7XG4gIGNvbnN0IFtpc09ubGluZSwgc2V0SXNPbmxpbmVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlT25saW5lKCkge1xuICAgICAgc2V0SXNPbmxpbmUodHJ1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZU9mZmxpbmUoKSB7XG4gICAgICBzZXRJc09ubGluZShmYWxzZSk7XG4gICAgICBhbGVydCgnWW91IGFyZSBvZmZsaW5lJyk7XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBoYW5kbGVPbmxpbmUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgaGFuZGxlT2ZmbGluZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBoYW5kbGVPbmxpbmUpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBoYW5kbGVPZmZsaW5lKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xuICAgIHNldFRoZW1lKChjdXJyKSA9PiAoY3VyciA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7dGhlbWUsIHRvZ2dsZVRoZW1lfX0+XG4gICAgICA8ZGl2IGlkPXt0aGVtZX0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bkJhclwiPlxuICAgICAgICAgIDxoNT57aXNPbmxpbmUgPyAn4pyFIE9ubGluZScgOiAn4p2MIERpc2Nvbm5lY3RlZCd9PC9oNT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFJlYWN0U3dpdGNoIG9uQ2hhbmdlPXt0b2dnbGVUaGVtZX0gY2hlY2tlZD17dGhlbWUgPT09ICdkYXJrJ30vPlxuICAgICAgICAgICAgPGg2Pnt0aGVtZSA9PT0gJ2xpZ2h0JyA/IFwiTGlnaHQgbW9kZVwiIDogXCJEcmFrIE1vZGVcIn08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YCAgICAgICAgXG4gICAgICAgICAgLmRvd25CYXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN3aXRjaENvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDUge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJTZXNzaW9uUHJvdmlkZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJSZWFjdFN3aXRjaCIsIlRoZW1lQ29udGV4dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwic2V0VGhlbWUiLCJpc09ubGluZSIsInNldElzT25saW5lIiwiaGFuZGxlT25saW5lIiwiaGFuZGxlT2ZmbGluZSIsImFsZXJ0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVUaGVtZSIsImN1cnIiLCJfanN4REVWIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRpdiIsImlkIiwic2Vzc2lvbiIsImg1Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaDYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-switch":
/*!*******************************!*\
  !*** external "react-switch" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-switch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();