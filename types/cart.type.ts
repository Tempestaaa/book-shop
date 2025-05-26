import { Book } from "@/types/book.type";

export type CartItem = {
  bookId: number;
  book?: Book;
  quantity: number;
};

export type ShoppingCart = {
  userId: number;
  items: CartItem[];
  lastUpdated: Date;
};
