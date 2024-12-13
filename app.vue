<script setup>
const loginData = ref();
const authInfo = ref();

const handleRefresh = async () => {
  const { data } = await useFetch('/api/account/refresh');
  loginData.value = data;
}

const fetchAuthUser = async () => {
  const { data } = await useFetch('/api/account/user-info');
  authInfo.value = data;
};

await fetchAuthUser();
</script>

<template>
  <div>
    <button @click="handleRefresh">Refresh</button>
    <button @click="fetchAuthUser">Fetch Auth User</button>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <LazyNuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
table {
  border-collapse: collapse;
  /* Ensures clean borders */
  width: 100%;
  /* Optional: makes the table span full width */
}

th,
td {
  border: 1px solid #ccc;
  /* Adds borders to cells */
  padding: 8px;
  /* Adds padding inside cells */
  vertical-align: top;
  /* Aligns content to the top */
  text-align: left;
  /* Ensures text aligns to the left */
}

th {
  background-color: #f4f4f4;
  /* Adds a light background to headers */
}
</style>
