import styled from 'styled-components'

const SidebarFriend = () => {
	return (
		<Container>
			<li>
				<img src='assets/person/2.jpeg' alt='img' />
				<span>Jahn Doe</span>
			</li>
			<li>
				<img src='assets/person/3.jpeg' alt='img' />
				<span>Jahn Doe</span>
			</li>
			<li>
				<img src='assets/person/2.jpeg' alt='img' />
				<span>Jahn Doe</span>
			</li>
			<li>
				<img src='assets/person/3.jpeg' alt='img' />
				<span>Jahn Doe</span>
			</li>
			<li>
				<img src='assets/person/2.jpeg' alt='img' />
				<span>Jahn Doe</span>
			</li>
			<li>
				<img src='assets/person/3.jpeg' alt='img' />
				<span>Jahn Doe</span>
			</li>
			<li>
				<img src='assets/person/2.jpeg' alt='img' />
				<span>Jahn Doe</span>
			</li>
			<li>
				<img src='assets/person/3.jpeg' alt='img' />
				<span>Jahn Doe</span>
			</li>
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
