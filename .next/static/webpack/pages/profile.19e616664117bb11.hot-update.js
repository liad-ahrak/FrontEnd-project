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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal-cookie */ \"./node_modules/universal-cookie/es6/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"./node_modules/jsonwebtoken/index.js\");\n\nconst MakeNewToken = (oldT, newP)=>{\n    console.log(\"old token \");\n    const decoded = jwt.decode(oldT);\n    console.log(\"do decode\");\n    const newData = {\n        id: decoded.id,\n        email: decoded.email,\n        name: decoded.name,\n        username: decoded.username,\n        photo: newP\n    };\n    console.log(\"new data is \");\n    const newToken = jwt.sign(newData, process.env.SECRET, {\n        expiresIn: 60\n    }); //1 minute\n    console.log(\"new token is \" + newToken);\n    return newToken;\n};\n_c3 = MakeNewToken;\n_c = MakeNewToken;\nconst Profile = (props)=>{\n    _s();\n    var _props_data, _props_data1, _props_data2, _props_data3, _props_data4;\n    _s1();\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((_props_data = props.data) === null || _props_data === void 0 ? void 0 : _props_data.photo);\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n    const userId = (_props_data1 = props.data) === null || _props_data1 === void 0 ? void 0 : _props_data1.id;\n    const image_src = imageUrl ? imageUrl : \"https://res.cloudinary.com/dsvjhuk25/image/upload/v1686493759/profileImage_dufqya.png\";\n    const shoot = async (e)=>{\n        if (fileInputRef.current) {\n            fileInputRef.current.click();\n        }\n    };\n    const handleFileChange = async (event)=>{\n        var _event_target_files;\n        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n        let photo = null;\n        if (file) {\n            const formData = new FormData();\n            formData.append(\"inputFile\", file);\n            try {\n                const responsePhoto = await fetch(\"/api/uploadPhoto\", {\n                    method: \"POST\",\n                    body: formData\n                });\n                const data = await responsePhoto.json();\n                photo = data;\n            } catch (error) {\n                console.error(error);\n            }\n            // alert(\"userId is \" + userId + \" andit undefined? \" + (userId === undefined))\n            if (photo) {\n                try {\n                    console.log(\"going to upload photo to prisma db\");\n                    const body = {\n                        userId,\n                        photo\n                    };\n                    const responsePost = await fetch(\"/api/changeProfileP\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify(body)\n                    });\n                    setImageUrl(photo);\n                    const newToken = MakeNewToken(cookies.get(\"tokenLogin\"), photo);\n                    alert(\"Old Token is \" + cookies.get(\"tokenLogin\"));\n                    cookies.set(\"tokenLogin\", newToken);\n                    alert(\"New Token is \" + cookies.get(\"tokenLogin\"));\n                } catch (error) {\n                    console.log(\"the userId is \" + userId);\n                    console.error(error);\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jsx-55abb452bf441159\" + \" \" + \"profile\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    id: \"file\",\n                    onChange: handleFileChange,\n                    accept: \"image/*\",\n                    ref: fileInputRef,\n                    style: {\n                        display: \"none\"\n                    },\n                    className: \"jsx-55abb452bf441159\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: shoot,\n                    className: \"jsx-55abb452bf441159\" + \" \" + \"profile-button\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image_src,\n                        alt: \"Profile\",\n                        className: \"jsx-55abb452bf441159\" + \" \" + \"profile-picture\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"jsx-55abb452bf441159\" + \" \" + \"name\",\n                    children: (_props_data2 = props.data) === null || _props_data2 === void 0 ? void 0 : _props_data2.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"jsx-55abb452bf441159\" + \" \" + \"email\",\n                    children: (_props_data3 = props.data) === null || _props_data3 === void 0 ? void 0 : _props_data3.email\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"jsx-55abb452bf441159\" + \" \" + \"username\",\n                    children: (_props_data4 = props.data) === null || _props_data4 === void 0 ? void 0 : _props_data4.username\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 13\n                }, undefined),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"55abb452bf441159\",\n                    children: \".profile-button.jsx-55abb452bf441159{border:none;background-color:transparent}.profile.jsx-55abb452bf441159{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px}.profile-picture.jsx-55abb452bf441159{width:200px;height:200px;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.name.jsx-55abb452bf441159{font-size:24px;margin-top:20px}.email.jsx-55abb452bf441159,.username.jsx-55abb452bf441159{font-size:16px;margin-top:10px}\"\n                }, void 0, false, void 0, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n            lineNumber: 103,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\liad\\\\Desktop\\\\HW-frontend\\\\FrontEnd-HW2\\\\pages\\\\profile.tsx\",\n        lineNumber: 102,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Profile, \"FgUakocR3dguR/g9PsDsj0auT4c=\");\n_c4 = Profile;\n_s1(Profile, \"wQojCdMORdNVdLdvIj1b8NMNh2I=\");\n_c1 = Profile;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Profile));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MakeNewToken\");\n$RefreshReg$(_c1, \"Profile\");\n$RefreshReg$(_c2, \"%default%\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c3, _c4;\n$RefreshReg$(_c3, \"MakeNewToken\");\n$RefreshReg$(_c4, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxNQUFBQyxvRkFBQUEsQ0FBZW5ELFFBQUFBLEVBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3g/ZGNlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcmVzIH0pID0+IHtcclxuICAgIGNvbnN0IG15VG9rZW4gPSByZXEuY29va2llcy50b2tlbkxvZ2luO1xyXG4gICAgY29uc3QgZGF0YSA9IGp3dC5kZWNvZGUobXlUb2tlbilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgZGF0YSB9LFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIERlY29kZVRva2VuID0ge1xyXG4gICAgZGF0YSA6e1xyXG4gICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgZW1haWw6IHN0cmluZztcclxuICAgICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBwaG90bzogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IE1ha2VOZXdUb2tlbiA9IChvbGRUOnN0cmluZywgbmV3UDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9sZCB0b2tlbiBcIilcclxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QuZGVjb2RlKG9sZFQpO1xyXG4gICAgY29uc29sZS5sb2coXCJkbyBkZWNvZGVcIilcclxuICAgIGNvbnN0IG5ld0RhdGEgPSB7XHJcbiAgICAgICAgaWQ6IGRlY29kZWQuaWQsXHJcbiAgICAgICAgZW1haWw6IGRlY29kZWQuZW1haWwsXHJcbiAgICAgICAgbmFtZTogZGVjb2RlZC5uYW1lLFxyXG4gICAgICAgIHVzZXJuYW1lOiBkZWNvZGVkLnVzZXJuYW1lLFxyXG4gICAgICAgIHBob3RvOiBuZXdQXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcIm5ldyBkYXRhIGlzIFwiKVxyXG4gICAgY29uc3QgbmV3VG9rZW4gPSBqd3Quc2lnbihcclxuICAgICAgICBuZXdEYXRhLCBcclxuICAgICAgICBwcm9jZXNzLmVudi5TRUNSRVQsXHJcbiAgICAgICAgeyBleHBpcmVzSW46IDYwICB9KS8vMSBtaW51dGVcclxuICAgIGNvbnNvbGUubG9nKFwibmV3IHRva2VuIGlzIFwiICsgbmV3VG9rZW4pXHJcbiAgICByZXR1cm4gbmV3VG9rZW47XHJcbn1cclxuXHJcbmNvbnN0IFByb2ZpbGU6IFJlYWN0LkZDIDxEZWNvZGVUb2tlbj4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUocHJvcHMuZGF0YT8ucGhvdG8pO1xyXG4gICAgY29uc3QgZmlsZUlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbiAgICBjb25zdCB1c2VySWQgPSBwcm9wcy5kYXRhPy5pZDtcclxuICAgIGNvbnN0IGltYWdlX3NyYyA9IGltYWdlVXJsID8gaW1hZ2VVcmwgOiBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RzdmpodWsyNS9pbWFnZS91cGxvYWQvdjE2ODY0OTM3NTkvcHJvZmlsZUltYWdlX2R1ZnF5YS5wbmdcIlxyXG4gICAgY29uc3Qgc2hvb3QgPSBhc3luYyAoZSA6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGZpbGVJbnB1dFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IGFzeW5jIChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzPy5bMF07XHJcbiAgICAgICAgbGV0IHBob3RvID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lucHV0RmlsZScsIGZpbGUpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VQaG90byA9IGF3YWl0IGZldGNoKFwiL2FwaS91cGxvYWRQaG90b1wiLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlUGhvdG8uanNvbigpO1xyXG4gICAgICAgICAgICAgICAgcGhvdG8gPSBkYXRhO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYWxlcnQoXCJ1c2VySWQgaXMgXCIgKyB1c2VySWQgKyBcIiBhbmRpdCB1bmRlZmluZWQ/IFwiICsgKHVzZXJJZCA9PT0gdW5kZWZpbmVkKSlcclxuICAgICAgICAgICAgaWYocGhvdG8pe1xyXG4gICAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ29pbmcgdG8gdXBsb2FkIHBob3RvIHRvIHByaXNtYSBkYlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7dXNlcklkLCBwaG90b307XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VQb3N0ID0gYXdhaXQgZmV0Y2goYC9hcGkvY2hhbmdlUHJvZmlsZVBgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VVcmwocGhvdG8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rva2VuID0gTWFrZU5ld1Rva2VuKGNvb2tpZXMuZ2V0KCd0b2tlbkxvZ2luJyksIHBob3RvKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIk9sZCBUb2tlbiBpcyBcIiArIGNvb2tpZXMuZ2V0KCd0b2tlbkxvZ2luJykpXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llcy5zZXQoJ3Rva2VuTG9naW4nLCBuZXdUb2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJOZXcgVG9rZW4gaXMgXCIgKyBjb29raWVzLmdldCgndG9rZW5Mb2dpbicpKVxyXG4gICAgICAgICAgICAgICAgfWNhdGNoKGVycm9yKXsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgdXNlcklkIGlzIFwiICsgdXNlcklkICkgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGUtcGljdHVyZVwiIHNyYz17aW1hZ2Vfc3JjfSBhbHQ9XCJQcm9maWxlXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSBhY2NlcHQ9XCJpbWFnZS8qXCIgcmVmPXtmaWxlSW5wdXRSZWZ9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fS8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJvZmlsZS1idXR0b25cIiBvbkNsaWNrPXtzaG9vdH0gPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9maWxlLXBpY3R1cmVcIiBzcmM9e2ltYWdlX3NyY30gYWx0PVwiUHJvZmlsZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPntwcm9wcy5kYXRhPy5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+e3Byb3BzLmRhdGE/LmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57cHJvcHMuZGF0YT8udXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5lbWFpbCxcclxuICAgICAgICAgICAgICAgIC51c2VybmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICAgIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGF5b3V0Iiwiand0IiwicmVxdWlyZSIsIkNvb2tpZXMiLCJNYWtlTmV3VG9rZW4iLCJvbGRUIiwibmV3UCIsImNvbnNvbGUiLCJsb2ciLCJkZWNvZGVkIiwiZGVjb2RlIiwibmV3RGF0YSIsImlkIiwiZW1haWwiLCJuYW1lIiwidXNlcm5hbWUiLCJwaG90byIsIm5ld1Rva2VuIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJleHBpcmVzSW4iLCJQcm9maWxlIiwicHJvcHMiLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwiZGF0YSIsImZpbGVJbnB1dFJlZiIsImNvb2tpZXMiLCJ1c2VySWQiLCJpbWFnZV9zcmMiLCJzaG9vdCIsImUiLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2VQaG90byIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImpzb24iLCJlcnJvciIsInJlc3BvbnNlUG9zdCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0IiwiYWxlcnQiLCJzZXQiLCJfanN4REVWIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJhY2NlcHQiLCJyZWYiLCJzdHlsZSIsImRpc3BsYXkiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJwIiwiX2MyIiwiX3dpdGhTdXBlckpTT05QYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile.tsx\n"));

/***/ })

});