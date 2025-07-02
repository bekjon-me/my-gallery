import Image from "next/image";

export default function ImagesList() {
	const images = [
		"https://guldlsen0t.ufs.sh/f/BpuIyX7ofxOC16j4UdJXzhrk5M4YsGu2g0wxalqnebUCFLpX",
		"https://guldlsen0t.ufs.sh/f/BpuIyX7ofxOCcICFyrk8D5ueWXiMTygwEH3SzGsjJQZ7xObt",
		"https://guldlsen0t.ufs.sh/f/BpuIyX7ofxOC7b3qGCxQtMmJknsXpDLN0I2xWHohuZFi4eq5",
		"https://guldlsen0t.ufs.sh/f/BpuIyX7ofxOCOGlYhrTHQT14c3jdLZrXyuwkxBI9lWJGqF7o",
	];

	return (
		<div className="flex flex-wrap gap-4">
			{images.map((image, i) => (
				<img
					className="h-96 w-fit"
					src={image}
					alt={image}
					key={image}
					width={384}
					height={384}
				/>
			))}
		</div>
	);
}
