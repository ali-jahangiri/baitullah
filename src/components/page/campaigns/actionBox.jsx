import React from "react";

const CampaignActionBox = ({ price }) => {
	return (
		<div className="p-5 bg-white">
			<div className="flex items-center justify-between rounded-md p-4 bg-[#F5F9FD]">
				<p>مبلغ ورودی به ازای هر فرد:</p>
				<div className="flex items-center">
					<span className="text-primary">{price}</span>
					<span className="text-[#B9B9B9]">تومان </span>
				</div>
			</div>
		</div>
	);
};

export default CampaignActionBox;
