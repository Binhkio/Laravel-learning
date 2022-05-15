import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
   
  return (
    <div className='h-screen flex bg-gray-bg1 bg-gradient-to-r from-purple-500 to-pink-500 '>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Register tab
                </h1>

                
                    <div>
                        <label htmlFor='email'>Username</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='text'
                            placeholder='Username'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Confirm Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                            Register
                        </button>
                        
                        
                    </div>
                    <h1 className="font-semibold text-center py-2 px-4">Already have an account?
                    <Link to='/login'>
                    <button className="bg-transparent ml-5 hover:bg-green-500 font-semibold hover:text-white py-0.5 px-1 border border-blue-500 hover:border-transparent rounded" >Login</button>
                    </Link>
                    </h1>
                
            </div>
        </div>
    );
}

export default Register