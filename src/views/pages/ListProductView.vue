<!-- <template>
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
          <td>R$ {{ product.price.toFixed(2) }}</td>
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
      </p>
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

</style> -->

<template>
  <div class="container">
    <AlertMessage
      :message="alertMessage.message"
      :visible="alertMessage.showAlert"
      :type="alertMessage.typeMessage"
    />
    <div class="row">
      <div
        v-for="(item, index) in products"
        :key="index"
        class="col-md-4 col-lg-3 mb-4"
      >
        <div class="card">
          <div class="img d-flex align-items-center justify-content-center p-3">
            <img
              :src="item.image"
              class="img-fluid img-small"
              alt="Item Image"
            >
          </div>
          
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              {{ item.name }}
            </h5>
            <p class="card-text">
              R$ {{ item.price }}
            </p>
            <button
              @click="addToCart(item)"
              class="btn btn-primary" 
              :class="{ 'btn-clicked': item.clicked }"
            >
              <i
                class="bi bi-cart4 fs-5 me-2"
              />
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import type { ProductsCart, ProductsResponse } from '@/core/models';
import { ProductCart } from '@/core/services';
import { Product } from '@/core/services/product';
import AlertMessage from '@/components/AlertMessage.vue';

export default {
  components: {
    AlertMessage
  },
  data() {
    return {
      products: [] as ProductsResponse[],
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
    addToCart(item: ProductsResponse) {
      this.clickEffect(item);      
      console.log('Item added to cart:', item);
      this.addProductToCart(item);
    },

    addProductToCart(product: ProductsResponse) {
      const productCart: ProductsCart = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      }; 

      new ProductCart().addProductToCart(productCart);
    },

    clickEffect(item: ProductsResponse) {
      item.clicked = true;
      setTimeout(() => {
        item.clicked = false; 
      }, 1000);
    },

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

    async getProduct() {     
      try {
        const responseData = await new Product().getAll();
        this.products = responseData; 
        console.log(responseData);       
      } catch (error) {
        console.error(error);
        this.showMessage('Não foi possível obter a lista de produtos. Por favor, tente novamente.', 'error');
      }
    }
    
  }
};
</script>

<style scoped>
.card {
  width: 100%;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.btn-clicked {
  transform: translate(0, -100px);
  opacity: 0; 
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.cart-icon {
  position: relative;
}

.img {
  height: 200px;
  /* border: solid 1px #e9ecef; */
}

.img-small {
  max-width: 60%;
}

.cart-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  animation: slideUp 1s ease-in-out;
}

@keyframes slideUp {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .col-md-4 {
    flex-basis: 50%;
    max-width: 50%;
  }
}

</style>

