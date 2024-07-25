"use server";
import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";
import bcrypt from "bcryptjs";
import { CreateUserParams, LoginUserParams } from "./shared.types";

export const createAccount = async (params: CreateUserParams) => {
	const { email, password, confirmPassword } = params;

	try {
		await connectToDatabase();
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return {
				error: "Email already exists!",
			};
		}
		if (password !== confirmPassword) {
			return {
				error: "Your password does not match!",
			};
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User({
			email,
			password: hashedPassword,
		});
		const savedUser = await user.save();
		return { user: savedUser };
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const login = async (params: LoginUserParams) => {
	const { email, password } = params;

	try {
		await connectToDatabase();
		const user = await User.findOne({ email });

		if (!user) {
			return {
				error: "User not found",
			};
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			return {
				error: "Invalid password",
			};
		}

		// You might want to generate and return a JWT token here for authentication
		// For this example, we'll just return the user object (excluding the password)
		const { password: _, ...userWithoutPassword } = user.toObject();
		return { user: userWithoutPassword };
	} catch (error) {
		console.error("Login error:", error);
		throw error;
	}
};
