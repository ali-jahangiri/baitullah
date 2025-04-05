export default function postsResponseMapper(responseList = []) {
	return responseList.map(response => ({
		id: response.id,
		createAt: response.date,
		title: response.title.rendered,
		content: response.content.rendered,
		shortDesc: response.acf_fields.short_description,
		thumbnail: response.acf_fields.poster_thumbnail,
		widePosterImage: response.acf_fields.poster_wide,
	}));
}
