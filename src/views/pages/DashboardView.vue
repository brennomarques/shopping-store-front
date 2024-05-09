<template>
  <div class="container">
    <h1 class="my-4">
      Dashboard
    </h1>

    <!-- Informações de pedidos -->
    <div class="card mb-4">
      <div class="card-header">
        Informações de Pedidos
      </div>
      <div class="card-body">
        <p>Total de Pedidos: {{ totalPedidos }}</p>
        <p>Pedidos Pendentes: {{ pedidosPendentes }}</p>
        <p>Pedidos Concluídos: {{ pedidosConcluidos }}</p>
      </div>
    </div>

    <!-- Informações de compras -->
    <div class="card">
      <div class="card-header">
        Informações de Compras
      </div>
      <div class="card-body">
        <p>Total de Compras: {{ totalCompras }}</p>
        <p>Compras Realizadas: {{ comprasRealizadas }}</p>
        <p>Compras Pendentes: {{ comprasPendentes }}</p>
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
</style>
