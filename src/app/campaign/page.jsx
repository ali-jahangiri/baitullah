import CampaignCard from "@/src/components/common/campaignCard";
import CampaignSearchBar from "@/src/components/page/campaigns/searchBar";
import Container from "@/src/components/ui/container";
import Pagination from "@/src/components/ui/pagination";
import React from "react";

const Campaign = () => {
	return (
		<div>
			<div
				style={{
					background:
						"transparent linear-gradient(180deg, #1C6FCC0A 0%, #1C6FCC05 51%, #1C6FCC0A 100%) 0% 0% no-repeat padding-box;",
				}}
				className="m-6 rounded-lg"
			>
				<Container>
					<div className="mx-auto my-10 pt-12">
						<CampaignSearchBar />
					</div>
					<div className="grid grid-cols-4 gap-3">
						{new Array(20).fill("").map((_, i) => (
							<CampaignCard
								totalShare={500}
								eachSharePrice={5000}
								remainShare={259}
								audience={{
									name: "علی",
									age: 15,
									city: "تهران",
									needDesc:
										"فاطمه زهرا عاشق دوچرخه‌سواری است و همیشه دوست داشته یک دوچرخه نو داشته باشد تا بتواند با دوستانش در پارک محله بازی کند.",
								}}
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
