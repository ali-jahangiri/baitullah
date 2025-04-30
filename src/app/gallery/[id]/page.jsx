import fetcher from "@/src/api/fetcher";
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

	console.log(mappedGalleryItemDetails);

	return (
		<div>
			<BlurEffectBackground />
			<Container className="flex">
				<div className="w-7/12">
					<div className="flex items-center">
						<div></div>
						<h1 className="mr-2 font-bold">{mappedGalleryItemDetails.title}</h1>
					</div>
					<p className="mt-3 text-justify">{mappedGalleryItemDetails.shortDesc}</p>
				</div>
				<div className="w-5/12"></div>
			</Container>

			<RecentArchiveSlider />
		</div>
	);
};

export default GalleryPost;
