import React from "react";
import Button from "../../ui/button";
import CampaignSearchBarMenu from "./searchBarMenu";

import { Search } from "@/src/assets/icons";

const CampaignSearchBar = () => {
	return (
		<div className="flex rounded-xl shadow-md p-3 w-3/5 mx-auto bg-white">
			<CampaignSearchBarMenu title="استان" icon={""} />
			<Button icon={<Search className="w-5 h-5 fill-white" />}>جستجو</Button>
		</div>
	);
};

export default CampaignSearchBar;
