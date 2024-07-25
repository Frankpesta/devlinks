import React from "react";

const ViewNav = () => {
	return (
		<div className="flex items-center justify-between py-[10px] px-4 bg-white-main mx-0 md:mx-6 lg:mx-12 rounded-lg">
			<button className="px-4 py-2 md:px-6 md:py-3 bg-white-main border border-primary-main outline-none h3-bold text-primary-main rounded-lg">
				Back to Editor
			</button>
			<button className="px-6 py-3 bg-primary-main border-none outline-none h3-bold text-white-main rounded-lg">
				Share Link
			</button>
		</div>
	);
};

export default ViewNav;
