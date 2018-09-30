<template>
  <section>
    <dialog ref="dialog">
      <textarea
        :value="lines.join('\n')"
        :rows="lines.length"
      />
      <button @click="closeModal">閉じる</button>
    </dialog>
    <button @click="openModal">ファイル出力</button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import { ColorsState } from '@/store/colors'

@Component({
  computed: {
    ...mapGetters('colors', ['rgbValues']),
  },
})
export default class OutputModal extends Vue {
  private dialog!: HTMLDialogElement

  // computed
  private rgbValues!: ColorsState

  get lines() {
    return [
      '[table]',
      ...Object.entries(this.rgbValues).map(([key, value]) => {
        const colorName = key.replace(/([A-Z])/, '_$1').toUpperCase()
        return `${colorName} = ${value}`
      }),
      '',
    ]
  }

  mounted() {
    this.dialog = this.$refs.dialog as HTMLDialogElement
  }

  closeModal() {
    this.dialog.close()
  }
  openModal() {
    this.dialog.showModal()
  }
}
</script>

<style lang="scss">
dialog::backdrop {
  background-color: rgba(black, 0.75);
}
textarea {
  width: 100%;
}
</style>
