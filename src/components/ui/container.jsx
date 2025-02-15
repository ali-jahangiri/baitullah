import React from "react";

const Container = ({ children, ...props }) => {
	return (
		<div {...props} className={`container mx-auto ${props.className || ""}`}>
			{children}
		</div>
	);
};

export default Container;
