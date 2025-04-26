import React from "react";
import Image from "next/image";

import PlayIcon from "@/src/assets/icons/play.svg";
import SoundWaveImage from "@/src/assets/images/sound-wave.png";

const SoundCard = ({ id, title, img, onPlay }) => {
	return (
		<div className="p-4 rounded-3xl bg-white">
			<div className="w-full rounded-md h-60 bg-gray-500" />
			<p className="mt-4 text-sm text-primary">{title}</p>
			<div className="flex items-center mt-3">
				<img src={SoundWaveImage.src} className="rounded-lg w-[90%]" />
				<div
					className="rounded-full bg-primary w-8 h-8 flex items-center justify-center shrink-0 cursor-pointer select-none"
					onClick={onPlay}
				>
					<PlayIcon className="w-3 h-3 fill-white" />
				</div>
			</div>
		</div>
	);
};

export default SoundCard;
