import { db } from "~/server/db";

export function getImages() {
	const images = db.query.images.findMany({
		orderBy: (model, { desc }) => desc(model.id),
	});

	if (!images) throw new Error("No images found");

	return images;
}
