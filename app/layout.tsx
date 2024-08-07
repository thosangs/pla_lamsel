import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "PLA Lamsel",
	description: "Pushbike Lampung Academy | Lampung Selatan",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex flex-col min-h-screen bg-gradient-to-b from-primary to-primary-foreground">
						<Header />

						<main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
							{children}
						</main>

						<footer className="bg-primary-foreground py-4 px-6 text-center text-sm text-secondary-foreground">
							&copy; 2024 Built by thosangs.
						</footer>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
