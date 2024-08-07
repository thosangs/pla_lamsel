export default function Peraturan() {
	return (
		<div className="px-2 py-4">
			<div className="w-full max-w-md bg-background rounded-lg shadow-lg p-6">
				<h2 className="text-2xl font-bold text-primary mb-4">Rules</h2>
				<div className="space-y-4">
					<div>
						<h3 className="text-lg font-semibold text-muted-foreground mb-2">
							Race Participation
						</h3>
						<ol className="list-decimal list-inside text-muted-foreground">
							<li>All drivers must be licensed and insured.</li>
							<li>Drivers must follow all traffic laws and regulations.</li>
							<li>
								Reckless or dangerous driving will result in immediate disqualification.
							</li>
						</ol>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-muted-foreground mb-2">
							Race Scoring
						</h3>
						<ol className="list-decimal list-inside text-muted-foreground">
							<li>
								Drivers will be awarded points based on their finishing position.
							</li>
							<li>
								The driver with the most points at the end of the season will be
								declared the champion.
							</li>
							<li>
								In the event of a tie, the driver with the most race wins will be
								declared the champion.
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
}
