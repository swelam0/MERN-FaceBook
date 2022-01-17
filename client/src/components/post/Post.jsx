import styled from 'styled-components'
import PostTop from './PostTop'
import PostCenter from './PostCenter'
import { useState } from 'react'

const Post = ({ post }) => {
	const [like, setLike] = useState(post.likes)
	const PF = process.env.REACT_APP_PUBLIC_FOLDER

	return (
		<Container>
			<div className='postWrapper'>
				<PostTop post={post} />

				<PostCenter post={post} />

				<div className='postBottom'>
					<div className='postBottomLeft'>
						<img className='likeIcon' src={`${PF}/like.png`} alt='' />
						<img className='likeIcon' src={`${PF}/heart.png`} alt='' />
						<span className='postLikeCounter'>
							{post.likes.length} people like it
						</span>
					</div>
					<div className='postBottomRight'>
						<span className='postCommentText'>25 comments</span>
					</div>
				</div>
			</div>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	border-radius: 10px;
	-webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
	box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
	margin: 30px 0;

	.postWrapper {
		padding: 10px;
	}

	.postBottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.postBottomLeft {
		display: flex;
		align-items: center;
	}

	.likeIcon {
		width: 24px;
		height: 24px;
		margin-right: 5px;
		cursor: pointer;
	}

	.postLikeCounter {
		font-size: 15px;
	}

	.postCommentText {
		cursor: pointer;
		border-bottom: 1px dashed gray;
		font-size: 15px;
	}
`

export default Post
