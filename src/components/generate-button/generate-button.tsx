'use client'

import { localStorageResultKey } from '@/constants'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LoadingBar } from '../loading-bar/loading-bar'
import { Page } from '../page-chip/page-chip'
import { getImageByPrompt, getKeywords, getPromptByPage } from './utils/generate-utils'

export const GenerateButton = ({ generationOptions }: GenerateOptions) => {
	const { webTheme, webPages, userKeywords } = generationOptions
	const [loading, setLoading] = useState(false)
	const [loadingMessage, setLoadingMessage] = useState('')
	const router = useRouter()

	const generateImages = async () => {
		const images = []
		try {
			setLoading(true)
			setLoadingMessage(`Generando keywords sobre ${webTheme}`)
			const keywords = await getKeywords(webTheme, userKeywords)

			for (let i = 0; i < webPages.length; i++) {
				let result = await Promise.resolve(
					getImage({
						page: webPages[i],
						keywords,
						updateLoadingMessage: setLoadingMessage,
					})
				)
				images.push({ page: webPages[i].page, image: result })
			}

			console.log('🦊 Las imagenes se han generado correctamente!', images)
			if (localStorage) {
				localStorage.setItem(localStorageResultKey, JSON.stringify(images))
				router.push('/result')
			}
		} catch (error) {
			console.log('💣🚨 error', error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			{loading && (
				<>
					<div className='w-full h-full absolute top-0 left-0 z-30 bg-white' />
					<h1 className='z-50 fixed top-0 left-0 text-center text-3xl w-full text-indigo-600'>
						{loadingMessage}
					</h1>
					<div className='z-40'>
						<LoadingBar />
					</div>
				</>
			)}
			<button
				onClick={() => generateImages()}
				className='bg-indigo-300 w-full mt-4 py-2 tracking-wider text-lg text-indigo-900 transform hover:scale-105 active:scale-100 shadow-md'
			>
				GENERATE
			</button>
		</>
	)
}

export type GenerateOptions = {
	generationOptions: { webTheme: string; webPages: Page[]; userKeywords: string }
}

const getImage = async ({
	page,
	keywords,
	updateLoadingMessage,
}: {
	page: Page
	keywords: string
	updateLoadingMessage: (message: string) => void
}) => {
	console.log('🦊 page', page)
	updateLoadingMessage(`Generando prompt para la página ${page.page}`)
	const prompt = await getPromptByPage({ page, keywords })
	updateLoadingMessage(`Generando imágenes para la página ${page.page}`)
	return await getImageByPrompt(prompt)
}
