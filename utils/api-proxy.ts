import { joinURL } from 'ufo';
import type { H3Event, EventHandlerRequest } from 'h3';

export default async function apiProxy(event: H3Event<EventHandlerRequest>, proxyUrl: string, path: RegExp): Promise<Promise<any>> {
  const session = await useSession(event, {
    name: 'nuxt-bff-session',
    password: useRuntimeConfig().sessionPassword
  });
  const { accessToken } = session.data;
  const target = joinURL(proxyUrl, event.path.replace(path, ''));

  return proxyRequest(event, target, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
}
