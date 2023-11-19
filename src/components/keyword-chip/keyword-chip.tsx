import { BookmarkIcon } from '@heroicons/react/24/outline'

export const KeywordChip = ({ keyword }: { keyword: string }) => {
	return (
		<div className='flex items-center space-x-2 text-sm rounded-lg bg-green-200 px-2 cursor-pointer'>
			<BookmarkIcon className='w-3 h-3' />
			<span>{keyword}</span>
		</div>
	)
}
