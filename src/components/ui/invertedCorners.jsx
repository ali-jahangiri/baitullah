import React from "react";

const InvertedCorners = ({ children }) => {
	return (
		<div className="relative">
			<div />
			{children}
			<div />
		</div>
	);
};

export default InvertedCorners;
