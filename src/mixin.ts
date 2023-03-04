import Vue from 'vue';
import useLoadingTracker, { LoadingTracker } from './composable';

const defaultKey = 'global';
const defaultState: Record<string, boolean> = {};
defaultState[defaultKey] = false;

const Mixin = {
    
    setup() {
        return {
            LoadingTracker: useLoadingTracker(),
        }
    },
    
    computed: {
        /**
         * Overridable computed loading states.
         * Great for mapping Vuex states to.
         */
        loadingState() {
            return {};
        }
    },
    
    
    methods: {
        /**
         * Checks if the given tracker is loading.
         *
         * @param trackerName
         */
        isLoading(this: MixinThisType, trackerName: string = defaultKey) {
            return this.LoadingTracker.isLoading(trackerName) || this.loadingState[trackerName];
        },
    
        /**
         * Starts loading for the given tracker.
         *
         * @param trackerName
         */
        startLoading(this: MixinThisType, trackerName: string = defaultKey) {
            return this.LoadingTracker.start(trackerName);
        },
    
        /**
         * Stops the loading state for the given tracker.
         *
         * @param trackerName
         */
        stopLoading(this: MixinThisType, trackerName: string = defaultKey) {
            return this.LoadingTracker.stop(trackerName);
        },
    
        /**
         * Bulma loading class for the given tracker.
         *
         * @param trackerName
         */
        loadingClass(this: MixinThisType, trackerName: string = defaultKey) {
            return this.LoadingTracker.class(trackerName);
        }
    },
    
}

type MixinThisType = any;

export default Mixin;
