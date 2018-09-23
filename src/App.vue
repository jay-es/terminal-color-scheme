<template>
  <div id="app">
    <color-table/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ColorTable from './components/ColorTable.vue'

export default Vue.extend({
  name: 'App',
  components: {
    ColorTable,
  },
})
</script>

<style lang="scss">
#app {
  font-family: Menlo, Consolas, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}
</style>
