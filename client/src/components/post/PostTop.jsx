import styled from 'styled-components'
import { MoreVert } from '@material-ui/icons'

const PostTop = () => {
	return (
		<Container>
			<div className='postTopLeft'>
				<img className='postProfileImg' src='assets/person/2.jpeg' alt='img' />
				<span className='postUsername'>Jahn Doe</span>
				<span className='postDate'>12/12/2012</span>
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
