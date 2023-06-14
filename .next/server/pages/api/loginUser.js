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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n// import bcrypt from \"bcrypt\";\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { email , password  } = req.body;\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n            where: {\n                email: email\n            }\n        });\n        const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.password);\n        if (!(user && passwordCorrect)) {\n            return res.status(401).json({\n                error: \"invalid username or password\"\n            });\n        }\n        const userForToken = {\n            id: user.id,\n            email: user.email,\n            name: user.name,\n            username: user.username,\n            photo: user.photo\n        };\n        const token = jwt.sign(userForToken, process.env.SECRET, {\n            expiresIn: 60 * 60 * 6\n        }); // expires in 6 hours\n        const verToken = jwt.verify(token, process.env.SECRET || \"\");\n        // console.log(\"the token is: \" + verToken.name);\n        res.status(200).json({\n            token: token,\n            email: user.email,\n            name: user.name,\n            id: user.id\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW5Vc2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3FDO0FBQ3JDLE1BQU1DLFNBQVNDLG1CQUFPQSxDQUFDLHNCQUFRO0FBQy9CLE1BQU1DLE1BQU1ELG1CQUFPQSxDQUFDO0FBQ3BCO0FBRUEsTUFBTUUsVUFBVSxPQUFPQyxLQUFxQkMsTUFBeUI7SUFDakUsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDdkIsTUFBTyxFQUFFQyxNQUFBQSxFQUFPQyxTQUFBQSxFQUFVLEdBQUdKLElBQUlLLElBQUk7UUFDckMsTUFBTUMsT0FBTyxNQUFNWCxrRUFBcUIsQ0FBQztZQUNyQ2EsT0FBTztnQkFDSEwsT0FBT0E7WUFDWDtRQUNKO1FBQ0EsTUFBTU0sa0JBQWtCSCxTQUFTLElBQUksR0FBRyxLQUFLLEdBQUcsTUFBTVYsT0FBT2MsT0FBTyxDQUFDTixVQUFVRSxLQUFLRixRQUFRLENBQUM7UUFDN0YsSUFBRyxDQUFFRSxDQUFBQSxRQUFRRyxlQUFBQSxHQUFpQjtZQUMxQixPQUFPUixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUN4QkMsT0FBTztZQUNYO1FBQ0o7UUFDQSxNQUFNQyxlQUFlO1lBQ2pCQyxJQUFJVCxLQUFLUyxFQUFFO1lBQ1haLE9BQU9HLEtBQUtILEtBQUs7WUFDakJhLE1BQU1WLEtBQUtVLElBQUk7WUFDZkMsVUFBVVgsS0FBS1csUUFBUTtZQUN2QkMsT0FBT1osS0FBS1ksS0FBQUE7UUFDaEI7UUFDQSxNQUFNQyxRQUFRckIsSUFBSXNCLElBQUksQ0FDbEJOLGNBQ0FPLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTSxFQUNsQjtZQUFFQyxXQUFXLEtBQUcsS0FBRztRQUFFLElBQUc7UUFFNUIsTUFBTUMsV0FBVzNCLElBQUk0QixNQUFNLENBQUNQLE9BQU9FLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTSxJQUFJO1FBQ3pEO1FBQ0F0QixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVPLE9BQU9BO1lBQU9oQixPQUFPRyxLQUFLSCxLQUFLO1lBQUVhLE1BQU1WLEtBQUtVLElBQUk7WUFBRUQsSUFBSVQsS0FBS1MsRUFBQUE7UUFBRztJQUN6RjtBQUNKO0FBRUEsaUVBQWVoQixPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2FwaS9sb2dpblVzZXIudHM/YWU3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL2xpYi9wcmlzbWEnXHJcbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoXCJiY3J5cHRcIik7XHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbi8vIGltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICAgICAgY29uc3QgIHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZENvcnJlY3QgPSB1c2VyID09PSBudWxsID8gZmFsc2UgOiBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcbiAgICAgICAgaWYoISh1c2VyICYmIHBhc3N3b3JkQ29ycmVjdCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdpbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VyRm9yVG9rZW4gPSB7XHJcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgcGhvdG86IHVzZXIucGhvdG9cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcclxuICAgICAgICAgICAgdXNlckZvclRva2VuLCBcclxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuU0VDUkVULFxyXG4gICAgICAgICAgICB7IGV4cGlyZXNJbjogNjAqNjAqNiB9KSAvLyBleHBpcmVzIGluIDYgaG91cnNcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB2ZXJUb2tlbiA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LlNFQ1JFVCB8fCBcIlwiKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhlIHRva2VuIGlzOiBcIiArIHZlclRva2VuLm5hbWUpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdG9rZW46IHRva2VuLCBlbWFpbDogdXNlci5lbWFpbCwgbmFtZTogdXNlci5uYW1lLCBpZDogdXNlci5pZCB9KVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsicHJpc21hIiwiYmNyeXB0IiwicmVxdWlyZSIsImp3dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsInBhc3N3b3JkQ29ycmVjdCIsImNvbXBhcmUiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ1c2VyRm9yVG9rZW4iLCJpZCIsIm5hbWUiLCJ1c2VybmFtZSIsInBob3RvIiwidG9rZW4iLCJzaWduIiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVCIsImV4cGlyZXNJbiIsInZlclRva2VuIiwidmVyaWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/loginUser.ts\n");

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