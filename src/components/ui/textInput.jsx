import React from "react";

const TextInput = ({
	value,
	type,
	placeholder,
	containerClassName,
	className = "",
	renderBefore,
	renderAfter,
	onChange,
}) => {
	return (
		<div className={`flex bg-white rounded-xl p-2 ${containerClassName}`}>
			{renderBefore?.()}
			<input
				type={type}
				value={value}
				placeholder={placeholder}
				className={`w-full h-14 bg-white outline-none ${className} pr-3`}
				onChange={e => onChange(e.target.value)}
			/>
			{renderAfter?.()}
		</div>
	);
};

export default TextInput;
