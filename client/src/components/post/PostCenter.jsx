import styled from 'styled-components'

const PostCenter = ({ post }) => {
	return (
		<Container>
			<span className='postText'>{post.desc}</span>
			<img className='postImg' src={post.photo} alt='img' />
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
