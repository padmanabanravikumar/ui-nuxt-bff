<script setup>
const { data } = await useFetch('/api/orders/orders')
const { data: users } = await useFetch('/api/admin/users')
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
