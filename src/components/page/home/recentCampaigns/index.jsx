import fetcher from "@/src/api/fetcher";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import campaignsResponseMapper from "@/src/utils/campaignsResponseMapper";

import Image from "next/image";
import BoyImage from "@/src/assets/images/little-boy.png";
import BgImage from "@/src/assets/images/recent-campaign-bg.jpg";
import TitleImage from "@/src/assets/images/recent-campaign-title.svg";
import Link from "next/link";
import CustomSlider from "./slider";

const RecentCampaigns = async () => {
	const response = await fetcher(ENDPOINTS_PATH.campaign);
	const data = await response.json();
	const mappedCampaignsList = [
		...campaignsResponseMapper(data),
		...campaignsResponseMapper(data),
		...campaignsResponseMapper(data),
	];

	return (
		<div
			style={{
				backgroundImage: `url(${BgImage.src})`,
				backgroundPosition: "center",
				backgroundRepeat: "repeat",
			}}
			className="w-[95%] h-[500px] mx-auto flex items-center rounded-2xl mb-32"
		>
			<div className="relative ml-32">
				<Image width={700} height={700} src={BoyImage} className="relative top-20" />
				<div className="absolute top-12 -left-16 flex flex-col">
					<Image width={200} height={200} src={TitleImage} alt="title" className="mb-4" />
					<Link href="/campaign" className="text-white mr-auto">
						مشاهده همه
					</Link>
				</div>
			</div>

			<div className="w-full flex-shrink-0 flex-grow-0 h-full mt-20 max-w-[900px]">
				<CustomSlider data={mappedCampaignsList} />
			</div>
		</div>
	);
};

export default RecentCampaigns;
