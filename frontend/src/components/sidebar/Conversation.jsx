import React from 'react'
import { RxAvatar } from "react-icons/rx";
import Conversations from './Conversations';
import useConversation from '../../zustand/useConversation';



const Conversation = ({ conversation, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation()
    const isSelected = selectedConversation?._id === conversation._id;
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-green-300 rounded p-2 py-1 cursor-pointer overflow-x-scroll  ${isSelected ? "bg-green-300" : ""}`}
                onClick={() => setSelectedConversation(conversation)}

            >
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src={conversation.profilepic} alt="user avatar" />

                    </div>

                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-black'>{conversation.fullname}</p>
                        <span className='text-xl text-blue-600' >{emoji}</span>
                    </div>

                </div>

            </div>

            <div className='divider my-0 py-0 h-1'></div>
        </>
    )
}

export default Conversation
