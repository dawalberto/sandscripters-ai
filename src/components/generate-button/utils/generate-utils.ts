import { Page } from '@/components/page-chip/page-chip'
import { urlDomain } from '@/constants'

export const getKeywords = async (webTheme: string) => {
	console.log('🦊 Generando keywords para', webTheme)

	try {
		const response = await fetch(`${urlDomain}/generate-keywords`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ theme: webTheme }),
		})

		const data = await response.json()
		console.log('🦊 keywords data', data)

		if (data.keywords) {
			console.log('🦊 data.keywords', data.keywords)
			return data.keywords
		}
	} catch (error) {
		console.log('🦊 error', error)
		return null
	}

	return null
}

export const getPromptByPage = async ({ page, keywords }: { page: Page; keywords: string }) => {
	console.log('🦊 Generando prompt para la página', page.page, 'con las keywords', keywords)
	// return page + ' ' + keywords

	try {
		const response = await fetch(`${urlDomain}/generate-prompt`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ page: page.page, keywords }),
		})

		const data = await response.json()
		console.log('🦊 data', data)

		if (data.prompt) {
			console.log('🦊 data.prompt', data.prompt)
			return data.prompt
		}

		return null
	} catch (error) {
		console.log('💣🚨 error', error)
		return null
	}
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
