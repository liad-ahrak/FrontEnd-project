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
exports.id = "pages/api/uploadDB";
exports.ids = ["pages/api/uploadDB"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/uploadDB.js":
/*!*******************************!*\
  !*** ./pages/api/uploadDB.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst url = \"mongodb+srv://Lihiad:Lihiad@lihiad.vkfaddd.mongodb.net/?retryWrites=true&w=majority\";\nmongoose.set(\"strictQuery\", false);\nmongoose.connect(url);\nconst metaDataSchema = new mongoose.Schema({\n    user: String,\n    dateUploaded: Date,\n    postId: String,\n    cloudinaryLink: String\n});\nlet MetaData;\ntry {\n    MetaData = mongoose.model(\"MetaData\");\n} catch (error) {\n    MetaData = mongoose.model(\"MetaData\", metaDataSchema);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    // switch (req.method)  {\n    if (req.method === \"POST\") {\n        const { user , dateUploaded , postId , cloudinaryLink  } = req.body;\n        const video = new MetaData({\n            user,\n            dateUploaded,\n            postId,\n            cloudinaryLink\n        });\n        try {\n            await video.save();\n            res.status(200).json({\n                message: \"Video metadata saved successfully\"\n            });\n        } catch (error) {\n            console.error(\"Error creating video metadata: \", error);\n            res.status(500).json({\n                message: \"Error saving video metadata\"\n            });\n        }\n    // break;\n    } else {\n        const postId = req.query;\n        try {\n            const video = await MetaData.findOne(postId);\n            if (!video) {\n                res.status(404).json({\n                    message: \"No video found\"\n                });\n            } else {\n                res.status(200).json(video);\n            }\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                message: \"Error retrieving video metadata\"\n            });\n        }\n    // break;\n    }\n// }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkREIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLE1BQ047QUFFQUYsU0FBU0csR0FBRyxDQUFDLGVBQWMsS0FBSztBQUNoQ0gsU0FBU0ksT0FBTyxDQUFDRjtBQUVqQixNQUFNRyxpQkFBaUIsSUFBSUwsU0FBU00sTUFBTSxDQUFDO0lBQ3pDQyxNQUFNQztJQUNOQyxjQUFjQztJQUNkQyxRQUFRSDtJQUNSSSxnQkFBZ0JKO0FBQ2xCO0FBRUEsSUFBSUs7QUFFSixJQUFJO0lBQ0ZBLFdBQVdiLFNBQVNjLEtBQUssQ0FBQztBQUM1QixFQUFFLE9BQU9DLE9BQU87SUFDZEYsV0FBV2IsU0FBU2MsS0FBSyxDQUFDLFlBQVlUO0FBQ3hDO0FBRUEsaUVBQWUsT0FBT1csS0FBS0MsTUFBUTtJQUNqQztJQUNFLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRVgsS0FBQUEsRUFBTUUsYUFBQUEsRUFBY0UsT0FBQUEsRUFBUUMsZUFBQUEsRUFBZ0IsR0FBR0ksSUFBSUcsSUFBSTtRQUUvRCxNQUFNQyxRQUFRLElBQUlQLFNBQVM7WUFDekJOO1lBQ0FFO1lBQ0FFO1lBQ0FDO1FBQ0Y7UUFFQSxJQUFJO1lBQ0YsTUFBTVEsTUFBTUMsSUFBSTtZQUNoQkosSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFvQztRQUN0RSxFQUFFLE9BQU9ULE9BQU87WUFDZFUsUUFBUVYsS0FBSyxDQUFDLG1DQUFtQ0E7WUFDakRFLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBOEI7UUFDaEU7SUFDQTtJQUNGLE9BRUk7UUFDRixNQUFNYixTQUFTSyxJQUFJVSxLQUFLO1FBQ3hCLElBQUc7WUFDRCxNQUFNTixRQUFRLE1BQU1QLFNBQVNjLE9BQU8sQ0FBQ2hCO1lBQ3JDLElBQUksQ0FBQ1MsT0FBTztnQkFDVkgsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUztnQkFBaUI7WUFDbkQsT0FBTztnQkFDTFAsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7WUFDdkI7UUFDRixFQUFFLE9BQU9MLE9BQU87WUFDZFUsUUFBUVYsS0FBSyxDQUFFQTtZQUNmRSxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQWtDO1FBQ3BFO0lBQ0E7SUFDRjtBQUNGO0FBQ0YsR0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvdXBsb2FkREIuanM/MTY1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbmNvbnN0IHVybCA9XHJcbidtb25nb2RiK3NydjovL0xpaGlhZDpMaWhpYWRAbGloaWFkLnZrZmFkZGQubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSc7XHJcblxyXG5tb25nb29zZS5zZXQoJ3N0cmljdFF1ZXJ5JyxmYWxzZSlcclxubW9uZ29vc2UuY29ubmVjdCh1cmwpXHJcblxyXG5jb25zdCBtZXRhRGF0YVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHVzZXI6IFN0cmluZyxcclxuICBkYXRlVXBsb2FkZWQ6IERhdGUsXHJcbiAgcG9zdElkOiBTdHJpbmcsXHJcbiAgY2xvdWRpbmFyeUxpbms6IFN0cmluZyxcclxufSk7XHJcblxyXG5sZXQgTWV0YURhdGE7XHJcblxyXG50cnkge1xyXG4gIE1ldGFEYXRhID0gbW9uZ29vc2UubW9kZWwoJ01ldGFEYXRhJyk7XHJcbn0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgTWV0YURhdGEgPSBtb25nb29zZS5tb2RlbCgnTWV0YURhdGEnLCBtZXRhRGF0YVNjaGVtYSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIC8vIHN3aXRjaCAocmVxLm1ldGhvZCkgIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgY29uc3QgeyB1c2VyLCBkYXRlVXBsb2FkZWQsIHBvc3RJZCwgY2xvdWRpbmFyeUxpbmsgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgICAgY29uc3QgdmlkZW8gPSBuZXcgTWV0YURhdGEoe1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgZGF0ZVVwbG9hZGVkLFxyXG4gICAgICAgIHBvc3RJZCxcclxuICAgICAgICBjbG91ZGluYXJ5TGluayxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IHZpZGVvLnNhdmUoKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdWaWRlbyBtZXRhZGF0YSBzYXZlZCBzdWNjZXNzZnVsbHknIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyB2aWRlbyBtZXRhZGF0YTogXCIsIGVycm9yKTtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBzYXZpbmcgdmlkZW8gbWV0YWRhdGEnIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGJyZWFrO1xyXG4gICAgfSBcclxuICAgIC8vIGNhc2UgJ0dFVCc6XHJcbiAgICBlbHNle1xyXG4gICAgICBjb25zdCBwb3N0SWQgPSByZXEucXVlcnk7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCB2aWRlbyA9IGF3YWl0IE1ldGFEYXRhLmZpbmRPbmUocG9zdElkKTtcclxuICAgICAgICBpZiAoIXZpZGVvKSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdObyB2aWRlbyBmb3VuZCcgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHZpZGVvKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvciggZXJyb3IpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIHJldHJpZXZpbmcgdmlkZW8gbWV0YWRhdGEnIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGJyZWFrO1xyXG4gICAgfVxyXG4gIC8vIH1cclxufTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwidXJsIiwic2V0IiwiY29ubmVjdCIsIm1ldGFEYXRhU2NoZW1hIiwiU2NoZW1hIiwidXNlciIsIlN0cmluZyIsImRhdGVVcGxvYWRlZCIsIkRhdGUiLCJwb3N0SWQiLCJjbG91ZGluYXJ5TGluayIsIk1ldGFEYXRhIiwibW9kZWwiLCJlcnJvciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJ2aWRlbyIsInNhdmUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNvbnNvbGUiLCJxdWVyeSIsImZpbmRPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/uploadDB.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/uploadDB.js"));
module.exports = __webpack_exports__;

})();