import fetcher from "@/src/api/fetcher";
import Container from "@/src/components/ui/container";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import campaignsResponseMapper from "@/src/utils/campaignsResponseMapper";
import LeftArrowIcon from "@/src/assets/icons/angle-left.svg";

const CampaignDetails = async ({ params }) => {
	const { id: campaignId } = await params;

	const response = await fetcher(`${ENDPOINTS_PATH.campaign}/${campaignId}`);
	const data = await response.json();

	const [mappedCampaignDetails] = campaignsResponseMapper([data]);

	return (
		<div>
			<Container>
				<div className="w-full flex gap-10">
					<div className="w-7/12">
						<img
							src={mappedCampaignDetails.img}
							alt="poster"
							className="w-full rounded-2xl"
						/>
					</div>
					<div className="w-5/12">
						<div className="flex items-center rounded-2xl bg-[#F5F9FD] w-full p-3 px-6">
							<div>
								<h1 className="text-lg font-bold text-gray-700">
									{mappedCampaignDetails.title}
								</h1>
								<p className="text-gray-400 mt-1">
									{mappedCampaignDetails.maxNumberOfParticipants ||
										"بدون محدودیت در ظرفیت"}
								</p>
							</div>
							<button className="rounded-full flex items-center text-white bg-green-900 px-5 h-11 text-sm mr-auto">
								<span>{mappedCampaignDetails.actionLabel}</span>
								<LeftArrowIcon className="w-3 h-3 fill-white mr-4" />
							</button>
						</div>
						<p className="leading-10 text-justify text-gray-500 mt-8">
							{mappedCampaignDetails.desc}
						</p>
					</div>
				</div>
				<div className="flex">
					<div className="w-7/12"></div>
				</div>
			</Container>
		</div>
	);
};

export default CampaignDetails;
