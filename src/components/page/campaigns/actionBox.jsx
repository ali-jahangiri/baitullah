import React from "react";

import { AngleLeft, Walking } from "@/src/assets/icons";

const CampaignActionBox = ({ price, actionLabel, startDate, endDate }) => {
	return (
		<div className="mt-10 p-5 bg-white rounded-xl">
			<div className="flex items-center justify-between rounded-md p-4 bg-[#F5F9FD]">
				<p>مبلغ ورودی به ازای هر فرد:</p>
				<div className="flex items-center">
					<span className="text-primary font-bold">{price.toLocaleString()}</span>
					<span className="text-[#B9B9B9] mr-1">تومان </span>
				</div>
			</div>

			{startDate && endDate && (
				<div className="flex items-center rounded-xl border border-[#EDEDED] mt-10 p-2">
					<div className="flex items-center w-full justify-center">
						<Walking className="w-8 h-8 fill-primary scale-x-[-1]" />
						<div className="mr-5">
							<p className="text-[#8B8B8B] text-sm mb-2">تاریخ ورود</p>
							<span className="text-[#3D3C45] text-lg">{startDate}</span>
						</div>
					</div>
					<div className="h-12 my-auto w-1 bg-[#EDEDED]" />
					<div className="flex items-center w-full justify-center">
						<Walking className="w-8 h-8 fill-gray-400" />
						<div className="mr-5">
							<p className="text-[#8B8B8B] text-sm mb-2">تاریخ خروج</p>
							<span className="text-[#3D3C45] text-lg">{endDate}</span>
						</div>
					</div>
				</div>
			)}

			<div className="flex items-center justify-between mt-8">
				<div>
					<p className="text-[#ABB5C6]">ظرفیت باقی مانده</p>
					<p className="text-[#3D3C45] font-bold text-lg">نا مشخص</p>
				</div>

				<button className="flex items-center justify-between rounded-3xl bg-primary text-white p-3 px-4">
					{actionLabel}

					<AngleLeft className="w-4 h-4 mr-12 fill-white" />
				</button>
			</div>
		</div>
	);
};

export default CampaignActionBox;
