import { Vue, Component } from 'vue-property-decorator';

const defaultKey = 'global';
const defaultState: any = {};
defaultState[defaultKey] = false;

@Component
export default class BuefyLoadingTracker extends Vue {

    /**
     * Loading states
     */
    loading = defaultState;

    /**
     * Overridable computed loading states.
     * Great for mapping Vuex states to.
     */
    get loadingState(): any {
        return {}
    }

    /**
     * Checks if the given tracker is loading.
     *
     * @param trackerName
     */
    isLoading(trackerName: string = defaultKey) {
        return this.loading[trackerName] || this.loadingState[trackerName];
    }

    /**
     * Starts loading for the given tracker.
     *
     * @param trackerName
     */
    startLoading(trackerName: string = defaultKey) {
        return this.$set(this.loading, trackerName, true);
    }

    /**
     * Stops the loading state for the given tracker.
     *
     * @param trackerName
     */
    stopLoading(trackerName: string = defaultKey) {
        return this.$set(this.loading, trackerName, false);
    }

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
