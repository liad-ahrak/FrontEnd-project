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
exports.id = "pages/api/loginUser";
exports.ids = ["pages/api/loginUser"];
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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFN0MsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsY0FBYztBQUNkLGdEQUFnRDtBQUVoRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQTtBQUVwRSxpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbi8vIFByaXNtYUNsaWVudCBpcyBhdHRhY2hlZCB0byB0aGUgYGdsb2JhbGAgb2JqZWN0IGluIGRldmVsb3BtZW50IHRvIHByZXZlbnRcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxuLy9cbi8vIExlYXJuIG1vcmU6XG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsIGFzIHVua25vd24gYXMgeyBwcmlzbWE6IFByaXNtYUNsaWVudCB9XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWFcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/loginUser.ts":
/*!********************************!*\
  !*** ./pages/api/loginUser.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n// import bcrypt from \"bcrypt\";\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { email , password  } = req.body;\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n            where: {\n                email: email\n            }\n        });\n        const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.password);\n        if (!(user && passwordCorrect)) {\n            return res.status(401).json({\n                error: \"invalid username or password\"\n            });\n        }\n        const sessionId = 232322;\n        res.setHeader(\"Set-Cookie\", `session=${sessionId}; Path=/;   Max-Age=600`);\n        const userForToken = {\n            id: user.id,\n            email: user.email,\n            name: user.name,\n            username: user.username,\n            photo: user.photo\n        };\n        const token = jwt.sign(userForToken, process.env.SECRET, {\n            expiresIn: 60 * 60 * 6\n        }); // expires in 6 hours\n        const verToken = jwt.verify(token, process.env.SECRET || \"\");\n        // console.log(\"the token is: \" + verToken.name);\n        res.status(200).json({\n            token: token,\n            email: user.email,\n            name: user.name,\n            id: user.id\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW5Vc2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3FDO0FBQ3JDLE1BQU1DLFNBQVNDLG1CQUFPQSxDQUFDLHNCQUFRO0FBQy9CLE1BQU1DLE1BQU1ELG1CQUFPQSxDQUFDO0FBQ3BCO0FBRUEsTUFBTUUsVUFBVSxPQUFPQyxLQUFxQkMsTUFBeUI7SUFDakUsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDdkIsTUFBTyxFQUFFQyxNQUFBQSxFQUFPQyxTQUFBQSxFQUFVLEdBQUdKLElBQUlLLElBQUk7UUFDckMsTUFBTUMsT0FBTyxNQUFNWCxrRUFBcUIsQ0FBQztZQUNyQ2EsT0FBTztnQkFDSEwsT0FBT0E7WUFDWDtRQUNKO1FBQ0EsTUFBTU0sa0JBQWtCSCxTQUFTLElBQUksR0FBRyxLQUFLLEdBQUcsTUFBTVYsT0FBT2MsT0FBTyxDQUFDTixVQUFVRSxLQUFLRixRQUFRLENBQUM7UUFDN0YsSUFBRyxDQUFFRSxDQUFBQSxRQUFRRyxlQUFBQSxHQUFpQjtZQUMxQixPQUFPUixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUN4QkMsT0FBTztZQUNYO1FBQ0o7UUFFQSxNQUFNQyxZQUFZO1FBQ2xCYixJQUFJYyxTQUFTLENBQUMsY0FBZSxXQUFVRCxVQUFVLHdCQUF3QjtRQUV6RSxNQUFNRSxlQUFlO1lBQ2pCQyxJQUFJWCxLQUFLVyxFQUFFO1lBQ1hkLE9BQU9HLEtBQUtILEtBQUs7WUFDakJlLE1BQU1aLEtBQUtZLElBQUk7WUFDZkMsVUFBVWIsS0FBS2EsUUFBUTtZQUN2QkMsT0FBT2QsS0FBS2MsS0FBQUE7UUFDaEI7UUFDQSxNQUFNQyxRQUFRdkIsSUFBSXdCLElBQUksQ0FDbEJOLGNBQ0FPLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTSxFQUNsQjtZQUFFQyxXQUFXLEtBQUcsS0FBRztRQUFFLElBQUc7UUFFNUIsTUFBTUMsV0FBVzdCLElBQUk4QixNQUFNLENBQUNQLE9BQU9FLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTSxJQUFJO1FBQ3pEO1FBQ0F4QixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVTLE9BQU9BO1lBQU9sQixPQUFPRyxLQUFLSCxLQUFLO1lBQUVlLE1BQU1aLEtBQUtZLElBQUk7WUFBRUQsSUFBSVgsS0FBS1csRUFBQUE7UUFBRztJQUN6RjtBQUNKO0FBRUEsaUVBQWVsQixPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2FwaS9sb2dpblVzZXIudHM/YWU3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9saWIvcHJpc21hJ1xuY29uc3QgYmNyeXB0ID0gcmVxdWlyZShcImJjcnlwdFwiKTtcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXG4vLyBpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgICAgICBjb25zdCAgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkQ29ycmVjdCA9IHVzZXIgPT09IG51bGwgPyBmYWxzZSA6IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgaWYoISh1c2VyICYmIHBhc3N3b3JkQ29ycmVjdCkpe1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogJ2ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2Vzc2lvbklkID0gMjMyMzIyO1xuICAgICAgICByZXMuc2V0SGVhZGVyKFwiU2V0LUNvb2tpZVwiLCBgc2Vzc2lvbj0ke3Nlc3Npb25JZH07IFBhdGg9LzsgICBNYXgtQWdlPTYwMGApO1xuXG4gICAgICAgIGNvbnN0IHVzZXJGb3JUb2tlbiA9IHtcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcbiAgICAgICAgICAgIHBob3RvOiB1c2VyLnBob3RvXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcbiAgICAgICAgICAgIHVzZXJGb3JUb2tlbiwgXG4gICAgICAgICAgICBwcm9jZXNzLmVudi5TRUNSRVQsXG4gICAgICAgICAgICB7IGV4cGlyZXNJbjogNjAqNjAqNiB9KSAvLyBleHBpcmVzIGluIDYgaG91cnNcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHZlclRva2VuID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuU0VDUkVUIHx8IFwiXCIpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhlIHRva2VuIGlzOiBcIiArIHZlclRva2VuLm5hbWUpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRva2VuOiB0b2tlbiwgZW1haWw6IHVzZXIuZW1haWwsIG5hbWU6IHVzZXIubmFtZSwgaWQ6IHVzZXIuaWQgfSlcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJwcmlzbWEiLCJiY3J5cHQiLCJyZXF1aXJlIiwiand0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwidXNlciIsImZpbmRGaXJzdCIsIndoZXJlIiwicGFzc3dvcmRDb3JyZWN0IiwiY29tcGFyZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInNlc3Npb25JZCIsInNldEhlYWRlciIsInVzZXJGb3JUb2tlbiIsImlkIiwibmFtZSIsInVzZXJuYW1lIiwicGhvdG8iLCJ0b2tlbiIsInNpZ24iLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUIiwiZXhwaXJlc0luIiwidmVyVG9rZW4iLCJ2ZXJpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/loginUser.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/loginUser.ts"));
module.exports = __webpack_exports__;

})();