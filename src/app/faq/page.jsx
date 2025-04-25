"use client";
import React from "react";

import GeneralQA from "@/src/components/common/generalQA";
import Container from "@/src/components/ui/container";
import GradientBackground from "@/src/components/ui/gradientBackground";
import TextInput from "@/src/components/ui/textInput";
import Textarea from "@/src/components/ui/textarea";
import Button from "@/src/components/ui/button";
import SupportIcon from "@/src/assets/icons/user-headset.svg";
import QuestionIcon from "@/src/assets/icons/question.svg";
import LeftArrowIcon from "@/src/assets/icons/angle-left.svg";

const FAQ = () => {
	return (
		<div>
			<GradientBackground
				gradients={[
					"transparent radial-gradient(closest-side at 50% 50%, #FABF04 0%, #FABF0400 100%) 0% 0% no-repeat padding-box",
					"transparent radial-gradient(closest-side at 50% 50%, #1C6FCC 0%, #1C6FCC00 100%) 0% 0% no-repeat padding-box",
				]}
			>
				<Container>
					<h2 className="text-center text-gray-800 pt-20">
						پیش از طرح پرسش، جستجو کنید! شاید پاسخ خود را بیابید.
					</h2>

					<div className="flex items-center w-3/6 mx-auto mt-8">
						<TextInput
							containerClassName="w-full"
							placeholder=""
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
						/>
					</div>
					<div className="w-4/5 mx-auto mt-20">
						<GeneralQA />
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
			</GradientBackground>
		</div>
	);
};

export default FAQ;
