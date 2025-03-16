import apiBaseUrlDecorator from "./apiDetector";

export default async function fetcher(url, config = {}) {
	try {
		const res = await fetch(apiBaseUrlDecorator(url));
		return await res.json();
	} catch (err) {}
}
