import styled from 'styled-components'
import Post from '../post/Post'
import Share from '../share/Share'

const Feed = () => {
	return (
		<Container>
			<div className='feedWrapper'>
				<Share />
				<Post />
				<Post />
			</div>
		</Container>
	)
}
const Container = styled.div`
	flex: 6;
	height: calc(100vh - 50px);
	padding: 0 20px;

	.feedWrapper {
		padding-bottom: 60px;
	}
`

export default Feed
