import styled from 'styled-components'
import RightOnlineFriends from './RightOnlineFriends'

const Rightbar = () => {
	return (
		<Container>
			<div className='rightbarWrapper'>
				<div className='birthdayContainer'>
					<img src='assets/gift.png' alt='img' />
					<span>
						<b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
					</span>
				</div>
				<img className='rightbarAd' src='assets/ad.png' alt='' />
				<h4 className='rightbarTitle'>Online Friends</h4>
				<RightOnlineFriends />
			</div>
		</Container>
	)
}
const Container = styled.div`
	flex: 3;
	height: calc(100vh-50px);

	.rightbarWrapper {
		padding: 20px 20px 0 0;
	}

	.birthdayContainer {
		display: flex;
		align-items: center;

		img {
			width: 40px;
			height: 40px;
			margin-right: 10px;
		}

		span {
			font-weight: 300;
			font-size: 15px;
		}
	}

	.rightbarAd {
		width: 100%;
		border-radius: 10px;
		margin: 30px 0;
	}

	.rightbarTitle {
		margin-bottom: 20px;
	}
`

export default Rightbar
