"use client";

import React, { useState } from "react";
import SoundCard from "./soundCard";
import FixedAudioPlayer from "./fixedAudioPlayer";
import { SOUND_TYPE_ENUMS } from "@/src/constants/general";

const SoundCardList = ({ soundList }) => {
	const [currentlyOpenSoundItem, setCurrentlyOpenSoundItem] = useState(null);

	return (
		<>
			{soundList.map((sound, i) => (
				<SoundCard
					source={sound.source}
					id={sound.id}
					img={sound.img}
					title={sound.title}
					duration={sound.duration}
					onSelect={() => setCurrentlyOpenSoundItem(sound)}
					key={i}
				/>
			))}

			{currentlyOpenSoundItem && (
				<FixedAudioPlayer
					title={currentlyOpenSoundItem.title}
					type={SOUND_TYPE_ENUMS[currentlyOpenSoundItem.type]}
					audioSrc={currentlyOpenSoundItem.source}
					img={currentlyOpenSoundItem.img}
					onClose={() => setCurrentlyOpenSoundItem(null)}
				/>
			)}
		</>
	);
};

export default SoundCardList;
