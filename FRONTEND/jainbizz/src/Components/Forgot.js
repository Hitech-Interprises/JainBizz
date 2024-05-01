import React from 'react'
import { useNavigate } from 'react-router-dom'


const Forgot = () => {

    const Navigate = useNavigate();

    const handelCancel = () => {
        Navigate('/Login')
    }



    return (
        <div>
            <div class="min-h-screen bg-gray-100 flex items-center justify-center">
                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
                    <h1 class="text-center text-2xl font-bold mb-6">Forgot Password</h1>
                    <form>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="email">
                                Please enter your email address to send Reset Password Link.
                            </label>
                            <div class="focus-within:border-yellow-500 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400" id="email" type="email" placeholder="Enter your email address" />
                            </div>
                        </div>
                        <div class="flex gap-10">
                            <button class="hover:shadow-yellow-500/40 bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-400 hover:to-yellow-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:shadow-xl" type="submit" onClick={handelCancel}>
                                Cancel
                            </button>
                            <button class="hover:shadow-yellow-500/40 py-2 bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-yellow-200 hover:to-yellow-400 text-black font-bold  px-2 rounded focus:outline-none focus:shadow-outline w-full hover:shadow-xl" type="submit">
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forgot
