<template>
  <div>
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
    <div>
      <slot />
    </div>
  </div>
</template>