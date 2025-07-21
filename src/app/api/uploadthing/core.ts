import { auth } from "@clerk/nextjs/server";
import { type FileRouter, createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { ratelimit } from "~/server/ratelimit";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
	// Define as many FileRoutes as you like, each with a unique routeSlug
	imageUploader: f({
		image: {
			/**
			 * For full list of options and defaults, see the File Route API reference
			 * @see https://docs.uploadthing.com/file-routes#route-config
			 */
			maxFileSize: "4MB",
			maxFileCount: 40,
		},
	})
		// Set permissions and file types for this FileRoute
		.middleware(async ({ req }) => {
			try {
				const user = await auth();
				console.log("AUTH:", user);

				if (!user?.userId) throw new UploadThingError("Unauthorized");

				const { success } = await ratelimit.limit(user.userId);
				console.log("RATE LIMIT:", success);

				if (!success) throw new UploadThingError("Ratelimited");

				return { userId: user.userId };
			} catch (err) {
				console.error("❌ Middleware error:", err);
				throw new UploadThingError("Middleware failed");
			}
		})
		.onUploadComplete(async ({ metadata, file }) => {
			// This code RUNS ON YOUR SERVER after upload
			console.log("Upload complete for userId:", metadata.userId);

			console.log("file url", file.ufsUrl);

			if (!metadata.userId) throw new UploadThingError("No userId provided");

			await db.insert(images).values({
				name: file.name,
				url: file.ufsUrl,
				userId: metadata.userId,
			});

			// !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
			return { uploadedBy: metadata.userId };
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
