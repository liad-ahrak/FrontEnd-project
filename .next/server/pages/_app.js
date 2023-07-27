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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-switch */ \"react-switch\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_3__);\n// import { SessionProvider } from \"next-auth/react\";\n\n\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nconst App = ({ Component , pageProps  })=>{\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"light\");\n    const [isOnline, setIsOnline] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        function handleOnline() {\n            setIsOnline(true);\n        }\n        function handleOffline() {\n            setIsOnline(false);\n            alert(\"You are offline\");\n        }\n        window.addEventListener(\"online\", handleOnline);\n        window.addEventListener(\"offline\", handleOffline);\n        return ()=>{\n            window.removeEventListener(\"online\", handleOnline);\n            window.removeEventListener(\"offline\", handleOffline);\n        };\n    }, []);\n    const toggleTheme = ()=>{\n        setTheme((curr)=>curr === \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: theme,\n            className: \"jsx-b9d3ffd27abd09ce\" + \" \" + \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps,\n                    className: \"jsx-b9d3ffd27abd09ce\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n                }, void 0, false, {\n                    fileName: \"/Users/lihibenbasat/PycharmProjects/FrontEnd-HW4/pages/_app.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-b9d3ffd27abd09ce\" + \" \" + \"downBar\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"jsx-b9d3ffd27abd09ce\",\n                            children: isOnline ? \"✅ Online\" : \"❌ Disconnected\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lihibenbasat/PycharmProjects/FrontEnd-HW4/pages/_app.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-b9d3ffd27abd09ce\" + \" \" + \"switchContainer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_switch__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    onChange: toggleTheme,\n                                    checked: theme === \"dark\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lihibenbasat/PycharmProjects/FrontEnd-HW4/pages/_app.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"jsx-b9d3ffd27abd09ce\",\n                                    children: theme === \"light\" ? \"Light mode\" : \"Drak Mode\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lihibenbasat/PycharmProjects/FrontEnd-HW4/pages/_app.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lihibenbasat/PycharmProjects/FrontEnd-HW4/pages/_app.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lihibenbasat/PycharmProjects/FrontEnd-HW4/pages/_app.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"b9d3ffd27abd09ce\",\n                    children: \".downBar.jsx-b9d3ffd27abd09ce{text-align:right;padding-right:1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.switchContainer.jsx-b9d3ffd27abd09ce{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}h5.jsx-b9d3ffd27abd09ce{margin-right:2rem}\"\n                }, void 0, false, void 0, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lihibenbasat/PycharmProjects/FrontEnd-HW4/pages/_app.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lihibenbasat/PycharmProjects/FrontEnd-HW4/pages/_app.tsx\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUV5RDtBQUNuQjtBQUcvQixNQUFNSSxlQUFBQSxXQUFBQSxHQUFlRixvREFBYUEsQ0FBQyxDQUFDLEdBQUU7QUFFN0MsTUFBTUcsTUFBTUEsQ0FBQyxFQUFFQyxVQUFBQSxFQUFXQyxVQUFBQSxFQUFxQixHQUFLO0lBQ2xELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUMsSUFBSTtJQUM3Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLFNBQVNZLGVBQWU7WUFDdEJELFlBQVksSUFBSTtRQUNsQjtRQUNBLFNBQVNFLGdCQUFnQjtZQUN2QkYsWUFBWSxLQUFLO1lBQ2pCRyxNQUFNO1FBQ1I7UUFDQUMsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUo7UUFDbENHLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdIO1FBQ25DLE9BQU8sSUFBTTtZQUNYRSxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVTDtZQUNyQ0csT0FBT0UsbUJBQW1CLENBQUMsV0FBV0o7UUFDeEM7SUFDRixHQUFHLEVBQUU7SUFDTCxNQUFNSyxjQUFjQSxJQUFNO1FBQ3hCVCxTQUFVVSxDQUFBQSxPQUFVQSxTQUFTLFVBQVUsU0FBUyxPQUFRO0lBQzFEO0lBQ0EscUJBQ0VDLDZEQUFBQSxDQUFDaEIsYUFBYWlCLFFBQVE7UUFBQ0MsT0FBTztZQUFDZDtZQUFPVTtRQUFXO2tCQUMvQyxjQUFBRSw2REFBQUEsQ0FBQ0csT0FBQUE7WUFBSUMsSUFBSWhCO3NEQUFpQjs7OEJBRXRCWSw2REFBQUEsQ0FBQ2QsV0FBQUE7b0JBQVUsR0FBSUMsU0FBUzs4REFBVEEsQ0FBQUEsYUFBQUEsVUFBQUEsU0FBQUEsSUFBQUEsSUFBQUEsSUFBQUEsVUFBQUEsU0FBQUEsSUFBQUEsRUFBQUE7Ozs7Ozs4QkFFakJhLDZEQUFBQSxDQUFDRyxPQUFBQTs4REFBYzs7c0NBQ2JILDZEQUFBQSxDQUFDSyxNQUFBQTs7c0NBQUlmLFdBQVcsYUFBYSxnQkFBZ0I7Ozs7OztzQ0FDN0NVLDZEQUFBQSxDQUFDRyxPQUFBQTtzRUFBYzs7OENBQ2JILDZEQUFBQSxDQUFDakIscURBQVdBLEVBQVhBO29DQUFZdUIsVUFBVVI7b0NBQWFTLFNBQVNuQixVQUFVOzs7Ozs7OENBQ3ZEWSw2REFBQUEsQ0FBQ1EsTUFBQUE7OzhDQUFJcEIsVUFBVSxVQUFVLGVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0IvRDtBQUdBLGlFQUFlSCxHQUFHQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0U3dpdGNoIGZyb20gJ3JlYWN0LXN3aXRjaCc7XG5cblxuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xuICBjb25zdCBbaXNPbmxpbmUsIHNldElzT25saW5lXSA9IHVzZVN0YXRlKHRydWUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcbiAgICAgIHNldElzT25saW5lKHRydWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVPZmZsaW5lKCkge1xuICAgICAgc2V0SXNPbmxpbmUoZmFsc2UpO1xuICAgICAgYWxlcnQoJ1lvdSBhcmUgb2ZmbGluZScpO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgaGFuZGxlT25saW5lKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGhhbmRsZU9mZmxpbmUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25saW5lJywgaGFuZGxlT25saW5lKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgaGFuZGxlT2ZmbGluZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgICBzZXRUaGVtZSgoY3VycikgPT4gKGN1cnIgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3RoZW1lLCB0b2dnbGVUaGVtZX19PlxuICAgICAgPGRpdiBpZD17dGhlbWV9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7LyogPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+ICovfVxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgey8qIDwvU2Vzc2lvblByb3ZpZGVyPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3duQmFyXCI+XG4gICAgICAgICAgPGg1Pntpc09ubGluZSA/ICfinIUgT25saW5lJyA6ICfinYwgRGlzY29ubmVjdGVkJ308L2g1PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoQ29udGFpbmVyXCI+XG4gICAgICAgICAgICA8UmVhY3RTd2l0Y2ggb25DaGFuZ2U9e3RvZ2dsZVRoZW1lfSBjaGVja2VkPXt0aGVtZSA9PT0gJ2RhcmsnfS8+XG4gICAgICAgICAgICA8aDY+e3RoZW1lID09PSAnbGlnaHQnID8gXCJMaWdodCBtb2RlXCIgOiBcIkRyYWsgTW9kZVwifTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgICAgICAgICBcbiAgICAgICAgICAuZG93bkJhciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IFxuICAgICAgICAgIH1cbiAgICAgICAgICAuc3dpdGNoQ29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsIlJlYWN0U3dpdGNoIiwiVGhlbWVDb250ZXh0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJzZXRUaGVtZSIsImlzT25saW5lIiwic2V0SXNPbmxpbmUiLCJoYW5kbGVPbmxpbmUiLCJoYW5kbGVPZmZsaW5lIiwiYWxlcnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZVRoZW1lIiwiY3VyciIsIl9qc3hERVYiLCJQcm92aWRlciIsInZhbHVlIiwiZGl2IiwiaWQiLCJoNSIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImg2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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