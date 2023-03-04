import Vue from 'vue';

const defaultKey = 'global';
const defaultState: Record<string, boolean> = {};
defaultState[defaultKey] = false;

const Mixin = {
    
    data: {
        /**
         * Loading state store
         */
        loading: defaultState,
    },
    
    /**
     * Overridable computed loading states.
     * Great for mapping Vuex states to.
     */
    get loadingState(): any {
        return {}
    },
    
    methods: {
        /**
         * Checks if the given tracker is loading.
         *
         * @param trackerName
         */
        isLoading(this: typeof Mixin & {}, trackerName: string = defaultKey) {
            return this.loading[trackerName] || this.loadingState[trackerName];
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
    },
    
}

export default class BuefyLoadingTracker extends Vue {



}
