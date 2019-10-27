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

/***/ "./src/app/Assessment.ts":
/*!*******************************!*\
  !*** ./src/app/Assessment.ts ***!
  \*******************************/
/*! exports provided: Assessment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assessment", function() { return Assessment; });
/* harmony import */ var _Choice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Choice */ "./src/app/Choice.ts");

/**
 * Used to store the mosaiq assessments that have been received from drupal
 * Assessments are defined by their id, type, description, and an array of choices
 * This format has been defined within Drupal, so that once Survey has been converted into a JSON string
 * It can match the data in Drupal
 */
var Assessment = /** @class */ (function () {
    /**
     * Constructor for Assessment Class
     * @param id
     * The Assessment ID
     * @param assessmentType
     * The Assessment Type
     * @param assessmentDesc
     * The description of an Assessment
     */
    function Assessment(id, assessmentType, assessmentDesc) {
        this.id = id;
        this.asessmentType = assessmentType;
        this.assessmentDesc = assessmentDesc;
        this.choices = new Array(); // Create an instance of an array
    }
    /**
     * Pushes a new choice to the end of the choice array
     * @param choice
     * The Choice of an assessment
     */
    Assessment.prototype.addChoice = function (choice) {
        this.choices.push(new _Choice__WEBPACK_IMPORTED_MODULE_0__["Choice"](choice.id, choice.choiceDesc));
    };
    /**
     * Sets the Assessment's description
     * @param description
     * Description of the assessment
     */
    Assessment.prototype.setAssessmentDescription = function (description) {
        this.assessmentDesc = description;
    };
    return Assessment;
}());



/***/ }),

/***/ "./src/app/Choice.ts":
/*!***************************!*\
  !*** ./src/app/Choice.ts ***!
  \***************************/
/*! exports provided: Choice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/**
 * This class store the choices that have been imported from Drupal
 * This format has been defined within Drupal, so that once Survey has been converted into a JSON string
 * It can match the data in Drupal
 */
var Choice = /** @class */ (function () {
    /**
     * Constructor for Choice class
     * @param id
     * The ID of a choice
     * @param choiceDesc
     * The description of a choice
     */
    function Choice(id, choiceDesc) {
        this.id = id;
        this.choiceDesc = choiceDesc;
    }
    /**
     * This function sets a new choice description
     * @param choiceDescription
     * The description of a choice
     */
    Choice.prototype.setChoiceDescription = function (choiceDescription) {
        this.choiceDesc = choiceDescription;
    };
    return Choice;
}());



/***/ }),

/***/ "./src/app/Survey.ts":
/*!***************************!*\
  !*** ./src/app/Survey.ts ***!
  \***************************/
/*! exports provided: Survey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return Survey; });
/**
 * Contains all the assessments and choices that have been imported from Drupal
 * The format of this class has been defined in Drupal, so that it can easily be converted into a JSON string
 * And update the corresponding data in Drupal
 */
var Survey = /** @class */ (function () {
    /**
     * Constructor for Survey class
     * @param tabId
     * The entity ID of a tabview
     * @param tabDesc
     * The tabview description
     */
    function Survey(tabId, tabDesc) {
        this.tabId = tabId;
        this.tabDesc = tabDesc;
        this.assessments = new Array(); // Creates an instance of an array
    }
    /**
     * Pushes an assessment into the assessment array
     * @param assessment
     * A tabview assessment
     */
    Survey.prototype.addAssessment = function (assessment) {
        this.assessments.push(assessment);
    };
    return Survey;
}());



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






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SurveyService = /** @class */ (function () {
    // private tabViewURL = 'http://192.168.1.120/rest/content/tab/get/';
    function SurveyService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        //
        // private surveysURL = 'http://qadrupal.lan.sesahs.nsw.gov.au/tabview/edit';
        // private drupalURL = 'http://qadrupal.lan.sesahs.nsw.gov.au/rest/tab/list?_format=json';
        this.tabViewURL = 'http://qadrupal.lan.sesahs.nsw.gov.au/rest/content/tab/get/';
    }
    /**
     * Returns tab view and the questions from the tab view
     * @param ID
     * GET request to druapl using the entityId associated with the tab view
     */
    SurveyService.prototype.getTabView = function (ID) {
        var _this = this;
        var url = "" + this.tabViewURL + ID + "/" + '?_format=json';
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log('fetched tabViews'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getTabViewList', [])));
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
        }),
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
    { path: '', redirectTo: '/form/:id', pathMatch: 'full' },
    { path: 'form/:id', component: _sort_sort_component__WEBPACK_IMPORTED_MODULE_3__["SortComponent"] },
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<body>\n<router-outlet></router-outlet>\n</body>\n\n"

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









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
                _sort_sort_component__WEBPACK_IMPORTED_MODULE_7__["SortComponent"]
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

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n    margin: auto;\n    width: 50%;\n    align-content: center;\n}\n#title {\n    text-align: center ;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuI3RpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" *ngIf=\"survey\">\n    <h2 id=\"title\">{{tabTitle}}</h2>\n    <ng-xform [horizontalForm]=\"horizontal\" [labelWidth]=\"labelWidth\" [fields]=\"fields\" id=\"xform\"></ng-xform>\n</div>\n\n"

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
/* harmony import */ var _Survey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Survey */ "./src/app/Survey.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");











