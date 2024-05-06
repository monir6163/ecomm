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
exports.id = "app/api/user/verify-otp/route";
exports.ids = ["app/api/user/verify-otp/route"];
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

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:events");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fverify-otp%2Froute&page=%2Fapi%2Fuser%2Fverify-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fverify-otp%2Froute.js&appDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fverify-otp%2Froute&page=%2Fapi%2Fuser%2Fverify-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fverify-otp%2Froute.js&appDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_monir_Downloads_Compressed_2024_04_03T02_19_56_905Z_Ecommerce_Ecommerce_main_pre_recorded_src_app_api_user_verify_otp_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/user/verify-otp/route.js */ \"(rsc)/./src/app/api/user/verify-otp/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/verify-otp/route\",\n        pathname: \"/api/user/verify-otp\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/verify-otp/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\monir\\\\Downloads\\\\Compressed\\\\2024-04-03T02-19-56.905Z-Ecommerce\\\\Ecommerce\\\\main\\\\pre-recorded\\\\src\\\\app\\\\api\\\\user\\\\verify-otp\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_monir_Downloads_Compressed_2024_04_03T02_19_56_905Z_Ecommerce_Ecommerce_main_pre_recorded_src_app_api_user_verify_otp_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/user/verify-otp/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGdmVyaWZ5LW90cCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlciUyRnZlcmlmeS1vdHAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VyJTJGdmVyaWZ5LW90cCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtb25pciU1Q0Rvd25sb2FkcyU1Q0NvbXByZXNzZWQlNUMyMDI0LTA0LTAzVDAyLTE5LTU2LjkwNVotRWNvbW1lcmNlJTVDRWNvbW1lcmNlJTVDbWFpbiU1Q3ByZS1yZWNvcmRlZCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDbW9uaXIlNUNEb3dubG9hZHMlNUNDb21wcmVzc2VkJTVDMjAyNC0wNC0wM1QwMi0xOS01Ni45MDVaLUVjb21tZXJjZSU1Q0Vjb21tZXJjZSU1Q21haW4lNUNwcmUtcmVjb3JkZWQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDcUc7QUFDbEw7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvPzM0YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbW9uaXJcXFxcRG93bmxvYWRzXFxcXENvbXByZXNzZWRcXFxcMjAyNC0wNC0wM1QwMi0xOS01Ni45MDVaLUVjb21tZXJjZVxcXFxFY29tbWVyY2VcXFxcbWFpblxcXFxwcmUtcmVjb3JkZWRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXNlclxcXFx2ZXJpZnktb3RwXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2VyL3ZlcmlmeS1vdHAvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2VyL3ZlcmlmeS1vdHBcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXIvdmVyaWZ5LW90cC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXG1vbmlyXFxcXERvd25sb2Fkc1xcXFxDb21wcmVzc2VkXFxcXDIwMjQtMDQtMDNUMDItMTktNTYuOTA1Wi1FY29tbWVyY2VcXFxcRWNvbW1lcmNlXFxcXG1haW5cXFxccHJlLXJlY29yZGVkXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJcXFxcdmVyaWZ5LW90cFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS91c2VyL3ZlcmlmeS1vdHAvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fverify-otp%2Froute&page=%2Fapi%2Fuser%2Fverify-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fverify-otp%2Froute.js&appDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/user/verify-otp/route.js":
/*!**********************************************!*\
  !*** ./src/app/api/user/verify-otp/route.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utility_JWTTokenHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utility/JWTTokenHelper */ \"(rsc)/./src/utility/JWTTokenHelper.js\");\n\n\n\nasync function POST(req, res) {\n    try {\n        let reqBody = await req.json();\n        const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\n        const result = await prisma.users.findMany({\n            where: reqBody\n        });\n        if (result.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                status: \"fail\",\n                data: \"Invalid Verification Code\"\n            });\n        } else {\n            await prisma.users.update({\n                where: {\n                    email: reqBody[\"email\"]\n                },\n                data: {\n                    otp: \"0\"\n                }\n            });\n            let token = await (0,_utility_JWTTokenHelper__WEBPACK_IMPORTED_MODULE_2__.CreateToken)(result[0][\"email\"], result[0][\"id\"]);\n            let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);\n            const cookieString = `token=${token}; expires=${expireDuration.toUTCString()} ;path=/`;\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                status: \"success\",\n                data: token\n            }, {\n                status: 200,\n                headers: {\n                    \"set-cookie\": cookieString\n                }\n            });\n        }\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: \"fail\",\n            data: e\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2VyL3ZlcmlmeS1vdHAvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFDRTtBQUNVO0FBSTlDLGVBQWVHLEtBQUtDLEdBQUcsRUFBQ0MsR0FBRztJQUM5QixJQUFHO1FBQ0MsSUFBSUMsVUFBUSxNQUFNRixJQUFJRyxJQUFJO1FBQzFCLE1BQU1DLFNBQU8sSUFBSVAsd0RBQVlBO1FBQzdCLE1BQU1RLFNBQU8sTUFBTUQsT0FBT0UsS0FBSyxDQUFDQyxRQUFRLENBQUM7WUFBQ0MsT0FBTU47UUFBTztRQUN2RCxJQUFHRyxPQUFPSSxNQUFNLEtBQUcsR0FBRTtZQUNqQixPQUFRYixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFDTyxRQUFPO2dCQUFPQyxNQUFLO1lBQTJCO1FBQzdFLE9BQ0k7WUFDQSxNQUFNUCxPQUFPRSxLQUFLLENBQUNNLE1BQU0sQ0FBQztnQkFDdEJKLE9BQU87b0JBQUVLLE9BQU9YLE9BQU8sQ0FBQyxRQUFRO2dCQUFDO2dCQUNqQ1MsTUFBSztvQkFBQ0csS0FBSTtnQkFBRztZQUNqQjtZQUNBLElBQUlDLFFBQU0sTUFBTWpCLG9FQUFXQSxDQUFDTyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQ0EsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQzlELElBQUlXLGlCQUFlLElBQUlDLEtBQUtBLEtBQUtDLEdBQUcsS0FBSyxLQUFHLEtBQUcsS0FBRztZQUNsRCxNQUFNQyxlQUFhLENBQUMsTUFBTSxFQUFFSixNQUFNLFVBQVUsRUFBRUMsZUFBZUksV0FBVyxHQUFHLFFBQVEsQ0FBQztZQUNwRixPQUFReEIscURBQVlBLENBQUNPLElBQUksQ0FBQztnQkFBQ08sUUFBTztnQkFBVUMsTUFBS0k7WUFBSyxHQUFFO2dCQUFDTCxRQUFPO2dCQUFJVyxTQUFRO29CQUFDLGNBQWFGO2dCQUFZO1lBQUM7UUFDM0c7SUFDSixFQUNBLE9BQU9HLEdBQUc7UUFDTixPQUFRMUIscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFDTyxRQUFPO1lBQU9DLE1BQUtXO1FBQUM7SUFDbkQ7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9hcHAvYXBpL3VzZXIvdmVyaWZ5LW90cC9yb3V0ZS5qcz8zNDgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dFJlc3BvbnNlfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7UHJpc21hQ2xpZW50fSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IHtDcmVhdGVUb2tlbn0gZnJvbSBcIkAvdXRpbGl0eS9KV1RUb2tlbkhlbHBlclwiO1xuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxLHJlcykge1xuICAgIHRyeXtcbiAgICAgICAgbGV0IHJlcUJvZHk9YXdhaXQgcmVxLmpzb24oKTtcbiAgICAgICAgY29uc3QgcHJpc21hPW5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0PWF3YWl0IHByaXNtYS51c2Vycy5maW5kTWFueSh7d2hlcmU6cmVxQm9keX0pXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGg9PT0wKXtcbiAgICAgICAgICAgIHJldHVybiAgTmV4dFJlc3BvbnNlLmpzb24oe3N0YXR1czpcImZhaWxcIixkYXRhOlwiSW52YWxpZCBWZXJpZmljYXRpb24gQ29kZVwifSlcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYXdhaXQgcHJpc21hLnVzZXJzLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgZW1haWw6IHJlcUJvZHlbJ2VtYWlsJ10gfSxcbiAgICAgICAgICAgICAgICBkYXRhOntvdHA6XCIwXCJ9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCB0b2tlbj1hd2FpdCBDcmVhdGVUb2tlbihyZXN1bHRbMF1bJ2VtYWlsJ10scmVzdWx0WzBdWydpZCddKTtcbiAgICAgICAgICAgIGxldCBleHBpcmVEdXJhdGlvbj1uZXcgRGF0ZShEYXRlLm5vdygpICsgMjQqNjAqNjAqMTAwMCApO1xuICAgICAgICAgICAgY29uc3QgY29va2llU3RyaW5nPWB0b2tlbj0ke3Rva2VufTsgZXhwaXJlcz0ke2V4cGlyZUR1cmF0aW9uLnRvVVRDU3RyaW5nKCl9IDtwYXRoPS9gO1xuICAgICAgICAgICAgcmV0dXJuICBOZXh0UmVzcG9uc2UuanNvbih7c3RhdHVzOlwic3VjY2Vzc1wiLGRhdGE6dG9rZW59LHtzdGF0dXM6MjAwLGhlYWRlcnM6eydzZXQtY29va2llJzpjb29raWVTdHJpbmd9fSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gIE5leHRSZXNwb25zZS5qc29uKHtzdGF0dXM6XCJmYWlsXCIsZGF0YTplfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlByaXNtYUNsaWVudCIsIkNyZWF0ZVRva2VuIiwiUE9TVCIsInJlcSIsInJlcyIsInJlcUJvZHkiLCJqc29uIiwicHJpc21hIiwicmVzdWx0IiwidXNlcnMiLCJmaW5kTWFueSIsIndoZXJlIiwibGVuZ3RoIiwic3RhdHVzIiwiZGF0YSIsInVwZGF0ZSIsImVtYWlsIiwib3RwIiwidG9rZW4iLCJleHBpcmVEdXJhdGlvbiIsIkRhdGUiLCJub3ciLCJjb29raWVTdHJpbmciLCJ0b1VUQ1N0cmluZyIsImhlYWRlcnMiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/user/verify-otp/route.js\n");

