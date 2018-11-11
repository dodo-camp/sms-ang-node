(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module~text-screen-text-screen-module"],{

/***/ "./node_modules/@angular/cdk/esm5/text-field.es5.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/text-field.es5.js ***!
  \**********************************************************/
/*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function() { return AutofillMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAutofill", function() { return CdkAutofill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function() { return CdkTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldModule", function() { return TextFieldModule; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Options to pass to the animationstart listener.
  @type {?} */
var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/\@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */
var AutofillMonitor = /** @class */ (function () {
    function AutofillMonitor(_platform, _ngZone) {
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._monitoredElements = new Map();
    }
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    AutofillMonitor.prototype.monitor = /**
     * @param {?} elementOrRef
     * @return {?}
     */
    function (elementOrRef) {
        var _this = this;
        if (!this._platform.isBrowser) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }
        /** @type {?} */
        var element = elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
        /** @type {?} */
        var info = this._monitoredElements.get(element);
        if (info) {
            return info.subject.asObservable();
        }
        /** @type {?} */
        var result = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** @type {?} */
        var cssClass = 'cdk-text-field-autofilled';
        /** @type {?} */
        var listener = /** @type {?} */ ((function (event) {
            // Animation events fire on initial element render, we check for the presence of the autofill
            // CSS class to make sure this is a real change in state, not just the initial render before
            // we fire off events.
            if (event.animationName === 'cdk-text-field-autofill-start' &&
                !element.classList.contains(cssClass)) {
                element.classList.add(cssClass);
                _this._ngZone.run(function () { return result.next({ target: /** @type {?} */ (event.target), isAutofilled: true }); });
            }
            else if (event.animationName === 'cdk-text-field-autofill-end' &&
                element.classList.contains(cssClass)) {
                element.classList.remove(cssClass);
                _this._ngZone.run(function () { return result.next({ target: /** @type {?} */ (event.target), isAutofilled: false }); });
            }
        }));
        this._ngZone.runOutsideAngular(function () {
            element.addEventListener('animationstart', listener, listenerOptions);
            element.classList.add('cdk-text-field-autofill-monitored');
        });
        this._monitoredElements.set(element, {
            subject: result,
            unlisten: function () {
                element.removeEventListener('animationstart', listener, listenerOptions);
            }
        });
        return result.asObservable();
    };
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    AutofillMonitor.prototype.stopMonitoring = /**
     * @param {?} elementOrRef
     * @return {?}
     */
    function (elementOrRef) {
        /** @type {?} */
        var element = elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
        /** @type {?} */
        var info = this._monitoredElements.get(element);
        if (info) {
            info.unlisten();
            info.subject.complete();
            element.classList.remove('cdk-text-field-autofill-monitored');
            element.classList.remove('cdk-text-field-autofilled');
            this._monitoredElements.delete(element);
        }
    };
    /**
     * @return {?}
     */
    AutofillMonitor.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._monitoredElements.forEach(function (_info, element) { return _this.stopMonitoring(element); });
    };
    AutofillMonitor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    AutofillMonitor.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    /** @nocollapse */ AutofillMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function AutofillMonitor_Factory() { return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: AutofillMonitor, providedIn: "root" });
    return AutofillMonitor;
}());
/**
 * A directive that can be used to monitor the autofill state of an input.
 */
