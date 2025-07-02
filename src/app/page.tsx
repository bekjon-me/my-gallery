import { SignedIn, SignedOut } from "@clerk/nextjs";
import ImagesList from "~/app/_components/ImagesList";

export const dynamic = "force-dynamic";

export default function HomePage() {
	return (
		<div>
			<SignedOut>Please sign in above first</SignedOut>
			<SignedIn>
				<ImagesList />
			</SignedIn>
		</div>
	);
}
