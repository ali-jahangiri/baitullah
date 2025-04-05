import LeftArrowIcon from "@/src/assets/icons/angle-left.svg";

const RelatedPosts = ({ posts = [] }) => {
	return (
		<div className="rounded-2xl bg-white p-4 shadow-md">
			{posts.map((post, i) => (
				<div className="flex" key={i}>
					<img className="mr-3" src={post.img} />
					<div className="flex flex-col">
						<h2>{post.title}</h2>
						<p>{post.shortDesc}</p>
						<LeftArrowIcon />
					</div>
				</div>
			))}
		</div>
	);
};

export default RelatedPosts;
