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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction middleware(req) {\n    let cookie = req.cookies.get(\"tokenLogin\");\n    if (cookie == null) {\n        console.log(\"you are in draft\");\n    // return NextResponse.redirect(new URL('/wrongPlace', req.url));\n    }\n    // console.log(\"middleware\");\n    console.log(\"you are in draft\");\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//the url path that I need to check for valid token\nconst config = {\n    matcher: [\n        \"/drafts\"\n    ]\n} // \"/profile\", \"/create\", \"/TokenAuth/login\", \"/api/post/index\", \"/api/publish/[id]\"\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdEO0FBRWpELFNBQVNDLFdBQVdDLEdBQWdCLEVBQUM7SUFDeEMsSUFBSUMsU0FBU0QsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFDN0IsSUFBR0YsVUFBVSxJQUFJLEVBQUM7UUFDZEcsUUFBUUMsR0FBRyxDQUFDO0lBQ1osaUVBQWlFO0lBQ3JFLENBQUM7SUFDRCw2QkFBNkI7SUFDN0JELFFBQVFDLEdBQUcsQ0FBQztJQUNaLE9BQU9QLDBEQUFpQjtBQUM1QixDQUFDO0FBRUQsbURBQW1EO0FBQzVDLE1BQU1TLFNBQVM7SUFDbEJDLFNBQVM7UUFBQztLQUFXO0FBQ3pCLEVBQ0Esb0ZBQW9GO0NBRG5GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXE6IE5leHRSZXF1ZXN0KXtcclxuICAgIGxldCBjb29raWUgPSByZXEuY29va2llcy5nZXQoXCJ0b2tlbkxvZ2luXCIpO1xyXG4gICAgaWYoY29va2llID09IG51bGwpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwieW91IGFyZSBpbiBkcmFmdFwiKTtcclxuICAgICAgICAvLyByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy93cm9uZ1BsYWNlJywgcmVxLnVybCkpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJtaWRkbGV3YXJlXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJ5b3UgYXJlIGluIGRyYWZ0XCIpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbn0gXHJcblxyXG4vL3RoZSB1cmwgcGF0aCB0aGF0IEkgbmVlZCB0byBjaGVjayBmb3IgdmFsaWQgdG9rZW5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIG1hdGNoZXI6IFtcIi9kcmFmdHNcIixdLFxyXG59XHJcbi8vIFwiL3Byb2ZpbGVcIiwgXCIvY3JlYXRlXCIsIFwiL1Rva2VuQXV0aC9sb2dpblwiLCBcIi9hcGkvcG9zdC9pbmRleFwiLCBcIi9hcGkvcHVibGlzaC9baWRdXCIiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcSIsImNvb2tpZSIsImNvb2tpZXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});