"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import SoundCard from "@/src/components/page/sound/soundCard";
import Container from "@/src/components/ui/container";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import fetcher from "@/src/api/fetcher";
import _date from "@/src/utils/date";
import soundsResponseMapper from "@/src/utils/soundsResponseMapper";
import HeroImage from "@/src/assets/images/hero-sound.png";
import FixedAudioPlayer from "@/src/components/page/sound/fixedAudioPlayer";

const Sounds = () => {
	const [currentSelectedAudio, setCurrentSelectedAudio] = useState(null);
	const [soundList, setSoundList] = useState([]);

	useEffect(() => {
		fetcher(ENDPOINTS_PATH.sound)
			.then(res => res.json())
			.then(soundsResponseMapper)
			.then(data => setSoundList(data));
	}, []);

	const firstSoundItem = soundList ? soundList[0] : null;

	console.log(currentSelectedAudio);

	return (
		<div>
			<Container
				style={{
					background:
						"transparent linear-gradient(180deg, #1C6FCC0A 0%, #1C6FCC05 51%, #1C6FCC0A 100%) 0% 0% no-repeat padding-box;",
					borderRadius: 10,
				}}
			>
				{firstSoundItem && (
					<>
						<div className="w-3/6 mx-auto">
							<h1 className="text-lg font-bold pt-10">پادکست مسجد</h1>
							<div className="flex items-end mt-20">
								<Image className="w-80 ml-10" alt="image-hero" src={HeroImage} />
								<SoundCard
									id={firstSoundItem.id}
									img={""}
									title={firstSoundItem.title}
									onPlay={() => setCurrentSelectedAudio(firstSoundItem)}
								/>
							</div>
						</div>
						<div className="grid grid-cols-4 gap-4 mt-10 p-5 mb-20">
							{soundList.map((sound, i) => (
								<SoundCard
									id={sound.id}
									img={""}
									title={sound.title}
									onPlay={() => setCurrentSelectedAudio(sound)}
									key={i}
								/>
							))}
						</div>

						{currentSelectedAudio && (
							<FixedAudioPlayer
								title={currentSelectedAudio.title}
								audioSrc={currentSelectedAudio.source}
								img={currentSelectedAudio.img}
							/>
						)}
					</>
				)}
			</Container>
		</div>
	);
};

export default Sounds;
