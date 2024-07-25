"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const ProfileDetails: React.FC = () => {
	const [image, setImage] = useState("/default-profile.jpg");
	const [firstName, setFirstName] = useState("Ben");
	const [lastName, setLastName] = useState("Wright");
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const img = new Image();
				img.onload = () => {
					if (img.width <= 1024 && img.height <= 1024) {
						setImage(e.target?.result as string);
					} else {
						alert("Image must be below 1024x1024px.");
					}
				};
				img.src = e.target?.result as string;
			};
			reader.readAsDataURL(file);
		}
	};

	const triggerFileInput = () => {
		fileInputRef.current?.click();
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		// Implement form submission logic here
		console.log("Submitting profile details:", { firstName, lastName, image });
	};

	return (
		<form onSubmit={handleSubmit} className="p-3 flex flex-col">
			<h1 className="h1-bold text-black mb-2">Profile Details</h1>
			<p className="text-base text-gray-500 mb-8">
				Add your details to create a personal touch to your profile.
			</p>

			<div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-evenly gap-2 md:gap-8 bg-gray-100 py-4 px-3 rounded-md">
				<p className="text-sm font-medium text-gray-700 mb-2">
					Profile picture
				</p>
				<div className="w-3/4 flex flex-col md:flex-row items-start md:items-center gap-3 justify-center">
					<div className="relative w-[100px] h-[100px]">
						<Image
							src={"/images/profile.svg" || image}
							alt="Profile picture"
							layout="fill"
							objectFit="cover"
							className="rounded-[12px]"
						/>
						<button
							type="button"
							onClick={triggerFileInput}
							className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-[12px] text-sm">
							<svg
								className="w-6 h-6 mb-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							Change Image
						</button>
					</div>
					<input
						ref={fileInputRef}
						type="file"
						accept="image/png, image/jpeg"
						onChange={handleImageChange}
						className="hidden"
					/>
					<p className="text-xs text-gray-500 mt-2">
						Image must be below 1024x1024px.
						<br />
						Use PNG or JPG format.
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-y-6 bg-gray-100 p-3 rounded-md pb-8">
				<div className="flex flex-col md:flex-row items-start md:items-center justify-evenly gap-1 md:gap-8">
					<label
						htmlFor="firstName"
						className="paragraph-medium text-gray-700 mb-1 text-left">
						First name*
					</label>
					<input
						id="firstName"
						name="firstName"
						type="text"
						className="focus:ring-primary-main outline-none border sm:text-sm border-gray-400 rounded-md input-padding focus:outline-none focus:border-primary-main w-full lg:w-3/4"
						placeholder="Ben"
					/>
				</div>

				<div className="flex flex-col md:flex-row items-start md:items-center justify-evenly gap-1 md:gap-8">
					<label
						htmlFor="lastName"
						className="paragraph-medium text-gray-700 mb-1 text-left">
						Last name*
					</label>
					<input
						id="lastName"
						name="lastName"
						type="text"
						className="focus:ring-primary-main outline-none border sm:text-sm border-gray-400 rounded-md input-padding focus:outline-none focus:border-primary-main w-full lg:w-3/4"
						placeholder="Wright"
					/>
				</div>

				<div className="flex flex-col md:flex-row items-start md:items-center justify-evenly gap-1 md:gap-8">
					<label
						htmlFor="email"
						className="paragraph-medium text-gray-700 mb-1 text-left">
						Email*
					</label>
					<input
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						required
						className="focus:ring-primary-main outline-none border sm:text-sm border-gray-400 rounded-md input-padding focus:outline-none focus:border-primary-main w-full lg:w-3/4 ml-0 md:ml-7"
						placeholder="e.g. alex@email.com"
					/>
				</div>
			</div>
			<div className="flex items-end justify-end  border-t border-gray-300 pt-6">
				<button className="bg-primary-main px-6 py-3 h3-bold text-white-main rounded-lg">
					Save
				</button>
			</div>
		</form>
	);
};

export default ProfileDetails;
