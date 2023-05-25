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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-switch */ \"react-switch\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});\nconst App = ({ Component , pageProps  })=>{\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"dark\");\n    const [isOnline, setIsOnline] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        function handleOnline() {\n            setIsOnline(true);\n        }\n        function handleOffline() {\n            setIsOnline(false);\n            alert(\"You are offline\");\n        }\n        window.addEventListener(\"online\", handleOnline);\n        window.addEventListener(\"offline\", handleOffline);\n        return ()=>{\n            window.removeEventListener(\"online\", handleOnline);\n            window.removeEventListener(\"offline\", handleOffline);\n        };\n    }, []);\n    const toggleTheme = ()=>{\n        setTheme((curr)=>curr === \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: theme,\n            className: \"jsx-b9d3ffd27abd09ce\" + \" \" + \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n                    session: pageProps.session,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps,\n                        className: \"jsx-b9d3ffd27abd09ce\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-b9d3ffd27abd09ce\" + \" \" + \"downBar\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"jsx-b9d3ffd27abd09ce\",\n                            children: isOnline ? \"✅ Online\" : \"❌ Disconnected\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-b9d3ffd27abd09ce\" + \" \" + \"switchContainer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_switch__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    onChange: toggleTheme,\n                                    checked: theme === \"dark\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"jsx-b9d3ffd27abd09ce\",\n                                    children: theme === \"light\" ? \"Light mode\" : \"Drak Mode\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"b9d3ffd27abd09ce\",\n                    children: \".downBar.jsx-b9d3ffd27abd09ce{text-align:right;padding-right:1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.switchContainer.jsx-b9d3ffd27abd09ce{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}h5.jsx-b9d3ffd27abd09ce{margin-right:2rem}\"\n                }, void 0, false, void 0, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVRO0FBQ25CO0FBRS9CLE1BQU1LLGVBQUFBLFdBQUFBLEdBQWVGLG9EQUFhQSxDQUFDLENBQUMsR0FBRTtBQUU3QyxNQUFNRyxNQUFNQSxDQUFDLEVBQUVDLFVBQUFBLEVBQVdDLFVBQUFBLEVBQXFCLEdBQUs7SUFDbEQsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzdDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsU0FBU1ksZUFBZTtZQUN0QkQsWUFBWSxJQUFJO1FBQ2xCO1FBQ0EsU0FBU0UsZ0JBQWdCO1lBQ3ZCRixZQUFZLEtBQUs7WUFDakJHLE1BQU07UUFDUjtRQUNBQyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVSjtRQUNsQ0csT0FBT0MsZ0JBQWdCLENBQUMsV0FBV0g7UUFDbkMsT0FBTyxJQUFNO1lBQ1hFLE9BQU9FLG1CQUFtQixDQUFDLFVBQVVMO1lBQ3JDRyxPQUFPRSxtQkFBbUIsQ0FBQyxXQUFXSjtRQUN4QztJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1LLGNBQWNBLElBQU07UUFDeEJULFNBQVVVLENBQUFBLE9BQVVBLFNBQVMsVUFBVSxTQUFTLE9BQVE7SUFDMUQ7SUFDQSxxQkFDRUMsNkRBQUFBLENBQUNoQixhQUFhaUIsUUFBUTtRQUFDQyxPQUFPO1lBQUNkO1lBQU9VO1FBQVc7a0JBQy9DLGNBQUFFLDZEQUFBQSxDQUFDRyxPQUFBQTtZQUFJQyxJQUFJaEI7c0RBQWlCOzs4QkFDeEJZLDZEQUFBQSxDQUFDckIsNERBQWVBLEVBQWZBO29CQUFnQjBCLFNBQVNsQixVQUFVa0IsT0FBTzs4QkFDekMsY0FBQUwsNkRBQUFBLENBQUNkLFdBQUFBO3dCQUFVLEdBQUlDLFNBQVM7a0VBQVRBLENBQUFBLGFBQUFBLFVBQUFBLFNBQUFBLElBQUFBLElBQUFBLElBQUFBLFVBQUFBLFNBQUFBLElBQUFBLEVBQUFBOzs7Ozs7Ozs7Ozs4QkFFakJhLDZEQUFBQSxDQUFDRyxPQUFBQTs4REFBYzs7c0NBQ2JILDZEQUFBQSxDQUFDTSxNQUFBQTs7c0NBQUloQixXQUFXLGFBQWEsZ0JBQWdCOzs7Ozs7c0NBQzdDVSw2REFBQUEsQ0FBQ0csT0FBQUE7c0VBQWM7OzhDQUNiSCw2REFBQUEsQ0FBQ2pCLHFEQUFXQSxFQUFYQTtvQ0FBWXdCLFVBQVVUO29DQUFhVSxTQUFTcEIsVUFBVTs7Ozs7OzhDQUN2RFksNkRBQUFBLENBQUNTLE1BQUFBOzs4Q0FBSXJCLFVBQVUsVUFBVSxlQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCL0Q7QUFHQSxpRUFBZUgsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdFN3aXRjaCBmcm9tICdyZWFjdC1zd2l0Y2gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCdkYXJrJyk7XHJcbiAgY29uc3QgW2lzT25saW5lLCBzZXRJc09ubGluZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25saW5lKCkge1xyXG4gICAgICBzZXRJc09ubGluZSh0cnVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9mZmxpbmUoKSB7XHJcbiAgICAgIHNldElzT25saW5lKGZhbHNlKTtcclxuICAgICAgYWxlcnQoJ1lvdSBhcmUgb2ZmbGluZScpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubGluZScsIGhhbmRsZU9ubGluZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGhhbmRsZU9mZmxpbmUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29ubGluZScsIGhhbmRsZU9ubGluZSk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgaGFuZGxlT2ZmbGluZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcclxuICAgIHNldFRoZW1lKChjdXJyKSA9PiAoY3VyciA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7dGhlbWUsIHRvZ2dsZVRoZW1lfX0+XHJcbiAgICAgIDxkaXYgaWQ9e3RoZW1lfSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25CYXJcIj5cclxuICAgICAgICAgIDxoNT57aXNPbmxpbmUgPyAn4pyFIE9ubGluZScgOiAn4p2MIERpc2Nvbm5lY3RlZCd9PC9oNT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxSZWFjdFN3aXRjaCBvbkNoYW5nZT17dG9nZ2xlVGhlbWV9IGNoZWNrZWQ9e3RoZW1lID09PSAnZGFyayd9Lz5cclxuICAgICAgICAgICAgPGg2Pnt0aGVtZSA9PT0gJ2xpZ2h0JyA/IFwiTGlnaHQgbW9kZVwiIDogXCJEcmFrIE1vZGVcIn08L2g2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YCAgICAgICAgXHJcbiAgICAgICAgICAuZG93bkJhciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zd2l0Y2hDb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiUmVhY3RTd2l0Y2giLCJUaGVtZUNvbnRleHQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInNldFRoZW1lIiwiaXNPbmxpbmUiLCJzZXRJc09ubGluZSIsImhhbmRsZU9ubGluZSIsImhhbmRsZU9mZmxpbmUiLCJhbGVydCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlVGhlbWUiLCJjdXJyIiwiX2pzeERFViIsIlByb3ZpZGVyIiwidmFsdWUiLCJkaXYiLCJpZCIsInNlc3Npb24iLCJoNSIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImg2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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