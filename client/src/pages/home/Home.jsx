import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import styled from 'styled-components'

const Home = () => {
	return (
		<>
			<Topbar />
			<Container>
				<Sidebar />
				<Feed />
				<Rightbar />
			</Container>
		</>
	)
}
const Container = styled.div`
	display: flex;
	padding: 15px;
`

export default Home
