(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/message.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/message.service.ts ***!
  \**********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/_services/survey.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/survey.service.ts ***!
  \*********************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/_services/message.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SurveyService = /** @class */ (function () {
    function SurveyService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    //
    /**
     * Returns tab view and the questions from the tab view
     * @param ID
     * GET request to druapl using the entityId associated with the tab view
     */
    SurveyService.prototype.getTabView = function (ID) {
        var _this = this;
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].formServerURL + ID + "/" + '?_format=json';
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log('fetched tabViews'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getTabViewList')));
    };
    SurveyService.prototype.submitSurvey = function (payload) {
        var _this = this;
        console.log(payload);
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].submitSurveyURL;
        return this.http
            .post(url, payload, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log("Deployed Survey"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addSurvey', payload)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    SurveyService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    /** Log a SurveyService message with the MessageService */
    SurveyService.prototype.log = function (message) {
        this.messageService.add("SurveyService: " + message);
    };
    SurveyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * Service class
         * @author Peter Charles Sims
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], SurveyService);
    return SurveyService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sort_sort_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort/sort.component */ "./src/app/sort/sort.component.ts");




var routes = [
    { path: '', redirectTo: ':id', pathMatch: 'full' },
    { path: ':id', component: _sort_sort_component__WEBPACK_IMPORTED_MODULE_3__["SortComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard {\n    /*position: fixed;*/\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQge1xuICAgIC8qcG9zaXRpb246IGZpeGVkOyovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<body>\n<div class=\"dashboard\">\n    <!--Top Dashboard-->\n    <div class=\"dashboard\">\n        <app-dashboard></app-dashboard>\n    </div>\n</div>\n<router-outlet></router-outlet>\n</body>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FormServer';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _esss_ng_xform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @esss/ng-xform */ "./node_modules/@esss/ng-xform/esm5/ng-xform.es5.js");
/* harmony import */ var _sort_sort_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sort/sort.component */ "./src/app/sort/sort.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
                _sort_sort_component__WEBPACK_IMPORTED_MODULE_7__["SortComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _esss_ng_xform__WEBPACK_IMPORTED_MODULE_6__["NgXformModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dashboard {\n    z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Rhc2hib2FyZCB7XG4gICAgei1pbmRleDogMTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark \" style=\"background-color: #016fbe\" id=\"dashboard\" >\n    <img src=\"../../assets/logo.png\" alt=\"[LOGO]\" style=\"height: 60px; width: 60px\">\n</nav>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n    margin: auto;\n    width: 70%;\n    align-content: center;\n}\n#title {\n    text-align: center ;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuI3RpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div id=\"wrapper\" *ngIf=\"survey\">\n    <h2 id=\"title\">{{tabTitle}}</h2>\n    <ng-xform-edit-save  [horizontalForm]=\"horizontal\" [labelWidth]=\"labelWidth\" [fields]=\"fields\" (submit)=\"onSubmit($event)\" [(editing)]=\"editing\" id=\"xform\"></ng-xform-edit-save>\n</div>\n<br><br>\n\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @esss/ng-xform */ "./node_modules/@esss/ng-xform/esm5/ng-xform.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/survey.service */ "./src/app/_services/survey.service.ts");











var FormComponent = /** @class */ (function () {
    function FormComponent(titleService, http, surveyService) {
        this.titleService = titleService;
        this.http = http;
        this.surveyService = surveyService;
        this.onchangefn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.horizontal = false;
        this.labelWidth = 1000;
        this.outputhelper = { A: 1, B: 2, C: 3 };
        this.subscriptions = [];
        this.editing = true;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var minDate = new Date();
        var maxDate = new Date();
        this.subscriptions.push(this.onchangefn.asObservable().subscribe(function (value) { return _this.xformComponent.setValue({ outputopt: _this.outputhelper[value] }); }));
        minDate.setDate(minDate.getDate() - 3);
        maxDate.setDate(maxDate.getDate() + 3);
        this.titleService.setTitle(this.tabTitle);
        this.initField();
    };
    FormComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    /**
     * This function is used to init the fields array.
     * The fields will be used to display the different type of questions
     */
    FormComponent.prototype.initField = function () {
        this.fields = [
            new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
                key: 'first_name',
                label: 'First Name',
            }),
            new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
                key: 'last_name',
                label: 'Last Name',
            }),
            new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
                key: 'mrn',
                label: 'Medical Record Number (MRN)',
            })
        ];
        for (var i = 0; i < this.survey.assessments.length; i++) {
            this.removeField(i);
            var required = this.survey.assessments[i].assessmentRequired;
            switch (this.survey.assessments[i].assessmentDisplayType) {
                case 'Radio':
                    this.createRadioGroup(i, required);
                    break;
                case 'SelectMany':
                    this.createSelectMany(i, required);
                    break;
                case 'SelectOne':
                    this.createSelect(i, required);
                    break;
                case 'Text':
                    this.createText(i, required);
                    break;
                case 'Number':
                    this.createNumber(i, required);
                    break;
                default:
                    console.log("Invalid Type");
            }
        }
    };
    /**
     * This funtion is used to create a SelectField
     * @param i Is used to determine which assessment has been inputed
     */
    FormComponent.prototype.createSelect = function (i, optional) {
        var options = this.createOptions(i);
        var validate = this.checkValidation(optional);
        var tempField;
        // Check if field already exists
        if (this.fieldCheck(i, 'SELECT')) {
            this.removeField(i);
        }
        // Push new select into the fields array
        tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["SelectField"]({
            key: this.survey.assessments[i].assessmentId.toString(),
            label: this.survey.assessments[i].assessmentDescription,
            searchable: false,
            options: options,
            addNewOption: true,
            addNewOptionText: 'id',
            optionLabelKey: 'choiceDesc',
            validators: [
                validate,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
            ],
        });
        var delta = Number(this.survey.assessments[i].assessmentDelta);
        this.orderField(delta, tempField);
    };
    /**
     * This funtion is used to create a SelectField
     * @param i Is used to determine which assessment has been inputed
     */
    FormComponent.prototype.createSelectMany = function (i, optional) {
        var options = this.createOptions(i);
        var validate = this.checkValidation(optional);
        var tempField;
        // Check if field already exists
        if (this.fieldCheck(i, 'SELECT')) {
            this.removeField(i);
        }
        // Push new select into the fields array
        tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["SelectField"]({
            key: this.survey.assessments[i].assessmentId.toString(),
            label: this.survey.assessments[i].assessmentDescription,
            searchable: true,
            options: options,
            addNewOption: true,
            addNewOptionText: 'id',
            optionLabelKey: 'choiceDesc',
            multiple: true,
            validators: [
                validate,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
            ]
        });
        var delta = Number(this.survey.assessments[i].assessmentDelta);
        this.orderField(delta, tempField);
    };
    /**
     * This funtion is used to create a RadioGroup
     * @param i Is used to determine which assessment has been inputed
     */
    FormComponent.prototype.createRadioGroup = function (i, optional) {
        var options = this.createOptions(i);
        var validate = this.checkValidation(optional);
        var tempField;
        // Check if field already exists
        if (this.fieldCheck(i, 'RADIOGROUP')) {
            return;
        }
        // Push new radio group into the fields array
        tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["RadioGroupField"]({
            key: this.survey.assessments[i].assessmentId.toString(),
            label: this.survey.assessments[i].assessmentDescription,
            options: Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(10)),
            optionValueKey: 'id',
            optionLabelKey: 'choiceDesc',
            validators: [
                validate,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
            ]
        });
        var delta = Number(this.survey.assessments[i].assessmentDelta);
        this.orderField(delta, tempField);
    };
    /**
     * Used to create a TextField
     * @param i Is used to determine which assessment has been inputed
     */
    FormComponent.prototype.createText = function (i, optional) {
        var tempField;
        var validate = this.checkValidation(optional);
        // Check if field already exists
        if (this.fieldCheck(i, 'TEXT')) {
            return;
        }
        // Push new text field into the fields array
        tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            key: this.survey.assessments[i].assessmentId,
            label: this.survey.assessments[i].assessmentDescription,
            validators: [
                validate,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
            ]
        });
        var delta = Number(this.survey.assessments[i].assessmentDelta);
        this.orderField(delta, tempField);
    };
    /**
     * Used to create a NumberField
     * @param i Is used to determine which assessment has been inputed
     */
    FormComponent.prototype.createNumber = function (i, optional) {
        var tempField;
        var validate = this.checkValidation(optional);
        // Check if field already exists
        if (this.fieldCheck(i, 'NUMBER')) {
            return;
        }
        // Push new number field into the fields array
        tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["NumberField"]({
            key: this.survey.assessments[i].assessmentId,
            label: this.survey.assessments[i].assessmentDescription,
            validators: [
                validate,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
            ]
        });
        var delta = Number(this.survey.assessments[i].assessmentDelta);
        this.orderField(delta, tempField);
    };
    /**
     * This function will return a boolean whether or not an element already exists in the array
     * @param i
     * i is the index of the array which will be checked
     * @param fieldType
     */
    FormComponent.prototype.fieldCheck = function (i, fieldType) {
        var j = 0;
        var validator;
        validator = this.checkValidation(this.survey.assessments[i].assessmentRequired);
        for (j; j < this.fields.length; j++) {
            if (this.fields[j].key === this.survey.assessments[i].assessmentId && fieldType === this.fields[j].controlType
                && this.fields[j].validators[0] === validator) {
                return true;
            }
            else if (this.fields[j].key === this.survey.assessments[i].assessmentId) {
                this.removeField(j);
                return false;
            }
        }
        return false;
    };
    /**
     * This function will remove a specified element in the fields array
     * @param i
     * i is the index of the array which will be removed
     */
    FormComponent.prototype.removeField = function (i) {
        this.fields.splice(i, 1);
    };
    /**
     * This function is used to order the position of a newly added field
     * @param i
     * i is the index of the array which will be added
     */
    FormComponent.prototype.orderField = function (i, field) {
        this.fields.splice(i, 0, field);
    };
    FormComponent.prototype.createOptions = function (i) {
        var options = [];
        this.survey.assessments[i].assessmentChoices.forEach(function (element) {
            options.push((element.choiceId, element.choiceDescription));
        });
        return options;
    };
    FormComponent.prototype.onSubmit = function (values) {
        this.model = values;
        var payload = JSON.stringify(this.model);
        this.submitForm(payload);
    };
    FormComponent.prototype.submitForm = function (payload) {
        this.surveyService
            .submitSurvey(payload) // Add the survey
            .subscribe(function (res) {
            console.log(res);
        });
    };
    FormComponent.prototype.checkValidation = function (optional) {
        var validate;
        if (optional === '0') {
            validate = _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1);
        }
        else {
            validate = _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required;
        }
        return validate;
    };
    /**
     * Determines if positions are equal to each other
     * @param x start position
     * @param y new position
     */
    FormComponent.prototype.checkPos = function (x, y) {
        if (x === y) {
            return x;
        }
        else {
            return y;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["NgXformEditSaveComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["NgXformEditSaveComponent"])
    ], FormComponent.prototype, "xformComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customField'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], FormComponent.prototype, "customFieldTmpl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormComponent.prototype, "survey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FormComponent.prototype, "tabTitle", void 0);
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [_esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["NgXformModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
        /**
         * Class the displays the form
         * @author Peter Charles Sims
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_survey_service__WEBPACK_IMPORTED_MODULE_10__["SurveyService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/sort/sort.component.css":
/*!*****************************************!*\
  !*** ./src/app/sort/sort.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvcnQvc29ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sort/sort.component.html":
/*!******************************************!*\
  !*** ./src/app/sort/sort.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"survey\" *ngIf=\"survey\">\n    <app-form [survey]=\"survey\" [tabTitle]=\"tabTitle\"></app-form>\n</div>"

/***/ }),

/***/ "./src/app/sort/sort.component.ts":
/*!****************************************!*\
  !*** ./src/app/sort/sort.component.ts ***!
  \****************************************/
/*! exports provided: SortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortComponent", function() { return SortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/survey.service */ "./src/app/_services/survey.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SortComponent = /** @class */ (function () {
    function SortComponent(http, route, formService) {
        this.http = http;
        this.route = route;
        this.formService = formService;
        /**
         * The id from the URL is linked to the entity ID of the tabview
         */
        this.id = +this.route.snapshot.paramMap.get('id');
    }
    SortComponent.prototype.ngOnInit = function () {
        // this.createSurvey(); // Create an instance of a survey
        console.log(this.id);
        this.getTabView();
    };
    /**
     * GET tab views
     * Async task that uses the service class to interface with Drupal
     * Retrieved data from drupal is then stored into an array of TabViews
     * Once completed, the TabViews are then sorted into the Survey Class
     */
    SortComponent.prototype.getTabView = function () {
        var _this = this;
        this.formService.getTabView(this.id)
            .subscribe(function (data) { return _this.str = data; }, // Move data into TabView
        function (// Move data into TabView
        err) { return console.log(err); }, // Log any Errors
        function () { return _this.sortSurvey(); }); // Sort tabviews into a Survey
    };
    /**
     * Sorts out the tabviews that were retrieved from Drupal
     * Creates assessments and their choices by iterating through the tabviews
     * Once an assessment is created and it's choices have been populated
     * Then it is added into the Survey
     */
    SortComponent.prototype.sortSurvey = function () {
        var json = JSON.parse(this.str);
        eval(json);
        this.survey = json;
        this.tabTitle = this.survey.tabViewLabel;
    };
    SortComponent.prototype.submitSurvey = function (payload) {
    };
    SortComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sort',
            template: __webpack_require__(/*! ./sort.component.html */ "./src/app/sort/sort.component.html"),
            styles: [__webpack_require__(/*! ./sort.component.css */ "./src/app/sort/sort.component.css")]
        })
        /**
         * @author Peter Charles Sims
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"]])
    ], SortComponent);
    return SortComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    formServerURL: 'http://mysite.com/',
    submitSurveyURL: 'http://mysite.com/form-data',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/petercharles/Development/AngularProjects/FormServer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map