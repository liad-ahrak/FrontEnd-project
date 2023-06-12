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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFN0MsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsY0FBYztBQUNkLGdEQUFnRDtBQUVoRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQTtBQUVwRSxpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG4vLyBQcmlzbWFDbGllbnQgaXMgYXR0YWNoZWQgdG8gdGhlIGBnbG9iYWxgIG9iamVjdCBpbiBkZXZlbG9wbWVudCB0byBwcmV2ZW50XHJcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxyXG4vL1xyXG4vLyBMZWFybiBtb3JlOlxyXG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/loginUser.ts":
/*!********************************!*\
  !*** ./pages/api/loginUser.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n// import bcrypt from \"bcrypt\";\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { email , password  } = req.body;\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n            where: {\n                email: email\n            }\n        });\n        const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.password);\n        if (!(user && passwordCorrect)) {\n            return res.status(401).json({\n                error: \"invalid username or password\"\n            });\n        }\n        const userForToken = {\n            id: user.id,\n            email: user.email,\n            name: user.name,\n            username: user.username,\n            photo: user.photo\n        };\n        const token = jwt.sign(userForToken, process.env.SECRET, {\n            expiresIn: 60\n        }); //1 minute\n        const verToken = jwt.verify(token, process.env.SECRET || \"\");\n        console.log(\"the token is: \" + verToken.name);\n        res.status(200).json({\n            token: token,\n            email: user.email,\n            name: user.name,\n            id: user.id\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW5Vc2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3FDO0FBQ3JDLE1BQU1DLFNBQVNDLG1CQUFPQSxDQUFDLHNCQUFRO0FBQy9CLE1BQU1DLE1BQU1ELG1CQUFPQSxDQUFDO0FBQ3BCO0FBRUEsTUFBTUUsVUFBVSxPQUFPQyxLQUFxQkMsTUFBeUI7SUFDakUsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDdkIsTUFBTyxFQUFFQyxNQUFBQSxFQUFPQyxTQUFBQSxFQUFVLEdBQUdKLElBQUlLLElBQUk7UUFDckMsTUFBTUMsT0FBTyxNQUFNWCxrRUFBcUIsQ0FBQztZQUNyQ2EsT0FBTztnQkFDSEwsT0FBT0E7WUFDWDtRQUNKO1FBQ0EsTUFBTU0sa0JBQWtCSCxTQUFTLElBQUksR0FBRyxLQUFLLEdBQUcsTUFBTVYsT0FBT2MsT0FBTyxDQUFDTixVQUFVRSxLQUFLRixRQUFRLENBQUM7UUFDN0YsSUFBRyxDQUFFRSxDQUFBQSxRQUFRRyxlQUFBQSxHQUFpQjtZQUMxQixPQUFPUixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUN4QkMsT0FBTztZQUNYO1FBQ0o7UUFDQSxNQUFNQyxlQUFlO1lBQ2pCQyxJQUFJVCxLQUFLUyxFQUFFO1lBQ1haLE9BQU9HLEtBQUtILEtBQUs7WUFDakJhLE1BQU1WLEtBQUtVLElBQUk7WUFDZkMsVUFBVVgsS0FBS1csUUFBUTtZQUN2QkMsT0FBT1osS0FBS1ksS0FBQUE7UUFDaEI7UUFDQSxNQUFNQyxRQUFRckIsSUFBSXNCLElBQUksQ0FDbEJOLGNBQ0FPLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTSxFQUNsQjtZQUFFQyxXQUFXO1FBQUksSUFBRTtRQUV2QixNQUFNQyxXQUFXM0IsSUFBSTRCLE1BQU0sQ0FBQ1AsT0FBT0UsUUFBUUMsR0FBRyxDQUFDQyxNQUFNLElBQUk7UUFDekRJLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJILFNBQVNULElBQUk7UUFDNUNmLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRU8sT0FBT0E7WUFBT2hCLE9BQU9HLEtBQUtILEtBQUs7WUFBRWEsTUFBTVYsS0FBS1UsSUFBSTtZQUFFRCxJQUFJVCxLQUFLUyxFQUFBQTtRQUFHO0lBQ3pGO0FBQ0o7QUFFQSxpRUFBZWhCLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL2xvZ2luVXNlci50cz9hZTdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vbGliL3ByaXNtYSdcclxuY29uc3QgYmNyeXB0ID0gcmVxdWlyZShcImJjcnlwdFwiKTtcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuLy8gaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgICAgICBjb25zdCAgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkQ29ycmVjdCA9IHVzZXIgPT09IG51bGwgPyBmYWxzZSA6IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICBpZighKHVzZXIgJiYgcGFzc3dvcmRDb3JyZWN0KSl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJ2ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZXJGb3JUb2tlbiA9IHtcclxuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwaG90bzogdXNlci5waG90b1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxyXG4gICAgICAgICAgICB1c2VyRm9yVG9rZW4sIFxyXG4gICAgICAgICAgICBwcm9jZXNzLmVudi5TRUNSRVQsXHJcbiAgICAgICAgICAgIHsgZXhwaXJlc0luOiA2MCAgfSkvLzEgbWludXRlXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdmVyVG9rZW4gPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5TRUNSRVQgfHwgXCJcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoZSB0b2tlbiBpczogXCIgKyB2ZXJUb2tlbi5uYW1lKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRva2VuOiB0b2tlbiwgZW1haWw6IHVzZXIuZW1haWwsIG5hbWU6IHVzZXIubmFtZSwgaWQ6IHVzZXIuaWQgfSlcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbInByaXNtYSIsImJjcnlwdCIsInJlcXVpcmUiLCJqd3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJ1c2VyIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJwYXNzd29yZENvcnJlY3QiLCJjb21wYXJlIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidXNlckZvclRva2VuIiwiaWQiLCJuYW1lIiwidXNlcm5hbWUiLCJwaG90byIsInRva2VuIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJleHBpcmVzSW4iLCJ2ZXJUb2tlbiIsInZlcmlmeSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/loginUser.ts\n");

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