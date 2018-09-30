<template>
  <div id="app">
    <color-table/>
    <file-input/>
    <output-modal/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ColorTable from './components/ColorTable.vue'
import FileInput from './components/FileInput.vue'
import OutputModal from './components/OutputModal.vue'

@Component({
  components: {
    ColorTable,
    FileInput,
    OutputModal,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Menlo, Consolas, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}
</style>
