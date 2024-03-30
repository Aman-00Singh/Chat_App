import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from '../../hooks/useLogout';



const Logout = () => {
    const { logout, loading } = useLogout()
    return (
        <div>
            <RiLogoutBoxLine className='w-6 h-6 text-white cursor-pointer'
                onClick={logout} />


        </div>
    )
}

export default Logout
