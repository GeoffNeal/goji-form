import { useState, useEffect } from "react";
import Head from "next/head";

// Components
import Table, { TableRow, Th, Td } from "@/components/Table";

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      return await fetch("/api/order").then((res) => res.json());
    };

    getOrders().then((res) => {
      setOrders(res.orders);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Goji FE test</title>
        <meta name="description" content="Goji at home test submission" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-6 flex flex-col justify-center items-center h-screen">
        <Table>
          <thead>
            <TableRow>
              <Th id="name">Name</Th>
              <Th id="amount">Amount</Th>
              <Th id="shareClass">Share Class</Th>
              <Th id="date">Date</Th>
            </TableRow>
          </thead>
          <tbody>
            {orders.map((order) => (
              <TableRow key={order.name}>
                <Td headers="name">{order.name}</Td>
                <Td headers="amount">{`${order.funds.amount} - ${order.funds.currency}`}</Td>
                <Td headers="shareClass">{order.shareClass}</Td>
                <Td headers="date">{order.date}</Td>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </main>
    </>
  );
}
