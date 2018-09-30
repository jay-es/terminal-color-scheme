<template>
  <section :style="{ 'background-color': colors.darkBlack, 'color': colors.brightWhite }">
    <table class="colortable">
      <col>
      <col
        v-for="v of darkColors"
        :key="v"
        :style="{ 'background-color': colors[v] }"
      >
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
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import ColorTableRow from './ColorTableRow.vue'
import { ColorsState } from '@/store/colors'

@Component({
  components: {
    ColorTableRow,
  },
  computed: mapState(['colors']),
})
export default class ColorTable extends Vue {
  private colors!: ColorsState

  get darkColors(): string[] {
    return Object.keys(this.colors).filter(v => v.startsWith('dark'))
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 1em;
  overflow-x: scroll;
}
</style>
