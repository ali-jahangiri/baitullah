import CampaignCard from "@/src/components/common/campaignCard";
import Container from "@/src/components/ui/container";
import Pagination from "@/src/components/ui/pagination";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import fetcher from "@/src/api/fetcher";
import campaignsResponseMapper from "@/src/utils/campaignsResponseMapper";

const Campaign = async () => {
	const response = await fetcher(ENDPOINTS_PATH.campaign);
	const data = await response.json();
	const mappedSoundsList = campaignsResponseMapper(data);

	return (
		<div>
			<div className="">
				<Container className="bg-[#F9FBFD] rounded-lg px-10 py-10">
					<div className="grid grid-cols-4 gap-3">
						{mappedSoundsList.map((campaign, i) => (
							<CampaignCard
								title={campaign.title}
								img={campaign.img}
								id={campaign.id}
								desc={campaign.shortDesc}
								key={i}
							/>
						))}
					</div>
				</Container>

				<div className="w-full flex items-center justify-center mt-12 pb-10">
					<Pagination total={15} current={3} />
				</div>
			</div>
		</div>
	);
};

export default Campaign;
