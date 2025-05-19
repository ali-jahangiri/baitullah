export default function scheduleResponseMapper(data) {
	return data.map(item => ({
		presenterName: item.acf_fields.presenter_name,
		title: item.acf_fields.presenter_titlr,
		shortDesc: item.acf_fields.short_description,
		startTime: item.acf_fields.start_time,
		endTime: item.acf_fields.end_time,
		dayName: item.acf_fields.timetable_day,
		id: item.id,
		title: item.title.rendered,
		tags: item.tag_names,
	}));
}
