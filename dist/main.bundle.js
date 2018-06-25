webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/Product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(productID, name, price) {
        this.productID = productID;
        this.name = name;
        this.price = price;
    }
    return Product;
}());

//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/Product.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "a.disabled {\r\n  color: gray;\r\n  cursor: not-allowed;\r\n  text-decoration: underline;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" href=\"#\">MSAL Angular Demo</a>\r\n      </div>\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a [routerLink]=\"['home']\">Home</a></li>\r\n        <li><a [routerLink]=\"['product']\">Product</a></li>\r\n        <li><a [routerLink]=\"['myCalendar']\">Calendar</a></li>\r\n        <li><a  [routerLink]=\"['todoList']\">Web API Call</a></li>\r\n        <li><a [routerLink]=\"['userData']\">User Data</a></li>\r\n        <li><a [routerLink]=\"['config']\">config settings</a></li>\r\n\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a  *ngIf=\"!loggedIn\"  id=\"loginRedirectButton\"  (click)=\"login()\"><span class=\"glyphicon glyphicon-log-in\"></span> Login Redirect</a></li>\r\n        <li><a id=\"logoutButton\"  *ngIf=\"loggedIn\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\r\n        <li><a  *ngIf=\"!loggedIn\"  id=\"loginPopupButton\"  (click)=\"loginPopup()\"><span class=\"glyphicon glyphicon-log-in\"></span> Login Popup</a></li>\r\n\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n<router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ms_msal_angular__ = __webpack_require__("./node_modules/ms-msal-angular/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(broadcastService, authService, productService) {
        this.broadcastService = broadcastService;
        this.authService = authService;
        this.productService = productService;
        this.title = 'Msal Angular Demo';
        this.userInfo = null;
        if (this.authService.getUser()) {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
    }
    AppComponent.prototype.login = function () {
        this.authService.login_redirect();
    };
    AppComponent.prototype.loginPopup = function () {
        this.authService.login_popup();
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.broadcastService.subscribe("msal:loginFailure", function (payload) {
            console.log("login failure");
            _this.loggedIn = false;
        });
        this.broadcastService.subscribe("msal:loginSuccess", function (payload) {
            console.log("login success");
            var userData = _this.authService.get_user();
            console.log("getUser " + JSON.stringify(_this.authService.get_user()));
            window.localStorage.setItem("userIdentifier", userData.userIdentifier);
            window.localStorage.setItem("userData", JSON.stringify(userData));
            _this.loggedIn = true;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.broadcastService.getMSALSubject().next(1);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ms_msal_angular__["a" /* BroadcastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ms_msal_angular__["a" /* BroadcastService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ms_msal_angular__["e" /* MsalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ms_msal_angular__["e" /* MsalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loggerCallback */
/* unused harmony export protectedResourceMap */
/* unused harmony export startDate */
/* unused harmony export endDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_component__ = __webpack_require__("./src/app/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error_component__ = __webpack_require__("./src/app/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_detail_component__ = __webpack_require__("./src/app/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__msGraph_component__ = __webpack_require__("./src/app/msGraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ms_msal_angular__ = __webpack_require__("./node_modules/ms-msal-angular/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_msal__ = __webpack_require__("./node_modules/msal/lib-commonjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_msal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_msal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__todo_list_todo_list_component__ = __webpack_require__("./src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__todo_list_todo_list_service__ = __webpack_require__("./src/app/todo-list/todo-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__msGraph_service__ = __webpack_require__("./src/app/msGraph.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_data_user_data_component__ = __webpack_require__("./src/app/user-data/user-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__config_config_component__ = __webpack_require__("./src/app/config/config.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















function loggerCallback(logLevel, message, piiEnabled) {
    console.log("client logging" + message);
}
var protectedResourceMap = new Map();
var startDate = new Date();
var endDate = new Date();
endDate.setDate(startDate.getDate() + 7);
protectedResourceMap.set("https://graph.microsoft.com/beta/me/calendarview?startdatetime=" + startDate.toLocaleDateString("en-US") + "&enddatetime=" + endDate.toLocaleDateString("en-US") + "&$select=subject,start,end&$orderBy=start/dateTime", ["calendars.read"]);
protectedResourceMap.set("https://buildtodoservice.azurewebsites.net/api/todolist", ["api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user"]);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_7__product_component__["a" /* ProductComponent */], __WEBPACK_IMPORTED_MODULE_8__error_component__["a" /* ErrorComponent */], __WEBPACK_IMPORTED_MODULE_9__product_detail_component__["a" /* ProductDetailComponent */], __WEBPACK_IMPORTED_MODULE_12__msGraph_component__["a" /* MsGraphComponent */], __WEBPACK_IMPORTED_MODULE_16__todo_list_todo_list_component__["a" /* TodoListComponent */], __WEBPACK_IMPORTED_MODULE_19__user_data_user_data_component__["a" /* UserDataComponent */], __WEBPACK_IMPORTED_MODULE_20__config_config_component__["a" /* ConfigComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_14_ms_msal_angular__["d" /* MsalModule */].forRoot({
                // clientID: 'f3e5cf63-6c0d-42cb-b5aa-ee58b1ef7523',
                clientID: '6226576d-37e9-49eb-b201-ec1eeb0029b6',
                authority: "https://login.microsoftonline.com/neagrawa.onmicrosoft.com/",
                validateAuthority: true,
                redirectUri: "http://localhost:4200/",
                cacheLocation: "localStorage",
                postLogoutRedirectUri: "http://localhost:4200/",
                navigateToLoginRequestUrl: true,
                popUp: false,
                // consentScopes: [ "calendars.read", "api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user"],
                //  consentScopes: [ "calendars.read"],
                unprotectedResources: ["https:google.com"],
                protectedResourceMap: protectedResourceMap,
                logger: loggerCallback,
                correlationId: '1234',
                level: __WEBPACK_IMPORTED_MODULE_15_msal__["LogLevel"].Info,
                piiLoggingEnabled: true
            }),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_17__todo_list_todo_list_service__["a" /* TodoListService */], __WEBPACK_IMPORTED_MODULE_18__msGraph_service__["a" /* MsGraphService */],
            { provide: __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_14_ms_msal_angular__["c" /* MsalInterceptor */], multi: true }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/app.module.js.map

/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_component__ = __webpack_require__("./src/app/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_component__ = __webpack_require__("./src/app/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_detail_component__ = __webpack_require__("./src/app/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ms_msal_angular__ = __webpack_require__("./node_modules/ms-msal-angular/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__msGraph_component__ = __webpack_require__("./src/app/msGraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_list_todo_list_component__ = __webpack_require__("./src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_data_user_data_component__ = __webpack_require__("./src/app/user-data/user-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_config_component__ = __webpack_require__("./src/app/config/config.component.ts");









var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */] },
    { path: 'todoList', component: __WEBPACK_IMPORTED_MODULE_6__todo_list_todo_list_component__["a" /* TodoListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4_ms_msal_angular__["b" /* MsalGuard */]] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_1__product_component__["a" /* ProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4_ms_msal_angular__["b" /* MsalGuard */]],
        children: [
            { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_3__product_detail_component__["a" /* ProductDetailComponent */] }
        ]
    },
    { path: 'myCalendar', component: __WEBPACK_IMPORTED_MODULE_5__msGraph_component__["a" /* MsGraphComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4_ms_msal_angular__["b" /* MsalGuard */]] },
    { path: 'userData', component: __WEBPACK_IMPORTED_MODULE_7__user_data_user_data_component__["a" /* UserDataComponent */] },
    { path: 'config', component: __WEBPACK_IMPORTED_MODULE_8__config_config_component__["a" /* ConfigComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__error_component__["a" /* ErrorComponent */] }
];
//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/app.routes.js.map

/***/ }),

