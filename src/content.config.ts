import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string()
  })
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/education' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string()
  })
});

export const collections = {
  experience,
  education
};