var CdkAutofill = /** @class */ (function () {
    function CdkAutofill(_elementRef, _autofillMonitor) {
        this._elementRef = _elementRef;
        this._autofillMonitor = _autofillMonitor;
        /**
         * Emits when the autofill state of the element changes.
         */
        this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    CdkAutofill.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._autofillMonitor
            .monitor(this._elementRef)
            .subscribe(function (event) { return _this.cdkAutofill.emit(event); });
    };
    /**
     * @return {?}
     */
    CdkAutofill.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._autofillMonitor.stopMonitoring(this._elementRef);
    };
    CdkAutofill.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkAutofill]',
                },] },
    ];
    /** @nocollapse */
    CdkAutofill.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: AutofillMonitor }
    ]; };
    CdkAutofill.propDecorators = {
        cdkAutofill: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return CdkAutofill;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to automatically resize a textarea to fit its content.
 */
var CdkTextareaAutosize = /** @class */ (function () {
    function CdkTextareaAutosize(_elementRef, _platform, _ngZone) {
        this._elementRef = _elementRef;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._enabled = true;
        /**
         * Value of minRows as of last resize. If the minRows has decreased, the
         * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
         * does not have the same problem because it does not affect the textarea's scrollHeight.
         */
        this._previousMinRows = -1;
        this._textareaElement = /** @type {?} */ (this._elementRef.nativeElement);
    }
    Object.defineProperty(CdkTextareaAutosize.prototype, "minRows", {
        /** Minimum amount of rows in the textarea. */
        get: /**
         * Minimum amount of rows in the textarea.
         * @return {?}
         */
        function () { return this._minRows; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minRows = value;
            this._setMinHeight();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTextareaAutosize.prototype, "maxRows", {
        /** Maximum amount of rows in the textarea. */
        get: /**
         * Maximum amount of rows in the textarea.
         * @return {?}
         */
        function () { return this._maxRows; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxRows = value;
            this._setMaxHeight();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTextareaAutosize.prototype, "enabled", {
        /** Whether autosizing is enabled or not */
        get: /**
         * Whether autosizing is enabled or not
         * @return {?}
         */
        function () { return this._enabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
            // Only act if the actual value changed. This specifically helps to not run
            // resizeToFitContent too early (i.e. before ngAfterViewInit)
            if (this._enabled !== value) {
                (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the minimum height of the textarea as determined by minRows. */
    /**
     * Sets the minimum height of the textarea as determined by minRows.
     * @return {?}
     */
    CdkTextareaAutosize.prototype._setMinHeight = /**
     * Sets the minimum height of the textarea as determined by minRows.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var minHeight = this.minRows && this._cachedLineHeight ?
            this.minRows * this._cachedLineHeight + "px" : null;
        if (minHeight) {
            this._textareaElement.style.minHeight = minHeight;
        }
    };
    /** Sets the maximum height of the textarea as determined by maxRows. */
    /**
     * Sets the maximum height of the textarea as determined by maxRows.
     * @return {?}
     */
    CdkTextareaAutosize.prototype._setMaxHeight = /**
     * Sets the maximum height of the textarea as determined by maxRows.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxHeight = this.maxRows && this._cachedLineHeight ?
            this.maxRows * this._cachedLineHeight + "px" : null;
        if (maxHeight) {
            this._textareaElement.style.maxHeight = maxHeight;
        }
    };
    /**
     * @return {?}
     */
    CdkTextareaAutosize.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._platform.isBrowser) {
            // Remember the height which we started with in case autosizing is disabled
            this._initialHeight = this._textareaElement.style.height;
            this.resizeToFitContent();
            this._ngZone.runOutsideAngular(function () {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this._destroyed))
                    .subscribe(function () { return _this.resizeToFitContent(true); });
            });
        }
    };
    /**
     * @return {?}
     */
    CdkTextareaAutosize.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     * @return {?}
     */
    CdkTextareaAutosize.prototype._cacheTextareaLineHeight = /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     * @return {?}
     */
    function () {
        if (this._cachedLineHeight) {
            return;
        }
        /** @type {?} */
        var textareaClone = /** @type {?} */ (this._textareaElement.cloneNode(false));
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden'; /** @type {?} */
        ((this._textareaElement.parentNode)).appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.clientHeight; /** @type {?} */
        ((this._textareaElement.parentNode)).removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this._setMinHeight();
        this._setMaxHeight();
    };
    /**
     * @return {?}
     */
    CdkTextareaAutosize.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._platform.isBrowser) {
            this.resizeToFitContent();
        }
    };
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */
    /**
     * Resize the textarea to fit its content.
     * @param {?=} force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     * @return {?}
     */
    CdkTextareaAutosize.prototype.resizeToFitContent = /**
     * Resize the textarea to fit its content.
     * @param {?=} force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     * @return {?}
     */
    function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        // If autosizing is disabled, just skip everything else
        if (!this._enabled) {
            return;
        }
        this._cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this._cachedLineHeight) {
            return;
        }
        /** @type {?} */
        var textarea = /** @type {?} */ (this._elementRef.nativeElement);
        /** @type {?} */
        var value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
            return;
        }
        /** @type {?} */
        var placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('cdk-textarea-autosize-measuring');
        textarea.placeholder = '';
        /** @type {?} */
        var height = textarea.scrollHeight - 4;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = height + "px";
        textarea.classList.remove('cdk-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(function () { return requestAnimationFrame(function () {
                var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                // IE will throw an "Unspecified error" if we try to set the selection range after the
                // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                // between the time we requested the animation frame and when it was executed.
                // Also note that we have to assert that the textarea is focused before we set the
                // selection range. Setting the selection range on a non-focused textarea will cause
                // it to receive focus on IE and Edge.
                if (!_this._destroyed.isStopped && document.activeElement === textarea) {
                    textarea.setSelectionRange(selectionStart, selectionEnd);
                }
            }); });
        }
        this._previousValue = value;
        this._previousMinRows = this._minRows;
    };
    /**
     * Resets the textarea to it's original size
     */
    /**
     * Resets the textarea to it's original size
     * @return {?}
     */
    CdkTextareaAutosize.prototype.reset = /**
     * Resets the textarea to it's original size
     * @return {?}
     */
    function () {
        // Do not try to change the textarea, if the initialHeight has not been determined yet
        // This might potentially remove styles when reset() is called before ngAfterViewInit
        if (this._initialHeight === undefined) {
            return;
        }
        this._textareaElement.style.height = this._initialHeight;
    };
    /**
     * @return {?}
     */
    CdkTextareaAutosize.prototype._noopInputHandler = /**
     * @return {?}
     */
    function () {
        // no-op handler that ensures we're running change detection on input events.
    };
    CdkTextareaAutosize.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'textarea[cdkTextareaAutosize]',
                    exportAs: 'cdkTextareaAutosize',
                    host: {
                        'class': 'cdk-textarea-autosize',
                        // Textarea elements that have the directive applied should have a single row by default.
                        // Browsers normally show two rows by default and therefore this limits the minRows binding.
                        'rows': '1',
                        '(input)': '_noopInputHandler()',
                    },
                },] },
    ];
    /** @nocollapse */
    CdkTextareaAutosize.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    CdkTextareaAutosize.propDecorators = {
        minRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAutosizeMinRows',] }],
        maxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAutosizeMaxRows',] }],
        enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTextareaAutosize',] }]
    };
    return CdkTextareaAutosize;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TextFieldModule = /** @class */ (function () {
    function TextFieldModule() {
    }
    TextFieldModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [CdkAutofill, CdkTextareaAutosize],
                    imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
                    exports: [CdkAutofill, CdkTextareaAutosize],
                },] },
    ];
    return TextFieldModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=text-field.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/form-field.es5.js":
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/form-field.es5.js ***!
  \***************************************************************/
/*! exports provided: MatFormFieldModule, MatError, MatFormFieldBase, _MatFormFieldMixinBase, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl, getMatFormFieldPlaceholderConflictError, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MatHint, MatPlaceholder, MatPrefix, MatSuffix, MatLabel, matFormFieldAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function() { return MatFormFieldModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatError", function() { return MatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldBase", function() { return MatFormFieldBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatFormFieldMixinBase", function() { return _MatFormFieldMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function() { return MAT_FORM_FIELD_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormField", function() { return MatFormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function() { return MatFormFieldControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function() { return getMatFormFieldPlaceholderConflictError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function() { return getMatFormFieldDuplicatedHintError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function() { return getMatFormFieldMissingControlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHint", function() { return MatHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function() { return MatPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPrefix", function() { return MatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSuffix", function() { return MatSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLabel", function() { return MatLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function() { return matFormFieldAnimations; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var nextUniqueId = 0;
/**
 * Single error message to be shown underneath the form field.
 */
