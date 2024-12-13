<template>
  <div>
    <div>
      <header>
        <div v-if="authStore.isAuthenticated">
          <label>
            {{ authStore.authUser?.name }}
          </label>
          <NuxtLink to="/logout">Logout</NuxtLink>
        </div>
        <div v-else>
          <NuxtLink to="/login">Login</NuxtLink>
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/orders">Orders</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/users">Users</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth-store';

const authStore = useAuthStore();
</script>