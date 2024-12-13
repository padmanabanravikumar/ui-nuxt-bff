<script setup>
import { useAuthStore } from './stores/auth-store';

const authStore = useAuthStore();
await callOnce(authStore.fetchUser);
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <LazyNuxtPage />
    </NuxtLayout>
  </div>
</template>
