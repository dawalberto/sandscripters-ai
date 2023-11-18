const sdk = require('api')('@eden-ai/v2.0#16oiz2r02xlp1ctnbx')

sdk.auth(
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTQ4MmQ1M2EtNTVjZi00YTE4LWFkNmMtZjczMTcyOGRjYTIyIiwidHlwZSI6ImFwaV90b2tlbiJ9.GOlkWwfcx72YBoYThUrLte_QGKXFk10pwa315FlJ8Yc'
)
const provider = 'openai'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const prompt = searchParams.get('prompt')
	const errorResponse: ErrorResponse = { message: 'Something went wrong', result: '' }

	if (!prompt) {
		errorResponse.result = 'The prompt is required'
		return Response.json(errorResponse)
	}

	const result = await sdk.image_generation_create({
		response_as_dict: true,
		attributes_as_list: false,
		show_original_response: false,
		resolution: '1024x1024',
		num_images: 1,
		providers: provider,
		text: prompt,
	})

	errorResponse.result = result

	try {
		const data = result.data[provider]
		if (data && data.items && data.items.length) {
			return Response.json(data.items[0].image_resource_url)
		}
	} catch (error) {
		errorResponse.result = error
	}

	return Response.json(errorResponse)
}

type ErrorResponse = { message: string; result: any }
