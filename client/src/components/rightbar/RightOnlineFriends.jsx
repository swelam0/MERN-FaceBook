import styled from 'styled-components'
import { Users } from '../../dummyData'

const RightOnlineFriends = () => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	return (
		<Container>
			{Users.map((user) => (
				<li key={user.id}>
					<div className='imgContainer'>
						<img src={PF + user.profilePicture} alt='user' />
					</div>

					<span className='userName'>{user.userName}</span>
				</li>
			))}
		</Container>
	)
}

const Container = styled.ul`
	li {
		cursor: pointer;
		display: flex;
		align-items: center;
		margin-bottom: 15px;

		.imgContainer {
			margin-right: 10px;
			position: relative;

			img {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				object-fit: cover;
			}

			&::after {
				position: absolute;
				content: '';
				background-color: green;
				width: 10px;
				height: 10px;
				border-radius: 50%;
				top: -2px;
				left: 27px;
			}
		}

		.userName {
		}
	}
`

export default RightOnlineFriends
