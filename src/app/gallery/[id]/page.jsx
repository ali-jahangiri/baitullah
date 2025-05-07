import fetcher from "@/src/api/fetcher";
import BlogCard from "@/src/components/common/blogCard";
import CustomLightBox from "@/src/components/common/lightBox";
import RecentArchiveSlider from "@/src/components/common/recentArchiveSlider";
import BlurEffectBackground from "@/src/components/ui/blurEffectBackground";
import Container from "@/src/components/ui/container";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import { galleryResponseMapper } from "@/src/utils/galleryResponseMapper";

const GalleryPost = async ({ params }) => {
	const { id: galleryItemId } = await params;
	const response = await fetcher(`${ENDPOINTS_PATH.gallery}/${galleryItemId}`);
	const data = await response.json();
	const [mappedGalleryItemDetails] = galleryResponseMapper([data]);

	const fourRecentGalleryItemResponse = await fetcher(ENDPOINTS_PATH.gallery);
	const fourRecentGalleryItems = await fourRecentGalleryItemResponse.json();
	const mappedFourRecentGalleryItems = galleryResponseMapper(fourRecentGalleryItems);

	return (
		<div>
			<BlurEffectBackground />
			<Container className="flex">
				<div className="w-6/12">
					<CustomLightBox media={mappedGalleryItemDetails.media} />
				</div>
				<div className="w-6/12">
					<div className="flex items-center">
						<div></div>
						<h1 className="mr-2 font-bold">{mappedGalleryItemDetails.title}</h1>
					</div>
					<p className="mt-3 text-justify">{mappedGalleryItemDetails.shortDesc}</p>
				</div>
			</Container>

			<Container>
				<p className="mb-8 mt-32 font-semibold">تصاویر مرتبط</p>
				<div className="grid grid-cols-4 gap-3 pb-32">
					{mappedFourRecentGalleryItems.slice(0, 4).map((item, i) => (
						<BlogCard
							height={20}
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

			<RecentArchiveSlider />
		</div>
	);
};

export default GalleryPost;
