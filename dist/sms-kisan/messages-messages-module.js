(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"],{

/***/ "./src/app/messages/mat-modules.ts":
/*!*****************************************!*\
  !*** ./src/app/messages/mat-modules.ts ***!
  \*****************************************/
/*! exports provided: modules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modules", function() { return modules; });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");





var modules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"]
];


/***/ }),

/***/ "./src/app/messages/messages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/*! exports provided: MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return MessagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages/messages.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _messages_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.routing */ "./src/app/messages/messages.routing.ts");
/* harmony import */ var _mat_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mat-modules */ "./src/app/messages/mat-modules.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MessagesModule = /** @class */ (function () {
    function MessagesModule() {
    }
    MessagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_messages_routing__WEBPACK_IMPORTED_MODULE_4__["routes"])
            ].concat(_mat_modules__WEBPACK_IMPORTED_MODULE_5__["modules"]),
            declarations: [_messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"]]
        })
    ], MessagesModule);
    return MessagesModule;
}());



/***/ }),

/***/ "./src/app/messages/messages.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/messages/messages.routing.ts ***!
  \**********************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages/messages.component.ts");

var routes = [
    {
        path: '',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_0__["MessagesComponent"]
    }
];


/***/ }),

/***/ "./src/app/messages/messages.service.ts":
/*!**********************************************!*\
  !*** ./src/app/messages/messages.service.ts ***!
  \**********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getMessage = function () {
        return this.http.get('/api/getMessages');
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages/messages.component.css":
/*!**********************************************************!*\
  !*** ./src/app/messages/messages/messages.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middle {\n    vertical-align: middle;\n}\n\n.contact-card {\n    max-width: 400px;\n}\n\n.d-grig {\n    display: -ms-inline-grid;\n    display: inline-grid;\n}\n\n.mat-nav-list .mat-list-item {\n    padding-bottom: 5em;\n}\n\n.container {\n    margin-top: 8em;\n}\n\n@media (min-width: 1200px) {\n    .container {\n        max-width: 500px;\n    }\n}\n\n@media (min-width: 992px) {\n    .container {\n        max-width: 500px;\n    }\n}\n\n@media (min-width: 768px) {\n    .container {\n        max-width: 500px;\n    }\n}\n\n@media (min-width: 576px) {\n    .container {\n        max-width: 500px;\n    }\n}\n\n\n"

/***/ }),

/***/ "./src/app/messages/messages/messages.component.html":
/*!***********************************************************!*\
  !*** ./src/app/messages/messages/messages.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card class=\"contact-card\">\n    <mat-card-title>\n      Messages\n    </mat-card-title>\n    <mat-card-content>\n      <mat-nav-list [@listStagger]='listDropAnimation'>\n        <mat-list-item *ngFor=\"let msg of messages;trackBy: trackByFn\">\n          <span class=\"d-grig\">\n            <small>To: {{ msg.to }}</small>\n            <small>Date: {{msg.date}}</small>\n          </span>\n          <p style=\"padding-top: 1em\">{{msg.text}}</p>\n        </mat-list-item>\n      </mat-nav-list>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/messages/messages/messages.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/messages/messages/messages.component.ts ***!
  \*********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../messages.service */ "./src/app/messages/messages.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(msgService) {
        this.msgService = msgService;
        this.messages = new Array(0);
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgService.getMessage().subscribe(function (msgs) {
            _this.messages = msgs.usersMessages;
        });
    };
    MessagesComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages/messages.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["listDropAnimation"], _animations__WEBPACK_IMPORTED_MODULE_2__["routerSlideIn"]],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=messages-messages-module.js.map