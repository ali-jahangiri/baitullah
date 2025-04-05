export default function soundsResponseMapper(sounds) {
	return sounds.map(sound => ({
		id: sound.id,
		title: sound.title.rendered,
		img: sound.imageUrl,
		shortDesc: sound.acf_fields.short_description,
		durations: sound.acf_fields.sound_time,
		source: sound.acf_fields.sound_link,
		createAt: sound.date,
		type: sound.acf_fields.sound_type,
	}));
}
