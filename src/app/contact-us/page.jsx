import WaysOfContacts from "@/src/components/common/waysOfContacts";

import GirlImage from "@/src/assets/images/girl.png";
import Image from "next/image";
import BlurEffectBackground from "@/src/components/ui/blurEffectBackground";
import MapImage from "@/src/assets/images/map.png";

const ContactUs = () => {
	return (
		<div className="flex items-center justify-center w-[95%] gap-10 mx-auto bg-[#1C6FCC0A] rounded-xl pt-10">
			<BlurEffectBackground />
			<a
				target="_blank"
				href="https://neshan.org/maps/places/_bvPFn5xp1Nq#c35.707-51.499-15z-0p"
				className="flex items-center justify-center w-[35rem]"
			>
				<Image src={MapImage} alt="map" className="rounded-xl" />
			</a>

			<div className="w-[30rem]">
				<WaysOfContacts />
			</div>
			<div>
				<Image alt="girl-pic" src={GirlImage} width={500} height={800} className="w-[30rem]" />
			</div>
		</div>
	);
};

export default ContactUs;
