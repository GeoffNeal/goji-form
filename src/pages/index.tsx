import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Components
import Form from "@/components/Form";

/*

  form
  - investor name (text)
  - share class (dropdown)
  - subscription amount (text)
  - submission date (date)
*/

const shareClasses = ["ACME Partners Private Fund", "Goji Private Fund"];

export default function Home() {
  return (
    <>
      <Head>
        <title>Goji FE test</title>
        <meta name="description" content="Goji at home test submission" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-6 flex justify-center items-center h-screen">
        <div className="max-w-xl space-y-2 border rounded-sm p-6">
          <span className="text-lg">
            A form should be displayed here that allows the user to input the
            following:
          </span>
          <ul className="list-disc pl-6">
            <li>investor name (text input)</li>
            <li>
              share class (dropdown input) using the shareClasses array provided
            </li>
            <li>subscription amount (text input)</li>
            <li>
              submission date (date input) which needs to be ISO8601 format when
              submitted
            </li>
          </ul>
          <span className="">
            The form should submit to "/api/order" as a "POST" request and on
            200 response should transition to the page "/orders"
          </span>
        </div>
        <Form>
          <input placeholder="test" />
        </Form>
      </main>
    </>
  );
}
