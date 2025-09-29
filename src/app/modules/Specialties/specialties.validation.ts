import { z } from "zod";

const create = z.object({
    title: z.string().min(1, { message: "Title is required" }),
});

export const SpecialtiesValidation = {
    create
}