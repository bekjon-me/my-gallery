import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function SimpleUploadButton() {
	const router = useRouter();

	return (
		<UploadButton
			endpoint="imageUploader"
			onClientUploadComplete={(res) => {
				// Do something with the response
				console.log("Files: ", res);
				router.refresh();
			}}
			onUploadError={(error: Error) => {
				// Do something with the error.
				alert(`ERROR! ${error.message}`);
			}}
		/>
	);
}
