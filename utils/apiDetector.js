export default function apiBaseUrlDecorator(endpoint) {
	return `${process.env.BASE_URL}v${process.env.BASE_URL_VERSION}/${endpoint}`;
}
