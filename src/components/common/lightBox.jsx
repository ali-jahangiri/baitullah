"use client";

import React, { useState } from "react";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";

import Lightbox from "yet-another-react-lightbox";

const inline = {
	style: {
		width: "100%",
		maxWidth: "900px",
		aspectRatio: "3 / 2",
		margin: "0 auto",
	},
};

const CustomLightBox = ({ media, poster }) => {
	return (
		<div dir="ltr">
			<Lightbox
				thumbnails={{ borderColor: "white", borderRadius: 12 }}
				slides={media.map(path => ({
					src: path,
					...(path.endsWith(".mp4") && {
						type: "video",
						width: 1280,
						height: 720,
						poster,
						sources: [
							{
								src: path,
								type: "video/mp4",
							},
						],
					}),
				}))}
				inline={inline}
				plugins={[Inline, Fullscreen, Slideshow, Thumbnails, Video]}
			/>
		</div>
	);
};

export default CustomLightBox;
