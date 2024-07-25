"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { LoginSchema } from "@/lib/validations";

const LoginForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof LoginSchema>) {
		setIsSubmitting(true);
		console.log(values);
	}

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<div className="flex justify-center">
					<Image
						src={"/images/logo.svg"}
						alt="logo"
						width={150}
						height={150}
						className="object-cover"
					/>
				</div>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white-main py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<h2 className="mt-6 text-left h1-bold font-extrabold text-gray-900">
						Login
					</h2>
					<p className="mt-2 text-left paragraph-medium text-gray-600">
						Add your details below to get back into the app
					</p>
					<form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
						<div>
							<label
								htmlFor="email"
								className={`block text-sm font-medium ${
									errors.email ? "text-accent-main" : "text-gray-700"
								}`}>
								Email address
							</label>
							<div className="mt-1 relative rounded-md shadow-sm">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center gap-4 pointer-events-none">
									<svg
										className={`h-5 w-5 ${
											errors.email ? "text-accent-main" : "text-gray-400"
										}`}
										viewBox="0 0 20 20"
										fill="currentColor">
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
								</div>
								<input
									id="email"
									type="email"
									autoComplete="email"
									required
									className={`focus:ring-primary-main outline-none border block w-full sm:text-sm border-gray-400 rounded-md input-padding focus:outline-none focus:border-primary-main ${
										errors.email ? "border-accent-main" : "border-gray-400"
									}`}
									placeholder={`${
										errors.email ? errors.email.message : "e.g. alex@email.com"
									}`}
									{...register("email")}
								/>
							</div>
							{errors.email && (
								<p className="text-red-500 text-sm mt-2">
									{errors.email.message}
								</p>
							)}
						</div>

						<div>
							<label
								htmlFor="password"
								className={`block text-sm font-medium ${
									errors.password ? "text-accent-main" : "text-gray-700"
								}`}>
								Password
							</label>
							<div className="mt-1 relative rounded-md shadow-sm">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center gap-4 pointer-events-none">
									<svg
										className={`h-5 w-5 ${
											errors.password ? "text-accent-main" : "text-gray-400"
										}`}
										viewBox="0 0 20 20"
										fill="currentColor">
										<path
											fillRule="evenodd"
											d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<input
									id="password"
									type="password"
									autoComplete="current-password"
									required
									className={`focus:ring-primary-main outline-none border block w-full sm:text-sm border-gray-400 rounded-md input-padding focus:outline-none focus:border-primary-main ${
										errors.password ? "border-red-500" : "border-gray-400"
									}`}
									placeholder={`${
										errors.password
											? errors.password.message
											: "Enter your password"
									}`}
									{...register("password")}
								/>
							</div>
							{errors.password && (
								<p className="text-red-500 text-sm mt-2">
									{errors.password.message}
								</p>
							)}
						</div>

						<div>
							<button
								type="submit"
								className="w-full flex justify-center btn border border-transparent rounded-lg shadow-sm text-sm font-medium text-white-main bg-primary-main hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Login
							</button>
						</div>
					</form>

					<p className="mt-6 text-center text-sm text-gray-600">
						Don&rsquo;t have an account?{" "}
						<Link
							href="/signup"
							className="font-medium text-indigo-600 hover:text-indigo-500">
							Create account
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
