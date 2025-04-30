"use client";

import React, { useState } from "react";
import Image from "next/image";

import FixedAudioPlayer from "./fixedAudioPlayer";
import SoundWaveImage from "@/src/assets/images/sound-wave.png";
import PlayIcon from "@/src/assets/icons/play.svg";
import soundDurationSeparator from "@/src/utils/soundDurationSeparator";

const SoundCard = ({ id, duration, title, img, onSelect }) => {
	const [wasPlayerOpen, setWasPlayerOpen] = useState(false);

	return (
		<div className="p-4 rounded-3xl bg-white">
			{img ? (
				<Image
					src={img}
					alt="sound"
					className="rounded-lg w-full h-60 object-cover"
					width={500}
					height={500}
				/>
			) : (
				<div className="w-full rounded-md h-60 bg-gray-500" />
			)}
			<div className="flex items-center justify-between mt-4">
				<p className=" text-sm text-primary">{title}</p>
				<span className="text-gray-400 text-sm">
					{soundDurationSeparator(Number(duration) || 0)}
				</span>
			</div>
			<div className="flex items-center mt-3">
				<img src={SoundWaveImage.src} className="rounded-lg w-[90%]" />
				<div
					className="rounded-full bg-primary w-8 h-8 flex items-center justify-center shrink-0 cursor-pointer select-none"
					onClick={() => onSelect()}
				>
					<PlayIcon className="w-3 h-3 fill-white" />
				</div>
			</div>
		</div>
	);
};

export default SoundCard;
