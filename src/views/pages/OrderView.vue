<!-- <template>
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
          this.showMessage(error.response.data.message, 'error');          
        });

    }
    
  },
  
};
</script>

<style scoped>

</style> -->

<template>
  <div class="container mt-4">
    <AlertMessage
      :message="alertMessage.message"
      :visible="alertMessage.showAlert"
      :type="alertMessage.typeMessage"
    />
    <h1 class="mb-4 d-flex align-items-center justify-content-center">
      Meu Carrinho
    </h1>
    <div
      v-if="cart.length === 0"
      class="alert alert-info mt-5"
    >
      Seu carrinho está vazio.
    </div>
    
    <div
      v-else
      class="mt-5"
    >
      <div class="row mb-3">
        <div class="col-md-1">
          <strong>Imagem</strong>
        </div>
        <div class="col-md-3">
          <strong>Nome do Produto</strong>
        </div>
        <div class="col-md-2">
          <strong>Preço Unitário</strong>
        </div>
        <div class="col-md-2">
          <strong>Quantidade</strong>
        </div>
        <div class="col-md-2">
          <strong>Preço Total</strong>
        </div>
        <div class="col-md-1">
          <strong>Ação</strong>
        </div>
      </div>
      <div
        class="row mb-3"
        v-for="(item, index) in cart"
        :key="index"
      >
        <div class="col-md-1">
          <img
            :src="item.image"
            class="img-fluid img-small"
            alt="Product Image"
          >
          <div />
        </div>
        <div class="col-md-3">
          <p>{{ item.name }}</p>
        </div>
        <div class="col-md-2">
          <p>R$ {{ item.price }}</p>
        </div>
        <div class="col-md-2">
          <button
            @click="decrementQuantity(index)"
            class="btn btn-outline-primary"
          >
            -
          </button>
          <span>{{ item.quantity }}</span>
          <button
            @click="incrementQuantity(index)"
            class="btn btn-outline-primary"
          >
            +
          </button>
        </div>
        <div class="col-md-2">
          <p>R$ {{ item.price * item.quantity }}</p>
        </div>
        <div class="col-md-1">
          <i
            class="bi bi-trash3 text-danger fs-5"
            @click="removeFromCart(index)"
            style="cursor: pointer;"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <p class="text-end">
            <strong>Total:</strong> R$ {{ getTotalPrice().toFixed(2) }}
          </p>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-12 text-end">
          <button
            @click="checkout"
            class="btn btn-primary"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
    <ModalDefault @formSubmitted="handleFormSubmitted" />
  </div>
</template>

<script lang="ts">

import AlertMessage from '@/components/AlertMessage.vue';
import ModalDefault from '@/components/ModalDefault.vue';
import type { ProductsCart } from '@/core/models';
// import type { Client, ProductsCart, ProductsClient } from '@/core/models';
import { ProductCart } from '@/core/services';
import { Order } from '@/core/services/order';


export default {
  components: { 
    ModalDefault,
    AlertMessage
  },
  
  data() {
    return {
      cart: [] as ProductsCart[],
      alertMessage: {
        message: 'information saved successfully',
        showAlert: false,
        typeMessage: '',
      }
    };
  },

  created() {
    this.cart = new ProductCart().getProductsCart();
  },

  methods: {
    incrementQuantity(index: any) {
      this.cart[index].quantity++;
    },
    decrementQuantity(index: any) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      }
    },
    removeFromCart(index: any) {
      this.cart.splice(index, 1);
    },
    getTotalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    handleFormSubmitted(data: any) {
      // this.spinner = true;
      // const order = this.createClientData(data);
      // this.finishOrder(order);
    },
    checkout() {
      // Lógica para finalizar a compra
      console.log('Compra finalizada');
    }
  }
};
</script>

<style scoped>
.img-small {
  max-width: 40%;
}
</style>

