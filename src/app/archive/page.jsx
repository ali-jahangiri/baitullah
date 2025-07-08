import Link from "next/link";
import Image from "next/image";

import Container from "@/src/components/ui/container";

import BlogCard from "@/src/components/common/blogCard";
import BlurEffectBackground from "@/src/components/ui/blurEffectBackground";
import fetcher from "@/src/api/fetcher";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import postsResponseMapper from "@/src/utils/postsResponseMapper";
import { AngleCircleLeft } from "@/src/assets/icons";

const Archive = async () => {
	const response = await fetcher(ENDPOINTS_PATH.post);
	const data = await response.json();
	const mappedList = postsResponseMapper(data);

	const firstArchivePost = mappedList[0];

	return (
		<Container>
			<div className="flex gap-8 mt-20">
				<BlurEffectBackground />
				<div className="w-1/2">
					<div className="flex">
						<div>
							<p>اخبار و مقالات</p>
							<p className="mt-1 text-gray-400">Learning Articles</p>
						</div>
					</div>
					<p className="text-gray-400 text-justify leading-10">{firstArchivePost.shortDesc}</p>
				</div>

				<div className="w-1/2 relative">
					<Image
						src={firstArchivePost.thumbnail}
						width={500}
						height={700}
						alt="archive-thumbnail"
						className="w-full rounded-2xl"
					/>
					<div className="bg-white absolute bottom-0 left-0 z-10 w-2/5 p-10">
						<h2 className="text-large font-bold">{firstArchivePost.title}</h2>
						<Link
							href={`/archive/${firstArchivePost.id}`}
							className="flex items-center justify-end mt-5"
						>
							<p className="text-gray-400 text-sm">مطالعه مقاله</p>
							<AngleCircleLeft className="w-4 h-4 fill-gray-400 mr-2" />
						</Link>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-4 mt-28">
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
		</Container>
	);
};

export default Archive;
