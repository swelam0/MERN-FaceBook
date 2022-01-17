import styled from 'styled-components'

const PostCenter = ({ post }) => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER

	return (
		<Container>
			{post.desc && <span className='postText'>{post.desc}</span>}
			{post.img && <img className='postImg' src={post.img} alt='img' />}
		</Container>
	)
}

const Container = styled.div`
	margin: 20px 0;
	.postImg {
		margin-top: 20px;
		width: 100%;
		max-height: 500px;
		object-fit: contain;
	}
`

export default PostCenter
