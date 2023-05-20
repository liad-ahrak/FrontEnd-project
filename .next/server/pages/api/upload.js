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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);\n\n\ncloudinary__WEBPACK_IMPORTED_MODULE_0___default().config({\n    cloudName: \"dgkezthsz\",\n    apiKey: \"143937565617482\",\n    apiSecret: \"EITklreNB0GF_C3tFpS-4YsncBk\"\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const data = await new Promise((resolve, reject)=>{\n        const form = new formidable__WEBPACK_IMPORTED_MODULE_1__.IncomingForm();\n        form.parse(req, (err, fields, files)=>{\n            if (err) return reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    const file = data?.files?.inputFile.path;\n    try {\n        const response = await cloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2.uploader.upload(file, {\n            resource_type: \"video\",\n            public_id: \"my_video\"\n        });\n        return res.json(response);\n    } catch (error) {\n        console.log(\"Error\", error);\n        return res.json(error);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtQztBQUNNO0FBRXpDQSx3REFBaUIsQ0FBQztJQUNkRyxXQUFXO0lBQ1hDLFFBQVE7SUFDUkMsV0FBVztBQUNmO0FBRU8sTUFBTUgsU0FBUztJQUNwQkksS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFDO0FBRUQsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUNqQyxNQUFNQyxPQUFPLE1BQU0sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1FBQ2xELE1BQU1DLE9BQU8sSUFBSWIsb0RBQVlBO1FBRTdCYSxLQUFLQyxLQUFLLENBQUNQLEtBQUssQ0FBQ1EsS0FBS0MsUUFBUUMsUUFBVTtZQUN0QyxJQUFJRixLQUFLLE9BQU9ILE9BQU9HO1lBQ3ZCSixRQUFRO2dCQUFFSztnQkFBUUM7WUFBTTtRQUMxQjtJQUNGO0lBRUEsTUFBTUMsT0FBT1QsTUFBTVEsT0FBT0UsVUFBVUMsSUFBSTtJQUV4QyxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNdEIsb0VBQTZCLENBQUNtQixNQUFNO1lBQ3pETyxlQUFlO1lBQ2ZDLFdBQVc7UUFDYjtRQUNBLE9BQU9sQixJQUFJbUIsSUFBSSxDQUFDTjtJQUNsQixFQUFFLE9BQU9PLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDLFNBQVNGO1FBQ3JCLE9BQU9wQixJQUFJbUIsSUFBSSxDQUFDQztJQUNsQjtBQUNGLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL3VwbG9hZC5qcz81NTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbG91ZGluYXJ5IGZyb20gJ2Nsb3VkaW5hcnknO1xuaW1wb3J0IHsgSW5jb21pbmdGb3JtIH0gZnJvbSAnZm9ybWlkYWJsZSc7XG5cbmNsb3VkaW5hcnkuY29uZmlnKHtcbiAgICBjbG91ZE5hbWU6IFwiZGdrZXp0aHN6XCIsXG4gICAgYXBpS2V5OiBcIjE0MzkzNzU2NTYxNzQ4MlwiLFxuICAgIGFwaVNlY3JldDogXCJFSVRrbHJlTkIwR0ZfQzN0RnBTLTRZc25jQmtcIlxufSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBJbmNvbWluZ0Zvcm0oKTtcblxuICAgIGZvcm0ucGFyc2UocmVxLCAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICByZXNvbHZlKHsgZmllbGRzLCBmaWxlcyB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgZmlsZSA9IGRhdGE/LmZpbGVzPy5pbnB1dEZpbGUucGF0aDtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xvdWRpbmFyeS52Mi51cGxvYWRlci51cGxvYWQoZmlsZSwge1xuICAgICAgcmVzb3VyY2VfdHlwZTogXCJ2aWRlb1wiLFxuICAgICAgcHVibGljX2lkOiBcIm15X3ZpZGVvXCJcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzLmpzb24ocmVzcG9uc2UpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIiwgZXJyb3IpO1xuICAgIHJldHVybiByZXMuanNvbihlcnJvcik7XG4gIH1cbn07XG5cbiJdLCJuYW1lcyI6WyJjbG91ZGluYXJ5IiwiSW5jb21pbmdGb3JtIiwiY29uZmlnIiwiY2xvdWROYW1lIiwiYXBpS2V5IiwiYXBpU2VjcmV0IiwiYXBpIiwiYm9keVBhcnNlciIsInJlcSIsInJlcyIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZvcm0iLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiZmlsZSIsImlucHV0RmlsZSIsInBhdGgiLCJyZXNwb25zZSIsInYyIiwidXBsb2FkZXIiLCJ1cGxvYWQiLCJyZXNvdXJjZV90eXBlIiwicHVibGljX2lkIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

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