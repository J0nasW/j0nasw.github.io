import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const skills = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/skills" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    status: z.enum(["public", "private"]),
    install: z.string().optional(),
    usage: z.string().optional(),
    repo: z.string().optional(),
    phases: z.array(z.string()).optional(),
    venues: z.array(z.string()).optional(),
    inspiration: z
      .object({
        name: z.string(),
        url: z.string(),
      })
      .optional(),
    order: z.number(),
  }),
});

export const collections = { skills };
