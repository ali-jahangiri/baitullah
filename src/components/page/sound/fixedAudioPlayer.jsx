import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const FixedAudioPlayer = ({ title, audioSrc, img }) => {
	return (
		<div className="bg-[#222222] h-[100px] flex items-center fixed w-full bottom-0 left-0">
			{/* Audio details section */}
			<div></div>

			{/* Player box */}
			<div dir="ltr" className="w-2/3 mx-auto">
				<AudioPlayer
					style={{ background: "transparent" }}
					src={audioSrc}
					autoPlay={false}
					loop={false}
					className="audio-payer-package"
					showSkipControls={false}
					showJumpControls={false}
					onPlay={console.log}
				/>
			</div>

			{/* volume */}
			<div></div>
		</div>
	);
};

export default FixedAudioPlayer;
