"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./pages/profile.tsx":
/*!***************************!*\
  !*** ./pages/profile.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\nconst Profile = (props)=>{\n    _s();\n    var _props_data, _props_data1, _props_data2, _props_data3, _props_data4, _props_data5;\n    _s1();\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const userId = (_props_data = props.data) === null || _props_data === void 0 ? void 0 : _props_data.id;\n    const image_src = ((_props_data1 = props.data) === null || _props_data1 === void 0 ? void 0 : _props_data1.photo) ? (_props_data2 = props.data) === null || _props_data2 === void 0 ? void 0 : _props_data2.photo : \"https://res.cloudinary.com/dsvjhuk25/image/upload/v1686493759/profileImage_dufqya.png\";\n    const shoot = async (e)=>{\n        if (fileInputRef.current) {\n            fileInputRef.current.click();\n        }\n    };\n    const handleFileChange = async (event)=>{\n        var _event_target_files;\n        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n        let photo = null;\n        if (file) {\n            const formData = new FormData();\n            formData.append(\"inputFile\", file);\n            try {\n                const responsePhoto = await fetch(\"/api/uploadPhoto\", {\n                    method: \"POST\",\n                    body: formData\n                });\n                const data = await responsePhoto.json();\n                photo = data;\n            } catch (error) {\n                console.error(error);\n            }\n            alert(\"the userId is \" + userId);\n            if (photo) {\n                try {\n                    console.log(\"going to upload photo to prisma db\");\n                    const body = {\n                        userId,\n                        photo\n                    };\n                    const responsePost = await fetch(\"/api/changeProfileP\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify(body)\n                    });\n                    const data = await responsePost.json();\n                    alert(data.message);\n                } catch (error) {\n                    console.error(error);\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jsx-55abb452bf441159\" + \" \" + \"profile\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    id: \"file\",\n                    onChange: handleFileChange,\n                    accept: \"image/*\",\n                    ref: fileInputRef,\n                    style: {\n                        display: \"none\"\n                    },\n                    className: \"jsx-55abb452bf441159\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: shoot,\n                    className: \"jsx-55abb452bf441159\" + \" \" + \"profile-button\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image_src,\n                        alt: \"Profile\",\n                        className: \"jsx-55abb452bf441159\" + \" \" + \"profile-picture\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"jsx-55abb452bf441159\" + \" \" + \"name\",\n                    children: (_props_data3 = props.data) === null || _props_data3 === void 0 ? void 0 : _props_data3.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"jsx-55abb452bf441159\" + \" \" + \"email\",\n                    children: (_props_data4 = props.data) === null || _props_data4 === void 0 ? void 0 : _props_data4.email\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"jsx-55abb452bf441159\" + \" \" + \"username\",\n                    children: (_props_data5 = props.data) === null || _props_data5 === void 0 ? void 0 : _props_data5.username\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 13\n                }, undefined),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"55abb452bf441159\",\n                    children: \".profile-button.jsx-55abb452bf441159{border:none;background-color:transparent}.profile.jsx-55abb452bf441159{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px}.profile-picture.jsx-55abb452bf441159{width:200px;height:200px;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.name.jsx-55abb452bf441159{font-size:24px;margin-top:20px}.email.jsx-55abb452bf441159,.username.jsx-55abb452bf441159{font-size:16px;margin-top:10px}\"\n                }, void 0, false, void 0, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n            lineNumber: 78,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n        lineNumber: 77,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Profile, \"YQqvMxdmg33cmOXmQcOjJm+FLVI=\");\n_c2 = Profile;\n_s1(Profile, \"YQqvMxdmg33cmOXmQcOjJm+FLVI=\");\n_c = Profile;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Profile));\nvar _c, _c1;\n$RefreshReg$(_c, \"Profile\");\n$RefreshReg$(_c1, \"%default%\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c2;\n$RefreshReg$(_c2, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dENmLDZEQUFBQSxDQUFDZ0IsS0FBQUE7OERBQVk7OEJBQVNqRCxDQUFBQSxlQUFBQSxNQUFNRyxJQUFJLGNBQVZILGlCQUFBQSxLQUFBQSxJQUFBQSxLQUFBQSxJQUFBQSxhQUFZa0QsS0FBSzs7Ozs7OzhCQUN2Q2pCLDZEQUFBQSxDQUFDZ0IsS0FBQUE7OERBQVk7OEJBQVlqRCxDQUFBQSxlQUFBQSxNQUFNRyxJQUFJLGNBQVZILGlCQUFBQSxLQUFBQSxJQUFBQSxLQUFBQSxJQUFBQSxhQUFZbUQsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NyRDtHQXhGRXBEO01BQUFBO0lBQUFBLFNBQUFBO0tBQUFBOztBQTBGTiwrREFBQXFELE1BQUFDLG9GQUFBQSxDQUFldEQsUUFBQUEsRUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLnRzeD9kY2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XHJcbiAgICBjb25zdCBteVRva2VuID0gcmVxLmNvb2tpZXMudG9rZW5Mb2dpbjtcclxuICAgIGNvbnN0IGRhdGEgPSBqd3QuZGVjb2RlKG15VG9rZW4pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IGRhdGEgfSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBEZWNvZGVUb2tlbiA9IHtcclxuICAgIGRhdGEgOntcclxuICAgICAgICBpZDogbnVtYmVyO1xyXG4gICAgICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcGhvdG86IHN0cmluZztcclxuICB9O1xyXG59XHJcbiAgICBcclxuXHJcbmNvbnN0IFByb2ZpbGU6IFJlYWN0LkZDIDxEZWNvZGVUb2tlbj4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHByb3BzLmRhdGE/LmlkO1xyXG4gICAgY29uc3QgaW1hZ2Vfc3JjID0gcHJvcHMuZGF0YT8ucGhvdG8gPyBwcm9wcy5kYXRhPy5waG90byA6IFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHN2amh1azI1L2ltYWdlL3VwbG9hZC92MTY4NjQ5Mzc1OS9wcm9maWxlSW1hZ2VfZHVmcXlhLnBuZ1wiXHJcbiAgICBjb25zdCBzaG9vdCA9IGFzeW5jIChlIDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZmlsZUlucHV0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgZmlsZUlucHV0UmVmLmN1cnJlbnQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gYXN5bmMgKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXM/LlswXTtcclxuICAgICAgICBsZXQgcGhvdG8gPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW5wdXRGaWxlJywgZmlsZSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZVBob3RvID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VwbG9hZFBob3RvXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2VQaG90by5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBwaG90byA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGVydChcInRoZSB1c2VySWQgaXMgXCIgKyB1c2VySWQgKVxyXG4gICAgICAgICAgICBpZihwaG90byl7XHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnb2luZyB0byB1cGxvYWQgcGhvdG8gdG8gcHJpc21hIGRiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IHt1c2VySWQsIHBob3RvfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZVBvc3QgPSBhd2FpdCBmZXRjaChgL2FwaS9jaGFuZ2VQcm9maWxlUGAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2VQb3N0Lmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyb3IpeyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGUtcGljdHVyZVwiIHNyYz17aW1hZ2Vfc3JjfSBhbHQ9XCJQcm9maWxlXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSBhY2NlcHQ9XCJpbWFnZS8qXCIgcmVmPXtmaWxlSW5wdXRSZWZ9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fS8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJvZmlsZS1idXR0b25cIiBvbkNsaWNrPXtzaG9vdH0gPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9maWxlLXBpY3R1cmVcIiBzcmM9e2ltYWdlX3NyY30gYWx0PVwiUHJvZmlsZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPntwcm9wcy5kYXRhPy5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+e3Byb3BzLmRhdGE/LmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57cHJvcHMuZGF0YT8udXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5lbWFpbCxcclxuICAgICAgICAgICAgICAgIC51c2VybmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICAgIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIkxheW91dCIsIlByb2ZpbGUiLCJwcm9wcyIsImZpbGVJbnB1dFJlZiIsInVzZXJJZCIsImRhdGEiLCJpZCIsImltYWdlX3NyYyIsInBob3RvIiwic2hvb3QiLCJlIiwiY3VycmVudCIsImNsaWNrIiwiaGFuZGxlRmlsZUNoYW5nZSIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlUGhvdG8iLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiYWxlcnQiLCJsb2ciLCJyZXNwb25zZVBvc3QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJfanN4REVWIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJhY2NlcHQiLCJyZWYiLCJzdHlsZSIsImRpc3BsYXkiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJuYW1lIiwicCIsImVtYWlsIiwidXNlcm5hbWUiLCJfYzEiLCJfd2l0aFN1cGVySlNPTlBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.tsx\n"));

/***/ })

});