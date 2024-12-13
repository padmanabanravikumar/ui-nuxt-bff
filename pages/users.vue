<template>
  <button @click="fetchUsers">Load Users</button>
  <pre>
    {{ usersData }}
  </pre>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
});

const usersData = ref();
const fetchUsers = async () => {
  const { data } = await useFetch('/api/admin/users', { server: false });
  usersData.value = data;
};
await fetchUsers();
</script>
