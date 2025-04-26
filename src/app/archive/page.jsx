import Container from "@/src/components/ui/container";
import GradientBackground from "@/src/components/ui/gradientBackground";

import EducationIcon from "@/src/assets/icons/graduation-cap.svg";
import BlogCard from "@/src/components/common/blogCard";
import LeftCircleIcon from "@/src/assets/icons/angle-circle-left.svg";
import Pagination from "@/src/components/ui/pagination";
import fetcher from "@/src/api/fetcher";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import postsResponseMapper from "@/src/utils/postsResponseMapper";

const Archive = async () => {
	const response = await fetcher(ENDPOINTS_PATH.post);
	const data = await response.json();
	const mappedList = postsResponseMapper(data);

	console.log(data);

	return (
		<div>
			<Container>
				<GradientBackground
					gradients={[
						"transparent radial-gradient(closest-side at 50% 50%, #FABF04 0%, #FABF0400 100%) 0% 0% no-repeat padding-box;",
						"transparent radial-gradient(closest-side at 50% 50%, #1C6FCC 0%, #1C6FCC00 100%) 0% 0% no-repeat padding-box;",
					]}
				>
					<div className="flex gap-8 mt-20">
						<div className="w-1/2">
							<div className="flex">
								<EducationIcon className="w-10 h-10 fill-primary" />
								<div>
									<p>اخبار و مقالات</p>
									<p className="mt-1 text-gray-400">Learning Articles</p>
								</div>
							</div>
							<p className="text-gray-400 leading-10">
								اخبار و مقالات وب‌سایت مسجد بیت‌الله مجموعه‌ای از مطالب آموزشی و دینی است که
								با هدف افزایش آگاهی و بهره‌مندی هرچه بیشتر نمازگزاران و علاقه‌مندان تهیه شده
								است. این مقالات شامل نکات ارزشمند عبادی، احکام شرعی، معارف اسلامی و
								توصیه‌های معنوی است که می‌تواند راهگشای زندگی دینی شما باشد. عناوین این
								مطالب برآمده از سال‌ها تجربه در برگزاری مراسم‌های مذهبی و پاسخ به پرسش‌های
								متداول نمازگزاران و زائران مسجد است. امید داریم که با ارائه این محتوا، گامی
								مؤثر در ارتقای معرفت دینی و ایجاد فضایی پربار برای شما عزیزان برداریم. 🔹 با
								ما همراه باشید تا از جدیدترین اخبار، رویدادهای مذهبی و مقالات اسلامی
								بهره‌مند شوید.
							</p>
						</div>

						<div className="w-1/2 relative">
							<div className="w-full h-[35rem] bg-gray-800 rounded-3xl"></div>

							<div className="bg-white absolute bottom-0 left-0 z-10 w-2/5 p-10">
								<h2 className="text-large font-bold">
									چگونه مسجد را به پایگاهی برای رشد فرهنگی و اجتماعی تبدیل کنیم؟
								</h2>
								<div className="flex items-center justify-end mt-5">
									<p className="text-gray-400 text-sm">مطالعه مقاله</p>
									<LeftCircleIcon className="w-4 h-4 fill-gray-400 mr-2" />
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-4 gap-4 mt-10">
						{mappedList.map((post, i) => (
							<div className="">
								<BlogCard
									title={post.title}
									pathSource="archive"
									date="8 خرداد"
									img={post.thumbnail}
									id={post.id}
									key={i}
								/>
							</div>
						))}
					</div>

					<div className="mt-5 flex justify-center h-52">
						<Pagination total={23} current={5} />
					</div>
				</GradientBackground>
			</Container>
		</div>
	);
};

export default Archive;
