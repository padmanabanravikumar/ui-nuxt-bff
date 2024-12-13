<template>
  <button @click="handleLogout">Logout</button>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
});

const authStore = useAuthStore();

const handleLogout = async () => {
  await authStore.logout();
}
</script>
