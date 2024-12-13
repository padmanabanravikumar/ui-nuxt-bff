<template>
  <button @click="handleLogin">Login</button>
  <pre>
    {{ loginData }}
  </pre>
</template>

<script setup>
const loginData = ref();
const handleLogin = async () => {
  const { data } = await useFetch('/api/account/login');
  loginData.value = data;
}
</script>