var MatError = /** @class */ (function () {
    function MatError() {
        this.id = "mat-error-" + nextUniqueId++;
    }
    MatError.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-error',
                    host: {
                        'class': 'mat-error',
                        'role': 'alert',
                        '[attr.id]': 'id',
                    }
                },] },
    ];
    MatError.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return MatError;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Animations used by the MatFormField.
 * \@docs-private
  @type {?} */
var matFormFieldAnimations = {
    /** Animation that transitions the form field's error and hint messages. */
    transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transitionMessages', [
        // TODO(mmalerba): Use angular animations for label animation as well.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
        ]),
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * An interface which allows a control to work inside of a `MatFormField`.
 * @abstract
 * @template T
 */
var  /**
 * An interface which allows a control to work inside of a `MatFormField`.
 * @abstract
 * @template T
 */
MatFormFieldControl = /** @class */ (function () {
    function MatFormFieldControl() {
    }
    return MatFormFieldControl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * \@docs-private
 * @return {?}
 */
function getMatFormFieldPlaceholderConflictError() {
    return Error('Placeholder attribute and child element were both specified.');
}
/**
 * \@docs-private
 * @param {?} align
 * @return {?}
 */
function getMatFormFieldDuplicatedHintError(align) {
    return Error("A hint was already declared for 'align=\"" + align + "\"'.");
}
/**
 * \@docs-private
 * @return {?}
 */
function getMatFormFieldMissingControlError() {
    return Error('mat-form-field must contain a MatFormFieldControl.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var nextUniqueId$1 = 0;
/**
 * Hint text to be shown underneath the form field control.
 */
var MatHint = /** @class */ (function () {
    function MatHint() {
        /**
         * Whether to align the hint label at the start or end of the line.
         */
        this.align = 'start';
        /**
         * Unique ID for the hint. Used for the aria-describedby on the form field control.
         */
        this.id = "mat-hint-" + nextUniqueId$1++;
    }
    MatHint.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-hint',
                    host: {
                        'class': 'mat-hint',
                        '[class.mat-right]': 'align == "end"',
                        '[attr.id]': 'id',
                        // Remove align attribute to prevent it from interfering with layout.
                        '[attr.align]': 'null',
                    }
                },] },
    ];
    MatHint.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return MatHint;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The floating label for a `mat-form-field`.
 */
var MatLabel = /** @class */ (function () {
    function MatLabel() {
    }
    MatLabel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-label'
                },] },
    ];
    return MatLabel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The placeholder text for an `MatFormField`.
 * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
 *     placeholder.
 * \@breaking-change 8.0.0
 */
var MatPlaceholder = /** @class */ (function () {
    function MatPlaceholder() {
    }
    MatPlaceholder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-placeholder'
                },] },
    ];
    return MatPlaceholder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Prefix to be placed the the front of the form field.
 */
var MatPrefix = /** @class */ (function () {
    function MatPrefix() {
    }
    MatPrefix.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[matPrefix]',
                },] },
    ];
    return MatPrefix;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Suffix to be placed at the end of the form field.
 */
var MatSuffix = /** @class */ (function () {
    function MatSuffix() {
    }
    MatSuffix.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[matSuffix]',
                },] },
    ];
    return MatSuffix;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var nextUniqueId$2 = 0;
/** @type {?} */
var floatingLabelScale = 0.75;
/** @type {?} */
var outlineGapPadding = 5;
/**
 * Boilerplate for applying mixins to MatFormField.
 * \@docs-private
 */
var  /**
 * Boilerplate for applying mixins to MatFormField.
 * \@docs-private
 */
MatFormFieldBase = /** @class */ (function () {
    function MatFormFieldBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatFormFieldBase;
}());
/** *
 * Base class to which we're applying the form field mixins.
 * \@docs-private
  @type {?} */
var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(MatFormFieldBase, 'primary');
/** *
 * Injection token that can be used to configure the
 * default options for all form field within an app.
  @type {?} */
var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
/**
 * Container for form controls that applies Material Design styling and behavior.
 */
