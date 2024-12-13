import { joinURL } from 'ufo';
import type { H3Event, EventHandlerRequest } from 'h3';

export default function apiProxy(event: H3Event<EventHandlerRequest>, proxyUrl: string, path: RegExp) {
  const target = joinURL(proxyUrl, event.path.replace(path, ''));
  // to do: get token from session
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIiwibmFtZSI6IkphbmUgRG9lIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MzQwMjE1ODgsImV4cCI6MTczNDAyNTE4OCwiaXNzIjoiZXhhbXBsZS1hcHAifQ.GYA5Vx15M1mqSPDWQNrOV7Uo5FC6t4IpCn9uPi1uDoU';
  return proxyRequest(event, target, {
    headers: {
      Authorization: `bearer ${token}`
    }
  });
}
