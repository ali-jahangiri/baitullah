import React from "react";

const Button = ({ icon, children, ...rest }) => {
	return (
		<button
			{...rest}
			className={`flex text-white bg-primary p-3 px-5 rounded-full ${rest.className || ""}`}
		>
			{children}
			{icon && <div className="mr-3">{icon}</div>}
		</button>
	);
};

export default Button;
