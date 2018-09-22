import Vue from 'vue';
declare const _default: import("vue/types/vue").VueConstructor<{
    loading: any;
} & {
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
    startLoading(trackerName?: string): true;
    /**
     * Stops the loading state for the given tracker.
     *
     * @param trackerName
     */
    stopLoading(trackerName?: string): false;
    /**
     * Bulma loading class for the given tracker.
     *
     * @param trackerName
     */
    loadingClass(trackerName?: string): {
        'is-loading': any;
    };
} & Record<never, any> & Vue>;
export default _default;
