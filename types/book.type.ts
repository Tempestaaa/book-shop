export const FORMATS = ["Hardcover", "Paperback", "Audiobook", "E-book"];
export type BookFormat = (typeof FORMATS)[number];

export type BookGenre = {
  id: number;
  name: string;
};

export type Author = {
  id: number;
  name: string;
  biography: string;
  photo?: string;
  birthDate?: Date;
  books?: Book[];
};

export type Publisher = {
  id: number;
  name: string;
  location: string;
  foundedYear?: number;
  website?: string;
};

export type Review = {
  id: number;
  userId: number;
  bookId: number;
  rating: number;
  comment: string;
  createdAt: Date;
  helpfulVotes: number;
};

export type Book = {
  id: number;
  title: string;
  authorId: number;
  author?: Author;
  genreIds: number[];
  genres?: BookGenre[];
  publisherId: number;
  publisher?: Publisher;
  publicationDate: Date;
  isbn: string;
  format: BookFormat;
  price: number;
  salePrice?: number;
  coverImage: string;
  description: string;
  pageCount: number;
  language: string;
  inStock: number;
  averageRating?: number;
  reviews?: Review[];
  featured?: boolean;
};
