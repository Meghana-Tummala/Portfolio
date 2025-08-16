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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./libs/theme.js":
/*!***********************!*\
  !*** ./libs/theme.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// theme.js or theme.ts\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    // 1. Set the font families (Press Start 2P for all text)\n    fonts: {\n        heading: \"'Press Start 2P', cursive\",\n        body: \"'Press Start 2P', cursive\"\n    },\n    // 2. Customize font size tokens to align with an 8px-based scale\n    fontSizes: {\n        xs: \"0.5rem\",\n        sm: \"0.875rem\",\n        md: \"1rem\",\n        lg: \"1.5rem\",\n        xl: \"2rem\",\n        \"2xl\": \"3rem\"\n    },\n    // 3. Global styles for base elements (optional but ensures HTML elements use the new sizes)\n    styles: {\n        global: {\n            \"html, body\": {\n                fontSize: \"sm\",\n                lineHeight: \"1.5\"\n            },\n            \"h1\": {\n                fontSize: \"lg\"\n            },\n            \"h2\": {\n                fontSize: \"md\"\n            },\n            \"h3\": {\n                fontSize: \"sm\"\n            },\n            \"h4,h5,h6\": {\n                fontSize: \"sm\"\n            } // 16px for h4-h6 (you can tweak h5,h6 if desired)\n        }\n    },\n    colors: {\n        glassTeal: '#88ccca'\n    },\n    // 4. Component-specific default sizes\n    components: {\n        Heading: {\n            defaultProps: {\n                size: \"lg\"\n            },\n            // Optionally, you can map heading \"as\" levels to sizes in baseStyle:\n            baseStyle: ({ as })=>{\n                if (as === \"h1\") return {\n                    fontSize: \"lg\"\n                }; // 32px\n                if (as === \"h2\") return {\n                    fontSize: \"md\"\n                }; // 24px\n                if (as === \"h3\") return {\n                    fontSize: \"sm\"\n                }; // 16px\n                // h4, h5, h6:\n                return {\n                    fontSize: \"sm\"\n                }; // 16px default\n            }\n        },\n        Text: {\n            baseStyle: {\n                fontSize: \"sm\"\n            }\n        },\n        Link: {\n            baseStyle: {\n                fontSize: \"sm\",\n                textDecoration: \"underline\"\n            }\n        },\n        Button: {\n            defaultProps: {\n                size: \"xs\"\n            },\n            // You can also override the fontSize for button sizes if needed:\n            sizes: {\n                sm: {\n                    fontSize: \"xs\",\n                    px: 4,\n                    py: 2\n                },\n                md: {\n                    fontSize: \"sm\"\n                }\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3RoZW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsdUJBQXVCO0FBQ3dCO0FBRS9DLE1BQU1DLFFBQVFELDZEQUFXQSxDQUFDO0lBQ3hCLHlEQUF5RDtJQUN6REUsT0FBTztRQUNMQyxTQUFTO1FBQ1RDLE1BQU07SUFDUjtJQUNBLGlFQUFpRTtJQUNqRUMsV0FBVztRQUNUQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7UUFDSixPQUFPO0lBRVQ7SUFDQSw0RkFBNEY7SUFDNUZDLFFBQVE7UUFDTkMsUUFBUTtZQUNOLGNBQWM7Z0JBQ1pDLFVBQVU7Z0JBQ1ZDLFlBQVk7WUFDZDtZQUNBLE1BQU07Z0JBQUVELFVBQVU7WUFBSztZQUN2QixNQUFNO2dCQUFFQSxVQUFVO1lBQUs7WUFDdkIsTUFBTTtnQkFBRUEsVUFBVTtZQUFLO1lBQ3ZCLFlBQVk7Z0JBQUVBLFVBQVU7WUFBSyxFQUFFLGtEQUFrRDtRQUNuRjtJQUNGO0lBQ0FFLFFBQVE7UUFDTkMsV0FBVztJQUNYO0lBQ0Ysc0NBQXNDO0lBQ3RDQyxZQUFZO1FBQ1ZDLFNBQVM7WUFDUEMsY0FBYztnQkFDWkMsTUFBTTtZQUNSO1lBQ0EscUVBQXFFO1lBQ3JFQyxXQUFXLENBQUMsRUFBRUMsRUFBRSxFQUFFO2dCQUNoQixJQUFJQSxPQUFPLE1BQU0sT0FBTztvQkFBRVQsVUFBVTtnQkFBSyxHQUFLLE9BQU87Z0JBQ3JELElBQUlTLE9BQU8sTUFBTSxPQUFPO29CQUFFVCxVQUFVO2dCQUFLLEdBQUssT0FBTztnQkFDckQsSUFBSVMsT0FBTyxNQUFNLE9BQU87b0JBQUVULFVBQVU7Z0JBQUssR0FBSyxPQUFPO2dCQUNyRCxjQUFjO2dCQUNkLE9BQU87b0JBQUVBLFVBQVU7Z0JBQUssR0FBcUIsZUFBZTtZQUM5RDtRQUNGO1FBQ0FVLE1BQU07WUFDSkYsV0FBVztnQkFDVFIsVUFBVTtZQUNaO1FBQ0Y7UUFDQVcsTUFBTTtZQUNKSCxXQUFXO2dCQUNUUixVQUFVO2dCQUNWWSxnQkFBZ0I7WUFDbEI7UUFDRjtRQUNBQyxRQUFRO1lBQ05QLGNBQWM7Z0JBQ1pDLE1BQU07WUFDUjtZQUNBLGlFQUFpRTtZQUNqRU8sT0FBTztnQkFDTHBCLElBQUk7b0JBQ0ZNLFVBQVU7b0JBQ1ZlLElBQUk7b0JBQUdDLElBQUk7Z0JBQ2I7Z0JBQ0FyQixJQUFJO29CQUNGSyxVQUFVO2dCQUVaO1lBQ0Y7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZVosS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL21lZ2hhbmF0dW1tYWxhL3BvcnRmb2xpby9saWJzL3RoZW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRoZW1lLmpzIG9yIHRoZW1lLnRzXG5pbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICAvLyAxLiBTZXQgdGhlIGZvbnQgZmFtaWxpZXMgKFByZXNzIFN0YXJ0IDJQIGZvciBhbGwgdGV4dClcbiAgZm9udHM6IHtcbiAgICBoZWFkaW5nOiBcIidQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmVcIixcbiAgICBib2R5OiBcIidQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmVcIixcbiAgfSxcbiAgLy8gMi4gQ3VzdG9taXplIGZvbnQgc2l6ZSB0b2tlbnMgdG8gYWxpZ24gd2l0aCBhbiA4cHgtYmFzZWQgc2NhbGVcbiAgZm9udFNpemVzOiB7XG4gICAgeHM6IFwiMC41cmVtXCIsICAgLy8gOHB4XG4gICAgc206IFwiMC44NzVyZW1cIiwgLy8gMTRweCAob3B0aW9uYWw7IHVzZSBpZiB5b3Ugd2FudCBhIHN0ZXAgYmV0d2VlbiA4IGFuZCAxNilcbiAgICBtZDogXCIxcmVtXCIsICAgICAvLyAxNnB4IChiYXNlIGJvZHkgdGV4dClcbiAgICBsZzogXCIxLjVyZW1cIiwgICAvLyAyNHB4XG4gICAgeGw6IFwiMnJlbVwiLCAgICAgLy8gMzJweFxuICAgIFwiMnhsXCI6IFwiM3JlbVwiLCAgLy8gNDhweCAoZm9yIHZlcnkgbGFyZ2UgZGlzcGxheSB0ZXh0IGlmIG5lZWRlZClcbiAgICAvLyBZb3UgY2FuIGNvbnRpbnVlIHRoZSBzY2FsZSBpZiBuZWVkZWQ6IDN4bDogXCI0cmVtXCIgKDY0cHgpLCBldGMuXG4gIH0sXG4gIC8vIDMuIEdsb2JhbCBzdHlsZXMgZm9yIGJhc2UgZWxlbWVudHMgKG9wdGlvbmFsIGJ1dCBlbnN1cmVzIEhUTUwgZWxlbWVudHMgdXNlIHRoZSBuZXcgc2l6ZXMpXG4gIHN0eWxlczoge1xuICAgIGdsb2JhbDoge1xuICAgICAgXCJodG1sLCBib2R5XCI6IHtcbiAgICAgICAgZm9udFNpemU6IFwic21cIiwgICAgICAgIC8vIEJhc2UgZm9udCBzaXplIDE2cHggZm9yIGJvZHlcbiAgICAgICAgbGluZUhlaWdodDogXCIxLjVcIiwgICAgIC8vIEFkanVzdCBsaW5lLWhlaWdodCBhcyBuZWVkZWRcbiAgICAgIH0sXG4gICAgICBcImgxXCI6IHsgZm9udFNpemU6IFwibGdcIiB9LC8vIDMycHggZm9yIGgxXG4gICAgICBcImgyXCI6IHsgZm9udFNpemU6IFwibWRcIiB9LC8vIDI0cHggZm9yIGgyXG4gICAgICBcImgzXCI6IHsgZm9udFNpemU6IFwic21cIiB9LC8vIDE2cHggZm9yIGgzXG4gICAgICBcImg0LGg1LGg2XCI6IHsgZm9udFNpemU6IFwic21cIiB9IC8vIDE2cHggZm9yIGg0LWg2ICh5b3UgY2FuIHR3ZWFrIGg1LGg2IGlmIGRlc2lyZWQpXG4gICAgfVxuICB9LFxuICBjb2xvcnM6IHtcbiAgICBnbGFzc1RlYWw6ICcjODhjY2NhJ1xuICAgIH0sXG4gIC8vIDQuIENvbXBvbmVudC1zcGVjaWZpYyBkZWZhdWx0IHNpemVzXG4gIGNvbXBvbmVudHM6IHtcbiAgICBIZWFkaW5nOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgc2l6ZTogXCJsZ1wiLCAvLyBkZWZhdWx0IHNpemUgZm9yIEhlYWRpbmcgY29tcG9uZW50ICh1c2luZyBvdXIgcmVkZWZpbmVkIFwieGxcIiA9IDMycHgpXG4gICAgICB9LFxuICAgICAgLy8gT3B0aW9uYWxseSwgeW91IGNhbiBtYXAgaGVhZGluZyBcImFzXCIgbGV2ZWxzIHRvIHNpemVzIGluIGJhc2VTdHlsZTpcbiAgICAgIGJhc2VTdHlsZTogKHsgYXMgfSkgPT4ge1xuICAgICAgICBpZiAoYXMgPT09IFwiaDFcIikgcmV0dXJuIHsgZm9udFNpemU6IFwibGdcIiB9OyAgIC8vIDMycHhcbiAgICAgICAgaWYgKGFzID09PSBcImgyXCIpIHJldHVybiB7IGZvbnRTaXplOiBcIm1kXCIgfTsgICAvLyAyNHB4XG4gICAgICAgIGlmIChhcyA9PT0gXCJoM1wiKSByZXR1cm4geyBmb250U2l6ZTogXCJzbVwiIH07ICAgLy8gMTZweFxuICAgICAgICAvLyBoNCwgaDUsIGg2OlxuICAgICAgICByZXR1cm4geyBmb250U2l6ZTogXCJzbVwiIH07ICAgICAgICAgICAgICAgICAgIC8vIDE2cHggZGVmYXVsdFxuICAgICAgfSxcbiAgICB9LFxuICAgIFRleHQ6IHtcbiAgICAgIGJhc2VTdHlsZToge1xuICAgICAgICBmb250U2l6ZTogXCJzbVwiLCAvLyAxNnB4IGZvciBhbGwgVGV4dCBjb21wb25lbnRzIGJ5IGRlZmF1bHRcbiAgICAgIH0sXG4gICAgfSxcbiAgICBMaW5rOiB7XG4gICAgICBiYXNlU3R5bGU6IHtcbiAgICAgICAgZm9udFNpemU6IFwic21cIiwgLy8gMTZweCBmb3IgbGluayB0ZXh0IChlLmcuIG5hdmJhciBsaW5rcylcbiAgICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsIC8vIChQcmVzZXJ2ZSBkZWZhdWx0IGxpbmsgc3R5bGUgb3IgY3VzdG9taXplKVxuICAgICAgfSxcbiAgICB9LFxuICAgIEJ1dHRvbjoge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHNpemU6IFwieHNcIiwgLy8gVXNlIENoYWtyYSdzIFwic21cIiBidXR0b24gc2l6ZSBieSBkZWZhdWx0IChzbWFsbGVyIHBhZGRpbmcgJiBmb250KVxuICAgICAgfSxcbiAgICAgIC8vIFlvdSBjYW4gYWxzbyBvdmVycmlkZSB0aGUgZm9udFNpemUgZm9yIGJ1dHRvbiBzaXplcyBpZiBuZWVkZWQ6XG4gICAgICBzaXplczoge1xuICAgICAgICBzbToge1xuICAgICAgICAgIGZvbnRTaXplOiBcInhzXCIsIC8vIDE0cHggd2l0aGluIGJ1dHRvbnMgZm9yIHNsaWdodGx5IHNtYWxsZXIgdGV4dFxuICAgICAgICAgIHB4OiA0LCBweTogMiwgICAgLy8gYWRqdXN0IHBhZGRpbmdzIGlmIG5lZWRlZCAoQ2hha3JhIHVzZXMgc3BhY2Ugc2NhbGUpXG4gICAgICAgIH0sXG4gICAgICAgIG1kOiB7XG4gICAgICAgICAgZm9udFNpemU6IFwic21cIiwgLy8gMTZweCBmb3IgbWVkaXVtIGJ1dHRvbnMgKGlmIHVzZWQpXG4gICAgICAgICAgLy8gLi4ucGFkZGluZ1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuXG4gIFxuXG5cbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsInRoZW1lIiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsImZvbnRTaXplcyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJzdHlsZXMiLCJnbG9iYWwiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJjb2xvcnMiLCJnbGFzc1RlYWwiLCJjb21wb25lbnRzIiwiSGVhZGluZyIsImRlZmF1bHRQcm9wcyIsInNpemUiLCJiYXNlU3R5bGUiLCJhcyIsIlRleHQiLCJMaW5rIiwidGV4dERlY29yYXRpb24iLCJCdXR0b24iLCJzaXplcyIsInB4IiwicHkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/theme.js\n");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _libs_theme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/theme.js */ \"./libs/theme.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _libs_theme_js__WEBPACK_IMPORTED_MODULE_3__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _libs_theme_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nclass Document extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meghanatummala/portfolio/pages/_document.js\",\n                        lineNumber: 10,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/meghanatummala/portfolio/pages/_document.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ColorModeScript, {\n                            initialColorMode: _libs_theme_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].config.initialColorMode\n                        }, void 0, false, {\n                            fileName: \"/Users/meghanatummala/portfolio/pages/_document.js\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"/Users/meghanatummala/portfolio/pages/_document.js\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/meghanatummala/portfolio/pages/_document.js\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/meghanatummala/portfolio/pages/_document.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/meghanatummala/portfolio/pages/_document.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, this);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDd0I7QUFDdEM7QUFFdEIsTUFBTU8saUJBQWlCTixzREFBWUE7SUFDOUNPLFNBQVU7UUFDTixxQkFDSSw4REFBQ04sK0NBQUlBO1lBQUNPLE1BQUs7OzhCQUNQLDhEQUFDTiwrQ0FBSUE7OEJBQ0QsNEVBQUNPO3dCQUNHQyxNQUFLO3dCQUNMQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFJWiw4REFBQ0M7O3NDQUNHLDhEQUFDYiw2REFBZUE7NEJBQUNjLGtCQUFrQlIsNkRBQVksQ0FBQ1EsZ0JBQWdCOzs7Ozs7c0NBQ2hFLDhEQUFDViwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSTNCO0FBQ0oiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWdoYW5hdHVtbWFsYS9wb3J0Zm9saW8vcGFnZXMvX2RvY3VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yTW9kZVNjcmlwdCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgTmV4dERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vbGlicy90aGVtZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIE5leHREb2N1bWVudCB7XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QcmVzcytTdGFydCsyUCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxDb2xvck1vZGVTY3JpcHQgaW5pdGlhbENvbG9yTW9kZT17dGhlbWUuY29uZmlnLmluaXRpYWxDb2xvck1vZGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICAgICAgPC9IdG1sPlxuICAgICAgICApXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbG9yTW9kZVNjcmlwdCIsIk5leHREb2N1bWVudCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJ0aGVtZSIsIkRvY3VtZW50IiwicmVuZGVyIiwibGFuZyIsImxpbmsiLCJocmVmIiwicmVsIiwiYm9keSIsImluaXRpYWxDb2xvck1vZGUiLCJjb25maWciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.js")));
module.exports = __webpack_exports__;

})();