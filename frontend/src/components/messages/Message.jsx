import React from 'react'

const Message = (props) => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src="#" alt="😑" />
                </div>
            </div>
            <div className='chat-bubble text-black bg-blue-400'>{props.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-900'>11:00</div>

        </div>
    )
}

export default Message