var MatFormField = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatFormField, _super);
    function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
        var _this = _super.call(this, _elementRef) || this;
        _this._elementRef = _elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._dir = _dir;
        _this._defaults = _defaults;
        _this._platform = _platform;
        _this._ngZone = _ngZone;
        _this._outlineGapCalculationNeeded = false;
        /**
         * Override for the logic that disables the label animation in certain cases.
         */
        _this._showAlwaysAnimate = false;
        /**
         * State of the mat-hint and mat-error animations.
         */
        _this._subscriptAnimationState = '';
        _this._hintLabel = '';
        // Unique id for the hint label.
        _this._hintLabelId = "mat-hint-" + nextUniqueId$2++;
        // Unique id for the internal form field label.
        _this._labelId = "mat-form-field-label-" + nextUniqueId$2++;
        _this._labelOptions = labelOptions ? labelOptions : {};
        _this.floatLabel = _this._labelOptions.float || 'auto';
        _this._animationsEnabled = _animationMode !== 'NoopAnimations';
        // Set the default through here so we invoke the setter on the first run.
        _this.appearance = (_defaults && _defaults.appearance) ? _defaults.appearance : 'legacy';
        return _this;
    }
    Object.defineProperty(MatFormField.prototype, "appearance", {
        /** The form-field appearance style. */
        get: /**
         * The form-field appearance style.
         * @return {?}
         */
        function () { return this._appearance; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var oldValue = this._appearance;
            this._appearance = value || (this._defaults && this._defaults.appearance) || 'legacy';
            if (this._appearance === 'outline' && oldValue !== value) {
                this._updateOutlineGapOnStable();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFormField.prototype, "hideRequiredMarker", {
        /** Whether the required marker should be hidden. */
        get: /**
         * Whether the required marker should be hidden.
         * @return {?}
         */
        function () { return this._hideRequiredMarker; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFormField.prototype, "_shouldAlwaysFloat", {
        /** Whether the floating label should always float or not. */
        get: /**
         * Whether the floating label should always float or not.
         * @return {?}
         */
        function () {
            return this.floatLabel === 'always' && !this._showAlwaysAnimate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFormField.prototype, "_canLabelFloat", {
        /** Whether the label can float or not. */
        get: /**
         * Whether the label can float or not.
         * @return {?}
         */
        function () { return this.floatLabel !== 'never'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFormField.prototype, "hintLabel", {
        /** Text for the form field hint. */
        get: /**
         * Text for the form field hint.
         * @return {?}
         */
        function () { return this._hintLabel; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hintLabel = value;
            this._processHints();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFormField.prototype, "floatLabel", {
        /**
         * Whether the label should always float, never float or float as the user types.
         *
         * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
         * way to make the floating label emulate the behavior of a standard input placeholder. However
         * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
         * appearances the `never` option has been disabled in favor of just using the placeholder.
         */
        get: /**
         * Whether the label should always float, never float or float as the user types.
         *
         * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
         * way to make the floating label emulate the behavior of a standard input placeholder. However
         * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
         * appearances the `never` option has been disabled in favor of just using the placeholder.
         * @return {?}
         */
        function () {
            return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._floatLabel) {
                this._floatLabel = value || this._labelOptions.float || 'auto';
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     */
    /**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     * @return {?}
     */
    MatFormField.prototype.getConnectedOverlayOrigin = /**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     * @return {?}
     */
    function () {
        return this._connectionContainerRef || this._elementRef;
    };
    /**
     * @return {?}
     */
    MatFormField.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._validateControlChild();
        /** @type {?} */
        var control = this._control;
        if (control.controlType) {
            this._elementRef.nativeElement.classList.add("mat-form-field-type-" + control.controlType);
        }
        // Subscribe to changes in the child control state in order to update the form field UI.
        control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(/** @type {?} */ ((null)))).subscribe(function () {
            _this._validatePlaceholders();
            _this._syncDescribedByIds();
            _this._changeDetectorRef.markForCheck();
        });
        // Run change detection if the value changes.
        if (control.ngControl && control.ngControl.valueChanges) {
            control.ngControl.valueChanges.subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
        }
        // Run change detection and update the outline if the suffix or prefix changes.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(function () {
            _this._updateOutlineGapOnStable();
            _this._changeDetectorRef.markForCheck();
        });
        // Re-validate when the number of hints changes.
        this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
            _this._processHints();
            _this._changeDetectorRef.markForCheck();
        });
        // Update the aria-described by when the number of errors changes.
        this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
            _this._syncDescribedByIds();
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * @return {?}
     */
    MatFormField.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        this._validateControlChild();
        if (this._outlineGapCalculationNeeded) {
            this.updateOutlineGap();
        }
    };
    /**
     * @return {?}
     */
    MatFormField.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // Avoid animations on load.
        this._subscriptAnimationState = 'enter';
        this._changeDetectorRef.detectChanges();
    };
    /** Determines whether a class from the NgControl should be forwarded to the host element. */
    /**
     * Determines whether a class from the NgControl should be forwarded to the host element.
     * @param {?} prop
     * @return {?}
     */
    MatFormField.prototype._shouldForward = /**
     * Determines whether a class from the NgControl should be forwarded to the host element.
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        /** @type {?} */
        var ngControl = this._control ? this._control.ngControl : null;
        return ngControl && ngControl[prop];
    };
    /**
     * @return {?}
     */
    MatFormField.prototype._hasPlaceholder = /**
     * @return {?}
     */
    function () {
        return !!(this._control && this._control.placeholder || this._placeholderChild);
    };
    /**
     * @return {?}
     */
    MatFormField.prototype._hasLabel = /**
     * @return {?}
     */
    function () {
        return !!this._labelChild;
    };
    /**
     * @return {?}
     */
    MatFormField.prototype._shouldLabelFloat = /**
     * @return {?}
     */
    function () {
        return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
    };
    /**
     * @return {?}
     */
    MatFormField.prototype._hideControlPlaceholder = /**
     * @return {?}
     */
    function () {
        // In the legacy appearance the placeholder is promoted to a label if no label is given.
        return this.appearance === 'legacy' && !this._hasLabel() ||
            this._hasLabel() && !this._shouldLabelFloat();
    };
    /**
     * @return {?}
     */
    MatFormField.prototype._hasFloatingLabel = /**
     * @return {?}
     */
    function () {
        // In the legacy appearance the placeholder is promoted to a label if no label is given.
        return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
    };
    /** Determines whether to display hints or errors. */
    /**
     * Determines whether to display hints or errors.
     * @return {?}
     */
    MatFormField.prototype._getDisplayedMessages = /**
     * Determines whether to display hints or errors.
     * @return {?}
     */
    function () {
        return (this._errorChildren && this._errorChildren.length > 0 &&
            this._control.errorState) ? 'error' : 'hint';
    };
    /** Animates the placeholder up and locks it in position. */
    /**
     * Animates the placeholder up and locks it in position.
     * @return {?}
     */
    MatFormField.prototype._animateAndLockLabel = /**
     * Animates the placeholder up and locks it in position.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._hasFloatingLabel() && this._canLabelFloat) {
            // If animations are disabled, we shouldn't go in here,
            // because the `transitionend` will never fire.
            if (this._animationsEnabled) {
                this._showAlwaysAnimate = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                    _this._showAlwaysAnimate = false;
                });
            }
            this.floatLabel = 'always';
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
     * or child element with the `mat-placeholder` directive).
     * @return {?}
     */
    MatFormField.prototype._validatePlaceholders = /**
     * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
     * or child element with the `mat-placeholder` directive).
     * @return {?}
     */
    function () {
        if (this._control.placeholder && this._placeholderChild) {
            throw getMatFormFieldPlaceholderConflictError();
        }
    };
    /**
     * Does any extra processing that is required when handling the hints.
     * @return {?}
     */
    MatFormField.prototype._processHints = /**
     * Does any extra processing that is required when handling the hints.
     * @return {?}
     */
    function () {
        this._validateHints();
        this._syncDescribedByIds();
    };
    /**
     * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     * @return {?}
     */
    MatFormField.prototype._validateHints = /**
     * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._hintChildren) {
            /** @type {?} */
            var startHint_1 = void 0;
            /** @type {?} */
            var endHint_1 = void 0;
            this._hintChildren.forEach(function (hint) {
                if (hint.align === 'start') {
                    if (startHint_1 || _this.hintLabel) {
                        throw getMatFormFieldDuplicatedHintError('start');
                    }
                    startHint_1 = hint;
                }
                else if (hint.align === 'end') {
                    if (endHint_1) {
                        throw getMatFormFieldDuplicatedHintError('end');
                    }
                    endHint_1 = hint;
                }
            });
        }
    };
    /**
     * Sets the list of element IDs that describe the child control. This allows the control to update
     * its `aria-describedby` attribute accordingly.
     * @return {?}
     */
    MatFormField.prototype._syncDescribedByIds = /**
     * Sets the list of element IDs that describe the child control. This allows the control to update
     * its `aria-describedby` attribute accordingly.
     * @return {?}
     */
    function () {
        if (this._control) {
            /** @type {?} */
            var ids = [];
            if (this._getDisplayedMessages() === 'hint') {
                /** @type {?} */
                var startHint = this._hintChildren ?
                    this._hintChildren.find(function (hint) { return hint.align === 'start'; }) : null;
                /** @type {?} */
                var endHint = this._hintChildren ?
                    this._hintChildren.find(function (hint) { return hint.align === 'end'; }) : null;
                if (startHint) {
                    ids.push(startHint.id);
                }
                else if (this._hintLabel) {
                    ids.push(this._hintLabelId);
                }
                if (endHint) {
                    ids.push(endHint.id);
                }
            }
            else if (this._errorChildren) {
                ids = this._errorChildren.map(function (error) { return error.id; });
            }
            this._control.setDescribedByIds(ids);
        }
    };
    /** Throws an error if the form field's control is missing. */
    /**
     * Throws an error if the form field's control is missing.
     * @return {?}
     */
    MatFormField.prototype._validateControlChild = /**
     * Throws an error if the form field's control is missing.
     * @return {?}
     */
    function () {
        if (!this._control) {
            throw getMatFormFieldMissingControlError();
        }
    };
    /**
     * Updates the width and position of the gap in the outline. Only relevant for the outline
     * appearance.
     */
    /**
     * Updates the width and position of the gap in the outline. Only relevant for the outline
     * appearance.
     * @return {?}
     */
    MatFormField.prototype.updateOutlineGap = /**
     * Updates the width and position of the gap in the outline. Only relevant for the outline
     * appearance.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var labelEl = this._label ? this._label.nativeElement : null;
        if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length ||
            !labelEl.textContent.trim()) {
            return;
        }
        if (this._platform && !this._platform.isBrowser) {
            // getBoundingClientRect isn't available on the server.
            return;
        }
        // If the element is not present in the DOM, the outline gap will need to be calculated
        // the next time it is checked and in the DOM.
        if (!/** @type {?} */ ((document.documentElement)).contains(this._elementRef.nativeElement)) {
            this._outlineGapCalculationNeeded = true;
            return;
        }
        /** @type {?} */
        var startWidth = 0;
        /** @type {?} */
        var gapWidth = 0;
        /** @type {?} */
        var startEls = this._connectionContainerRef.nativeElement.querySelectorAll('.mat-form-field-outline-start');
        /** @type {?} */
        var gapEls = this._connectionContainerRef.nativeElement.querySelectorAll('.mat-form-field-outline-gap');
        if (this._label && this._label.nativeElement.children.length) {
            /** @type {?} */
            var containerStart = this._getStartEnd(this._connectionContainerRef.nativeElement.getBoundingClientRect());
            /** @type {?} */
            var labelStart = this._getStartEnd(labelEl.children[0].getBoundingClientRect());
            /** @type {?} */
            var labelWidth = 0;
            for (var _i = 0, _a = labelEl.children; _i < _a.length; _i++) {
                var child = _a[_i];
                labelWidth += child.offsetWidth;
            }
            startWidth = labelStart - containerStart - outlineGapPadding;
            gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
        }
        for (var i = 0; i < startEls.length; i++) {
            startEls.item(i).style.width = startWidth + "px";
        }
        for (var i = 0; i < gapEls.length; i++) {
            gapEls.item(i).style.width = gapWidth + "px";
        }
        this._outlineGapCalculationNeeded = false;
    };
    /**
     * Gets the start end of the rect considering the current directionality.
     * @param {?} rect
     * @return {?}
     */
    MatFormField.prototype._getStartEnd = /**
     * Gets the start end of the rect considering the current directionality.
     * @param {?} rect
     * @return {?}
     */
    function (rect) {
        return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
    };
    /**
     * Updates the outline gap the new time the zone stabilizes.
     * @return {?}
     */
    MatFormField.prototype._updateOutlineGapOnStable = /**
     * Updates the outline gap the new time the zone stabilizes.
     * @return {?}
     */
    function () {
        var _this = this;
        // @breaking-change 8.0.0 Remove this check and else block once _ngZone is required.
        if (this._ngZone) {
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () { return _this.updateOutlineGap(); });
        }
        else {
            Promise.resolve().then(function () { return _this.updateOutlineGap(); });
        }
    };
    MatFormField.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-form-field',
                    exportAs: 'matFormField',
                    template: "<div class=\"mat-form-field-wrapper\"><div class=\"mat-form-field-flex\" #connectionContainer (click)=\"_control.onContainerClick && _control.onContainerClick($event)\"><ng-container *ngIf=\"appearance == 'outline'\"><div class=\"mat-form-field-outline\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div><div class=\"mat-form-field-outline mat-form-field-outline-thick\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div></ng-container><div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\"><ng-content select=\"[matPrefix]\"></ng-content></div><div class=\"mat-form-field-infix\" #inputContainer><ng-content></ng-content><span class=\"mat-form-field-label-wrapper\"><label class=\"mat-form-field-label\" (cdkObserveContent)=\"updateOutlineGap()\" [cdkObserveContentDisabled]=\"appearance != 'outline'\" [id]=\"_labelId\" [attr.for]=\"_control.id\" [attr.aria-owns]=\"_control.id\" [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\" #label *ngIf=\"_hasFloatingLabel()\" [ngSwitch]=\"_hasLabel()\"><ng-container *ngSwitchCase=\"false\"><ng-content select=\"mat-placeholder\"></ng-content>{{_control.placeholder}}</ng-container><ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content><span class=\"mat-placeholder-required mat-form-field-required-marker\" aria-hidden=\"true\" *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&nbsp;*</span></label></span></div><div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\"><ng-content select=\"[matSuffix]\"></ng-content></div></div><div class=\"mat-form-field-underline\" #underline *ngIf=\"appearance != 'outline'\"><span class=\"mat-form-field-ripple\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\"></span></div><div class=\"mat-form-field-subscript-wrapper\" [ngSwitch]=\"_getDisplayedMessages()\"><div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\"><ng-content select=\"mat-error\"></ng-content></div><div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\" [@transitionMessages]=\"_subscriptAnimationState\"><div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div><ng-content select=\"mat-hint:not([align='end'])\"></ng-content><div class=\"mat-form-field-hint-spacer\"></div><ng-content select=\"mat-hint[align='end']\"></ng-content></div></div></div>",
                    // MatInput is a directive and can't have styles, so we need to include its styles here
                    // in form-field-input.css. The MatInput styles are fairly minimal so it shouldn't be a
                    // big deal for people who aren't using MatInput.
                    styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}@media screen and (-ms-high-contrast:active){.mat-form-field-infix{border-image:linear-gradient(transparent,transparent)}}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none} .mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em} .mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button,.mat-input-element::-webkit-inner-spin-button{font-size:.75em}.mat-input-element::placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:0 0}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px} .mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px} .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{transition:none} .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media screen and (-ms-high-contrast:active){.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],
                    animations: [matFormFieldAnimations.transitionMessages],
                    host: {
                        'class': 'mat-form-field',
                        '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
                        '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
                        '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
                        '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
                        '[class.mat-form-field-invalid]': '_control.errorState',
                        '[class.mat-form-field-can-float]': '_canLabelFloat',
                        '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
                        '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
                        '[class.mat-form-field-disabled]': '_control.disabled',
                        '[class.mat-form-field-autofilled]': '_control.autofilled',
                        '[class.mat-focused]': '_control.focused',
                        '[class.mat-accent]': 'color == "accent"',
                        '[class.mat-warn]': 'color == "warn"',
                        '[class.ng-untouched]': '_shouldForward("untouched")',
                        '[class.ng-touched]': '_shouldForward("touched")',
                        '[class.ng-pristine]': '_shouldForward("pristine")',
                        '[class.ng-dirty]': '_shouldForward("dirty")',
                        '[class.ng-valid]': '_shouldForward("valid")',
                        '[class.ng-invalid]': '_shouldForward("invalid")',
                        '[class.ng-pending]': '_shouldForward("pending")',
                        '[class._mat-animation-noopable]': '!_animationsEnabled',
                    },
                    inputs: ['color'],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatFormField.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"],] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_FORM_FIELD_DEFAULT_OPTIONS,] }] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"],] }] }
    ]; };
    MatFormField.propDecorators = {
        appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hideRequiredMarker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hintLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        floatLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        underlineRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['underline',] }],
        _connectionContainerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['connectionContainer',] }],
        _inputContainerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['inputContainer',] }],
        _label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['label',] }],
        _control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatFormFieldControl,] }],
        _placeholderChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatPlaceholder,] }],
        _labelChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatLabel,] }],
        _errorChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatError,] }],
        _hintChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatHint,] }],
        _prefixChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatPrefix,] }],
        _suffixChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatSuffix,] }]
    };
    return MatFormField;
}(_MatFormFieldMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatFormFieldModule = /** @class */ (function () {
    function MatFormFieldModule() {
    }
    MatFormFieldModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        MatError,
                        MatFormField,
                        MatHint,
                        MatLabel,
                        MatPlaceholder,
                        MatPrefix,
                        MatSuffix,
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["ObserversModule"],
                    ],
                    exports: [
                        MatError,
                        MatFormField,
                        MatHint,
                        MatLabel,
                        MatPlaceholder,
                        MatPrefix,
                        MatSuffix,
                    ],
                },] },
    ];
    return MatFormFieldModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=form-field.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/input.es5.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/input.es5.js ***!
  \**********************************************************/
