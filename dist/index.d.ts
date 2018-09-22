import Vue from 'vue';
export default class BuefyLoadingTracker extends Vue {
    /**
     * Loading states
     */
    loading: any;
    /**
     * Checks if the given tracker is loading.
     *
     * @param trackerName
     */
    isLoading(trackerName?: string): any;
    /**
     * Starts loading for the given tracker.
     *
     * @param trackerName
     */
    startLoading(trackerName?: string): boolean;
    /**
     * Stops the loading state for the given tracker.
     *
     * @param trackerName
     */
    stopLoading(trackerName?: string): boolean;
    /**
     * Bulma loading class for the given tracker.
     *
     * @param trackerName
     */
    loadingClass(trackerName?: string): {
        'is-loading': any;
    };
}
