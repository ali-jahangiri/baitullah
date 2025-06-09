import fetcher from "@/src/api/fetcher";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import PosterSlider from "./posterSlider";

const HeroPoster = async () => {
	const response = await fetcher(ENDPOINTS_PATH.banner);
	const data = await response.json();

	return (
		<div className="w-full">
			<PosterSlider data={data} />
		</div>
	);
};

export default HeroPoster;
