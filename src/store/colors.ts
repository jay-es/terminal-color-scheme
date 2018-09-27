import { GetterTree, Module, MutationTree } from 'vuex'
import { hexToDec, rgbToHsl } from '@/scripts/colorConverters'

export interface ColorsState {
  [key: string]: string
}

const objectMap = (state: ColorsState, fn: Function) => {
  const obj: ColorsState = {}

  Object.entries(state).forEach(([key, val]: [string, string]) => {
    obj[key] = fn(val, key)
  })

  return obj
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
    return objectMap(state, (v: string) => hexToDec(v).join())
  },
  hlsValues(state): ColorsState {
    return objectMap(state, (v: string) => rgbToHsl(hexToDec(v)).join())
  },
}

const mutations: MutationTree<ColorsState> = {
  setColor(state, [key, val]: [string, string]): void {
    if (!state.hasOwnProperty(key)) {
      return console.error('colors/setColor カラー名が不正', { key, val })
    }

    if (!/^#[\da-f]{6}$/i.test(val)) {
      return console.error('colors/setColor 色の値が不正', { key, val })
    }

    state[key] = val
  },
}

export const colors: Module<ColorsState, any> = {
  getters,
  mutations,
  state,
  namespaced: true,
}
