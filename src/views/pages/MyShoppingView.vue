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
          Data da Compra: {{ formatDate(purchase.created_at).date }}
        </p>
        <p class="card-text">
          Itens Comprados:
        </p>
        <ul class="list-group">
          <li
            v-for="(item, i) in purchase.order_items"
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
          Valor Total da Compra: R$ {{ calculateTotal(purchase.order_items) }}
        </p>
        <p class="card-text">
          Data de Entrega: {{ formatDate(purchase.delivery_at).date }}
          <i
            v-if="!shouldDateDelivery(purchase.delivery_at)"
            class="bi bi-check-circle-fill text-success"
          />
          <i
            v-if="shouldDateDelivery(purchase.delivery_at)"
            class="bi bi-clock-history text-warning"
          />
        </p>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { Format } from '@/core/helpers/format';
import type { purchases } from '@/core/models';
import { Order } from '@/core/services/order';

export default {
  data() {
    return {
      purchases: [] as purchases[],
    };
  },
  created() {
    this.orderHistory();
  },
  methods: {
    calculateTotal(items: any) {
      let total = 0;
      items.forEach((item: any) => {
        total += item.quantity * item.price;
      });
      return total;
    },

    formatDate(dateTime: any) {
      return Format.formatDate(dateTime);
    },

    shouldDateDelivery(dateTime: any) {
      const providedDate = new Date(dateTime);
      const currentDate = new Date();
      return providedDate > currentDate;
    },

    async orderHistory() {
      await new Order().getAll('status=1')
        .then((data) => {
          this.purchases = data;
        })
        .catch(error => {
          console.error(error);    
        });
    }
  },
};
</script>
  
<style>
  .list-group-item {
    background-color: rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.2); 
  }
</style>
  