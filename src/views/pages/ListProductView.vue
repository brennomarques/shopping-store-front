<template>
  <div class="container mt-5">
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
          <td>{{ product.stock }}</td>
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
        Valor: R$ {{ selectedProduct.price.toFixed(2) }}
      </p> <!-- Adicionando o preço do produto selecionado -->
      <div class="text-center">
        <button
          @click="useProduct"
          class="btn btn-success"
        >
          Usar Produto
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { name: 'Produto A', stock: 10, price: 25.99 },
        { name: 'Produto B', stock: 5, price: 15.50 },
        { name: 'Produto C', stock: 15, price: 35.75 },
      ],
      selectedProduct: null,
    };
  },
  methods: {
    selectProduct(index) {
      this.selectedProduct = this.products[index];
    },
    useProduct() {
      if (this.selectedProduct !== null) {
        alert(`Produto ${this.selectedProduct.name} usado!`);
        // Aqui você pode adicionar lógica para usar o produto, como decrementar o estoque, etc.
        this.selectedProduct = null; // Limpar produto selecionado após usar
      }
    },
  },
};
</script>

<style>
/* Adicione estilos personalizados aqui, se necessário */
</style>
