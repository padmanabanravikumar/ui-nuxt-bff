import { joinURL } from 'ufo';

export default defineEventHandler(async (event) => {
  console.log(event.path);
  const proxyUrl = useRuntimeConfig().adminProxyUrl;
  const path = event.path.replace(/^\/api\/admin/, '');
  const target = joinURL(proxyUrl, path);
  console.log(target);
  return proxyRequest(event, target, {
    headers: {
      Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIiwibmFtZSI6IkphbmUgRG9lIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MzQwMjE1ODgsImV4cCI6MTczNDAyNTE4OCwiaXNzIjoiZXhhbXBsZS1hcHAifQ.GYA5Vx15M1mqSPDWQNrOV7Uo5FC6t4IpCn9uPi1uDoU'
    }
  });
});
