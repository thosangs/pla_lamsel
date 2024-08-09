import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-providers";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://racephoria.pages.dev"),
	title: "X-Anda | Racephoria",
	description:
		"X-Anda | Racephoria by Pushbike Lampung Academy ~ Lampung Selatan",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang="en">
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div className="flex flex-col min-h-screen bg-gradient-to-b from-primary to-primary-foreground">
						<Header />

						<main className="flex-1 flex flex-col items-center justify-center p-2">
							{children}
						</main>

						<footer className="sticky bottom-0 bg-primary-foreground py-2 px-6 text-center text-sm text-secondary-foreground">
							&copy; 2024 Built by{" "}
							<Link
								href="https://www.instagram.com/tukang.data/"
								className="font-bold text-primary"
								target="_blank"
								prefetch={false}
							>
								tukang_data
							</Link>
							.
						</footer>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
