const baseApiURL = process.env.BASE_URL;
const baseApiVersion = process.env.BASE_URL_VERSION;

console.log(baseApiURL);

export default function fetcher(route, method = "GET", body = null) {
	const url = `${baseApiURL}/v${baseApiVersion}/${route}`;

	const headers = {
		"Content-Type": "application/json",
	};
	const options = {
		method,
		headers,
		...(body ? { body: JSON.stringify(body) } : {}),
	};

	return fetch(url, options);
}
