<template>
  <div class="d-flex align-items-center me-5 ">
    <i
      class="bi bi-cart4 fs-4 me-2"
      style="margin-bottom: 10px;"
    />
      
    <span
      class="badge bg-danger rounded-pill d-flex justify-content-center align-items-center bubble"
    >
      {{ count }} 
    </span>
  </div>
</template>
<script lang="ts">
import { ProductCart } from '@/core/services';
import { store } from '@/store';

export default {
  data() {
    return {
    };
  },

  computed: {
    count() {
      return store.state.count; 
    },
  },

  created() {
    this.prepareUser();
  },

  methods: {
    prepareUser() {
      const productCart = new ProductCart().getProductsCart();
      store.commit('setCount', productCart.length);
    },
  }
    
};
</script>
<style scoped>

.bubble {
  margin-bottom: 30px;
  margin-left: -10px;
  width: 15px;
  height:15px;
  font-size: 10px;
}
    
</style>