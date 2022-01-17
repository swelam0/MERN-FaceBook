import styled from 'styled-components'
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../dummyData'

const PostTop = ({ post }) => {
	const userData = Users.map((user) => {
		if (user.id === post.userId) {
			return (
				<>
					<img className='postProfileImg' src={user.profilePicture} alt='img' />
					<span className='postUsername'>{user.userName}</span>
				</>
			)
		}
	})

	return (
		<Container>
			<div className='postTopLeft'>
				{userData}
				<span className='postDate'>{post.date}</span>
			</div>
			<div className='postTopRight'>
				<MoreVert />
			</div>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	.postTopLeft {
		display: flex;
		align-items: center;
	}

	.postProfileImg {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		object-fit: cover;
	}

	.postUsername {
		font-size: 15px;
		font-weight: 500;
		margin: 0 10px;
	}

	.postDate {
		font-size: 12px;
	}

	.postTopRight {
		svg {
			cursor: pointer;
		}
	}
`

export default PostTop
