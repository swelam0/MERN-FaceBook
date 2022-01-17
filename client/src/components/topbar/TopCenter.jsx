import { Search } from '@material-ui/icons'
import styled from 'styled-components'

const TopCenter = () => {
	return (
		<TopbarCenter>
			<div className='searchBar'>
				<Search />
				<input
					type='text'
					className='searchInput'
					placeholder='Search for freinds, post or video'
				/>
			</div>
		</TopbarCenter>
	)
}

const TopbarCenter = styled.div`
	flex: 5;

	.searchBar {
		width: 100%;
		height: 30px;
		background-color: white;
		border-radius: 30px;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	svg {
		font-size: 20px !important;
		margin: 0 5px;
		padding: 0 5px;
		cursor: pointer;
	}

	.searchInput {
		border: none;
		width: 100%;
		height: 100%;
		padding: 0 10px 0 0;

		&:focus {
			outline: none;
		}
	}
`

export default TopCenter
