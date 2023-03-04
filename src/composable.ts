import { reactive, set } from 'vue';

type LoadingStore = Record<string, boolean>;

class LoadingTracker {
    constructor(
        /**
         * Reactive store for the current loading tracker instance.
         */
        public readonly store: LoadingStore
    ) {}
    
    public isLoading(trackerName: string) {
        return this.store[trackerName];
    }
    
    public start(trackerName: string) {
        set(this.store, trackerName, true);
    }
    
    public stop(trackerName: string) {
        set(this.store, trackerName, false);
    }
    
    public class(trackerName: string) {
        return {
            'is-loading': this.isLoading(trackerName),
        }
    }
    
}

export default function useLoadingTracker() {
    return new LoadingTracker(reactive({}));
}