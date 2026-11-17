export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/.well-known/')) {
      return env.ASSETS.fetch(request);
    }

    if (url.hostname === 'aibrobot.com') {
      const destination = `https://www.aibrobot.com${url.pathname}${url.search}`;
      return Response.redirect(destination, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
