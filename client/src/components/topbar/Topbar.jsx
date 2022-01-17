import styled from 'styled-components'
import TopRight from './TopRight'
import TopCenter from './TopCenter'
import { Link } from 'react-router-dom'

const Topbar = () => {
	return (
		<TopbarContainer>
			<TopbarLeft>
				<Link to='/'>
					<span className='logo'>Facetok</span>
				</Link>
			</TopbarLeft>

			<TopCenter />
			<TopRight />
		</TopbarContainer>
	)
}
const TopbarContainer = styled.div`
	height: 50px;
	width: 100%;
	background-color: #1877f2;
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 99;

	.logo {
		font-size: 24px;
		margin-left: 20px;
		font-weight: bold;
		color: white;
	}
`
const TopbarLeft = styled.div`
	flex: 3;
`

export default Topbar
