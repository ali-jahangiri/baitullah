import React from "react";
import Button from "../../ui/button";
import CampaignSearchBarMenu from "./searchBarMenu";

import SearchIcon from "@/src/assets/icons/search.svg";

const CampaignSearchBar = () => {
	return (
		<div className="flex rounded-xl shadow-md p-3 w-3/5 mx-auto bg-white">
			<CampaignSearchBarMenu title="استان" icon={""} />
			<Button icon={<SearchIcon className="w-5 h-5 fill-white" />}>جستجو</Button>
		</div>
	);
};

export default CampaignSearchBar;
