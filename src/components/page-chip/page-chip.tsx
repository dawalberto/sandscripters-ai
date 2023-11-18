import { BookmarkIcon } from '@heroicons/react/24/outline'

export const PageChip = ({ page }: Page) => {
	return (
		<div className='flex items-center space-x-2 text-sm rounded-lg bg-purple-200 px-2 cursor-pointer'>
			<BookmarkIcon className='w-3 h-3' />
			<span>{page}</span>
		</div>
	)
}

export type Page = { page: string }
