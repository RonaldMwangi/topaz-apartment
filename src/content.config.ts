import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const accommodation = defineCollection({
  loader: file('src/content/accommodation.json'),
  schema: z.object({
    title: z.string().trim().min(1),
    description: z.string().trim().min(1),
    guestCapacity: z.number().int().positive(),
    amenities: z.array(z.string().trim().min(1)),
    images: z.array(z.object({
      // Approved property photos stored in public/, e.g. /accommodation/photo.webp.
      src: z.string().regex(/^\/(?!\/)[^\s]+$/, 'Use a site-relative public image path'),
      alt: z.string().trim().min(1),
      width: z.number().int().positive(),
      height: z.number().int().positive(),
    })).default([]),
    price: z.object({
      amount: z.number().nonnegative(),
      currency: z.string().regex(/^[A-Z]{3}$/),
      basis: z.enum(['night', 'stay']),
    }).optional(),
    enquiryIdentifier: z.string().trim().min(1),
    draft: z.boolean().default(true),
  }),
});

export const collections = { accommodation };
