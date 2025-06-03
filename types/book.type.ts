import { z } from "zod/v4";

// Define book format schema and type
export const bookFormatSchema = z.enum([
  "Paperback",
  "Hardcover",
  "Ebook",
  "Audiobook",
]);
export type BookFormat = z.infer<typeof bookFormatSchema>;

// Define book genre schema and type
export const bookGenreSchema = z.object({
  id: z.uuidv4(),
  name: z.string().min(1, "Name cannot be empty"),
});
export type BookGenre = z.infer<typeof bookGenreSchema>;

// Define book review schema and type
export const bookReviewSchema = z.object({
  id: z.uuidv4(),
  userId: z.uuidv4(),
  comment: z.string().max(500, "Maximum 500 characters"),
  rating: z.number().int().min(1).max(5),
  reviewDate: z.date().max(new Date(), "Invalid date"),
});
export type BookReview = z.infer<typeof bookReviewSchema>;

// Define book schema and type
export const bookSchema = z.object({
  bookId: z.uuidv4(),
  title: z
    .string()
    .min(1, "Title cannot be empty")
    .max(255, "Title is too long"),
  authors: z
    .array(z.string().min(1, "Author name cannot be empty"))
    .min(1, "At least one author is required"),
  isbn: z
    .string()
    .regex(/^(978|979)-\d{1,5}-\d{1,7}-\d{1,6}-\d{1}$/, "Invalid ISBN format"),
  publisher: z
    .string()
    .min(1, "Publisher cannot be empty")
    .max(255, "Publisher name is too long"),
  publicationDate: z.date().max(new Date(), "Invalid date"),
  genre: z.array(bookGenreSchema).min(1, "At least one genre is required"),
  description: z.string().min(10, "Description is too short"),
  price: z.number().positive("Price must be a positive number"),
  originalPrice: z
    .number()
    .positive("Original price must be a positive number")
    .optional(),
  stockQuantity: z
    .number()
    .int()
    .nonnegative("Stock quantity cannot be negative"),
  format: bookFormatSchema,
  language: z.string().min(1, "Language cannot be empty"),
  numberOfPages: z.number().int().positive("Number of pages must be positive"),
  coverImageURL: z.url("Invalid URL format for cover image"),
  averageRating: z.number().min(0).max(5).optional(),
  totalReviews: z
    .number()
    .int()
    .nonnegative("Total reviews cannot be negative")
    .optional(),
  reviews: z.array(bookReviewSchema),
});
export type Book = z.infer<typeof bookSchema>;
