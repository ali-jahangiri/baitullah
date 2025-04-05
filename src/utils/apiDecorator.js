const baseApiURL = process.env.BASE_API_URL;
const baseApiVersion = process.env.BASE_API_VERSION;

export default function apiDecorator(route) {
	return `${baseApiURL}/v${baseApiVersion}/${route}`;
}
