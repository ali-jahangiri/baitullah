export function videoResponseMapper(data) {
	return data.map(item => ({
		id: item.id,
		title: item.title.rendered,
		shortDesc: item.acf_fields.short_description,
		createAt: item.date,
		poster: item.acf_fields.poster,
		media: item.acf_fields.image_list,
		video: item.acf_fields.video_link,
	}));
}
