import React from "react";

import Link from "next/link";
import { AngleCircleLeft } from "@/src/assets/icons";

const BlogCard = ({ img, date, title, id, pathSource, height = 30 }) => (
	<Link
		href={`/${pathSource}/${id}`}
		className="flex relative bg-center bg-no-repeat bg-cover rounded-3xl"
		style={{ backgroundImage: `url(${img})`, height: `${height}rem` }}
	>
		<div className="flex items-center absolute bottom-5 px-6">
			<div className="rounded-lg text-sm text-white bg-white/5 ml-1 text-center p-1">{date}</div>
			<p className="text-sm text-white mx-2">{title}</p>
			<AngleCircleLeft className="w-6 h-6 fill-gray-300" />
		</div>
	</Link>
);

export default BlogCard;
