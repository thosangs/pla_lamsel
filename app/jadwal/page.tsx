export default function Jadwal() {
	return (
		<div className="w-full max-w-4xl bg-background rounded-lg shadow-lg p-6">
			<h2 className="text-2xl font-bold text-primary mb-4">Schedule</h2>
			<div className="overflow-x-auto">
				<table className="w-full text-muted-foreground">
					<thead>
						<tr className="border-b">
							<th className="p-4 text-left font-semibold">Event Details</th>
							<th className="p-4 text-left font-semibold">Event Time</th>
							<th className="p-4 text-left font-semibold">Event Note</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b">
							<td className="p-4">Race 1 - Daytona</td>
							<td className="p-4">June 1, 2024 - 3:00 PM</td>
							<td className="p-4">Tentative</td>
						</tr>
						<tr className="border-b">
							<td className="p-4">Race 2 - Talladega</td>
							<td className="p-4">July 15, 2024 - 4:30 PM</td>
							<td className="p-4">Confirmed</td>
						</tr>
						<tr className="border-b">
							<td className="p-4">Race 3 - Sonoma</td>
							<td className="p-4">August 20, 2024 - 2:00 PM</td>
							<td className="p-4">Tentative</td>
						</tr>
						<tr className="border-b">
							<td className="p-4">Race 4 - Watkins Glen</td>
							<td className="p-4">September 5, 2024 - 3:30 PM</td>
							<td className="p-4">Confirmed</td>
						</tr>
						<tr className="border-b">
							<td className="p-4">Race 5 - Homestead</td>
							<td className="p-4">October 12, 2024 - 4:00 PM</td>
							<td className="p-4">Tentative</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
