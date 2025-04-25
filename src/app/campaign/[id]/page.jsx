import fetcher from "@/src/api/fetcher";
import Container from "@/src/components/ui/container";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import campaignsResponseMapper from "@/src/utils/campaignsResponseMapper";
import LeftArrowIcon from "@/src/assets/icons/angle-left.svg";
import GradientBackground from "@/src/components/ui/gradientBackground";
import CampaignActionBox from "@/src/components/page/campaigns/actionBox";

const CampaignDetails = async ({ params }) => {
	const { id: campaignId } = await params;

	const response = await fetcher(`${ENDPOINTS_PATH.campaign}/${campaignId}`);
	const data = await response.json();

	const [mappedCampaignDetails] = campaignsResponseMapper([data]);

	console.log(mappedCampaignDetails);

	return (
		<div>
			<GradientBackground
				gradients={[
					"transparent radial-gradient(closest-side at 50% 50%, #FABF04 0%, #FABF0400 100%) 0% 0% no-repeat padding-box;",
					"transparent radial-gradient(closest-side at 50% 50%, #1C6FCC 0%, #1C6FCC00 100%) 0% 0% no-repeat padding-box;",
				]}
			>
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
							<p className="leading-10 text-justify text-gray-500 mt-3">
								{mappedCampaignDetails.shortDesc}
							</p>

							<CampaignActionBox price={Number(mappedCampaignDetails.amount)} />
						</div>
					</div>
					<div className="flex">
						<p className="text-[#707070] leading-10 mt-5">{mappedCampaignDetails.desc}</p>
					</div>
				</Container>
			</GradientBackground>
		</div>
	);
};

export default CampaignDetails;
