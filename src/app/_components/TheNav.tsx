"use client";

export default function TheNav() {
	return (
		<nav className="flex h-20 items-center justify-between bg-black px-10">
			<h2 className="text-white text-xl">Gallery</h2>
			<button type="button" className="text-lg text-white">
				Upload
			</button>
		</nav>
	);
}
