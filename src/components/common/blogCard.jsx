import React from "react";

import LeftCircleIcon from "@/src/assets/icons/angle-circle-left.svg";
import Link from "next/link";

const BlogCard = ({ img, date, title, id, pathSource }) => (
	<Link
		href={`/${pathSource}/${id}`}
		className="flex h-[30rem] relative bg-center bg-no-repeat bg-cover rounded-3xl"
		style={{ backgroundImage: `url(${img})` }}
	>
		<div className="flex items-center absolute bottom-5 px-6">
			<div className="rounded-lg text-sm text-white bg-white/5 ml-1 text-center p-1">{date}</div>
			<p className="text-sm text-white mx-2">{title}</p>
			<LeftCircleIcon className="w-6 h-6 fill-gray-300" />
		</div>
	</Link>
);

export default BlogCard;
