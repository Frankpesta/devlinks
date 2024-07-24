import React from "react";
import Image from "next/image";

const LeftSidebar = () => {
	return (
		<div className="hidden lg:flex w-full max-w-[560px] items-center justify-center bg-white-main rounded-md py-12 shadow-sm">
			<div>
				<Image
					src="/images/phone.svg"
					width={300}
					height={300}
					alt="phone-illustration"
					className="object-cover"
				/>
			</div>
		</div>
	);
};

export default LeftSidebar;
