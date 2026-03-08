import { defineMiddleware } from 'astro:middleware';

const REDIRECT_TO = 'https://alquilercamionetaspuno.net.pe';

export const onRequest = defineMiddleware(({ url }, next) => {
  // Build the target URL preserving path + query string
  const destination = REDIRECT_TO + url.pathname + url.search;

  return new Response(null, {
    status: 301,
    headers: {
      Location: destination,
      // Tell search engines this redirect is permanent
      'Cache-Control': 'no-store',
    },
  });
});
