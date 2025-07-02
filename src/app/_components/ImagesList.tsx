import Image from "next/image";
import { getMyImages } from "~/server/queries";

export default async function ImagesList() {
	const images = await getMyImages();

	return (
		<div className="flex flex-wrap gap-4">
			{images.map((image, i) => (
				<div key={image.url}>
					<Image
						className="h-96 w-fit"
						src={image.url}
						alt={image.name}
						width={384}
						height={384}
					/>
					<p>{image.name}</p>
				</div>
			))}
		</div>
	);
}
