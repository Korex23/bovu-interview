export interface User {
  name: string;
  avatar: string;
}

export interface Transaction {
  id: string;
  title: string;
  category: string;
  amount: number;
  currency: string;
  date: string;
  type: "expense" | "income";
  icon: string; // URL or identifier
  status: boolean; // toggle state
}

export interface Contact {
  id: string;
  name: string;
  location: string;
  avatar: string;
}

export interface CardData {
  id: string;
  number: string;
  holder: string;
  expiry: string;
  type: "visa" | "mastercard";
  color: string; // gradient class
}

export interface ChartData {
  name: string;
  value: number;
}
