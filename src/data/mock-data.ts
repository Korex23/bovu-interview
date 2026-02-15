import type { User, Transaction, Contact, Card } from "@/types";
import wavy from "@/assets/wavy.png";
import angle from "@/assets/angle.png";

export const CONTACTS: Contact[] = [
  {
    id: "1",
    name: "Mike Taylor",
    location: "Chicago, TX",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    id: "2",
    name: "Jack Green",
    location: "Oakland, CO",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    id: "3",
    name: "Carmen Lewis",
    location: "Milwaukee, CA",
    avatar: "https://i.pravatar.cc/80?img=45",
  },
  {
    id: "4",
    name: "Micheal Richardson",
    location: "Tampa, CA",
    avatar: "https://i.pravatar.cc/80?img=56",
  },
  {
    id: "5",
    name: "Willie Cole",
    location: "Seattle, WA",
    avatar: "https://i.pravatar.cc/80?img=67",
  },
  {
    id: "6",
    name: "Phylis Weber",
    location: "Tampa, NY",
    avatar: "https://i.pravatar.cc/80?img=28",
  },
];

export const transactions: Transaction[] = [
  {
    id: "t1",
    title: "Online Shopping",
    category: "shopping",
    amount: -3100,
    currency: "PKR",
    date: "Today",
    type: "expense",
    icon: "shopping",
    status: true,
  },
  {
    id: "t2",
    title: "Instagram Affiliates",
    category: "social",
    amount: 210000,
    currency: "PKR",
    date: "Yesterday",
    type: "income",
    icon: "instagram",
    status: true,
  },
  {
    id: "t3",
    title: "College Fee",
    category: "education",
    amount: -11390,
    currency: "PKR",
    date: "2 days ago",
    type: "expense",
    icon: "school",
    status: true,
  },
  {
    id: "t4",
    title: "College Fee",
    category: "education",
    amount: -11390,
    currency: "PKR",
    date: "2 days ago",
    type: "expense",
    icon: "school",
    status: true,
  },
];

export const user: User = {
  name: "Mikey",
  avatar: "https://picsum.photos/100/100?random=1",
};

export const incomeData = [
  { x: "1", v: 20 },
  { x: "2", v: 24 },
  { x: "4", v: 28 },
  { x: "3", v: 18 },
  { x: "5", v: 22 },
  { x: "6", v: 30 },
  { x: "7", v: 26 },
  { x: "8", v: 34 },
  { x: "9", v: 24 },
];

export const expensesData = [
  { x: "1", v: 12 },
  { x: "2", v: 10 },
  { x: "7", v: 22 },
  { x: "8", v: 18 },
];

export const subsData = [
  { x: "A", a: 18, b: 10 },
  { x: "B", a: 14, b: 8 },
  { x: "C", a: 22, b: 12 },
  { x: "D", a: 10, b: 7 },
  { x: "E", a: 26, b: 14 },
  { x: "F", a: 16, b: 9 },
  { x: "G", a: 20, b: 11 },
];

export const donutData = [
  { name: "Other", value: 17, key: "other" },
  { name: "Education", value: 53, key: "edu" },
  { name: "Entertainment", value: 18, key: "ent" },
  { name: "Savings", value: 12, key: "sav" },
];

export const cards: Card[] = [
  {
    id: "card-1",
    image: wavy,
    number: "3100 6789 6729 8710",
    holder: "Anita Rose",
    expiry: "09/17",
  },
  {
    id: "card-2",
    image: angle,
    number: "3100 6789 6729 8710",
    holder: "Anita Rose",
    expiry: "09/17",
  },
];
