import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Livescore() {
	return (
		<div className="max-w-6xl grid gap-6">
			<Card>
				<CardHeader className="bg-muted rounded-sm">
					<CardTitle>2020</CardTitle>
				</CardHeader>
				<CardContent className="flex gap-4">
					<div className="flex-1">
						<div className="flex justify-center mt-4">
							<Link
								href="/livescore/2020/girl"
								className="inline-flex h-12 items-center justify-center rounded-md bg-[#FF69B4] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#FF69B4]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								<IconFaceWomanShimmer className="w-6 h-6 mr-2" />{" "}
								<span className="font-bold">Girls</span>
							</Link>
						</div>
					</div>
					<div className="flex-1">
						<div className="flex justify-center mt-4">
							<Link
								href="/livescore/2020/boy"
								className="inline-flex h-12 items-center justify-center rounded-md bg-[#1E90FF] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#1E90FF]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								<IconFaceManShimmer className="w-6 h-6 mr-2" />
								<span className="font-bold">Boys</span>
							</Link>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="bg-muted rounded-sm">
					<CardTitle>2019</CardTitle>
				</CardHeader>
				<CardContent className="flex gap-4">
					<div className="flex-1">
						<div className="flex justify-center mt-4">
							<Link
								href="#"
								className="inline-flex h-12 items-center justify-center rounded-md bg-[#FF69B4] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#FF69B4]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								<IconFaceWomanShimmer className="w-6 h-6 mr-2" />
								<span className="font-bold">Girls</span>
							</Link>
						</div>
					</div>
					<div className="flex-1">
						<div className="flex justify-center mt-4">
							<Link
								href="#"
								className="inline-flex h-12 items-center justify-center rounded-md bg-[#1E90FF] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#1E90FF]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								<IconFaceManShimmer className="w-6 h-6 mr-2" />
								<span className="font-bold">Boys</span>
							</Link>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="bg-muted rounded-sm">
					<CardTitle>FFA</CardTitle>
				</CardHeader>
				<CardContent className="flex gap-4">
					<div className="flex-1">
						<div className="flex justify-center mt-4">
							<Link
								href="#"
								className="inline-flex h-12 items-center bg-foreground justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#FF69B4]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								<TrophyIcon className="w-6 h-6 mr-2" />
							</Link>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

function TrophyIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
			<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
			<path d="M4 22h16" />
			<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
			<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
			<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
		</svg>
	);
}

function IconFaceManShimmer(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M18.41 3.41L16 4.5l2.41 1.09L19.5 8l1.1-2.41L23 4.5l-2.4-1.09L19.5 1M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10c0-1.47-.33-2.87-.9-4.13l-1.24 2.72c.08.46.14.91.14 1.41 0 4.43-3.57 8-8 8s-8-3.57-8-8v-.13a10 10 0 005.74-5.56A10 10 0 0017.5 10a10 10 0 001.33-.09l-1.48-3.26L12.6 4.5l3.53-1.6C14.87 2.33 13.47 2 12 2m-3 9.75A1.25 1.25 0 007.75 13 1.25 1.25 0 009 14.25 1.25 1.25 0 0010.25 13 1.25 1.25 0 009 11.75m6 0A1.25 1.25 0 0013.75 13 1.25 1.25 0 0015 14.25 1.25 1.25 0 0016.25 13 1.25 1.25 0 0015 11.75z" />
		</svg>
	);
}

function IconFaceWomanShimmer(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M19.5 1l-1.09 2.41L16 4.5l2.41 1.09L19.5 8l1.1-2.41L23 4.5l-2.4-1.09L19.5 1M12 2C6.5 2 2 6.5 2 12v10h20V12c0-1.47-.33-2.87-.9-4.13l-1.24 2.72c.08.46.14.91.14 1.41 0 4.43-3.57 8-8 8s-8-3.57-8-8v-.13a10 10 0 005.74-5.56A10 10 0 0017.5 10a10 10 0 001.33-.09l-1.48-3.26L12.6 4.5l3.53-1.6C14.87 2.33 13.47 2 12 2m-3 9.75A1.25 1.25 0 007.75 13 1.25 1.25 0 009 14.25 1.25 1.25 0 0010.25 13 1.25 1.25 0 009 11.75m6 0A1.25 1.25 0 0013.75 13 1.25 1.25 0 0015 14.25 1.25 1.25 0 0016.25 13 1.25 1.25 0 0015 11.75z" />
		</svg>
	);
}
