import styled from 'styled-components'
import Post from '../post/Post'
import Share from '../share/Share'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Feed = ({ userName }) => {
	const [Posts, setPosts] = useState([])

	useEffect(() => {
		const fechtPosts = async () => {
			const res = userName
				? await axios.get(`/posts/profile/${userName}`)
				: await axios.get(`/posts/timeline/61e46c71ed1a293cdc1d6859`)
			setPosts(res.data)
		}

		fechtPosts()
	}, [userName])

	return (
		<Container>
			<div className='feedWrapper'>
				<Share />
				{Posts.map((post) => (
					<Post key={post._id} post={post} />
				))}
			</div>
		</Container>
	)
}
const Container = styled.div`
	flex: 6;
	padding: 0 20px;

	.feedWrapper {
		padding-bottom: 60px;
	}
`

export default Feed
