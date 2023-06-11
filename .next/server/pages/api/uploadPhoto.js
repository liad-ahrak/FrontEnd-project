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
exports.id = "pages/api/uploadPhoto";
exports.ids = ["pages/api/uploadPhoto"];
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

/***/ "(api)/./pages/api/uploadPhoto.js":
/*!**********************************!*\
  !*** ./pages/api/uploadPhoto.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//Lihi\n// cloudinary.config({\n//     cloudName: \"dgkezthsz\",\n//     apiKey: \"143937565617482\",\n//     apiSecret: \"EITklreNB0GF_C3tFpS-4YsncBk\"\n// });\n//Liad\ncloudinary__WEBPACK_IMPORTED_MODULE_0___default().config({\n    cloud_name: \"dsvjhuk25\",\n    api_key: \"116438151837789\",\n    api_secret: \"zB8Ue28lLdZT7RUvVNqSdkD4af8\"\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const data = await new Promise((resolve, reject)=>{\n        const form = new formidable__WEBPACK_IMPORTED_MODULE_1__.IncomingForm();\n        form.parse(req, (err, fields, files)=>{\n            if (err) return reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    const file = data?.files?.inputFile.filepath;\n    const d = new Date();\n    let time = d.getTime();\n    const response = await cloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2.uploader.upload(file, {\n        resource_type: \"image\",\n        public_id: time\n    });\n    const url = cloudinary__WEBPACK_IMPORTED_MODULE_0___default().url(time);\n    const secURL = response.secure_url;\n    return res.json(secURL);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkUGhvdG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1DO0FBQ007QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQUEsd0RBQWlCLENBQUM7SUFDaEJHLFlBQVk7SUFDWkMsU0FBUztJQUNUQyxZQUFZO0FBQ2Q7QUFHTyxNQUFNSCxTQUFTO0lBQ3BCSSxLQUFLO1FBQ0hDLFlBQVk7SUFDZDtBQUNGLEVBQUM7QUFFRCxpRUFBZSxPQUFPQyxLQUFLQyxNQUFRO0lBQ2pDLE1BQU1DLE9BQU8sTUFBTSxJQUFJQyxRQUFRLENBQUNDLFNBQVNDLFNBQVc7UUFDbEQsTUFBTUMsT0FBTyxJQUFJYixvREFBWUE7UUFFN0JhLEtBQUtDLEtBQUssQ0FBQ1AsS0FBSyxDQUFDUSxLQUFLQyxRQUFRQyxRQUFVO1lBQ3RDLElBQUlGLEtBQUssT0FBT0gsT0FBT0c7WUFDdkJKLFFBQVE7Z0JBQUVLO2dCQUFRQztZQUFNO1FBQzFCO0lBQ0Y7SUFFQSxNQUFNQyxPQUFPVCxNQUFNUSxPQUFPRSxVQUFVQyxRQUFRO0lBQzVDLE1BQU1DLElBQUksSUFBSUM7SUFDZCxJQUFJQyxPQUFPRixFQUFFRyxPQUFPO0lBQ3BCLE1BQU1DLFdBQVcsTUFBTTFCLG9FQUE2QixDQUFDbUIsTUFBTTtRQUN6RFcsZUFBZTtRQUNmQyxXQUFXUDtJQUNiO0lBQ0EsTUFBTVEsTUFBTWhDLHFEQUFjLENBQUN3QjtJQUMzQixNQUFNUyxTQUFTUCxTQUFTUSxVQUFVO0lBQ2xDLE9BQU96QixJQUFJMEIsSUFBSSxDQUFDRjtBQUNsQixHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2FwaS91cGxvYWRQaG90by5qcz8xNGI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbG91ZGluYXJ5IGZyb20gJ2Nsb3VkaW5hcnknO1xyXG5pbXBvcnQgeyBJbmNvbWluZ0Zvcm0gfSBmcm9tICdmb3JtaWRhYmxlJztcclxuXHJcbi8vTGloaVxyXG4vLyBjbG91ZGluYXJ5LmNvbmZpZyh7XHJcbi8vICAgICBjbG91ZE5hbWU6IFwiZGdrZXp0aHN6XCIsXHJcbi8vICAgICBhcGlLZXk6IFwiMTQzOTM3NTY1NjE3NDgyXCIsXHJcbi8vICAgICBhcGlTZWNyZXQ6IFwiRUlUa2xyZU5CMEdGX0MzdEZwUy00WXNuY0JrXCJcclxuLy8gfSk7XHJcblxyXG4vL0xpYWRcclxuY2xvdWRpbmFyeS5jb25maWcoe1xyXG4gIGNsb3VkX25hbWU6IFwiZHN2amh1azI1XCIsXHJcbiAgYXBpX2tleTogXCIxMTY0MzgxNTE4Mzc3ODlcIixcclxuICBhcGlfc2VjcmV0OiBcInpCOFVlMjhsTGRaVDdSVXZWTnFTZGtENGFmOFwiXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBuZXcgSW5jb21pbmdGb3JtKCk7XHJcblxyXG4gICAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcclxuICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpO1xyXG4gICAgICByZXNvbHZlKHsgZmllbGRzLCBmaWxlcyB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmaWxlID0gZGF0YT8uZmlsZXM/LmlucHV0RmlsZS5maWxlcGF0aDtcclxuICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICBsZXQgdGltZSA9IGQuZ2V0VGltZSgpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xvdWRpbmFyeS52Mi51cGxvYWRlci51cGxvYWQoZmlsZSwge1xyXG4gICAgcmVzb3VyY2VfdHlwZTogJ2ltYWdlJyxcclxuICAgIHB1YmxpY19pZDogdGltZSxcclxuICB9KTtcclxuICBjb25zdCB1cmwgPSBjbG91ZGluYXJ5LnVybCh0aW1lKTtcclxuICBjb25zdCBzZWNVUkwgPSByZXNwb25zZS5zZWN1cmVfdXJsO1xyXG4gIHJldHVybiByZXMuanNvbihzZWNVUkwpO1xyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbImNsb3VkaW5hcnkiLCJJbmNvbWluZ0Zvcm0iLCJjb25maWciLCJjbG91ZF9uYW1lIiwiYXBpX2tleSIsImFwaV9zZWNyZXQiLCJhcGkiLCJib2R5UGFyc2VyIiwicmVxIiwicmVzIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZm9ybSIsInBhcnNlIiwiZXJyIiwiZmllbGRzIiwiZmlsZXMiLCJmaWxlIiwiaW5wdXRGaWxlIiwiZmlsZXBhdGgiLCJkIiwiRGF0ZSIsInRpbWUiLCJnZXRUaW1lIiwicmVzcG9uc2UiLCJ2MiIsInVwbG9hZGVyIiwidXBsb2FkIiwicmVzb3VyY2VfdHlwZSIsInB1YmxpY19pZCIsInVybCIsInNlY1VSTCIsInNlY3VyZV91cmwiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/uploadPhoto.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/uploadPhoto.js"));
module.exports = __webpack_exports__;

})();