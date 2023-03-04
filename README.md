# Buefy-Loading-Tracker

A simple Vue mixin for tracking the loading states of multiple [Bulma](https://bulma.io/) or 
[Buefy](https://buefy.github.io/#/) components or elements.

## Prerequisites
- Vue 2.7 or Vue 3.

## Installation
```bash
npm install --save buefy-loading-tracker
```

## Usage (Options API)

Add the loading tracker to the component you want to control:
```vue
<template>
    <div>
        <!-- Default loading state -->
        <button class="is-button" :class="loadingClass()"></button>
        
        <!-- Named loading state -->
       <button class="is-button" :class="loadingClass('named-loader')"></button>
    </div>
</template>
```

Import the loading tracker as a mixin:
```vue
<script>
    import LoadingTracker from 'buefy-loading-tracker';
    
    export default {
        mixins: [LoadingTracker],
    }
</script>
```

Starting and stopping the default loader:
```es6
// Start loading
this.startLoading();

// Stop loading
this.stopLoading();

// Check loading
this.isLoading();
```

Starting and stopping named loaders:
```es6
// Start loading
this.startLoading('named-loader');

// Stop loading
this.stopLoading('named-loader');

// Check loading
this.isLoading('named-loader');
```

(Optional) If you need to use some Vuex controlled loading state, define it using a `loadingState` computed property.
```vue
<template>
    <!-- Loading state from Vuex store -->
   <button class="is-button" :class="loadingClass('someLoadingState')"></button>
</template>
<script>
import LoadingTracker from 'buefy-loading-tracker';
import { mapState } from 'vuex';

export default {
    mixins: [LoadingTracker],
    computed: {
        loadingState() {
            return {
                ...mapState(['someLoadingState'])
            }
        }
    }
}
</script>
```


## Example Usage (Composition API)
```vue
<template>
    <div>
        <!-- Named loading state -->
       <button class="is-button" :class="loading.class('posts')" @click="createPost()">
           Start Loading
       </button>
    </div>
</template>

<script lang="ts" setup>
import { useLoadingTracker } from 'buefy-loading-tracker';

const loading = useLoadingTracker();

function createPost() {
    loading.start('posts');
    setTimeout(() => loading.stop('posts'), 2000); // wait 2 seconds and stop the loading state.
}
</script>
```


## License
MIT - [View License](https://github.com/JorgenVatle/buefy-loading-tracker/blob/master/LICENSE)
