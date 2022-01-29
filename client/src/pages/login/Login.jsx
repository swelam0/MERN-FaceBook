import { useRef } from 'react'
import styled from 'styled-components'

const Login = () => {
	const email = useRef('')
	const password = useRef('')

	const handleClick = (e) => {
		e.preventDefault()
		console.log(email.current.value)
	}
	return (
		<Container>
			<div className='loginWrapper'>
				<div className='loginLeft'>
					<h3 className='loginLogo'>Facetok</h3>
					<span className='loginDesc'>
						Connect with friends and the world around you on Lamasocial.
					</span>
				</div>
				<div className='loginRight'>
					<form className='loginBox' onSubmit={handleClick}>
						<input
							placeholder='Email'
							type='email'
							required
							className='loginInput'
							ref={email}
						/>
						<input
							placeholder='Password'
							type='password'
							className='loginInput'
							required
							minLength={6}
							ref={password}
						/>
						<button className='loginButton' type='submit'>
							Log In
						</button>
						<span className='loginForgot'>Forgot Password?</span>
						<button className='loginRegisterButton'>Create a New Account</button>
					</form>
				</div>
			</div>
		</Container>
	)
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #f0f2f5;
	display: flex;
	align-items: center;
	justify-content: center;

	.loginWrapper {
		width: 70%;
		height: 70%;
		display: flex;
	}

	.loginLeft,
	.loginRight {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.loginLogo {
		font-size: 50px;
		font-weight: 800;
		color: #1775ee;
		margin-bottom: 10px;
	}

	.loginDesc {
		font-size: 24px;
	}

	.loginBox {
		height: 400px;
		padding: 20px;
		background-color: white;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.loginInput {
		height: 50px;
		border-radius: 10px;
		border: 1px solid gray;
		font-size: 18px;
		padding-left: 20px;
	}

	.loginInput:focus {
		outline: none;
	}

	.loginButton {
		height: 50px;
		border-radius: 10px;
		border: none;
		background-color: #1775ee;
		color: white;
		font-size: 20px;
		font-weight: 500;
		cursor: pointer;
	}

	.loginForgot {
		text-align: center;
		color: #1775ee;
	}

	.loginRegisterButton {
		width: 60%;
		align-self: center;
		height: 50px;
		border-radius: 10px;
		border: none;
		background-color: #42b72a;
		color: white;
		font-size: 20px;
		font-weight: 500;
		cursor: pointer;
	}
`

export default Login
