export default defineEventHandler(async (event) => {
  const session = await useSession(event, {
    name: 'nuxt-bff-session',
    password: useRuntimeConfig().sessionPassword
  });

  const data = decodeJwt(session.data.accessToken);

  if (!data) {
    setResponseStatus(event, 401);
  }

  const payload: Object = data?.payload;

  return {
    isSuccess: true,
    traceId: '1f6e22c5-9b1a-4e3b-a9f8-64d203bbd2a3',
    statusCode: !data ? 401 : 200,
    data: payload,
    message: !data ? 'Unauthorized' : 'User Info Success'
  }
});

function decodeJwt(token: string) {
  try {
    const [header, payload, signature] = token.split('.');
    const decodedHeader = JSON.parse(base64UrlDecode(header));
    const decodedPayload = JSON.parse(base64UrlDecode(payload));
    return {
      header: decodedHeader,
      payload: decodedPayload,
      signature,
    };
  } catch (err: any) {
    return null;
  }
}

function base64UrlDecode(value: string) {
  return Buffer.from(value.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf-8');
}
