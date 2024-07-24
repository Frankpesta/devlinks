"use client";
import React, { useState } from "react";
import Image from "next/image";
import LinkInput from "@/components/LinkInput";

interface Link {
	id: number;
	platform: string;
	url: string;
}

const Page = () => {
	const [links, setLinks] = useState<Link[]>([
		{ id: 1, platform: "GitHub", url: "" },
	]);

	const addLink = () => {
		setLinks([...links, { id: links.length + 1, platform: "GitHub", url: "" }]);
	};

	const removeLink = (id: number) => {
		setLinks(links.filter((link) => link.id !== id));
	};

	const updateLink = (id: number, field: "platform" | "url", value: string) => {
		setLinks(
			links.map((link) => (link.id === id ? { ...link, [field]: value } : link))
		);
	};

	return (
		<section className="py-8 px-2 lg:px-4 flex flex-col gap-24">
			<div className="flex flex-col gap-4">
				<h2 className="h1-bold text-black">Customize your links</h2>
				<p className="paragraph-medium text-gray-400">
					Add/edit/remove links below and share all your profiles with the
					world!
				</p>

				<button
					onClick={addLink}
					className="w-full  border text-primary-main rounded-md border-primary-main outline-none h3-bold py-2 px-4">
					<span>+ </span>Add new link
				</button>

				<div className="container mx-auto p-4">
					{links.length >= 1 &&
						links.map((link, index) => (
							<LinkInput
								key={link.id}
								index={index + 1}
								platform={link.platform}
								link={link.url}
								onRemove={() => removeLink(link.id)}
								onPlatformChange={(platform) =>
									updateLink(link.id, "platform", platform)
								}
								onLinkChange={(url) => updateLink(link.id, "url", url)}
							/>
						))}
				</div>
			</div>

			{links.length < 1 && (
				<div className="flex items-center justify-center flex-col gap-3">
					<Image
						src="/images/phone-hand.svg"
						alt="phone-hand"
						width={250}
						height={250}
						className="object-cover"
					/>

					<div className="text-center space-y-5 w-full lg:w-3/4">
						<h2 className="h1-bold">Let&rsquo;s get you started</h2>
						<p className="paragraph-medium text-gray-400">
							Use the "Add new link" button to get started. Once you have more
							than one link, you can reorder and edit them. We are here to help
							you share your profiles with everyone!
						</p>
					</div>
				</div>
			)}

			{links.length >= 1 && (
				<div className="flex items-end justify-end  border-t border-gray-300 pt-5">
					<button className="bg-primary-main px-6 py-3 h3-bold text-white-main rounded-lg">
						Save
					</button>
				</div>
			)}
		</section>
	);
};

export default Page;