var FormComponent = /** @class */ (function () {
    function FormComponent(titleService, http) {
        this.titleService = titleService;
        this.http = http;
        this.onchangefn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.horizontal = false;
        this.labelWidth = 2;
        this.outputhelper = { A: 1, B: 2, C: 3 };
        this.subscriptions = [];
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
        var i = 0;
        for (i; i < this.survey.assessments.length; i++) {
            if (this.survey.assessments[i].asessmentType.toString() === '5') {
                this.createRadioGroup(i);
                this.createSelect(i);
            }
            else {
                this.createText(i);
            }
        }
    };
    /**
     * This funtion is used to create a SelectField
     * @param i Is used to determine which assessment has been inputed
     */
    FormComponent.prototype.createSelect = function (i) {
        // Push new select into the fields array
        var tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["SelectField"]({
            key: this.survey.assessments[i].id.toString(),
            label: this.survey.assessments[i].assessmentDesc,
            searchable: true,
            options: this.survey.assessments[i].choices,
            addNewOption: true,
            addNewOptionText: 'id',
            optionLabelKey: 'choiceDesc',
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
            ]
        });
        // Push
        this.fields.push(tempField);
    };
    /**
     * This funtion is used to create a SelectField
     * @param i Is used to determine which assessment has been inputed
     */
    FormComponent.prototype.createSelectMany = function (i) {
        // Push new select into the fields array
        var tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["SelectField"]({
            key: this.survey.assessments[i].id.toString(),
            label: this.survey.assessments[i].assessmentDesc,
            searchable: true,
            options: this.survey.assessments[i].choices,
            addNewOption: true,
            addNewOptionText: 'id',
            optionLabelKey: 'choiceDesc',
            multiple: true,
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
            ]
        });
        // Push
        this.fields.push(tempField);
    };
    /**
     * This funtion is used to create a RadioGroup
     * @param i Is used to determine which assessment has been inputed
     */
    FormComponent.prototype.createRadioGroup = function (i) {
        // Push new radio group into the fields array
        var tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["RadioGroupField"]({
            key: this.survey.assessments[i].id.toString(),
            label: this.survey.assessments[i].assessmentDesc,
            options: Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.survey.assessments[i].choices).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(10)),
            optionValueKey: 'id',
            optionLabelKey: 'choiceDesc',
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
            ]
        });
        // Push
        this.fields.push(tempField);
    };
    /**
     * Used to create a TextField
     * @param i Is used to determine which assessment has been inputed
     */
    FormComponent.prototype.createText = function (i) {
        // Push new text field into the fields array
        var tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            key: this.survey.assessments[i].id,
            label: this.survey.assessments[i].assessmentDesc,
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
            ]
        });
        // Push
        this.fields.push(tempField);
    };
    /**
     * Used to create a NumberField
     * @param i Is used to determine which assessment has been inputed
     */
    FormComponent.prototype.createNumber = function (i) {
        // Push new number field into the fields array
        var tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["NumberField"]({
            key: this.survey.assessments[i].id,
            label: this.survey.assessments[i].assessmentDesc + ' (Number)',
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)
            ]
        });
        // Push
        this.fields.push(tempField);
    };
    /**
     * Used to create a TextField
     * @param i Is used to determine which assessment has been inputed
     */
    FormComponent.prototype.createCheckBox = function (i) {
        // Push new text field into the fields array
        var tempField = new _esss_ng_xform__WEBPACK_IMPORTED_MODULE_3__["CheckboxField"]({
            key: this.survey.assessments[i].id,
            label: this.survey.assessments[i].assessmentDesc,
        });
        // Push
        this.fields.push(tempField);
    };
    FormComponent.prototype.onSubmit = function (values) {
        this.model = values;
        console.log(this.model);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _Survey__WEBPACK_IMPORTED_MODULE_9__["Survey"])
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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
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

