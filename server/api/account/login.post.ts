export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const response: any = await $fetch(`${useRuntimeConfig().userUrl}/user/login`, {
    body,
    method: 'POST'
  });

  if (!response.isSuccess) {
    return response;
  }

  const session = await useSession(event, {
    name: 'nuxt-bff-session',
    password: useRuntimeConfig().sessionPassword,
    cookie: {
      httpOnly: true,
      secure: false, // for production build this will be true
      sameSite: 'strict'
    },
    maxAge: 60 * 60 * 24 * 7 // 7 days
  });

  await session.update(response.data);

  return {
    isSuccess: true,
    traceId: '1f6e22c5-9b1a-4e3b-a9f8-64d203bbd2a3',
    statusCode: 200,
    result: {
      expiresAt: (new Date()).getTime() + (response.data.expiresIn * 60 * 1000)
    },
    message: 'Login Success',
    response
  }
});
