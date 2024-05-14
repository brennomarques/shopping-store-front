import type { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

// Defina o tipo para o estado do store
export interface State {
  count: number;
}

// Defina a chave de injeção para o store
export const key: InjectionKey<Store<State>> = Symbol();

// Crie o store Vuex
export const store = createStore<State>({
  state: {
    count: 0,
  },

  mutations: {
    
    increment(state: any) {
      state.count++;
    },

    decrement(state: any) {
      state.count--;
    },

    setCount(state: any, value: number) {
      state.count = value;
    }

  },

  actions: {
    increment(context: any) {
      context.commit('increment');
    },
    decrement(context: any) {
      context.commit('decrement');
    },
  },

  getters: {
    getCount(state: any) {
      return state.count;
    },
  },

});

// Defina uma função de composição para usar o store
export function useStore() {
  return baseUseStore(key);
}
