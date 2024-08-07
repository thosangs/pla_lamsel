import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
	IconFaceWomanShimmer,
	IconFaceManShimmer,
	TrophyIcon,
} from "@/components/ui/icons";
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
