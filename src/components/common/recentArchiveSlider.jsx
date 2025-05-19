"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import fetcher from "@/src/api/fetcher";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import postsResponseMapper from "@/src/utils/postsResponseMapper";
import BoyImage from "@/src/assets/images/boy.png";
import BgImage from "@/src/assets/images/recent-arc-bg.png";
import BgEffect from "@/src/assets/images/recent-arc-bg-effect.png";
import { AngleLeft } from "@/src/assets/icons";

const RecentArchiveSlider = () => {
	const [archivePost, setArchivePost] = useState([]);

	const sliderConfig = {
		dots: true,
		infinite: false,
		speed: 500,
		dots: false,
		arrows: false,
		slidesToShow: 2.5,
		slidesToScroll: 1,
		dir: "rtl",
	};

	useEffect(() => {
		fetcher(ENDPOINTS_PATH.post)
			.then(res => res.json())
			.then(postsResponseMapper)
			.then(data => setArchivePost(data));
	}, []);

	return (
		<div id="archive-slider" className="flex w-full pb-32 mb-44 h-[30rem] relative mt-32">
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
					background: "linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255, 1) 90%)",
				}}
			/>
			{/* slider and helper text container */}

			<div className="w-4/6 relative p-14 z-10">
				<div className="flex items-center justify-between mb-20">
					<p className="text-lg">آخرین اخبار و مقالات بیت الله</p>
					<Link className="flex items-center text-gray-500" href="/archive">
						مشاهده همه
						<AngleLeft className="w-3 h-3 mr-3 fill-gray-500" />
					</Link>
				</div>

				<div dir="ltr" className="-mr-36">
					<Slider {...sliderConfig}>
						{archivePost.map((post, i) => (
							<div dir="rtl" className="bg-white rounded-xl p-2 pb-5 text-right" key={i}>
								<Image
									className="w-full rounded-lg"
									src={post.thumbnail}
									alt="post"
									width={300}
									height={600}
								/>
								<p className="mt-4">{post.title}</p>
								<p className="text-sm mb-6 text-gray-400 mt-3 overflow-hidden line-clamp-2">
									{post.shortDesc}
								</p>

								<Link
									className="flex items-center justify-end text-primary font-bold text-base"
									href={`/archive/${post.id}`}
								>
									مطالعه
									<AngleLeft className="w-3 h-3 fill-primary mr-3" />
								</Link>
							</div>
						))}
					</Slider>
				</div>
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
