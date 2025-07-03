import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function NotFound() {
	return (
		<div>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/">
				<Button variant="outline">Return Home</Button>
			</Link>
		</div>
	);
}
