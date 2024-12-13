<template>
  <button @click="handleLogout">Logout</button>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
});

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
  await authStore.logout();
  await router.replace('/');
}
</script>
