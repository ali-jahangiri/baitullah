import React, { useState } from "react";

import QuestionIcon from "@/src/assets/icons/question.svg";
import LeftArrowIcon from "@/src/assets/icons/angle-left.svg";
import DownArrowIcon from "@/src/assets/icons/angle-small-down.svg";

const Collapse = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="rounded-lg bg-gray-50 select-none">
			<div className="flex items-center p-3" onClick={() => setIsOpen(prev => !prev)}>
				<div
					className={`rounded-full w-6 h-6 flex items-center justify-center ml-2 ${
						!isOpen ? "bg-gray-200" : "bg-secondary"
					}`}
				>
					<QuestionIcon className="w-3 h-3 fill-white" />
				</div>
				<p className="text-gray-700 ml-auto">{title}</p>

				{isOpen ? (
					<DownArrowIcon className="w-5 h-5 fill-gray-500" />
				) : (
					<LeftArrowIcon className="w-3 h-3 fill-gray-300" />
				)}
			</div>

			{isOpen && (
				<>
					<div className="h-0.5 bg-gray-200 w-11/12 mx-auto mt-5" />
					<div className="text-sm text-gray-400 p-3">{content}</div>
				</>
			)}
		</div>
	);
};

export default Collapse;
