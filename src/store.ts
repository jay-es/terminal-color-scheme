import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface Colors {
  [key: string]: string
}

const colors: Colors = {
  darkBlack: '#000000',
  brightBlack: '#808080',
  darkRed: '#800000',
  brightRed: '#ff0000',
  darkGreen: '#008000',
  brightGreen: '#00ff00',
  darkYellow: '#808000',
  brightYellow: '#ffff00',
  darkBlue: '#000080',
  brightBlue: '#0000ff',
  darkMagenta: '#800080',
  brightMagenta: '#ff00ff',
  darkCyan: '#008080',
  brightCyan: '#00ffff',
  darkWhite: '#c0c0c0',
  brightWhite: '#ffffff',
}

export default new Vuex.Store({
  state: {
    colors,
  },
  getters: {
    rgbValues({ colors }): Colors {
      const obj: Colors = {}

      Object.entries(colors).forEach(([key, val]: [string, string]) => {
        obj[key] = [val.substr(1, 2), val.substr(3, 2), val.substr(5, 2)]
          .map(v => parseInt(v, 16))
          .join()
      })

      return obj
    },
  },
  mutations: {
    setColor({ colors }, [key, val]: [string, string]) {
      colors[key] = val
    },
  },
  actions: {},
})
