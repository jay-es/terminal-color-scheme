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
    <td class="color-disp">{{ rgbValues[colorName] }}</td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapState, mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapState(['colors']),
    ...mapGetters(['rgbValues']),
  },
})
export default class ColorTableRow extends Vue {
  @Prop({
    type: String,
    default: '',
  })
  private colorName!: string

  onChange(newVal: String): void {
    this.$store.commit('setColor', [this.colorName, newVal])
  }
}
</script>

<style lang="scss">
.colortable td {
  padding: 0.1em 0.75em;
}
.color-disp {
  font-size: 12px;
}
</style>
