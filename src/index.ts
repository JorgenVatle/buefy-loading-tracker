import Vue from 'vue';
const defaultKey = 'global';

export default Vue.extend({

    data() {
        return {
            loading: {
                global: false,
            }
        }
    },

    methods: {
        /**
         * Checks if the given tracker is loading.
         *
         * @param trackerName
         */
        isLoading(trackerName: string = defaultKey) {
            return this.loading[trackerName];
        },

        /**
         * Starts loading for the given tracker.
         *
         * @param trackerName
         */
        startLoading(trackerName: string = defaultKey) {
            return this.$set(this.loading, trackerName, true);
        },

        /**
         * Stops the loading state for the given tracker.
         *
         * @param trackerName
         */
        stopLoading(trackerName: string = defaultKey) {
            return this.$set(this.loading, trackerName, false);
        },

        /**
         * Bulma loading class for the given tracker.
         *
         * @param trackerName
         */
        loadingClass(trackerName: string = defaultKey) {
            return {
                'is-loading': this.isLoading(trackerName),
            }
        }
    }

});