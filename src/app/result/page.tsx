/* eslint-disable @next/next/no-img-element */
'use client'

import { localStorageResultKey } from '@/constants'
import { useEffect, useState } from 'react'

export default function Page() {
	const [images, setImages] = useState<{ page: string; image: string }[]>()
	useEffect(() => {
		const resultImages = localStorage.getItem(localStorageResultKey)
		console.log('🦊 resultImages', resultImages)
		if (resultImages) {
			const parsedImages = JSON.parse(resultImages)
			setImages(parsedImages)
		}
	}, [])

	const handleDownload = (page: string, imageToDownload: string) => {
		const downloadLink = document.createElement('a')
		downloadLink.href = imageToDownload
		downloadLink.download = `${page}.png`

		document.body.appendChild(downloadLink)
		downloadLink.click()
		document.body.removeChild(downloadLink)
	}

	return (
		<div className='flex flex-col gap-4 px-6 py-2'>
			{images?.map((image) => (
				<div key={image.page}>
					<h1 className='text-2xl tracking-wider'>{image.page.toUpperCase()}</h1>
					<div className='flex flex-col md:flex-row space-x-2'>
						<div className='relative max-w-full md:w-[70%] border-2 border-indigo-500 rounded-md'>
							<button
								onClick={() => handleDownload(image.page, image.image)}
								className='absolute top-2 right-2 bg-indigo-600 text-white px-4 py-2 rounded-md text-xl'
							>
								Desktop
							</button>
							<img
								className='w-[1024px] h-[1024px] object-cover rounded-md'
								src={image.image}
								alt={image.image}
								loading='lazy'
							/>
						</div>
						<div className='relative max-w-full md:w-[30%] border-2 border-indigo-500 rounded-md'>
							<button
								onClick={() => handleDownload(image.page, image.image)}
								className='absolute top-2 right-2 bg-indigo-600 text-white px-4 py-2 rounded-md text-xl'
							>
								Mobile
							</button>
							<img
								className='w-[600px] h-[1024px] object-cover rounded-md'
								src={image.image}
								alt={image.image}
								loading='lazy'
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
