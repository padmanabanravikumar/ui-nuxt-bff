<script setup>
const { data } = await useFetch('/api/orders/orders')
console.log(data.value);
const { data: users } = await useFetch('/api/admin/users')
console.log(users.value);
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
  </div>
</template>
