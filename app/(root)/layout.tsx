import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="min-h-screen">
			<Navbar />
			<div className="flex flex-col lg:flex-row items-start gap-4 bg-gray-light pt-0 px-2 lg:px-[24px] pb-[24px] m-4">
				<LeftSidebar />
				<main className="w-full rounded-md h-full bg-white-main shadow-sm">
					{children}
				</main>
			</div>
		</section>
	);
};

export default Layout;
