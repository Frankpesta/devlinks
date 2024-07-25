"use server";
import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";
import bcrypt from "bcryptjs";
import { CreateUserParams, LoginUserParams } from "./shared.types";

export const register = async (params: CreateUserParams) => {
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
	} catch (error) {
		console.log(error);
		throw error;
	}
};
