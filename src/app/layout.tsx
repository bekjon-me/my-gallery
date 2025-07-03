import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";
import { extractRouterConfig } from "uploadthing/server";
import TheNav from "~/app/_components/TheNav";
import { ourFileRouter } from "~/app/api/uploadthing/core";
import { PostHogProvider } from "~/app/provider";

export const metadata: Metadata = {
	title: "Gallery app by Bekjon",
	description: "This is the gallery app by Bekjon. Created using t3-app",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
	modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
	return (
		<ClerkProvider>
			<PostHogProvider>
				<html lang="en" className={`${geist.variable} dark overflow-x-hidden`}>
					<NextSSRPlugin
						/**
						 * The `extractRouterConfig` will extract **only** the route configs
						 * from the router to prevent additional information from being
						 * leaked to the client. The data passed to the client is the same
						 * as if you were to fetch `/api/uploadthing` directly.
						 */
						routerConfig={extractRouterConfig(ourFileRouter)}
					/>
					<body>
						<TheNav />
						<main className="flex min-h-screen flex-col p-4 text-center">
							{children}
							{modal && modal}
						</main>
						<div id="modal-root" />
						<Toaster />
					</body>
				</html>
			</PostHogProvider>
		</ClerkProvider>
	);
}
