<template>
  <button @click="fetchOrders">Load Orders</button>
  <pre>
    {{ ordersData }}
  </pre>
</template>

<script setup>
const ordersData = ref();
const fetchOrders = async () => {
  const { data } = await useFetch('/api/orders/orders');
  ordersData.value = data;
}
await fetchOrders();
</script>