module.exports = "<div id=\"survey\" *ngIf=\"survey\">\n    <app-form [survey]=\"survey\" [tabTitle]=\"tabTitle\"></app-form>\n</div>\n\n"

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
/* harmony import */ var _Survey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Survey */ "./src/app/Survey.ts");
/* harmony import */ var _Assessment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assessment */ "./src/app/Assessment.ts");
/* harmony import */ var _Choice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Choice */ "./src/app/Choice.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/survey.service */ "./src/app/_services/survey.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






// import {ActivatedRoute} from '@angular/router';


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
            .subscribe(function (data) { return _this.tabViews = data; }, // Move data into TabView
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
        this.createSurvey(); // init survey
        var tempAssessment; // Create a temporary
        var i = 0; // Iterates through the tab view
        var j = 0; // Iterates through the assessment choices
        this.tabTitle = this.tabViews[0].tabViewLabel;
        for (i; i < this.tabViews.length; i++) {
            tempAssessment = this.createAssessment(i); // Create a new assessment
            if (this.tabViews[i].assessmentType.toString() === '4') {
                tempAssessment.addChoice(this.createChoice(i, 4)); // Add a single choice to an assessment
            }
            else if (this.tabViews[i].assessmentType.toString() === '5') {
                j = i; // index of the choice
                while (this.tabViews[j].assessmentId === this.tabViews[i].assessmentId) {
                    tempAssessment.addChoice(this.createChoice(j, 5)); // Add a single a choice to an assessment
                    j++;
                }
                i = j; // Update new position of i
            }
            console.log(tempAssessment);
            this.survey.addAssessment(tempAssessment); // Add the assessment to the survey
        }
    };
    /**
     * Creates a new choice based on the assessment type
     * @param i
     * Index of the array
     * @type
     * The assessment type
     */
    SortComponent.prototype.createChoice = function (i, type) {
        var tempChoices; // Create temp choice
        /** Creates a default choice*/
        if (type === 4) {
            tempChoices = new _Choice__WEBPACK_IMPORTED_MODULE_4__["Choice"](4, 'Type 4');
            return tempChoices;
        }
        else {
            /** Creates a normal choice*/
            tempChoices = new _Choice__WEBPACK_IMPORTED_MODULE_4__["Choice"](this.tabViews[i].choiceId, this.tabViews[i].choiceLabel);
        }
        return tempChoices;
    };
    /**
     * Creates a new survey
     */
    SortComponent.prototype.createSurvey = function () {
        this.survey = new _Survey__WEBPACK_IMPORTED_MODULE_2__["Survey"](this.tabViews[0].tabViewId, this.tabViews[0].tabViewLabel);
    };
    /**
     * Init temp assessment
     * @param i
     * Index of the array
     */
    SortComponent.prototype.createAssessment = function (i) {
        var tempAssessment = new _Assessment__WEBPACK_IMPORTED_MODULE_3__["Assessment"](this.tabViews[i].assessmentId, this.tabViews[i].assessmentType, this.tabViews[i].assessmentLabel.trim());
        return tempAssessment;
    };
    SortComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sort',
            template: __webpack_require__(/*! ./sort.component.html */ "./src/app/sort/sort.component.html"),
            styles: [__webpack_require__(/*! ./sort.component.css */ "./src/app/sort/sort.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _services_survey_service__WEBPACK_IMPORTED_MODULE_6__["SurveyService"]])
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
    production: false
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