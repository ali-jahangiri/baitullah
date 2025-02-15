"use client";
import React, { useState } from "react";

const CampaignCard = ({ img, totalShare, eachSharePrice, remainShare, audience, onPurchase }) => {
	const [currentCountOfShare, setCurrentCountOfShare] = useState(5);

	function increaseCountOfShareHandler() {
		setCurrentCountOfShare(prev => prev + 1);
	}

	function decreesCountOfShareHandler() {
		if (currentCountOfShare > 1) {
			setCurrentCountOfShare(prev => prev - 1);
		}
	}

	return (
		<div className="shadow-lg rounded-xl bg-white">
			<div className="p-5">
				<div className="rounded-full mr-auto bg-gray-50 w-20 text-xs text-gray-500 text-center p-3">
					{totalShare} سهم
				</div>

				<div className="w-full h-60 bg-gray-600 mt-5"></div>

				<div className="flex items-center justify-between mt-5">
					<p className="text-gray-500">{audience.name}</p>
					<p className="mr-auto text-xs text-gray-500">{audience.age} ساله</p>
					<span className="text-secondary mr-1 text-xs">{audience.city}</span>
				</div>

				<p className="mt-3 text-gray-400">{audience.needDesc}</p>
			</div>

			<div className="flex items-center justify-between p-5 bg-gray-50">
				<div>
					<p className="text-xs text-gray-400">در این آرزو سهیم باشید</p>
					<div className="flex items-center mt-3">
						<button
							className="text-lg w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-400"
							onClick={decreesCountOfShareHandler}
						>
							-
						</button>
						<p className="text-green-800 mx-4">{currentCountOfShare}</p>
						<button
							className="text-lg w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-400"
							onClick={increaseCountOfShareHandler}
						>
							+
						</button>
					</div>
				</div>
				<div>
					<p className="text-gray-400 text-xs">
						ارزش هر سهم <span className="text-green-800 text-sm">{eachSharePrice}</span> تومان
					</p>
					<p className="text-gray-400 text-sm mt-3">
						<span className="text-primary ml-5">{remainShare}</span> سهم باقی مانده
					</p>
				</div>
			</div>

			<button className="flex items-center justify-around bg-[#F3F7FE] text-sm rounded-lg p-3 text-primary mx-auto my-4 w-11/12">
				<span className="ml-3">پرداخت</span>
				<p>
					<span className="ml-1">{currentCountOfShare * eachSharePrice}</span>
					<span className="text-primary/50">تومان</span>
				</p>
			</button>
		</div>
	);
};

export default CampaignCard;
