<template>
  <section :style="{ 'background-color': colors.darkBlack, 'color': colors.brightWhite }">
    <table class="colortable">
      <col>
      <col :style="{ 'background-color': colors.darkBlack }">
      <col :style="{ 'background-color': colors.darkRed }">
      <col :style="{ 'background-color': colors.darkGreen }">
      <col :style="{ 'background-color': colors.darkYellow }">
      <col :style="{ 'background-color': colors.darkBlue }">
      <col :style="{ 'background-color': colors.darkMagenta }">
      <col :style="{ 'background-color': colors.darkCyan }">
      <col :style="{ 'background-color': colors.darkWhite }">
      <thead/>
      <tbody>
        <color-table-row/>
        <color-table-row
          v-for="(v, k) of colors"
          :key="k"
          :color-name="k"
        />
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import ColorTableRow from './ColorTableRow.vue'

export default Vue.extend({
  name: 'ColorTable',
  components: {
    ColorTableRow,
  },
  computed: mapState(['colors']),
})
</script>

<style lang="scss" scoped>
section {
  padding: 1em;
}
</style>
