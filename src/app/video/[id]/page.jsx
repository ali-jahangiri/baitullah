import fetcher from "@/src/api/fetcher";
import BlogCard from "@/src/components/common/blogCard";
import CustomLightBox from "@/src/components/common/lightBox";
import RecentArchiveSlider from "@/src/components/common/recentArchiveSlider";
import BlurEffectBackground from "@/src/components/ui/blurEffectBackground";
import Container from "@/src/components/ui/container";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import _date from "@/src/utils/date";
import { videoResponseMapper } from "@/src/utils/videoResponseMapper";

const VideoPost = async ({ params }) => {
	const { id: videoItemId } = await params;
	const response = await fetcher(`${ENDPOINTS_PATH.video}/${videoItemId}`);
	const data = await response.json();
	const [mappedVideoItemDetails] = videoResponseMapper([data]);

	console.log(mappedVideoItemDetails);

	const fourRecentVideoItemResponse = await fetcher(ENDPOINTS_PATH.video);
	const fourRecentVideoItems = await fourRecentVideoItemResponse.json();
	const mappedFourRecentVideoItems = videoResponseMapper(fourRecentVideoItems);

	return (
		<div>
			<BlurEffectBackground />
			<Container className="flex">
				<div className="w-6/12">
					<CustomLightBox media={mappedVideoItemDetails.media} />
				</div>
				<div className="w-6/12 px-5">
					<div className="flex items-center">
						<div className="flex items-center flex-col justify-center rounded-xl ml-1 bg-[#D8CBB0] text-center w-[50px] text-sm h-[50px] text-[#815600] font-bold">
							<span>{_date(mappedVideoItemDetails.createAt).format("D")}</span>
							<span>{_date(mappedVideoItemDetails.createAt).format("MMM")}</span>
						</div>
						<h1 className="mr-2 font-bold">{mappedVideoItemDetails.title}</h1>
					</div>
					<p className="mt-3 text-justify">{mappedVideoItemDetails.shortDesc}</p>
				</div>
			</Container>

			<Container>
				<p className="mb-8 mt-32 font-semibold">ویدیو مرتبط</p>
				<div className="grid grid-cols-4 gap-3 pb-32">
					{mappedFourRecentVideoItems.slice(0, 4).map((item, i) => (
						<BlogCard
							height={20}
							title={item.title}
							pathSource="gallery"
							date="8 خرداد"
							img={item.poster}
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

export default VideoPost;
