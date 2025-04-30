import Shade from "@/src/assets/images/shade.png";

const BlurEffectBackground = ({ relativeToParent, baseZIndex, top = 0 }) => (
	<div
		className={`${relativeToParent ? "absolute" : "fixed"} left-0 w-full h-[60rem]  ${
			baseZIndex ? "z-0" : "-z-10"
		} select-none`}
		style={{
			background: `url(${Shade.src})`,
			top,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundSize: "cover",
		}}
		id="blurEffectBackground"
	/>
);

export default BlurEffectBackground;
