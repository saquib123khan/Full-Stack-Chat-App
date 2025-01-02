import ChatBox from '../../components/ChatBox/ChatBox'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import './Chat.css'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat-container'>
        <LeftSideBar/>
        <ChatBox/>
        <RightSideBar/>
      </div>
    </div>
  )
}

export default Chat