<template>

</template>

<script setup>
const usersData = ref();
const fetchUsers = async () => {
    const { data } = await useFetch('/api/admin/users', { server: false });
    usersData.value = data;
};
await fetchUsers();
</script>
