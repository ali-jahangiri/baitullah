import React from "react";

const Textarea = ({ value, placeholder, onChange, ...props }) => {
	return (
		<div className={`flex ${props.containerClassName}`}>
			<textarea
				rows={10}
				className="bg-white outline-none p-2 rounded-lg resize-none w-full pr-5"
				value={value}
				placeholder={placeholder}
				onChange={e => onChange(e.target.value)}
			/>
		</div>
	);
};

export default Textarea;
