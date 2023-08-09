import { reactive, set } from 'vue';

type LoadingStore = Record<string, boolean>;

export class LoadingTracker<StoreDefaults extends LoadingStore> {
    constructor(
        /**
         * Reactive store for the current loading tracker instance.
         */
        public readonly store: StoreDefaults
    ) {}
    
    public isLoading(trackerName: keyof StoreDefaults) {
        return this.store[trackerName];
    }
    
    public start(trackerName: keyof StoreDefaults) {
        set(this.store, trackerName as string, true);
    }
    
    public stop(trackerName: keyof StoreDefaults) {
        set(this.store, trackerName as string, false);
    }
    
    public class(trackerName: keyof StoreDefaults) {
        return {
            'is-loading': this.isLoading(trackerName),
        }
    }
}

export default function useLoadingTracker<StoreDefaults extends LoadingStore>(defaultValues: StoreDefaults): LoadingTracker<StoreDefaults> {
    return new LoadingTracker(reactive(defaultValues) as StoreDefaults);
}