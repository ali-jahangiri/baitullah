"use client";
import CampaignCard from "@/src/components/common/campaignCard";
import React from "react";
import Slider from "react-slick";

const CustomSlider = ({ data }) => {
	const sliderConfig = {
		dots: false,
		infinite: false,
		speed: 500,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 3,
		dir: "rtl",
	};
	return (
		<Slider {...sliderConfig}>
			{data.map((campaign, i) => (
				<CampaignCard
					width={400}
					title={campaign.title}
					img={campaign.img}
					showShortDesc
					id={campaign.id}
					desc={campaign.shortDesc}
					key={i}
				/>
			))}
		</Slider>
	);
};

export default CustomSlider;
