<template>
  <div class="container mt-5">
    <AlertMessage
      :message="alertMessage.message"
      :visible="alertMessage.showAlert"
      :type="alertMessage.typeMessage"
    />

    <div>
      <h1
        class="text-center mb-4"
        v-if="!products.length"
      >
        Não há produto no carrinho
      </h1>
      <h1
        class="text-center mb-4"
        v-if="products.length"
      >
        <h1 class="text-center mb-4">
          Meu Carrinho de compra
        </h1>
      </h1>
    </div>


    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            Nome do Produto
          </th>
          <th scope="col">
            Preço Unitário
          </th>
          <th scope="col">
            Quantidade
          </th>
          <th scope="col">
            Preço Total
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
          <td>R$ {{ product.price.toFixed(2) }}</td>
          <td>
            <button
              @click="decrementProduct(index)"
              class="btn btn-outline-primary btn-sm"
            >
              -
            </button>
            <span>{{ product.quantity }}</span>
            <button
              @click="incrementProduct(index)"
              class="btn btn-outline-primary btn-sm"
            >
              +
            </button>
          </td>
          <td>R$ {{ (product.price * product.quantity).toFixed(2) }}</td>
          <td>
            <button
              @click="removeProduct(index)"
              class="btn btn-danger btn-sm"
            >
              Remover
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-end mt-4">
      <div>Total Geral: R$ {{ total }}</div>
      <button
        v-if="products.length"
        class="btn btn-primary mt-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        type="button"
        :disabled="hasSpinner"
      >
        <span
          v-if="hasSpinner"
          class="spinner-border spinner-border-sm"
          aria-hidden="true"
        />
        <span> Finalizar Compra</span>
      </button>

  
      <!-- Modal -->
      <ModalDefault @formSubmitted="handleFormSubmitted" />
    </div>
  </div>
</template>

<script lang="ts">

import AlertMessage from '@/components/AlertMessage.vue';
import ModalDefault from '@/components/ModalDefault.vue';
import type { Client, ProductsCart, ProductsClient } from '@/core/models';
import { ProductCart } from '@/core/services';
import { Order } from '@/core/services/order';

export default {
  components: { 
    ModalDefault,
    AlertMessage
  },

  data() {
    return {
      products: [] as ProductsCart[],
      open: false,
      formData: {},
      spinner: false,
      alertMessage: {
        message: 'information saved successfully',
        showAlert: false,
        typeMessage: '',
      }
    };
  },

  created(){
    this.products = new ProductCart().getProductsCart();
  },

  computed: {
    total() {
      return this.getTotalPrice().toFixed(2);
    },
    hasSpinner() {
      return this.spinner;
    },
  },

  methods: {
    
    removeProduct(index: number) {
      this.products.splice(index, 1);
      new ProductCart().updateProductToCart(this.products);
    },

    incrementProduct(index: number) {
      this.products[index].quantity++;
      new ProductCart().updateProductToCart(this.products);
    },

    decrementProduct(index: number) {
      if (this.products[index].quantity > 1) {
        this.products[index].quantity--;
        new ProductCart().updateProductToCart(this.products);
      }
    },

    getTotalPrice() {
      return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    },

    showMessage(msg: string, typeMessage: string) {
      this.alertMessage = {
        message: msg,
        showAlert: true,
        typeMessage: typeMessage,
      };

      setTimeout(() => {
        this.alertMessage.showAlert = false;
      }, 4000);
    },

    handleFormSubmitted(data: any) {
      this.spinner = true;
      const order = this.createClientData(data);
      this.finishOrder(order);
    },

    appendCurrentTimeToDate(dateString: string) {
      const currentDate = new Date();
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');
      const currentTime = `${hours}:${minutes}:${seconds}`;
      const dateTime = `${dateString} ${currentTime}`;
      return dateTime;
    },

    createClientData(data: any): Client {
      const productsCart = new ProductCart().getProductsCart();

      const clientData: Client = {
        name: data.clientName, 
        delivery_at: this.appendCurrentTimeToDate(data.deliveryDate), 
        products: productsCart.map(product => {
          const productData: ProductsClient = {
            id: product.id,
            quantity: product.quantity
          };
          return productData;
        })
      };

      return clientData;
    },

    async finishOrder(order: Client) {
      await new Order().createOrder(order)
        .then(() => {
          this.spinner = false;
          new ProductCart().cleanCart();
          this.products = [];
          this.showMessage('Parabéns! Sua compra foi realizada com sucesso. Agora, aguarde a entrega do produto na data informada.', 'success');
        })
        .catch(error => {
          this.spinner = false;
          if (error.response && error.response.status === 409) {
            const responseMessage = error.response.data.message.message + ': ' + error.response.data.message.name;
            this.showMessage(responseMessage, 'error');
            return;
          }
          this.showMessage('Não foi possível finalizar a sua compra, tente novamente.', 'error');
        });

    }
    
  },
  
};
</script>

<style scoped>

</style>
