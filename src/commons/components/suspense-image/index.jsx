"use client";

import { getStaticPicture } from "@/commons/services/static-info"
import { Suspense } from "react"

const SuspenseImage = ({ src, alt }) => {
	return <Suspense fallback={<FallbackImage />}>
		<AsyncImage src={src} alt={alt} />
	</Suspense>
}

const AsyncImage = async ({ src, alt }) => {
	return <img src={await getStaticPicture(src)} alt={alt} />
}

const FallbackImage = () => {
	<div className="min-h-[2em] w-full bg-white"></div>
}

export default SuspenseImage