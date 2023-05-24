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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.js\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst Blog = (props)=>{\n    _s();\n    _s1();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [postsPerPage, setPostPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10);\n    const [feed, setFeed] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(props.feed);\n    const [isOnline, setIsOnline] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        function handleOnline() {\n            setIsOnline(true);\n        }\n        function handleOffline() {\n            setIsOnline(false);\n            alert(\"You are offline\");\n        }\n        window.addEventListener(\"online\", handleOnline);\n        window.addEventListener(\"offline\", handleOffline);\n        return ()=>{\n            window.removeEventListener(\"online\", handleOnline);\n            window.removeEventListener(\"offline\", handleOffline);\n        };\n    }, []);\n    // Get current posts\n    const indexOfLastPost = currentPage * postsPerPage;\n    const indexOfFirstPost = indexOfLastPost - postsPerPage;\n    const currentPosts = props.feed.slice(indexOfFirstPost, indexOfLastPost);\n    // sets start index\n    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{\n        const sendPageNumber = async ()=>{\n            const response = await fetch(\"/api/posts?currPage=\".concat(currentPage));\n            const data = await response.json();\n            setFeed(data.posts);\n        };\n        sendPageNumber();\n    }, [\n        currentPage\n    ]);\n    // Change page\n    const paginate = (pageNumber)=>{\n        setCurrentPage(pageNumber);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-78f3ae7c7f4d343c\" + \" \" + \"page\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"jsx-78f3ae7c7f4d343c\",\n                        children: isOnline ? \"✅ Online\" : \"❌ Disconnected\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-78f3ae7c7f4d343c\",\n                        children: \"Public Feed\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"jsx-78f3ae7c7f4d343c\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-78f3ae7c7f4d343c\",\n                            children: [\n                                feed.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"jsx-78f3ae7c7f4d343c\" + \" \" + \"post\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            post: post\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, post.id, false, {\n                                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 31\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    postsPerPage: postsPerPage,\n                                    totalPosts: 10,\n                                    paginate: paginate,\n                                    currPage: currentPage\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"78f3ae7c7f4d343c\",\n                children: \".post.jsx-78f3ae7c7f4d343c{background:white;-webkit-transition:box-shadow.1s ease-in;-moz-transition:box-shadow.1s ease-in;-o-transition:box-shadow.1s ease-in;transition:box-shadow.1s ease-in}.post.jsx-78f3ae7c7f4d343c:hover{-webkit-box-shadow:1px 1px 3px#aaa;-moz-box-shadow:1px 1px 3px#aaa;box-shadow:1px 1px 3px#aaa}.post.jsx-78f3ae7c7f4d343c+.post.jsx-78f3ae7c7f4d343c{margin-top:2rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\index.tsx\",\n        lineNumber: 74,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Blog, \"7V5UEyPyQKSmAgT91qy/4bPdxzo=\");\n_c2 = Blog;\n_s1(Blog, \"7V5UEyPyQKSmAgT91qy/4bPdxzo=\");\n_c = Blog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Blog));\nvar _c, _c1;\n$RefreshReg$(_c, \"Blog\");\n$RefreshReg$(_c1, \"%default%\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c2;\n$RefreshReg$(_c2, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFFVDtBQUNXO0FBRUg7QUE2QmpELE1BQU1NLE9BQXlCQyxDQUFBQSxRQUFVOzs7SUFDdkMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsY0FBY0MsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNoRCxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR2IscURBQWMsQ0FBQ08sTUFBTUssSUFBSTtJQUVqRCxNQUFNLENBQUNFLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUMsSUFBSTtJQUM3Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLFNBQVNlLGVBQWU7WUFDdEJELFlBQVksSUFBSTtRQUNsQjtRQUNBLFNBQVNFLGdCQUFnQjtZQUN2QkYsWUFBWSxLQUFLO1lBQ2pCRyxNQUFNO1FBQ1I7UUFDQUMsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUo7UUFDbENHLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdIO1FBQ25DLE9BQU8sSUFBTTtZQUNYRSxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVTDtZQUNyQ0csT0FBT0UsbUJBQW1CLENBQUMsV0FBV0o7UUFDeEM7SUFDRixHQUFHLEVBQUU7SUFFTDtJQUNBLE1BQU1LLGtCQUFrQmQsY0FBY0U7SUFDdEMsTUFBTWEsbUJBQW1CRCxrQkFBa0JaO0lBQzNDLE1BQU1jLGVBQWVqQixNQUFNSyxJQUFJLENBQUNhLEtBQUssQ0FBQ0Ysa0JBQWtCRDtJQUV4RDtJQUNBdEIsc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCLE1BQU0wQixpQkFBaUIsVUFBWTtZQUNqQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU8sdUJBQWtDQyxNQUFBLENBQVpyQjtZQUNwRCxNQUFNc0IsT0FBTyxNQUFNSCxTQUFTSSxJQUFJO1lBQ2hDbEIsUUFBUWlCLEtBQUtFLEtBQUs7UUFDcEI7UUFDQU47SUFDRixHQUFHO1FBQUNsQjtLQUFZO0lBRWhCO0lBQ0EsTUFBTXlCLFdBQVdBLENBQUNDLGFBQTZDO1FBQzdEekIsZUFBZXlCO0lBQ2pCO0lBRUEscUJBQ0VDLDZEQUFBQSxDQUFDaEMsMERBQU1BLEVBQU5BOzswQkFDQ2dDLDZEQUFBQSxDQUFDQyxPQUFBQTswREFBYzs7a0NBQ2JELDZEQUFBQSxDQUFDRSxNQUFBQTs7a0NBQUl2QixXQUFXLGFBQWEsZ0JBQWdCOzs7Ozs7a0NBQzdDcUIsNkRBQUFBLENBQUNHLE1BQUFBOztrQ0FBRzs7Ozs7O2tDQUNKSCw2REFBQUEsQ0FBQ0ksUUFBQUE7O2tDQUNDLGNBQUFKLDZEQUFBQSxDQUFDQyxPQUFBQTs7O2dDQUNFeEIsS0FBSzRCLEdBQUcsQ0FBRUMsQ0FBQUEsT0FBQUEsV0FBQUEsR0FDWE4sNkRBQUFBLENBQUNDLE9BQUFBO2tGQUE0QjtrREFDM0IsY0FBQUQsNkRBQUFBLENBQUMvQix3REFBSUEsRUFBSkE7NENBQUtxQyxNQUFNQTs7Ozs7O3VDQURKQSxLQUFLQyxFQUFFOzs7Ozs4Q0FLakJQLDZEQUFBQSxDQUFDOUIsOERBQVVBLEVBQVZBO29DQUNDSyxjQUFjQTtvQ0FDZGlDLFlBQVk7b0NBQ1pWLFVBQVVBO29DQUNWVyxVQUFVcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CeEI7R0EvRU1GO01BQUFBO0lBQUFBLE1BQUFBO0tBQUFBOztBQWlGTiwrREFBQXVDLE1BQUFDLG9GQUFBQSxDQUFleEMsS0FBQUEsRUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdHlwZSB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0LCB7IFBvc3RQcm9wcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi9saWIvcHJpc21hJ1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBjdXJyUGFnZSA9IGNvbnRleHQucXVlcnkuY3VyclBhZ2UgPyBwYXJzZUludChjb250ZXh0LnF1ZXJ5LmN1cnJQYWdlIGFzIHN0cmluZykgOiAwO1xyXG4gIFxyXG4gIGNvbnN0IGZlZWQgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSh7XHJcbiAgICBza2lwOiBjdXJyUGFnZSAqIDEwLFxyXG4gICAgdGFrZTogY3VyclBhZ2UgKiAxMCArIDMwLFxyXG4gICAgd2hlcmU6IHtcclxuICAgICAgcHVibGlzaGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGluY2x1ZGU6IHtcclxuICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBmZWVkIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgZmVlZDogUG9zdFByb3BzW107XHJcbn07XHJcblxyXG5cclxuY29uc3QgQmxvZzogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcG9zdHNQZXJQYWdlLCBzZXRQb3N0UGVyUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XHJcbiAgY29uc3QgW2ZlZWQsIHNldEZlZWRdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuZmVlZCk7XHJcblxyXG4gIGNvbnN0IFtpc09ubGluZSwgc2V0SXNPbmxpbmVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcclxuICAgICAgc2V0SXNPbmxpbmUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPZmZsaW5lKCkge1xyXG4gICAgICBzZXRJc09ubGluZShmYWxzZSk7XHJcbiAgICAgIGFsZXJ0KCdZb3UgYXJlIG9mZmxpbmUnKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBoYW5kbGVPbmxpbmUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBoYW5kbGVPZmZsaW5lKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBoYW5kbGVPbmxpbmUpO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGhhbmRsZU9mZmxpbmUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIEdldCBjdXJyZW50IHBvc3RzXHJcbiAgY29uc3QgaW5kZXhPZkxhc3RQb3N0ID0gY3VycmVudFBhZ2UgKiBwb3N0c1BlclBhZ2U7XHJcbiAgY29uc3QgaW5kZXhPZkZpcnN0UG9zdCA9IGluZGV4T2ZMYXN0UG9zdCAtIHBvc3RzUGVyUGFnZTtcclxuICBjb25zdCBjdXJyZW50UG9zdHMgPSBwcm9wcy5mZWVkLnNsaWNlKGluZGV4T2ZGaXJzdFBvc3QsIGluZGV4T2ZMYXN0UG9zdCk7XHJcblxyXG4gIC8vIHNldHMgc3RhcnQgaW5kZXhcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VuZFBhZ2VOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvcG9zdHM/Y3VyclBhZ2U9JHtjdXJyZW50UGFnZX1gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0RmVlZChkYXRhLnBvc3RzKTtcclxuICAgIH07XHJcbiAgICBzZW5kUGFnZU51bWJlcigpO1xyXG4gIH0sIFtjdXJyZW50UGFnZV0pO1xyXG5cclxuICAvLyBDaGFuZ2UgcGFnZVxyXG4gIGNvbnN0IHBhZ2luYXRlID0gKHBhZ2VOdW1iZXI6IFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4pID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8aDU+e2lzT25saW5lID8gJ+KchSBPbmxpbmUnIDogJ+KdjCBEaXNjb25uZWN0ZWQnfTwvaDU+XHJcbiAgICAgICAgPGgxPlB1YmxpYyBGZWVkPC9oMT5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtmZWVkLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgIDxQb3N0IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgIHBvc3RzUGVyUGFnZT17cG9zdHNQZXJQYWdlfVxyXG4gICAgICAgICAgICAgIHRvdGFsUG9zdHM9ezEwfS8vezEwMDAwMDB9XHJcbiAgICAgICAgICAgICAgcGFnaW5hdGU9e3BhZ2luYXRlfVxyXG4gICAgICAgICAgICAgIGN1cnJQYWdlPXtjdXJyZW50UGFnZX0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5wb3N0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdDpob3ZlciB7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvc3QgKyAucG9zdCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJQb3N0IiwiUGFnaW5hdGlvbiIsIkJsb2ciLCJwcm9wcyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwb3N0c1BlclBhZ2UiLCJzZXRQb3N0UGVyUGFnZSIsImZlZWQiLCJzZXRGZWVkIiwiaXNPbmxpbmUiLCJzZXRJc09ubGluZSIsImhhbmRsZU9ubGluZSIsImhhbmRsZU9mZmxpbmUiLCJhbGVydCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5kZXhPZkxhc3RQb3N0IiwiaW5kZXhPZkZpcnN0UG9zdCIsImN1cnJlbnRQb3N0cyIsInNsaWNlIiwic2VuZFBhZ2VOdW1iZXIiLCJyZXNwb25zZSIsImZldGNoIiwiY29uY2F0IiwiZGF0YSIsImpzb24iLCJwb3N0cyIsInBhZ2luYXRlIiwicGFnZU51bWJlciIsIl9qc3hERVYiLCJkaXYiLCJoNSIsImgxIiwibWFpbiIsIm1hcCIsInBvc3QiLCJpZCIsInRvdGFsUG9zdHMiLCJjdXJyUGFnZSIsIl9jMSIsIl93aXRoU3VwZXJKU09OUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});