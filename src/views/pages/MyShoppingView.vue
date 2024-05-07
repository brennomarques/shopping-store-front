<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">
      Histórico de Compras
    </h1>
    <div
      v-for="(purchase, index) in purchases"
      :key="index"
      class="card mb-3 bg-light"
    >
      <div class="card-body">
        <h5 class="card-title">
          Compra #{{ index + 1 }}
        </h5>
        <p class="card-text">
          Data da Compra: {{ purchase.date }}
        </p>
        <p class="card-text">
          Itens Comprados:
        </p>
        <ul class="list-group">
          <li
            v-for="(item, i) in purchase.items"
            :key="i"
            class="mt-1 list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{{ item.name }} - {{ item.quantity }}x - R$ {{ item.price }} - Total: R$ {{ item.quantity * item.price }}</span>
            <!-- <span class="badge bg-primary rounded-pill">Total: R$ {{ item.quantity * item.price }}</span> -->
          </li>
        </ul>
        <p
          class="badge bg-primary mt-1"
          style="font-size: 15px;"
        >
          Valor Total da Compra: R$ {{ calculateTotal(purchase.items) }}
        </p>
        <p class="card-text">
          Data de Entrega: {{ purchase.deliveryDate }}
          <i class="bi bi-check-circle-fill text-success" />
          <i class="bi bi-clock-history text-warning" />
        </p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      purchases: [
        {
          date: '2024-05-15',
          deliveryDate: '2024-05-18',
          items: [
            { name: 'Produto A', quantity: 2, price: 50 },
            { name: 'Produto B', quantity: 1, price: 30 },
          ],
        },
        {
          date: '2024-04-20',
          deliveryDate: '2024-04-25',
          items: [
            { name: 'Produto C', quantity: 3, price: 40 },
            { name: 'Produto D', quantity: 1, price: 60 },
          ],
        },
        // Outras compras...
      ],
    };
  },
  methods: {
    calculateTotal(items) {
      let total = 0;
      items.forEach((item) => {
        total += item.quantity * item.price;
      });
      return total;
    },
  },
};
</script>
  
  <style>
  /* Adicione estilos personalizados aqui, se necessário */
  .list-group-item {
    background-color: rgba(0, 0, 0, 0.1); /* Cor de fundo leve */
    border-color: rgba(0, 0, 0, 0.2); /* Cor da borda leve */
  }
  </style>
  