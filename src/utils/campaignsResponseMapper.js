export default function campaignsResponseMapper(campaigns) {
	return campaigns.map(campaign => ({
		id: campaign.id,
		title: campaign.title.rendered,
		shortDesc: campaign.acf_fields.short_description,
		img: campaign.acf_fields.poster,
		startDate: campaign.acf_fields.start_date,
		endDate: campaign.acf_fields.end_date,
		type: campaign.event,
		createdAt: campaign.date,
		desc: campaign.acf_fields.description,
		amount: campaign.acf_fields.amount,
		maxNumberOfParticipants: campaign.acf_fields.max_number_of_participants,
		actionLabel: campaign.acf_fields.event_button_action_label.label,
		hasEventLocation: campaign.acf_fields.event_location,
	}));
}
