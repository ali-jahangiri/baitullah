import Header from "../components/common/header";
import Footer from "../components/common/footer";
import "./globals.css";
import "./slick-slider.css";
import "./lightbox.css";

export const metadata = {
	title: "بیت الله - مسجد صاحب الزمان عج",
	description: "بیت الله - مسجد صاحب الزمان عج",
};

export default function RootLayout({ children }) {
	return (
		<html dir="rtl" lang="fa">
			<head>
				<link
					href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
					rel="stylesheet"
					type="text/css"
				/>
			</head>
			<body className={`antialiased`}>
				<Header />
				{children}
				<Footer />
				<div id="portal-container" />
			</body>
		</html>
	);
}
