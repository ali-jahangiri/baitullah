import { User } from "@/src/assets/icons";

const Comment = ({ avatar, time, name, content, showBorder }) => (
	<div className={`mt-1 p-5`}>
		<div className="flex items-center">
			<div className="flex items-center justify-center rounded-full bg-white w-10 h-10 ml-3 shrink-0">
				<User className="w-5 h-5 fill-gray-500" />
			</div>
			<div>
				<p className="text-base text-gray-500">{name}</p>
				<p className="text-sm text-gray-400 mt-2">{time}</p>
			</div>
		</div>

		<p
			className={`mt-4 pb-8 text-gray-700 leading-9 ${
				showBorder ? "border-b-2 border-gray-200" : ""
			}`}
		>
			{content}
		</p>
	</div>
);

export default Comment;
