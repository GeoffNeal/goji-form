import { rest } from "msw";
import { setupServer } from "msw/node";
import "whatwg-fetch";

// Mock a server to provide the response from /api/orders
const server = setupServer(
  rest.get("/api/order", (req, res, ctx) => {
    return res(
      ctx.json({
        orders: [
          {
            funds: { amount: 20000, currency: "EUR" },
            date: "2023-09-28",
            name: "Testy McTestington",
            shareClass: "ACME Partners Private Fund",
          },
          {
            funds: { amount: 10000, currency: "EUR" },
            date: "2023-09-19",
            name: "Billy Bob Bobson",
            shareClass: "Goji Private Fund",
          },
        ],
      })
    );
  }),
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
