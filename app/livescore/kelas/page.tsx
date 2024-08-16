"use client";

import { Suspense } from "react";
import { useState, useEffect } from "react";
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

function modifyTableHeaders(headers: string[]): string[] {
	const headerCount: { [key: string]: number } = {};

	return headers.map((header) => {
		if (header.startsWith("MOTO")) {
			if (!headerCount[header]) {
				headerCount[header] = 1;
				return `START ${header}`;
			} else {
				headerCount[header]++;
				return `FINISH ${header}`;
			}
		}
		return header;
	});
}

function KelasFallback() {
	return <LoadingSpinner className="text-5xl h-16 w-auto animate-spin" />;
}

function KelasActive() {
	const searchParams = useSearchParams();
	const tahun = searchParams.get("tahun") || "";
	const tipe = searchParams.get("tipe") || "";

	const [data, setData] = useState<Record<string, any> | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (tahun && tipe) {
			setIsLoading(true);
			fetch(`/api/kelas?tahun=${tahun}&tipe=${tipe}`)
				.then((response) => {
					if (!response.ok) {
						throw new Error("Failed to fetch data");
					}
					return response.json();
				})
				.then((data) => {
					setData(data);
					setIsLoading(false);
				})
				.catch((err) => {
					setError(err);
					setIsLoading(false);
				});
		}
	}, [tahun, tipe]);

	if (isLoading) {
		return <KelasFallback />;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!data) {
		return <div>No data available</div>;
	}

	const renderTable = (bracketTitle: string, rows: string[][]) => (
		<Card key={bracketTitle} className="container w-full p-1 my-2 mx-1">
			<CardHeader className="bg-muted">
				<CardTitle>{bracketTitle}</CardTitle>
			</CardHeader>
			<CardContent className="p-0 overflow-x-auto">
				<Table>
					<TableHeader className="bg-muted">
						<TableRow>
							{modifyTableHeaders(rows[0]).map((header, index) => (
								<TableHead key={index} className="text-center">
									{header}
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{rows.slice(1).map((row, rowIndex) => (
							<TableRow key={rowIndex} className="p-0 text-center">
								{row.map((cell, cellIndex) => (
									<TableCell
										key={cellIndex}
										className={`p-2 ${
											rows[0][cellIndex] === "NAMA" || rows[0][cellIndex] === "KOMUNITAS"
												? "whitespace-nowrap"
												: ""
										}`}
									>
										{cell}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);

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
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{Object.entries(data[tahun][tipe]).map(([bracketTitle, rows]) =>
					renderTable(bracketTitle, rows as string[][])
				)}
			</div>
		</>
	);
}

export default function KelasPage() {
	return (
		<Suspense fallback={<KelasFallback />}>
			<KelasActive />
		</Suspense>
	);
}
