import styled from 'styled-components'

const ProfileRightbar = () => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER

	return (
		<Container>
			<h4 className='rightbarTitle'>User information</h4>
			<div className='rightbarInfo'>
				<div className='rightbarInfoItem'>
					<span className='rightbarInfoKey'>City:</span>
					<span className='rightbarInfoValue'>New York</span>
				</div>
				<div className='rightbarInfoItem'>
					<span className='rightbarInfoKey'>From:</span>
					<span className='rightbarInfoValue'>Madrid</span>
				</div>
				<div className='rightbarInfoItem'>
					<span className='rightbarInfoKey'>Relationship:</span>
					<span className='rightbarInfoValue'>Single</span>
				</div>
			</div>
			<h4 className='rightbarTitle'>User friends</h4>
			<div className='rightbarFollowings'>
				<div className='rightbarFollowing'>
					<img src={`${PF}/person/1.jpeg`} alt='' className='rightbarFollowingImg' />
					<span className='rightbarFollowingName'>John Carter</span>
				</div>
				<div className='rightbarFollowing'>
					<img src={`${PF}/person/2.jpeg`} alt='' className='rightbarFollowingImg' />
					<span className='rightbarFollowingName'>John Carter</span>
				</div>
				<div className='rightbarFollowing'>
					<img src={`${PF}/person/3.jpeg`} alt='' className='rightbarFollowingImg' />
					<span className='rightbarFollowingName'>John Carter</span>
				</div>
				<div className='rightbarFollowing'>
					<img src={`${PF}/person/4.jpeg`} alt='' className='rightbarFollowingImg' />
					<span className='rightbarFollowingName'>John Carter</span>
				</div>
				<div className='rightbarFollowing'>
					<img src={`${PF}/person/5.jpeg`} alt='' className='rightbarFollowingImg' />
					<span className='rightbarFollowingName'>John Carter</span>
				</div>
				<div className='rightbarFollowing'>
					<img src={`${PF}/person/6.jpeg`} alt='' className='rightbarFollowingImg' />
					<span className='rightbarFollowingName'>John Carter</span>
				</div>
			</div>
		</Container>
	)
}

const Container = styled.div`
	flex: 3;

	.rightbarWrapper {
		padding: 20px 20px 0 0;
	}

	.rightbarTitle {
		margin-bottom: 20px;
	}

	.rightbarFriendList {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.rightbarTitle {
		font-size: 18px;
		font-weight: 500;
		margin-bottom: 10px;
	}

	.rightbarInfo {
		margin-bottom: 30px;
	}

	.rightbarInfoItem {
		margin-bottom: 10px;
	}

	.rightbarInfoKey {
		font-weight: 500;
		margin-right: 15px;
		color: #555;
	}

	.rightbarInfoValue {
		font-weight: 300;
	}

	.rightbarFollowings {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.rightbarFollowing {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
		cursor: pointer;
	}

	.rightbarFollowingImg {
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 5px;
	}
`

export default ProfileRightbar
