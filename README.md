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
                loading.class('createPostForm')"
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
#### `loading.class(name: string)`
```vue
<template>
    <button class="is-button" :class="loading.class('myButton')">
        My Button
    </button>
</template>
```
Returns a reactive CSS class that can be applied to a component or element. The class will be 
`'is-loading'` when the loading state is active, and an empty string when the loading state is inactive.

#### `loading.start(name: string)`
```vue
<template>
    <button class="button" @click="loading.start('myButton')">
        Start Loading
    </button>
</template>
```
Starts the loading state for `my-button`. The loading state will be active until `loading.stop(name)` is called.

#### `loading.stop(name: string)`
```vue
<template>
    <button class="button" @click="loading.stop('myButton')">
        Stop Loading
    </button>
</template>
```
Stops the loading state for `myButton`. The loading state will be inactive until `loading.start(name)` is called.

#### `loading.is(name: string)`
```vue
<template>
    <h1 class="title" v-if="loading.isLoading('myButton')">
        Loading...
    </h1>
    <h1 v-else>
        Click the button to start loading.
    </h1>
</template>
```
Returns a reactive boolean indicating whether the loading state for `myButton` is active or not.

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
