"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/uploadDB";
exports.ids = ["pages/api/uploadDB"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/uploadDB.js":
/*!*******************************!*\
  !*** ./pages/api/uploadDB.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst url = \"mongodb+srv://Lihiad:Lihiad@lihiad.vkfaddd.mongodb.net/?retryWrites=true&w=majority\";\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", false);\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(url);\nconst noteSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    content: String,\n    important: Boolean\n});\nlet Note;\ntry {\n    Note = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Note\");\n} catch (error) {\n    Note = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Note\", noteSchema);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { content , important  } = req.body;\n        const note = new Note({\n            content,\n            important\n        });\n        try {\n            await note.save();\n        } catch (error) {\n            console.error(\"Error creating note: \", error);\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkREIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRy9CLE1BQU1DLE1BQ047QUFFQUQsbURBQVksQ0FBQyxlQUFlLEtBQUs7QUFDakNBLHVEQUFnQixDQUFDQztBQUVqQixNQUFNRyxhQUFhLElBQUlKLHdEQUFlLENBQUM7SUFDckNNLFNBQVNDO0lBQ1RDLFdBQVdDO0FBQ2I7QUFFQSxJQUFJQztBQUVKLElBQUk7SUFDRkEsT0FBT1YscURBQWMsQ0FBQztBQUN4QixFQUFFLE9BQU9ZLE9BQU87SUFDZEYsT0FBT1YscURBQWMsQ0FBQyxRQUFRSTtBQUNoQztBQUVBLGlFQUFlLE9BQU9TLEtBQUtDLE1BQVE7SUFDakMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFVCxRQUFBQSxFQUFTRSxVQUFBQSxFQUFXLEdBQUdLLElBQUlHLElBQUk7UUFFdkMsTUFBTUMsT0FBTyxJQUFJUCxLQUFLO1lBQ3BCSjtZQUNBRTtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1TLEtBQUtDLElBQUk7UUFDakIsRUFBRSxPQUFPTixPQUFPO1lBQ1pPLFFBQVFQLEtBQUssQ0FBQyx5QkFBeUJBO1FBQzNDO0lBQ0Y7QUFDRixHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2FwaS91cGxvYWREQi5qcz8xNjVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5cclxuY29uc3QgdXJsID1cclxuJ21vbmdvZGIrc3J2Oi8vTGloaWFkOkxpaGlhZEBsaWhpYWQudmtmYWRkZC5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JztcclxuXHJcbm1vbmdvb3NlLnNldCgnc3RyaWN0UXVlcnknLCBmYWxzZSk7XHJcbm1vbmdvb3NlLmNvbm5lY3QodXJsKTtcclxuXHJcbmNvbnN0IG5vdGVTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBjb250ZW50OiBTdHJpbmcsXHJcbiAgaW1wb3J0YW50OiBCb29sZWFuLFxyXG59KTtcclxuXHJcbmxldCBOb3RlO1xyXG5cclxudHJ5IHtcclxuICBOb3RlID0gbW9uZ29vc2UubW9kZWwoJ05vdGUnKTtcclxufSBjYXRjaCAoZXJyb3IpIHtcclxuICBOb3RlID0gbW9uZ29vc2UubW9kZWwoJ05vdGUnLCBub3RlU2NoZW1hKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgeyBjb250ZW50LCBpbXBvcnRhbnQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGNvbnN0IG5vdGUgPSBuZXcgTm90ZSh7XHJcbiAgICAgIGNvbnRlbnQsXHJcbiAgICAgIGltcG9ydGFudCxcclxuICAgIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IG5vdGUuc2F2ZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgbm90ZTogXCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbn07Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXJsIiwic2V0IiwiY29ubmVjdCIsIm5vdGVTY2hlbWEiLCJTY2hlbWEiLCJjb250ZW50IiwiU3RyaW5nIiwiaW1wb3J0YW50IiwiQm9vbGVhbiIsIk5vdGUiLCJtb2RlbCIsImVycm9yIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9keSIsIm5vdGUiLCJzYXZlIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/uploadDB.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/uploadDB.js"));
module.exports = __webpack_exports__;

})();