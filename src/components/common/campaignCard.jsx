import { AngleLeft } from "@/src/assets/icons";
import Image from "next/image";

import Link from "next/link";

const CampaignCard = ({ id, img, title, desc, showShortDesc }) => (
	<div dir="rtl" className="flex flex-col shadow-lg rounded-xl bg-white px-5 w-[400px]">
		<Image
			width={300}
			height={300}
			alt="campaign-poster"
			src={img}
			className="w-full mt-5 h-30 rounded-xl max-w-[350px]"
		/>
		<p className="mt-5">{title}</p>

		<p
			className={`mt-3 mb-2 text-gray-400 text-justify ${
				showShortDesc ? "overflow-hidden line-clamp-2" : ""
			}`}
		>
			{desc}
		</p>
		<Link
			href={`campaign/${id}`}
			className="flex items-center justify-center bg-[#F3F7FE] text-sm rounded-lg p-3 text-primary mx-auto my-4 w-full mt-auto"
		>
			<span className="ml-3">مشاهده</span>
			<AngleLeft className="w-3 h-3 fill-primary" />
		</Link>
	</div>
);

export default CampaignCard;
