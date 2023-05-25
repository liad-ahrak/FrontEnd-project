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

/***/ "./components/Post.tsx":
/*!*****************************!*\
  !*** ./components/Post.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/ClipLoader */ \"./node_modules/react-spinners/ClipLoader.js\");\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__);\n//components/post\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Post = (param)=>{\n    let { post  } = param;\n    _s();\n    const authorName = post.author ? post.author.name : \"Unknown author\";\n    const [videoSrc, setVideoSrc] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [rerenderKey, setRerenderKey] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchVideo = async ()=>{\n            try {\n                const res = await fetch(\"/api/uploadDB?postId=\".concat(post.id));\n                if (res.ok) {\n                    const videoData = await res.json();\n                    setVideoSrc(videoData.cloudinaryLink);\n                    setRerenderKey((r)=>r + 1);\n                }\n            } catch (error) {\n                console.error(\"Error fetching video: \", error);\n            }\n        };\n        fetchVideo();\n    }, [\n        post.id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default()), {\n            color: \"#fff\",\n            size: 150\n        }, void 0, false, void 0, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/p/[id]\", \"/p/\".concat(post.id)),\n            className: \"jsx-dff8c1683dbe767\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"jsx-dff8c1683dbe767\",\n                    children: [\n                        videoSrc && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaVideo, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Post.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 26\n                        }, undefined),\n                        post.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Post.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                    className: \"jsx-dff8c1683dbe767\",\n                    children: [\n                        \"By \",\n                        authorName\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Post.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: post.content\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Post.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                videoSrc && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    src: videoSrc,\n                    controls: true,\n                    className: \"jsx-dff8c1683dbe767\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Post.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 22\n                }, undefined),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"dff8c1683dbe767\",\n                    children: \"div.jsx-dff8c1683dbe767{color:inherit;padding:2rem;background:rgba(0,0,0,.05)}\"\n                }, void 0, false, void 0, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Post.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Post.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Post, \"qpyLoM0CvRlnzolo6CTtBT7KHcU=\");\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUI7Ozs7QUFDZ0I7QUFDVTtBQUNpQjtBQUNuQjtBQUNVO0FBYW5ELE1BQU1RLE9BQXNDLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQ25ELE1BQU1DLGFBQWFELEtBQUtFLE1BQU0sR0FBR0YsS0FBS0UsTUFBTSxDQUFDQyxJQUFJLEdBQUcsZ0JBQWdCO0lBQ3BFLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBZ0IsSUFBSTtJQUM1RCxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFHL0NELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNYyxhQUFhLFVBQVk7WUFDN0IsSUFBSTtnQkFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQU0sd0JBQWdDLE9BQVJWLEtBQUtXLEVBQUU7Z0JBQ3ZELElBQUlGLElBQUlHLEVBQUUsRUFBRTtvQkFDVixNQUFNQyxZQUFZLE1BQU1KLElBQUlLLElBQUk7b0JBQ2hDVCxZQUFZUSxVQUFVRSxjQUFjO29CQUNwQ1IsZUFBZVMsQ0FBQUEsSUFBS0EsSUFBRTtnQkFDeEIsQ0FBQztZQUNILEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7WUFDMUM7UUFDRjtRQUVBVDtJQUNGLEdBQUc7UUFBQ1IsS0FBS1csRUFBRTtLQUFDO0lBSVoscUJBQ0UsOERBQUNmLDJDQUFRQTtRQUFDdUIsd0JBQVUsOERBQUNyQixrRUFBVUE7WUFBQ3NCLE9BQU87WUFBUUMsTUFBTTs7a0JBQ25ELDRFQUFDQztZQUFJQyxTQUFTLElBQU1oQyx1REFBVyxDQUFDLFdBQVcsTUFBYyxPQUFSUyxLQUFLVyxFQUFFOzs7OEJBQ3RELDhEQUFDYzs7O3dCQUFJckIsMEJBQVksOERBQUNQLG1EQUFPQTs7Ozs7d0JBQUlHLEtBQUswQixLQUFLOzs7Ozs7OzhCQUN2Qyw4REFBQ0M7Ozt3QkFBTTt3QkFBSTFCOzs7Ozs7OzhCQUNYLDhEQUFDVCxzREFBYUE7b0JBQUNvQyxVQUFVNUIsS0FBSzZCLE9BQU87Ozs7OztnQkFFcEN6QiwwQkFBWSw4REFBQzBCO29CQUFNQyxLQUFLM0I7b0JBQVU0QixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJuRDtHQWpETWpDO0tBQUFBO0FBbUROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC50c3g/NzcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbXBvbmVudHMvcG9zdFxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgLFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFWaWRlbyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgQ2xpcExvYWRlciBmcm9tICdyZWFjdC1zcGlubmVycy9DbGlwTG9hZGVyJztcclxuXHJcbmV4cG9ydCB0eXBlIFBvc3RQcm9wcyA9IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYXV0aG9yOiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gIH0gfCBudWxsO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBwdWJsaXNoZWQ6IGJvb2xlYW47XHJcbn07XHJcblxyXG5jb25zdCBQb3N0OiBSZWFjdC5GQzx7IHBvc3Q6IFBvc3RQcm9wcyB9PiA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGF1dGhvck5hbWUgPSBwb3N0LmF1dGhvciA/IHBvc3QuYXV0aG9yLm5hbWUgOiBcIlVua25vd24gYXV0aG9yXCI7XHJcbiAgY29uc3QgW3ZpZGVvU3JjLCBzZXRWaWRlb1NyY10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbcmVyZW5kZXJLZXksIHNldFJlcmVuZGVyS2V5XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVmlkZW8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvdXBsb2FkREI/cG9zdElkPSR7cG9zdC5pZH1gKTtcclxuICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICBjb25zdCB2aWRlb0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgc2V0VmlkZW9TcmModmlkZW9EYXRhLmNsb3VkaW5hcnlMaW5rKTtcclxuICAgICAgICAgIHNldFJlcmVuZGVyS2V5KHIgPT4gcisxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHZpZGVvOiBcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoVmlkZW8oKTtcclxuICB9LCBbcG9zdC5pZF0pO1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PENsaXBMb2FkZXIgY29sb3I9eycjZmZmJ30gc2l6ZT17MTUwfS8+fT5cclxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChcIi9wL1tpZF1cIiwgYC9wLyR7cG9zdC5pZH1gKX0+XHJcbiAgICAgICAgPGgyPnt2aWRlb1NyYyAmJiA8RmFWaWRlby8+fXtwb3N0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPHNtYWxsPkJ5IHthdXRob3JOYW1lfTwvc21hbGw+XHJcbiAgICAgICAgPFJlYWN0TWFya2Rvd24gY2hpbGRyZW49e3Bvc3QuY29udGVudH0gLz5cclxuICAgICAgICB7LyogPHZpZGVvIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RzdmpodWsyNS92aWRlby91cGxvYWQvdjE2ODQ4NTQyMDEvMTY4NDg1NDIwMTY2My5tcDRcIiBjb250cm9scyAvPiAqL31cclxuICAgICAgICB7dmlkZW9TcmMgJiYgPHZpZGVvIHNyYz17dmlkZW9TcmN9IGNvbnRyb2xzIC8+fVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gI2xpZ2h0IHtcclxuICAgICAgICAgIC8vICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIC8vICNkYXJrICB7XHJcbiAgICAgICAgICAvLyAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NSk7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3VzcGVuc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sIm5hbWVzIjpbIlJvdXRlciIsIlJlYWN0TWFya2Rvd24iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3VzcGVuc2UiLCJGYVZpZGVvIiwiQ2xpcExvYWRlciIsIlBvc3QiLCJwb3N0IiwiYXV0aG9yTmFtZSIsImF1dGhvciIsIm5hbWUiLCJ2aWRlb1NyYyIsInNldFZpZGVvU3JjIiwicmVyZW5kZXJLZXkiLCJzZXRSZXJlbmRlcktleSIsImZldGNoVmlkZW8iLCJyZXMiLCJmZXRjaCIsImlkIiwib2siLCJ2aWRlb0RhdGEiLCJqc29uIiwiY2xvdWRpbmFyeUxpbmsiLCJyIiwiZXJyb3IiLCJjb25zb2xlIiwiZmFsbGJhY2siLCJjb2xvciIsInNpemUiLCJkaXYiLCJvbkNsaWNrIiwicHVzaCIsImgyIiwidGl0bGUiLCJzbWFsbCIsImNoaWxkcmVuIiwiY29udGVudCIsInZpZGVvIiwic3JjIiwiY29udHJvbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Post.tsx\n"));

/***/ })

});