export type Money = {
  amount: string;
  currency: string;
};

export type Order = {
  investorName: string;
  shareClass: string;
  amount: Money;
  submissionDate: string;
};

export const orders: Order[] = [];


