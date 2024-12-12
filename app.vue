<script setup>
const { data } = await useFetch('/api/orders/orders', { server: false })
const { data: users } = await useFetch('/api/admin/users', { server: false })
</script>

<template>
  <div>
    <div>
      <pre>{{ data }}</pre>
    </div>
    <div>
      <pre>{{ users }}</pre>
    </div>
    <NuxtRouteAnnouncer />
  </div>
</template>
