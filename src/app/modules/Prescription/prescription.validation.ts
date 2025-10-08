import { z } from 'zod';

const create = z.object({
    body: z.object({
        appointmentId: z.string({
            message: 'Appointment ID is required',
        }),
        instructions: z.string({
            message: 'Instructions is required',
        }),
    }),
});

export const PrescriptionValidation = {
    create,
};