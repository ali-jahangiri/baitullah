import GradientBackground from "@/src/components/ui/gradientBackground";
import Container from "@/src/components/ui/container";
import LeftArrowIcon from "@/src/assets/icons/angle-left.svg";
import PhoneIcon from "@/src/assets/icons/phone-call.svg";
import EmailIcon from "@/src/assets/icons/envelope.svg";
import CommentIcon from "@/src/assets/icons/comments.svg";
import GeneralQA from "@/src/components/common/generalQA";
import HeroBackgroundImage from "@/src/assets/images/contact-us-hero-image.png";
import BlurEffectBackground from "@/src/components/ui/blurEffectBackground";

const ContactUs = () => (
	<div className="px-5">
		<div
			style={{
				background: `url(${HeroBackgroundImage.src})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "110%",
				backgroundPosition: "-130px -175px",
			}}
			className="w-full h-[40rem] rounded-3xl relative"
		>
			<div className="absolute top-1/2 left-0 bg-white text-2xl p-5">
				<h1 className="text-primary font-bold">درباره ما بیشتر بدانید</h1>
				<p className="text-gray-500 mt-1">ما چی ارائه میدیم</p>
			</div>
		</div>

		<BlurEffectBackground top={0} />

		<Container>
			<div className="flex gap-10 w-4/5 mx-auto">
				<div className="w-2/5">
					<div className="relative z-10">
						<div className="w-full bg-white rounded-lg -mt-24 pt-10 px-5 pb-5">
							<a
								href="tel:021-77477372"
								className="flex items-center justify-between rounded-3xl shadow-2xl p-5"
							>
								<PhoneIcon className="w-7 h-7 fill-green-700" />
								<p className="text-green-700 text-lg">۰۹۰۲۳۵۳۵۳۶۵</p>
							</a>

							<div className="flex items-center mt-16">
								<CommentIcon className="w-5 h-5 fill-primary ml-3" />
								<p>ارسال تیکت به پشتیبانی</p>
								<LeftArrowIcon className="w-5 h-5 fill-gray-400 mr-auto ml-3" />
							</div>
							<a href="mailto:mr.abedini@gmail.com" className="flex items-center mt-8">
								<EmailIcon className="w-5 h-5 fill-primary ml-3" />
								<p>ارتباط از طرریق ایمیل</p>
								<LeftArrowIcon className="w-5 h-5 fill-gray-400 mr-auto ml-3" />
							</a>

							<button className="flex items-center justify-center p-5 bg-primary/5 w-full mx-1 mt-10 rounded-lg">
								<p className="mr-auto text-gray-400 text-sm">
									پشیبان آنلاین ما در این لحظه
								</p>
								<LeftArrowIcon className="w-4 h-4 fill-primary/50 mr-auto ml-3" />
							</button>
						</div>

						<div className="flex items-center justify-center mt-6">
							<CommentIcon className="w-10 h-10 fill-green-800 ml-3" />
							<div>
								<p>انتقاد و پیشنهاد</p>
								<p className="text-gray-400 mt-2">Criticism and Suggestions</p>
							</div>
						</div>
					</div>
				</div>

				<div className="w-3/5">
					<p className="leading-10 text-gray-400 mt-10">
						مسجد در اسلام جایگاهی ویژه دارد و نه تنها به عنوان مکانی برای نماز و عبادت شناخته
						می‌شود، بلکه به عنوان یک مرکز اجتماعی، فرهنگی و آموزشی نیز ایفای نقش می‌کند. مسجد
						در واقع خانه خداوند است و مسلمانان برای ارتباط با پروردگار خود به این مکان مقدس
						می‌روند. در کنار عبادات روزانه مانند نماز، مساجد محلی برای برگزاری مراسم‌های
						مذهبی، تحصیل علوم دینی، پاسخگویی به سؤالات شرعی و اجتماعی، و حتی فعالیت‌های
						اجتماعی مانند کمک به نیازمندان و برگزاری جلسات مشاوره هستند. تاریخ مساجد در اسلام
						نشان می‌دهد که این مکان‌ها همواره محلی برای همبستگی اجتماعی و گسترش فرهنگاسلامی
						بوده‌اند. علاوه بر اقامه نماز، مساجد در بسیاری از کشورهای اسلامی به‌عنوان مراکز
						علمی و فرهنگی مورد استفاده قرار گرفته‌اند و در بسیاری از دوره‌های تاریخ اسلام، علم
						و فلسفه در مساجد تدریس می‌شد. امروزه، مساجد می‌توانند با برنامه‌ریزی صحیح و انجام
						فعالیت‌های مختلف فرهنگی، اجتماعی، هنری و آموزشی، به پایگاهی برای رشد معنوی و
						اجتماعی جامعه تبدیل شوند. با توجه به اهمیت حضور جوانان و خانواده‌ها در فعالیت‌های
						مسجد، می‌توان از این مکان‌ها به‌عنوان مراکزی برای تربیت نسل‌های آینده و تقویت
						همبستگی اجتماعی استفاده کرد. در مجموع، مسجد نه تنها مکانی برای عبادت است، بلکه
						بستری است برای رشد و تعالی جامعه اسلامی، جایی که فرد مسلمان می‌تواند در کنار
						عبادات خود، به یادگیری و مشارکت در فعالیت‌های اجتماعی و فرهنگی بپردازد.
					</p>
				</div>
			</div>

			<div className="w-4/5 mx-auto mt-28 pb-36">
				<GeneralQA />
			</div>
		</Container>
	</div>
);

export default ContactUs;
