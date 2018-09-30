<template>
  <section>
    <input
      type="file"
      @change="onChange($event.target.files)"
    >
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FileInput extends Vue {
  onChange(files: FileList): void {
    if (!files.length) return

    const reader = new FileReader()
    reader.readAsText(files[0])
    reader.onload = () => {
      const lines = String(reader.result).split('\n')
      lines.forEach(line => {
        const matches = line
          .replace(/\s/g, '')
          .match(/^(\w+)=(\d+),(\d+),(\d+)$/)

        if (!matches) return

        const colorName: string = matches[1]
          .toLowerCase()
          .replace(/_(\w)/, (match, p1) => p1.toUpperCase())

        const colorVal: string = matches
          .slice(2)
          .map(v => Number(v).toString(16))
          .map(v => v.padStart(2, '0'))
          .join('')

        this.$store.commit('colors/setColor', [colorName, `#${colorVal}`])
      })
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 1em;
}
</style>
