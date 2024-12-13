<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/orders">Orders</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/users">Users</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/logout">Logout</NuxtLink>
        </li>
      </ul>
    </nav>
    <div>
      <slot />
    </div>
  </div>
</template>