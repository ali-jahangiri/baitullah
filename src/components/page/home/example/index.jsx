"use client";

import React, { useEffect, useState } from "react";
import Categories from "./categories";
import fetcher from "@/src/api/fetcher";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import postsResponseMapper from "@/src/utils/postsResponseMapper";
import ExampleItemCard from "./exampleItemCard";

const Example = () => {
	const [activeItemId, setActiveItemId] = useState("1");
	const [textList, setTextList] = useState([]);

	useEffect(() => {
		fetcher(ENDPOINTS_PATH.post)
			.then(res => res.json())
			.then(postsResponseMapper)
			.then(setTextList);
	}, [activeItemId]);

	return (
		<div className="w-8/12 mx-auto mt-[15rem]">
			<Categories activeItemId={activeItemId} setActiveItemId={setActiveItemId} />

			<div className="grid gap-5 grid-cols-3">
				{textList.slice(0, 3).map((text, i) => (
					<ExampleItemCard title={text.title} id={text.id} image={text.thumbnail} key={i} />
				))}
			</div>
		</div>
	);
};

export default Example;
