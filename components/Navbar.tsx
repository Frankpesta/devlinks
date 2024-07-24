"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();
	return (
		<nav className="bg-white-main flex items-center justify-between w-full p-[24px]">
			<Link href={"/"}>
				<Image
					src={"/images/logo.svg"}
					alt="logo"
					width={100}
					height={100}
					className="object-cover"
				/>
			</Link>

			<div className="flex items-center gap-8">
				{navbarLinks.map((item) => {
					const isActive =
						(pathname.includes(item.route) && item.route.length > 1) ||
						pathname === item.route;
					return (
						<Link
							key={item.route}
							href={item.route}
							className={`${
								isActive
									? "bg-secondary-accent text-primary-main px-2 rounded-md py-1 flex"
									: "bg-none px-1 py-1 text-gray-400"
							} text-gray-400 paragraph-small flex items-center gap-1 justify-center`}>
							<Image
								src={item.imgUrl}
								alt="icons"
								width={20}
								height={20}
								className="object-cover"
							/>
							<p className="hidden md:flex">{item.label}</p>
						</Link>
					);
				})}
			</div>

			<button className="bg-white flex items-center gap-2 text-primary-main border border-primary-main py-2 px-4 font-bold rounded-md">
				<Image
					src={"/icons/eye.svg"}
					width={20}
					height={20}
					alt="eye"
					className="block md:hidden object-cover"
				/>
				<p className="hidden md:flex text-primary-main">Preview</p>
			</button>
		</nav>
	);
};

export default Navbar;
