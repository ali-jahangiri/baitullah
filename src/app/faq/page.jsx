"use client";
import React, { useState } from "react";

import GeneralQA from "@/src/components/common/generalQA";
import Container from "@/src/components/ui/container";
import TextInput from "@/src/components/ui/textInput";
import BlurEffectBackground from "@/src/components/ui/blurEffectBackground";
import SupportIcon from "@/src/assets/icons/user-headset.svg";
import QuestionIcon from "@/src/assets/icons/question.svg";
// import GradientBackground from "@/src/components/ui/gradientBackground";
// import Textarea from "@/src/components/ui/textarea";
// import Button from "@/src/components/ui/button";
// import LeftArrowIcon from "@/src/assets/icons/angle-left.svg";

const FAQ = () => {
	const [searchValue, setSearchValue] = useState("");

	return (
		<div>
			<BlurEffectBackground />

			<Container>
				<h2 className="text-center text-gray-800 pt-20">
					پیش از طرح پرسش، جستجو کنید! شاید پاسخ خود را بیابید.
				</h2>

				<div className="flex items-center w-3/6 mx-auto mt-8 bg-white">
					<TextInput
						value={searchValue}
						containerClassName="w-full"
						renderBefore={() => (
							<div className="flex items-center justify-center p-1">
								<QuestionIcon className="w-5 h-5 fill-secondary" />
								<div className="h-10 w-0.5 bg-gray-100 mr-2" />
							</div>
						)}
						renderAfter={() => (
							<button className="flex items-center justify-center text-sm w-40 bg-gray-100 p-1 h-14 rounded-lg flex-shrink-0">
								<SupportIcon className="w-55 h-5 fill-green-800" />
								ارتباط با پشتیبانی
							</button>
						)}
						onChange={setSearchValue}
					/>
				</div>
				<div className="w-4/5 mx-auto mt-20">
					<GeneralQA searchValue={searchValue} />
				</div>

				{/* <div className="flex gap-10 my-52">
						<div className="w-1/2">
							<p className="text-lg text-primary">
								به پیام شما در سریع ترین زمان ممکن پاسخ خواهیم داد
							</p>

							<TextInput containerClassName="mb-5 mt-8" placeholder="نام و نام خانوادگی" />
							<TextInput containerClassName="mb-5" placeholder="شماره موبایل" />
							<Textarea placeholder="متن پیام:" />

							<Button
								icon={<LeftArrowIcon className="w-5 h-5 fill-white" />}
								className="mr-auto"
							>
								ارسال پیام
							</Button>
						</div>
						<div className="h-[30rem] bg-gray-800 w-1/2"></div>
					</div> */}
			</Container>
		</div>
	);
};

export default FAQ;
