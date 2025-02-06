import { z } from "zod";

export const categoryCreateSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  slug: z
    .string()
    .optional()
    .refine(
      (value) =>
        value === undefined || /^(?!-)((?:[a-z0-9]+-?)+)(?<!-)$/.test(value),
      {
        message: "Slug can only contain lowercase, alphanumeric, and hyphens",
      },
    ),
});

export type CategoryCreateSchema = z.infer<typeof categoryCreateSchema>;
