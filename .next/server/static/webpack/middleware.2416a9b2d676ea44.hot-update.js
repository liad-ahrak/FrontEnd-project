"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction middleware(req) {\n    let cookie = req.cookies.get(\"tokenLogin\");\n    if (cookie == null) {\n        console.log(\"you are in draft\");\n    // return NextResponse.redirect(new URL('/wrongPlace', req.url));\n    }\n    // console.log(\"middleware\");\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//the url path that I need to check for valid token\nconst config = {\n    matcher: [\n        \"/drafts\"\n    ]\n} // \"/profile\", \"/create\", \"/TokenAuth/login\", \"/api/post/index\", \"/api/publish/[id]\"\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdEO0FBRWpELFNBQVNDLFdBQVdDLEdBQWdCLEVBQUM7SUFDeEMsSUFBSUMsU0FBU0QsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFDN0IsSUFBR0YsVUFBVSxJQUFJLEVBQUM7UUFDZEcsUUFBUUMsR0FBRyxDQUFDO0lBQ1osaUVBQWlFO0lBQ3JFLENBQUM7SUFDRCw2QkFBNkI7SUFFN0IsT0FBT1AsMERBQWlCO0FBQzVCLENBQUM7QUFFRCxtREFBbUQ7QUFDNUMsTUFBTVMsU0FBUztJQUNsQkMsU0FBUztRQUFDO0tBQVc7QUFDekIsRUFDQSxvRkFBb0Y7Q0FEbkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3Qpe1xyXG4gICAgbGV0IGNvb2tpZSA9IHJlcS5jb29raWVzLmdldChcInRva2VuTG9naW5cIik7XHJcbiAgICBpZihjb29raWUgPT0gbnVsbCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b3UgYXJlIGluIGRyYWZ0XCIpO1xyXG4gICAgICAgIC8vIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3dyb25nUGxhY2UnLCByZXEudXJsKSk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIm1pZGRsZXdhcmVcIik7XHJcbiAgICBcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG59IFxyXG5cclxuLy90aGUgdXJsIHBhdGggdGhhdCBJIG5lZWQgdG8gY2hlY2sgZm9yIHZhbGlkIHRva2VuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtYXRjaGVyOiBbXCIvZHJhZnRzXCIsXSxcclxufVxyXG4vLyBcIi9wcm9maWxlXCIsIFwiL2NyZWF0ZVwiLCBcIi9Ub2tlbkF1dGgvbG9naW5cIiwgXCIvYXBpL3Bvc3QvaW5kZXhcIiwgXCIvYXBpL3B1Ymxpc2gvW2lkXVwiIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJjb29raWUiLCJjb29raWVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});