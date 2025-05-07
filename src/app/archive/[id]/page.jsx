import parse from "html-react-parser";

import fetcher from "@/src/api/fetcher";
import Container from "@/src/components/ui/container";
import postsResponseMapper from "@/src/utils/postsResponseMapper";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import BlurEffectBackground from "@/src/components/ui/blurEffectBackground";

const Page = async ({ params }) => {
	const { id: postId } = await params;
	const response = await fetcher(`${ENDPOINTS_PATH.post}/${postId}`);
	const data = await response.json();
	const [mappedPostDetails] = postsResponseMapper([data]);

	return (
		<div>
			<BlurEffectBackground />
			<Container>
				<div
					className="w-full min-h-[600px] max-h-[60vh] rounded-3xl relative"
					style={{
						background: `url(${mappedPostDetails.widePosterImage})`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div
						className={`
								absolute top-0 right-0 p-3 py-5 bg-white 
								before:absolute 
								before:top-0 
								rounded-bl-xl 
								before:-left-20 
								before:w-20 
								before:h-full 
								before:bg-transparent 
								before:rounded-tr-3xl 
								before:shadow-[1px_-20px_0px_0px_#ffffff]
								after:w-20
								after:h-full
								after:top-full
								after:bg-white
							`}
					>
						<h1 className="text-3xl text-gray-600 font-bold max-w-[65rem] leading-relaxed">
							{mappedPostDetails.title}
						</h1>
					</div>
				</div>
				<div className="flex mt-10">
					<div id="archive-content-wrapper" className="w-full leading-10 text-justify">
						{parse(mappedPostDetails.content)}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Page;
