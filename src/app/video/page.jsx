import React from "react";

import fetcher from "@/src/api/fetcher";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import Container from "@/src/components/ui/container";
import BlogCard from "@/src/components/common/blogCard";
import BlurEffectBackground from "@/src/components/ui/blurEffectBackground";
import { videoResponseMapper } from "@/src/utils/videoResponseMapper";

const Videos = async () => {
	const response = await fetcher(ENDPOINTS_PATH.video);
	const data = await response.json();
	const mappedGalleryData = videoResponseMapper(data);

	return (
		<div>
			<BlurEffectBackground />
			<Container>
				<div className="grid grid-cols-4 gap-3 pt-10">
					{mappedGalleryData.map((item, i) => (
						<BlogCard
							title={item.title}
							pathSource="video"
							date="8 خرداد"
							isVideo
							img={item.poster}
							id={item.id}
							key={i}
						/>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Videos;
