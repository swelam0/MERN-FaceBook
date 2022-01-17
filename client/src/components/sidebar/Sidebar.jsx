import styled from 'styled-components'
import {
	Bookmark,
	Chat,
	Event,
	Group,
	HelpOutline,
	PlayCircleFilledOutlined,
	RssFeed,
	School,
	WorkOutline,
} from '@material-ui/icons'
import SidebarFriend from './SidebarFriend'

const Sidebar = () => {
	return (
		<Container>
			<div className='sidebarWrapper'>
				<ul className='sidebarList'>
					<li className='sidebarListItem'>
						<RssFeed />
						<span>Feed</span>
					</li>

					<li className='sidebarListItem'>
						<Chat />
						<span>Chats</span>
					</li>

					<li className='sidebarListItem'>
						<PlayCircleFilledOutlined />
						<span>Videos</span>
					</li>

					<li className='sidebarListItem'>
						<Group />
						<span>Groups</span>
					</li>

					<li className='sidebarListItem'>
						<Bookmark />
						<span>Bookmarks</span>
					</li>

					<li className='sidebarListItem'>
						<HelpOutline />
						<span>Questions</span>
					</li>

					<li className='sidebarListItem'>
						<WorkOutline />
						<span>Jobs</span>
					</li>

					<li className='sidebarListItem'>
						<Event />
						<span>Events</span>
					</li>

					<li className='sidebarListItem'>
						<School />
						<span>Courses</span>
					</li>
				</ul>

				<button className='sidebarButton'>show more</button>

				<SidebarFriend />
			</div>
		</Container>
	)
}
const Container = styled.div`
	flex: 3;
	height: calc(100vh - 50px);
	overflow-y: scroll;
	position: sticky;
	top: 50px;
	padding: 0 20px;
	padding-top: 15px;

	.sidebarWrapper {
	}

	.sidebarList {
		list-style: none;
		margin: 0;
	}

	.sidebarListItem {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		cursor: pointer;

		svg {
			margin-right: 15px;
		}
	}

	.sidebarButton {
		width: 150px;
		border: none;
		padding: 10px;
		border-radius: 5px;
		font-weight: 500;
		margin: 20px 0;
		cursor: pointer;
	}
`
export default Sidebar
