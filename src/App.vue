<template>
  <div id="app">
    <color-table/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ColorTable from './components/ColorTable.vue'

@Component({
  components: {
    ColorTable,
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
