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
definePageMeta({
  middleware: 'no-auth'
});

const authStore = useAuthStore();
const router = useRouter();

const handleLogin = async () => {
  await authStore.login();
  await router.replace('/');
}
</script>
