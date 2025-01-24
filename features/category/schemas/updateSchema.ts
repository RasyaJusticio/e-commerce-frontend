import { z } from "zod";

export const categoryUpdateSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(255, { message: "Name must be at most 255 characters long" })
    .optional(),
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

export type CategoryUpdateSchema = z.infer<typeof categoryUpdateSchema>;
