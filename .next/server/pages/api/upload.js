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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//Lihi\n// cloudinary.config({\n//     cloudName: \"dgkezthsz\",\n//     apiKey: \"143937565617482\",\n//     apiSecret: \"EITklreNB0GF_C3tFpS-4YsncBk\"\n// });\n//Liad\ncloudinary__WEBPACK_IMPORTED_MODULE_0___default().config({\n    cloud_name: \"dsvjhuk25\",\n    api_key: \"116438151837789\",\n    api_secret: \"zB8Ue28lLdZT7RUvVNqSdkD4af8\"\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const data = await new Promise((resolve, reject)=>{\n        const form = new formidable__WEBPACK_IMPORTED_MODULE_1__.IncomingForm();\n        form.parse(req, (err, fields, files)=>{\n            if (err) return reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    const file = data?.files?.inputFile.filepath;\n    const d = new Date();\n    let time = d.getTime();\n    const response = await cloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2.uploader.upload(file, {\n        resource_type: \"video\",\n        public_id: time\n    });\n    return res.json(response);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtQztBQUNNO0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FBLHdEQUFpQixDQUFDO0lBQ2hCRyxZQUFZO0lBQ1pDLFNBQVM7SUFDVEMsWUFBWTtBQUNkO0FBR08sTUFBTUgsU0FBUztJQUNwQkksS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFDO0FBRUQsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUNqQyxNQUFNQyxPQUFPLE1BQU0sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1FBQ2xELE1BQU1DLE9BQU8sSUFBSWIsb0RBQVlBO1FBRTdCYSxLQUFLQyxLQUFLLENBQUNQLEtBQUssQ0FBQ1EsS0FBS0MsUUFBUUMsUUFBVTtZQUN0QyxJQUFJRixLQUFLLE9BQU9ILE9BQU9HO1lBQ3ZCSixRQUFRO2dCQUFFSztnQkFBUUM7WUFBTTtRQUMxQjtJQUNGO0lBRUEsTUFBTUMsT0FBT1QsTUFBTVEsT0FBT0UsVUFBVUMsUUFBUTtJQUM1QyxNQUFNQyxJQUFJLElBQUlDO0lBQ2QsSUFBSUMsT0FBT0YsRUFBRUcsT0FBTztJQUNwQixNQUFNQyxXQUFXLE1BQU0xQixvRUFBNkIsQ0FBQ21CLE1BQU07UUFDekRXLGVBQWU7UUFDZkMsV0FBV1A7SUFDYjtJQUNBLE9BQU9mLElBQUl1QixJQUFJLENBQUNOO0FBQ2xCLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL3VwbG9hZC5qcz81NTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbG91ZGluYXJ5IGZyb20gJ2Nsb3VkaW5hcnknO1xyXG5pbXBvcnQgeyBJbmNvbWluZ0Zvcm0gfSBmcm9tICdmb3JtaWRhYmxlJztcclxuXHJcbi8vTGloaVxyXG4vLyBjbG91ZGluYXJ5LmNvbmZpZyh7XHJcbi8vICAgICBjbG91ZE5hbWU6IFwiZGdrZXp0aHN6XCIsXHJcbi8vICAgICBhcGlLZXk6IFwiMTQzOTM3NTY1NjE3NDgyXCIsXHJcbi8vICAgICBhcGlTZWNyZXQ6IFwiRUlUa2xyZU5CMEdGX0MzdEZwUy00WXNuY0JrXCJcclxuLy8gfSk7XHJcblxyXG4vL0xpYWRcclxuY2xvdWRpbmFyeS5jb25maWcoe1xyXG4gIGNsb3VkX25hbWU6IFwiZHN2amh1azI1XCIsXHJcbiAgYXBpX2tleTogXCIxMTY0MzgxNTE4Mzc3ODlcIixcclxuICBhcGlfc2VjcmV0OiBcInpCOFVlMjhsTGRaVDdSVXZWTnFTZGtENGFmOFwiXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBuZXcgSW5jb21pbmdGb3JtKCk7XHJcblxyXG4gICAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcclxuICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpO1xyXG4gICAgICByZXNvbHZlKHsgZmllbGRzLCBmaWxlcyB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmaWxlID0gZGF0YT8uZmlsZXM/LmlucHV0RmlsZS5maWxlcGF0aDtcclxuICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICBsZXQgdGltZSA9IGQuZ2V0VGltZSgpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xvdWRpbmFyeS52Mi51cGxvYWRlci51cGxvYWQoZmlsZSwge1xyXG4gICAgcmVzb3VyY2VfdHlwZTogJ3ZpZGVvJyxcclxuICAgIHB1YmxpY19pZDogdGltZSxcclxuICB9KTtcclxuICByZXR1cm4gcmVzLmpzb24ocmVzcG9uc2UpO1xyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbImNsb3VkaW5hcnkiLCJJbmNvbWluZ0Zvcm0iLCJjb25maWciLCJjbG91ZF9uYW1lIiwiYXBpX2tleSIsImFwaV9zZWNyZXQiLCJhcGkiLCJib2R5UGFyc2VyIiwicmVxIiwicmVzIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZm9ybSIsInBhcnNlIiwiZXJyIiwiZmllbGRzIiwiZmlsZXMiLCJmaWxlIiwiaW5wdXRGaWxlIiwiZmlsZXBhdGgiLCJkIiwiRGF0ZSIsInRpbWUiLCJnZXRUaW1lIiwicmVzcG9uc2UiLCJ2MiIsInVwbG9hZGVyIiwidXBsb2FkIiwicmVzb3VyY2VfdHlwZSIsInB1YmxpY19pZCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

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