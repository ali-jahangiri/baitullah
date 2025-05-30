import { AngleLeft, Comments, Envelope, PhoneCall } from "@/src/assets/icons";

const WaysOfContacts = () => (
	<div className="relative z-10">
		<div className="w-full bg-white rounded-lg pt-10 px-5 pb-5">
			<a
				href="tel:021-77477372"
				className="flex items-center justify-between rounded-3xl shadow-2xl p-5"
			>
				<PhoneCall className="w-7 h-7 fill-green-700" />
				<p className="text-green-700 text-lg">۰۹۰۲۳۵۳۵۳۶۵</p>
			</a>

			<a href="mailto:mr.abedini@gmail.com" className="flex items-center mt-16">
				<Comments className="w-5 h-5 fill-primary ml-3" />
				<p>ارسال تیکت به پشتیبانی</p>
				<AngleLeft className="w-5 h-5 fill-gray-400 mr-auto ml-3" />
			</a>
			<a href="mailto:mr.abedini@gmail.com" className="flex items-center mt-8">
				<Envelope className="w-5 h-5 fill-primary ml-3" />
				<p>ارتباط از طرریق ایمیل</p>
				<AngleLeft className="w-5 h-5 fill-gray-400 mr-auto ml-3" />
			</a>

			<a
				href="mailto:mr.abedini@gmail.com"
				className="flex items-center justify-center p-5 bg-primary/5 w-full mx-1 mt-10 rounded-lg"
			>
				<p className="mr-auto text-gray-400 text-sm">پشیبان آنلاین ما در این لحظه</p>
				<AngleLeft className="w-4 h-4 fill-primary/50 mr-auto ml-3" />
			</a>
		</div>
	</div>
);

export default WaysOfContacts;
