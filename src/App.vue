<template>
  <div id="app">
    <color-table/>
    <file-input/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ColorTable from './components/ColorTable.vue'
import FileInput from './components/FileInput.vue'

@Component({
  components: {
    ColorTable,
    FileInput,
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
