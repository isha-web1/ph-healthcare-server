import { z } from "zod";
import { Gender, UserStatus } from "../../../../generated/prisma";

const createAdmin = z.object({
    password: z.string().min(1, { message: "Password is required" }),
    admin: z.object({
        name: z.string().min(1, { message: "Name is required!" }),
        email: z.string().min(1, { message: "Email is required!" }),
        contactNumber: z.string().min(1, { message: "Contact Number is required!" })
    })
});



const createDoctor = z.object({
  password: z.string().min(1, { message: "Password is required" }),

  doctor: z.object({
    name: z.string().min(1, { message: "Name is required!" }),

    email: z
      .string()
      .min(1, { message: "Email is required!" })
      .email({ message: "Invalid email format" }),

    contactNumber: z.string().min(1, { message: "Contact Number is required!" }),

    address: z.string().optional(),

    registrationNumber: z.string().min(1, { message: "Reg number is required" }),

    experience: z.number().optional(),

    gender: z.enum([Gender.MALE, Gender.FEMALE], {
      message: "Gender must be male or female",
    }),

    appointmentFee: z.number().min(1, { message: "Appointment fee is required" }),

    qualification: z.string().min(1, { message: "Qualification is required" }),

    currentWorkingPlace: z.string().min(1, { message: "Current working place is required!" }),

    designation: z.string().min(1, { message: "Designation is required!" }),
  }),
});

const createPatient = z.object({
  password: z.string().min(1, { message: "Password is required" }),

  patient: z.object({
    email: z
      .string()
      .min(1, { message: "Email is required!" })
      .email({ message: "Invalid email format" }),

    name: z.string().min(1, { message: "Name is required!" }),

    contactNumber: z.string().min(1, { message: "Contact number is required!" }),

    address: z.string().min(1, { message: "Address is required!" }),
  }),
});





const updateStatus = z.object({
    body: z.object({
        status: z.enum([UserStatus.ACTIVE, UserStatus.BLOCKED, UserStatus.DELETED])
    })
})

export const userValidation = {
    createAdmin,
    createDoctor,
    createPatient,
    updateStatus
}