/***/ "./src/app/config/config.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/config/config.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  config works!\n</p>\n"

/***/ }),

/***/ "./src/app/config/config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigComponent = (function () {
    function ConfigComponent() {
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    return ConfigComponent;
}());
ConfigComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-config',
        template: __webpack_require__("./src/app/config/config.component.html"),
        styles: [__webpack_require__("./src/app/config/config.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConfigComponent);

//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/config.component.js.map

/***/ }),

/***/ "./src/app/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "<h1>Page not found</h1>\n               <p>This is a Error Page</p>\n              "
    })
], ErrorComponent);

//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/error.component.js.map

/***/ }),

/***/ "./src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "\n    <p>This sample demonstrates how to take advantage of MSAL Angular for adding Azure AD authentication to your Angular apps.</p>\n    <input type=\"text\"  id=\"homePageTextBox\">\n    "
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/home.component.js.map

/***/ }),

/***/ "./src/app/msGraph.component.html":
/***/ (function(module, exports) {

module.exports = "<p>{{loadingMessage}}</p>\r\n<br>\r\n<br>\r\n<div class='table-responsive'>\r\n  <table class='table'>\r\n    <thead>\r\n    <tr>\r\n      <th>Event Name</th>\r\n      <th>Start Time</th>\r\n      <th>End Time</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let sr of calendarInfo\">\r\n      <td>{{sr?.subject}}</td>\r\n      <td>{{convertUTCToLocalTime(sr?.start?.dateTime)}} </td>\r\n      <td>{{convertUTCToLocalTime(sr?.end?.dateTime)}} </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/msGraph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ms_msal_angular__ = __webpack_require__("./node_modules/ms-msal-angular/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__msGraph_service__ = __webpack_require__("./src/app/msGraph.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MsGraphComponent = (function () {
    function MsGraphComponent(authService, msGraphService, broadcastService) {
        this.authService = authService;
        this.msGraphService = msGraphService;
        this.broadcastService = broadcastService;
        this.userInfo = null;
        this.loadingMessage = "Loading...";
        this.getAcquireToken = function (self, scopes) {
            //acquire access token for scopes
            return new Promise(function (resolve, reject) {
                self.acquire_token_silent(scopes).then(function (token) {
                    resolve(token);
                }, function (error) {
                    //This will fail, if scopes were not consented. call acquire token interactive only for these 2 errors
                    if (error.indexOf("consent_required") != -1 || error.indexOf("interaction_required") != -1) {
                        self.acquire_token_popup(scopes).then(function (token) {
                            resolve(token);
                        }, function (error) {
                            reject(error);
                        });
                    }
                    else {
                        reject(error);
                    }
                });
            });
        };
    }
    MsGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCalendar();
        //will work for acquireTokenSilent and acquireTokenPopup
        this.subscription = this.broadcastService.subscribe("msal:acquireTokenSuccess", function (payload) {
            console.log("acquire token success " + JSON.stringify(payload));
        });
        //will work for acquireTokenSilent and acquireTokenPopup
        this.subscription = this.broadcastService.subscribe("msal:acquireTokenFailure", function (payload) {
            console.log("acquire token failure " + JSON.stringify(payload));
            if (payload.indexOf("consent_required") !== -1 || payload.indexOf("interaction_required") != -1) {
                _this.authService.acquire_token_popup(["calendars.read"]).then(function (token) {
                    _this.getCalendar();
                }, function (error) {
                    _this.loadingMessage = "";
                });
            }
        });
    };
    MsGraphComponent.prototype.getCalendar = function () {
        var _this = this;
        this.msGraphService.httpGetRequest()
            .subscribe(function (data) {
            _this.calendarInfo = data.value;
            _this.loadingMessage = "";
        }, function (error) {
            console.error(" access token silent failed " + JSON.stringify(error));
            _this.loadingMessage = "";
        });
    };
    MsGraphComponent.prototype.convertUTCToLocalTime = function (utcTime) {
        var offset = new Date().getTimezoneOffset();
        var utcDate = new Date(utcTime);
        utcDate.setMinutes(utcDate.getMinutes() - offset);
        return utcDate.toDateString() + " " + utcDate.toLocaleTimeString();
    };
    //extremely important to unsubscribe
    MsGraphComponent.prototype.ngOnDestroy = function () {
        this.broadcastService.getMSALSubject().next(1);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return MsGraphComponent;
}());
MsGraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("./src/app/msGraph.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ms_msal_angular__["e" /* MsalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ms_msal_angular__["e" /* MsalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__msGraph_service__["a" /* MsGraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__msGraph_service__["a" /* MsGraphService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ms_msal_angular__["a" /* BroadcastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ms_msal_angular__["a" /* BroadcastService */]) === "function" && _c || Object])
], MsGraphComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/msGraph.component.js.map

/***/ }),

