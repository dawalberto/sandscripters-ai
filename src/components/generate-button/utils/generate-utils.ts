import { Page } from '@/components/page-chip/page-chip'
import { GenerateOptions } from '../generate-button'

export const getKeywords = async ({ generationOptions }: GenerateOptions) => {
	const { webTheme, webPages } = generationOptions
	console.log('💣🚨 webTheme, webPages', webTheme, webPages)
	console.log('🦊 Generando keywords para', webTheme)

	return 'bosque, río, naturaleza, amanecer' // mock

	// const response = await fetch('http://localhost:3001/get-key-words', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-type': 'application/json',
	// 	},
	// 	body: JSON.stringify({ theme: webTheme }),
	// })

	// const data = await response.json()

	// if (data.positive) {
	// 	const images = await fetch(`http://localhost:3000/api?prompt=${data.positive}`)
	// 	const imagesJson = await images.json()
	// 	console.log('🦊 imagesJson', imagesJson)
	// }

	// console.log('🦊 data', data)
}

export const getPromptByPage = async (page: Page[]) => {
	console.log('🦊 Generando prompt para la página', page)
	return 'custom promp'

	// try {
	// 	// const response = await fetch('http://localhost:3001/get-prompt', {
	// 	const response = await fetch('http://localhost:3001/', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-type': 'application/json',
	// 		},
	// 		body: JSON.stringify({ theme: page }),
	// 	})

	// 	const data = await response.json()

	// 	if (data.positive) {
	// 		const images = await fetch(`http://localhost:3000/api?prompt=${data.positive}`)
	// 		const imagesJson = await images.json()
	// 		console.log('🦊 imagesJson', imagesJson)
	// 		return imagesJson
	// 	}

	// 	return null
	// } catch (error) {
	// 	console.log('💣🚨 error', error)
	// 	return null
	// }
}

export const getImageByPrompt = async (prompt: string) => {
	console.log('🦊 Generando imágen con el prompt', prompt)

	try {
		const response = await fetch('http://localhost:3000/api/generate-image', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ prompt }),
		})

		const imageData = await response.json()
		console.log('🦊 imageData', imageData)
		return imageData
	} catch (error) {
		console.log('💣🚨 error', error)
		return null
	}
}
