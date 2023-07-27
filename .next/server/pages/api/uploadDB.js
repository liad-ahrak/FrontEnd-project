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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst url = \"mongodb+srv://Lihiad:Lihiad@lihiad.vkfaddd.mongodb.net/?retryWrites=true&w=majority\";\nmongoose.set(\"strictQuery\", false);\nmongoose.connect(url);\nconst metaDataSchema = new mongoose.Schema({\n    user: String,\n    dateUploaded: Date,\n    postId: String,\n    cloudinaryLink: String\n});\nlet MetaData;\ntry {\n    MetaData = mongoose.model(\"MetaData\");\n} catch (error) {\n    MetaData = mongoose.model(\"MetaData\", metaDataSchema);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    // switch (req.method)  {\n    if (req.method === \"POST\") {\n        const { user , dateUploaded , postId , cloudinaryLink  } = req.body;\n        const metadata = new MetaData({\n            user,\n            dateUploaded,\n            postId,\n            cloudinaryLink\n        });\n        try {\n            await metadata.save();\n            res.status(200).json({\n                message: \"Video metadata saved successfully\"\n            });\n        } catch (error) {\n            console.error(\"Error creating video metadata: \", error);\n            res.status(500).json({\n                message: \"Error saving video metadata\"\n            });\n        }\n    // break;\n    } else {\n        const postId = req.query;\n        try {\n            const video = await MetaData.findOne(postId);\n            if (!video) {\n                res.status(404).json({\n                    message: \"No video found\"\n                });\n            } else {\n                res.status(200).json(video);\n            }\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                message: \"Error retrieving video metadata\"\n            });\n        }\n    // break;\n    }\n// }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkREIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLE1BQ047QUFFQUYsU0FBU0csR0FBRyxDQUFDLGVBQWMsS0FBSztBQUNoQ0gsU0FBU0ksT0FBTyxDQUFDRjtBQUVqQixNQUFNRyxpQkFBaUIsSUFBSUwsU0FBU00sTUFBTSxDQUFDO0lBQ3pDQyxNQUFNQztJQUNOQyxjQUFjQztJQUNkQyxRQUFRSDtJQUNSSSxnQkFBZ0JKO0FBQ2xCO0FBRUEsSUFBSUs7QUFFSixJQUFJO0lBQ0ZBLFdBQVdiLFNBQVNjLEtBQUssQ0FBQztBQUM1QixFQUFFLE9BQU9DLE9BQU87SUFDZEYsV0FBV2IsU0FBU2MsS0FBSyxDQUFDLFlBQVlUO0FBQ3hDO0FBRUEsaUVBQWUsT0FBT1csS0FBS0MsTUFBUTtJQUNqQztJQUNFLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRVgsS0FBQUEsRUFBTUUsYUFBQUEsRUFBY0UsT0FBQUEsRUFBUUMsZUFBQUEsRUFBZ0IsR0FBR0ksSUFBSUcsSUFBSTtRQUMvRCxNQUFNQyxXQUFXLElBQUlQLFNBQVM7WUFDNUJOO1lBQ0FFO1lBQ0FFO1lBQ0FDO1FBQ0Y7UUFDQSxJQUFJO1lBQ0YsTUFBTVEsU0FBU0MsSUFBSTtZQUNuQkosSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFvQztRQUN0RSxFQUFFLE9BQU9ULE9BQU87WUFDZFUsUUFBUVYsS0FBSyxDQUFDLG1DQUFtQ0E7WUFDakRFLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBOEI7UUFDaEU7SUFDQTtJQUNGLE9BRUk7UUFDRixNQUFNYixTQUFTSyxJQUFJVSxLQUFLO1FBQ3hCLElBQUc7WUFDRCxNQUFNQyxRQUFRLE1BQU1kLFNBQVNlLE9BQU8sQ0FBQ2pCO1lBQ3JDLElBQUksQ0FBQ2dCLE9BQU87Z0JBQ1ZWLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVM7Z0JBQWlCO1lBQ25ELE9BQU87Z0JBQ0xQLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNJO1lBQ3ZCO1FBQ0YsRUFBRSxPQUFPWixPQUFPO1lBQ2RVLFFBQVFWLEtBQUssQ0FBRUE7WUFDZkUsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFrQztRQUNwRTtJQUNBO0lBQ0Y7QUFDRjtBQUNGLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL3VwbG9hZERCLmpzPzE2NWUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXG5cbmNvbnN0IHVybCA9XG4nbW9uZ29kYitzcnY6Ly9MaWhpYWQ6TGloaWFkQGxpaGlhZC52a2ZhZGRkLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknO1xuXG5tb25nb29zZS5zZXQoJ3N0cmljdFF1ZXJ5JyxmYWxzZSlcbm1vbmdvb3NlLmNvbm5lY3QodXJsKVxuXG5jb25zdCBtZXRhRGF0YVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB1c2VyOiBTdHJpbmcsXG4gIGRhdGVVcGxvYWRlZDogRGF0ZSxcbiAgcG9zdElkOiBTdHJpbmcsXG4gIGNsb3VkaW5hcnlMaW5rOiBTdHJpbmcsXG59KTtcblxubGV0IE1ldGFEYXRhO1xuXG50cnkge1xuICBNZXRhRGF0YSA9IG1vbmdvb3NlLm1vZGVsKCdNZXRhRGF0YScpO1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgTWV0YURhdGEgPSBtb25nb29zZS5tb2RlbCgnTWV0YURhdGEnLCBtZXRhRGF0YVNjaGVtYSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAvLyBzd2l0Y2ggKHJlcS5tZXRob2QpICB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgY29uc3QgeyB1c2VyLCBkYXRlVXBsb2FkZWQsIHBvc3RJZCwgY2xvdWRpbmFyeUxpbmsgfSA9IHJlcS5ib2R5O1xuICAgICAgY29uc3QgbWV0YWRhdGEgPSBuZXcgTWV0YURhdGEoe1xuICAgICAgICB1c2VyLFxuICAgICAgICBkYXRlVXBsb2FkZWQsXG4gICAgICAgIHBvc3RJZCxcbiAgICAgICAgY2xvdWRpbmFyeUxpbmssXG4gICAgICB9KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG1ldGFkYXRhLnNhdmUoKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnVmlkZW8gbWV0YWRhdGEgc2F2ZWQgc3VjY2Vzc2Z1bGx5JyB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyB2aWRlbyBtZXRhZGF0YTogXCIsIGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3Igc2F2aW5nIHZpZGVvIG1ldGFkYXRhJyB9KTtcbiAgICAgIH1cbiAgICAgIC8vIGJyZWFrO1xuICAgIH0gXG4gICAgLy8gY2FzZSAnR0VUJzpcbiAgICBlbHNle1xuICAgICAgY29uc3QgcG9zdElkID0gcmVxLnF1ZXJ5O1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCB2aWRlbyA9IGF3YWl0IE1ldGFEYXRhLmZpbmRPbmUocG9zdElkKTtcbiAgICAgICAgaWYgKCF2aWRlbykge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ05vIHZpZGVvIGZvdW5kJyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih2aWRlbyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoIGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgcmV0cmlldmluZyB2aWRlbyBtZXRhZGF0YScgfSk7XG4gICAgICB9XG4gICAgICAvLyBicmVhaztcbiAgICB9XG4gIC8vIH1cbn07Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsInVybCIsInNldCIsImNvbm5lY3QiLCJtZXRhRGF0YVNjaGVtYSIsIlNjaGVtYSIsInVzZXIiLCJTdHJpbmciLCJkYXRlVXBsb2FkZWQiLCJEYXRlIiwicG9zdElkIiwiY2xvdWRpbmFyeUxpbmsiLCJNZXRhRGF0YSIsIm1vZGVsIiwiZXJyb3IiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwibWV0YWRhdGEiLCJzYXZlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjb25zb2xlIiwicXVlcnkiLCJ2aWRlbyIsImZpbmRPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/uploadDB.js\n");

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