import React from "react";
// import BackgroundImage from "@/src/assets/images/bg-gradiant.png";

const GradientBackground = ({ children, gradients }) => {
	// console.log(BackgroundImage.src);
	return (
		<div
			// style={{ background: `url(${BackgroundImage.src})` }}
			className="relative"
		>
			{children}
		</div>
	);
};

export default GradientBackground;
