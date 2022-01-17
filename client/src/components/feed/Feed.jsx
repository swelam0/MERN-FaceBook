import styled from 'styled-components'
import Share from '../share/Share'

const Feed = () => {
	return (
		<Container>
			<div className='feedWrapper'>
				<Share />
			</div>
		</Container>
	)
}
const Container = styled.div`
	flex: 6;
	height: calc(100vh - 50px);
	padding: 0 20px;
`

export default Feed
