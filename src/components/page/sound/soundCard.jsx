"use client";

import React from "react";
import Image from "next/image";

import SoundWaveImage from "@/src/assets/images/sound-wave.png";
import soundDurationSeparator from "@/src/utils/soundDurationSeparator";
import { Play } from "@/src/assets/icons";

const SoundCard = ({ duration, title, img, onSelect }) => {
	return (
		<div className="p-4 rounded-3xl bg-white">
			{img && (
				<Image
					src={img}
					alt="sound"
					className="rounded-lg w-full h-60 object-cover"
					width={500}
					height={500}
				/>
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
					<Play className="w-3 h-3 fill-white" />
				</div>
			</div>
		</div>
	);
};

export default SoundCard;
