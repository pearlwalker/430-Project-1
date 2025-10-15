/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/***/ (() => {

eval("{const handleResponse = async (response) => {\r\n\r\n};\r\n\r\nconst sendFetch = async (url) => {\r\n\r\n};\r\n\r\nconst init = () => {\r\n    const collapsibles = document.querySelectorAll('.collapsible');\r\n    const requestForm = document.querySelectorAll('.requestForm');\r\n    collapsibles.forEach((button, index) => {\r\n        button.addEventListener('click', () => {\r\n            console.log(`Clicked ${button} at ${index}`)\r\n            const content = requestForm[index];\r\n            console.log(`${content}`);\r\n            requestForm.forEach((form) => {\r\n                if (form !== content) {\r\n                    form.style.display = 'none';\r\n                };\r\n            });\r\n            if (content.style.display === 'none') {\r\n                content.style.display = 'block';\r\n            } else {\r\n                content.style.display = 'none';\r\n            };\r\n        });\r\n    });\r\n};\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://430-project-1/./client/client.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/client.js"]();
/******/ 	
/******/ })()
;