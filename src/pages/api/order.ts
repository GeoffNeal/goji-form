// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Order, orders } from '@/services/storage';
import type { NextApiRequest, NextApiResponse } from 'next'

type OrderResponse = {
  orders: Order[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrderResponse>
) {
  switch (req.method) {
    case 'POST':
      // TODO: some validation needed
      orders.push(JSON.parse(req.body));
      res.status(200).json(req.body);
      break;
    case 'GET':
      res.status(200).json({
        orders
      })
      break;
    default:
      res.setHeader('Allow', 'POST, GET');
      res.status(405).end('Method Not Allowed');
  }
}
