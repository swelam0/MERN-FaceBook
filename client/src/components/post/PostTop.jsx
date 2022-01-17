import styled from 'styled-components'
import { MoreVert } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

const PostTop = ({ post }) => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	const [User, setUser] = useState({})

	useEffect(() => {
		const getUser = async () => {
			const res = await axios.get(`/users/${post.userId}`)
			setUser(res.data)
		}

		getUser()
	}, [])

	return (
		<Container>
			<div className='postTopLeft'>
				<Link to={`/profile/${User.userName}`}>
					<img
						className='postProfileImg'
						src={
							User.profilePicture
								? PF + User.profilePicture
								: PF + 'person/noAvatar.png'
						}
						alt='img'
					/>
				</Link>
				<span className='postUsername'>{User.userName}</span>
				<span className='postDate'>{format(post.createdAt)}</span>
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

	.postProfileData {
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
