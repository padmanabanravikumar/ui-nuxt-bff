export default defineEventHandler(async (event) => {
  const session = await useSession(event, {
    name: 'nuxt-bff-session',
    password: useRuntimeConfig().sessionPassword,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: 'strict'
    },
    maxAge: 60 * 60 * 24 * 7 // 7 days
  });

  // use this to refresh the access token
  const { refreshToken } = session.data;

  // ideally we will use auth refresh endpoint to get the token result
  const result = {
    tokenType: 'Bearer',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYzQ2MzZmMy0xOWM2LTQ3YzgtYWEyNC04YWRiMzA2NDhlODIiLCJuYW1lIjoiUmF2aWt1bWFyIFBhZG1hbmFiYW4iLCJlbWFpbCI6InJhdmlrdW1hci5wYWRtYW5hYmFuQGV4YW1wbGUuY29tIiwicm9sZXMiOiJBZG1pbiIsInByZWZlcnJlZF9uYW1lIjoiUmF2aSIsImlhdCI6MTczNDEwMzgyNiwiZXhwIjoxNzM0MTA3NDI2LCJpc3MiOiJ1aW51eHRiZmYuY29tIn0.z8zwwOnp_oJkmpcjDw15Ak_A4R7fVX-7rDeawWU8fyc',
    refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIiwibmFtZSI6IkphbmUgRG9lIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MzQwMjE1ODgsImV4cCI6MTczNDAyNTE4OCwiaXNzIjoiZXhhbXBsZS1hcHAifQ.GYA5Vx15M1mqSPDWQNrOV7Uo5FC6t4IpCn9uPi1uDoU',
    expiresIn: 3600
  };

  await session.update(result);

  return {
    isSuccess: true,
    traceId: '1f6e22c5-9b1a-4e3b-a9f8-64d203bbd2a3',
    statusCode: 200, // respond with 401 if refresh failed
    result: {
      expiresAt: (new Date()).getTime() + (result.expiresIn * 60 * 1000)
    },
    message: 'Refresh Success'
  }
});
