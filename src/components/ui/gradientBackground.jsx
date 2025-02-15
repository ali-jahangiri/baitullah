import React from "react";

const GradientBackground = ({ children, gradients }) => {
	return (
		<div className="relative h-full">
			<div
				style={{ background: gradients[0], opacity: 0.2, zIndex: -1, filter: "blur(50px)" }}
				className="absolute h-full w-1/2 top-0 left-0 select-none pointer-events-none"
			/>
			<div className="z-10 ">{children}</div>
			<div
				style={{ background: gradients[1], opacity: 0.2, zIndex: -1, filter: "blur(50px)" }}
				className="absolute h-full w-1/2 top-0 left-1/2 select-none pointer-events-none "
			/>
		</div>
	);
};

export default GradientBackground;
