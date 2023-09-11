import routes  from "./router.ts";
import { Route } from "./src/types/route";

const server = Bun.serve({
    port: Bun.env.APP_PORT,
    fetch: (req) => bind(req)
  });

console.log(`server is sunning at port: ${server.port}`);


function bind(request:Request): Response {
    const url = new URL(request.url);
    const controller = routes.find((item: Route) => item.path === url.pathname)?.controller;

    if (controller === undefined) {
        return new Response('not found', {status: 404});
    }

    return controller(request);
}
