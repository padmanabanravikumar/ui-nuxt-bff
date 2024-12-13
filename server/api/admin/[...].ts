import apiProxy from '@/utils/api-proxy';

export default defineEventHandler(async (event) => {
  return await apiProxy(event, useRuntimeConfig().adminProxyUrl, /^\/api\/admin/);
});
