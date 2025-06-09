import BlurEffectBackground from "../components/ui/blurEffectBackground";
import RecentCampaigns from "../components/page/home/recentCampaigns";
import Container from "../components/ui/container";
import Schedule from "../components/page/home/schedule";
import RecentArchiveSlider from "../components/common/recentArchiveSlider";
import RecentSounds from "../components/page/home/recentSounds";
import Spark from "../assets/icons/Spark";
import Example from "../components/page/home/example";
import HeroPoster from "../components/page/home/heroPoster";

export default function Home() {
	return (
		<div className="">
			<BlurEffectBackground />
			<HeroPoster />
			<Container>
				<div className="flex items-center mt-32">
					<Spark size={30} color="#BBA06A" />
					<p className="font-bold mr-2"> بیت الله در یک نگاه</p>
				</div>
				<h3 className="leading-10 font-light text-lg  mt-4">
					مسجد بیت‌الله، به‌عنوان یکی از نمادهای برجسته اسلامی، مکانی است که تاریخ، هنر و
					معنویت در آن به هم پیوند می‌خورند. این مسجد با معماری بی‌نظیر و فضای معنوی خود،
					همواره الهام‌بخش مسلمانان در سراسر جهان بوده است. از ویژگی‌های برجسته آن می‌توان به
					طراحی هنری، استفاده از خطوط اسلامی و نقش‌های هندسی اشاره کرد که نمایانگر شکوه و عظمت
					فرهنگ اسلامی است. مسجد بیت‌الله نه‌تنها مکانی برای عبادت، بلکه مرکزی برای آشنایی با
					تاریخ و تمدن اسلامی نیز به‌شمار می‌رود.
				</h3>
			</Container>
			<RecentCampaigns />
			<Example />
			<Schedule />
			<RecentSounds />
			<RecentArchiveSlider />
		</div>
	);
}
