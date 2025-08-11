"use client";

import React, { useEffect, useState } from "react";
import Categories from "./categories";
import fetcher from "@/src/api/fetcher";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import postsResponseMapper from "@/src/utils/postsResponseMapper";
import ExampleItemCard from "./exampleItemCard";
import LoadingSpinner from "@/src/components/ui/loadingSpinner";

const CATEGORIES = {
	1: "مسجد",
	7: "بسیج خواهران",
	6: "بسیج برادران",
	4: "خیریه",
};

const Example = () => {
	const [currentCategory, setCurrentCategory] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [textList, setTextList] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetcher(`${ENDPOINTS_PATH.post}?categories=${currentCategory}`)
			.then(res => res.json())
			.then(postsResponseMapper)
			.then(setTextList)
			.finally(() => setIsLoading(false));
	}, [currentCategory]);

	return (
		<div className="w-8/12 mx-auto mt-[15rem]">
			<Categories activeItemId={currentCategory} setActiveItemId={setCurrentCategory} />

			{isLoading ? (
				<div className="flex items-center justify-center">
					<LoadingSpinner size={60} className="text-gray-900" />
				</div>
			) : (
				<div className="grid gap-5 grid-cols-3">
					{textList.slice(0, 3).map((text, i) => (
						<ExampleItemCard title={text.title} id={text.id} image={text.thumbnail} key={i} />
					))}
				</div>
			)}
		</div>
	);
};

export default Example;
