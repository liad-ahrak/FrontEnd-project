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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst url = \"mongodb+srv://Lihiad:Lihiad@lihiad.vkfaddd.mongodb.net/?retryWrites=true&w=majority\";\nmongoose.set(\"strictQuery\", false);\nmongoose.connect(url);\nconst videoSchema = new mongoose.Schema({\n    user: String,\n    dateUploaded: Date,\n    postId: String,\n    cloudinaryLink: String\n});\nlet Video;\ntry {\n    Video = mongoose.model(\"Video\");\n} catch (error) {\n    Video = mongoose.model(\"Video\", videoSchema);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    switch(req.method){\n        case \"POST\":\n            {\n                const { user , dateUploaded , postId , cloudinaryLink  } = req.body;\n                const video = new Video({\n                    user,\n                    dateUploaded,\n                    postId,\n                    cloudinaryLink\n                });\n                try {\n                    await video.save();\n                    res.status(200).json({\n                        message: \"Video metadata saved successfully\"\n                    });\n                } catch (error) {\n                    console.error(\"Error creating video metadata: \", error);\n                    res.status(500).json({\n                        message: \"Error saving video metadata\"\n                    });\n                }\n                break;\n            }\n        case \"GET\":\n            {\n                const postId = req.query;\n                try {\n                    const video = await Video.findOne(postId);\n                    if (!video) {\n                        res.status(404).json({\n                            message: \"No video found\"\n                        });\n                    } else {\n                        res.status(200).json(video);\n                    }\n                } catch (error) {\n                    console.error(error);\n                    res.status(500).json({\n                        message: \"Error retrieving video metadata\"\n                    });\n                }\n                break;\n            }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkREIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLE1BQ047QUFFQUYsU0FBU0csR0FBRyxDQUFDLGVBQWMsS0FBSztBQUNoQ0gsU0FBU0ksT0FBTyxDQUFDRjtBQUVqQixNQUFNRyxjQUFjLElBQUlMLFNBQVNNLE1BQU0sQ0FBQztJQUN0Q0MsTUFBTUM7SUFDTkMsY0FBY0M7SUFDZEMsUUFBUUg7SUFDUkksZ0JBQWdCSjtBQUNsQjtBQUVBLElBQUlLO0FBRUosSUFBSTtJQUNGQSxRQUFRYixTQUFTYyxLQUFLLENBQUM7QUFDekIsRUFBRSxPQUFPQyxPQUFPO0lBQ2RGLFFBQVFiLFNBQVNjLEtBQUssQ0FBQyxTQUFTVDtBQUNsQztBQUVBLGlFQUFlLE9BQU9XLEtBQUtDLE1BQVE7SUFDakMsT0FBUUQsSUFBSUUsTUFBTTtRQUNoQixLQUFLO1lBQVE7Z0JBQ1gsTUFBTSxFQUFFWCxLQUFBQSxFQUFNRSxhQUFBQSxFQUFjRSxPQUFBQSxFQUFRQyxlQUFBQSxFQUFnQixHQUFHSSxJQUFJRyxJQUFJO2dCQUUvRCxNQUFNQyxRQUFRLElBQUlQLE1BQU07b0JBQ3RCTjtvQkFDQUU7b0JBQ0FFO29CQUNBQztnQkFDRjtnQkFFQSxJQUFJO29CQUNGLE1BQU1RLE1BQU1DLElBQUk7b0JBQ2hCSixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFFQyxTQUFTO29CQUFvQztnQkFDdEUsRUFBRSxPQUFPVCxPQUFPO29CQUNkVSxRQUFRVixLQUFLLENBQUMsbUNBQW1DQTtvQkFDakRFLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7d0JBQUVDLFNBQVM7b0JBQThCO2dCQUNoRTtnQkFDQTtZQUNGO1FBQ0EsS0FBSztZQUFNO2dCQUNULE1BQU1iLFNBQVNLLElBQUlVLEtBQUs7Z0JBQ3hCLElBQUc7b0JBQ0QsTUFBTU4sUUFBUSxNQUFNUCxNQUFNYyxPQUFPLENBQUNoQjtvQkFDbEMsSUFBSSxDQUFDUyxPQUFPO3dCQUNWSCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDOzRCQUFFQyxTQUFTO3dCQUFpQjtvQkFDbkQsT0FBTzt3QkFDTFAsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7b0JBQ3ZCO2dCQUNGLEVBQUUsT0FBT0wsT0FBTztvQkFDZFUsUUFBUVYsS0FBSyxDQUFFQTtvQkFDZkUsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQzt3QkFBRUMsU0FBUztvQkFBa0M7Z0JBQ3BFO2dCQUNBO1lBQ0Y7SUFBQztBQUVMLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL3VwbG9hZERCLmpzPzE2NWUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCB1cmwgPVxyXG4nbW9uZ29kYitzcnY6Ly9MaWhpYWQ6TGloaWFkQGxpaGlhZC52a2ZhZGRkLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknO1xyXG5cclxubW9uZ29vc2Uuc2V0KCdzdHJpY3RRdWVyeScsZmFsc2UpXHJcbm1vbmdvb3NlLmNvbm5lY3QodXJsKVxyXG5cclxuY29uc3QgdmlkZW9TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VyOiBTdHJpbmcsXHJcbiAgZGF0ZVVwbG9hZGVkOiBEYXRlLFxyXG4gIHBvc3RJZDogU3RyaW5nLFxyXG4gIGNsb3VkaW5hcnlMaW5rOiBTdHJpbmcsXHJcbn0pO1xyXG5cclxubGV0IFZpZGVvO1xyXG5cclxudHJ5IHtcclxuICBWaWRlbyA9IG1vbmdvb3NlLm1vZGVsKCdWaWRlbycpO1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gIFZpZGVvID0gbW9uZ29vc2UubW9kZWwoJ1ZpZGVvJywgdmlkZW9TY2hlbWEpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBzd2l0Y2ggKHJlcS5tZXRob2QpICB7XHJcbiAgICBjYXNlICdQT1NUJzoge1xyXG4gICAgICBjb25zdCB7IHVzZXIsIGRhdGVVcGxvYWRlZCwgcG9zdElkLCBjbG91ZGluYXJ5TGluayB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICBjb25zdCB2aWRlbyA9IG5ldyBWaWRlbyh7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBkYXRlVXBsb2FkZWQsXHJcbiAgICAgICAgcG9zdElkLFxyXG4gICAgICAgIGNsb3VkaW5hcnlMaW5rLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgdmlkZW8uc2F2ZSgpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ1ZpZGVvIG1ldGFkYXRhIHNhdmVkIHN1Y2Nlc3NmdWxseScgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHZpZGVvIG1ldGFkYXRhOiBcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIHNhdmluZyB2aWRlbyBtZXRhZGF0YScgfSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICB9IFxyXG4gICAgY2FzZSAnR0VUJzp7XHJcbiAgICAgIGNvbnN0IHBvc3RJZCA9IHJlcS5xdWVyeTtcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gYXdhaXQgVmlkZW8uZmluZE9uZShwb3N0SWQpO1xyXG4gICAgICAgIGlmICghdmlkZW8pIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ05vIHZpZGVvIGZvdW5kJyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odmlkZW8pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCBlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgcmV0cmlldmluZyB2aWRlbyBtZXRhZGF0YScgfSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJ1cmwiLCJzZXQiLCJjb25uZWN0IiwidmlkZW9TY2hlbWEiLCJTY2hlbWEiLCJ1c2VyIiwiU3RyaW5nIiwiZGF0ZVVwbG9hZGVkIiwiRGF0ZSIsInBvc3RJZCIsImNsb3VkaW5hcnlMaW5rIiwiVmlkZW8iLCJtb2RlbCIsImVycm9yIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9keSIsInZpZGVvIiwic2F2ZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY29uc29sZSIsInF1ZXJ5IiwiZmluZE9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/uploadDB.js\n");

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