"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import fetcher from "@/src/api/fetcher";
import SvgAngleLeft from "@/src/assets/icons/AngleLeft";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";

import HeroImage from "@/src/assets/images/hero-sound.png";
import SoundCard from "../../sound/soundCard";
import FixedAudioPlayer from "../../sound/fixedAudioPlayer";
import soundsResponseMapper from "@/src/utils/soundsResponseMapper";
import { SOUND_TYPE_ENUMS } from "@/src/constants/general";

const RecentSounds = () => {
	const [sounds, setSounds] = useState([]);
	const [currentlyOpenSoundItem, setCurrentlyOpenSoundItem] = useState(null);

	useEffect(() => {
		fetcher(ENDPOINTS_PATH.sound)
			.then(res => res.json())
			.then(soundsResponseMapper)
			.then(data => setSounds(data.slice(0, 4)));
	}, []);

	return (
		<div className="w-6/12 mx-auto mt-[13rem] pb-[10rem]">
			<div className="w-full flex justify-between">
				<h2 className="text-xl">پادکست مسجد</h2>
				<Link className="flex items-center text-[#ABB5C6]" href="/sounds">
					مشاهده همه
					<SvgAngleLeft width={10} height={10} className="mr-5" fill="#ABB5C6" />
				</Link>
			</div>

			<div className="flex items-center gap-5 justify-center mt-10">
				<Image width={400} height={1000} src={HeroImage} alt="object" className="" />
				<div className="flex flex-col gap-y-5 w-[30rem]">
					{sounds.map((sound, i) => (
						<SoundCard
							source={sound.source}
							id={sound.id}
							title={sound.title}
							duration={sound.duration}
							onSelect={() => setCurrentlyOpenSoundItem(sound)}
							key={i}
						/>
					))}
				</div>
			</div>

			{currentlyOpenSoundItem && (
				<FixedAudioPlayer
					title={currentlyOpenSoundItem.title}
					type={SOUND_TYPE_ENUMS[currentlyOpenSoundItem.type]}
					audioSrc={currentlyOpenSoundItem.source}
					img={currentlyOpenSoundItem.img}
				/>
			)}
		</div>
	);
};

export default RecentSounds;
