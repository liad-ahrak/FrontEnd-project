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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.js\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst Blog = (props)=>{\n    _s();\n    _s1();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const [postsPerPage, setPostPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10);\n    const [feed, setFeed] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(props.feed);\n    // Get current posts\n    const indexOfLastPost = currentPage * postsPerPage;\n    const indexOfFirstPost = indexOfLastPost - postsPerPage;\n    const currentPosts = props.feed.slice(indexOfFirstPost, indexOfLastPost);\n    // sets start index\n    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{\n        const sendPageNumber = async ()=>{\n            const response = await fetch(\"/api/posts?currPage=\".concat(currentPage));\n            const data = await response.json();\n            setFeed(data.posts);\n        };\n        sendPageNumber();\n    }, [\n        currentPage\n    ]);\n    // Change page\n    const paginate = (pageNumber)=>{\n        setCurrentPage(pageNumber);\n        setFeed(feed);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-78f3ae7c7f4d343c\" + \" \" + \"page\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-78f3ae7c7f4d343c\",\n                        children: \"Public Feed\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"jsx-78f3ae7c7f4d343c\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-78f3ae7c7f4d343c\",\n                            children: [\n                                currentPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"jsx-78f3ae7c7f4d343c\" + \" \" + \"post\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            post: post\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, post.id, false, {\n                                        fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 39\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    postsPerPage: postsPerPage,\n                                    totalPosts: 1000000,\n                                    paginate: paginate,\n                                    currPage: currentPage\n                                }, void 0, false, {\n                                    fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"78f3ae7c7f4d343c\",\n                children: \".post.jsx-78f3ae7c7f4d343c{background:white;-webkit-transition:box-shadow.1s ease-in;-moz-transition:box-shadow.1s ease-in;-o-transition:box-shadow.1s ease-in;transition:box-shadow.1s ease-in}.post.jsx-78f3ae7c7f4d343c:hover{-webkit-box-shadow:1px 1px 3px#aaa;-moz-box-shadow:1px 1px 3px#aaa;box-shadow:1px 1px 3px#aaa}.post.jsx-78f3ae7c7f4d343c+.post.jsx-78f3ae7c7f4d343c{margin-top:2rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lihibenbasat/Desktop/school /FrontEnd-HW1/pages/index.tsx\",\n        lineNumber: 60,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Blog, \"p89WR3w5cJ0+26n2qiPFgnoctEY=\");\n_c2 = Blog;\n_s1(Blog, \"p89WR3w5cJ0+26n2qiPFgnoctEY=\");\n_c = Blog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Blog));\nvar _c, _c1;\n$RefreshReg$(_c, \"Blog\");\n$RefreshReg$(_c1, \"%default%\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c2;\n$RefreshReg$(_c2, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFRTtBQUNXO0FBRUg7QUE0QmpELE1BQU1LLE9BQXlCQyxDQUFBQSxRQUFVOzs7SUFDdkMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsY0FBY0MsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNoRCxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1oscURBQWMsQ0FBQ00sTUFBTUssSUFBSTtJQUVqRDtJQUNBLE1BQU1FLGtCQUFrQk4sY0FBY0U7SUFDdEMsTUFBTUssbUJBQW1CRCxrQkFBa0JKO0lBQzNDLE1BQU1NLGVBQWVULE1BQU1LLElBQUksQ0FBQ0ssS0FBSyxDQUFDRixrQkFBa0JEO0lBRXhEO0lBQ0FiLHNEQUFlLENBQUMsSUFBTTtRQUNwQixNQUFNa0IsaUJBQWlCLFVBQVk7WUFDakMsTUFBTUMsV0FBVyxNQUFNQyxNQUFPLHVCQUFrQ0MsTUFBQSxDQUFaZDtZQUNwRCxNQUFNZSxPQUFPLE1BQU1ILFNBQVNJLElBQUk7WUFDaENYLFFBQVFVLEtBQUtFLEtBQUs7UUFDcEI7UUFDQU47SUFDRixHQUFHO1FBQUNYO0tBQVk7SUFFaEI7SUFDQSxNQUFNa0IsV0FBV0EsQ0FBQ0MsYUFBNkM7UUFDN0RsQixlQUFla0I7UUFDZmQsUUFBUUQ7SUFDVjtJQUVBLHFCQUNFZ0IsNkRBQUFBLENBQUN6QiwwREFBTUEsRUFBTkE7OzBCQUNDeUIsNkRBQUFBLENBQUNDLE9BQUFBOzBEQUFjOztrQ0FDYkQsNkRBQUFBLENBQUNFLE1BQUFBOztrQ0FBRzs7Ozs7O2tDQUNKRiw2REFBQUEsQ0FBQ0csUUFBQUE7O2tDQUNDLGNBQUFILDZEQUFBQSxDQUFDQyxPQUFBQTs7O2dDQUNFYixhQUFhZ0IsR0FBRyxDQUFFQyxDQUFBQSxPQUFBQSxXQUFBQSxHQUNuQkwsNkRBQUFBLENBQUNDLE9BQUFBO2tGQUE0QjtrREFDM0IsY0FBQUQsNkRBQUFBLENBQUN4Qix3REFBSUEsRUFBSkE7NENBQUs2QixNQUFNQTs7Ozs7O3VDQURKQSxLQUFLQyxFQUFFOzs7Ozs4Q0FLakJOLDZEQUFBQSxDQUFDdkIsOERBQVVBLEVBQVZBO29DQUNDSyxjQUFjQTtvQ0FDZHlCLFlBQVk7b0NBQ1pULFVBQVVBO29DQUNWVSxVQUFVNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CeEI7R0E5RE1GO01BQUFBO0lBQUFBLE1BQUFBO0tBQUFBOztBQWdFTiwrREFBQStCLE1BQUFDLG9GQUFBQSxDQUFlaEMsS0FBQUEsRUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUG9zdCwgeyBQb3N0UHJvcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0XCI7XG5pbXBvcnQgcHJpc21hIGZyb20gJy4uL2xpYi9wcmlzbWEnXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCBjdXJyUGFnZSA9IGNvbnRleHQucXVlcnkuY3VyclBhZ2UgPyBwYXJzZUludChjb250ZXh0LnF1ZXJ5LmN1cnJQYWdlIGFzIHN0cmluZykgOiAwO1xuICBjb25zb2xlLmxvZygnbGloaScpXG4gIGNvbnN0IGZlZWQgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSh7XG4gICAgc2tpcDogY3VyclBhZ2UgKiAxMCxcbiAgICB0YWtlOiBjdXJyUGFnZSAqIDEwICsgMzAsXG4gICAgd2hlcmU6IHtcbiAgICAgIHB1Ymxpc2hlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBmZWVkIH0sXG4gIH07XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBmZWVkOiBQb3N0UHJvcHNbXTtcbn07XG5cbmNvbnN0IEJsb2c6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbcG9zdHNQZXJQYWdlLCBzZXRQb3N0UGVyUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XG4gIGNvbnN0IFtmZWVkLCBzZXRGZWVkXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmZlZWQpO1xuXG4gIC8vIEdldCBjdXJyZW50IHBvc3RzXG4gIGNvbnN0IGluZGV4T2ZMYXN0UG9zdCA9IGN1cnJlbnRQYWdlICogcG9zdHNQZXJQYWdlO1xuICBjb25zdCBpbmRleE9mRmlyc3RQb3N0ID0gaW5kZXhPZkxhc3RQb3N0IC0gcG9zdHNQZXJQYWdlO1xuICBjb25zdCBjdXJyZW50UG9zdHMgPSBwcm9wcy5mZWVkLnNsaWNlKGluZGV4T2ZGaXJzdFBvc3QsIGluZGV4T2ZMYXN0UG9zdCk7XG5cbiAgLy8gc2V0cyBzdGFydCBpbmRleFxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNlbmRQYWdlTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9wb3N0cz9jdXJyUGFnZT0ke2N1cnJlbnRQYWdlfWApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldEZlZWQoZGF0YS5wb3N0cyk7XG4gICAgfTtcbiAgICBzZW5kUGFnZU51bWJlcigpO1xuICB9LCBbY3VycmVudFBhZ2VdKTtcblxuICAvLyBDaGFuZ2UgcGFnZVxuICBjb25zdCBwYWdpbmF0ZSA9IChwYWdlTnVtYmVyOiBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+KSA9PiB7XG4gICAgc2V0Q3VycmVudFBhZ2UocGFnZU51bWJlcik7XG4gICAgc2V0RmVlZChmZWVkKVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICA8aDE+UHVibGljIEZlZWQ8L2gxPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2N1cnJlbnRQb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LmlkfSBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgICAgICAgICAgIDxQb3N0IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIFxuICAgICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgICAgcG9zdHNQZXJQYWdlPXtwb3N0c1BlclBhZ2V9XG4gICAgICAgICAgICAgIHRvdGFsUG9zdHM9ezEwMDAwMDB9XG4gICAgICAgICAgICAgIHBhZ2luYXRlPXtwYWdpbmF0ZX1cbiAgICAgICAgICAgICAgY3VyclBhZ2U9e2N1cnJlbnRQYWdlfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9zdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdDpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0ICsgLnBvc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJQb3N0IiwiUGFnaW5hdGlvbiIsIkJsb2ciLCJwcm9wcyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwb3N0c1BlclBhZ2UiLCJzZXRQb3N0UGVyUGFnZSIsImZlZWQiLCJzZXRGZWVkIiwiaW5kZXhPZkxhc3RQb3N0IiwiaW5kZXhPZkZpcnN0UG9zdCIsImN1cnJlbnRQb3N0cyIsInNsaWNlIiwidXNlRWZmZWN0Iiwic2VuZFBhZ2VOdW1iZXIiLCJyZXNwb25zZSIsImZldGNoIiwiY29uY2F0IiwiZGF0YSIsImpzb24iLCJwb3N0cyIsInBhZ2luYXRlIiwicGFnZU51bWJlciIsIl9qc3hERVYiLCJkaXYiLCJoMSIsIm1haW4iLCJtYXAiLCJwb3N0IiwiaWQiLCJ0b3RhbFBvc3RzIiwiY3VyclBhZ2UiLCJfYzEiLCJfd2l0aFN1cGVySlNPTlBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});