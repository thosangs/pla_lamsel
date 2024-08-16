import { NextRequest, NextResponse } from "next/server";
import { ranges } from "@/lib/kelas";

export const runtime = "edge";

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const year = searchParams.get("tahun") || "";
	const type = searchParams.get("tipe") as YearType;

	// Ensure year and type are provided
	if (!year || !type) {
		return NextResponse.json(
			{ error: "Missing year or type parameter" },
			{ status: 400 }
		);
	}

	// Get the API URL from the environment variables
	const apiUrl = process.env.APPSCRIPT_SHEET_API || "";
	const payload = {
		[year]: {
			[type]: ranges[year]?.[type],
		},
	};
	try {
		// Fetch data from the Google Apps Script API with JSON payload
		const response = await fetch(apiUrl!, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}

		let data = await response.json();

		// Process the data to replace empty header columns
		if (data && data[year] && data[year][type]) {
			for (const competition in data[year][type]) {
				if (data[year][type].hasOwnProperty(competition)) {
					const results = data[year][type][competition];
					const headers = results[0]; // First row is the header

					// Count the number of empty headers at the end
					const emptyHeaderCount = headers
						.slice(-2)
						.filter((header: string) => !header).length;

					if (emptyHeaderCount === 2) {
						headers[headers.length - 2] = "POIN";
						headers[headers.length - 1] = "RANK";
					} else if (emptyHeaderCount === 1) {
						headers[headers.length - 1] = "POSISI";
					}

					// Replace the headers in the results
					data[year][type][competition][0] = headers;
				}
			}
		}

		// Return the data as JSON
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		// Handle any errors that occur during the fetch
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
