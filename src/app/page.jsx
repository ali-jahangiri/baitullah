// import Slider from "react-slick";
// import RecentSounds from "../components/page/home/recentSounds";
import BlurEffectBackground from "../components/ui/blurEffectBackground";
import RecentCampaigns from "../components/page/home/recentCampaigns";

export default function Home() {
	return (
		<div className="">
			<BlurEffectBackground />
			<RecentCampaigns />
			{/* <RecentSounds /> */}
		</div>
	);
}
