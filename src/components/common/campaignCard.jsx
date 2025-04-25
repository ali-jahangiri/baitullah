import LeftArrowIcon from "@/src/assets/icons/angle-left.svg";
import Link from "next/link";

const CampaignCard = ({ id, img, title, desc }) => (
	<div className="flex flex-col shadow-lg rounded-xl bg-white px-5">
		<img src={img} className="w-full h-30 rounded-xl" />
		<p className="mt-5">{title}</p>
		<p className="mt-3 mb-2 text-gray-400">{desc}</p>
		<Link
			href={`campaign/${id}`}
			className="flex items-center justify-center bg-[#F3F7FE] text-sm rounded-lg p-3 text-primary mx-auto my-4 w-full mt-auto"
		>
			<span className="ml-3">مشاهده</span>
			<LeftArrowIcon className="w-3 h-3 fill-primary" />
		</Link>
	</div>
);

export default CampaignCard;
