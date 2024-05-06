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
exports.id = "app/api/user/sent-otp/route";
exports.ids = ["app/api/user/sent-otp/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fsent-otp%2Froute&page=%2Fapi%2Fuser%2Fsent-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fsent-otp%2Froute.js&appDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fsent-otp%2Froute&page=%2Fapi%2Fuser%2Fsent-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fsent-otp%2Froute.js&appDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_monir_Downloads_Compressed_2024_04_03T02_19_56_905Z_Ecommerce_Ecommerce_main_pre_recorded_src_app_api_user_sent_otp_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/user/sent-otp/route.js */ \"(rsc)/./src/app/api/user/sent-otp/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/sent-otp/route\",\n        pathname: \"/api/user/sent-otp\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/sent-otp/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\monir\\\\Downloads\\\\Compressed\\\\2024-04-03T02-19-56.905Z-Ecommerce\\\\Ecommerce\\\\main\\\\pre-recorded\\\\src\\\\app\\\\api\\\\user\\\\sent-otp\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_monir_Downloads_Compressed_2024_04_03T02_19_56_905Z_Ecommerce_Ecommerce_main_pre_recorded_src_app_api_user_sent_otp_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/user/sent-otp/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGc2VudC1vdHAlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVzZXIlMkZzZW50LW90cCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVzZXIlMkZzZW50LW90cCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtb25pciU1Q0Rvd25sb2FkcyU1Q0NvbXByZXNzZWQlNUMyMDI0LTA0LTAzVDAyLTE5LTU2LjkwNVotRWNvbW1lcmNlJTVDRWNvbW1lcmNlJTVDbWFpbiU1Q3ByZS1yZWNvcmRlZCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDbW9uaXIlNUNEb3dubG9hZHMlNUNDb21wcmVzc2VkJTVDMjAyNC0wNC0wM1QwMi0xOS01Ni45MDVaLUVjb21tZXJjZSU1Q0Vjb21tZXJjZSU1Q21haW4lNUNwcmUtcmVjb3JkZWQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDbUc7QUFDaEw7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvP2E5ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbW9uaXJcXFxcRG93bmxvYWRzXFxcXENvbXByZXNzZWRcXFxcMjAyNC0wNC0wM1QwMi0xOS01Ni45MDVaLUVjb21tZXJjZVxcXFxFY29tbWVyY2VcXFxcbWFpblxcXFxwcmUtcmVjb3JkZWRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXNlclxcXFxzZW50LW90cFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlci9zZW50LW90cC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXIvc2VudC1vdHBcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXIvc2VudC1vdHAvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxtb25pclxcXFxEb3dubG9hZHNcXFxcQ29tcHJlc3NlZFxcXFwyMDI0LTA0LTAzVDAyLTE5LTU2LjkwNVotRWNvbW1lcmNlXFxcXEVjb21tZXJjZVxcXFxtYWluXFxcXHByZS1yZWNvcmRlZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1c2VyXFxcXHNlbnQtb3RwXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3VzZXIvc2VudC1vdHAvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fsent-otp%2Froute&page=%2Fapi%2Fuser%2Fsent-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fsent-otp%2Froute.js&appDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/user/sent-otp/route.js":
/*!********************************************!*\
  !*** ./src/app/api/user/sent-otp/route.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utility_EmailUtility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utility/EmailUtility */ \"(rsc)/./src/utility/EmailUtility.js\");\n\n\n\nasync function GET(req, res) {\n    try {\n        const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\n        let { searchParams } = new URL(req.url);\n        let email = searchParams.get(\"email\");\n        let code = Math.floor(100000 + Math.random() * 900000).toString();\n        let EmailText = `Your OTP Code is=${code}`;\n        let EmailSubject = \"Next Ecommerce Verification Code\";\n        await (0,_utility_EmailUtility__WEBPACK_IMPORTED_MODULE_2__.SendEmail)(email, EmailText, EmailSubject);\n        const result = await prisma.users.upsert({\n            where: {\n                email: email\n            },\n            update: {\n                otp: code\n            },\n            create: {\n                email: email,\n                otp: code\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: \"success\",\n            data: result\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: \"fail\",\n            data: e\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2VyL3NlbnQtb3RwL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBQ0U7QUFDTTtBQUMxQyxlQUFlRyxJQUFJQyxHQUFHLEVBQUNDLEdBQUc7SUFDN0IsSUFBSTtRQUVBLE1BQU1DLFNBQU8sSUFBSUwsd0RBQVlBO1FBQzdCLElBQUksRUFBQ00sWUFBWSxFQUFDLEdBQUMsSUFBSUMsSUFBSUosSUFBSUssR0FBRztRQUNsQyxJQUFJQyxRQUFPSCxhQUFhSSxHQUFHLENBQUM7UUFHNUIsSUFBSUMsT0FBSyxLQUFNRSxLQUFLLENBQUMsU0FBT0QsS0FBS0UsTUFBTSxLQUFHLFFBQVNDLFFBQVE7UUFDM0QsSUFBSUMsWUFBVSxDQUFDLGlCQUFpQixFQUFFTCxLQUFLLENBQUM7UUFDeEMsSUFBSU0sZUFBYTtRQUNqQixNQUFNaEIsZ0VBQVNBLENBQUNRLE9BQU1PLFdBQVVDO1FBRWhDLE1BQU1DLFNBQVMsTUFBTWIsT0FBT2MsS0FBSyxDQUFDQyxNQUFNLENBQUM7WUFDckNDLE9BQU87Z0JBQUVaLE9BQU9BO1lBQU07WUFDdEJhLFFBQU87Z0JBQUNDLEtBQUlaO1lBQUk7WUFDaEJhLFFBQVE7Z0JBQUNmLE9BQU1BO2dCQUFNYyxLQUFJWjtZQUFJO1FBQ2pDO1FBR0EsT0FBUVoscURBQVlBLENBQUMwQixJQUFJLENBQUM7WUFBQ0MsUUFBTztZQUFVQyxNQUFLVDtRQUFNO0lBRTNELEVBQUMsT0FBT1UsR0FBRztRQUNQLE9BQVE3QixxREFBWUEsQ0FBQzBCLElBQUksQ0FBQztZQUFDQyxRQUFPO1lBQU9DLE1BQUtDO1FBQUM7SUFDbkQ7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9hcHAvYXBpL3VzZXIvc2VudC1vdHAvcm91dGUuanM/OGRhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRSZXNwb25zZX0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQge1ByaXNtYUNsaWVudH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcbmltcG9ydCB7U2VuZEVtYWlsfSBmcm9tIFwiQC91dGlsaXR5L0VtYWlsVXRpbGl0eVwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEscmVzKXtcbiAgICB0cnkge1xuXG4gICAgICAgIGNvbnN0IHByaXNtYT1uZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgICAgIGxldCB7c2VhcmNoUGFyYW1zfT1uZXcgVVJMKHJlcS51cmwpO1xuICAgICAgICBsZXQgZW1haWw9IHNlYXJjaFBhcmFtcy5nZXQoJ2VtYWlsJyk7XG5cblxuICAgICAgICBsZXQgY29kZT0oTWF0aC5mbG9vcigxMDAwMDArTWF0aC5yYW5kb20oKSo5MDAwMDApKS50b1N0cmluZygpXG4gICAgICAgIGxldCBFbWFpbFRleHQ9YFlvdXIgT1RQIENvZGUgaXM9JHtjb2RlfWBcbiAgICAgICAgbGV0IEVtYWlsU3ViamVjdD1cIk5leHQgRWNvbW1lcmNlIFZlcmlmaWNhdGlvbiBDb2RlXCI7XG4gICAgICAgIGF3YWl0IFNlbmRFbWFpbChlbWFpbCxFbWFpbFRleHQsRW1haWxTdWJqZWN0KTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEudXNlcnMudXBzZXJ0KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBlbWFpbCB9LFxuICAgICAgICAgICAgdXBkYXRlOntvdHA6Y29kZX0sXG4gICAgICAgICAgICBjcmVhdGU6IHtlbWFpbDplbWFpbCxvdHA6Y29kZX1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICByZXR1cm4gIE5leHRSZXNwb25zZS5qc29uKHtzdGF0dXM6XCJzdWNjZXNzXCIsZGF0YTpyZXN1bHR9KVxuXG4gICAgfWNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiAgTmV4dFJlc3BvbnNlLmpzb24oe3N0YXR1czpcImZhaWxcIixkYXRhOmV9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUHJpc21hQ2xpZW50IiwiU2VuZEVtYWlsIiwiR0VUIiwicmVxIiwicmVzIiwicHJpc21hIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwiZW1haWwiLCJnZXQiLCJjb2RlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJFbWFpbFRleHQiLCJFbWFpbFN1YmplY3QiLCJyZXN1bHQiLCJ1c2VycyIsInVwc2VydCIsIndoZXJlIiwidXBkYXRlIiwib3RwIiwiY3JlYXRlIiwianNvbiIsInN0YXR1cyIsImRhdGEiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/user/sent-otp/route.js\n");

