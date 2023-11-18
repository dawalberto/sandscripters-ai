'use client'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Page, PageChip } from '../page-chip/page-chip'

export const CreatePages = () => {
	const [pageName, setPageName] = useState('')
	const [pages, setPages] = useState<Page[]>([])

	const handleInputChange = ({ target }) => {
		setPageName(target.value)
	}

	const handleAddPage = () => {
		setPages((currentPages) => [...currentPages, { page: pageName }])
		setPageName(() => '')
	}

	const handleKeyPress = ({ key }) => {
		if (key === 'Enter') {
			handleAddPage()
		}
	}

	const removePage = (pageName) => {
		setPages((pages) => pages.filter(({ page }) => page !== pageName))
	}

	return (
		<>
			<h1>And it consists of the following pages</h1>
			<div className='flex w-full space-x-2 items-center'>
				<input
					type='text'
					className='flex-1'
					placeholder='Home'
					value={pageName}
					onChange={handleInputChange}
					onKeyDown={handleKeyPress}
				/>
				<button className='h-6 w-6 transform hover:scale-110 cursor-pointer'>
					<PlusIcon onClick={handleAddPage} />
				</button>
			</div>
			{pages && pages.length > 0 && (
				<div className='flex space-x-2 flex-wrap  gap-2'>
					{pages.map(({ page }) => (
						<div key={page} onClick={() => removePage(page)}>
							<PageChip page={page} />
						</div>
					))}
				</div>
			)}
		</>
	)
}
