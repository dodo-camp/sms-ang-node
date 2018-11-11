(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"],{

/***/ "./src/app/contacts/contact-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/contacts/contact-service.service.ts ***!
  \*****************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
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


var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.getContacts = function () {
        return this.http.get('/api/getContacts');
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts/contacts.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contacts_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts.routing */ "./src/app/contacts/contacts.routing.ts");
/* harmony import */ var _mat_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mat-modules */ "./src/app/contacts/mat-modules.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_contacts_routing__WEBPACK_IMPORTED_MODULE_4__["routes"])
            ].concat(_mat_modules__WEBPACK_IMPORTED_MODULE_5__["modules"]),
            declarations: [_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"]]
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/contacts/contacts.routing.ts ***!
  \**********************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts/contacts.component.ts");

var routes = [
    {
        path: '',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_0__["ContactsComponent"]
    }
];


/***/ }),

/***/ "./src/app/contacts/contacts/contacts.component.css":
/*!**********************************************************!*\
  !*** ./src/app/contacts/contacts/contacts.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middle {\n    vertical-align: middle;\n}\n\n.contact-card {\n    max-width: 400px;\n}\n\n.container {\n    margin-top: 8em;\n}\n\n@media (min-width: 1200px) {\n    .container {\n        max-width: 500px;\n    }\n}\n\n@media (min-width: 992px) {\n    .container {\n        max-width: 500px;\n    }\n}\n\n@media (min-width: 768px) {\n    .container {\n        max-width: 500px;\n    }\n}\n\n@media (min-width: 576px) {\n    .container {\n        max-width: 500px;\n    }\n}\n\n\n"

/***/ }),

/***/ "./src/app/contacts/contacts/contacts.component.html":
/*!***********************************************************!*\
  !*** ./src/app/contacts/contacts/contacts.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card class=\"contact-card\">\n    <mat-card-title>\n      Contacts\n    </mat-card-title>\n    <mat-card-content>\n      <mat-nav-list>\n        <mat-list-item *ngFor=\"let contact of contacts\">\n          <p>{{ contact.name }}</p>\n          <button mat-icon-button (click)=\"routeToContactInfo(contact.code)\">\n            <mat-icon>message</mat-icon>\n          </button>\n        </mat-list-item>\n      </mat-nav-list>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/contacts/contacts/contacts.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/contacts/contacts/contacts.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-service.service */ "./src/app/contacts/contact-service.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(contactService, route) {
        this.contactService = contactService;
        this.route = route;
        this.contacts = new Array(0);
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContacts().subscribe(function (contacts) {
            _this.contacts = contacts.contacts;
        });
    };
    ContactsComponent.prototype.routeToContactInfo = function (code) {
        this.route.navigateByUrl("/contact-info/" + code);
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts/contacts.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_3__["routerSlideIn"]],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [_contact_service_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/mat-modules.ts":
/*!*****************************************!*\
  !*** ./src/app/contacts/mat-modules.ts ***!
  \*****************************************/
/*! exports provided: modules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modules", function() { return modules; });
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");




var modules = [
    _angular_material_list__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]
];


/***/ })

}]);
//# sourceMappingURL=contacts-contacts-module.js.map