import { GetterTree, Module, MutationTree } from 'vuex'

interface ColorsState {
  [key: string]: string
}

const state: ColorsState = {
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

const getters: GetterTree<ColorsState, any> = {
  rgbValues(state): ColorsState {
    const obj: ColorsState = {}

    Object.entries(state).forEach(([key, val]: [string, string]) => {
      obj[key] = [val.substr(1, 2), val.substr(3, 2), val.substr(5, 2)]
        .map(v => parseInt(v, 16))
        .join()
    })

    return obj
  },
}

const mutations: MutationTree<ColorsState> = {
  setColor(state, [key, val]: [string, string]): void {
    state[key] = val
  },
}

export const colors: Module<ColorsState, any> = {
  getters,
  mutations,
  state,
  namespaced: true,
}
