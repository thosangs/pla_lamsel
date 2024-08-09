import Link from "next/link";
import {
	IconFlagCheckered,
	CalendarIcon,
	ChevronRightIcon,
	BookIcon,
} from "@/components/ui/icons";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Image
				src="/logo-text.png"
				width={150}
				height={0}
				className="m-0 pb-2"
				alt="racephoria"
			/>
			<nav className="w-full max-w-md grid gap-2 px-4">
				<Link
					href="/peraturan"
					className="bg-background text-secondary-foreground rounded-lg p-4 flex items-center justify-between hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
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
					className="bg-background text-secondary-foreground rounded-lg p-4 flex items-center justify-between hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
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
					className="bg-background text-secondary-foreground rounded-lg p-4 flex items-center justify-between hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
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
