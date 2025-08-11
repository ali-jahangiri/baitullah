"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import fetcher from "@/src/api/fetcher";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import scheduleResponseMapper from "@/src/utils/scheduleResponseMapper";
import _date from "@/src/utils/date";
import Container from "@/src/components/ui/container";
import BgImage from "@/src/assets/images/schedule-bg.png";
import CircularShape from "@/src/assets/images/circular-shape.png";
import ObjectShape from "@/src/assets/images/schedule-item-image.png";
import ScheduleItem from "./schedule-item";

const Schedule = () => {
	const [currentTime, setCurrentTime] = useState(_date().format("HH:mm:ss"));
	const [scheduleItem, setScheduleItem] = useState([]);

	useEffect(() => {
		fetcher(ENDPOINTS_PATH.schedule)
			.then(res => res.json())
			.then(scheduleResponseMapper)
			.then(data => setScheduleItem(data));

		let intervalId = setInterval(() => {
			if (typeof window !== "undefined") setCurrentTime(_date().format("HH:mm:ss"));
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="mt-[15rem]">
			<Container>
				<p className="text-lg font-bold">برنامه روزانه مسجد صاحب الزمان عج</p>
			</Container>
			<div
				style={{
					background: `url(${BgImage.src})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
				className="w-[95%] h-[500px] flex mx-auto rounded-xl mt-5 relative"
			>
				{/* current time */}

				<div className="h-full w-[20rem] flex flex-col items-center justify-center text-white">
					<div className="flex text-[28px]  items-center opacity-30">
						امروز {_date().format("ddd")}
					</div>
					<p className="tracking-wider font-bold text-2xl my-2">
						{_date().format("YYYY/MM/DD")}
					</p>
					<p className="tracking-wider font-bold text-2xl">{currentTime}</p>
				</div>

				{/* schedule items */}

				<div className="flex items-center gap-x-4 w-7/12 h-full">
					{scheduleItem.map((item, i) => (
						<ScheduleItem
							title={item.title}
							presenter={item.presenterName}
							desc={item.shortDesc}
							startTime={item.startTime}
							endTime={item.endTime}
							key={i}
						/>
					))}
				</div>

				{/* circular shape image */}
				<div className="relative">
					<Image
						src={CircularShape}
						width={100}
						height={100}
						alt="circular-shape"
						className="absolute"
					/>
					<Image
						src={CircularShape}
						width={100}
						height={100}
						alt="circular-shape"
						className="absolute left-0 top-5"
					/>

					<Image
						src={CircularShape}
						width={100}
						height={100}
						alt="circular-shape"
						className="absolute left-80 top-96 z-20"
					/>
					<Image
						src={ObjectShape}
						width={350}
						height={800}
						alt="shape"
						className="relative -top-6"
					/>
				</div>
			</div>
		</div>
	);
};

export default Schedule;
