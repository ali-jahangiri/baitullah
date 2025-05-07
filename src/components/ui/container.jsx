import React from "react";

const Container = ({ children, ...props }) => {
	return (
		<div {...props} className={`w-[90%] mx-auto ${props.className || ""}`}>
			{children}
		</div>
	);
};

export default Container;
