import "server-only";

import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";

export async function getMyImages() {
	const user = await auth();
	console.log(user);

	if (!user.userId) throw new Error("Unauthorized");

	const images = db.query.images.findMany({
		where: (model, { eq }) => eq(model.userId, user.userId),
		orderBy: (model, { desc }) => desc(model.id),
	});

	if (!images) throw new Error("No images found");

	return images;
}
