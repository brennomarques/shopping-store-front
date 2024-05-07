<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">
      Lista de Compras
    </h1>
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
      <button
        @click="addProduct"
        class="btn btn-success"
      >
        Adicionar Produto
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { name: 'Produto 1', price: 10.99, quantity: 1 },
        { name: 'Produto 2', price: 19.99, quantity: 1 },
        { name: 'Produto 3', price: 5.99, quantity: 1 },
      ],
    };
  },
  methods: {
    addProduct() {
      const newProduct = {
        name: `Produto ${this.products.length + 1}`,
        price: Math.random() * (50 - 5) + 5,
        quantity: 1,
      };
      this.products.push(newProduct);
    },
    removeProduct(index) {
      this.products.splice(index, 1);
    },
    incrementProduct(index) {
      this.products[index].quantity++;
    },
    decrementProduct(index) {
      if (this.products[index].quantity > 1) {
        this.products[index].quantity--;
      }
    },
    getTotalPrice() {
      return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    },
  },
  computed: {
    total() {
      return this.getTotalPrice().toFixed(2);
    },
  },
};
</script>

<style>
/* Adicione estilos personalizados aqui, se necessário */
</style>
