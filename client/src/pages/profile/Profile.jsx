import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import ProfileRightbar from '../../components/profileRightbar/ProfileRightbar'
import styled from 'styled-components'

const Profile = () => {
	return (
		<>
			<Topbar />
			<Container>
				<Sidebar />

				<div className='profileRight'>
					<div className='profileRightTop'>
						<div className='profileCover'>
							<img className='profileCoverImg' src='assets/post/3.jpeg' alt='' />
							<img className='profileUserImg' src='assets/person/7.jpeg' alt='' />
						</div>
						<div className='profileInfo'>
							<h4 className='profileInfoName'>Mohamed Swelam</h4>
							<span className='profileInfoDesc'>Hello my friends!</span>
						</div>
					</div>
					<div className='profileRightBottom'>
						<Feed />

						<ProfileRightbar />
					</div>
				</div>
			</Container>
		</>
	)
}
const Container = styled.div`
	display: flex;

	.profileRight {
		flex: 9;
	}

	.profileCover {
		height: 320px;
		position: relative;
	}

	.profileCoverImg {
		width: 100%;
		height: 250px;
		object-fit: cover;
	}

	.profileUserImg {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		object-fit: cover;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		top: 150px;
		border: 3px solid white;
	}

	.profileInfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.profileInfoName {
		font-size: 24px;
	}

	.profileInfoDesc {
		font-weight: 300;
		margin-bottom: 30px;
	}

	.profileRightBottom {
		display: flex;
	}
`

export default Profile
