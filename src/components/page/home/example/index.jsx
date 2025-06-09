"use client";

import React, { useEffect, useState } from "react";
import Categories from "./categories";
import fetcher from "@/src/api/fetcher";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import postsResponseMapper from "@/src/utils/postsResponseMapper";

const Example = () => {
	const [activeItemId, setActiveItemId] = useState(null);
	const [textList, setTextList] = useState([]);

	useEffect(() => {
		fetcher(ENDPOINTS_PATH.post)
			.then(res => res.json())
			.then(postsResponseMapper);
	}, [activeItemId]);

	return (
		<div className="w-8/12 mx-auto mt-[20rem]">
			<Categories activeItemId={activeItemId} setActiveItemId={setActiveItemId} />
		</div>
	);
};

export default Example;
