
<script setup>
import { ref } from "vue";
import { useHtml2Canvas } from "vue3-html2canvas";

const html2canvas = useHtml2Canvas();
const canvasTarget = ref(null);
const containerShowCanvas = ref(null);
async function onGenHtmlToCanvas() {
  const canvas = await html2canvas(canvasTarget.value, { });
  containerShowCanvas.value.appendChild(canvas)
}
</script>

<template>
  <button @click="onGenHtmlToCanvas" ref="canvasTarget">Click here for download demo pdf</button>
  <div ref="containerShowCanvas" style="display: flex;justify-content: center;align-items: center;flex-direction: column;">
    <span>Result Of Canvas </span>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
