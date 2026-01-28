import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/education" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/skills" }),
  schema: z.array(z.string()),
});

const certifications = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/certifications" }),
  schema: z.array(z.string()),
});

const profile = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/profile" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const learning = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/learning" }),
  schema: z.array(z.string()),
});

const home = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/home" }),
  schema: z.object({
    greeting: z.string(),
    intro: z.string(),
    role: z.string(),
    description: z.string(),
    connect: z.string(),
    message: z.string()
  }),
});

export const collections = {
  experience,
  education,
  skills,
  certifications,
  profile,
  learning,
  home,
};
