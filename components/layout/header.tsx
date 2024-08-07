"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
	IconBikeFast,
	IconMoonStarsFill,
	IconSunFill,
} from "@/components/ui/icons";

export default function Header() {
	const { setTheme } = useTheme();

	return (
		<header className="sticky top-0 bg-primary-foreground py-4 px-6 sm:px-16 flex items-center justify-between z-40 opacity-95">
			<Link href="/" prefetch={true}>
				<div className="flex items-center gap-2">
					<h1 className="text-xl font-bold text-secondary-foreground">
						<span>PLA Lamsel</span>
						<IconBikeFast className="inline" />
					</h1>
				</div>
			</Link>
			<Button
				variant="outline"
				size="icon"
				className="flex rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden"
				onClick={() => {
					setTheme("dark");
				}}
			>
				<IconMoonStarsFill className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<IconSunFill className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			</Button>
			<Button
				variant="outline"
				size="icon"
				className="hidden rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:flex"
				onClick={() => {
					setTheme("light");
				}}
			>
				<IconMoonStarsFill className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<IconSunFill className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			</Button>
		</header>
	);
}
