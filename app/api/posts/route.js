import ENDPOINTS_URL from "@/constants/endPoints";
import fetcher from "@/utils/apiInstance";
import { postsResponseMapper } from "@/utils/responseMapper";

export async function GET() {
	const data = await fetcher(ENDPOINTS_URL.posts);

	const mappedData = postsResponseMapper(data);

	return Response.json(mappedData);
}