/***/ "./src/app/msGraph.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsGraphService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MsGraphService = (function () {
    function MsGraphService(http) {
        this.http = http;
        this.startDate = new Date();
        this.endDate = new Date();
        this.endDate.setDate(this.startDate.getDate() + 7);
    }
    MsGraphService.prototype.getUrl = function () {
        return "https://graph.microsoft.com/beta/me/calendarview?startdatetime=" + this.startDate.toLocaleDateString("en-US") + "&enddatetime=" + this.endDate.toLocaleDateString("en-US") + "&$select=subject,start,end&$orderBy=start/dateTime";
    };
    MsGraphService.prototype.httpGetRequest = function () {
        return this.http.get(this.getUrl())
            .map(function (response) {
            return response;
        })
            .catch(function (response) { return (__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(response)); });
    };
    return MsGraphService;
}());
MsGraphService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], MsGraphService);

var _a;
//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/msGraph.service.js.map

/***/ }),

/***/ "./src/app/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Product Details Page</h1>\r\n\r\n\r\nproduct : {{product.name}}\r\nprice : {{ product.price}}\r\n<p>\r\n    <a class='btn btn-default' (click)=\"onBack()\">Back </a>\r\n</p>"

/***/ }),

/***/ "./src/app/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = (function () {
    function ProductDetailComponent(_Activatedroute, _router, _productService) {
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this._productService = _productService;
    }
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['product']);
    };
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._Activatedroute.params.subscribe(function (params) {
            _this.id = params['id'];
            var products = _this._productService.getProducts();
            _this.product = products.find(function (p) { return p.productID == _this.id; });
        });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("./src/app/product-detail.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]) === "function" && _c || Object])
], ProductDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/product-detail.component.js.map

