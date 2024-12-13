export default defineNuxtRouteMiddleware(() => {
  const pinia = usePinia();
  const authStore = useAuthStore(pinia as any);

  if (!authStore.isAuthenticated) {
    return navigateTo('/login');
  }
});
