"use client";

import Link from "next/link";
import Image from "next/image";

import BoyImage from "@/src/assets/images/boy.png";
import BgImage from "@/src/assets/images/recent-arc-bg.png";
import BgEffect from "@/src/assets/images/recent-arc-bg-effect.png";
import LeftArrowIcon from "@/src/assets/icons/angle-left.svg";
import Slider from "react-slick";

const RecentArchiveSlider = () => {
	const sliderConfig = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="flex w-[98%] mx-auto h-[30rem] relative mt-32">
			<div
				className="w-full h-full absolute -z-10 rounded-xl"
				style={{
					backgroundImage: `url(${BgImage.src})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			/>

			<div
				className="w-full h-[18rem] absolute top-[-30px] left-0"
				style={{
					background:
						"linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255, 1) 90%);",
				}}
			/>
			{/* slider and helper text container */}

			<div className="w-4/6 relative p-14 z-10">
				<div className="flex items-center justify-between">
					<p className="text-lg">آخرین اخبار و مقالات بیت الله</p>
					<Link className="flex items-center text-gray-500" href="/archive">
						مشاهده همه
						<LeftArrowIcon className="w-3 h-3 mr-3 fill-gray-500" />
					</Link>
				</div>

				<Slider {...sliderConfig}>
					<div>
						<h3>1</h3>
					</div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
					<div>
						<h3>5</h3>
					</div>
					<div>
						<h3>6</h3>
					</div>
				</Slider>
			</div>

			{/* boy image container */}
			<div className="w-2-6">
				<Image className="absolute bottom-0 w-[30rem] left-0" alt="boy" src={BoyImage} />
				<Image
					className="absolute bottom-0 z-10 w-[35rem] left-0"
					src={BgEffect}
					alt="effect"
				/>
			</div>
		</div>
	);
};

export default RecentArchiveSlider;
