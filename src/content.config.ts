import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const accommodation = defineCollection({
  loader: file('src/content/accommodation.json'),
  schema: z.object({
    id: z.enum(['one-bedroom', 'two-bedroom']),
    title: z.string().trim().min(1),
    shortName: z.string().trim().min(1),
    number: z.string(),
    introduction: z.string().trim().min(1),
    description: z.string().trim().min(1),
    detailedDescription: z.string().trim().min(1).optional(),
    guestCapacity: z.number().int().positive().optional(),
    bedConfiguration: z.string().trim().min(1).optional(),
    amenities: z.array(z.string().trim().min(1)).default([]),
    photoIds: z.array(z.string().trim().min(1)).default([]),
    policies: z.array(z.string().trim().min(1)).default([]),
    enquiryIdentifier: z.string().trim().min(1),
    draft: z.boolean().default(true),
  }),
});

export const collections = { accommodation };
