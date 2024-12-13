<script setup>
const loginData = ref();
const ordersData = ref();
const usersData = ref();

const fetchOrders = async () => {
  const { data } = await useFetch('/api/orders/orders');
  ordersData.value = data;
}

const fetchUsers = async () => {
  const { data } = await useFetch('/api/admin/users', { server: false });
  usersData.value = data;
};

const handleLogin = async () => {
  const { data } = await useFetch('/api/account/login');
  loginData.value = data;
}

const handleRefresh = async () => {
  const { data } = await useFetch('/api/account/refresh');
  loginData.value = data;
}

const handleLogout = async () => {
  const { data } = await useFetch('/api/account/logout');
  loginData.value = data;
}

await fetchOrders();
await fetchUsers();
</script>

<template>
  <div>
    <button @click="handleLogin">Login</button>
    <button @click="handleRefresh">Refresh</button>
    <button @click="handleLogout">Logout</button>
    <br>
    <button @click="fetchOrders">Load Orders</button>
    <button @click="fetchUsers">Load Users</button>
    <div>
      <table>
        <thead>
          <tr>
            <th>Auth</th>
            <th>Users</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <pre>{{ loginData }}</pre>
              </div>
            </td>
            <td>
              <div>
                <pre>{{ usersData }}</pre>
              </div>
            </td>
            <td>
              <div>
                <pre>{{ ordersData }}</pre>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <NuxtRouteAnnouncer />
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
