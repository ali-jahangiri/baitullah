import { AngleLeft } from "@/src/assets/icons";
import Link from "next/link";
import React from "react";

const ExampleItemCard = ({ title, presenter, id, image }) => {
	return (
		<Link href={`/archive/${id}`}>
			<div
				style={{ backgroundImage: `url(${image})` }}
				className="rounded h-[15rem] bg-center bg-cover flex relative"
			>
				<div
					style={{
						background: "linear-gradient(1deg, black, transparent)",
					}}
					className="absolute bottom-0 left-0 w-full flex py-5 px-5 items-center justify-between text-white"
				>
					<div>
						<p>{title}</p>
					</div>
					<div className="shrink-0 flex items-center justify-center">
						<p className="text-sm ml-3">توضیحات بیشتر</p>
						<AngleLeft width={10} height={10} fill="white" />
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ExampleItemCard;
