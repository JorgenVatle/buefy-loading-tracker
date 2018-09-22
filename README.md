    # Buefy-Loading-Tracker

A simple Vue mixin for tracking the loading states of multiple [Bulma](https://bulma.io/) or 
[Buefy](https://buefy.github.io/#/) components or elements.

## Installation
```bash
npm install --save buefy-loading-tracker
```

## Usage

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

Import the loading tracker:
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




## License
MIT - [View License](https://github.com/JorgenVatle/buefy-loading-tracker/blob/master/LICENSE)