import styled from 'styled-components'

const RightOnlineFriends = () => {
	return (
		<Container>
			<li>
				<div className='imgContainer'>
					<img src='assets/person/3.jpeg' alt='user' />
				</div>

				<span className='userName'>John Doe</span>
			</li>
			<li>
				<div className='imgContainer'>
					<img src='assets/person/4.jpeg' alt='user' />
				</div>

				<span className='userName'>John Doe</span>
			</li>
			<li>
				<div className='imgContainer'>
					<img src='assets/person/5.jpeg' alt='user' />
				</div>

				<span className='userName'>John Doe</span>
			</li>
			<li>
				<div className='imgContainer'>
					<img src='assets/person/6.jpeg' alt='user' />
				</div>

				<span className='userName'>John Doe</span>
			</li>
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
