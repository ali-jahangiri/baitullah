import React from "react";

const CampaignSearchBarMenu = ({ title, icon, items, defaultItem }) => {
	return (
		<div className="flex">
			<div className="ml-5">{icon}</div>
			<div>
				<p className="text-sm text-400">{title}</p>
			</div>
		</div>
	);
};

export default CampaignSearchBarMenu;
