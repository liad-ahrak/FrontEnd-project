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
exports.id = "pages/api/newUser";
exports.ids = ["pages/api/newUser"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFN0MsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsY0FBYztBQUNkLGdEQUFnRDtBQUVoRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQTtBQUVwRSxpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG4vLyBQcmlzbWFDbGllbnQgaXMgYXR0YWNoZWQgdG8gdGhlIGBnbG9iYWxgIG9iamVjdCBpbiBkZXZlbG9wbWVudCB0byBwcmV2ZW50XHJcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxyXG4vL1xyXG4vLyBMZWFybiBtb3JlOlxyXG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/newUser.ts":
/*!******************************!*\
  !*** ./pages/api/newUser.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n// import bcrypt from \"bcrypt\";\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { userName , password , email , name  } = req.body;\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n            where: {\n                email: email\n            }\n        });\n        if (user) {\n            res.status(400).json({\n                message: \"User already exists\"\n            });\n        } else {\n            const salt = bcrypt.genSaltSync(10);\n            const passwordHash = await bcrypt.hash(password, salt);\n            // const passwordHash = password\n            const newUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                data: {\n                    name: name,\n                    username: userName,\n                    email: email,\n                    password: passwordHash\n                }\n            });\n            res.status(201).json({\n                message: `User created ${newUser.name}`\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3VXNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNxQztBQUNyQyxNQUFNQyxTQUFTQyxtQkFBT0EsQ0FBQyxzQkFBUTtBQUMvQjtBQUVBLE1BQU1DLFVBQVUsT0FBT0MsS0FBcUJDLE1BQXlCO0lBQ25FLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU8sRUFBRUMsU0FBQUEsRUFBVUMsU0FBQUEsRUFBVUMsTUFBQUEsRUFBT0MsS0FBQUEsRUFBTSxHQUFHTixJQUFJTyxJQUFJO1FBRXJELE1BQU1DLE9BQU8sTUFBTVosa0VBQXFCLENBQUM7WUFDckNjLE9BQU87Z0JBQ0hMLE9BQU9BO1lBQ1g7UUFDSjtRQUNBLElBQUdHLE1BQUs7WUFDSlAsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFzQjtRQUMxRCxPQUFLO1lBQ0QsTUFBTUMsT0FBT2pCLE9BQU9rQixXQUFXLENBQUM7WUFDaEMsTUFBTUMsZUFBZSxNQUFNbkIsT0FBT29CLElBQUksQ0FBQ2IsVUFBVVU7WUFDakQ7WUFDQSxNQUFNSSxVQUFVLE1BQU10QiwrREFBa0IsQ0FBQztnQkFDckN3QixNQUFNO29CQUNGZCxNQUFNQTtvQkFDTmUsVUFBVWxCO29CQUNWRSxPQUFPQTtvQkFDUEQsVUFBVVk7Z0JBQ2Q7WUFDRjtZQUNBZixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFVLGdCQUFlSyxRQUFRWixJQUFLO1lBQUU7UUFDckU7SUFDRixPQUFPO1FBQ0xMLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFxQjtJQUN2RDtBQUNGO0FBRUEsaUVBQWVkLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL25ld1VzZXIudHM/NGIxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL2xpYi9wcmlzbWEnXHJcbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoXCJiY3J5cHRcIik7XHJcbi8vIGltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgIHsgdXNlck5hbWUsIHBhc3N3b3JkLCBlbWFpbCwgbmFtZSB9ID0gcmVxLmJvZHk7XHJcbiAgICBcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBpZih1c2VyKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBhbHJlYWR5IGV4aXN0c1wiIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3Qgc2FsdCA9IGJjcnlwdC5nZW5TYWx0U3luYygxMClcclxuICAgICAgICBjb25zdCBwYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgc2FsdCk7XHJcbiAgICAgICAgLy8gY29uc3QgcGFzc3dvcmRIYXNoID0gcGFzc3dvcmRcclxuICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZEhhc2gsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogYFVzZXIgY3JlYXRlZCAke25ld1VzZXIubmFtZX1gIH0pO1xyXG4gICAgfSAgXHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJwcmlzbWEiLCJiY3J5cHQiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJOYW1lIiwicGFzc3dvcmQiLCJlbWFpbCIsIm5hbWUiLCJib2R5IiwidXNlciIsImZpbmRGaXJzdCIsIndoZXJlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJzYWx0IiwiZ2VuU2FsdFN5bmMiLCJwYXNzd29yZEhhc2giLCJoYXNoIiwibmV3VXNlciIsImNyZWF0ZSIsImRhdGEiLCJ1c2VybmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/newUser.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/newUser.ts"));
module.exports = __webpack_exports__;

})();