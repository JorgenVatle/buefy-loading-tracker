# Buefy-Loading-Tracker

A simple Vue mixin for tracking the loading states of multiple [Bulma](https://bulma.io/) or 
[Buefy](https://buefy.github.io/#/) components or elements.

## Prerequisites
- Vue 2.7 or Vue 3.

## Features
- Easily track loading states of multiple components or elements within the Bulma or Buefy UI framework.
- Supports both the Options API and the Composition API.

## Installation
```bash
npm install --save buefy-loading-tracker
```

## Example Usage (Composition API)
```vue
<template>
    <div>
        <button class="is-button"
                :class="
                /* Reactively returns 'is-loading' depending on the loading state  */
                loading.class('create-post-form')"
                @click="createPost()">
            Start Loading
        </button>
    </div>
</template>
<script setup lang="ts">
import { useLoadingTracker } from 'buefy-loading-tracker';
import { someAsyncFunction } from './somewhere-in-your-app';

const loading = useLoadingTracker();

async function createPost() {
    loading.start('create-post-form');
    await someAsyncFunction().finally(() => loading.stop('create-post-form'));
}
</script>
```

## Available methods (Composition API)
```ts
const loading = useLoadingTracker();

// Utility for use within your component template. Apply on buttons to get 
// a reactive Buefy/Bulma 'is-loading' CSS class
loading.class('my-button'); // -> 'is-loading' | ''

// Start the loading state for "my-button", applying the 'is-loading' CSS class
loading.start('my-button');

// Stops the loading state for "my-button", removing the 'is-loading' CSS class.
loading.stop('my-button');

// Check if the loading state for "my-button" is active. Useful if you need to show 
// or hide certain elements depending on whether 'my-button' is loading or not.
loading.is('my-button'); // -> boolean 
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

## License
MIT - [View License](https://github.com/JorgenVatle/buefy-loading-tracker/blob/master/LICENSE)
