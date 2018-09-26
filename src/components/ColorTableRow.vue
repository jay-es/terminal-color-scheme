<template>
  <tr :style="{ 'color': colors[colorName] }">
    <td>gYw</td><td>gYw</td><td>gYw</td>
    <td>gYw</td><td>gYw</td><td>gYw</td>
    <td>gYw</td><td>gYw</td><td>gYw</td>
    <td>
      <input
        :value="colors[colorName]"
        type="color"
        @change="onChange($event.target.value)"
      >
    </td>
    <td :style="valueCellStyle">{{ rgbValues[colorName] }}</td>
    <td :style="valueCellStyle">{{ hlsValues[colorName] }}</td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapState, mapGetters } from 'vuex'
import { ColorsState } from '@/store/colors'

@Component({
  computed: {
    ...mapState(['colors']),
    ...mapGetters('colors', ['rgbValues', 'hlsValues']),
  },
})
export default class ColorTableRow extends Vue {
  @Prop({
    type: String,
    default: '',
  })
  private colorName!: string

  // computed
  private colors!: ColorsState
  private rgbValues!: ColorsState
  private hlsValues!: ColorsState

  get valueCellStyle() {
    return {
      color: this.colors.brightWhite,
      'font-size': '12px',
    }
  }

  onChange(newVal: String): void {
    this.$store.commit('colors/setColor', [this.colorName, newVal])
  }
}
</script>

<style lang="scss">
.colortable td {
  padding: 0.1em 0.75em;
}
</style>
