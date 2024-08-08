import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

import { IconBikeFast } from "@/components/ui/icons";

// Image metadata
export const alt = "PLA Lamsel";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
	return new ImageResponse(
		(
			// ImageResponse JSX element
			<div
				style={{
					fontSize: 128,
					background: "black",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: "red",
				}}
			>
				<span>PLA Lamsel</span>
				<IconBikeFast style={{ display: "inline" }} />
			</div>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			...size,
		}
	);
}
