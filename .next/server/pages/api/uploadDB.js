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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst url = \"mongodb+srv://Lihiad:Lihiad@lihiad.vkfaddd.mongodb.net/?retryWrites=true&w=majority\";\nmongoose.set(\"strictQuery\", false);\nmongoose.connect(url);\nconst metaDataSchema = new mongoose.Schema({\n    user: String,\n    dateUploaded: Date,\n    postId: String,\n    cloudinaryLink: String\n});\nlet MetaData;\ntry {\n    MetaData = mongoose.model(\"MetaData\");\n} catch (error) {\n    MetaData = mongoose.model(\"MetaData\", metaDataSchema);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    // switch (req.method)  {\n    if (req.method === \"POST\") {\n        const { user , dateUploaded , postId , cloudinaryLink  } = req.body;\n        const metadata = new MetaData({\n            user,\n            dateUploaded,\n            postId,\n            cloudinaryLink\n        });\n        try {\n            await metadata.save();\n            res.status(200).json({\n                message: \"Video metadata saved successfully\"\n            });\n        } catch (error) {\n            console.error(\"Error creating video metadata: \", error);\n            res.status(500).json({\n                message: \"Error saving video metadata\"\n            });\n        }\n    // break;\n    } else {\n        const postId = req.query;\n        try {\n            const video = await MetaData.findOne(postId);\n            if (!video) {\n                res.status(404).json({\n                    message: \"No video found\"\n                });\n            } else {\n                res.status(200).json(video);\n            }\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                message: \"Error retrieving video metadata\"\n            });\n        }\n    // break;\n    }\n// }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkREIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLE1BQ047QUFFQUYsU0FBU0csR0FBRyxDQUFDLGVBQWMsS0FBSztBQUNoQ0gsU0FBU0ksT0FBTyxDQUFDRjtBQUVqQixNQUFNRyxpQkFBaUIsSUFBSUwsU0FBU00sTUFBTSxDQUFDO0lBQ3pDQyxNQUFNQztJQUNOQyxjQUFjQztJQUNkQyxRQUFRSDtJQUNSSSxnQkFBZ0JKO0FBQ2xCO0FBRUEsSUFBSUs7QUFFSixJQUFJO0lBQ0ZBLFdBQVdiLFNBQVNjLEtBQUssQ0FBQztBQUM1QixFQUFFLE9BQU9DLE9BQU87SUFDZEYsV0FBV2IsU0FBU2MsS0FBSyxDQUFDLFlBQVlUO0FBQ3hDO0FBRUEsaUVBQWUsT0FBT1csS0FBS0MsTUFBUTtJQUNqQztJQUNFLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRVgsS0FBQUEsRUFBTUUsYUFBQUEsRUFBY0UsT0FBQUEsRUFBUUMsZUFBQUEsRUFBZ0IsR0FBR0ksSUFBSUcsSUFBSTtRQUMvRCxNQUFNQyxXQUFXLElBQUlQLFNBQVM7WUFDNUJOO1lBQ0FFO1lBQ0FFO1lBQ0FDO1FBQ0Y7UUFDQSxJQUFJO1lBQ0YsTUFBTVEsU0FBU0MsSUFBSTtZQUNuQkosSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFvQztRQUN0RSxFQUFFLE9BQU9ULE9BQU87WUFDZFUsUUFBUVYsS0FBSyxDQUFDLG1DQUFtQ0E7WUFDakRFLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBOEI7UUFDaEU7SUFDQTtJQUNGLE9BRUk7UUFDRixNQUFNYixTQUFTSyxJQUFJVSxLQUFLO1FBQ3hCLElBQUc7WUFDRCxNQUFNQyxRQUFRLE1BQU1kLFNBQVNlLE9BQU8sQ0FBQ2pCO1lBQ3JDLElBQUksQ0FBQ2dCLE9BQU87Z0JBQ1ZWLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVM7Z0JBQWlCO1lBQ25ELE9BQU87Z0JBQ0xQLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNJO1lBQ3ZCO1FBQ0YsRUFBRSxPQUFPWixPQUFPO1lBQ2RVLFFBQVFWLEtBQUssQ0FBRUE7WUFDZkUsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFrQztRQUNwRTtJQUNBO0lBQ0Y7QUFDRjtBQUNGLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL3VwbG9hZERCLmpzPzE2NWUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCB1cmwgPVxyXG4nbW9uZ29kYitzcnY6Ly9MaWhpYWQ6TGloaWFkQGxpaGlhZC52a2ZhZGRkLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknO1xyXG5cclxubW9uZ29vc2Uuc2V0KCdzdHJpY3RRdWVyeScsZmFsc2UpXHJcbm1vbmdvb3NlLmNvbm5lY3QodXJsKVxyXG5cclxuY29uc3QgbWV0YURhdGFTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VyOiBTdHJpbmcsXHJcbiAgZGF0ZVVwbG9hZGVkOiBEYXRlLFxyXG4gIHBvc3RJZDogU3RyaW5nLFxyXG4gIGNsb3VkaW5hcnlMaW5rOiBTdHJpbmcsXHJcbn0pO1xyXG5cclxubGV0IE1ldGFEYXRhO1xyXG5cclxudHJ5IHtcclxuICBNZXRhRGF0YSA9IG1vbmdvb3NlLm1vZGVsKCdNZXRhRGF0YScpO1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gIE1ldGFEYXRhID0gbW9uZ29vc2UubW9kZWwoJ01ldGFEYXRhJywgbWV0YURhdGFTY2hlbWEpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAvLyBzd2l0Y2ggKHJlcS5tZXRob2QpICB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgIGNvbnN0IHsgdXNlciwgZGF0ZVVwbG9hZGVkLCBwb3N0SWQsIGNsb3VkaW5hcnlMaW5rIH0gPSByZXEuYm9keTtcclxuICAgICAgY29uc3QgbWV0YWRhdGEgPSBuZXcgTWV0YURhdGEoe1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgZGF0ZVVwbG9hZGVkLFxyXG4gICAgICAgIHBvc3RJZCxcclxuICAgICAgICBjbG91ZGluYXJ5TGluayxcclxuICAgICAgfSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgbWV0YWRhdGEuc2F2ZSgpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ1ZpZGVvIG1ldGFkYXRhIHNhdmVkIHN1Y2Nlc3NmdWxseScgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHZpZGVvIG1ldGFkYXRhOiBcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIHNhdmluZyB2aWRlbyBtZXRhZGF0YScgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gYnJlYWs7XHJcbiAgICB9IFxyXG4gICAgLy8gY2FzZSAnR0VUJzpcclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbnN0IHBvc3RJZCA9IHJlcS5xdWVyeTtcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gYXdhaXQgTWV0YURhdGEuZmluZE9uZShwb3N0SWQpO1xyXG4gICAgICAgIGlmICghdmlkZW8pIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ05vIHZpZGVvIGZvdW5kJyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odmlkZW8pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCBlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgcmV0cmlldmluZyB2aWRlbyBtZXRhZGF0YScgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gYnJlYWs7XHJcbiAgICB9XHJcbiAgLy8gfVxyXG59OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJ1cmwiLCJzZXQiLCJjb25uZWN0IiwibWV0YURhdGFTY2hlbWEiLCJTY2hlbWEiLCJ1c2VyIiwiU3RyaW5nIiwiZGF0ZVVwbG9hZGVkIiwiRGF0ZSIsInBvc3RJZCIsImNsb3VkaW5hcnlMaW5rIiwiTWV0YURhdGEiLCJtb2RlbCIsImVycm9yIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9keSIsIm1ldGFkYXRhIiwic2F2ZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY29uc29sZSIsInF1ZXJ5IiwidmlkZW8iLCJmaW5kT25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/uploadDB.js\n");

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