import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Components
import Form, { FormCol, FormRow } from "@/components/Form";
import { Input, Dropdown } from "@/components/FormField";

/*

  form
  - investor name (text)
  - share class (dropdown)
  - subscription amount (text)
  - submission date (date)
*/

const shareClasses = ["ACME Partners Private Fund", "Goji Private Fund"];

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [values, setValues] = useState<Order>({
    date: "",
    name: "",
    shareClass: shareClasses[0],
    funds: { amount: "", currency: "EUR" },
  });

  const validate = () => {
    let isValid = true;
    // Check all fields have values
    Object.values(values).forEach((val) => {
      if (!val) {
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSubmit: React.EventHandler<React.FormEvent> = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setError(true);
      return;
    }

    const response = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (response.status === 200) {
      router.push("/orders");
      return;
    }

    setError(true);
  };

  const handleChange: React.EventHandler<
    React.ChangeEvent<HTMLInputElement>
  > = (e) => {
    let { name, value } = e.target;

    if (name === "funds") {
      setValues((prevValues) => ({
        ...prevValues,
        funds: { ...prevValues.funds, amount: value },
      }));
      return;
    }

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleDropdownChange: React.EventHandler<
    React.ChangeEvent<HTMLSelectElement>
  > = (e) => {
    let { value } = e.target;
    setValues((prevValues) => ({ ...prevValues, shareClass: value }));
  };

  return (
    <>
      <Head>
        <title>Goji FE test</title>
        <meta name="description" content="Goji at home test submission" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-6 flex justify-center items-center h-screen">
        <Form onSubmit={handleSubmit}>
          <FormCol>
            <FormRow>
              <Input
                label="Investor Name"
                id="name"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
              <Dropdown
                options={shareClasses}
                id="shareClass"
                name="shareClass"
                onChange={handleDropdownChange}
                value={values.shareClass}
              />
            </FormRow>
            <Input
              label="Subscription Amount"
              type="number"
              id="funds"
              name="funds"
              onChange={handleChange}
              value={values.funds.amount}
            />
            <Input
              label="Submission Date"
              type="date"
              id="date"
              name="date"
              onChange={handleChange}
              value={values.date}
            />
          </FormCol>
          <button type="submit">Submit</button>
        </Form>
        {error ? (
          <div>
            <p>Something went wrong</p>
          </div>
        ) : null}
      </main>
    </>
  );
}
