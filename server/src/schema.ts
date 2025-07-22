
import { z } from 'zod';

// Counter schema
export const counterSchema = z.object({
  id: z.number(),
  value: z.number().int(),
  updated_at: z.coerce.date()
});

export type Counter = z.infer<typeof counterSchema>;

// Input schema for updating counter
export const updateCounterInputSchema = z.object({
  operation: z.enum(['increment', 'decrement'])
});

export type UpdateCounterInput = z.infer<typeof updateCounterInputSchema>;

// Input schema for setting counter value
export const setCounterInputSchema = z.object({
  value: z.number().int()
});

export type SetCounterInput = z.infer<typeof setCounterInputSchema>;
