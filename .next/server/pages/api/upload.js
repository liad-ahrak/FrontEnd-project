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
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "(api)/./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//Lihi\n// cloudinary.config({\n//     cloudName: \"dgkezthsz\",\n//     apiKey: \"143937565617482\",\n//     apiSecret: \"EITklreNB0GF_C3tFpS-4YsncBk\"\n// });\n//Liad\ncloudinary__WEBPACK_IMPORTED_MODULE_0___default().config({\n    cloud_name: \"dsvjhuk25\",\n    api_key: \"116438151837789\",\n    api_secret: \"zB8Ue28lLdZT7RUvVNqSdkD4af8\"\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const data = await new Promise((resolve, reject)=>{\n        const form = new formidable__WEBPACK_IMPORTED_MODULE_1__.IncomingForm();\n        form.parse(req, (err, fields, files)=>{\n            if (err) return reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    const file = data?.files?.inputFile.filepath;\n    const d = new Date();\n    let time = d.getTime();\n    const response = await cloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2.uploader.upload(file, {\n        resource_type: \"video\",\n        public_id: time\n    });\n    const url = cloudinary__WEBPACK_IMPORTED_MODULE_0___default().url(time);\n    const secURL = response.secure_url;\n    return res.json(secURL);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtQztBQUNNO0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FBLHdEQUFpQixDQUFDO0lBQ2hCRyxZQUFZO0lBQ1pDLFNBQVM7SUFDVEMsWUFBWTtBQUNkO0FBR08sTUFBTUgsU0FBUztJQUNwQkksS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFDO0FBRUQsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUNqQyxNQUFNQyxPQUFPLE1BQU0sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1FBQ2xELE1BQU1DLE9BQU8sSUFBSWIsb0RBQVlBO1FBRTdCYSxLQUFLQyxLQUFLLENBQUNQLEtBQUssQ0FBQ1EsS0FBS0MsUUFBUUMsUUFBVTtZQUN0QyxJQUFJRixLQUFLLE9BQU9ILE9BQU9HO1lBQ3ZCSixRQUFRO2dCQUFFSztnQkFBUUM7WUFBTTtRQUMxQjtJQUNGO0lBRUEsTUFBTUMsT0FBT1QsTUFBTVEsT0FBT0UsVUFBVUMsUUFBUTtJQUM1QyxNQUFNQyxJQUFJLElBQUlDO0lBQ2QsSUFBSUMsT0FBT0YsRUFBRUcsT0FBTztJQUNwQixNQUFNQyxXQUFXLE1BQU0xQixvRUFBNkIsQ0FBQ21CLE1BQU07UUFDekRXLGVBQWU7UUFDZkMsV0FBV1A7SUFDYjtJQUNBLE1BQU1RLE1BQU1oQyxxREFBYyxDQUFDd0I7SUFDM0IsTUFBTVMsU0FBU1AsU0FBU1EsVUFBVTtJQUNsQyxPQUFPekIsSUFBSTBCLElBQUksQ0FBQ0Y7QUFDbEIsR0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvdXBsb2FkLmpzPzU1NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsb3VkaW5hcnkgZnJvbSAnY2xvdWRpbmFyeSc7XHJcbmltcG9ydCB7IEluY29taW5nRm9ybSB9IGZyb20gJ2Zvcm1pZGFibGUnO1xyXG5cclxuLy9MaWhpXHJcbi8vIGNsb3VkaW5hcnkuY29uZmlnKHtcclxuLy8gICAgIGNsb3VkTmFtZTogXCJkZ2tlenRoc3pcIixcclxuLy8gICAgIGFwaUtleTogXCIxNDM5Mzc1NjU2MTc0ODJcIixcclxuLy8gICAgIGFwaVNlY3JldDogXCJFSVRrbHJlTkIwR0ZfQzN0RnBTLTRZc25jQmtcIlxyXG4vLyB9KTtcclxuXHJcbi8vTGlhZFxyXG5jbG91ZGluYXJ5LmNvbmZpZyh7XHJcbiAgY2xvdWRfbmFtZTogXCJkc3ZqaHVrMjVcIixcclxuICBhcGlfa2V5OiBcIjExNjQzODE1MTgzNzc4OVwiLFxyXG4gIGFwaV9zZWNyZXQ6IFwiekI4VWUyOGxMZFpUN1JVdlZOcVNka0Q0YWY4XCJcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGk6IHtcclxuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBJbmNvbWluZ0Zvcm0oKTtcclxuXHJcbiAgICBmb3JtLnBhcnNlKHJlcSwgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xyXG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XHJcbiAgICAgIHJlc29sdmUoeyBmaWVsZHMsIGZpbGVzIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZpbGUgPSBkYXRhPy5maWxlcz8uaW5wdXRGaWxlLmZpbGVwYXRoO1xyXG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gIGxldCB0aW1lID0gZC5nZXRUaW1lKCk7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyLnVwbG9hZChmaWxlLCB7XHJcbiAgICByZXNvdXJjZV90eXBlOiAndmlkZW8nLFxyXG4gICAgcHVibGljX2lkOiB0aW1lLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHVybCA9IGNsb3VkaW5hcnkudXJsKHRpbWUpO1xyXG4gIGNvbnN0IHNlY1VSTCA9IHJlc3BvbnNlLnNlY3VyZV91cmw7XHJcbiAgcmV0dXJuIHJlcy5qc29uKHNlY1VSTCk7XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOlsiY2xvdWRpbmFyeSIsIkluY29taW5nRm9ybSIsImNvbmZpZyIsImNsb3VkX25hbWUiLCJhcGlfa2V5IiwiYXBpX3NlY3JldCIsImFwaSIsImJvZHlQYXJzZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmb3JtIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImZpbGUiLCJpbnB1dEZpbGUiLCJmaWxlcGF0aCIsImQiLCJEYXRlIiwidGltZSIsImdldFRpbWUiLCJyZXNwb25zZSIsInYyIiwidXBsb2FkZXIiLCJ1cGxvYWQiLCJyZXNvdXJjZV90eXBlIiwicHVibGljX2lkIiwidXJsIiwic2VjVVJMIiwic2VjdXJlX3VybCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload.js"));
module.exports = __webpack_exports__;

})();