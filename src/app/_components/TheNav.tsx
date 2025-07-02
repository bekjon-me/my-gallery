"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SimpleUploadButton from "~/app/_components/UploadButton";

export default function TheNav() {
	return (
		<nav className="flex h-20 items-center justify-between bg-black px-10 text-white">
			<h2 className="text-white text-xl">Gallery</h2>
			<div className="flex items-center gap-4">
				<SimpleUploadButton />
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	);
}
