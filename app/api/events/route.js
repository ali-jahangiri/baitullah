import ENDPOINTS_URL from "@/constants/endPoints";
import fetcher from "@/utils/apiInstance";
import { eventsResponseMapper } from "@/utils/responseMapper";

export async function GET() {
	const data = await fetcher(`${ENDPOINTS_URL.events}`);

	const mappedData = eventsResponseMapper(data);

	return Response.json(mappedData);
}
