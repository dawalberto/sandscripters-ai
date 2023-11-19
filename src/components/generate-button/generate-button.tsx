'use client'

const getPrompt = async (theme: string) => {
	console.log('🦊 Generando prompt para la web sobre', theme)
	const response = await fetch('http://localhost:3001/', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({ theme }),
	})
	const data = await response.json()

	if (data.positive) {
		const images = await fetch(`http://localhost:3000/api?prompt=${data.positive}`)
		const imagesJson = await images.json()
		console.log('🦊 imagesJson', imagesJson)
	}

	console.log('🦊 data', data)
}

export const GenerateButton = ({ generationOptions }: GenerateButton) => {
	return (
		<button
			onClick={() => getPrompt(generationOptions.webTheme)}
			className='bg-indigo-300 w-full mt-4 py-2 tracking-wider text-lg text-indigo-900 rounded-md transform hover:scale-105 active:scale-100 shadow-md'
		>
			GENERATE
		</button>
	)
}

type GenerateButton = { generationOptions: { webTheme: string } }
