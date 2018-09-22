"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var defaultKey = 'global';
exports.default = vue_1.default.extend({
    data: function () {
        return {
            loading: {
                global: false,
            }
        };
    },
    methods: {
        /**
         * Checks if the given tracker is loading.
         *
         * @param trackerName
         */
        isLoading: function (trackerName) {
            if (trackerName === void 0) { trackerName = defaultKey; }
            return this.loading[trackerName];
        },
        /**
         * Starts loading for the given tracker.
         *
         * @param trackerName
         */
        startLoading: function (trackerName) {
            if (trackerName === void 0) { trackerName = defaultKey; }
            return this.$set(this.loading, trackerName, true);
        },
        /**
         * Stops the loading state for the given tracker.
         *
         * @param trackerName
         */
        stopLoading: function (trackerName) {
            if (trackerName === void 0) { trackerName = defaultKey; }
            return this.$set(this.loading, trackerName, false);
        },
        /**
         * Bulma loading class for the given tracker.
         *
         * @param trackerName
         */
        loadingClass: function (trackerName) {
            if (trackerName === void 0) { trackerName = defaultKey; }
            return {
                'is-loading': this.isLoading(trackerName),
            };
        }
    }
});
