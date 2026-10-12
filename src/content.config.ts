import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['建站与体验', '增长与投放', 'SEO 与内容', 'AI 自动化']),
    services: z.array(z.string()),
    year: z.string(),
    client: z.string(),
    role: z.string(),
    duration: z.string(),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    outcomes: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
