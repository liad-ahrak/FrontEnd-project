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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.js\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst Blog = (props)=>{\n    _s();\n    _s1();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [postsPerPage, setPostPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10);\n    const [feed, setFeed] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(props.feed);\n    const [isOnline, setIsOnline] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        function handleOnline() {\n            setIsOnline(true);\n        }\n        function handleOffline() {\n            setIsOnline(false);\n            alert(\"You are offline\");\n        }\n        window.addEventListener(\"online\", handleOnline);\n        window.addEventListener(\"offline\", handleOffline);\n        return ()=>{\n            window.removeEventListener(\"online\", handleOnline);\n            window.removeEventListener(\"offline\", handleOffline);\n        };\n    }, []);\n    // Get current posts\n    const indexOfLastPost = currentPage * postsPerPage;\n    const indexOfFirstPost = indexOfLastPost - postsPerPage;\n    const currentPosts = props.feed.slice(indexOfFirstPost, indexOfLastPost);\n    // sets start index\n    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{\n        const sendPageNumber = async ()=>{\n            const response = await fetch(\"/api/posts?currPage=\".concat(currentPage));\n            const data = await response.json();\n            setFeed(data.posts);\n        };\n        sendPageNumber();\n    }, [\n        currentPage\n    ]);\n    // Change page\n    const paginate = (pageNumber)=>{\n        setCurrentPage(pageNumber);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-78f3ae7c7f4d343c\" + \" \" + \"page\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-78f3ae7c7f4d343c\",\n                        children: \"Public Feed\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"jsx-78f3ae7c7f4d343c\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-78f3ae7c7f4d343c\",\n                            children: [\n                                feed.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"jsx-78f3ae7c7f4d343c\" + \" \" + \"post\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            post: post\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, post.id, false, {\n                                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 31\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    postsPerPage: postsPerPage,\n                                    totalPosts: 10,\n                                    paginate: paginate,\n                                    currPage: currentPage\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"78f3ae7c7f4d343c\",\n                children: \".post.jsx-78f3ae7c7f4d343c{background:white;-webkit-transition:box-shadow.1s ease-in;-moz-transition:box-shadow.1s ease-in;-o-transition:box-shadow.1s ease-in;transition:box-shadow.1s ease-in}.post.jsx-78f3ae7c7f4d343c:hover{-webkit-box-shadow:1px 1px 3px#aaa;-moz-box-shadow:1px 1px 3px#aaa;box-shadow:1px 1px 3px#aaa}.post.jsx-78f3ae7c7f4d343c+.post.jsx-78f3ae7c7f4d343c{margin-top:2rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n        lineNumber: 74,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Blog, \"7V5UEyPyQKSmAgT91qy/4bPdxzo=\");\n_c2 = Blog;\n_s1(Blog, \"7V5UEyPyQKSmAgT91qy/4bPdxzo=\");\n_c = Blog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Blog));\nvar _c, _c1;\n$RefreshReg$(_c, \"Blog\");\n$RefreshReg$(_c1, \"%default%\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c2;\n$RefreshReg$(_c2, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFFVDtBQUNXO0FBRUg7QUE2QmpELE1BQU1NLE9BQXlCQyxDQUFBQSxRQUFVOzs7SUFDdkMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsY0FBY0MsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNoRCxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR2IscURBQWMsQ0FBQ08sTUFBTUssSUFBSTtJQUVqRCxNQUFNLENBQUNFLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUMsSUFBSTtJQUM3Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLFNBQVNlLGVBQWU7WUFDdEJELFlBQVksSUFBSTtRQUNsQjtRQUNBLFNBQVNFLGdCQUFnQjtZQUN2QkYsWUFBWSxLQUFLO1lBQ2pCRyxNQUFNO1FBQ1I7UUFDQUMsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUo7UUFDbENHLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdIO1FBQ25DLE9BQU8sSUFBTTtZQUNYRSxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVTDtZQUNyQ0csT0FBT0UsbUJBQW1CLENBQUMsV0FBV0o7UUFDeEM7SUFDRixHQUFHLEVBQUU7SUFFTDtJQUNBLE1BQU1LLGtCQUFrQmQsY0FBY0U7SUFDdEMsTUFBTWEsbUJBQW1CRCxrQkFBa0JaO0lBQzNDLE1BQU1jLGVBQWVqQixNQUFNSyxJQUFJLENBQUNhLEtBQUssQ0FBQ0Ysa0JBQWtCRDtJQUV4RDtJQUNBdEIsc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCLE1BQU0wQixpQkFBaUIsVUFBWTtZQUNqQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU8sdUJBQWtDQyxNQUFBLENBQVpyQjtZQUNwRCxNQUFNc0IsT0FBTyxNQUFNSCxTQUFTSSxJQUFJO1lBQ2hDbEIsUUFBUWlCLEtBQUtFLEtBQUs7UUFDcEI7UUFDQU47SUFDRixHQUFHO1FBQUNsQjtLQUFZO0lBRWhCO0lBQ0EsTUFBTXlCLFdBQVdBLENBQUNDLGFBQTZDO1FBQzdEekIsZUFBZXlCO0lBQ2pCO0lBRUEscUJBQ0VDLDZEQUFBQSxDQUFDaEMsMERBQU1BLEVBQU5BOzswQkFDQ2dDLDZEQUFBQSxDQUFDQyxPQUFBQTswREFBYzs7a0NBQ2JELDZEQUFBQSxDQUFDRSxNQUFBQTs7a0NBQUc7Ozs7OztrQ0FDSkYsNkRBQUFBLENBQUNHLFFBQUFBOztrQ0FDQyxjQUFBSCw2REFBQUEsQ0FBQ0MsT0FBQUE7OztnQ0FDRXhCLEtBQUsyQixHQUFHLENBQUVDLENBQUFBLE9BQUFBLFdBQUFBLEdBQ1hMLDZEQUFBQSxDQUFDQyxPQUFBQTtrRkFBNEI7a0RBQzNCLGNBQUFELDZEQUFBQSxDQUFDL0Isd0RBQUlBLEVBQUpBOzRDQUFLb0MsTUFBTUE7Ozs7Ozt1Q0FESkEsS0FBS0MsRUFBRTs7Ozs7OENBS2pCTiw2REFBQUEsQ0FBQzlCLDhEQUFVQSxFQUFWQTtvQ0FDQ0ssY0FBY0E7b0NBQ2RnQyxZQUFZO29DQUNaVCxVQUFVQTtvQ0FDVlUsVUFBVW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQnhCO0dBOUVNRjtNQUFBQTtJQUFBQSxNQUFBQTtLQUFBQTs7QUFnRk4sK0RBQUFzQyxNQUFBQyxvRkFBQUEsQ0FBZXZDLEtBQUFBLEVBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUG9zdCwgeyBQb3N0UHJvcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0XCI7XHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vbGliL3ByaXNtYSdcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY3VyclBhZ2UgPSBjb250ZXh0LnF1ZXJ5LmN1cnJQYWdlID8gcGFyc2VJbnQoY29udGV4dC5xdWVyeS5jdXJyUGFnZSBhcyBzdHJpbmcpIDogMDtcclxuICBcclxuICBjb25zdCBmZWVkID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZE1hbnkoe1xyXG4gICAgc2tpcDogY3VyclBhZ2UgKiAxMCxcclxuICAgIHRha2U6IGN1cnJQYWdlICogMTAgKyAzMCxcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgIHB1Ymxpc2hlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBpbmNsdWRlOiB7XHJcbiAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZmVlZCB9LFxyXG4gIH07XHJcbn07XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGZlZWQ6IFBvc3RQcm9wc1tdO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IEJsb2c6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Bvc3RzUGVyUGFnZSwgc2V0UG9zdFBlclBhZ2VdID0gdXNlU3RhdGUoMTApO1xyXG4gIGNvbnN0IFtmZWVkLCBzZXRGZWVkXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmZlZWQpO1xyXG5cclxuICBjb25zdCBbaXNPbmxpbmUsIHNldElzT25saW5lXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XHJcbiAgICAgIHNldElzT25saW5lKHRydWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlT2ZmbGluZSgpIHtcclxuICAgICAgc2V0SXNPbmxpbmUoZmFsc2UpO1xyXG4gICAgICBhbGVydCgnWW91IGFyZSBvZmZsaW5lJyk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgaGFuZGxlT25saW5lKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgaGFuZGxlT2ZmbGluZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25saW5lJywgaGFuZGxlT25saW5lKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBoYW5kbGVPZmZsaW5lKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBHZXQgY3VycmVudCBwb3N0c1xyXG4gIGNvbnN0IGluZGV4T2ZMYXN0UG9zdCA9IGN1cnJlbnRQYWdlICogcG9zdHNQZXJQYWdlO1xyXG4gIGNvbnN0IGluZGV4T2ZGaXJzdFBvc3QgPSBpbmRleE9mTGFzdFBvc3QgLSBwb3N0c1BlclBhZ2U7XHJcbiAgY29uc3QgY3VycmVudFBvc3RzID0gcHJvcHMuZmVlZC5zbGljZShpbmRleE9mRmlyc3RQb3N0LCBpbmRleE9mTGFzdFBvc3QpO1xyXG5cclxuICAvLyBzZXRzIHN0YXJ0IGluZGV4XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNlbmRQYWdlTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3Bvc3RzP2N1cnJQYWdlPSR7Y3VycmVudFBhZ2V9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldEZlZWQoZGF0YS5wb3N0cyk7XHJcbiAgICB9O1xyXG4gICAgc2VuZFBhZ2VOdW1iZXIoKTtcclxuICB9LCBbY3VycmVudFBhZ2VdKTtcclxuXHJcbiAgLy8gQ2hhbmdlIHBhZ2VcclxuICBjb25zdCBwYWdpbmF0ZSA9IChwYWdlTnVtYmVyOiBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICBzZXRDdXJyZW50UGFnZShwYWdlTnVtYmVyKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgPGgxPlB1YmxpYyBGZWVkPC9oMT5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtmZWVkLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgIDxQb3N0IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgIHBvc3RzUGVyUGFnZT17cG9zdHNQZXJQYWdlfVxyXG4gICAgICAgICAgICAgIHRvdGFsUG9zdHM9ezEwfS8vezEwMDAwMDB9XHJcbiAgICAgICAgICAgICAgcGFnaW5hdGU9e3BhZ2luYXRlfVxyXG4gICAgICAgICAgICAgIGN1cnJQYWdlPXtjdXJyZW50UGFnZX0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5wb3N0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdDpob3ZlciB7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvc3QgKyAucG9zdCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJQb3N0IiwiUGFnaW5hdGlvbiIsIkJsb2ciLCJwcm9wcyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwb3N0c1BlclBhZ2UiLCJzZXRQb3N0UGVyUGFnZSIsImZlZWQiLCJzZXRGZWVkIiwiaXNPbmxpbmUiLCJzZXRJc09ubGluZSIsImhhbmRsZU9ubGluZSIsImhhbmRsZU9mZmxpbmUiLCJhbGVydCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5kZXhPZkxhc3RQb3N0IiwiaW5kZXhPZkZpcnN0UG9zdCIsImN1cnJlbnRQb3N0cyIsInNsaWNlIiwic2VuZFBhZ2VOdW1iZXIiLCJyZXNwb25zZSIsImZldGNoIiwiY29uY2F0IiwiZGF0YSIsImpzb24iLCJwb3N0cyIsInBhZ2luYXRlIiwicGFnZU51bWJlciIsIl9qc3hERVYiLCJkaXYiLCJoMSIsIm1haW4iLCJtYXAiLCJwb3N0IiwiaWQiLCJ0b3RhbFBvc3RzIiwiY3VyclBhZ2UiLCJfYzEiLCJfd2l0aFN1cGVySlNPTlBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});