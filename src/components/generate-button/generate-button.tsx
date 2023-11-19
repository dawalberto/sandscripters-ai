'use client'

import { useState } from 'react'
import { LoadingBar } from '../loading-bar/loading-bar'
import { Page } from '../page-chip/page-chip'
import { getImageByPrompt } from './utils/generate-utils'

export const GenerateButton = ({ generationOptions }: GenerateOptions) => {
	const [loading, setLoading] = useState(false)

	const getData = async () => {
		try {
			setLoading(true)
			// await getKeywords({ generationOptions })
			await getImageByPrompt('test')
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
					<div className='w-full h-full absolute top-0 left-0 z-40 bg-white' />
					<div className='z-50'>
						<LoadingBar />
					</div>
				</>
			)}
			<button
				onClick={() => getData()}
				className='bg-indigo-300 w-full mt-4 py-2 tracking-wider text-lg text-indigo-900 transform hover:scale-105 active:scale-100 shadow-md'
			>
				GENERATE
			</button>
		</>
	)
}

export type GenerateOptions = { generationOptions: { webTheme: string; webPages: Page[] } }
