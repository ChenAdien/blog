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
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./styles/Post.module.css":
/*!********************************!*\
  !*** ./styles/Post.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"article\": \"Post_article__gQvsm\",\n\t\"article-nav\": \"Post_article-nav__1lbI_\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvUG9zdC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLy4vc3R5bGVzL1Bvc3QubW9kdWxlLmNzcz9lNWYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFydGljbGVcIjogXCJQb3N0X2FydGljbGVfX2dRdnNtXCIsXG5cdFwiYXJ0aWNsZS1uYXZcIjogXCJQb3N0X2FydGljbGUtbmF2X18xbGJJX1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Post.module.css\n");

/***/ }),

/***/ "./api/getPosts.ts":
/*!*************************!*\
  !*** ./api/getPosts.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPostByName\": () => (/* binding */ getPostByName),\n/* harmony export */   \"getPostNames\": () => (/* binding */ getPostNames),\n/* harmony export */   \"postsInfo\": () => (/* binding */ postsInfo)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst postsDir = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), \"./pages/posts\");\nconst postsName = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDir).filter((fileName)=>fileName.endsWith(\".md\"));\nfunction getPostsInfo(_path) {\n    const info = gray_matter__WEBPACK_IMPORTED_MODULE_2___default().read(_path);\n    return {\n        ...info,\n        filename: path__WEBPACK_IMPORTED_MODULE_1___default().basename(_path),\n        content: \"\"\n    };\n}\nconst postsInfo = postsName.map((name)=>{\n    return getPostsInfo(path__WEBPACK_IMPORTED_MODULE_1___default().resolve(postsDir, \"./\", name));\n});\nfunction getPostNames() {\n    const postsFile = postsName.map((name)=>{\n        return {\n            name\n        };\n    });\n    return postsFile;\n}\nfunction getPostByName(name) {\n    const postsFile = postsName.filter((_name)=>_name === name).map((name)=>{\n        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default().read(path__WEBPACK_IMPORTED_MODULE_1___default().resolve(postsDir, \"./\", name));\n        const content = matterResult.content;\n        return {\n            name,\n            data: matterResult.data,\n            content\n        };\n    })?.[0];\n    return postsFile;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvZ2V0UG9zdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1CO0FBQ0s7QUFDUTtBQUNoQyxNQUFNRyxXQUFXRixtREFBWSxDQUFDSSxRQUFRQyxHQUFHLElBQUk7QUFDN0MsTUFBTUMsWUFBWVAscURBQWMsQ0FBQ0csVUFBVU0sTUFBTSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLFFBQVEsQ0FBQztBQUNsRixTQUFTQyxhQUFhQyxLQUFZLEVBQUM7SUFDakMsTUFBTUMsT0FBT1osdURBQVcsQ0FBQ1c7SUFDekIsT0FBTztRQUFDLEdBQUdDLElBQUk7UUFBQ0UsVUFBU2Ysb0RBQWEsQ0FBQ1k7UUFBT0ssU0FBUTtJQUFFO0FBQzFEO0FBQ08sTUFBTUMsWUFBV1osVUFBVWEsR0FBRyxDQUFFQyxDQUFBQSxPQUFNO0lBQzNDLE9BQU9ULGFBQWFYLG1EQUFZLENBQUNFLFVBQVMsTUFBS2tCO0FBQ2pELEdBQUc7QUFDSSxTQUFTQyxlQUFlO0lBQzdCLE1BQU1DLFlBQVloQixVQUFVYSxHQUFHLENBQUNDLENBQUFBLE9BQVE7UUFDdEMsT0FBTztZQUNMQTtRQUNGO0lBQ0Y7SUFDQSxPQUFPRTtBQUNULENBQUM7QUFDTSxTQUFTQyxjQUFjSCxJQUFZLEVBQUU7SUFDMUMsTUFBTUUsWUFBWWhCLFVBQVVFLE1BQU0sQ0FBQ2dCLENBQUFBLFFBQVNBLFVBQVVKLE1BQU1ELEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUTtRQUN0RSxNQUFNSyxlQUFleEIsdURBQVcsQ0FBQ0QsbURBQVksQ0FBQ0UsVUFBVSxNQUFNa0I7UUFDOUQsTUFBTUgsVUFBVVEsYUFBYVIsT0FBTztRQUNwQyxPQUFPO1lBQ0xHO1lBQ0FNLE1BQUtELGFBQWFDLElBQUk7WUFDdEJUO1FBQ0Y7SUFDRixJQUFJLENBQUMsRUFBRTtJQUNQLE9BQU9LO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9hcGkvZ2V0UG9zdHMudHM/Njg1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXG5jb25zdCBwb3N0c0RpciA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLi9wYWdlcy9wb3N0cycpXG5jb25zdCBwb3N0c05hbWUgPSBmcy5yZWFkZGlyU3luYyhwb3N0c0RpcikuZmlsdGVyKChmaWxlTmFtZSkgPT4gZmlsZU5hbWUuZW5kc1dpdGgoJy5tZCcpKVxuZnVuY3Rpb24gZ2V0UG9zdHNJbmZvKF9wYXRoOnN0cmluZyl7XG4gIGNvbnN0IGluZm8gPSBtYXR0ZXIucmVhZChfcGF0aClcbiAgcmV0dXJuIHsuLi5pbmZvLGZpbGVuYW1lOnBhdGguYmFzZW5hbWUoX3BhdGgpLGNvbnRlbnQ6Jyd9XG59XG5leHBvcnQgY29uc3QgcG9zdHNJbmZvID1wb3N0c05hbWUubWFwKChuYW1lPT57XG4gIHJldHVybiBnZXRQb3N0c0luZm8ocGF0aC5yZXNvbHZlKHBvc3RzRGlyLCcuLycsbmFtZSkpXG59KSlcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0TmFtZXMoKSB7XG4gIGNvbnN0IHBvc3RzRmlsZSA9IHBvc3RzTmFtZS5tYXAobmFtZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWVcbiAgICB9XG4gIH0pXG4gIHJldHVybiBwb3N0c0ZpbGVcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0QnlOYW1lKG5hbWU6IHN0cmluZykgeyAgXG4gIGNvbnN0IHBvc3RzRmlsZSA9IHBvc3RzTmFtZS5maWx0ZXIoX25hbWUgPT4gX25hbWUgPT09IG5hbWUpLm1hcChuYW1lID0+IHsgICAgXG4gICAgY29uc3QgbWF0dGVyUmVzdWx0ID0gbWF0dGVyLnJlYWQocGF0aC5yZXNvbHZlKHBvc3RzRGlyLCAnLi8nLCBuYW1lKSlcbiAgICBjb25zdCBjb250ZW50ID0gbWF0dGVyUmVzdWx0LmNvbnRlbnQgICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBkYXRhOm1hdHRlclJlc3VsdC5kYXRhLFxuICAgICAgY29udGVudFxuICAgIH1cbiAgfSk/LlswXVxuICByZXR1cm4gcG9zdHNGaWxlXG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwibWF0dGVyIiwicG9zdHNEaXIiLCJyZXNvbHZlIiwicHJvY2VzcyIsImN3ZCIsInBvc3RzTmFtZSIsInJlYWRkaXJTeW5jIiwiZmlsdGVyIiwiZmlsZU5hbWUiLCJlbmRzV2l0aCIsImdldFBvc3RzSW5mbyIsIl9wYXRoIiwiaW5mbyIsInJlYWQiLCJmaWxlbmFtZSIsImJhc2VuYW1lIiwiY29udGVudCIsInBvc3RzSW5mbyIsIm1hcCIsIm5hbWUiLCJnZXRQb3N0TmFtZXMiLCJwb3N0c0ZpbGUiLCJnZXRQb3N0QnlOYW1lIiwiX25hbWUiLCJtYXR0ZXJSZXN1bHQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/getPosts.ts\n");

