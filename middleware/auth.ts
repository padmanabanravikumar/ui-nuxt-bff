export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    return navigateTo('/login');
  }

  const roles: string[] = to.meta.roles as any;

  if (roles && !roles.some((role) => authStore.isUserInRole(role))) {
    return navigateTo('/unauthorized');
  }
});
