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
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFN0MsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsY0FBYztBQUNkLGdEQUFnRDtBQUVoRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQTtBQUVwRSxpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbi8vIFByaXNtYUNsaWVudCBpcyBhdHRhY2hlZCB0byB0aGUgYGdsb2JhbGAgb2JqZWN0IGluIGRldmVsb3BtZW50IHRvIHByZXZlbnRcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxuLy9cbi8vIExlYXJuIG1vcmU6XG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsIGFzIHVua25vd24gYXMgeyBwcmlzbWE6IFByaXNtYUNsaWVudCB9XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWFcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/posts.ts":
/*!****************************!*\
  !*** ./pages/api/posts.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n// (/pages/api/posts.ts) that the new api I needed inroder to pull the objects from the query (start -> end)\n\nconst handler = async (req, res)=>{\n    if (req.method === \"GET\") {\n        const currPage = req.query.currPage ? parseInt(req.query.currPage) : 0;\n        const posts = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findMany({\n            where: {\n                published: true\n            },\n            include: {\n                author: {\n                    select: {\n                        name: true\n                    }\n                }\n            },\n            skip: currPage * 10,\n            take: 10\n        });\n        res.status(200).json({\n            posts\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVxQztBQUVyQyxNQUFNQyxVQUFVLE9BQU9DLEtBQXFCQyxNQUF5QjtJQUVuRSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUV4QixNQUFNQyxXQUFXSCxJQUFJSSxLQUFLLENBQUNELFFBQVEsR0FBR0UsU0FBU0wsSUFBSUksS0FBSyxDQUFDRCxRQUFRLElBQWMsQ0FBQztRQUVoRixNQUFNRyxRQUFRLE1BQU1SLGlFQUFvQixDQUFDO1lBQ3JDVyxPQUFPO2dCQUNMQyxXQUFXO1lBQ2I7WUFDQUMsU0FBUztnQkFDUEMsUUFBUTtvQkFDTkMsUUFBUTt3QkFDTkMsTUFBTTtvQkFDUjtnQkFDRjtZQUNGO1lBQ0FDLE1BQU1aLFdBQVc7WUFDakJhLE1BQU07UUFDUjtRQUVGZixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFWjtRQUFNO0lBQy9CLE9BQU87UUFDTEwsSUFBSWdCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFxQjtJQUN2RDtBQUNGO0FBRUEsaUVBQWVwQixPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2FwaS9wb3N0cy50cz9kZGJlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICgvcGFnZXMvYXBpL3Bvc3RzLnRzKSB0aGF0IHRoZSBuZXcgYXBpIEkgbmVlZGVkIGlucm9kZXIgdG8gcHVsbCB0aGUgb2JqZWN0cyBmcm9tIHRoZSBxdWVyeSAoc3RhcnQgLT4gZW5kKVxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vbGliL3ByaXNtYSdcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBcbiAgICBjb25zdCBjdXJyUGFnZSA9IHJlcS5xdWVyeS5jdXJyUGFnZSA/IHBhcnNlSW50KHJlcS5xdWVyeS5jdXJyUGFnZSBhcyBzdHJpbmcpIDogMDtcblxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIHB1Ymxpc2hlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNraXA6IGN1cnJQYWdlICogMTAsXG4gICAgICAgIHRha2U6IDEwLFxuICAgICAgfSk7XG4gICAgICBcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHBvc3RzIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImN1cnJQYWdlIiwicXVlcnkiLCJwYXJzZUludCIsInBvc3RzIiwicG9zdCIsImZpbmRNYW55Iiwid2hlcmUiLCJwdWJsaXNoZWQiLCJpbmNsdWRlIiwiYXV0aG9yIiwic2VsZWN0IiwibmFtZSIsInNraXAiLCJ0YWtlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts.ts"));
module.exports = __webpack_exports__;

})();