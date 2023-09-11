import { Route } from "./src/types/route.ts";

const routes: Array<Route> = [
    {
        path: '/',
        controller: sayHello,
    },
    {
        path: '/401',
        controller: unauthenticatedResponse,
    },
    {
        path: '/test',
        controller: testResponse,
    },
    {
        path: '/refresh-token',
        controller: refreshToken
    },
];

let counter = 0;

function getCount() {
  counter++;

  return counter;
}


function testResponse(): Response {
    if (getCount() === 1) {
        return unauthenticatedResponse();
    }

    console.log('test controller');
    
    return new Response('working', {status: 200});
}

function refreshToken(refreshToken: string): Response {
    const newToken: string = (new Bun.CryptoHasher("sha256")).digest("hex");

    return new Response(newToken, {status: 200});
}

function unauthenticatedResponse(): Response {
    console.log('unauthenticated controller');

    return new Response('unauthenticated', {status: 401})
}

function sayHello(): Response {
    return new Response('hello my boy', {status: 200})
}

export default routes;