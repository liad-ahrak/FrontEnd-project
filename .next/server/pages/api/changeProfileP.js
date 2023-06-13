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
exports.id = "pages/api/changeProfileP";
exports.ids = ["pages/api/changeProfileP"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

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

/***/ "(api)/./pages/api/changeProfileP.ts":
/*!*************************************!*\
  !*** ./pages/api/changeProfileP.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n// import { getSession } from 'next-auth/react';\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst MakeNewToken = (oldT, newP)=>{\n    const decoded = jwt.decode(oldT);\n    const newData = {\n        id: decoded.id,\n        email: decoded.email,\n        name: decoded.name,\n        username: decoded.username,\n        photo: newP\n    };\n    const newToken = jwt.sign(newData, process.env.SECRET, {\n        expiresIn: 60 * 60\n    }); //1 hour\n    return newToken;\n};\nasync function handle(req, res) {\n    const { userId , photo  } = req.body;\n    if (req.cookies.tokenLogin) {\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.update({\n            where: {\n                id: Number(userId)\n            },\n            data: {\n                photo: photo\n            }\n        });\n        const newToken = MakeNewToken(req.cookies.tokenLogin, photo);\n        res.status(200).json({\n            token: newToken,\n            massage: \"success\"\n        });\n    } else {\n        res.status(401).send({\n            message: \"Unauthorized\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhbmdlUHJvZmlsZVAudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUNxQztBQUNyQyxNQUFNQyxNQUFNQyxtQkFBT0EsQ0FBQztBQUVwQixNQUFNQyxlQUFlQSxDQUFDQyxNQUFhQyxPQUFpQjtJQUNoRCxNQUFNQyxVQUFVTCxJQUFJTSxNQUFNLENBQUNIO0lBQzNCLE1BQU1JLFVBQVU7UUFDWkMsSUFBSUgsUUFBUUcsRUFBRTtRQUNkQyxPQUFPSixRQUFRSSxLQUFLO1FBQ3BCQyxNQUFNTCxRQUFRSyxJQUFJO1FBQ2xCQyxVQUFVTixRQUFRTSxRQUFRO1FBQzFCQyxPQUFPUjtJQUNYO0lBQ0EsTUFBTVMsV0FBV2IsSUFBSWMsSUFBSSxDQUNyQlAsU0FDQVEsUUFBUUMsR0FBRyxDQUFDQyxNQUFNLEVBQ2xCO1FBQUVDLFdBQVcsS0FBSztJQUFHLElBQUU7SUFDM0IsT0FBT0w7QUFDWDtBQUdlLGVBQWVNLE9BQU9DLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDNUUsTUFBTSxFQUFDQyxPQUFBQSxFQUFRVixNQUFBQSxFQUFNLEdBQUdRLElBQUlHLElBQUk7SUFDaEMsSUFBSUgsSUFBSUksT0FBTyxDQUFDQyxVQUFVLEVBQUU7UUFDeEIsTUFBTUMsT0FBTyxNQUFNM0IsK0RBQWtCLENBQUM7WUFDdEM2QixPQUFPO2dCQUFFcEIsSUFBSXFCLE9BQU9QO1lBQVE7WUFDNUJRLE1BQU07Z0JBQUVsQixPQUFPQTtZQUFNO1FBQ3JCO1FBQ0EsTUFBTUMsV0FBV1gsYUFBYWtCLElBQUlJLE9BQU8sQ0FBQ0MsVUFBVSxFQUFFYjtRQUN0RFMsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFRcEI7WUFBVXFCLFNBQVU7UUFBUztJQUNoRSxPQUFPO1FBQ0hiLElBQUlVLE1BQU0sQ0FBQyxLQUFLSSxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFlO0lBQ25EO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL2NoYW5nZVByb2ZpbGVQLnRzPzMxNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbi8vIGltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL2xpYi9wcmlzbWEnO1xyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5cclxuY29uc3QgTWFrZU5ld1Rva2VuID0gKG9sZFQ6c3RyaW5nLCBuZXdQOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QuZGVjb2RlKG9sZFQpO1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IHtcclxuICAgICAgICBpZDogZGVjb2RlZC5pZCxcclxuICAgICAgICBlbWFpbDogZGVjb2RlZC5lbWFpbCxcclxuICAgICAgICBuYW1lOiBkZWNvZGVkLm5hbWUsXHJcbiAgICAgICAgdXNlcm5hbWU6IGRlY29kZWQudXNlcm5hbWUsXHJcbiAgICAgICAgcGhvdG86IG5ld1BcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1Rva2VuID0gand0LnNpZ24oXHJcbiAgICAgICAgbmV3RGF0YSwgXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuU0VDUkVULFxyXG4gICAgICAgIHsgZXhwaXJlc0luOiA2MCAqIDYwIH0pLy8xIGhvdXJcclxuICAgIHJldHVybiBuZXdUb2tlbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gICAgY29uc3Qge3VzZXJJZCwgcGhvdG99ID0gcmVxLmJvZHk7ICAgIFxyXG4gICAgaWYgKHJlcS5jb29raWVzLnRva2VuTG9naW4pIHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKHVzZXJJZCkgfSxcclxuICAgICAgICBkYXRhOiB7IHBob3RvOiBwaG90byB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG5ld1Rva2VuID0gTWFrZU5ld1Rva2VuKHJlcS5jb29raWVzLnRva2VuTG9naW4sIHBob3RvKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRva2VuIDogbmV3VG9rZW4sIG1hc3NhZ2UgOiBcInN1Y2Nlc3NcIn0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0pXHJcbiAgICB9XHJcbiAgICB9Il0sIm5hbWVzIjpbInByaXNtYSIsImp3dCIsInJlcXVpcmUiLCJNYWtlTmV3VG9rZW4iLCJvbGRUIiwibmV3UCIsImRlY29kZWQiLCJkZWNvZGUiLCJuZXdEYXRhIiwiaWQiLCJlbWFpbCIsIm5hbWUiLCJ1c2VybmFtZSIsInBob3RvIiwibmV3VG9rZW4iLCJzaWduIiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVCIsImV4cGlyZXNJbiIsImhhbmRsZSIsInJlcSIsInJlcyIsInVzZXJJZCIsImJvZHkiLCJjb29raWVzIiwidG9rZW5Mb2dpbiIsInVzZXIiLCJ1cGRhdGUiLCJ3aGVyZSIsIk51bWJlciIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwidG9rZW4iLCJtYXNzYWdlIiwic2VuZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/changeProfileP.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/changeProfileP.ts"));
module.exports = __webpack_exports__;

})();