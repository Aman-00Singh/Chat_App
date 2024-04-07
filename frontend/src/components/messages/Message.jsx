import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'

const Message = ({ message }) => {
    //bubble color wla chl rha mtlb send krega msg toh blue show ho rha hai isla mtlb from me thik hai
    //bt msg send krte hi woh msg show nhi kr rha just blue dikha rha hai firr ek baar dusra user pe click krke waps uspe aa rha hai toh jo msg send kiye the woh left me as receiver khud hi aaj rha hai mtlb send bolke kuch smjh nhi arha profile pic bhi nh dikha rha dynamically
    const { authUser } = useAuthContext()
    const { selectedConversation } = useConversation()
    const fromMe = message.senderId === authUser._id
    const chatClassName = fromMe ? "chat-end" : "chat-start"
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
    const bubbleColor = fromMe ? "bg-blue-300" : ""
    return (
        <div className={`chat ${chatClassName}`} >
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profilePic} alt="😊" />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleColor}`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-900'>11:00</div>

        </div>
    )
}

export default Message
