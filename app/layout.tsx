import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Devlinks",
	description: "A link sharing app for sharing links to your loved ones!",
	icons: {
		icon: "",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={instrumentSans.className}>{children}</body>
		</html>
	);
}
