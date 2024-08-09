"use client";

import { Suspense } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import { useSearchParams } from "next/navigation";
import { LoadingSpinner } from "@/components/ui/icons";
import Image from "next/image";
import icon_image from "@/public/icon.png";

function KelasFallback() {
	return <LoadingSpinner />;
}

function KelasActive() {
	const searchParams = useSearchParams();
	const tahun = searchParams.get("tahun");
	const tipe = searchParams.get("tipe");
	return (
		<>
			<div className="my-2 mx-auto">
				<hr />
				<div className="text-center">
					<span className="inline-block font-bold text-background text-3xl align-middle">
						{tipe?.toUpperCase()}
					</span>
					<Image
						src={icon_image}
						placeholder="blur"
						className="my-0 py-2 mx-2 inline-block w-2/12"
						alt="racephoria"
					/>
					<span className="inline-block font-bold text-background text-3xl align-middle">
						{tahun?.toUpperCase()}
					</span>
				</div>
				<hr />
			</div>

			<Card className="container w-full p-1 my-2 mx-1">
				<CardHeader className="bg-muted">
					<CardTitle>Bracket 1</CardTitle>
				</CardHeader>
				<CardContent className="p-0 overflow-x-auto">
					<Table>
						<TableHeader className="bg-muted">
							<TableRow>
								<TableHead>Racer Name</TableHead>
								<TableHead>Racer Group</TableHead>
								<TableHead>Racer #</TableHead>
								<TableHead>Nickname</TableHead>
								<TableHead>1st Start</TableHead>
								<TableHead>1st Finish</TableHead>
								<TableHead>2nd Start</TableHead>
								<TableHead>2nd Finish</TableHead>
								<TableHead>Final Score</TableHead>
								<TableHead>Final Rank</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>John Doe</TableCell>
								<TableCell>Group A</TableCell>
								<TableCell>24</TableCell>
								<TableCell>The Speedster</TableCell>
								<TableCell>1</TableCell>
								<TableCell>2</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>45</TableCell>
								<TableCell>1</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Jane Smith</TableCell>
								<TableCell>Group A</TableCell>
								<TableCell>12</TableCell>
								<TableCell>The Racer</TableCell>
								<TableCell>2</TableCell>
								<TableCell>1</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>42</TableCell>
								<TableCell>2</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Bob Johnson</TableCell>
								<TableCell>Group B</TableCell>
								<TableCell>7</TableCell>
								<TableCell>The Champ</TableCell>
								<TableCell>3</TableCell>
								<TableCell>3</TableCell>
								<TableCell>3</TableCell>
								<TableCell>3</TableCell>
								<TableCell>39</TableCell>
								<TableCell>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Alice Williams</TableCell>
								<TableCell>Group B</TableCell>
								<TableCell>19</TableCell>
								<TableCell>The Rookie</TableCell>
								<TableCell>4</TableCell>
								<TableCell>4</TableCell>
								<TableCell>4</TableCell>
								<TableCell>4</TableCell>
								<TableCell>36</TableCell>
								<TableCell>4</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card className="container w-full p-1 my-2 mx-1">
				<CardHeader className="bg-muted">
					<CardTitle>Bracket 2</CardTitle>
				</CardHeader>
				<CardContent className="p-0 overflow-x-auto">
					<Table>
						<TableHeader className="bg-muted">
							<TableRow>
								<TableHead>Racer Name</TableHead>
								<TableHead>Racer Group</TableHead>
								<TableHead>Racer #</TableHead>
								<TableHead>Nickname</TableHead>
								<TableHead>1st Start</TableHead>
								<TableHead>1st Finish</TableHead>
								<TableHead>2nd Start</TableHead>
								<TableHead>2nd Finish</TableHead>
								<TableHead>Final Score</TableHead>
								<TableHead>Final Rank</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>Michael Brown</TableCell>
								<TableCell>Group C</TableCell>
								<TableCell>5</TableCell>
								<TableCell>The Veteran</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>50</TableCell>
								<TableCell>1</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Emily Davis</TableCell>
								<TableCell>Group C</TableCell>
								<TableCell>9</TableCell>
								<TableCell>The Prodigy</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>48</TableCell>
								<TableCell>2</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>David Wilson</TableCell>
								<TableCell>Group D</TableCell>
								<TableCell>13</TableCell>
								<TableCell>The Underdog</TableCell>
								<TableCell>3</TableCell>
								<TableCell>3</TableCell>
								<TableCell>3</TableCell>
								<TableCell>3</TableCell>
								<TableCell>46</TableCell>
								<TableCell>3</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Sarah Lee</TableCell>
								<TableCell>Group D</TableCell>
								<TableCell>21</TableCell>
								<TableCell>The Rookie</TableCell>
								<TableCell>4</TableCell>
								<TableCell>4</TableCell>
								<TableCell>4</TableCell>
								<TableCell>4</TableCell>
								<TableCell>44</TableCell>
								<TableCell>4</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card className="container w-full p-1 my-2 mx-1">
				<CardHeader className="bg-muted">
					<CardTitle>Semifinal 1</CardTitle>
				</CardHeader>
				<CardContent className="p-0 overflow-x-auto">
					<Table>
						<TableHeader className="bg-muted">
							<TableRow>
								<TableHead>Racer Name</TableHead>
								<TableHead>Racer Group</TableHead>
								<TableHead>Racer #</TableHead>
								<TableHead>Nickname</TableHead>
								<TableHead>1st Start</TableHead>
								<TableHead>1st Finish</TableHead>
								<TableHead>2nd Start</TableHead>
								<TableHead>2nd Finish</TableHead>
								<TableHead>Final Score</TableHead>
								<TableHead>Final Rank</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>John Doe</TableCell>
								<TableCell>Group A</TableCell>
								<TableCell>24</TableCell>
								<TableCell>The Speedster</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>50</TableCell>
								<TableCell>1</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Emily Davis</TableCell>
								<TableCell>Group C</TableCell>
								<TableCell>9</TableCell>
								<TableCell>The Prodigy</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>48</TableCell>
								<TableCell>2</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card className="container w-full p-1 my-2 mx-1">
				<CardHeader className="bg-muted">
					<CardTitle>Semifinal 2</CardTitle>
				</CardHeader>
				<CardContent className="p-0 overflow-x-auto">
					<Table>
						<TableHeader className="bg-muted">
							<TableRow>
								<TableHead>Racer Name</TableHead>
								<TableHead>Racer Group</TableHead>
								<TableHead>Racer #</TableHead>
								<TableHead>Nickname</TableHead>
								<TableHead>1st Start</TableHead>
								<TableHead>1st Finish</TableHead>
								<TableHead>2nd Start</TableHead>
								<TableHead>2nd Finish</TableHead>
								<TableHead>Final Score</TableHead>
								<TableHead>Final Rank</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>Michael Brown</TableCell>
								<TableCell>Group C</TableCell>
								<TableCell>5</TableCell>
								<TableCell>The Veteran</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>50</TableCell>
								<TableCell>1</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Jane Smith</TableCell>
								<TableCell>Group A</TableCell>
								<TableCell>12</TableCell>
								<TableCell>The Racer</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>48</TableCell>
								<TableCell>2</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card className="container w-full p-1 my-2 mx-1">
				<CardHeader className="bg-muted">
					<CardTitle>Novice Final</CardTitle>
				</CardHeader>
				<CardContent className="p-0 overflow-x-auto">
					<Table>
						<TableHeader className="bg-muted">
							<TableRow>
								<TableHead>Racer Name</TableHead>
								<TableHead>Racer Group</TableHead>
								<TableHead>Racer #</TableHead>
								<TableHead>Nickname</TableHead>
								<TableHead>1st Start</TableHead>
								<TableHead>1st Finish</TableHead>
								<TableHead>2nd Start</TableHead>
								<TableHead>2nd Finish</TableHead>
								<TableHead>Final Score</TableHead>
								<TableHead>Final Rank</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>Bob Johnson</TableCell>
								<TableCell>Group B</TableCell>
								<TableCell>7</TableCell>
								<TableCell>The Champ</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>50</TableCell>
								<TableCell>1</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Sarah Lee</TableCell>
								<TableCell>Group D</TableCell>
								<TableCell>21</TableCell>
								<TableCell>The Rookie</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>48</TableCell>
								<TableCell>2</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card className="container w-full p-1 my-2 mx-1">
				<CardHeader className="bg-muted">
					<CardTitle>Main Final</CardTitle>
				</CardHeader>
				<CardContent className="p-0 overflow-x-auto">
					<Table>
						<TableHeader className="bg-muted">
							<TableRow>
								<TableHead>Racer Name</TableHead>
								<TableHead>Racer Group</TableHead>
								<TableHead>Racer #</TableHead>
								<TableHead>Nickname</TableHead>
								<TableHead>1st Start</TableHead>
								<TableHead>1st Finish</TableHead>
								<TableHead>2nd Start</TableHead>
								<TableHead>2nd Finish</TableHead>
								<TableHead>Final Score</TableHead>
								<TableHead>Final Rank</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>John Doe</TableCell>
								<TableCell>Group A</TableCell>
								<TableCell>24</TableCell>
								<TableCell>The Speedster</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>1</TableCell>
								<TableCell>50</TableCell>
								<TableCell>1</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Michael Brown</TableCell>
								<TableCell>Group C</TableCell>
								<TableCell>5</TableCell>
								<TableCell>The Veteran</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>2</TableCell>
								<TableCell>48</TableCell>
								<TableCell>2</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</>
	);
}

export default function Kelas() {
	return (
		<Suspense fallback={<KelasFallback />}>
			<KelasActive />
		</Suspense>
	);
}
