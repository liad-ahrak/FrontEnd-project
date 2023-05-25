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

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ \"./components/Layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Pagination = (param)=>{\n    let { postsPerPage , totalPosts , paginate , currPage  } = param;\n    _s();\n    const pageNumbers = [];\n    const [startNum, setStartNum] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    let nextFeed = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([\n        0\n    ]);\n    //we will use this ref only for chack for the first page\n    let next2Feed = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([\n        0\n    ]);\n    // updateRef: update the ref that save the feed of the next possible page \n    const updateRef = async (i)=>{\n        const response = await fetch(\"/api/posts?currPage=\".concat(i + 1));\n        const data = await response.json();\n        nextFeed.current = data.posts;\n        const response2 = await fetch(\"/api/posts?currPage=\".concat(i + 2));\n        const data2 = await response2.json();\n        next2Feed.current = data2.posts;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        updateRef(currPage);\n    });\n    // selectPage: sets 'currPage' to be the current page number\n    //             sets the pagination\n    const selectPage = (pageNumber)=>{\n        if (pageNumber - 1 === currPage && nextFeed.current.length === 0) {\n            pageNumber = pageNumber - 1;\n        }\n        // let maxPage = Math.ceil(totalPosts / postsPerPage);\n        // pageNumber = Math.max(Math.min(maxPage, pageNumber), 0);\n        pageNumber = Math.max(pageNumber, 0);\n        setStartNum(Math.max(pageNumber - 1, 0));\n        currPage = pageNumber;\n        paginate(pageNumber);\n    };\n    var offset = 2;\n    if (nextFeed.current.length === 0) {\n        offset = currPage === 0 ? 0 : 1;\n    }\n    if (currPage === 0 && next2Feed.current.length === 0) {\n        offset = 1;\n    }\n    // Math.min(Math.ceil(totalPosts / postsPerPage), startNum + 2)\n    for(let i = startNum; i <= startNum + offset; i++){\n        pageNumbers.push(i);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"jsx-56f573b5fd527c7f\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-56f573b5fd527c7f\" + \" \" + \"align-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>selectPage(currPage - 1),\n                        className: \"jsx-56f573b5fd527c7f\" + \" \" + \"pagination\",\n                        children: \" previous \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Pagination.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"jsx-56f573b5fd527c7f\" + \" \" + \"pagination\",\n                        children: pageNumbers.map((number)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"jsx-56f573b5fd527c7f\" + \" \" + \"page-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    onClick: ()=>{\n                                        selectPage(number);\n                                    },\n                                    className: \"jsx-56f573b5fd527c7f\" + \" \" + ((currPage == {\n                                        number\n                                    } ? \"active\" : \"\") || \"\"),\n                                    children: number + 1\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Pagination.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, number, false, {\n                                fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Pagination.js\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Pagination.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>selectPage(currPage + 1),\n                        className: \"jsx-56f573b5fd527c7f\" + \" \" + \"pagination\",\n                        children: \" next \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Pagination.js\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-56f573b5fd527c7f\",\n                        children: [\n                            \"you are now in page \",\n                            currPage + 1,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Pagination.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-56f573b5fd527c7f\",\n                        children: [\n                            \"number of feed in page \",\n                            currPage + 2,\n                            \" are \",\n                            nextFeed.current.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Pagination.js\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Pagination.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"56f573b5fd527c7f\",\n                children: \".align-center.jsx-56f573b5fd527c7f button.jsx-56f573b5fd527c7f{background-color:none;border:none;color:black;margin-left:40px;padding-bottom:50px}.pagination.jsx-56f573b5fd527c7f{display:inline-block}.active.jsx-56f573b5fd527c7f{color:red}.align-center.jsx-56f573b5fd527c7f{text-align:center}.page-item.jsx-56f573b5fd527c7f{display:inline-block}.pagination.jsx-56f573b5fd527c7f a.jsx-56f573b5fd527c7f{color:black;float:left;padding:8px 16px;text-decoration:none;-webkit-transition:background-color.3s;-moz-transition:background-color.3s;-o-transition:background-color.3s;transition:background-color.3s}.pagination.jsx-56f573b5fd527c7f a.jsx-56f573b5fd527c7f:active{background-color:dodgerblue;color:white}.pagination.jsx-56f573b5fd527c7f a.jsx-56f573b5fd527c7f:hover:not(.active){background-color:#ddd}#light.jsx-56f573b5fd527c7f a.jsx-56f573b5fd527c7f{background-color:rgba(0,0,0,.05)}#dark.jsx-56f573b5fd527c7f a.jsx-56f573b5fd527c7f{background-color:rgba(0,0,0,.55)}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\components\\\\Pagination.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Pagination, \"KaTtm4VGP+FcfCYDwYGoDM5Ig6U=\");\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZW50cy9QYWdpbmF0aW9uLmpzP2IyYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlICwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XHJcblxyXG5cclxuY29uc3QgUGFnaW5hdGlvbiA9ICh7IHBvc3RzUGVyUGFnZSwgdG90YWxQb3N0cywgcGFnaW5hdGUsIGN1cnJQYWdlIH0pID0+IHtcclxuICBjb25zdCBwYWdlTnVtYmVycyA9IFtdO1xyXG4gIGNvbnN0IFtzdGFydE51bSwgc2V0U3RhcnROdW1dID0gdXNlU3RhdGUoMCk7XHJcbiAgbGV0IG5leHRGZWVkID0gdXNlUmVmKFswXSk7XHJcbiAgLy93ZSB3aWxsIHVzZSB0aGlzIHJlZiBvbmx5IGZvciBjaGFjayBmb3IgdGhlIGZpcnN0IHBhZ2VcclxuICBsZXQgbmV4dDJGZWVkID0gdXNlUmVmKFswXSk7XHJcbiAgLy8gdXBkYXRlUmVmOiB1cGRhdGUgdGhlIHJlZiB0aGF0IHNhdmUgdGhlIGZlZWQgb2YgdGhlIG5leHQgcG9zc2libGUgcGFnZSBcclxuICBjb25zdCB1cGRhdGVSZWYgPSBhc3luYyAoaSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9wb3N0cz9jdXJyUGFnZT0ke2krMX1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBuZXh0RmVlZC5jdXJyZW50ID0gZGF0YS5wb3N0cztcclxuICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGZldGNoKGAvYXBpL3Bvc3RzP2N1cnJQYWdlPSR7aSsyfWApO1xyXG4gICAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXNwb25zZTIuanNvbigpO1xyXG4gICAgbmV4dDJGZWVkLmN1cnJlbnQgPSBkYXRhMi5wb3N0cztcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgdXBkYXRlUmVmKGN1cnJQYWdlKTtcclxuICB9KTtcclxuICAvLyBzZWxlY3RQYWdlOiBzZXRzICdjdXJyUGFnZScgdG8gYmUgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXJcclxuICAvLyAgICAgICAgICAgICBzZXRzIHRoZSBwYWdpbmF0aW9uXHJcbiAgY29uc3Qgc2VsZWN0UGFnZSA9IChwYWdlTnVtYmVyKSA9PiB7XHJcbiAgICBpZihwYWdlTnVtYmVyLTEgPT09IGN1cnJQYWdlICYmIG5leHRGZWVkLmN1cnJlbnQubGVuZ3RoID09PSAwKXtcclxuICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXItMTtcclxuICAgIH1cclxuICAgIC8vIGxldCBtYXhQYWdlID0gTWF0aC5jZWlsKHRvdGFsUG9zdHMgLyBwb3N0c1BlclBhZ2UpO1xyXG4gICAgLy8gcGFnZU51bWJlciA9IE1hdGgubWF4KE1hdGgubWluKG1heFBhZ2UsIHBhZ2VOdW1iZXIpLCAwKTtcclxuICAgIHBhZ2VOdW1iZXIgPSBNYXRoLm1heChwYWdlTnVtYmVyLCAwKTtcclxuICAgIHNldFN0YXJ0TnVtKE1hdGgubWF4KHBhZ2VOdW1iZXIgLSAxLCAwKSk7XHJcbiAgICBjdXJyUGFnZSA9IHBhZ2VOdW1iZXI7XHJcbiAgICBwYWdpbmF0ZShwYWdlTnVtYmVyKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIHZhciBvZmZzZXQgPSAgMjtcclxuICBpZihuZXh0RmVlZC5jdXJyZW50Lmxlbmd0aCA9PT0gMCl7XHJcbiAgICBvZmZzZXQgPSBjdXJyUGFnZT09PTA/IDAgOiAxXHJcbiAgfVxyXG4gIGlmKGN1cnJQYWdlID09PSAwICYmIG5leHQyRmVlZC5jdXJyZW50Lmxlbmd0aCA9PT0gMCAgKXtcclxuICAgIG9mZnNldCA9IDE7XHJcbiAgfVxyXG4gIC8vIE1hdGgubWluKE1hdGguY2VpbCh0b3RhbFBvc3RzIC8gcG9zdHNQZXJQYWdlKSwgc3RhcnROdW0gKyAyKVxyXG4gIGZvciAobGV0IGkgPSBzdGFydE51bTsgaSA8PSBzdGFydE51bStvZmZzZXQgOyBpKyspIHtcclxuICAgIHBhZ2VOdW1iZXJzLnB1c2goaSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGlnbi1jZW50ZXInPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncGFnaW5hdGlvbidvbkNsaWNrPXsoKSA9PiBzZWxlY3RQYWdlKGN1cnJQYWdlIC0gMSl9ID4gcHJldmlvdXMgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3BhZ2luYXRpb24nPlxyXG4gICAgICAgICAgICAgICAge3BhZ2VOdW1iZXJzLm1hcChudW1iZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bnVtYmVyfSBjbGFzc05hbWU9J3BhZ2UtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge3NlbGVjdFBhZ2UobnVtYmVyKX19IC8vaHJlZj0nIydcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJyUGFnZSA9PSB7bnVtYmVyfSA/ICdhY3RpdmUnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtudW1iZXIrMX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdwYWdpbmF0aW9uJyBvbkNsaWNrPXsoKSA9PiBzZWxlY3RQYWdlKGN1cnJQYWdlICsgMSl9PiBuZXh0IDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDI+eW91IGFyZSBub3cgaW4gcGFnZSB7Y3VyclBhZ2UrMX0gPC9oMj5cclxuICAgICAgICAgICAgPGgyPm51bWJlciBvZiBmZWVkIGluIHBhZ2Uge2N1cnJQYWdlKzJ9IGFyZSB7bmV4dEZlZWQuY3VycmVudC5sZW5ndGh9PC9oMj5cclxuICAgICAgICAgICAgey8qIDxoMj50aGUgb2Zmc2V0IGlzIHtvZmZzZXR9PC9oMj5cclxuICAgICAgICAgICAgPGgyPm51bWJlciBvZiBmZWVkIGluIHBhZ2Uge2N1cnJQYWdlKzJ9IGFyZSB7bmV4dDJGZWVkLmN1cnJlbnQubGVuZ3RofTwvaDI+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5hbGlnbi1jZW50ZXIgYnV0dG9ue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhZ2luYXRpb257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC5hbGlnbi1jZW50ZXJ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnBhZ2UtaXRlbSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wYWdpbmF0aW9uIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcclxuICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAucGFnaW5hdGlvbiBhOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAucGFnaW5hdGlvbiBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNsaWdodCBhe1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2RhcmsgIGF7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkxheW91dCIsIlBhZ2luYXRpb24iLCJwb3N0c1BlclBhZ2UiLCJ0b3RhbFBvc3RzIiwicGFnaW5hdGUiLCJjdXJyUGFnZSIsInBhZ2VOdW1iZXJzIiwic3RhcnROdW0iLCJzZXRTdGFydE51bSIsIm5leHRGZWVkIiwibmV4dDJGZWVkIiwidXBkYXRlUmVmIiwiaSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImN1cnJlbnQiLCJwb3N0cyIsInJlc3BvbnNlMiIsImRhdGEyIiwic2VsZWN0UGFnZSIsInBhZ2VOdW1iZXIiLCJsZW5ndGgiLCJNYXRoIiwibWF4Iiwib2Zmc2V0IiwicHVzaCIsIm5hdiIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsIm51bWJlciIsImxpIiwiYSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Pagination.js\n"));

/***/ })

});