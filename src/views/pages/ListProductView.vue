<template>
  <div class="container mt-5">
    <AlertMessage
      :message="alertMessage.message"
      :visible="alertMessage.showAlert"
      :type="alertMessage.typeMessage"
    />
    <h1 class="text-center mb-4">
      Lista de Produtos em Estoque
    </h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            Nome do Produto
          </th>
          <th scope="col">
            Quantidade em Estoque
          </th>
          <th scope="col">
            Valor
          </th>
          <th scope="col">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in products"
          :key="index"
        >
          <td>{{ product.name }}</td>
          <td>{{ product.stockQuantity }}</td>
          <td>R$ {{ product.price.toFixed(2) }}</td> <!-- Adicionando o preço formatado -->
          <td>
            <button
              @click="selectProduct(index)"
              class="btn btn-primary btn-sm"
            >
              Selecionar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="selectedProduct !== null"
      class="mt-4"
    >
      <h2 class="text-center mb-3">
        Produto Selecionado: {{ selectedProduct.name }}
      </h2>
      <p class="text-center">
        Valor: R$ {{ selectedProduct.price }}
      </p> <!-- Adicionando o preço do produto selecionado -->
      <div class="text-center">
        <button
          @click="useProduct"
          class="btn btn-success"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AlertMessage from '@/components/AlertMessage.vue';
import type { ProductsCart, ProductsResponse } from '@/core/models';
import { ProductCart } from '@/core/services';
import { Product } from '@/core/services/product';

export default {
  components: {
    AlertMessage
  },
  data() {
    return {
      products: [] as ProductsResponse[],
      selectedProduct: null as ProductsResponse | null,
      alertMessage: {
        message: 'information saved successfully',
        showAlert: false,
        typeMessage: '',
      },
    };
  },
  created() {
    this.getProduct();
  },

  methods: {
    showMessage(msg: string, typeMessage: string) {
      this.alertMessage = {
        message: msg,
        showAlert: true,
        typeMessage: typeMessage,
      };

      setTimeout(() => {
        this.alertMessage.showAlert = false;
      }, 3000);
    },

    selectProduct(index: any) {
      this.selectedProduct = this.products[index];
    },
    useProduct() {
      if (this.selectedProduct !== null) {
        this.showMessage('O produto foi adicionado ao seu carrinho.', 'success');
        this.addProductToCart(this.selectedProduct);
        this.cleanSelectedProduct();
      }
    },

    addProductToCart(product: ProductsResponse) {
      const productCart: ProductsCart = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      }; 

      new ProductCart().addProductToCart(productCart);
    },

    cleanSelectedProduct() {
      this.selectedProduct = null;
    },

    async getProduct() {     
      try {
        const responseData = await new Product().getAll();
        this.products = responseData;        
      } catch (error) {
        console.error(error);
      }
    }
  },
};
</script>

<style>

</style>
