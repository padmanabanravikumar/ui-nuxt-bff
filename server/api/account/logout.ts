export default defineEventHandler(async (event) => {
  const session = await useSession(event, {
    name: 'nuxt-bff-session',
    password: useRuntimeConfig().sessionPassword
  });

  await session.clear();

  return {
    isSuccess: true,
    traceId: '1f6e22c5-9b1a-4e3b-a9f8-64d203bbd2a3',
    statusCode: 200,
    message: 'Logout Success'
  }
});
