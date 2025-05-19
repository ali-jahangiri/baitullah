import React from "react";

const ScheduleItem = ({ title, desc, presenter, startTime, endTime }) => {
	return (
		<div className="flex flex-col justify-between rounded-3xl bg-white p-5 w-[270px] h-[360px]">
			<p className="text-[#3D3C45] text-[20px]">{title}</p>
			<p className="mt-3 mb-auto text-[#ABB5C6]">{desc}</p>

			<div className="mb-auto">
				<p className="text-[#ABB5C6]">امام جماعت:</p>
				<p className="text-center mt-4">{presenter}</p>
			</div>

			<p className="flex items-center justify-center mb-5 text-center text-[#ABB5C6]">
				<span className="ml-2">
					{startTime} {endTime ? `-${endTime}` : ""}
				</span>
				<svg
					fill="#ABB5C6"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="20"
					height="20"
				>
					<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
					<path d="M12,6a1,1,0,0,0-1,1v4.325L7.629,13.437a1,1,0,0,0,1.062,1.7l3.84-2.4A1,1,0,0,0,13,11.879V7A1,1,0,0,0,12,6Z" />
				</svg>
			</p>
		</div>
	);
};

export default ScheduleItem;
