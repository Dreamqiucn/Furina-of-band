export default function(global, globalThis, window, $app_exports$, $app_evaluate$){
  var setTimeout = global.setTimeout;
  var setInterval = global.setInterval;
  var clearTimeout = global.clearTimeout;
  var clearInterval = global.clearInterval;
            
  var $app_define_wrap$ = $app_define_wrap$ || function() {}
  var createAppHandler = function() {
    return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=c:\\Users\\dreamqiu\\Desktop\\vela\\Furina\\Furina\\src!./node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\dreamqiu\\Desktop\\vela\\Furina\\Furina&cacheDirectory&comments=false&configFile=c:\\Users\\dreamqiu\\Desktop\\vela\\Furina\\Furina\\node_modules\\@aiot-toolkit\\packager\\babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=c:\Users\dreamqiu\Desktop\vela\Furina\Furina\src!./node_modules/babel-loader/lib/index.js?cwd=c:\Users\dreamqiu\Desktop\vela\Furina\Furina&cacheDirectory&comments=false&configFile=c:\Users\dreamqiu\Desktop\vela\Furina\Furina\node_modules\@aiot-toolkit\packager\babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  onCreate() {
    console.log("app created");
  },
  onDestroy() {
    console.log("app destroyed");
  }
};}

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"package":"com.application.watch.demo","name":"Furina","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1000,"icon":"/common/logo.png","deviceTypeList":["watch"],"features":[{"name":"system.router"}],"config":{"logLevel":"log","designWidth":480},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index"},"pages/detail":{"component":"detail"}}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/

  var $app_style$ = {}
  var $app_script$ = __webpack_require__(/*! !../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=c:\Users\dreamqiu\Desktop\vela\Furina\Furina\src!../node_modules/babel-loader/lib/index.js?cwd=c:\Users\dreamqiu\Desktop\vela\Furina\Furina&cacheDirectory&comments=false&configFile=c:\Users\dreamqiu\Desktop\vela\Furina\Furina\node_modules\@aiot-toolkit\packager\babel.config.js!../node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=c:\\Users\\dreamqiu\\Desktop\\vela\\Furina\\Furina\\src!./node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\dreamqiu\\Desktop\\vela\\Furina\\Furina&cacheDirectory&comments=false&configFile=c:\\Users\\dreamqiu\\Desktop\\vela\\Furina\\Furina\\node_modules\\@aiot-toolkit\\packager\\babel.config.js!./node_modules/@aiot-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

  $app_script$({}, $app_exports$, $app_require$)
    
  
  $app_exports$.default.style = $app_style$
  $app_exports$.default.manifest = __webpack_require__(/*! ./manifest.json */ "./src/manifest.json")
    
})();

/******/ })()
;
  };
  return createAppHandler();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUNBO0VBQ0FBLFNBQUE7SUFDQUMsT0FBQSxDQUFBQyxHQUFBO0VBQ0E7RUFDQUMsVUFBQTtJQUNBRixPQUFBLENBQUFDLEdBQUE7RUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUNyQkE7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxxc0NBQTRtQjs7QUFFem9CLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUJBQU8sQ0FBQyw0Q0FBaUI7QUFDNUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GdXJpbmEvLi9zcmMvYXBwLnV4Iiwid2VicGFjazovL0Z1cmluYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9GdXJpbmEvLi9zcmMvYXBwLnV4PzVmNGQiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG9uQ3JlYXRlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJhcHAgY3JlYXRlZFwiKVxyXG4gIH0sXHJcbiAgb25EZXN0cm95KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJhcHAgZGVzdHJveWVkXCIpXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXG4gIHZhciAkYXBwX3N0eWxlJCA9IHt9XG4gIHZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9AYWlvdC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc2NyaXB0LWxvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvQGFpb3QtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL21vZHVsZS1sb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL0BhaW90LXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9tYW5pZmVzdC1sb2FkZXIuanM/cGF0aD1jOlxcXFxVc2Vyc1xcXFxkcmVhbXFpdVxcXFxEZXNrdG9wXFxcXHZlbGFcXFxcRnVyaW5hXFxcXEZ1cmluYVxcXFxzcmMhLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y3dkPWM6XFxcXFVzZXJzXFxcXGRyZWFtcWl1XFxcXERlc2t0b3BcXFxcdmVsYVxcXFxGdXJpbmFcXFxcRnVyaW5hJmNhY2hlRGlyZWN0b3J5JmNvbW1lbnRzPWZhbHNlJmNvbmZpZ0ZpbGU9YzpcXFxcVXNlcnNcXFxcZHJlYW1xaXVcXFxcRGVza3RvcFxcXFx2ZWxhXFxcXEZ1cmluYVxcXFxGdXJpbmFcXFxcbm9kZV9tb2R1bGVzXFxcXEBhaW90LXRvb2xraXRcXFxccGFja2FnZXJcXFxcYmFiZWwuY29uZmlnLmpzIS4uL25vZGVfbW9kdWxlcy9AYWlvdC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9hcHAudXg/dXhUeXBlPWFwcFwiKVxuXG4gICRhcHBfc2NyaXB0JCh7fSwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICBcbiAgXG4gICRhcHBfZXhwb3J0cyQuZGVmYXVsdC5zdHlsZSA9ICRhcHBfc3R5bGUkXG4gICRhcHBfZXhwb3J0cyQuZGVmYXVsdC5tYW5pZmVzdCA9IHJlcXVpcmUoXCIuL21hbmlmZXN0Lmpzb25cIilcbiAgICAiXSwibmFtZXMiOlsib25DcmVhdGUiLCJjb25zb2xlIiwibG9nIiwib25EZXN0cm95Il0sInNvdXJjZVJvb3QiOiIifQ==