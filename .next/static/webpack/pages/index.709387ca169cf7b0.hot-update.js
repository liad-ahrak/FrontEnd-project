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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.js\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst Blog = (props)=>{\n    _s();\n    _s1();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const [postsPerPage, setPostPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10);\n    // Get current posts\n    const indexOfLastPost = currentPage * postsPerPage;\n    const indexOfFirstPost = indexOfLastPost - postsPerPage;\n    const currentPosts = props.feed.slice(indexOfFirstPost, indexOfLastPost);\n    // Change page\n    const paginate = (pageNumber)=>{\n        setCurrentPage(pageNumber);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-78f3ae7c7f4d343c\" + \" \" + \"page\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-78f3ae7c7f4d343c\",\n                        children: \"Public Feed\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"jsx-78f3ae7c7f4d343c\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-78f3ae7c7f4d343c\",\n                            children: [\n                                currentPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"jsx-78f3ae7c7f4d343c\" + \" \" + \"post\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            post: post\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, post.id, false, {\n                                        fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 39\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    postsPerPage: postsPerPage,\n                                    totalPosts: props.feed.length,\n                                    paginate: paginate,\n                                    currPage: currentPage\n                                }, void 0, false, {\n                                    fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"78f3ae7c7f4d343c\",\n                children: \".post.jsx-78f3ae7c7f4d343c{background:white;-webkit-transition:box-shadow.1s ease-in;-moz-transition:box-shadow.1s ease-in;-o-transition:box-shadow.1s ease-in;transition:box-shadow.1s ease-in}.post.jsx-78f3ae7c7f4d343c:hover{-webkit-box-shadow:1px 1px 3px#aaa;-moz-box-shadow:1px 1px 3px#aaa;box-shadow:1px 1px 3px#aaa}.post.jsx-78f3ae7c7f4d343c+.post.jsx-78f3ae7c7f4d343c{margin-top:2rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n        lineNumber: 46,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Blog, \"pEihuPAzkKm+WspWs4eiGbFEWA8=\");\n_c2 = Blog;\n_s1(Blog, \"pEihuPAzkKm+WspWs4eiGbFEWA8=\");\n_c = Blog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Blog));\nvar _c, _c1;\n$RefreshReg$(_c, \"Blog\");\n$RefreshReg$(_c1, \"%default%\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c2;\n$RefreshReg$(_c2, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFRTtBQUNXO0FBRUg7QUEwQmpELE1BQU1LLE9BQXlCQyxDQUFBQSxRQUFVOzs7SUFDdkMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsY0FBY0MsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVoRDtJQUNBLE1BQU1VLGtCQUFrQkosY0FBY0U7SUFDdEMsTUFBTUcsbUJBQW1CRCxrQkFBa0JGO0lBQzNDLE1BQU1JLGVBQWVQLE1BQU1RLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxrQkFBa0JEO0lBRXhEO0lBQ0EsTUFBTUssV0FBV0EsQ0FBQ0MsYUFBNkM7UUFDN0RULGVBQWVTO0lBQ2pCO0lBRUEscUJBQ0VDLDZEQUFBQSxDQUFDaEIsMERBQU1BLEVBQU5BOzswQkFDQ2dCLDZEQUFBQSxDQUFDQyxPQUFBQTswREFBYzs7a0NBQ2JELDZEQUFBQSxDQUFDRSxNQUFBQTs7a0NBQUc7Ozs7OztrQ0FDSkYsNkRBQUFBLENBQUNHLFFBQUFBOztrQ0FDQyxjQUFBSCw2REFBQUEsQ0FBQ0MsT0FBQUE7OztnQ0FDRU4sYUFBYVMsR0FBRyxDQUFFQyxDQUFBQSxPQUFBQSxXQUFBQSxHQUNuQkwsNkRBQUFBLENBQUNDLE9BQUFBO2tGQUE0QjtrREFDM0IsY0FBQUQsNkRBQUFBLENBQUNmLHdEQUFJQSxFQUFKQTs0Q0FBS29CLE1BQU1BOzs7Ozs7dUNBREpBLEtBQUtDLEVBQUU7Ozs7OzhDQUtqQk4sNkRBQUFBLENBQUNkLDhEQUFVQSxFQUFWQTtvQ0FDQ0ssY0FBY0E7b0NBQ2RnQixZQUFZbkIsTUFBTVEsSUFBSSxDQUFDWSxNQUFNO29DQUM3QlYsVUFBVUE7b0NBQ1ZXLFVBQVVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0J4QjtHQWxETUY7TUFBQUE7SUFBQUEsTUFBQUE7S0FBQUE7O0FBb0ROLCtEQUFBdUIsTUFBQUMsb0ZBQUFBLENBQWV4QixLQUFBQSxFQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQb3N0LCB7IFBvc3RQcm9wcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vbGliL3ByaXNtYSdcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IGZlZWQgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSh7XG4gICAgc2tpcDogKE1hdGgucmFuZG9tKSxcbiAgICB0YWtlOiAxMCxcbiAgICB3aGVyZToge1xuICAgICAgcHVibGlzaGVkOiB0cnVlLFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGZlZWQgfSxcbiAgfTtcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZlZWQ6IFBvc3RQcm9wc1tdO1xufTtcblxuY29uc3QgQmxvZzogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtwb3N0c1BlclBhZ2UsIHNldFBvc3RQZXJQYWdlXSA9IHVzZVN0YXRlKDEwKTtcblxuICAvLyBHZXQgY3VycmVudCBwb3N0c1xuICBjb25zdCBpbmRleE9mTGFzdFBvc3QgPSBjdXJyZW50UGFnZSAqIHBvc3RzUGVyUGFnZTtcbiAgY29uc3QgaW5kZXhPZkZpcnN0UG9zdCA9IGluZGV4T2ZMYXN0UG9zdCAtIHBvc3RzUGVyUGFnZTtcbiAgY29uc3QgY3VycmVudFBvc3RzID0gcHJvcHMuZmVlZC5zbGljZShpbmRleE9mRmlyc3RQb3N0LCBpbmRleE9mTGFzdFBvc3QpO1xuXG4gIC8vIENoYW5nZSBwYWdlXG4gIGNvbnN0IHBhZ2luYXRlID0gKHBhZ2VOdW1iZXI6IFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4pID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZShwYWdlTnVtYmVyKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPGgxPlB1YmxpYyBGZWVkPC9oMT5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjdXJyZW50UG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgICAgICAgICA8UG9zdCBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICAgIHBvc3RzUGVyUGFnZT17cG9zdHNQZXJQYWdlfVxuICAgICAgICAgICAgICB0b3RhbFBvc3RzPXtwcm9wcy5mZWVkLmxlbmd0aH1cbiAgICAgICAgICAgICAgcGFnaW5hdGU9e3BhZ2luYXRlfVxuICAgICAgICAgICAgICBjdXJyUGFnZT17Y3VycmVudFBhZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9zdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdDpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0ICsgLnBvc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJQb3N0IiwiUGFnaW5hdGlvbiIsIkJsb2ciLCJwcm9wcyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwb3N0c1BlclBhZ2UiLCJzZXRQb3N0UGVyUGFnZSIsImluZGV4T2ZMYXN0UG9zdCIsImluZGV4T2ZGaXJzdFBvc3QiLCJjdXJyZW50UG9zdHMiLCJmZWVkIiwic2xpY2UiLCJwYWdpbmF0ZSIsInBhZ2VOdW1iZXIiLCJfanN4REVWIiwiZGl2IiwiaDEiLCJtYWluIiwibWFwIiwicG9zdCIsImlkIiwidG90YWxQb3N0cyIsImxlbmd0aCIsImN1cnJQYWdlIiwiX2MxIiwiX3dpdGhTdXBlckpTT05QYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});