/***/ }),

/***/ "(rsc)/./src/utility/JWTTokenHelper.js":
/*!***************************************!*\
  !*** ./src/utility/JWTTokenHelper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateToken: () => (/* binding */ CreateToken),\n/* harmony export */   VerifyToken: () => (/* binding */ VerifyToken)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/index.js\");\n\nasync function CreateToken(email, id) {\n    const secret = new TextEncoder().encode(process.env.JWT_SECRET);\n    const Payload = {\n        email: email,\n        id: id\n    };\n    let token = await new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT(Payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setIssuer(process.env.JWT_ISSUER).setExpirationTime(process.env.JWT_EXPIRATION_TIME).sign(secret);\n    return token;\n}\nasync function VerifyToken(token) {\n    const secret = new TextEncoder().encode(process.env.JWT_SECRET);\n    const decoded = await (0,jose__WEBPACK_IMPORTED_MODULE_0__.jwtVerify)(token, secret);\n    return decoded[\"payload\"];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbGl0eS9KV1RUb2tlbkhlbHBlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFFaEMsZUFBZUUsWUFBWUMsS0FBSyxFQUFDQyxFQUFFO0lBQ3RDLE1BQU1DLFNBQU8sSUFBSUMsY0FBY0MsTUFBTSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7SUFDNUQsTUFBTUMsVUFBUTtRQUFDUixPQUFNQTtRQUFNQyxJQUFHQTtJQUFFO0lBQ2hDLElBQUlRLFFBQU8sTUFBTSxJQUFJWCx5Q0FBT0EsQ0FBQ1UsU0FDeEJFLGtCQUFrQixDQUFDO1FBQUNDLEtBQUk7SUFBTyxHQUMvQkMsV0FBVyxHQUNYQyxTQUFTLENBQUNSLFFBQVFDLEdBQUcsQ0FBQ1EsVUFBVSxFQUNoQ0MsaUJBQWlCLENBQUNWLFFBQVFDLEdBQUcsQ0FBQ1UsbUJBQW1CLEVBQ2pEQyxJQUFJLENBQUNmO0lBQ1YsT0FBT087QUFDWDtBQUVPLGVBQWVTLFlBQVlULEtBQUs7SUFDbkMsTUFBTVAsU0FBTyxJQUFJQyxjQUFjQyxNQUFNLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUM1RCxNQUFNWSxVQUFTLE1BQU10QiwrQ0FBU0EsQ0FBQ1ksT0FBTVA7SUFDckMsT0FBT2lCLE9BQU8sQ0FBQyxVQUFVO0FBQzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3V0aWxpdHkvSldUVG9rZW5IZWxwZXIuanM/YjY2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2p3dFZlcmlmeSxTaWduSldUfSBmcm9tIFwiam9zZVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ3JlYXRlVG9rZW4oZW1haWwsaWQpe1xuICAgIGNvbnN0IHNlY3JldD1uZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCk7XG4gICAgY29uc3QgUGF5bG9hZD17ZW1haWw6ZW1haWwsaWQ6aWR9O1xuICAgIGxldCB0b2tlbj0gYXdhaXQgbmV3IFNpZ25KV1QoUGF5bG9hZClcbiAgICAgICAgLnNldFByb3RlY3RlZEhlYWRlcih7YWxnOidIUzI1Nid9KVxuICAgICAgICAuc2V0SXNzdWVkQXQoKVxuICAgICAgICAuc2V0SXNzdWVyKHByb2Nlc3MuZW52LkpXVF9JU1NVRVIpXG4gICAgICAgIC5zZXRFeHBpcmF0aW9uVGltZShwcm9jZXNzLmVudi5KV1RfRVhQSVJBVElPTl9USU1FKVxuICAgICAgICAuc2lnbihzZWNyZXQpXG4gICAgcmV0dXJuIHRva2VuO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gVmVyaWZ5VG9rZW4odG9rZW4pe1xuICAgIGNvbnN0IHNlY3JldD1uZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCk7XG4gICAgY29uc3QgZGVjb2RlZCA9YXdhaXQgand0VmVyaWZ5KHRva2VuLHNlY3JldClcbiAgICByZXR1cm4gZGVjb2RlZFsncGF5bG9hZCddO1xufVxuXG5cbiJdLCJuYW1lcyI6WyJqd3RWZXJpZnkiLCJTaWduSldUIiwiQ3JlYXRlVG9rZW4iLCJlbWFpbCIsImlkIiwic2VjcmV0IiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsIlBheWxvYWQiLCJ0b2tlbiIsInNldFByb3RlY3RlZEhlYWRlciIsImFsZyIsInNldElzc3VlZEF0Iiwic2V0SXNzdWVyIiwiSldUX0lTU1VFUiIsInNldEV4cGlyYXRpb25UaW1lIiwiSldUX0VYUElSQVRJT05fVElNRSIsInNpZ24iLCJWZXJpZnlUb2tlbiIsImRlY29kZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utility/JWTTokenHelper.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fverify-otp%2Froute&page=%2Fapi%2Fuser%2Fverify-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fverify-otp%2Froute.js&appDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmonir%5CDownloads%5CCompressed%5C2024-04-03T02-19-56.905Z-Ecommerce%5CEcommerce%5Cmain%5Cpre-recorded&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();