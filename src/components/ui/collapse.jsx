import React, { useState } from "react";

import { AngleLeft, AngleSmallDown, Question } from "@/src/assets/icons";

const Collapse = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="rounded-lg bg-gray-50 select-none mb-3">
			<div className="flex items-center p-5" onClick={() => setIsOpen(prev => !prev)}>
				<div
					className={`rounded-full w-6 h-6 flex items-center justify-center ml-2 ${
						!isOpen ? "bg-gray-200" : "bg-secondary"
					}`}
				>
					<Question className="w-3 h-3 fill-white" />
				</div>
				<p className="text-gray-700 ml-auto">{title}</p>

				{isOpen ? (
					<AngleSmallDown className="w-5 h-5 fill-gray-500" />
				) : (
					<AngleLeft className="w-3 h-3 fill-gray-300" />
				)}
			</div>

			{isOpen && (
				<>
					<div className="h-[1px] bg-[#EAEAEA] w-11/12 mx-auto" />
					<div className="text-sm text-gray-400 mt-2 p-3">{content}</div>
				</>
			)}
		</div>
	);
};

export default Collapse;
