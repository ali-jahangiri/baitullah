"use client";

import React, { useState } from "react";
import { GENERAL_QA_LIST } from "@/src/constants/general";

import LeftIcon from "@/src/assets/icons/angle-left.svg";
import Collapse from "../ui/collapse";

const GeneralQA = ({ searchValue }) => {
	const [currentActiveCategory, setCurrentActiveCategory] = useState(
		GENERAL_QA_LIST[0].categoryId
	);

	function filterBaseOnCurrentSearchValue(qa) {
		if (!searchValue) return true;
		return (
			qa.question.toLowerCase().includes(searchValue.toLowerCase()) ||
			qa.answer.toLowerCase().includes(searchValue.toLowerCase())
		);
	}

	const qaList = GENERAL_QA_LIST.find(qa => qa.categoryId === currentActiveCategory).items.filter(
		filterBaseOnCurrentSearchValue
	);

	return (
		<div className="flex gap-8">
			<div className="w-1/3">
				{GENERAL_QA_LIST.map((category, i) => (
					<div
						className="flex items-center justify-between w-full mb-8 cursor-pointer"
						key={i}
						onClick={() => setCurrentActiveCategory(category.categoryId)}
					>
						<p
							className={
								currentActiveCategory === category.categoryId
									? "text-gray-800"
									: "text-gray-400"
							}
						>
							{category.categoryTitle}
						</p>

						<LeftIcon className="w-4 h-4" />
					</div>
				))}
			</div>

			{!!qaList.length && (
				<div className="w-2/3 bg-white rounded-lg p-3">
					{qaList.map((qa, i) => (
						<Collapse title={qa.question} content={qa.answer} key={i} />
					))}
				</div>
			)}
		</div>
	);
};

export default GeneralQA;
