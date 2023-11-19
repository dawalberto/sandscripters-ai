'use client'
import { PlusIcon } from '@heroicons/react/24/outline'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { GenerateButton } from '../generate-button/generate-button'
import { KeywordChip } from '../keyword-chip/keyword-chip'
import { Page, PageChip } from '../page-chip/page-chip'

export const CreatePages = ({ webTheme }: { webTheme: string }) => {
	const [pageName, setPageName] = useState('')
	const [pages, setPages] = useState<Page[]>([])

	const [keywordName, setKeywordName] = useState('')
	const [keywords, setKeywords] = useState<string[]>([])

	const handleInputPageNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setPageName(target.value)
	}

	const handleAddPage = () => {
		if (!pageName) {
			return
		}
		setPages((currentPages) => [...currentPages, { page: pageName }])
		setPageName(() => '')
	}

	const handleKeyPress = ({ key }: KeyboardEvent<HTMLInputElement>) => {
		if (key === 'Enter' && pageName) {
			handleAddPage()
		}
	}

	const removePage = (pageName: string) => {
		setPages((pages) => pages.filter(({ page }) => page !== pageName))
	}

	const handleInputKeywordNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setKeywordName(target.value)
	}

	const handleAddKeyword = () => {
		if (!keywordName) {
			return
		}
		setKeywords((currentKeywords) => [...currentKeywords, keywordName])
		setKeywordName(() => '')
	}

	const handleKeyPressKeyword = ({ key }: KeyboardEvent<HTMLInputElement>) => {
		if (key === 'Enter' && keywordName) {
			handleAddKeyword()
		}
	}

	const removeKeyword = (keywordName: string) => {
		setKeywords((keywords) => keywords.filter((keyword) => keyword !== keywordName))
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
					onChange={handleInputPageNameChange}
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

			{/* Keywords */}
			<h1>Keywords</h1>
			<div className='flex w-full space-x-2 items-center'>
				<input
					type='text'
					className='flex-1'
					placeholder='Home'
					value={keywordName}
					onChange={handleInputKeywordNameChange}
					onKeyDown={handleKeyPressKeyword}
				/>
				<button className='h-6 w-6 transform hover:scale-110 cursor-pointer'>
					<PlusIcon onClick={handleAddKeyword} />
				</button>
			</div>
			{keywords && keywords.length > 0 && (
				<div className='flex space-x-2 flex-wrap  gap-2'>
					{keywords.map((keyword) => (
						<div key={keyword} onClick={() => removeKeyword(keyword)}>
							<KeywordChip keyword={keyword} />
						</div>
					))}
				</div>
			)}

			<GenerateButton
				generationOptions={{ webTheme, webPages: pages, userKeywords: keywords.toString() }}
			/>
		</>
	)
}
