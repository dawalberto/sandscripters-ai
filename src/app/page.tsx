import { CreatePages } from '@/components/create-pages/create-pages'

export default function Home() {
	return (
		<div className='w-full sm:w-1/2 md:w-2/5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
			<div className='flex flex-col gap-2 p-4'>
				<h1>Una web sobre...</h1>
				<input type='text' className='w-full' placeholder='Casas prefabricadas' />
				<CreatePages />
			</div>
		</div>
	)
}
