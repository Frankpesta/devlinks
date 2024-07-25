import React from "react";
import ViewNav from "@/components/ViewNav";
import ProfileCard from "@/components/ProfileCard";

const ProfilePage = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			<div className="relative md:bg-primary-main h-40 md:h-64 rounded-b-[40px]">
				<div className="absolute w-full top-0 md:top-5">
					<ViewNav />
				</div>
			</div>

			<main className="relative z-100 bottom-20 flex items-center justify-center">
				<ProfileCard />
			</main>
		</div>
	);
};

export default ProfilePage;
