/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "beytollah.org",
				port: "",
				pathname: "/wp-content/uploads/**",
			},
		],
	},
	env: {
		BASE_URL_VERSION: process.env.BASE_URL_VERSION,
		BASE_URL: process.env.BASE_URL,
	},
};

export default nextConfig;
