import './loading-bar.css'

export const LoadingBar = () => {
	return (
		<div>
			{/* <h1 className='loadingTitle'>LOADING DREAMS...</h1> */}

			<div className='stage'>
				<ul>
					<li>
						<span>IMAGES</span>
					</li>
				</ul>
				<div className='band'></div>
				<div className='factory'>
					<div className='magic'></div>
					<div className='screen'></div>
				</div>
			</div>
		</div>
	)
}
