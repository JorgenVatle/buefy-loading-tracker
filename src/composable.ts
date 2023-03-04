import { reactive, set } from 'vue';

export default function useLoadingTracker() {
    const store = reactive<Record<string, boolean>>({});
    
    function isLoading(trackerName: string) {
        return store[trackerName];
    }
    
    function startLoading(trackerName: string) {
        set(store, trackerName, true);
    }
    
    function stopLoading(trackerName: string) {
        set(store, trackerName, false);
    }
    
    function loadingClass(trackerName: string) {
        return {
            'is-loading': isLoading(trackerName),
        }
    }
    
    return {
        store,
        isLoading,
        startLoading,
        stopLoading,
        loadingClass,
    }
}