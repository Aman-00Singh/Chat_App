import React, { useState } from 'react'
import { FiSend } from "react-icons/fi";
import useSendMessage from '../../hooks/useSendMessage.js';
import { sendMessage } from '../../../../backend/controllers/message_controller';



const MessageInput = () => {

    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage()
    const handleInputs = async (e) => {
        e.preventDefault()
        if (!message) {
            return
        }
        await sendMessage(message)
        setMessage("")

    }
    return (
        <form className='px-4 my-3'
            onSubmit={handleInputs}>
            <div className='w-full relative'>
                <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-900 text-white' placeholder='Send a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}

                />

                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    {loading ? <div className='loading loading-spinner'></div> : <FiSend />}
                </button>
            </div>

        </form>
    )
}

export default MessageInput
