import listJadwal from "@/lib/jadwal";

export default function Jadwal() {
	return (
		<div className="w-full max-w-4xl bg-background rounded-lg shadow-lg p-4 my-4">
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
						{listJadwal.map((event, index) => (
							<tr className="border-b" key={index}>
								<td className="p-4">{event.details}</td>
								<td className="p-4">{event.time}</td>
								<td className="p-4">{event.note}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
