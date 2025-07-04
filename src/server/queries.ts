import "server-only";

import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import analyticsServerClient from "~/server/analytics";
import { db } from "~/server/db";
import { images } from "./db/schema";

export async function getMyImages() {
	const user = await auth();

	if (!user.userId) throw new Error("Unauthorized");

	const images = await db.query.images.findMany({
		where: (model, { eq }) => eq(model.userId, user.userId),
		orderBy: (model, { desc }) => desc(model.id),
	});

	if (!images) throw new Error("No images found");

	return images;
}

export async function getImage(id: number) {
	const user = await auth();

	if (!user.userId) throw new Error("Unauthorized");

	const image = await db.query.images.findFirst({
		where: (model, { eq }) => eq(model.id, id),
	});

	if (!image) return null;

	if (image.userId !== user.userId) throw new Error("Unauthorized");

	return image;
}

export async function deleteImage(id: number) {
	const user = await auth();
	if (!user.userId) throw new Error("Unauthorized");

	await db
		.delete(images)
		.where(and(eq(images.id, id), eq(images.userId, user.userId)));

	analyticsServerClient.capture({
		distinctId: user.userId,
		event: "delete image",
		properties: {
			imageId: id,
		},
	});

	revalidatePath("/");
	redirect("/");
}
