import Image from "next/image";
import { getImages } from "~/server/queries";

export default async function ImagesList() {
	const images = await getImages();

	return (
		<div className="flex flex-wrap gap-4">
			{images.map((image, i) => (
				<Image
					className="h-96 w-fit"
					src={image.url}
					alt={image.name}
					key={image.url}
					width={384}
					height={384}
				/>
			))}
		</div>
	);
}
