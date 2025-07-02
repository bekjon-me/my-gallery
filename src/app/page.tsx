import ImagesList from "~/app/_components/ImagesList";
import TheNav from "~/app/_components/TheNav";

export default function HomePage() {
	return (
		<div>
			<TheNav />
			<main className="flex min-h-screen flex-col p-4">
				<ImagesList />
			</main>
		</div>
	);
}