/***/ }),

/***/ "(rsc)/./src/utility/EmailUtility.js":
/*!*************************************!*\
  !*** ./src/utility/EmailUtility.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SendEmail: () => (/* binding */ SendEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\nasync function SendEmail(EmailTo, EmailText, EmailSubject) {\n    let Transport = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n        host: \"mail.teamrabbil.com\",\n        port: 25,\n        secure: false,\n        auth: {\n            user: \"info@teamrabbil.com\",\n            pass: \"~sR4[bhaC[Qs\"\n        },\n        tls: {\n            rejectUnauthorized: false\n        }\n    });\n    let MailOption = {\n        from: \"Next Ecommerce <info@teamrabbil.com>\",\n        to: EmailTo,\n        subject: EmailSubject,\n        text: EmailText\n    };\n    return await Transport.sendMail(MailOption);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbGl0eS9FbWFpbFV0aWxpdHkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0M7QUFDN0IsZUFBZUMsVUFBVUMsT0FBTyxFQUFDQyxTQUFTLEVBQUNDLFlBQVk7SUFDM0QsSUFBSUMsWUFBV0wsdURBQTBCLENBQUM7UUFDckNPLE1BQUs7UUFDTEMsTUFBSztRQUNMQyxRQUFPO1FBQ1BDLE1BQUs7WUFBQ0MsTUFBSztZQUF1QkMsTUFBSztRQUFjO1FBQ3JEQyxLQUFJO1lBQUNDLG9CQUFtQjtRQUFLO0lBQ2pDO0lBQ0EsSUFBSUMsYUFBVztRQUNaQyxNQUFLO1FBQ0xDLElBQUdmO1FBQ0hnQixTQUFRZDtRQUNSZSxNQUFLaEI7SUFDUjtJQUNBLE9BQU8sTUFBTUUsVUFBVWUsUUFBUSxDQUFDTDtBQUNwQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy91dGlsaXR5L0VtYWlsVXRpbGl0eS5qcz84NzQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFNlbmRFbWFpbChFbWFpbFRvLEVtYWlsVGV4dCxFbWFpbFN1YmplY3Qpe1xuICAgbGV0IFRyYW5zcG9ydD0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgICBob3N0OlwibWFpbC50ZWFtcmFiYmlsLmNvbVwiLFxuICAgICAgICBwb3J0OjI1LFxuICAgICAgICBzZWN1cmU6ZmFsc2UsXG4gICAgICAgIGF1dGg6e3VzZXI6XCJpbmZvQHRlYW1yYWJiaWwuY29tXCIsIHBhc3M6XCJ+c1I0W2JoYUNbUXNcIn0sXG4gICAgICAgIHRsczp7cmVqZWN0VW5hdXRob3JpemVkOmZhbHNlfVxuICAgIH0pXG4gICAgbGV0IE1haWxPcHRpb249e1xuICAgICAgIGZyb206XCJOZXh0IEVjb21tZXJjZSA8aW5mb0B0ZWFtcmFiYmlsLmNvbT5cIixcbiAgICAgICB0bzpFbWFpbFRvLFxuICAgICAgIHN1YmplY3Q6RW1haWxTdWJqZWN0LFxuICAgICAgIHRleHQ6RW1haWxUZXh0XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCBUcmFuc3BvcnQuc2VuZE1haWwoTWFpbE9wdGlvbilcbn1cbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwiU2VuZEVtYWlsIiwiRW1haWxUbyIsIkVtYWlsVGV4dCIsIkVtYWlsU3ViamVjdCIsIlRyYW5zcG9ydCIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwidGxzIiwicmVqZWN0VW5hdXRob3JpemVkIiwiTWFpbE9wdGlvbiIsImZyb20iLCJ0byIsInN1YmplY3QiLCJ0ZXh0Iiwic2VuZE1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utility/EmailUtility.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fsent-otp%2Froute&page=%2Fapi%2Fuser%2Fsent-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fsent-otp%2Froute.js&appDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();