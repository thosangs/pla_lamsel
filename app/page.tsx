import Link from "next/link";
import {
	IconFlagCheckered,
	CalendarIcon,
	ChevronRightIcon,
	IconBikeFast,
	BookIcon,
} from "@/components/ui/icons";

export default function Home() {
	return (
		<>
			<IconBikeFast className="w-32 h-auto text-background p-4" />

			<nav className="w-full max-w-md grid gap-4">
				<Link
					href="/peraturan"
					className="bg-background text-muted-foreground rounded-lg p-4 flex items-center justify-between hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
					prefetch={false}
				>
					<div className="flex items-center gap-2">
						<BookIcon className="w-6 h-6" />
						<span>Peraturan</span>
					</div>
					<ChevronRightIcon className="w-6 h-6" />
				</Link>
				<Link
					href="/livescore"
					className="bg-background text-muted-foreground rounded-lg p-4 flex items-center justify-between hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
					prefetch={true}
				>
					<div className="flex items-center gap-2">
						<IconFlagCheckered className="w-6 h-6" />
						<span>Live Hasil Race</span>
					</div>
					<ChevronRightIcon className="w-6 h-6" />
				</Link>
				<Link
					href="/jadwal"
					className="bg-background text-muted-foreground rounded-lg p-4 flex items-center justify-between hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
					prefetch={false}
				>
					<div className="flex items-center gap-2">
						<CalendarIcon className="w-6 h-6" />
						<span>Jadwal Race</span>
					</div>
					<ChevronRightIcon className="w-6 h-6" />
				</Link>
			</nav>
		</>
	);
}
