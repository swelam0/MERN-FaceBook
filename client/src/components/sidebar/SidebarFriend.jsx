import styled from 'styled-components'
import { Users } from '../../dummyData'

const SidebarFriend = () => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	return (
		<Container>
			{Users.map((user) => (
				<li key={user.id}>
					<img src={PF + user.profilePicture} alt='img' />
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
