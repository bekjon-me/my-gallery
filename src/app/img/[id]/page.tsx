import ImagePreview from "~/app/_components/ImagePreview";

export default async function PhotoModal({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id: photoId } = await params;

	return (
		<div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
			<ImagePreview photoId={photoId} />
		</div>
	);
}
