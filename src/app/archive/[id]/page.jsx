import parse from "html-react-parser";

import fetcher from "@/src/api/fetcher";
import Container from "@/src/components/ui/container";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import postsResponseMapper from "@/src/utils/postsResponseMapper";

const Page = async ({ params }) => {
	const { id: postId } = await params;
	const response = await fetcher(`${ENDPOINTS_PATH.post}/${postId}`);
	const data = await response.json();
	const [mappedPostDetails] = postsResponseMapper([data]);

	return (
		<div>
			<Container className="flex">
				<div id="archive-content-wrapper" className="w-8/12 leading-10">
					{parse(mappedPostDetails.content)}
				</div>
				<div className="w-4/12">{}</div>
			</Container>
		</div>
	);
};

export default Page;
