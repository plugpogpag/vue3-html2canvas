<script setup>
import { usePDF } from 'vue3-pdfmake-v2';

const pdfmake = usePDF({
  autoInstallVFS: true
})

const onGenPDF = () => {
  pdfmake.createPdf({
    content: [
    {
			style: 'tableExample',
			table: {
				widths: ['10%', '10%', '10%', '10%'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
    ]
  }).download();
}
</script>

<template>
  <button @click="onGenPDF">Click here for download demo pdf</button>
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
