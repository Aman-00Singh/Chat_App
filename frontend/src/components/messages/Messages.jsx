import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'

const Messages = () => {
    const { messages, loading } = useGetMessages()
    console.log("Chit Chats:", messages)

    const userMessages = messages.map((msg) => {
        return (
            <Message key={msg._id} message={msg.message} />
        )
    })
    return (
        <div className='px-4 flex-1 overflow-auto'>
            {loading ? <p>Loading...</p> : userMessages}
        </div>
    )
}

export default Messages
