# Vue PDFMake
This project forked from [vue-pdfmake ](https://github.com/betterwrite/vue-pdfmake ) 

A [PDFMake](http://pdfmake.org/#/) plugin for vue 3.x 

<img src="https://img.shields.io/npm/v/vue3-pdfmake?label=&style=for-the-badge" />

## Install

`yarn add vue3-pdfmake-v2`

OR

`npm install vue3-pdfmake-v2`

in `main.(js|ts)`

```js
import { createApp } from 'vue';
import { PDFPlugin } from 'vue3-pdfmake-v2';
import App from './App.vue';

const app = createApp(App);
//...
app.use(PDFPlugin);
//...
app.mount('#app');
```

## Example

```vue
<script setup>
import { usePDF } from 'vue3-pdfmake-v2';

const pdfmake = usePDF({
  autoInstallVFS: true
})

const onGenPDF = () => {
  pdfmake.createPdf({
    content: [
      'Hello World From PDFMake!',
    ]
  }).download();
}
</script>

<template>
  <button @click="onGenPDF">Click here for download demo pdf</button>
</template>
```

### Documentation

**Check [PDFMake Documentation](https://pdfmake.github.io/docs/0.3/getting-started/client-side/methods/) for more explanations!**