/***/ }),

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostsById),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_getPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/getPosts */ \"./api/getPosts.ts\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ \"marked\");\n/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-navbar */ \"markdown-navbar\");\n/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! markdown-navbar/dist/navbar.css */ \"./node_modules/markdown-navbar/dist/navbar.css\");\n/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Post.module.css */ \"./styles/Post.module.css\");\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js */ \"highlight.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_2__, highlight_js__WEBPACK_IMPORTED_MODULE_5__]);\n([marked__WEBPACK_IMPORTED_MODULE_2__, highlight_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nasync function getStaticPaths() {\n    marked__WEBPACK_IMPORTED_MODULE_2__.marked.setOptions({\n        renderer: new marked__WEBPACK_IMPORTED_MODULE_2__.marked.Renderer(),\n        highlight: function(code, lang) {\n            const language = highlight_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getLanguage(lang) ? lang : \"plaintext\";\n            return highlight_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].highlight(code, {\n                language\n            }).value;\n        },\n        langPrefix: \"hljs language-\",\n        pedantic: false,\n        gfm: true,\n        breaks: false,\n        sanitize: false,\n        smartypants: false,\n        xhtml: false\n    });\n    const postNames = (0,_api_getPosts__WEBPACK_IMPORTED_MODULE_1__.getPostNames)();\n    const paths = postNames.map((post)=>({\n            params: {\n                id: post.name\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    console.log(params);\n    const rawPost = (0,_api_getPosts__WEBPACK_IMPORTED_MODULE_1__.getPostByName)(params.id);\n    const post = marked__WEBPACK_IMPORTED_MODULE_2__.marked.parse(rawPost.content);\n    return {\n        props: {\n            mdName: params.id,\n            mdContent: post,\n            mdRaw: rawPost.content\n        }\n    };\n}\nfunction PostsById({ mdContent , mdRaw  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mx-auto my-12 flex justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().article)} prose prose-indigo mx-auto`,\n                    dangerouslySetInnerHTML: {\n                        __html: mdContent\n                    }\n                }, void 0, false, {\n                    fileName: \"F:\\\\前端\\\\开发项目\\\\blog\\\\pages\\\\posts\\\\[id].tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\前端\\\\开发项目\\\\blog\\\\pages\\\\posts\\\\[id].tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"!w-60 ml-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((markdown_navbar__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: `${(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"article-nav\"])} article-menu sticky top-[88px]`,\n                    source: mdRaw,\n                    declarative: true,\n                    headingTopOffset: 80\n                }, void 0, false, {\n                    fileName: \"F:\\\\前端\\\\开发项目\\\\blog\\\\pages\\\\posts\\\\[id].tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\前端\\\\开发项目\\\\blog\\\\pages\\\\posts\\\\[id].tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\前端\\\\开发项目\\\\blog\\\\pages\\\\posts\\\\[id].tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWdFO0FBQ2pDO0FBQ087QUFDRztBQUNXO0FBQ3JCO0FBQ3hCLGVBQWVNLGlCQUFpQjtJQUNyQ0oscURBQWlCLENBQUM7UUFDaEJNLFVBQVUsSUFBSU4sbURBQWU7UUFDN0JRLFdBQVcsU0FBVUMsSUFBSSxFQUFFQyxJQUFJLEVBQUU7WUFDL0IsTUFBTUMsV0FBV1IsZ0VBQWdCLENBQUNPLFFBQVFBLE9BQU8sV0FBVztZQUM1RCxPQUFPUCw4REFBYyxDQUFDTSxNQUFNO2dCQUFFRTtZQUFTLEdBQUdFLEtBQUs7UUFDakQ7UUFDQUMsWUFBWTtRQUNaQyxVQUFVLEtBQUs7UUFDZkMsS0FBSyxJQUFJO1FBQ1RDLFFBQVEsS0FBSztRQUNiQyxVQUFVLEtBQUs7UUFDZkMsYUFBYSxLQUFLO1FBQ2xCQyxPQUFPLEtBQUs7SUFDZDtJQUNBLE1BQU1DLFlBQVl2QiwyREFBWUE7SUFDOUIsTUFBTXdCLFFBQVFELFVBQVVFLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO1lBQ3JDQyxRQUFRO2dCQUFFQyxJQUFJRixLQUFLRyxJQUFJO1lBQUM7UUFDMUI7SUFFQSxPQUFPO1FBQUVMO1FBQU9NLFVBQVUsS0FBSztJQUFDO0FBQ2xDLENBQUM7QUFDTSxlQUFlQyxlQUFlLEVBQUVKLE9BQU0sRUFBTyxFQUFFO0lBQ3BESyxRQUFRQyxHQUFHLENBQUNOO0lBQ1osTUFBTU8sVUFBVWpDLDREQUFhQSxDQUFDMEIsT0FBT0MsRUFBRTtJQUN2QyxNQUFNRixPQUFPeEIsZ0RBQVksQ0FBQ2dDLFFBQVFFLE9BQU87SUFDekMsT0FBTztRQUFFQyxPQUFPO1lBQUVDLFFBQVFYLE9BQU9DLEVBQUU7WUFBRVcsV0FBV2I7WUFBTWMsT0FBT04sUUFBUUUsT0FBTztRQUFDO0lBQUU7QUFDakYsQ0FBQztBQUNjLFNBQVNLLFVBQVUsRUFBRUYsVUFBUyxFQUFDQyxNQUFLLEVBQU8sRUFBRTtJQUMxRCxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEOzBCQUNDLDRFQUFDRTtvQkFBUUQsV0FBVyxDQUFDLEVBQUV2Qyx3RUFBaUIsQ0FBQywyQkFBMkIsQ0FBQztvQkFBRXlDLHlCQUF5Qjt3QkFBRUMsUUFBUVA7b0JBQVU7Ozs7Ozs7Ozs7OzBCQUd0SCw4REFBQ0c7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUN4Qyx3REFBT0E7b0JBQ053QyxXQUFXLENBQUMsRUFBRXZDLCtFQUF3QixDQUFDLCtCQUErQixDQUFDO29CQUN2RTJDLFFBQVFQO29CQUNSUSxhQUFhLElBQUk7b0JBQ2pCQyxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLy4vcGFnZXMvcG9zdHMvW2lkXS50c3g/MjFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQb3N0TmFtZXMsIGdldFBvc3RCeU5hbWUgfSBmcm9tICcuLi8uLi9hcGkvZ2V0UG9zdHMnXG5pbXBvcnQgeyBtYXJrZWQgfSBmcm9tICdtYXJrZWQnXG5pbXBvcnQgTWFya05hdiBmcm9tICdtYXJrZG93bi1uYXZiYXInO1xuaW1wb3J0ICdtYXJrZG93bi1uYXZiYXIvZGlzdC9uYXZiYXIuY3NzJztcbmltcG9ydCBQb3N0U3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL1Bvc3QubW9kdWxlLmNzcydcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcydcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgbWFya2VkLnNldE9wdGlvbnMoe1xuICAgIHJlbmRlcmVyOiBuZXcgbWFya2VkLlJlbmRlcmVyKCksXG4gICAgaGlnaGxpZ2h0OiBmdW5jdGlvbiAoY29kZSwgbGFuZykge1xuICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBobGpzLmdldExhbmd1YWdlKGxhbmcpID8gbGFuZyA6ICdwbGFpbnRleHQnO1xuICAgICAgcmV0dXJuIGhsanMuaGlnaGxpZ2h0KGNvZGUsIHsgbGFuZ3VhZ2UgfSkudmFsdWU7XG4gICAgfSxcbiAgICBsYW5nUHJlZml4OiAnaGxqcyBsYW5ndWFnZS0nLFxuICAgIHBlZGFudGljOiBmYWxzZSxcbiAgICBnZm06IHRydWUsXG4gICAgYnJlYWtzOiBmYWxzZSxcbiAgICBzYW5pdGl6ZTogZmFsc2UsXG4gICAgc21hcnR5cGFudHM6IGZhbHNlLFxuICAgIHhodG1sOiBmYWxzZVxuICB9KTtcbiAgY29uc3QgcG9zdE5hbWVzID0gZ2V0UG9zdE5hbWVzKClcbiAgY29uc3QgcGF0aHMgPSBwb3N0TmFtZXMubWFwKChwb3N0KSA9PiAoe1xuICAgIHBhcmFtczogeyBpZDogcG9zdC5uYW1lIH0sXG4gIH0pKVxuXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH06IGFueSkge1xuICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICBjb25zdCByYXdQb3N0ID0gZ2V0UG9zdEJ5TmFtZShwYXJhbXMuaWQpICBcbiAgY29uc3QgcG9zdCA9IG1hcmtlZC5wYXJzZShyYXdQb3N0LmNvbnRlbnQpXG4gIHJldHVybiB7IHByb3BzOiB7IG1kTmFtZTogcGFyYW1zLmlkLCBtZENvbnRlbnQ6IHBvc3QsIG1kUmF3OiByYXdQb3N0LmNvbnRlbnQgfSB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0c0J5SWQoeyBtZENvbnRlbnQsbWRSYXcgfTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBteC1hdXRvIG15LTEyIGZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtgJHtQb3N0U3R5bGUuYXJ0aWNsZX0gcHJvc2UgcHJvc2UtaW5kaWdvIG14LWF1dG9gfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1kQ29udGVudCB9fT5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nIXctNjAgbWwtOCc+XG4gICAgICAgIDxNYXJrTmF2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtQb3N0U3R5bGVbXCJhcnRpY2xlLW5hdlwiXX0gYXJ0aWNsZS1tZW51IHN0aWNreSB0b3AtWzg4cHhdYH1cbiAgICAgICAgICBzb3VyY2U9e21kUmF3fVxuICAgICAgICAgIGRlY2xhcmF0aXZlPXt0cnVlfVxuICAgICAgICAgIGhlYWRpbmdUb3BPZmZzZXQ9ezgwfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJnZXRQb3N0TmFtZXMiLCJnZXRQb3N0QnlOYW1lIiwibWFya2VkIiwiTWFya05hdiIsIlBvc3RTdHlsZSIsImhsanMiLCJnZXRTdGF0aWNQYXRocyIsInNldE9wdGlvbnMiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiaGlnaGxpZ2h0IiwiY29kZSIsImxhbmciLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwidmFsdWUiLCJsYW5nUHJlZml4IiwicGVkYW50aWMiLCJnZm0iLCJicmVha3MiLCJzYW5pdGl6ZSIsInNtYXJ0eXBhbnRzIiwieGh0bWwiLCJwb3N0TmFtZXMiLCJwYXRocyIsIm1hcCIsInBvc3QiLCJwYXJhbXMiLCJpZCIsIm5hbWUiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29uc29sZSIsImxvZyIsInJhd1Bvc3QiLCJwYXJzZSIsImNvbnRlbnQiLCJwcm9wcyIsIm1kTmFtZSIsIm1kQ29udGVudCIsIm1kUmF3IiwiUG9zdHNCeUlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXJ0aWNsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwic291cmNlIiwiZGVjbGFyYXRpdmUiLCJoZWFkaW5nVG9wT2Zmc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].tsx\n");

/***/ }),

/***/ "./node_modules/markdown-navbar/dist/navbar.css":
/*!******************************************************!*\
  !*** ./node_modules/markdown-navbar/dist/navbar.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ "markdown-navbar":
/*!**********************************!*\
  !*** external "markdown-navbar" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("markdown-navbar");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "highlight.js":
/*!*******************************!*\
  !*** external "highlight.js" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("highlight.js");;

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("marked");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].tsx"));
module.exports = __webpack_exports__;

})();