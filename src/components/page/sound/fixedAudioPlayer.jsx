import PortalContainer from "@/src/utils/portalContainer";
import Image from "next/image";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const FixedAudioPlayer = ({ title, type, audioSrc, img }) => {
	return (
		<PortalContainer>
			<div className="bg-[#222222] h-[100px] flex items-center fixed w-full bottom-0 left-0 transition-all duration-300 ease-in-out z-[9999]">
				{/* Audio details section */}
				<div className="flex items-center mr-10 text-sm">
					<Image
						width={100}
						height={100}
						objectFit="cover"
						src={img}
						alt="sound-targe"
						className="rounded-md border border-white w-16 h-16w-16 ml-3"
					/>
					<div>
						<p className="text-white font-bold">{title}</p>
						<p className="text-sm text-gray-400 mt-1">{type}</p>
					</div>
				</div>

				{/* Player box */}
				<div dir="ltr" className="w-2/4 mx-auto">
					<AudioPlayer
						style={{ background: "transparent" }}
						src={audioSrc}
						autoPlay
						loop={false}
						className="audio-payer-package"
						showSkipControls={false}
						showJumpControls={false}
					/>
				</div>

				{/* volume */}
				<div></div>
			</div>
		</PortalContainer>
	);
};

export default FixedAudioPlayer;
