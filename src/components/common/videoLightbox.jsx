"use client";

import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";

const inline = {
	style: {
		width: "100%",
		maxWidth: "900px",
		aspectRatio: "3 / 2",
		margin: "0 auto",
	},
};

const VideoLightBox = ({ media }) => {
	console.log(media);

	return (
		<div dir="ltr">
			<Lightbox
				open
				thumbnails={{ borderColor: "white", borderRadius: 12 }}
				slides={media.map(path => ({
					src: path,
					type: "video",
					width: 1280,
					height: 720,
					poster:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLCcZOzWVdE1Ag1e6Z3ONMvG39R88umAcIQ&s",
					source: [
						{
							src: "https://idc0-cdn5.khamenei.ir/ndata/news/59611/14031216_66663_l.mp4",
							type: "video/mp4",
							// media: "min-width: 800px",
						},
					],
				}))}
				inline={inline}
				plugins={[Video]}
			/>
		</div>
	);
};

export default VideoLightBox;
