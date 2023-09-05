## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/orders](http://localhost:3000/api/orders). This endpoint can be edited in `pages/api/orders.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Submission criteria

Step one:

Build out the form on `pages/index.tsx` to include the following fields:

- investor name
- share class
- subscription amount (always `EUR`)
- submission date

Once the user completes this form they should be able to click a submit button and have their data sent to `/api/order` for storage.

We expect the submission date to be in `ISO-8601` format.

The subscription amount should be in the following format: `{amount: 0, currency: 'EUR'}`

Step two:

Build out the table on `pages/orders.tsx` to list all the fields returned from a `GET` request to `/api/order`.


For both steps we expect some form of testing. Use a library you're confident with.

## Guidance

- We will use this submission in further technical stages. 
- We expect you to spend about 1-2 hours on this.
- You are free to add/remove dependencies and modify packages.
- Please create a PR, at least 24 before your in-person interview.
- Any questions, please email: [Jonathan Evans](mailto:jonathan.evans@goji.investments)