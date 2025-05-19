"use client";

import BlurEffectBackground from "../components/ui/blurEffectBackground";
import RecentCampaigns from "../components/page/home/recentCampaigns";

export default function Home() {
	return (
		<div className="">
			<BlurEffectBackground />
			<RecentCampaigns />
			{/* <RecentSounds /> */}
			<Container>
				<p className="font-bold"> بیت الله در یک نگاه</p>
				<h3 className="leading-7 font-light text-lg mt-3">
					مسجد بیت‌الله، به‌عنوان یکی از نمادهای برجسته اسلامی، مکانی است که تاریخ، هنر و
					معنویت در آن به هم پیوند می‌خورند. این مسجد با معماری بی‌نظیر و فضای معنوی خود،
					همواره الهام‌بخش مسلمانان در سراسر جهان بوده است. از ویژگی‌های برجسته آن می‌توان به
					طراحی هنری، استفاده از خطوط اسلامی و نقش‌های هندسی اشاره کرد که نمایانگر شکوه و عظمت
					فرهنگ اسلامی است. مسجد بیت‌الله نه‌تنها مکانی برای عبادت، بلکه مرکزی برای آشنایی با
					تاریخ و تمدن اسلامی نیز به‌شمار می‌رود.
				</h3>
			</Container>
			<Schedule />
			<RecentArchiveSlider />
		</div>
	);
}
