import { SignedIn, SignedOut } from "@clerk/nextjs";
import ImagesList from "~/app/_components/ImagesList";
import TheNav from "~/app/_components/TheNav";

export const dynamic = "force-dynamic";

export default function HomePage() {
	return (
		<div>
			<TheNav />
			<main className="flex min-h-screen flex-col p-4 text-center">
				<SignedOut>Please sign in above first</SignedOut>
				<SignedIn>
					<ImagesList />
				</SignedIn>
			</main>
		</div>
	);
}