/***/ }),

/***/ "./src/app/product.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Product List</h1>\r\n<div class='table-responsive'>\r\n    <table class='table'>\r\n        <thead>\r\n            <tr>\r\n                <th>ID</th>\r\n                <th>Name</th>\r\n                <th>Price</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let product of products;\">\r\n                <td>{{product.productID}}</td>\r\n                <td><a [routerLink]=\"['detail',product.productID]\">{{product.name}} </a> </td>\r\n                <td>{{product.price}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ms_msal_angular__ = __webpack_require__("./node_modules/ms-msal-angular/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = (function () {
    function ProductComponent(productService, broadcastService, authService) {
        this.productService = productService;
        this.broadcastService = broadcastService;
        this.authService = authService;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.products = this.productService.getProducts();
        this.broadcastService.subscribe("msal:acquireTokenSuccess", function (payload) {
        });
        this.broadcastService.subscribe("msal:acquireTokenFailure", function (payload) {
        });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("./src/app/product.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ms_msal_angular__["a" /* BroadcastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ms_msal_angular__["a" /* BroadcastService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ms_msal_angular__["e" /* MsalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ms_msal_angular__["e" /* MsalService */]) === "function" && _c || Object])
], ProductComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/product.component.js.map

/***/ }),

/***/ "./src/app/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Product__ = __webpack_require__("./src/app/Product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProducts = function () {
        var products;
        products = [
            new __WEBPACK_IMPORTED_MODULE_0__Product__["a" /* Product */](1, 'Memory Card', 500),
            new __WEBPACK_IMPORTED_MODULE_0__Product__["a" /* Product */](2, 'Pen Drive', 750),
            new __WEBPACK_IMPORTED_MODULE_0__Product__["a" /* Product */](3, 'Power Bank', 100)
        ];
        return products;
    };
    ProductService.prototype.getProduct = function (id) {
        var products = this.getProducts();
        return products.find(function (p) { return p.productID == id; });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/product.service.js.map

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>{{loadingMessage}}</p>\r\n<br>\r\n<br>\r\n<div>\r\n  <form #userForm=\"ngForm\" novalidate (ngSubmit)=\"add(userForm.valid);userForm.reset();\">\r\n    <div class=\"form-group\">\r\n      <div class=\"input-group\">\r\n        <input name=\"newTodoCaptionText\" id=\"newTodoCaption\" [(ngModel)]=\"newTodoCaption\" required\r\n               #newTodoCaptionText=\"ngModel\" class=\"form-control\">\r\n        <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-default\" [disabled]=\"!userForm.valid\"> Add</button>\r\n    </span>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <br>\r\n  <br>\r\n  <br>\r\n\r\n  <div class='table-responsive'>\r\n    <table class='table table-striped'>\r\n      <thead>\r\n      <tr>\r\n        <th>Title</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of todoList\">\r\n        <td>{{item?.title}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_list_service__ = __webpack_require__("./src/app/todo-list/todo-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ms_msal_angular__ = __webpack_require__("./node_modules/ms-msal-angular/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListComponent = (function () {
    function TodoListComponent(todoListService, broadcastService, msalService) {
        this.todoListService = todoListService;
        this.broadcastService = broadcastService;
        this.msalService = msalService;
        this.error = "";
        this.loadingMessage = "Loading...";
        this.newTodoCaption = "";
        this.submitted = false;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.populate();
        this.subscription = this.broadcastService.subscribe("msal:acquireTokenFailure", function (payload) {
            console.log("acquire token failure");
            if (payload.indexOf("consent_required") !== -1 || payload.indexOf("interaction_required") != -1) {
                _this.msalService.acquire_token_popup(['api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user']).then(function (token) {
                    _this.todoListService.getItems().subscribe(function (results) {
                        _this.error = '';
                        _this.todoList = results;
                        _this.loadingMessage = "";
                    }, function (err) {
                        _this.error = err;
                        _this.loadingMessage = "";
                    });
                }, function (error) {
                });
            }
        });
        this.subscription = this.broadcastService.subscribe("msal:acquireTokenSuccess", function (payload) {
            console.log("acquire token success");
        });
    };
    TodoListComponent.prototype.populate = function () {
        var _this = this;
        this.todoListService.getItems().subscribe(function (result) {
            _this.todoList = result;
            _this.loadingMessage = "";
        }, function (error) {
            console.log("access token silent failed");
            _this.error = error;
            _this.loadingMessage = "";
        });
    };
    TodoListComponent.prototype.add = function (isValid) {
        var _this = this;
        this.submitted = true;
        if (isValid) {
            this.todoListService.postItem({
                'title': this.newTodoCaption,
            }).subscribe(function (results) {
                _this.loadingMessage = "";
                _this.newTodoCaption = "";
                _this.populate();
            }, function (err) {
                _this.error = err;
                _this.loadingMessage = "";
            });
        }
        else {
        }
    };
    ;
    //extremely important to unsubscribe
    TodoListComponent.prototype.ngOnDestroy = function () {
        this.broadcastService.getMSALSubject().next(1);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todo-list',
        template: __webpack_require__("./src/app/todo-list/todo-list.component.html"),
        styles: [__webpack_require__("./src/app/todo-list/todo-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo_list_service__["a" /* TodoListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo_list_service__["a" /* TodoListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ms_msal_angular__["a" /* BroadcastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ms_msal_angular__["a" /* BroadcastService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ms_msal_angular__["e" /* MsalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ms_msal_angular__["e" /* MsalService */]) === "function" && _c || Object])
], TodoListComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/todo-list.component.js.map

/***/ }),

/***/ "./src/app/todo-list/todo-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListService = (function () {
    function TodoListService(http) {
        this.http = http;
        this.apiEndpoint = "https://buildtodoservice.azurewebsites.net/api/todolist";
    }
    TodoListService.prototype.getItems = function () {
        return this.http.get(this.apiEndpoint)
            .map(function (response) {
            return response;
        })
            .catch(function (response) { return (__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(response)); });
    };
    TodoListService.prototype.postItem = function (item) {
        return this.http.post(this.apiEndpoint, item, { responseType: 'text' })
            .map(function (response) {
            return response;
        });
    };
    return TodoListService;
}());
TodoListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], TodoListService);

var _a;
//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/todo-list.service.js.map

/***/ }),

/***/ "./src/app/user-data/user-data.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-data/user-data.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"userIdentifier\">\n  {{userData | json}}\n</div>\n\n"

/***/ }),

/***/ "./src/app/user-data/user-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ms_msal_angular__ = __webpack_require__("./node_modules/ms-msal-angular/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDataComponent = (function () {
    function UserDataComponent(authService) {
        this.authService = authService;
    }
    UserDataComponent.prototype.ngOnInit = function () {
        this.userData = this.authService.get_user().userIdentifier.replace(/\"/g, "");
        //test.replace(/\"/g, "")
        console.log(this.userData);
    };
    return UserDataComponent;
}());
UserDataComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-data',
        template: __webpack_require__("./src/app/user-data/user-data.component.html"),
        styles: [__webpack_require__("./src/app/user-data/user-data.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ms_msal_angular__["e" /* MsalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ms_msal_angular__["e" /* MsalService */]) === "function" && _a || Object])
], UserDataComponent);

var _a;
//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/user-data.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/temp/MSALAngularDemoApp/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map