import React from "react";

import fetcher from "@/src/api/fetcher";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import { galleryResponseMapper } from "@/src/utils/galleryResponseMapper";
import Container from "@/src/components/ui/container";
import BlogCard from "@/src/components/common/blogCard";
import BlurEffectBackground from "@/src/components/ui/blurEffectBackground";

const Gallery = async () => {
	const response = await fetcher(ENDPOINTS_PATH.gallery);
	const data = await response.json();
	const mappedGalleryData = galleryResponseMapper(data);

	return (
		<div>
			<BlurEffectBackground />
			<Container>
				<div className="grid grid-cols-4 gap-3 pt-10">
					{mappedGalleryData.map((item, i) => (
						<BlogCard
							title={item.title}
							pathSource="gallery"
							date="8 خرداد"
							img={item.thumbnail}
							id={item.id}
							key={i}
						/>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Gallery;
