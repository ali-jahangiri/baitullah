import fetcher from "@/src/api/fetcher";
import Container from "@/src/components/ui/container";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import campaignsResponseMapper from "@/src/utils/campaignsResponseMapper";
import GradientBackground from "@/src/components/ui/gradientBackground";
import CampaignActionBox from "@/src/components/page/campaigns/actionBox";
import BlurEffectBackground from "@/src/components/ui/blurEffectBackground";
import MapImage from "@/src/assets/images/map.png";
import LeftArrowIcon from "@/src/assets/icons/angle-left.svg";
import FlagIcon from "@/src/assets/icons/flag.svg";
import Image from "next/image";

const CampaignDetails = async ({ params }) => {
	const { id: campaignId } = await params;

	const response = await fetcher(`${ENDPOINTS_PATH.campaign}/${campaignId}`);
	const data = await response.json();

	const [mappedCampaignDetails] = campaignsResponseMapper([data]);

	return (
		<div>
			<BlurEffectBackground />
			<Container>
				<div className="w-full flex gap-10">
					<div className="w-7/12">
						<Image
							src={mappedCampaignDetails.img}
							alt="poster-cover"
							width={800}
							height={800}
							className="w-full rounded-2xl"
						/>
					</div>
					<div className="w-5/12">
						<div className="flex items-center rounded-2xl w-full p-3 px-6">
							<div>
								<h1 className="text-lg font-bold text-gray-700">
									{mappedCampaignDetails.title}
								</h1>
								<p className="text-[#9A9A9A] mt-1">
									{mappedCampaignDetails.maxNumberOfParticipants
										? `ظرفیت ‍${mappedCampaignDetails.maxNumberOfParticipants} نفر`
										: "بدون محدودیت در ظرفیت"}
								</p>
							</div>
						</div>
						<p className="leading-10 text-gray-500 text-justify mt-3">
							{mappedCampaignDetails.shortDesc}
						</p>

						<CampaignActionBox
							actionLabel={mappedCampaignDetails.actionLabel}
							startDate={mappedCampaignDetails.startDate}
							endDate={mappedCampaignDetails.endDate}
							price={Number(mappedCampaignDetails.amount)}
						/>
					</div>
				</div>
				<div className="flex">
					<p className="text-[#707070] leading-10 mt-5 text-justify">
						{mappedCampaignDetails.desc}
					</p>
				</div>

				<div className="flex flex-col">
					<div className="mt-20 flex items-center justify-center">
						<div>
							<FlagIcon className="w-4 h-4 fill-primary ml-2" />
						</div>
						<p>موقعیت روی نقشه</p>
					</div>

					<a
						target="_blank"
						href="https://neshan.org/maps/places/_bvPFn5xp1Nq#c35.707-51.499-15z-0p"
						className="flex items-center justify-center"
					>
						<Image src={MapImage} alt="map" className="w-[45rem] mt-10 rounded-xl" />
					</a>
				</div>
			</Container>
		</div>
	);
};

export default CampaignDetails;
