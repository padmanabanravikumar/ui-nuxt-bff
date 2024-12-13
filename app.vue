<script setup>
const { data } = await useFetch('/api/orders/c43de194-f838-4caf-aa14-d45a72b1546c')
const { data: users } = await useFetch('/api/admin/c43de194-f838-4caf-aa14-d45a72b1546c', { server: false })
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
