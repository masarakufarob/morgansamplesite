import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Morgan Zintec College'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['Journal Article', 'Conference Paper', 'Dissertation / Thesis', 'Research Report', 'Book Chapter', 'Other']),
    authors: z.array(z.string()),
    department: z.enum(['Humanities', 'Maths & Sciences', 'Research & Innovation', 'ECD', 'Theory & Practice', 'ICT', 'Other']),
    abstract: z.string(),
    keywords: z.array(z.string()).default([]),
    date: z.coerce.date(),
    image: z.string().optional(),
    url: z.string().url().optional().or(z.literal('')),
  }),
});

export const collections = { blog, research };