import styled from 'styled-components'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

const Share = () => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER
	return (
		<Container>
			<div className='shareWrapper'>
				<div className='shareTop'>
					<img src={`${PF}/person/1.jpeg`} alt='user' />
					<input type='text' placeholder="what's in your mind?" />
				</div>

				<div className='shareBottom'>
					<ul className='shareOptions'>
						<li>
							<PermMedia />
							<span>Photo or Video</span>
						</li>
						<li>
							<Label />
							<span>Tag</span>
						</li>
						<li>
							<Room />
							<span>Location</span>
						</li>
						<li>
							<EmojiEmotions />
							<span>Feelings</span>
						</li>
					</ul>

					<button className='shareButton'>Share</button>
				</div>
			</div>
		</Container>
	)
}
const Container = styled.div`
	width: 100%;
	border-radius: 10px;
	overflow: hidden;
	-webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
	box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
	padding-bottom: 10px;

	.shareWrapper {
		padding: 10px;
	}

	.shareTop {
		display: flex;
		align-items: center;
		padding-bottom: 10px;
		margin-bottom: 20px;
		border-bottom: 1px solid var(--gray);
		overflow: hidden;

		input {
			border: none;
			width: 100%;

			&:focus {
				outline: none;
			}
		}

		img {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			object-fit: cover;
			margin-right: 10px;
		}
	}

	.shareBottom {
		display: flex;
		align-items: center;
		justify-content: space-between;

		ul {
			display: flex;
			margin-left: 20px;
			width: 100%;
			justify-content: space-evenly;

			li:nth-child(1) svg {
				color: red;
			}
			li:nth-child(2) svg {
				color: var(--blue);
			}
			li:nth-child(3) svg {
				color: #116810;
			}
			li:nth-child(4) svg {
				color: #212121;
			}
		}

		li {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 15px;
			cursor: pointer;

			svg {
				font-size: 18px;
				margin-right: 3px;
			}

			span {
				font-size: 14px;
				font-weight: 500;
			}
		}
	}

	.shareButton {
		border: none;
		padding: 7px;
		border-radius: 5px;
		background-color: #025f02;
		font-weight: 500;
		margin-right: 20px;
		width: 120px;
		cursor: pointer;
		color: white;
	}
`

export default Share
