import { useState } from 'react'
import Gender from './Gender'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmpassword: '',
        gender: ''
    })

    const handleCheckbox = (gender) => {
        setInputs({ ...inputs, gender })

    }

    const { loading, signup } = useSignup()

    const handleinput = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }


    return (

        <div className='flex flex-col items center justify-center min-w-96 mx-auto bg-gray-50 rounded-lg'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-500'>SignUp
                    <span className='text-blue-400'>PingMe</span>

                </h1>

                <form onSubmit={handleinput} >

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>FullName</span>
                        </label>

                        <input type="text" placeholder='Enter fullname' className='w-full input input-bordered h-10'
                            value={inputs.fullname}
                            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}

                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Username</span>
                        </label>

                        <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}

                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Password</span>
                        </label>

                        <input type="text" placeholder='Enter password' className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Confirm Password</span>
                        </label>

                        <input type="password" placeholder='confirm password' className='w-full input input-bordered h-10'
                            value={inputs.confirmpassword}
                            onChange={(e) => setInputs({ ...inputs, confirmpassword: e.target.value })}
                        />
                    </div>

                    <Gender onChangecheck={handleCheckbox} selectedgender={inputs.gender} />

                    <button className='btn btn-block btn-sm mt-5'>SignUp</button>
                    <Link to="/login" className='text-black mt-5'>Already have an account?/Login</Link>




                </form>
















            </div>

        </div>
    )
}

export default SignUp
