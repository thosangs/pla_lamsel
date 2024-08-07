import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
				<div className="flex flex-col min-h-screen bg-gradient-to-b from-primary to-primary-foreground">
					<header className="sticky top-0 bg-primary-foreground py-4 px-6 flex items-center justify-between z-40 opacity-95">
						<Link href="/" prefetch={true}>
							<div className="flex items-center gap-2">
								<h1 className="text-xl font-bold text-primary">🚲 PLA Lamsel</h1>
							</div>
						</Link>
					</header>

					<main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
						{children}
					</main>

					<footer className="bg-primary-foreground py-4 px-6 text-center text-sm text-primary">
						&copy; 2024 Built by thosangs.
					</footer>
				</div>
			</body>
		</html>
	);
}
