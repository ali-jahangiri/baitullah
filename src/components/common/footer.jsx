import React from "react";
import Image from "next/image";
import Link from "next/link";

import Republic from "@/src/assets/images/iran-republic.png";
import { FOOTER_USEFUL_LINKS } from "@/src/constants/general";
import Container from "../ui/container";

const Footer = () => {
	return (
		<footer className="pt-20">
			<Container>
				<div className="flex text-sm h-[225px]">
					{/* intro */}
					<div className="flex w-5/12 pl-20">
						<Image className="object-contain" alt="default" src={Republic} />

						<div className="mr-5">
							<p className="text-secondary">مسجد؛ خانه امید و محور اتحاد</p>
							<p className="my-4 text-gray-500">
								مسجد هسته مقاومت فرهنگی است؛ جایی که دل‌ها به خدا نزدیک می‌شود و جامعه‌ای
								پویا و ایمانی شکل می‌گیرد.
							</p>
							<p className="text-gray-700 text-sm">
								برگرفته از بیانات رهبر معظم انقلاب اسلامی در خصوص اهمیت مساجد
							</p>
						</div>
					</div>

					{/* useful links */}
					<div className="w-2/12">
						<p className="text-secondary mb-5">لینک‌های مفید</p>

						<div className="flex flex-col space-y-3">
							{FOOTER_USEFUL_LINKS.map((link, i) => (
								<Link href="/" className="text-gray-500" key={i}>
									{link.label}
								</Link>
							))}
						</div>
					</div>

					<div className="w-0.5 h-full bg-gray-100 ml-20" />

					{/* working hours */}
					<div className="w-3/12">
						<p className="text-secondary mb-5">ساعات کاری</p>

						<div className="flex items-center">
							<p>باز بودن درب مسجد:</p>
							<p className="text-gray-400 mr-3">هر روز از ساعت 5 صبح تا 11 شب</p>
						</div>
						<div className="flex mt-7">
							<p>اقامه نماز جماعت:</p>
							<div className="flex flex-col space-y-3 mr-3">
								<p className="text-gray-400">صبح ۵:۳۰</p>
								<p className="text-gray-400">ظهر و عصر ۱۲:۱۵</p>
								<p className="text-gray-400">مغرب و عشاء: 18:30</p>
							</div>
						</div>
					</div>

					<div className="w-0.5 h-full bg-gray-100 ml-20" />

					{/* contact us */}
					<div className="w-2/12">
						<p className="text-secondary mb-5">تماس با ما</p>
						<div className="flex flex-col">
							<p>آدرس:</p>
							<span className="text-gray-400 mt-1 mb-4">
								تهران، خیابان انقلاب، کوچه مسجد، پلاک 12
							</span>
							<p>تلفن:</p>
							<span className="text-gray-400 mt-1 mb-4">021-12345678</span>
							<p>ایمیل:</p>
							<span className="text-gray-400 mt-1 mb-4">info@masjedexample.com</span>
						</div>
					</div>
				</div>
			</Container>
			<div className="w-full h-20 bg-primary flex items-center justify-center text-white mt-14">
				مسجد؛ جایی برای آرامش دل‌ها و پیوند با خداوند.
			</div>
		</footer>
	);
};

export default Footer;
