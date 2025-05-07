import Image from "next/image";

import SoundCard from "@/src/components/page/sound/soundCard";
import Container from "@/src/components/ui/container";
import BlurEffectBackground from "@/src/components/ui/blurEffectBackground";
import GeneralQA from "@/src/components/common/generalQA";
import SoundCardList from "@/src/components/page/sound/soundCardList";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import fetcher from "@/src/api/fetcher";
import _date from "@/src/utils/date";
import soundsResponseMapper from "@/src/utils/soundsResponseMapper";

import HeroImage from "@/src/assets/images/hero-sound.png";
import RecentArchiveSlider from "@/src/components/common/recentArchiveSlider";

const Sounds = async () => {
	const response = await fetcher(ENDPOINTS_PATH.sound);
	const data = await response.json();
	const soundList = soundsResponseMapper(data);

	const firstSoundItem = soundList[0];

	return (
		<div>
			<Container className="relative bg-[#F6F9FD]" style={{ borderRadius: 10 }}>
				<BlurEffectBackground relativeToParent baseZIndex />

				<div className="relative z-10">
					{firstSoundItem && (
						<>
							<div className="w-3/6 mx-auto">
								<h1 className="text-lg font-bold pt-10">پادکست مسجد</h1>
								<div className="flex items-end mt-20">
									<Image className="w-80 ml-10" alt="image-hero" src={HeroImage} />
									<SoundCardList soundList={[firstSoundItem]} />
								</div>
							</div>

							<div className="grid grid-cols-4 gap-4 mt-10 p-10 mb-20">
								<SoundCardList soundList={soundList} />
							</div>
						</>
					)}
				</div>
			</Container>

			<Container>
				<div className="w-4/5 mx-auto mt-20">
					<GeneralQA />
				</div>
			</Container>

			<RecentArchiveSlider />
		</div>
	);
};

export default Sounds;
