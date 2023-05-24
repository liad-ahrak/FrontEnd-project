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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    const [isOnline, setIsOnline] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        function handleOnline() {\n            setIsOnline(true);\n        }\n        function handleOffline() {\n            setIsOnline(false);\n            alert(\"You are offline\");\n        }\n        window.addEventListener(\"online\", handleOnline);\n        window.addEventListener(\"offline\", handleOffline);\n        return ()=>{\n            window.removeEventListener(\"online\", handleOnline);\n            window.removeEventListener(\"offline\", handleOffline);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n                session: pageProps.session,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: isOnline ? \"✅ Online\" : \"❌ Disconnected\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\_app.tsx\",\n        lineNumber: 24,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpRDtBQUVOO0FBRTNDLE1BQU1HLE1BQU1BLENBQUMsRUFBRUMsVUFBQUEsRUFBV0MsVUFBQUEsRUFBcUIsR0FBSztJQUVsRCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsSUFBSTtJQUM3Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLFNBQVNPLGVBQWU7WUFDdEJELFlBQVksSUFBSTtRQUNsQjtRQUNBLFNBQVNFLGdCQUFnQjtZQUN2QkYsWUFBWSxLQUFLO1lBQ2pCRyxNQUFNO1FBQ1I7UUFDQUMsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUo7UUFDbENHLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdIO1FBQ25DLE9BQU8sSUFBTTtZQUNYRSxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVTDtZQUNyQ0csT0FBT0UsbUJBQW1CLENBQUMsV0FBV0o7UUFDeEM7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRUssNkRBQUFBLENBQUNDLE9BQUFBOzswQkFDQ0QsNkRBQUFBLENBQUNkLDREQUFlQSxFQUFmQTtnQkFBZ0JnQixTQUFTWCxVQUFVVyxPQUFPOzBCQUN6QyxjQUFBRiw2REFBQUEsQ0FBQ1YsV0FBQUE7b0JBQVUsR0FBSUMsU0FBUzs7Ozs7Ozs7Ozs7MEJBRTFCUyw2REFBQUEsQ0FBQ0csTUFBQUE7MEJBQUlYLFdBQVcsYUFBYSxnQkFBZ0I7Ozs7Ozs7Ozs7OztBQUduRDtBQUdBLGlFQUFlSCxHQUFHQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFtpc09ubGluZSwgc2V0SXNPbmxpbmVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcclxuICAgICAgc2V0SXNPbmxpbmUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPZmZsaW5lKCkge1xyXG4gICAgICBzZXRJc09ubGluZShmYWxzZSk7XHJcbiAgICAgIGFsZXJ0KCdZb3UgYXJlIG9mZmxpbmUnKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBoYW5kbGVPbmxpbmUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBoYW5kbGVPZmZsaW5lKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBoYW5kbGVPbmxpbmUpO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGhhbmRsZU9mZmxpbmUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9TZXNzaW9uUHJvdmlkZXI+XHJcbiAgICAgIDxoNT57aXNPbmxpbmUgPyAn4pyFIE9ubGluZScgOiAn4p2MIERpc2Nvbm5lY3RlZCd9PC9oNT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc09ubGluZSIsInNldElzT25saW5lIiwiaGFuZGxlT25saW5lIiwiaGFuZGxlT2ZmbGluZSIsImFsZXJ0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfanN4REVWIiwiZGl2Iiwic2Vzc2lvbiIsImg1Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

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