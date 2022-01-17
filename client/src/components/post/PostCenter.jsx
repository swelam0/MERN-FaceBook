import styled from 'styled-components'

const PostCenter = () => {
	return (
		<Container>
			<span className='postText'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quaerat
				dolore blanditiis aperiam reiciendis veritatis molestiae odio architecto
				labore dolorem.
			</span>
			<img className='postImg' src='assets/post/1.jpeg' alt='img' />
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
