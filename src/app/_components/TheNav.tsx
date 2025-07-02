"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import SimpleUploadButton from "~/app/_components/UploadButton";

export default function TheNav() {
	return (
		<nav className="flex h-20 items-center justify-between bg-black px-10 text-white">
			<h2 className="text-white text-xl">
				<Link href="/">Gallery</Link>
			</h2>
			<div className="flex items-center gap-4">
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<SimpleUploadButton />
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	);
}
