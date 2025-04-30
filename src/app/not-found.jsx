import React from "react";
import BlurEffectBackground from "../components/ui/blurEffectBackground";

const NotFoundPage = () => {
	return (
		<div className="text-center">
			<BlurEffectBackground />

			<p className="text-[20rem] font-extrabold text-[#3D3C45]">
				4<span className="text-[#1D5C38]">0</span>4
			</p>
			<p className="text-xl text-[#3D3C45] mt-1">متاسفانه نتونستیم پیداش کنیم !</p>
		</div>
	);
};

export default NotFoundPage;
