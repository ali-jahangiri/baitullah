import React from "react";

import LeftArrowIcon from "@/src/assets/icons/angle-left.svg";
import RightArrowIcon from "@/src/assets/icons/angle-left.svg";

const PageNumber = ({ number, isActive, onClick }) => {
	const activeModeClasses = "text-white bg-primary";
	const inActiveModeClasses = "text-primary bg-gray-100";
	return (
		<div
			className={`rounded-full w-12 h-12 flex items-center justify-center cursor-pointer ${
				isActive ? activeModeClasses : inActiveModeClasses
			}`}
			onClick={onClick}
		>
			{number}
		</div>
	);
};

const Pagination = ({ total, current, onSelect }) => {
	return (
		<div className="flex items-center space-x-reverse space-x-5">
			{total <= 5 ? (
				<>
					{new Array(total).fill("").map((_, i) => (
						<PageNumber number={i + 1} isActive={current === i + 1} key={i} />
					))}
				</>
			) : (
				<>
					<button className="flex items-center rounded-3xl bg-white h-12 px-2">
						<p className="mr-1">قلبی</p>
						<div className="flex items-center w-8 h-8 justify-center mr-3 bg-primary/20 rounded-full">
							<LeftArrowIcon className="w-3 h-3 fill-primary" />
						</div>
					</button>

					{new Array(4).fill("").map((_, i) => (
						<PageNumber number={current + i} isActive={i === 0} key={i} />
					))}

					<PageNumber number="..." />
					<PageNumber number={total} />

					<button className="flex items-center rounded-3xl bg-white h-12 px-2">
						<div className="flex items-center w-8 h-8 justify-center ml-3 bg-primary/20 rounded-full">
							<LeftArrowIcon className="w-3 h-3 fill-primary" />
						</div>
						<p className="ml-2">بعدی</p>
					</button>
				</>
			)}
		</div>
	);
};

export default Pagination;
