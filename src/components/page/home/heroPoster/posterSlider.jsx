"use client";

import React from "react";
import Slider from "react-slick";

const PosterSlider = ({ data }) => {
	const sliderConfig = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
	};

	return (
		<Slider {...sliderConfig}>
			{data.map((slide, i) => (
				<div id="test" className="w-full h-[50rem]" key={i}>
					<div
						className="w-full h-full bg-cover relative"
						style={{
							backgroundImage: `url(${slide.acf_fields.background_image})`,
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="absolute h-full flex flex-col justify-center text-right pl-20">
							<div className="flex items-center justify-between">
								<a
									className="text-white rounded-3xl p-2 px-5 text-center text-lg bg-[#00000082]"
									href={slide.acf_fields.link}
								>
									مشاهده
								</a>
								<h2 className="text-3xl font-bold">{slide.acf_fields.title}</h2>
							</div>
							<p className="text-xl mt-2">{slide.acf_fields.short_description}</p>
						</div>
					</div>
				</div>
			))}
		</Slider>
	);
};

export default PosterSlider;
