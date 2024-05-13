<template>
  <div class="container">
    <h1 class="my-4 text-primary">
      Dashboard
    </h1>

    <!-- Informações de pedidos -->
    <div class="card mb-4">
      <div class="card-header bg-primary text-white">
        Informações de Pedidos
      </div>
      <div class="card-body">
        <p class="text-info">
          Total de Pedidos: {{ totalPedidos }}
        </p>
        <p class="text-warning">
          Pedidos Pendentes: {{ pedidosPendentes }}
        </p>
        <p class="text-success">
          Pedidos Concluídos: {{ pedidosConcluidos }}
        </p>
      </div>
    </div>

    <!-- Informações de compras -->
    <div class="card">
      <div class="card-header bg-info text-white">
        Informações de Compras
      </div>
      <div class="card-body">
        <p class="text-primary">
          Total de Compras: {{ totalCompras }}
        </p>
        <p class="text-success">
          Compras Realizadas: {{ comprasRealizadas }}
        </p>
        <p class="text-warning">
          Compras Pendentes: {{ comprasPendentes }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPedidos: 100, // Exemplo de dados (substitua pelos seus dados reais)
      pedidosPendentes: 20,
      pedidosConcluidos: 80,
      totalCompras: 50,
      comprasRealizadas: 40,
      comprasPendentes: 10,
    };
  },
};
</script>

<style>
/* Estilos adicionais podem ser aplicados aqui */
.card-header {
  font-size: 1.2rem;
}
.card-body p {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
</style>
