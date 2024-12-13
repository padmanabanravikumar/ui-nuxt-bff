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

