"use client";

import { useRouter } from "next/navigation";
import { type ComponentRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const dialogRef = useRef<ComponentRef<"dialog">>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);

	function onDismiss() {
		router.back();
	}

	return createPortal(
		<dialog
			ref={dialogRef}
			className="absolute h-screen w-screen overflow-hidden bg-black/90"
			onClose={onDismiss}
		>
			{children}
			<button type={"button"} onClick={onDismiss} className="close-button">
				Dismiss
			</button>
		</dialog>,
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		document.getElementById("modal-root")!,
	);
}
