import React from "react";

const SoundCard = ({ id, title, img, onPlay }) => {
	return (
		<div className="p-4 rounded-3xl bg-white">
			{/* <img src={img} className="rounded-lg w-full" /> */}
			<div className="w-full h-60 bg-gray-500" />
			<p className="mt-4 text-sm text-primary">{title}</p>
		</div>
	);
};

export default SoundCard;
