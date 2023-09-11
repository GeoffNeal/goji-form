import { rest } from "msw";
import { setupServer } from "msw/node";
import "whatwg-fetch";

// Mock a server to provide the response from /api/orders
const server = setupServer(
  rest.post("/api/order", (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
