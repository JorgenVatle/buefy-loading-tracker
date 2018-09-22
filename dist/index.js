"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_mixin_decorator_1 = require("vue-mixin-decorator");
var defaultKey = 'global';
var defaultState = {};
defaultState[defaultKey] = false;
var BuefyLoadingTracker = /** @class */ (function (_super) {
    __extends(BuefyLoadingTracker, _super);
    function BuefyLoadingTracker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Loading states
         */
        _this.loading = defaultState;
        return _this;
    }
    /**
     * Checks if the given tracker is loading.
     *
     * @param trackerName
     */
    BuefyLoadingTracker.prototype.isLoading = function (trackerName) {
        if (trackerName === void 0) { trackerName = defaultKey; }
        return this.loading[trackerName];
    };
    /**
     * Starts loading for the given tracker.
     *
     * @param trackerName
     */
    BuefyLoadingTracker.prototype.startLoading = function (trackerName) {
        if (trackerName === void 0) { trackerName = defaultKey; }
        return this.$set(this.loading, trackerName, true);
    };
    /**
     * Stops the loading state for the given tracker.
     *
     * @param trackerName
     */
    BuefyLoadingTracker.prototype.stopLoading = function (trackerName) {
        if (trackerName === void 0) { trackerName = defaultKey; }
        return this.$set(this.loading, trackerName, false);
    };
    /**
     * Bulma loading class for the given tracker.
     *
     * @param trackerName
     */
    BuefyLoadingTracker.prototype.loadingClass = function (trackerName) {
        if (trackerName === void 0) { trackerName = defaultKey; }
        return {
            'is-loading': this.isLoading(trackerName),
        };
    };
    BuefyLoadingTracker = __decorate([
        vue_mixin_decorator_1.Mixin
    ], BuefyLoadingTracker);
    return BuefyLoadingTracker;
}(vue_1.default));
exports.default = BuefyLoadingTracker;
