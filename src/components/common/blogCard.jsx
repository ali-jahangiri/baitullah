import React from "react";

import Link from "next/link";
import { AngleCircleLeft } from "@/src/assets/icons";
import SvgPlay from "@/src/assets/icons/Play";

const BlogCard = ({ img, date, title, id, pathSource, isVideo, height = 30 }) => (
	<Link
		href={`/${pathSource}/${id}`}
		className="flex relative bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden"
		style={{ backgroundImage: `url(${img})`, height: `${height}rem` }}
	>
		{isVideo && (
			<div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-[#00000054]">
				<div className="flex items-center justify-center w-28 h-28 rounded-full bg-[#ffffff59]">
					<SvgPlay fill="white" />
				</div>
			</div>
		)}
		<div className="flex items-center absolute bottom-5 px-6">
			<div className="rounded-lg text-sm text-white bg-white/5 ml-1 text-center p-1">{date}</div>
			<p className="text-sm text-white mx-2">{title}</p>
			<AngleCircleLeft className="w-6 h-6 fill-gray-300" />
		</div>
	</Link>
);

export default BlogCard;
