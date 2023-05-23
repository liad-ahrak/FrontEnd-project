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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//Lihi\n// cloudinary.config({\n//     cloudName: \"dgkezthsz\",\n//     apiKey: \"143937565617482\",\n//     apiSecret: \"EITklreNB0GF_C3tFpS-4YsncBk\"\n// });\n//Liad\ncloudinary__WEBPACK_IMPORTED_MODULE_0___default().config({\n    cloud_name: \"dsvjhuk25\",\n    api_key: \"116438151837789\",\n    api_secret: \"zB8Ue28lLdZT7RUvVNqSdkD4af8\"\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const data = await new Promise((resolve, reject)=>{\n        const form = new formidable__WEBPACK_IMPORTED_MODULE_1__.IncomingForm();\n        form.parse(req, (err, fields, files)=>{\n            if (err) return reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    const file = data?.files?.inputFile.filepath;\n    const d = new Date();\n    let time = d.getTime();\n    const response = await cloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2.uploader.upload(file, {\n        resource_type: \"video\",\n        public_id: time\n    });\n    const url = cloudinary__WEBPACK_IMPORTED_MODULE_0___default().url(time);\n    const secURL = response.secure_url;\n    // console.log('secURL', secURl)\n    // console.log('retiurn id',time);\n    // ,{\n    //   width: 100,\n    //   height: 150,\n    //   Crop: 'fill'\n    // });\n    return res.json(secURL);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtQztBQUNNO0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FBLHdEQUFpQixDQUFDO0lBQ2hCRyxZQUFZO0lBQ1pDLFNBQVM7SUFDVEMsWUFBWTtBQUNkO0FBR08sTUFBTUgsU0FBUztJQUNwQkksS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFDO0FBRUQsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUNqQyxNQUFNQyxPQUFPLE1BQU0sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1FBQ2xELE1BQU1DLE9BQU8sSUFBSWIsb0RBQVlBO1FBRTdCYSxLQUFLQyxLQUFLLENBQUNQLEtBQUssQ0FBQ1EsS0FBS0MsUUFBUUMsUUFBVTtZQUN0QyxJQUFJRixLQUFLLE9BQU9ILE9BQU9HO1lBQ3ZCSixRQUFRO2dCQUFFSztnQkFBUUM7WUFBTTtRQUMxQjtJQUNGO0lBRUEsTUFBTUMsT0FBT1QsTUFBTVEsT0FBT0UsVUFBVUMsUUFBUTtJQUM1QyxNQUFNQyxJQUFJLElBQUlDO0lBQ2QsSUFBSUMsT0FBT0YsRUFBRUcsT0FBTztJQUNwQixNQUFNQyxXQUFXLE1BQU0xQixvRUFBNkIsQ0FBQ21CLE1BQU07UUFDekRXLGVBQWU7UUFDZkMsV0FBV1A7SUFDYjtJQUNBLE1BQU1RLE1BQU1oQyxxREFBYyxDQUFDd0I7SUFDM0IsTUFBTVMsU0FBU1AsU0FBU1EsVUFBVTtJQUNsQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLE9BQU96QixJQUFJMEIsSUFBSSxDQUFDRjtBQUNsQixHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2FwaS91cGxvYWQuanM/NTU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xvdWRpbmFyeSBmcm9tICdjbG91ZGluYXJ5JztcclxuaW1wb3J0IHsgSW5jb21pbmdGb3JtIH0gZnJvbSAnZm9ybWlkYWJsZSc7XHJcblxyXG4vL0xpaGlcclxuLy8gY2xvdWRpbmFyeS5jb25maWcoe1xyXG4vLyAgICAgY2xvdWROYW1lOiBcImRna2V6dGhzelwiLFxyXG4vLyAgICAgYXBpS2V5OiBcIjE0MzkzNzU2NTYxNzQ4MlwiLFxyXG4vLyAgICAgYXBpU2VjcmV0OiBcIkVJVGtscmVOQjBHRl9DM3RGcFMtNFlzbmNCa1wiXHJcbi8vIH0pO1xyXG5cclxuLy9MaWFkXHJcbmNsb3VkaW5hcnkuY29uZmlnKHtcclxuICBjbG91ZF9uYW1lOiBcImRzdmpodWsyNVwiLFxyXG4gIGFwaV9rZXk6IFwiMTE2NDM4MTUxODM3Nzg5XCIsXHJcbiAgYXBpX3NlY3JldDogXCJ6QjhVZTI4bExkWlQ3UlV2Vk5xU2RrRDRhZjhcIlxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaToge1xyXG4gICAgYm9keVBhcnNlcjogZmFsc2UsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEluY29taW5nRm9ybSgpO1xyXG5cclxuICAgIGZvcm0ucGFyc2UocmVxLCAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcclxuICAgICAgcmVzb2x2ZSh7IGZpZWxkcywgZmlsZXMgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZmlsZSA9IGRhdGE/LmZpbGVzPy5pbnB1dEZpbGUuZmlsZXBhdGg7XHJcbiAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IHRpbWUgPSBkLmdldFRpbWUoKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsb3VkaW5hcnkudjIudXBsb2FkZXIudXBsb2FkKGZpbGUsIHtcclxuICAgIHJlc291cmNlX3R5cGU6ICd2aWRlbycsXHJcbiAgICBwdWJsaWNfaWQ6IHRpbWUsXHJcbiAgfSk7XHJcbiAgY29uc3QgdXJsID0gY2xvdWRpbmFyeS51cmwodGltZSk7XHJcbiAgY29uc3Qgc2VjVVJMID0gcmVzcG9uc2Uuc2VjdXJlX3VybDtcclxuICAvLyBjb25zb2xlLmxvZygnc2VjVVJMJywgc2VjVVJsKVxyXG4gIC8vIGNvbnNvbGUubG9nKCdyZXRpdXJuIGlkJyx0aW1lKTtcclxuICAvLyAse1xyXG4gIC8vICAgd2lkdGg6IDEwMCxcclxuICAvLyAgIGhlaWdodDogMTUwLFxyXG4gIC8vICAgQ3JvcDogJ2ZpbGwnXHJcbiAgLy8gfSk7XHJcbiAgcmV0dXJuIHJlcy5qc29uKHNlY1VSTCk7XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOlsiY2xvdWRpbmFyeSIsIkluY29taW5nRm9ybSIsImNvbmZpZyIsImNsb3VkX25hbWUiLCJhcGlfa2V5IiwiYXBpX3NlY3JldCIsImFwaSIsImJvZHlQYXJzZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmb3JtIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImZpbGUiLCJpbnB1dEZpbGUiLCJmaWxlcGF0aCIsImQiLCJEYXRlIiwidGltZSIsImdldFRpbWUiLCJyZXNwb25zZSIsInYyIiwidXBsb2FkZXIiLCJ1cGxvYWQiLCJyZXNvdXJjZV90eXBlIiwicHVibGljX2lkIiwidXJsIiwic2VjVVJMIiwic2VjdXJlX3VybCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

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