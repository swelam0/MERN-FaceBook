import styled from 'styled-components'
import { Chat, Notifications, Person } from '@material-ui/icons'

const TopRight = () => {
	return (
		<TopbarRight>
			<div className='topbarLinks'>
				<span className='topbarLink'>Home</span>
				<span className='topbarLink'>Timeline</span>
			</div>

			<div className='topbarIcons'>
				<div className='topbarIconItem'>
					<Person />
					<span>1</span>
				</div>
				<div className='topbarIconItem'>
					<Notifications />
					<span>1</span>
				</div>
				<div className='topbarIconItem'>
					<Chat />
					<span>1</span>
				</div>
			</div>

			<div className='topbarImg'>
				<img src='/assets/person/1.jpeg' alt='profile' />
			</div>
		</TopbarRight>
	)
}

const TopbarRight = styled.div`
	flex: 4;
	display: flex;
	align-items: center;
	justify-content: space-around;
	color: white;

	.topbarLinks {
		margin-right: 10px;
		font-size: 14px;

		.topbarLink {
			cursor: pointer;
			margin-right: 10px;
		}
	}

	.topbarIcons {
		display: flex;
	}

	.topbarIconItem {
		margin-right: 15px;
		cursor: pointer;
		position: relative;

		span {
			width: 15px;
			height: 15px;
			background-color: red;
			border-radius: 50%;
			color: white;
			position: absolute;
			top: -5px;
			left: -5px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 12px;
		}
	}

	.topbarImg {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		cursor: pointer;

		img {
			width: 100%;
		}
	}
`

export default TopRight
