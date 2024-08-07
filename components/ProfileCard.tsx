import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SocialLink {
	name: string;
	url: string;
	bgColor: string;
	textColor: string;
	icon: React.ReactNode;
}

const ProfileCard: React.FC = () => {
	const socialLinks: SocialLink[] = [
		{
			name: "GitHub",
			url: "https://github.com/benwright",
			bgColor: "bg-gray-900",
			textColor: "text-white",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: "YouTube",
			url: "https://youtube.com/benwright",
			bgColor: "bg-red-600",
			textColor: "text-white",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
				</svg>
			),
		},
		{
			name: "LinkedIn",
			url: "https://linkedin.com/in/benwright",
			bgColor: "bg-blue-600",
			textColor: "text-white",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
				</svg>
			),
		},
	];

	return (
		<section className="bg-white z-20 w-full max-w-md md:max-w-xs rounded-xl flex items-center gap-4 flex-col bg-white-main bottom-12 py-10">
			<div>
				<div className="w-24 h-24 rounded-full border-primary-main bg-white-main">
					<Image
						src="/images/profile.svg"
						alt="Ben Wright"
						width={96}
						height={96}
						className="rounded-full"
					/>
				</div>
			</div>
			<div className="">
				<h2 className="text-2xl font-bold text-gray-900">Ben Wright</h2>
				<p className="text-gray-500 text-sm mt-1">ben@example.com</p>
			</div>
			<div className="mt-6 space-y-3">
				{socialLinks.map((link) => (
					<Link
						key={link.name}
						href={link.url}
						className={`w-full max-w-full flex items-center justify-between px-6 py-2 rounded-lg ${link.bgColor} text-white-main ${link.textColor}`}>
						<div className="flex items-center">
							{link.icon}
							<span className="ml-3 font-medium">{link.name}</span>
						</div>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</Link>
				))}
			</div>
		</section>
	);
};

export default ProfileCard;
