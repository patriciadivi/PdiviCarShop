import { z } from 'zod';

const schemaVehicle = z.object({
  model: z.string().min(3),
  year: z.number().int().gt(1900).lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

type IVehicle = z.infer<typeof schemaVehicle>;

export { schemaVehicle, IVehicle };