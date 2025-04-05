import fetcher from "@/src/api/fetcher";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";

export async function GET() {
	const response = await fetcher(ENDPOINTS_PATH.post);
	const data = await response.json();

	return Response.json({ data });
}
