import { z } from "zod";

export const categoryCreateSchema = z.object({
  name: z.string().nonempty({ message: "Category name is required" }),
  slug: z
    .string()
    .regex(/^(?!-)((?:[a-z0-9]+-?)+)(?<!-)$/, {
      message: "Slug can only contain lowercase, alphanumeric, and hyphens",
    })
    .optional(),
});

export type CategoryCreateSchema = z.infer<typeof categoryCreateSchema>;
