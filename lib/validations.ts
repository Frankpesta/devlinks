import { z } from "zod";

export const LoginSchema = z.object({
	email: z.string().email({
		message: "Invalid email address",
	}),
	password: z.string().min(8, {
		message: "Password must be at least 8 characters long",
	}),
});

export const RegisterSchema = z
	.object({
		email: z.string().email({ message: "Invalid email address" }),
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters long" }),
		confirmPassword: z
			.string()
			.min(6, {
				message: "Confirm password must be at least 6 characters long",
			}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords must match",
		path: ["confirmPassword"],
	});
