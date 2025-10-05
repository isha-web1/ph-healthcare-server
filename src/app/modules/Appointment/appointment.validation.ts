import { z } from 'zod';

const createAppointment = z.object({
    body: z.object({
        doctorId: z.string({
            message: "Doctor id is required!"
        }),
        scheduleId: z.string({
            message: "Doctor schedule id is required!"
        })
    })
});

export const AppointmentValidation = {
    createAppointment
};