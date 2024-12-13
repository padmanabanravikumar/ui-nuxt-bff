<template>
  <button @click="handleLogout">Logout</button>
  <pre>
    {{ logoutData }}
  </pre>
</template>

<script setup>
const logoutData = ref();
const handleLogout = async () => {
  const { data } = await useFetch('/api/account/logout');
  logoutData.value = data;
}
</script>