/*! exports provided: MatTextareaAutosize, MatInputBase, _MatInputMixinBase, MatInput, getMatInputUnsupportedTypeError, MatInputModule, MAT_INPUT_VALUE_ACCESSOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function() { return MatTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInputBase", function() { return MatInputBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatInputMixinBase", function() { return _MatInputMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInput", function() { return MatInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function() { return getMatInputUnsupportedTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInputModule", function() { return MatInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function() { return MAT_INPUT_VALUE_ACCESSOR; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to automatically resize a textarea to fit its content.
 * @deprecated Use `cdkTextareaAutosize` from `\@angular/cdk/text-field` instead.
 * \@breaking-change 8.0.0
 */
var MatTextareaAutosize = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatTextareaAutosize, _super);
    function MatTextareaAutosize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MatTextareaAutosize.prototype, "matAutosizeMinRows", {
        get: /**
         * @return {?}
         */
        function () { return this.minRows; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.minRows = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTextareaAutosize.prototype, "matAutosizeMaxRows", {
        get: /**
         * @return {?}
         */
        function () { return this.maxRows; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.maxRows = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTextareaAutosize.prototype, "matAutosize", {
        get: /**
         * @return {?}
         */
        function () { return this.enabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.enabled = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTextareaAutosize.prototype, "matTextareaAutosize", {
        get: /**
         * @return {?}
         */
        function () { return this.enabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.enabled = value; },
        enumerable: true,
        configurable: true
    });
    MatTextareaAutosize.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
                    exportAs: 'matTextareaAutosize',
                    inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
                    host: {
                        'class': 'cdk-textarea-autosize mat-autosize',
                        // Textarea elements that have the directive applied should have a single row by default.
                        // Browsers normally show two rows by default and therefore this limits the minRows binding.
                        'rows': '1',
                        '(input)': '_noopInputHandler()',
                    },
                },] },
    ];
    MatTextareaAutosize.propDecorators = {
        matAutosizeMinRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        matAutosizeMaxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        matAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mat-autosize',] }],
        matTextareaAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return MatTextareaAutosize;
}(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["CdkTextareaAutosize"]));
// TODO(devversion): workaround for https://github.com/angular/material2/issues/12760
(/** @type {?} */ (MatTextareaAutosize))['ctorParameters'] = function () {
    return (/** @type {?} */ (_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["CdkTextareaAutosize"]))['ctorParameters'];
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * \@docs-private
 * @param {?} type
 * @return {?}
 */
function getMatInputUnsupportedTypeError(type) {
    return Error("Input type \"" + type + "\" isn't supported by matInput.");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
  @type {?} */
var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MAT_INPUT_INVALID_TYPES = [
    'button',
    'checkbox',
    'file',
    'hidden',
    'image',
    'radio',
    'range',
    'reset',
    'submit'
];
/** @type {?} */
var nextUniqueId = 0;
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatInputBase = /** @class */ (function () {
    function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
    return MatInputBase;
}());
/** @type {?} */
var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinErrorState"])(MatInputBase);
/**
 * Directive that allows a native input to work inside a `MatFormField`.
 */
var MatInput = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatInput, _super);
    function MatInput(_elementRef, _platform, /** @docs-private */
    ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone) {
        var _this = _super.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
        _this._elementRef = _elementRef;
        _this._platform = _platform;
        _this.ngControl = ngControl;
        _this._autofillMonitor = _autofillMonitor;
        _this._uid = "mat-input-" + nextUniqueId++;
        /**
         * Whether the component is being rendered on the server.
         */
        _this._isServer = false;
        /**
         * Whether the component is a native html select.
         */
        _this._isNativeSelect = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */
        _this.focused = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */
        _this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */
        _this.controlType = 'mat-input';
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */
        _this.autofilled = false;
        _this._disabled = false;
        _this._required = false;
        _this._type = 'text';
        _this._readonly = false;
        _this._neverEmptyInputTypes = [
            'date',
            'datetime',
            'datetime-local',
            'month',
            'time',
            'week'
        ].filter(function (t) { return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getSupportedInputTypes"])().has(t); });
        /** @type {?} */
        var element = _this._elementRef.nativeElement;
        // If no input value accessor was explicitly specified, use the element as the input value
        // accessor.
        _this._inputValueAccessor = inputValueAccessor || element;
        _this._previousNativeValue = _this.value;
        // Force setter to be called in case id was not specified.
        _this.id = _this.id;
        // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
        // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
        // exists on iOS, we only bother to install the listener on iOS.
        if (_platform.IOS) {
            ngZone.runOutsideAngular(function () {
                _elementRef.nativeElement.addEventListener('keyup', function (event) {
                    /** @type {?} */
                    var el = /** @type {?} */ (event.target);
                    if (!el.value && !el.selectionStart && !el.selectionEnd) {
                        // Note: Just setting `0, 0` doesn't fix the issue. Setting
                        // `1, 1` fixes it for the first time that you type text and
                        // then hold delete. Toggling to `1, 1` and then back to
                        // `0, 0` seems to completely fix it.
                        el.setSelectionRange(1, 1);
                        el.setSelectionRange(0, 0);
                    }
                });
            });
        }
        _this._isServer = !_this._platform.isBrowser;
        _this._isNativeSelect = element.nodeName.toLowerCase() === 'select';
        if (_this._isNativeSelect) {
            _this.controlType = (/** @type {?} */ (element)).multiple ? 'mat-native-select-multiple' :
                'mat-native-select';
        }
        return _this;
    }
    Object.defineProperty(MatInput.prototype, "disabled", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
            // Browsers may not fire the blur event if the input is disabled too quickly.
            // Reset from here to ensure that the element doesn't become stuck.
            if (this.focused) {
                this.focused = false;
                this.stateChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "id", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._id; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._id = value || this._uid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "required", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "type", {
        /** Input type of the element. */
        get: /**
         * Input type of the element.
         * @return {?}
         */
        function () { return this._type; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value || 'text';
            this._validateType();
            // When using Angular inputs, developers are no longer able to set the properties on the native
            // input element. To ensure that bindings for `type` work, we need to sync the setter
            // with the native property. Textarea elements don't support the type property or attribute.
            if (!this._isTextarea() && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getSupportedInputTypes"])().has(this._type)) {
                (/** @type {?} */ (this._elementRef.nativeElement)).type = this._type;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "value", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._inputValueAccessor.value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this.value) {
                this._inputValueAccessor.value = value;
                this.stateChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "readonly", {
        /** Whether the element is readonly. */
        get: /**
         * Whether the element is readonly.
         * @return {?}
         */
        function () { return this._readonly; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatInput.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._platform.isBrowser) {
            this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (event) {
                _this.autofilled = event.isAutofilled;
                _this.stateChanges.next();
            });
        }
    };
    /**
     * @return {?}
     */
    MatInput.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.stateChanges.next();
    };
    /**
     * @return {?}
     */
    MatInput.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stateChanges.complete();
        if (this._platform.isBrowser) {
            this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
        }
    };
    /**
     * @return {?}
     */
    MatInput.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
        // We need to dirty-check the native element's value, because there are some cases where
        // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
        // updating the value using `emitEvent: false`).
        this._dirtyCheckNativeValue();
    };
    /** Focuses the input. */
    /**
     * Focuses the input.
     * @return {?}
     */
    MatInput.prototype.focus = /**
     * Focuses the input.
     * @return {?}
     */
    function () { this._elementRef.nativeElement.focus(); };
    /** Callback for the cases where the focused state of the input changes. */
    /**
     * Callback for the cases where the focused state of the input changes.
     * @param {?} isFocused
     * @return {?}
     */
    MatInput.prototype._focusChanged = /**
     * Callback for the cases where the focused state of the input changes.
     * @param {?} isFocused
     * @return {?}
     */
    function (isFocused) {
        if (isFocused !== this.focused && !this.readonly) {
            this.focused = isFocused;
            this.stateChanges.next();
        }
    };
    /**
     * @return {?}
     */
    MatInput.prototype._onInput = /**
     * @return {?}
     */
    function () {
        // This is a noop function and is used to let Angular know whenever the value changes.
        // Angular will run a new change detection each time the `input` event has been dispatched.
        // It's necessary that Angular recognizes the value change, because when floatingLabel
        // is set to false and Angular forms aren't used, the placeholder won't recognize the
        // value changes and will not disappear.
        // Listening to the input event wouldn't be necessary when the input is using the
        // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
    };
    /** Does some manual dirty checking on the native input `value` property. */
    /**
     * Does some manual dirty checking on the native input `value` property.
     * @return {?}
     */
    MatInput.prototype._dirtyCheckNativeValue = /**
     * Does some manual dirty checking on the native input `value` property.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newValue = this._elementRef.nativeElement.value;
        if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this.stateChanges.next();
        }
    };
    /** Make sure the input is a supported type. */
    /**
     * Make sure the input is a supported type.
     * @return {?}
     */
    MatInput.prototype._validateType = /**
     * Make sure the input is a supported type.
     * @return {?}
     */
    function () {
        if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
            throw getMatInputUnsupportedTypeError(this._type);
        }
    };
    /** Checks whether the input type is one of the types that are never empty. */
    /**
     * Checks whether the input type is one of the types that are never empty.
     * @return {?}
     */
    MatInput.prototype._isNeverEmpty = /**
     * Checks whether the input type is one of the types that are never empty.
     * @return {?}
     */
    function () {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
    };
    /** Checks whether the input is invalid based on the native validation. */
    /**
     * Checks whether the input is invalid based on the native validation.
     * @return {?}
     */
    MatInput.prototype._isBadInput = /**
     * Checks whether the input is invalid based on the native validation.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var validity = (/** @type {?} */ (this._elementRef.nativeElement)).validity;
        return validity && validity.badInput;
    };
    /** Determines if the component host is a textarea. */
    /**
     * Determines if the component host is a textarea.
     * @return {?}
     */
    MatInput.prototype._isTextarea = /**
     * Determines if the component host is a textarea.
     * @return {?}
     */
    function () {
        return this._elementRef.nativeElement.nodeName.toLowerCase() === 'textarea';
    };
    Object.defineProperty(MatInput.prototype, "empty", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() &&
                !this.autofilled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "shouldLabelFloat", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            if (this._isNativeSelect) {
                /** @type {?} */
                var selectElement = /** @type {?} */ (this._elementRef.nativeElement);
                return selectElement.multiple || !this.empty || !!selectElement.options[0].label ||
                    this.focused;
            }
            else {
                return this.focused || !this.empty;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    MatInput.prototype.setDescribedByIds = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    function (ids) { this._ariaDescribedby = ids.join(' '); };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    MatInput.prototype.onContainerClick = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    function () {
        // Do not re-focus the input element if the element is already focused. Otherwise it can happen
        // that someone clicks on a time input and the cursor resets to the "hours" field while the
        // "minutes" field was actually clicked. See: https://github.com/angular/material2/issues/12849
        if (!this.focused) {
            this.focus();
        }
    };
    MatInput.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
                    exportAs: 'matInput',
                    host: {
                        /**
                             * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
                             */
                        'class': 'mat-input-element mat-form-field-autofill-control',
                        '[class.mat-input-server]': '_isServer',
                        // Native input properties that are overwritten by Angular inputs need to be synced with
                        // the native input element. Otherwise property bindings for those don't work.
                        '[attr.id]': 'id',
                        '[attr.placeholder]': 'placeholder',
                        '[disabled]': 'disabled',
                        '[required]': 'required',
                        '[attr.readonly]': 'readonly && !_isNativeSelect || null',
                        '[attr.aria-describedby]': '_ariaDescribedby || null',
                        '[attr.aria-invalid]': 'errorState',
                        '[attr.aria-required]': 'required.toString()',
                        '(blur)': '_focusChanged(false)',
                        '(focus)': '_focusChanged(true)',
                        '(input)': '_onInput()',
                    },
                    providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldControl"], useExisting: MatInput }],
                },] },
    ];
    /** @nocollapse */
    MatInput.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_INPUT_VALUE_ACCESSOR,] }] },
        { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["AutofillMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
    ]; };
    MatInput.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return MatInput;
}(_MatInputMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatInputModule = /** @class */ (function () {
    function MatInputModule() {
    }
    MatInputModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    declarations: [MatInput, MatTextareaAutosize],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["TextFieldModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    ],
                    exports: [
                        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["TextFieldModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                        MatInput,
                        MatTextareaAutosize,
                    ],
                    providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"]],
                },] },
    ];
    return MatInputModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=input.es5.js.map


/***/ })

}]);
//# sourceMappingURL=messages-messages-module~text-screen-text-screen-module.js.map