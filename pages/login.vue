<template>
  <button @click="handleLogin">Login</button>
  <pre>
    {{ authStore.isAuthenticated }}
  </pre>
  <pre>
    {{ authStore.authUser }}
  </pre>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth-store';

const authStore = useAuthStore();
const handleLogin = async () => {
  await authStore.login();
}
</script>
