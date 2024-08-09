"use client";

import Link from "next/link";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="sticky bottom-0 bg-primary-foreground py-2 px-6 text-center text-sm text-secondary-foreground">
			&copy; {currentYear} Built by{" "}
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
	);
}
