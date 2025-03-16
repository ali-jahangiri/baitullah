function eventsResponseMapper(responseList = []) {
	return responseList.map(response => ({
		id: response.id,
		title: response.title.rendered,
		shortDesc: response.acf_fields.short_description,
		desc: response.acf_fields.description,
		amount: Number(response.acf_fields.amount),
		maxNumberOfParticipant: Number(response.acf_fields.max_number_of_participants),
		actionButtonDetails: response.acf_fields.event_button_action_label,
		createAt: response.date,
		hasLocation: response.acf_fields.event_location,
		date: {
			start: response.acf_fields.start_date,
			end: response.acf_fields.end_date,
		},
	}));
}

function postsResponseMapper(responseList = []) {
	return responseList.map(response => ({}));
}

export { eventsResponseMapper, postsResponseMapper };
