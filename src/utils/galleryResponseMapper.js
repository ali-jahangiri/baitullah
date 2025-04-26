export function galleryResponseMapper(data) {
	return data.map(item => ({
		id: item.id,
		title: item.title.rendered,
		shortDesc: item.acf_fields.short_description,
		createAt: item.date,
		thumbnail: item.acf_fields.poster_thumbnail,
		media: item.acf_fields.image_list,
	}));
}
