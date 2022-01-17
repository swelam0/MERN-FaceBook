import styled from 'styled-components'
import { Users } from '../../dummyData'

const SidebarFriend = () => {
	return (
		<Container>
			{Users.map((user) => (
				<li key={user.id}>
					<img src={user.profilePicture} alt='img' />
					<span>{user.userName}</span>
				</li>
			))}
		</Container>
	)
}
const Container = styled.ul`
	border-top: 2px solid var(--gray);
	padding-top: 20px;

	li {
		display: flex;
		align-items: center;
		margin-bottom: 15px;
		cursor: pointer;

		img {
			width: 32px;
			height: 32px;
			border-radius: 50%;
			object-fit: cover;
			margin-right: 10px;
		}
	}
`
export default SidebarFriend
