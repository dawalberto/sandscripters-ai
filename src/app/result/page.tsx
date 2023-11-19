'use client'

import { localStorageResultKey } from '@/constants'
import { useEffect, useState } from 'react'

export default function Page() {
	const [images, setImages] = useState<{ page: string; image: string }[]>()
	useEffect(() => {
		const resultImages = localStorage.getItem(localStorageResultKey)
		console.log('🦊 resultImages', resultImages)
		if (resultImages) {
			setImages(JSON.parse(resultImages))
		}
	}, [])
	return (
		<div>
			CONGRATULATIONS!
			{images?.map((image) => (
				<div key={image.page}>
					<h1>{image.page}</h1>
					<img src={image.image} alt={image.image} />
				</div>
			))}
		</div>
	)
}
